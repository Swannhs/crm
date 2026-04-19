import { db } from '../db.js';

export class InvoiceRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.invoice.findMany({ where, orderBy: { created_at: "desc" }, skip, take, include: { payments: true } }),
      db.invoice.count({ where })
    ]);
    return { data, total };
  }

  async findUnique(id: string, orgId: string) {
    return db.invoice.findFirst({
      where: { id, org_id: orgId },
      include: { payments: true, activities: { orderBy: { created_at: "desc" } } }
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

  async summarize(orgId: string) {
    return db.invoice.aggregate({
      where: { org_id: orgId, is_delete: false },
      _count: true,
      _sum: {
        amount_cents: true,
        total_cents: true,
        paid_cents: true,
      },
    });
  }
}

export class PaymentRepository {
  async create(data: any) { return db.payment.create({ data }); }
}

export class InvoiceActivityRepository {
  async create(data: any) { return db.invoiceActivity.create({ data }); }
  async findByInvoice(invoiceId: string, orgId: string) {
    return db.invoiceActivity.findMany({ where: { invoice_id: invoiceId, org_id: orgId }, orderBy: { created_at: "desc" } });
  }
}

export class DepositRepository {
  async findMany(orgId: string) {
    return db.deposit.findMany({ where: { org_id: orgId, is_deleted: false }, orderBy: { created_at: "desc" } });
  }
  async findUnique(id: string, orgId: string) {
    return db.deposit.findFirst({ where: { id, org_id: orgId } });
  }
  async create(data: any) { return db.deposit.create({ data }); }
  async softDelete(id: string) {
    return db.deposit.update({ where: { id }, data: { is_deleted: true } });
  }
}

export class CheckoutPageRepository {
  async findPublicBySlug(slug: string) {
    return db.checkoutPage.findFirst({
      where: { slug, isArchived: false, status: "published" },
      orderBy: { createdAt: "desc" },
    });
  }

  async createEvent(data: any) {
    return db.checkoutPageEvent.create({ data });
  }
}

export class QrPayPageRepository {
  async findPublicBySlug(slug: string) {
    return db.qrPayPage.findFirst({
      where: { slug, isArchived: false, status: "published" },
      orderBy: { createdAt: "desc" },
    });
  }

  async createTransaction(data: any) {
    return db.qrPayTransaction.create({ data });
  }
}
