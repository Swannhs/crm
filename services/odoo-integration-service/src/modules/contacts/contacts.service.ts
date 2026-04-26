import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class ContactsService {
  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: PaginationDto) {
    const { page, pageSize, search } = paginationDto;
    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['email', 'ilike', search]]
      : [];

    return this.odooClient.searchRead(
      'res.partner',
      domain,
      ['id', 'name', 'email', 'phone', 'is_company'],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );
  }
}
