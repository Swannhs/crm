import { Response } from 'express';
import { CalendarService, EventService } from '../services/calendar.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class CalendarController {
  private calendarService = new CalendarService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const calendars = await this.calendarService.getCalendars(orgId, userId);
      return res.json({ data: calendars });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const calendar = await this.calendarService.createCalendar(orgId, userId, req.body);
      return res.status(201).json({ data: calendar });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export class EventController {
  private eventService = new EventService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const result = await this.eventService.getEvents(orgId, req.query);
      return res.json({ data: result.data, total: result.total });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const event = await this.eventService.createEvent(orgId, userId, req.body);
      return res.status(201).json({ data: event });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async categories(_req: AuthenticatedRequest, res: Response) {
    return res.json({ data: [] });
  }
}
