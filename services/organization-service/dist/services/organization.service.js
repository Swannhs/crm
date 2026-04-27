import { OrganizationRepository, LocationRepository, OnboardingRepository, MembershipRepository, } from '../repositories/organization.repository.js';
const VALID_ORG_ROLES = ['org_owner', 'org_admin', 'org_manager', 'org_staff', 'org_viewer'];
export class OrganizationService {
    orgRepo = new OrganizationRepository();
    async getOrganization(orgId, userId) {
        const org = await this.orgRepo.findById(orgId);
        if (org) {
            if (userId) {
                const membershipSvc = new MembershipService();
                await membershipSvc.resolveMembership(orgId, userId);
            }
            return org;
        }
        // Compatibility behavior: legacy flows often assume an org shell exists
        // once an authenticated org_id is present, even if the microservice DB
        // has not been explicitly seeded for that tenant yet.
        const created = await this.orgRepo.create({
            id: orgId,
            name: 'Organization',
            slug: null,
            metadata: {},
        });
        if (userId) {
            const membershipSvc = new MembershipService();
            await membershipSvc.resolveMembership(orgId, userId);
        }
        return created;
    }
    async updateOrganization(orgId, userId, name) {
        await this.getOrganization(orgId, userId);
        return this.orgRepo.update(orgId, { name });
    }
}
export class LocationService {
    locationRepo = new LocationRepository();
    orgSvc = new OrganizationService();
    async getLocations(orgId, userId) {
        await this.orgSvc.getOrganization(orgId, userId);
        return this.locationRepo.findMany(orgId);
    }
    async createLocation(orgId, userId, data) {
        await this.orgSvc.getOrganization(orgId, userId);
        return this.locationRepo.create({
            organizationId: orgId,
            name: data.name,
            email: data.email,
            phone: data.phone,
            street: data.street,
            city: data.city,
            state: data.state,
            zipCode: data.zip_code,
            country: data.country
        });
    }
}
export class OnboardingService {
    onboardingRepo = new OnboardingRepository();
    async getStatuses(userId) {
        return this.onboardingRepo.findManyByUser(userId);
    }
    async createStatus(userId, data) {
        if (!data.tourStepId) {
            throw new Error('tourStepId is required');
        }
        const existing = await this.onboardingRepo.findUnique(userId, String(data.tourStepId));
        if (existing) {
            throw new Error('Tour already visited');
        }
        return this.onboardingRepo.create({
            userId,
            tourStepId: String(data.tourStepId),
            tourCompleted: Boolean(data.tourCompleted),
        });
    }
}
export class MembershipService {
    membershipRepo = new MembershipRepository();
    orgRepo = new OrganizationRepository();
    async resolveMembership(orgId, userId) {
        const org = await this.orgRepo.findById(orgId);
        if (!org) {
            await this.orgRepo.create({
                id: orgId,
                name: 'Organization',
                slug: null,
                metadata: {},
            });
        }
        const existing = await this.membershipRepo.findByUser(orgId, userId);
        if (existing) {
            return existing;
        }
        const membershipCount = await this.orgRepo.countMemberships(orgId);
        if (membershipCount === 0) {
            return this.membershipRepo.create({
                organizationId: orgId,
                userId,
                role: 'org_owner',
                permissions: [],
                metadata: { bootstrapped: true },
            });
        }
        return null;
    }
    async listMemberships(orgId, requesterUserId) {
        await this.resolveMembership(orgId, requesterUserId);
        return this.membershipRepo.findMany(orgId);
    }
    async upsertMembership(orgId, requesterUserId, userId, data) {
        await this.resolveMembership(orgId, requesterUserId);
        const role = String(data.role || '').trim();
        if (!VALID_ORG_ROLES.includes(role)) {
            throw new Error('Invalid organization role');
        }
        const permissions = Array.isArray(data.permissions) ? data.permissions : [];
        return this.membershipRepo.upsert(orgId, userId, {
            role,
            permissions,
            metadata: data.metadata ?? {},
        });
    }
}
