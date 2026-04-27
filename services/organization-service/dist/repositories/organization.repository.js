import { db } from '../db.js';
export class OrganizationRepository {
    async findById(id) {
        return db.organization.findUnique({ where: { id } });
    }
    async create(data) {
        return db.organization.create({ data });
    }
    async update(id, data) {
        return db.organization.update({ where: { id }, data });
    }
    async countMemberships(orgId) {
        return db.organizationMembership.count({ where: { organizationId: orgId } });
    }
}
export class LocationRepository {
    async findMany(orgId) {
        return db.location.findMany({ where: { organizationId: orgId }, orderBy: { name: 'asc' } });
    }
    async create(data) {
        return db.location.create({ data });
    }
}
export class OnboardingRepository {
    async findManyByUser(userId) {
        return db.onboardingStatus.findMany({ where: { userId }, orderBy: { createdAt: 'asc' } });
    }
    async findUnique(userId, tourStepId) {
        return db.onboardingStatus.findUnique({
            where: { userId_tourStepId: { userId, tourStepId } },
        });
    }
    async create(data) {
        return db.onboardingStatus.create({ data });
    }
}
export class MembershipRepository {
    async findByUser(orgId, userId) {
        return db.organizationMembership.findUnique({
            where: { organizationId_userId: { organizationId: orgId, userId } },
        });
    }
    async findMany(orgId) {
        return db.organizationMembership.findMany({
            where: { organizationId: orgId },
            orderBy: [{ role: 'asc' }, { createdAt: 'asc' }],
        });
    }
    async create(data) {
        return db.organizationMembership.create({ data });
    }
    async upsert(orgId, userId, data) {
        return db.organizationMembership.upsert({
            where: { organizationId_userId: { organizationId: orgId, userId } },
            create: {
                organizationId: orgId,
                userId,
                ...data,
            },
            update: data,
        });
    }
    async delete(orgId, userId) {
        return db.organizationMembership.delete({
            where: { organizationId_userId: { organizationId: orgId, userId } },
        });
    }
}
