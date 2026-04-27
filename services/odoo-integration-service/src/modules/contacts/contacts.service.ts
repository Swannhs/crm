import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto.js';

@Injectable()
export class ContactsService {
  private readonly model = 'res.partner';
  private readonly defaultFields = ['id', 'name', 'email', 'phone', 'mobile', 'is_company', 'street', 'city', 'country_id'];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['email', 'ilike', search]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.model,
        domain,
        this.defaultFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
      ),
      this.odooClient.execute(this.model, 'search_count', [domain])
    ]);

    return { data, total };
  }

  async findOne(id: number) {
    const [contact] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      this.defaultFields
    );
    return contact;
  }

  async create(data: CreateContactDto) {
    return this.odooClient.execute(this.model, 'create', [data]);
  }

  async update(id: number, data: UpdateContactDto) {
    return this.odooClient.execute(this.model, 'write', [[id], data]);
  }

  async remove(id: number) {
    return this.odooClient.execute(this.model, 'unlink', [[id]]);
  }
}
