import { db } from '../db.js';

export class OrganizationRepository {
  async findById(id: string) {
    return db.organization.findUnique({ where: { id } });
  }

  async create(data: any) {
    return db.organization.create({ data });
  }

  async update(id: string, data: any) {
    return db.organization.update({ where: { id }, data });
  }

  async countMemberships(orgId: string) {
    return db.organizationMembership.count({ where: { organizationId: orgId } });
  }
}

export class LocationRepository {
  async findMany(orgId: string) {
    return db.location.findMany({ where: { organizationId: orgId }, orderBy: { name: 'asc' } });
  }

  async create(data: any) {
    return db.location.create({ data });
  }
}

export class OnboardingRepository {
  async findManyByUser(userId: string) {
    return db.onboardingStatus.findMany({ where: { userId }, orderBy: { createdAt: 'asc' } });
  }

  async findUnique(userId: string, tourStepId: string) {
    return db.onboardingStatus.findUnique({
      where: { userId_tourStepId: { userId, tourStepId } },
    });
  }

  async create(data: any) {
    return db.onboardingStatus.create({ data });
  }
}

export class MembershipRepository {
  async findByUser(orgId: string, userId: string) {
    return db.organizationMembership.findUnique({
      where: { organizationId_userId: { organizationId: orgId, userId } },
    });
  }

  async findMany(orgId: string) {
    return db.organizationMembership.findMany({
      where: { organizationId: orgId },
      orderBy: [{ role: 'asc' }, { createdAt: 'asc' }],
    });
  }

  async create(data: any) {
    return db.organizationMembership.create({ data });
  }

  async upsert(orgId: string, userId: string, data: any) {
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
}
