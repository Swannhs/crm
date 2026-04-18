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
