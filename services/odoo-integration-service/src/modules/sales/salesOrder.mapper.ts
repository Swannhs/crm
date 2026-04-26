import type { OdooSalesOrderRecord, SalesOrderDto } from './salesOrder.types.js';

export function mapSalesOrder(record: OdooSalesOrderRecord): SalesOrderDto {
  return {
    id: record.id,
    name: record.name || `SO-${record.id}`,
    partner: Array.isArray(record.partner_id) ? String(record.partner_id[1]) : undefined,
    dateOrder: record.date_order || undefined,
    amountTotal: typeof record.amount_total === 'number' ? record.amount_total : undefined,
    state: record.state || undefined,
    currency: Array.isArray(record.currency_id) ? String(record.currency_id[1]) : undefined,
    clientOrderRef: record.client_order_ref || undefined,
    createdAt: record.create_date || undefined,
    updatedAt: record.write_date || undefined,
  };
}
