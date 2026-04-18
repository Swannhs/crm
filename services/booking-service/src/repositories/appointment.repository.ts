import { db } from '../db.js';

export class AppointmentRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.appointment.findMany({
        where,
        orderBy: { start_datetime: "desc" },
        skip,
        take
      }),
      db.appointment.count({ where })
    ]);
    return { data, total };
  }

  async findUnique(id: string) {
    return db.appointment.findUnique({ where: { id } });
  }

  async create(data: any) {
    return db.appointment.create({ data });
  }

  async update(id: string, data: any) {
    return db.appointment.update({ where: { id }, data });
  }

  async updateMany(where: any, data: any) {
    return db.appointment.updateMany({ where, data });
  }
}
