import { db } from '../db.js';

export class OrganizationRepository {
  async findById(id: string) {
    return db.organization.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return db.organization.update({ where: { id }, data });
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
