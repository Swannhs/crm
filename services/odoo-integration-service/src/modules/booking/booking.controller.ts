import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { OdooBookingService } from './booking.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@ApiTags('odoo-booking')
@Controller('v1/odoo/booking')
export class OdooBookingController {
  constructor(private readonly bookingService: OdooBookingService) {}

  @Get('appointment-types')
  @ApiOperation({ summary: 'Get Odoo appointment types' })
  findAppointmentTypes(@Query() paginationDto: PaginationDto) {
    return this.bookingService.findAppointmentTypes(paginationDto);
  }

  @Get('events')
  @ApiOperation({ summary: 'Get Odoo calendar events' })
  findAllEvents(@Query() paginationDto: PaginationDto) {
    return this.bookingService.findAllEvents(paginationDto);
  }

  @Post('events')
  @ApiOperation({ summary: 'Create Odoo calendar event' })
  createEvent(@Body() data: any) {
    return this.bookingService.createEvent(data);
  }
}
