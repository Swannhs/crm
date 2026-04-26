import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class AccountingService {
  private readonly model = 'account.move';
  private readonly defaultFields = [
    'id', 'name', 'partner_id', 'invoice_date', 'invoice_date_due', 
    'amount_total', 'amount_untaxed', 'amount_residual', 'state', 'payment_state', 'move_type'
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAllInvoices(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    
    const domain: any[] = [
      ['move_type', 'in', ['out_invoice', 'out_refund']]
    ];

    if (search) {
      domain.push(['name', 'ilike', search]);
    }

    return this.odooClient.searchRead(
      this.model,
      domain,
      this.defaultFields,
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'invoice_date desc' }
    );
  }

  async findOne(id: number) {
    const [invoice] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      [...this.defaultFields, 'invoice_line_ids']
    );
    return invoice;
  }
}
