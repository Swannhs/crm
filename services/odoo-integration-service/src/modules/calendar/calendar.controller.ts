import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  NotImplementedException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';
import { CalendarService } from './calendar.service.js';

@ApiTags('Calendar')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('summary')
  @ApiOperation({ summary: 'Calendar summary' })
  async getSummary(@Query() query: any) {
    return this.calendarService.getSummary(query);
  }

  @Get('events')
  @ApiOperation({ summary: 'List calendar events' })
  async getEvents(@Query() query: any) {
    return this.calendarService.getEvents(query);
  }

  @Post('events')
  @ApiOperation({ summary: 'Create calendar event' })
  async createEvent(@Body() payload: any) {
    return this.calendarService.createEvent(payload || {});
  }

  @Get('events/:id')
  @ApiOperation({ summary: 'Get calendar event' })
  async getEvent(@Param('id', ParseIntPipe) id: number) {
    return this.calendarService.getEvent(id);
  }

  @Patch('events/:id')
  @ApiOperation({ summary: 'Update calendar event' })
  async updateEvent(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.calendarService.updateEvent(id, payload || {});
  }

  @Delete('events/:id')
  @ApiOperation({ summary: 'Delete calendar event' })
  async deleteEvent(@Param('id', ParseIntPipe) id: number) {
    return this.calendarService.deleteEvent(id);
  }

  @Post('events/:id/cancel')
  @ApiOperation({ summary: 'Cancel calendar event' })
  async cancelEvent(@Param('id', ParseIntPipe) id: number, @Body() body?: any) {
    return this.calendarService.cancelEvent(id, body?.reason);
  }

  @Post('events/:id/complete')
  @ApiOperation({ summary: 'Complete calendar event' })
  async completeEvent(@Param('id', ParseIntPipe) id: number) {
    return this.calendarService.completeEvent(id);
  }

  @Post('events/:id/respond')
  @ApiOperation({ summary: 'Respond to event invitation' })
  async respondToEvent(@Param('id', ParseIntPipe) _id: number, @Body() _body?: any) {
    throw new NotImplementedException('Event attendee responses are not available yet.');
  }

  @Get('availability')
  async getAvailability(@Query() query: any) {
    return this.calendarService.getAvailability(query || {});
  }

  @Post('availability')
  async createAvailabilityRule(@Body() payload: any) {
    return this.calendarService.createAvailabilityRule(payload || {});
  }

  @Patch('availability/:id')
  async updateAvailabilityRule(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.calendarService.updateAvailabilityRule(id, payload || {});
  }

  @Delete('availability/:id')
  async deleteAvailabilityRule(@Param('id', ParseIntPipe) id: number) {
    return this.calendarService.deleteAvailabilityRule(id);
  }

  @Get('available-slots')
  async getAvailableSlots(@Query() query: any) {
    return this.calendarService.getAvailableSlots(query || {});
  }

  @Get('booking-links')
  async getBookingLinks() {
    return this.calendarService.getBookingLinks();
  }

  @Post('booking-links')
  async createBookingLink() {
    throw new NotImplementedException('Booking link creation is not available yet.');
  }

  @Get('booking-links/:id')
  async getBookingLink(@Param('id') _id: string) {
    throw new NotImplementedException('Booking link detail is not available yet.');
  }

  @Patch('booking-links/:id')
  async updateBookingLink(@Param('id') _id: string) {
    throw new NotImplementedException('Booking link updates are not available yet.');
  }

  @Delete('booking-links/:id')
  async deleteBookingLink(@Param('id') _id: string) {
    throw new NotImplementedException('Booking link deletion is not available yet.');
  }

  @Get('booking-links/:id/slots')
  async getBookingLinkSlots(@Param('id') _id: string) {
    throw new NotImplementedException('Booking link slots are not available yet.');
  }

  @Get('reminders')
  async getReminders() {
    throw new NotImplementedException('Reminders are not available yet.');
  }

  @Post('reminders')
  async createReminder() {
    throw new NotImplementedException('Reminders are not available yet.');
  }

  @Patch('reminders/:id')
  async updateReminder(@Param('id') _id: string) {
    throw new NotImplementedException('Reminders are not available yet.');
  }

  @Delete('reminders/:id')
  async deleteReminder(@Param('id') _id: string) {
    throw new NotImplementedException('Reminders are not available yet.');
  }

  @Get('settings')
  async getSettings(@Headers('x-org-id') _orgId?: string) {
    throw new NotImplementedException('Calendar settings are not available yet.');
  }

  @Patch('settings')
  async updateSettings(@Headers('x-org-id') _orgId?: string, @Body() _data?: any) {
    throw new NotImplementedException('Calendar settings are not available yet.');
  }
}
