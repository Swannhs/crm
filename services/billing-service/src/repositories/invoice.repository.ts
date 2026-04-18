import type { Prisma, PrismaClient } from '@prisma/client';
import { db } from '../db.js';

export class InvoiceRepository {
  constructor(private readonly client: PrismaClient | Prisma.TransactionClient = db) {}

  async findManyByOrgId(
    orgId: string,
    params: {
      status?: string;
      contactId?: string;
      skip: number;
      take: number;
    }
  ) {
    const where: Prisma.InvoiceWhereInput = { orgId };
    if (params.status) {
      where.status = params.status;
    }
    if (params.contactId) {
      where.contactId = params.contactId;
    }

    const [data, total] = await Promise.all([
      this.client.invoice.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: params.skip,
        take: params.take,
        include: { payments: true },
      }),
      this.client.invoice.count({ where }),
    ]);

    return { data, total };
  }

  async findUnique(id: string, orgId: string) {
    return this.client.invoice.findFirst({
      where: { id, orgId },
      include: { payments: true },
    });
  }

  async create(data: Prisma.InvoiceCreateInput) {
    return this.client.invoice.create({ data });
  }

  async update(id: string, data: Prisma.InvoiceUpdateInput) {
    return this.client.invoice.update({
      where: { id },
      data,
    });
  }
}
