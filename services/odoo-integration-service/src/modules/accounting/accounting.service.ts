import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class AccountingService {
  private readonly model = 'account.move';
  private readonly defaultFields = [
    'id',
    'name',
    'partner_id',
    'invoice_date',
    'invoice_date_due',
    'amount_total',
    'amount_untaxed',
    'amount_residual',
    'state',
    'payment_state',
    'move_type',
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAllInvoices(paginationDto: PaginationDto, contactId?: number, filters?: any) {
    const page = paginationDto.page ?? 1;
    const pageSize = Math.min(paginationDto.pageSize ?? 10, 100);
    const search = paginationDto.search;

    const domain: any[] = [['move_type', 'in', ['out_invoice', 'out_refund']]];

    if (contactId) {
      domain.push(['partner_id', '=', contactId]);
    }

    if (search) {
      domain.push(['name', 'ilike', `%${search}%`]);
    }

    if (filters) {
      if (filters.state) domain.push(['state', '=', filters.state]);
      if (filters.paymentState) domain.push(['payment_state', '=', filters.paymentState]);
      if (filters.dateFrom) domain.push(['invoice_date', '>=', filters.dateFrom]);
      if (filters.dateTo) domain.push(['invoice_date', '<=', filters.dateTo]);
    }

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.model, domain, this.defaultFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'invoice_date desc',
      }),
      this.odooClient.execute(this.model, 'search_count', [domain]),
    ]);

    const normalizedData = data.map((inv: any) => this.normalizeInvoice(inv));

    return { data: normalizedData, total };
  }

  async findOne(id: number) {
    const [invoice] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      [...this.defaultFields, 'invoice_line_ids', 'currency_id'],
    );
    if (!invoice) return null;

    // Fetch lines
    const lineIds = invoice.invoice_line_ids || [];
    let lines = [];
    if (lineIds.length > 0) {
      lines = await this.odooClient.searchRead(
        'account.move.line',
        [['id', 'in', lineIds], ['display_type', '=', 'product']],
        ['id', 'name', 'quantity', 'price_unit', 'price_subtotal', 'price_total', 'product_id'],
      );
    }

    return this.normalizeInvoice(invoice, lines);
  }

  private normalizeInvoice(inv: any, lines?: any[]) {
    const today = new Date().toISOString().split('T')[0];
    const isOverdue = inv.state === 'posted' && 
                     inv.payment_state !== 'paid' && 
                     inv.amount_residual > 0 && 
                     inv.invoice_date_due && 
                     inv.invoice_date_due < today;

    return {
      id: inv.id,
      odooId: inv.id,
      number: inv.name,
      customerName: inv.partner_id ? inv.partner_id[1] : 'Unknown Customer',
      customerId: inv.partner_id ? inv.partner_id[0] : undefined,
      invoiceDate: inv.invoice_date,
      dueDate: inv.invoice_date_due,
      amountTotal: inv.amount_total,
      amountResidual: inv.amount_residual,
      amountUntaxed: inv.amount_untaxed,
      paymentState: inv.payment_state,
      state: inv.state,
      isOverdue,
      currency: inv.currency_id ? inv.currency_id[1] : 'USD',
      lines: lines?.map(line => ({
        id: line.id,
        name: line.name,
        quantity: line.quantity,
        priceUnit: line.price_unit,
        subtotal: line.price_subtotal,
        total: line.price_total,
        productName: line.product_id ? line.product_id[1] : undefined,
      })) || [],
    };
  }

  async create(data: any) {
    // Ensure move_type is set for invoices
    const payload = { ...data, move_type: data.move_type || 'out_invoice' };
    return this.odooClient.execute(this.model, 'create', [payload]);
  }

  async update(id: number, data: any) {
    return this.odooClient.execute(this.model, 'write', [[id], data]);
  }

  async remove(id: number) {
    return this.odooClient.execute(this.model, 'unlink', [[id]]);
  }

  async post(id: number) {
    return this.odooClient.execute(this.model, 'action_post', [[id]]);
  }

  async downloadInvoice(id: number) {
    const result = await this.odooClient.execute(
      'ir.actions.report',
      '_render_qweb_pdf',
      ['account.report_invoice', [id]],
    );
    return result[0];
  }

  async getSummary() {
    const invoices = await this.odooClient.searchRead(
      this.model,
      [['move_type', '=', 'out_invoice'], ['state', '!=', 'cancel']],
      ['amount_total', 'amount_residual', 'payment_state', 'state', 'invoice_date_due'],
    );

    const totalInvoiced = invoices.reduce((acc, curr) => acc + (curr.amount_total || 0), 0);
    const totalOutstanding = invoices.reduce((acc, curr) => acc + (curr.amount_residual || 0), 0);
    const totalPaid = totalInvoiced - totalOutstanding;
    
    const today = new Date().toISOString().split('T')[0];
    const overdueCount = invoices.filter(inv => {
        if (inv.payment_state === 'paid' || inv.state !== 'posted') return false;
        return inv.amount_residual > 0 && inv.invoice_date_due && inv.invoice_date_due < today;
    }).length;

    return {
      totalInvoiced,
      totalPaid,
      totalOutstanding,
      overdueCount,
    };
  }

  async getGraph(monthsCount: number = 6) {
    const count = Math.min(Math.max(monthsCount, 1), 24);
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth() - (count - 1), 1);
    
    const invoices = await this.odooClient.searchRead(
      this.model,
      [
        ['move_type', '=', 'out_invoice'],
        ['state', '!=', 'cancel'],
        ['invoice_date', '>=', startDate.toISOString().split('T')[0]]
      ],
      ['amount_total', 'invoice_date'],
    );

    const monthKeys: string[] = [];
    for (let i = count - 1; i >= 0; i -= 1) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      monthKeys.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    }

    const points = monthKeys.map(key => {
        const amount = invoices
            .filter(inv => inv.invoice_date && inv.invoice_date.startsWith(key))
            .reduce((acc, curr) => acc + (curr.amount_total || 0), 0);
        return { key, value: amount };
    });

    return points;
  }
}
