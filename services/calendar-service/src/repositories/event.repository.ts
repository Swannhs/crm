import { db } from '../db.js';

export class EventRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.event.findMany({
        where,
        orderBy: { startDate: "asc" },
        skip,
        take,
        include: { category: true }
      }),
      db.event.count({ where })
    ]);
    return { data, total };
  }

  async findUnique(id: string, orgId: string) {
    return db.event.findFirst({
      where: { id, orgId, isDeleted: false },
      include: { category: true, scheduleItems: true }
    });
  }

  async create(data: any) {
    return db.event.create({ data });
  }

  async update(id: string, orgId: string, data: any) {
    return db.event.updateMany({
      where: { id, orgId },
      data
    });
  }

  async delete(id: string, orgId: string) {
    return db.event.updateMany({
      where: { id, orgId },
      data: { isDeleted: true }
    });
  }
}
