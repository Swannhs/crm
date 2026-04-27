import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AppointmentsService } from './appointments.service.js';

@ApiTags('appointments')
@Controller('v1/appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new appointment' })
  create(
    @Headers('X-Org-Id') orgId: string,
    @Body() createAppointmentDto: any
  ) {
    return this.appointmentsService.create(orgId, createAppointmentDto);
  }

  @Post('public')
  @ApiOperation({ summary: 'Create a new appointment from public landing page' })
  createPublic(@Body() createAppointmentDto: any) {
    // OrgId should be included in the DTO for public bookings
    return this.appointmentsService.create(createAppointmentDto.orgId, createAppointmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all appointments for an organization' })
  findAll(
    @Headers('X-Org-Id') orgId: string,
    @Query('contactId') contactId?: string
  ) {
    return this.appointmentsService.findAll(orgId, contactId);
  }

  @Get('available-slots')
  @ApiOperation({ summary: 'Get available slots for a booking type on a specific date' })
  getAvailableSlots(
    @Query('bookingTypeId') bookingTypeId: string,
    @Query('date') date: string
  ) {
    return this.appointmentsService.getAvailableSlots(bookingTypeId, date);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific appointment' })
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an appointment status' })
  update(@Param('id') id: string, @Body() updateAppointmentDto: any) {
    return this.appointmentsService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancel an appointment' })
  remove(@Param('id') id: string) {
    return this.appointmentsService.update(id, { status: 'CANCELLED' });
  }
}
