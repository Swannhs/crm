import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { CreateOrderDto } from './dto/order.dto.js';

@Injectable()
export class SalesService {
  private readonly model = 'sale.order';
  private readonly defaultFields = [
    'id', 'name', 'partner_id', 'date_order', 'amount_total', 
    'amount_untaxed', 'amount_tax', 'state', 'invoice_status', 'order_line'
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    const domain: any[] = search ? [['name', 'ilike', search]] : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.model,
        domain,
        this.defaultFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'date_order desc' }
      ),
      this.odooClient.execute(this.model, 'search_count', [domain])
    ]);

    return { data, total };
  }

  async findOne(id: number) {
    const [order] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      [...this.defaultFields, 'order_line']
    );
    return order;
  }

  async create(data: CreateOrderDto) {
    // Format lines for Odoo (0, 0, { values })
    const formattedData = {
      ...data,
      order_line: data.order_line.map(line => [0, 0, line])
    };
    return this.odooClient.execute(this.model, 'create', [formattedData]);
  }

  async confirmOrder(id: number) {
    return this.odooClient.execute(this.model, 'action_confirm', [[id]]);
  }

  async createInvoice(id: number) {
    return this.odooClient.execute(this.model, 'action_create_invoices', [[id]]);
  }

  async update(id: number, data: any) {
    return this.odooClient.execute(this.model, 'write', [[id], data]);
  }

  async remove(id: number) {
    return this.odooClient.execute(this.model, 'unlink', [[id]]);
  }
}
