import type { Prisma, PrismaClient } from '@prisma/client';
import { db } from '../db.js';

export class PaymentRepository {
  constructor(private readonly client: PrismaClient | Prisma.TransactionClient = db) {}

  async findManyByOrgId(
    orgId: string,
    params: { skip: number; take: number }
  ) {
    const where: Prisma.PaymentWhereInput = { orgId };
    const [data, total] = await Promise.all([
      this.client.payment.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: params.skip,
        take: params.take,
        include: { invoice: true },
      }),
      this.client.payment.count({ where }),
    ]);

    return { data, total };
  }

  async create(data: Prisma.PaymentCreateInput) {
    return this.client.payment.create({ data });
  }

  async withTransaction<T>(callback: (tx: Prisma.TransactionClient) => Promise<T>) {
    return db.$transaction(callback);
  }
}
