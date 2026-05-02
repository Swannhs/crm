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

  async findAllInvoices(paginationDto: PaginationDto, contactId?: number) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;

    const domain: any[] = [['move_type', 'in', ['out_invoice', 'out_refund']]];

    if (contactId) {
      domain.push(['partner_id', '=', contactId]);
    }

    if (search) {
      domain.push(['name', 'ilike', search]);
    }

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.model, domain, this.defaultFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'invoice_date desc',
      }),
      this.odooClient.execute(this.model, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  async findOne(id: number) {
    const [invoice] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      [...this.defaultFields, 'invoice_line_ids'],
    );
    return invoice;
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
      ['amount_total', 'amount_residual', 'payment_state', 'state'],
    );

    const totalInvoiced = invoices.reduce((acc, curr) => acc + (curr.amount_total || 0), 0);
    const totalOutstanding = invoices.reduce((acc, curr) => acc + (curr.amount_residual || 0), 0);
    const totalPaid = totalInvoiced - totalOutstanding;
    
    const overdueCount = invoices.filter(inv => {
        if (inv.payment_state === 'paid' || inv.state !== 'posted') return false;
        // Simple overdue check (real check should compare with invoice_date_due)
        return inv.amount_residual > 0;
    }).length;

    return {
      totalInvoiced,
      totalPaid,
      totalOutstanding,
      overdueCount,
    };
  }

  async getGraph() {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth() - 5, 1);
    
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
    for (let i = 5; i >= 0; i -= 1) {
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
