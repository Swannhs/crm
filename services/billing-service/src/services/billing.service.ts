import { publishJson } from '@mymanager/node-service-kit';
import type { Invoice, Payment } from '@prisma/client';
import { getChannel } from '../amqp.js';
import { NotFoundError, ValidationError } from '../errors.js';
import { InvoiceRepository } from '../repositories/invoice.repository.js';
import { PaymentRepository } from '../repositories/payment.repository.js';
import type {
  CreateInvoiceInput,
  CreatePaymentInput,
  ListInvoicesQuery,
  PaginatedResult,
} from '../types/index.js';
import {
  optionalString,
  parsePagination,
  parsePositiveInteger,
} from '../validation.js';

export class BillingService {
  constructor(
    private readonly invoiceRepo = new InvoiceRepository(),
    private readonly paymentRepo = new PaymentRepository()
  ) {}

  async getInvoices(orgId: string, query: ListInvoicesQuery): Promise<PaginatedResult<Invoice>> {
    const { page, limit, skip } = parsePagination(query.page, query.limit);
    const status = optionalString(query.status);
    const contactId = optionalString(query.contact_id);
    const { data, total } = await this.invoiceRepo.findManyByOrgId(orgId, {
      status,
      contactId,
      skip,
      take: limit,
    });

    return { data, total, page, limit };
  }

  async getInvoiceById(orgId: string, invoiceId: string) {
    const invoice = await this.invoiceRepo.findUnique(invoiceId, orgId);
    if (!invoice) {
      throw new NotFoundError('Invoice not found.', { invoiceId });
    }

    return invoice;
  }

  async createInvoice(orgId: string, userId: string, data: CreateInvoiceInput) {
    const amountCents = parsePositiveInteger(data.amount_cents, 'amount_cents');
    const currency = optionalString(data.currency) ?? 'USD';

    return this.invoiceRepo.create({
      orgId,
      createdByUserId: userId,
      contactId: optionalString(data.contact_id) ?? null,
      amountCents,
      currency,
      status: 'pending',
      metadata: typeof data.metadata === 'object' && data.metadata !== null ? data.metadata : {},
    });
  }

  async getPayments(orgId: string, query: { page?: unknown; limit?: unknown }): Promise<PaginatedResult<Payment>> {
    const { page, limit, skip } = parsePagination(query.page, query.limit);
    const { data, total } = await this.paymentRepo.findManyByOrgId(orgId, { skip, take: limit });
    return { data, total, page, limit };
  }

  async recordPayment(orgId: string, userId: string, data: CreatePaymentInput, logger?: { error: (meta: unknown, msg: string) => void }) {
    const invoiceId = optionalString(data.invoice_id);
    const paymentMethod = optionalString(data.payment_method);
    if (!invoiceId || !paymentMethod) {
      throw new ValidationError('invoice_id and payment_method are required.');
    }

    const amount = parsePositiveInteger(data.amount_cents, 'amount_cents');

    return this.paymentRepo.withTransaction(async (tx) => {
      const invoice = await tx.invoice.findFirst({
        where: { id: invoiceId, orgId },
      });

      if (!invoice) {
        throw new NotFoundError('Invoice not found.', { invoiceId });
      }
      
      const payment = await tx.payment.create({
        data: {
          orgId,
          invoiceId,
          contactId: invoice.contactId,
          createdByUserId: userId,
          amountCents: amount,
          currency: optionalString(data.currency) ?? invoice.currency,
          paymentMethod,
          transactionId: optionalString(data.transaction_id),
          note: optionalString(data.note),
          status: 'succeeded',
          metadata: typeof data.metadata === 'object' && data.metadata !== null ? data.metadata : {},
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

      try {
        const url = process.env.RABBITMQ_URL || 'amqp://localhost:5672';
        const channel = await getChannel({ url, logger });
        publishJson(channel, 'domain-events', 'billing.payment.recorded', {
          paymentId: payment.id,
          invoiceId,
          orgId,
          amountCents: amount,
        });
      } catch (err) {
        logger?.error?.({ err, invoiceId, orgId }, 'Failed to publish billing payment event');
      }

      return payment;
    });
  }
}
