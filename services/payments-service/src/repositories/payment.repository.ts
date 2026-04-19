import { db } from '../db.js';

export class InvoiceRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.invoice.findMany({ where, orderBy: { createdAt: "desc" }, skip, take, include: { payments: true } }),
      db.invoice.count({ where })
    ]);
    return { data, total };
  }

  async findUnique(id: string, orgId: string) {
    return db.invoice.findFirst({
      where: { id, orgId },
      include: { payments: true, activities: { orderBy: { createdAt: "desc" } } }
    });
  }

  async create(data: any) { return db.invoice.create({ data }); }
  async update(id: string, data: any) { return db.invoice.update({ where: { id }, data }); }
  async groupByStatus(orgId: string) {
    return db.invoice.groupBy({
      by: ["status"],
      where: { org_id: orgId, is_delete: false },
      _count: true,
      _sum: { total_cents: true },
    });
  }
}

export class PaymentRepository {
  async create(data: any) { return db.payment.create({ data }); }
}

export class InvoiceActivityRepository {
  async create(data: any) { return db.invoiceActivity.create({ data }); }
  async findByInvoice(invoiceId: string, orgId: string) {
    return db.invoiceActivity.findMany({ where: { invoiceId, orgId }, orderBy: { createdAt: "desc" } });
  }
}

export class DepositRepository {
  async findMany(orgId: string) {
    return db.deposit.findMany({ where: { orgId, isDeleted: false }, orderBy: { createdAt: "desc" } });
  }
  async findUnique(id: string, orgId: string) {
    return db.deposit.findFirst({ where: { id, orgId } });
  }
  async create(data: any) { return db.deposit.create({ data }); }
  async softDelete(id: string) {
    return db.deposit.update({ where: { id }, data: { isDeleted: true } });
  }
}
