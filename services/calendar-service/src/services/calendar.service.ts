import { CalendarRepository } from '../repositories/calendar.repository.js';
import { EventRepository } from '../repositories/event.repository.js';

export class CalendarService {
  private calendarRepo = new CalendarRepository();

  async getCalendars(orgId: string, userId: string) {
    return this.calendarRepo.findMany(orgId, userId);
  }

  async createCalendar(orgId: string, userId: string, data: any) {
    return this.calendarRepo.create({
      orgId,
      userId,
      name: data.name,
      color: data.color || "#6366f1",
      isDefault: data.isDefault || false,
      provider: data.provider || null
    });
  }
}

export class EventService {
  private eventRepo = new EventRepository();

  async getEvents(orgId: string, filters: any) {
    const where: any = { orgId, isDeleted: false };
    if (filters.calendarId) where.calendarId = filters.calendarId;
    if (filters.categoryId) where.categoryId = filters.categoryId;
    if (filters.start) where.startDate = { gte: new Date(filters.start) };
    if (filters.end) where.endDate = { lte: new Date(filters.end) };

    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '100');
    
    return this.eventRepo.findMany(where, (page - 1) * limit, limit);
  }

  async createEvent(orgId: string, userId: string, data: any) {
    return this.eventRepo.create({
      orgId,
      createdBy: userId,
      title: data.title,
      description: data.description,
      location: data.location,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      allDay: data.allDay || false,
      calendarId: data.calendarId || null,
      categoryId: data.categoryId || null,
      color: data.color,
      attendees: data.attendees || [],
      recurrence: data.recurrence || {},
      isRecurring: data.isRecurring || false
    });
  }
}
