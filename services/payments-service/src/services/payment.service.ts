import {
  InvoiceRepository,
  PaymentRepository,
  InvoiceActivityRepository,
  DepositRepository,
  CheckoutPageRepository,
  QrPayPageRepository,
} from '../repositories/payment.repository.js';

export class InvoiceService {
  private invoiceRepo = new InvoiceRepository();
  private paymentRepo = new PaymentRepository();
  private activityRepo = new InvoiceActivityRepository();

  async getInvoices(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    const where: any = { org_id: orgId, is_delete: false };
    if (filters.status) where.status = filters.status;
    if (filters.contact_id) where.contact_id = filters.contact_id;
    return this.invoiceRepo.findMany(where, (page - 1) * limit, limit);
  }

  async createInvoice(orgId: string, userId: string, data: any) {
    const totalCents = (data.amount_cents || 0) + (data.tax_cents || 0) - (data.discount_cents || 0);
    return this.invoiceRepo.create({
      org_id: orgId,
      created_by_user_id: userId,
      contact_id: data.contact_id,
      title: data.title,
      invoice_number: data.invoice_number,
      line_items: data.line_items || [],
      amount_cents: BigInt(data.amount_cents || 0),
      tax_cents: BigInt(data.tax_cents || 0),
      discount_cents: BigInt(data.discount_cents || 0),
      total_cents: BigInt(totalCents),
      currency: data.currency || "USD",
      due_date: data.due_date ? new Date(data.due_date) : null,
      metadata: data.metadata || {}
    });
  }

  async getStats(orgId: string) {
    const [summary, byStatus] = await Promise.all([
      this.invoiceRepo.summarize(orgId),
      this.invoiceRepo.groupByStatus(orgId),
    ]);

    const totalRevenueCents = Number(summary._sum.total_cents ?? summary._sum.amount_cents ?? 0n);
    const paidCents = Number(summary._sum.paid_cents ?? 0n);
    const outstandingCents = Math.max(totalRevenueCents - paidCents, 0);

    return {
      invoiceCount: summary._count ?? 0,
      totalRevenue: totalRevenueCents / 100,
      paid: paidCents / 100,
      outstanding: outstandingCents / 100,
      byStatus: byStatus.map((item) => ({
        status: item.status,
        count: typeof item._count === 'number' ? item._count : item._count?.status ?? 0,
        total: Number(item._sum?.total_cents ?? 0n) / 100,
      })),
    };
  }

  async recordPayment(invoiceId: string, orgId: string, userId: string, data: any) {
    const invoice = await this.invoiceRepo.findUnique(invoiceId, orgId);
    if (!invoice) throw new Error('Not found');

    const payment = await this.paymentRepo.create({
      invoice_id: invoice.id, org_id: orgId, created_by_user_id: userId,
      amount_cents: BigInt(data.amount_cents),
      method: data.method || "cash",
      reference: data.reference, notes: data.notes
    });

    const newPaid = invoice.paid_cents + BigInt(data.amount_cents);
    const newStatus = newPaid >= invoice.total_cents ? "paid" : invoice.status;
    await this.invoiceRepo.update(invoice.id, {
      paid_cents: newPaid, status: newStatus,
      ...(newStatus === "paid" && { paid_at: new Date() })
    });

    await this.activityRepo.create({
      invoice_id: invoice.id, org_id: orgId, user_id: userId, action: "payment_added",
      note: `Payment of ${data.amount_cents} cents via ${data.method || "cash"}`
    });

    return payment;
  }
}

export class DepositService {
  private depositRepo = new DepositRepository();

  async getDeposits(orgId: string) { return this.depositRepo.findMany(orgId); }

  async createDeposit(orgId: string, userId: string, data: any) {
    return this.depositRepo.create({
      org_id: orgId, created_by_user_id: userId, contact_id: data.contact_id,
      amount_cents: BigInt(data.amount_cents), currency: data.currency || "USD",
      description: data.description, payment_method: data.payment_method
    });
  }
}

export class CheckoutPageService {
  private checkoutRepo = new CheckoutPageRepository();

  async getPublicPage(slug: string) {
    const page = await this.checkoutRepo.findPublicBySlug(slug);
    if (!page) throw new Error("Not found");
    return page;
  }

  async trackPublicEvent(slug: string, data: any) {
    const page = await this.checkoutRepo.findPublicBySlug(slug);
    if (!page) throw new Error("Not found");

    return this.checkoutRepo.createEvent({
      checkoutPageId: page.id,
      eventType: data.event_type || "view",
      customerEmail: data.email || null,
      customerPhone: data.phone || null,
      amountCents: data.amount ? BigInt(Math.round(Number(data.amount) * 100)) : null,
      payload: data || {},
    });
  }
}

export class QrPayPageService {
  private qrPayRepo = new QrPayPageRepository();

  async getPublicPage(slug: string) {
    const page = await this.qrPayRepo.findPublicBySlug(slug);
    if (!page) throw new Error("Not found");
    return page;
  }

  async trackPublicPayment(slug: string, data: any) {
    const page = await this.qrPayRepo.findPublicBySlug(slug);
    if (!page) throw new Error("Not found");

    return this.qrPayRepo.createTransaction({
      qrPayPageId: page.id,
      amountCents: data.amount ? BigInt(Math.round(Number(data.amount) * 100)) : page.defaultAmountCents ?? null,
      customerEmail: data.email || null,
      customerPhone: data.phone || null,
      status: "tracked",
      metadata: data || {},
    });
  }
}
