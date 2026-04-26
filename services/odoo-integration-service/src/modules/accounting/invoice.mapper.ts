import type { InvoiceDto, OdooInvoiceRecord } from './invoice.types.js';

export function mapInvoice(record: OdooInvoiceRecord): InvoiceDto {
  return {
    id: record.id,
    name: record.name || `INV-${record.id}`,
    partner: Array.isArray(record.partner_id) ? String(record.partner_id[1]) : undefined,
    invoiceDate: record.invoice_date || undefined,
    dueDate: record.invoice_date_due || undefined,
    amountTotal: typeof record.amount_total === 'number' ? record.amount_total : undefined,
    amountResidual: typeof record.amount_residual === 'number' ? record.amount_residual : undefined,
    paymentState: record.payment_state || undefined,
    state: record.state || undefined,
    currency: Array.isArray(record.currency_id) ? String(record.currency_id[1]) : undefined,
    createdAt: record.create_date || undefined,
    updatedAt: record.write_date || undefined,
  };
}
