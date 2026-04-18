import { InvoiceRepository } from '../repositories/invoice.repository.js';
import { PaymentRepository } from '../repositories/payment.repository.js';

export class BillingService {
  private invoiceRepo = new InvoiceRepository();
  private paymentRepo = new PaymentRepository();

  async getInvoices(orgId: string) {
    return this.invoiceRepo.findManyByOrgId(orgId);
  }

  async createInvoice(orgId: string, userId: string, data: any) {
    return this.invoiceRepo.create({
      orgId,
      createdByUserId: userId,
      contactId: data.contact_id,
      amountCents: Number(data.amount_cents),
      status: 'pending',
    });
  }

  async recordPayment(orgId: string, userId: string, data: any) {
    return this.paymentRepo.withTransaction(async (tx) => {
      const invoice = await tx.invoice.findFirst({
        where: { id: data.invoice_id, orgId },
      });

      if (!invoice) {
        throw new Error('Invoice not found');
      }

      const amount = Number(data.amount_cents);
      
      const payment = await tx.payment.create({
        data: {
          orgId,
          invoiceId: data.invoice_id,
          contactId: invoice.contactId,
          createdByUserId: userId,
          amountCents: amount,
          paymentMethod: data.payment_method,
          transactionId: data.transaction_id,
          note: data.note,
          status: 'succeeded',
        },
      });

      const newPaidAmount = Number(invoice.paidAmountCents || 0) + amount;
      const isPaidFull = newPaidAmount >= Number(invoice.amountCents);

      await tx.invoice.update({
        where: { id: data.invoice_id },
        data: {
          paidAmountCents: newPaidAmount,
          status: isPaidFull ? 'paid' : 'partial',
        },
      });

      return payment;
    });
  }
}
