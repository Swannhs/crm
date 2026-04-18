import { InvoiceRepository, PaymentRepository, InvoiceActivityRepository, DepositRepository } from '../repositories/payment.repository.js';

export class InvoiceService {
  private invoiceRepo = new InvoiceRepository();
  private paymentRepo = new PaymentRepository();
  private activityRepo = new InvoiceActivityRepository();

  async getInvoices(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    const where: any = { orgId, isDelete: false };
    if (filters.status) where.status = filters.status;
    if (filters.contact_id) where.contactId = filters.contact_id;
    return this.invoiceRepo.findMany(where, (page - 1) * limit, limit);
  }

  async createInvoice(orgId: string, userId: string, data: any) {
    const totalCents = (data.amount_cents || 0) + (data.tax_cents || 0) - (data.discount_cents || 0);
    return this.invoiceRepo.create({
      orgId,
      createdByUserId: userId,
      contactId: data.contact_id,
      title: data.title,
      invoiceNumber: data.invoice_number,
      lineItems: data.line_items || [],
      amountCents: BigInt(data.amount_cents || 0),
      taxCents: BigInt(data.tax_cents || 0),
      discountCents: BigInt(data.discount_cents || 0),
      totalCents: BigInt(totalCents),
      currency: data.currency || "USD",
      dueDate: data.due_date ? new Date(data.due_date) : null,
      metadata: data.metadata || {}
    });
  }

  async getStats(orgId: string) {
    return this.invoiceRepo.groupByStatus(orgId);
  }

  async recordPayment(invoiceId: string, orgId: string, userId: string, data: any) {
    const invoice = await this.invoiceRepo.findUnique(invoiceId, orgId);
    if (!invoice) throw new Error('Not found');

    const payment = await this.paymentRepo.create({
      invoiceId: invoice.id, orgId, createdByUserId: userId,
      amountCents: BigInt(data.amount_cents),
      method: data.method || "cash",
      reference: data.reference, notes: data.notes
    });

    const newPaid = invoice.paidCents + BigInt(data.amount_cents);
    const newStatus = newPaid >= invoice.totalCents ? "paid" : invoice.status;
    await this.invoiceRepo.update(invoice.id, {
      paidCents: newPaid, status: newStatus,
      ...(newStatus === "paid" && { paidAt: new Date() })
    });

    await this.activityRepo.create({
      invoiceId: invoice.id, orgId, userId, action: "payment_added",
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
      orgId, createdByUserId: userId, contactId: data.contact_id,
      amountCents: BigInt(data.amount_cents), currency: data.currency || "USD",
      description: data.description, paymentMethod: data.payment_method
    });
  }
}
