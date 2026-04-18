import { db } from '../db.js';

export class OrderRepository {
  async findMany(orgId: string) {
    return db.order.findMany({
      where: { orgId },
      orderBy: { createdAt: 'desc' },
      include: { items: true }
    });
  }

  async findUnique(id: string, orgId: string) {
    return db.order.findFirst({
      where: { id, orgId },
      include: { items: true }
    });
  }

  async createWithItems(data: any, items: any[]) {
    return db.order.create({
      data: {
        ...data,
        items: {
          create: items
        }
      },
      include: { items: true }
    });
  }

  async withTransaction(callback: (tx: any) => Promise<any>) {
    return db.$transaction(callback);
  }
}
