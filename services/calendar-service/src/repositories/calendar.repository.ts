import { db } from '../db.js';

export class CalendarRepository {
  async findMany(orgId: string, userId: string) {
    return db.calendar.findMany({
      where: { orgId, userId },
      orderBy: { name: "asc" }
    });
  }

  async findUnique(id: string, orgId: string, userId: string) {
    return db.calendar.findFirst({
      where: { id, orgId, userId }
    });
  }

  async create(data: any) {
    return db.calendar.create({ data });
  }

  async update(id: string, orgId: string, userId: string, data: any) {
    return db.calendar.updateMany({
      where: { id, orgId, userId },
      data
    });
  }

  async delete(id: string, orgId: string, userId: string) {
    return db.calendar.deleteMany({
      where: { id, orgId, userId }
    });
  }
}
