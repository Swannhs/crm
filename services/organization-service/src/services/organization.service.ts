import {
  OrganizationRepository,
  LocationRepository,
  OnboardingRepository,
  MembershipRepository,
} from '../repositories/organization.repository.js';

const VALID_ORG_ROLES = ['org_owner', 'org_admin', 'org_manager', 'org_staff', 'org_viewer'];

export class OrganizationService {
  private orgRepo = new OrganizationRepository();

  async getOrganization(orgId: string, userId?: string) {
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

  async updateOrganization(orgId: string, userId: string, name: string) {
    await this.getOrganization(orgId, userId);
    return this.orgRepo.update(orgId, { name });
  }
}

export class LocationService {
  private locationRepo = new LocationRepository();
  private orgSvc = new OrganizationService();

  async getLocations(orgId: string, userId: string) {
    await this.orgSvc.getOrganization(orgId, userId);
    return this.locationRepo.findMany(orgId);
  }

  async createLocation(orgId: string, userId: string, data: any) {
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
  private onboardingRepo = new OnboardingRepository();

  async getStatuses(userId: string) {
    return this.onboardingRepo.findManyByUser(userId);
  }

  async createStatus(userId: string, data: any) {
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
  private membershipRepo = new MembershipRepository();
  private orgRepo = new OrganizationRepository();

  async resolveMembership(orgId: string, userId: string) {
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

  async listMemberships(orgId: string, requesterUserId: string) {
    await this.resolveMembership(orgId, requesterUserId);
    return this.membershipRepo.findMany(orgId);
  }

  async upsertMembership(orgId: string, requesterUserId: string, userId: string, data: any) {
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
