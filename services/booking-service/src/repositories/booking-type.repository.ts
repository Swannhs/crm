import { db } from '../db.js';

export class BookingTypeRepository {
  async findMany(orgId: string) {
    return db.bookingType.findMany({
      where: { org_id: orgId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findUnique(id: string) {
    return db.bookingType.findUnique({ where: { id } });
  }

  async findByLink(link: string) {
    return db.bookingType.findFirst({ where: { link } });
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
