import { db } from '../db.js';

export class InvoiceRepository {
  async findManyByOrgId(orgId: string) {
    return db.invoice.findMany({
      where: { orgId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findUnique(id: string, orgId: string) {
    return db.invoice.findUnique({
      where: { id_orgId: { id, orgId } }, // Assuming compound unique or just filter
    });
  }

  async create(data: any) {
    return db.invoice.create({ data });
  }

  async update(id: string, data: any) {
    return db.invoice.update({
      where: { id },
      data,
    });
  }
}
