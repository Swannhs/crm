import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class OdooBookingService {
  constructor(private readonly odooClient: OdooClientService) {}

  async findAppointmentTypes(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;

    const domain: any[] = search ? [['name', 'ilike', search]] : [];
    
    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        'calendar.appointment.type',
        domain,
        ['id', 'name', 'appointment_duration', 'appointment_tz'],
        { offset: (page - 1) * pageSize, limit: pageSize }
      ),
      this.odooClient.execute('calendar.appointment.type', 'search_count', [domain])
    ]);

    return { data, total };
  }

  async createEvent(data: any) {
    return this.odooClient.execute('calendar.event', 'create', [data]);
  }

  async findAllEvents(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    
    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        'calendar.event',
        [],
        ['id', 'name', 'start', 'stop', 'duration', 'partner_ids'],
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'start desc' }
      ),
      this.odooClient.execute('calendar.event', 'search_count', [[]])
    ]);

    return { data, total };
  }
}
