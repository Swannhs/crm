export interface IInvoice {
  id: string;
  orgId: string;
  contactId?: string | null;
  amountCents: number;
  paidAmountCents: number;
  status: 'pending' | 'paid' | 'partial' | 'cancelled';
  createdByUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPayment {
  id: string;
  orgId: string;
  invoiceId: string;
  contactId?: string | null;
  amountCents: number;
  paymentMethod: string;
  transactionId?: string | null;
  status: 'succeeded' | 'failed' | 'pending';
  note?: string | null;
  createdByUserId: string;
  createdAt: Date;
}

export interface IIdentityContext {
  orgId: string;
  userId: string;
}

export type InvoiceStatus = 'pending' | 'partial' | 'paid' | 'cancelled';
export type PaymentStatus = 'succeeded' | 'failed' | 'pending';

export interface PaginationQuery {
  page?: unknown;
  limit?: unknown;
}

export interface ListInvoicesQuery extends PaginationQuery {
  status?: unknown;
  contact_id?: unknown;
}

export interface CreateInvoiceInput {
  contact_id?: unknown;
  amount_cents: unknown;
  currency?: unknown;
  metadata?: unknown;
}

export interface CreatePaymentInput {
  invoice_id: unknown;
  amount_cents: unknown;
  payment_method: unknown;
  transaction_id?: unknown;
  note?: unknown;
  currency?: unknown;
  metadata?: unknown;
}

export interface PaginatedResult<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
}
