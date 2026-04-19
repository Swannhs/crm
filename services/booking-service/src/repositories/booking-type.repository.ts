import { db } from '../db.js';

export class BookingTypeRepository {
  async findMany(orgId: string) {
    return db.bookingType.findMany({
      where: { org_id: orgId },
      orderBy: { created_at: 'desc' }
    });
  }

  async count(orgId: string) {
    return db.bookingType.count({
      where: { org_id: orgId }
    });
  }

  async findUnique(id: string) {
    return db.bookingType.findUnique({ where: { id } });
  }

  async findByLink(orgId: string, link: string) {
    return db.bookingType.findFirst({
      where: {
        org_id: orgId,
        link
      }
    });
  }

  async create(data: any) {
    return db.bookingType.create({ data });
  }

  async update(id: string, data: any) {
    return db.bookingType.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.bookingType.delete({ where: { id } });
  }
}
