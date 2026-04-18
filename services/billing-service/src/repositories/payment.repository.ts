import { db } from '../db.js';

export class PaymentRepository {
  async findManyByOrgId(orgId: string) {
    return db.payment.findMany({
      where: { orgId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: any) {
    return db.payment.create({ data });
  }

  async withTransaction(callback: (tx: any) => Promise<any>) {
    return db.$transaction(callback);
  }
}
