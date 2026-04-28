import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class CrmService {
  private readonly model = 'crm.lead';
  private readonly defaultFields = [
    'id',
    'name',
    'partner_id',
    'email_from',
    'phone',
    'probability',
    'planned_revenue',
    'expected_revenue',
    'recurring_revenue_monthly',
    'stage_id',
    'type',
    'description',
    'priority',
    'user_id',
    'date_deadline',
    'create_date',
    'write_date',
    'activity_ids',
    'activity_type_id',
    'activity_summary',
    'activity_state',
    'activity_date_deadline',
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    
    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['email_from', 'ilike', search]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.model,
        domain,
        this.defaultFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'create_date desc' }
      ),
      this.odooClient.execute(this.model, 'search_count', [domain])
    ]);

    return { data, total };
  }

  async findOne(id: number) {
    const [lead] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      this.defaultFields
    );
    return lead;
  }

  async create(data: any) {
    return this.odooClient.execute(this.model, 'create', [data]);
  }

  async update(id: number, data: any) {
    return this.odooClient.execute(this.model, 'write', [[id], data]);
  }

  async remove(id: number) {
    return this.odooClient.execute(this.model, 'unlink', [[id]]);
  }
}
