import { publishKafkaJson } from '@mymanager/node-service-kit';
import type { Invoice, Payment } from '../generated/prisma/index.js';
import { getProducer } from '../kafka.js';
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

  async getInvoiceStats(orgId: string) {
    const { aggregate, grouped } = await this.invoiceRepo.summarize(orgId);

    const invoiceCount = Number(aggregate._count._all || 0);
    const totalRevenue = Number(aggregate._sum.amountCents || 0) / 100;
    const paid = Number(aggregate._sum.paidAmountCents || 0) / 100;
    const outstanding = Math.max(totalRevenue - paid, 0);

    return {
      data: {
        invoiceCount,
        totalRevenue,
        paid,
        outstanding,
        byStatus: grouped.map((entry) => ({
          status: entry.status,
          count: Number(entry._count._all || 0),
          total: Number(entry._sum.amountCents || 0) / 100,
          paid: Number(entry._sum.paidAmountCents || 0) / 100,
        })),
      },
    };
  }

  async getLegacyFinanceStatistics(
    orgId: string,
    query: { month?: unknown; year?: unknown; type?: unknown }
  ) {
    const now = new Date();
    const month = Math.min(Math.max(Number(query.month || now.getUTCMonth() + 1), 1), 12);
    const year = Number(query.year || now.getUTCFullYear());
    const type = String(query.type || 'all');

    const rangeStart = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0, 0));
    const rangeEnd = new Date(Date.UTC(year, month, 0, 23, 59, 59, 999));
    console.log(`[BillingService] Range: ${rangeStart.toISOString()} to ${rangeEnd.toISOString()}`);
    
    const thisMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0, 0));
    const thisMonthEnd = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0, 23, 59, 59, 999));
    const lastMonthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1, 0, 0, 0, 0));
    const lastMonthEnd = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0, 23, 59, 59, 999));

    const invoices = await this.invoiceRepo.findAllByOrgId(orgId);
    console.log(`[BillingService] Found ${invoices.length} total invoices for org: ${orgId}`);

    const inRange = (value: Date | null | undefined, start: Date, end: Date) => {
      if (!(value instanceof Date) || Number.isNaN(value.getTime())) return false;
      return value >= start && value <= end;
    };

    const readMetadataString = (metadata: unknown, keys: string[]) => {
      if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) return null;
      for (const key of keys) {
        const value = (metadata as Record<string, unknown>)[key];
        if (typeof value === 'string' && value.trim()) return value.trim();
      }
      return null;
    };

    const invoiceMatchesType = (invoice: Invoice) => {
      if (type === 'all') return true;
      const paymentType = readMetadataString(invoice.metadata, ['paymentType', 'payment_type', 'type']);
      const itemType = readMetadataString(invoice.metadata, ['itemType', 'item_type', 'category']);
      return [paymentType, itemType].some((value) => value?.toLowerCase() === type.toLowerCase());
    };

    const selectedInvoices = invoices.filter(invoiceMatchesType);
    console.log(`[BillingService] ${selectedInvoices.length} invoices matched type: ${type}`);
    const selectedPayments = selectedInvoices.flatMap((invoice: any) => invoice.payments || []);

    const sumPaymentsInRange = (start: Date, end: Date) =>
      selectedPayments
        .filter((payment) => payment.status === 'succeeded' && inRange(payment.createdAt, start, end))
        .reduce((total, payment) => total + Number(payment.amountCents || 0), 0) / 100;

    const parseDueDate = (invoice: Invoice) => {
      const raw = readMetadataString(invoice.metadata, ['dueDate', 'due_date', 'paymentDate', 'payment_date']);
      if (!raw) return null;
      const parsed = new Date(raw);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    };

    let pastDue = 0;
    let upcoming = 0;
    let totalRevenue = 0;
    let oneTime = 0;
    let ongoing = 0;

    for (const invoice of selectedInvoices) {
      const isRecordInRange = inRange(invoice.createdAt, rangeStart, rangeEnd);
      
      if (isRecordInRange) {
        totalRevenue += Number(invoice.amountCents || 0) / 100;
        
        const subType = readMetadataString(invoice.metadata, ['paymentType', 'payment_type', 'type'])?.toLowerCase();
        if (['ongoing', 'recurring', 'subscription'].includes(subType || '')) {
          ongoing += Number(invoice.amountCents || 0) / 100;
        } else {
          oneTime += Number(invoice.amountCents || 0) / 100;
        }
      }

      const remainingCents = Math.max(Number(invoice.amountCents || 0) - Number(invoice.paidAmountCents || 0), 0);
      if (remainingCents <= 0) continue;
      
      const dueDate = parseDueDate(invoice);
      if (dueDate && inRange(dueDate, rangeStart, rangeEnd)) {
        if (dueDate < now) pastDue += remainingCents / 100;
        else upcoming += remainingCents / 100;
      }
    }

    const paid = sumPaymentsInRange(rangeStart, rangeEnd);

    return {
      // Standard fields for modern dashboard
      totalRevenue,
      paid,
      outstanding: Math.max(totalRevenue - paid, 0),
      invoiceCount: selectedInvoices.filter(inv => inRange(inv.createdAt, rangeStart, rangeEnd)).length,
      byStatus: [], // Placeholder for status grouping if needed in future
      
      // Legacy compatibility fields
      thisMonth: sumPaymentsInRange(thisMonthStart, thisMonthEnd),
      lastMonth: sumPaymentsInRange(lastMonthStart, lastMonthEnd),
      totalCollected: paid,
      pastDue,
      upcoming,
      oneTime,
      ongoing,
    };
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
        const brokers = process.env.KAFKA_BROKERS || 'localhost:9092';
        const producer = await getProducer({ brokers, logger });
        await publishKafkaJson(producer, 'billing.payment.recorded', {
          event_name: 'billing.payment.recorded',
          occurred_at: new Date().toISOString(),
          payment_id: payment.id,
          invoice_id: invoiceId,
          org_id: orgId,
          actor_user_id: userId,
          amountCents: amount,
          amount_cents: amount,
          currency: optionalString(data.currency) ?? invoice.currency,
          contact_id: invoice.contactId,
          transaction_id: optionalString(data.transaction_id),
        }, payment.id);
      } catch (err) {
        logger?.error?.({ err, invoiceId, orgId }, 'Failed to publish Kafka billing payment event');
      }

      return payment;
    });
  }
}
