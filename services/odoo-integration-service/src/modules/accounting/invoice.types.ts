export type OdooInvoiceRecord = {
  id: number;
  name?: string;
  partner_id?: [number, string] | false;
  invoice_date?: string;
  invoice_date_due?: string;
  amount_total?: number;
  amount_residual?: number;
  payment_state?: string;
  state?: string;
  currency_id?: [number, string] | false;
  create_date?: string;
  write_date?: string;
};

export type InvoiceDto = {
  id: number;
  name: string;
  partner?: string;
  invoiceDate?: string;
  dueDate?: string;
  amountTotal?: number;
  amountResidual?: number;
  paymentState?: string;
  state?: string;
  currency?: string;
  createdAt?: string;
  updatedAt?: string;
};
