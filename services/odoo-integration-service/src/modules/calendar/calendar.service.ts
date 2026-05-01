import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';

@Injectable()
export class CalendarService {
  private readonly eventModel = 'calendar.event';
  private readonly appointmentTypeModel = 'calendar.appointment.type';
  private readonly availabilityModel = 'calendar.appointment.slot';

  constructor(private readonly odooClient: OdooClientService) {}

  private normalizeEvent(event: any) {
    return {
      id: String(event?.id ?? ''),
      title: String(event?.name || 'Untitled event'),
      description: event?.description || undefined,
      type: 'meeting',
      status: event?.active === false ? 'cancelled' : 'scheduled',
      startAt: event?.start || undefined,
      endAt: event?.stop || undefined,
      timezone: event?.event_tz || undefined,
      allDay: Boolean(event?.allday),
      location: event?.location || undefined,
      ownerUserId: Array.isArray(event?.user_id) ? String(event.user_id[0]) : undefined,
      ownerName: Array.isArray(event?.user_id) ? String(event.user_id[1]) : undefined,
      attendees: Array.isArray(event?.partner_ids)
        ? event.partner_ids.map((id: any) => ({ id: String(id), status: 'needs_action', required: true }))
        : [],
      createdAt: event?.create_date || undefined,
      updatedAt: event?.write_date || undefined,
    };
  }

  async getEvents(query: any) {
    const page = Number(query?.page ?? 1);
    const pageSize = Math.min(Number(query?.pageSize ?? 100), 500);
    const search = String(query?.search || '').trim();
    const startDate = String(query?.startDate || '').trim();
    const endDate = String(query?.endDate || '').trim();

    const domain: any[] = [];
    if (search) domain.push(['name', 'ilike', `%${search}%`]);
    if (startDate) domain.push(['start', '>=', startDate]);
    if (endDate) domain.push(['stop', '<=', endDate]);

    const [rows, total] = await Promise.all([
      this.odooClient.searchRead(
        this.eventModel,
        domain,
        [
          'id',
          'name',
          'description',
          'start',
          'stop',
          'event_tz',
          'allday',
          'location',
          'user_id',
          'partner_ids',
          'create_date',
          'write_date',
          'active',
        ],
        {
          offset: (page - 1) * pageSize,
          limit: pageSize,
          order: 'start asc',
        }
      ),
      this.odooClient.execute(this.eventModel, 'search_count', [domain]),
    ]);

    return {
      data: (Array.isArray(rows) ? rows : []).map((row: any) => this.normalizeEvent(row)),
      total: Number(total ?? 0),
      page,
      pageSize,
    };
  }

  async getEvent(id: number) {
    const [row] = await this.odooClient.searchRead(this.eventModel, [['id', '=', id]], [
      'id',
      'name',
      'description',
      'start',
      'stop',
      'event_tz',
      'allday',
      'location',
      'user_id',
      'partner_ids',
      'create_date',
      'write_date',
      'active',
    ], { limit: 1 });

    if (!row) throw new NotFoundException('Calendar event not found.');
    return this.normalizeEvent(row);
  }

  async createEvent(payload: any) {
    const title = String(payload?.title || payload?.name || '').trim();
    const startAt = String(payload?.startAt || payload?.start || '').trim();
    const endAt = String(payload?.endAt || payload?.end || '').trim();
    if (!title) throw new BadRequestException('title is required.');
    if (!startAt || !endAt) throw new BadRequestException('startAt and endAt are required.');

    const values: Record<string, any> = {
      name: title,
      start: startAt,
      stop: endAt,
      description: payload?.description || false,
      location: payload?.location || false,
      allday: Boolean(payload?.allDay),
      event_tz: payload?.timezone || false,
    };

    const id = await this.odooClient.execute(this.eventModel, 'create', [values]);
    return this.getEvent(Number(id));
  }

  async updateEvent(id: number, payload: any) {
    const values: Record<string, any> = {};
    if (payload?.title !== undefined || payload?.name !== undefined) values.name = payload.title ?? payload.name;
    if (payload?.startAt !== undefined || payload?.start !== undefined) values.start = payload.startAt ?? payload.start;
    if (payload?.endAt !== undefined || payload?.end !== undefined) values.stop = payload.endAt ?? payload.end;
    if (payload?.description !== undefined) values.description = payload.description;
    if (payload?.location !== undefined) values.location = payload.location;
    if (payload?.allDay !== undefined) values.allday = Boolean(payload.allDay);
    if (payload?.timezone !== undefined) values.event_tz = payload.timezone;

    if (Object.keys(values).length === 0) {
      throw new BadRequestException('No updatable fields provided.');
    }

    await this.odooClient.execute(this.eventModel, 'write', [[id], values]);
    return this.getEvent(id);
  }

  async deleteEvent(id: number) {
    await this.odooClient.execute(this.eventModel, 'unlink', [[id]]);
    return { success: true };
  }

  async cancelEvent(id: number, reason?: string) {
    await this.odooClient.execute(this.eventModel, 'write', [[id], { active: false, description: reason ? `Cancelled: ${reason}` : undefined }]);
    return this.getEvent(id);
  }

  async completeEvent(id: number) {
    const now = new Date().toISOString();
    await this.odooClient.execute(this.eventModel, 'write', [[id], { stop: now }]);
    return this.getEvent(id);
  }

  async getSummary(query: any) {
    const startDate = String(query?.startDate || '').trim();
    const endDate = String(query?.endDate || '').trim();
    const domain: any[] = [];
    if (startDate) domain.push(['start', '>=', startDate]);
    if (endDate) domain.push(['stop', '<=', endDate]);

    const rows = await this.odooClient.searchRead(this.eventModel, domain, ['id', 'start', 'stop', 'active'], {
      limit: 500,
      order: 'start asc',
    });

    const events = Array.isArray(rows) ? rows : [];
    const activeEvents = events.filter((e: any) => e?.active !== false);
    return {
      totalEvents: events.length,
      activeEvents: activeEvents.length,
      cancelledEvents: events.filter((e: any) => e?.active === false).length,
      upcomingEvents: activeEvents.filter((e: any) => String(e?.start || '') > new Date().toISOString()).length,
    };
  }

  async getBookingLinks() {
    const rows = await this.odooClient.searchRead(
      this.appointmentTypeModel,
      [],
      ['id', 'name', 'appointment_duration', 'appointment_tz', 'active', 'create_date', 'write_date'],
      { order: 'name asc', limit: 300 }
    );
    return (Array.isArray(rows) ? rows : []).map((row: any) => ({
      id: String(row.id),
      name: String(row.name || 'Untitled booking link'),
      durationMinutes: Number(row.appointment_duration || 30),
      active: row?.active !== false,
      timezone: row?.appointment_tz || undefined,
      createdAt: row?.create_date || undefined,
      updatedAt: row?.write_date || undefined,
    }));
  }

  async getAvailability(query: any) {
    const bookingTypeId = String(query?.bookingTypeId || '').trim();
    const domain: any[] = [];
    if (bookingTypeId) {
      const id = Number(bookingTypeId);
      if (!Number.isFinite(id)) throw new BadRequestException('bookingTypeId must be numeric.');
      domain.push(['appointment_type_id', '=', id]);
    }

    const rows = await this.odooClient.searchRead(
      this.availabilityModel,
      domain,
      ['id', 'appointment_type_id', 'weekday', 'hour_from', 'hour_to', 'create_date', 'write_date'],
      { order: 'appointment_type_id asc, weekday asc, hour_from asc', limit: 1000 }
    );

    return (Array.isArray(rows) ? rows : []).map((row: any) => ({
      id: String(row.id),
      bookingTypeId: Array.isArray(row.appointment_type_id)
        ? String(row.appointment_type_id[0])
        : String(row.appointment_type_id || ''),
      bookingTypeName: Array.isArray(row.appointment_type_id) ? String(row.appointment_type_id[1] || '') : undefined,
      dayOfWeek: Number(row.weekday ?? 0),
      startTime: this.hourFloatToTime(row.hour_from),
      endTime: this.hourFloatToTime(row.hour_to),
      createdAt: row.create_date || undefined,
      updatedAt: row.write_date || undefined,
    }));
  }

  async createAvailabilityRule(payload: any) {
    const bookingTypeId = Number(payload?.bookingTypeId);
    const dayOfWeek = Number(payload?.dayOfWeek);
    const startTime = this.normalizeTime(String(payload?.startTime || ''));
    const endTime = this.normalizeTime(String(payload?.endTime || ''));
    this.assertAvailabilityRange(startTime, endTime);

    if (!Number.isInteger(bookingTypeId) || bookingTypeId <= 0) {
      throw new BadRequestException('bookingTypeId is required and must be numeric.');
    }
    if (!Number.isInteger(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6) {
      throw new BadRequestException('dayOfWeek must be an integer between 0 and 6.');
    }

    const values = {
      appointment_type_id: bookingTypeId,
      weekday: dayOfWeek,
      hour_from: this.timeToHourFloat(startTime),
      hour_to: this.timeToHourFloat(endTime),
    };

    const id = await this.odooClient.execute(this.availabilityModel, 'create', [values]);
    return this.getAvailability({ bookingTypeId: String(bookingTypeId) }).then((rows) =>
      rows.find((row: any) => String(row.id) === String(id)) || { id: String(id), ...values }
    );
  }

  async updateAvailabilityRule(id: number, payload: any) {
    if (!Number.isFinite(id)) throw new BadRequestException('id is invalid.');
    const existing = await this.odooClient.searchRead(
      this.availabilityModel,
      [['id', '=', id]],
      ['id', 'appointment_type_id', 'weekday', 'hour_from', 'hour_to'],
      { limit: 1 }
    );
    const row = Array.isArray(existing) ? existing[0] : undefined;
    if (!row) throw new NotFoundException('Availability rule not found.');

    const values: Record<string, any> = {};
    if (payload?.dayOfWeek !== undefined) {
      const day = Number(payload.dayOfWeek);
      if (!Number.isInteger(day) || day < 0 || day > 6) {
        throw new BadRequestException('dayOfWeek must be an integer between 0 and 6.');
      }
      values.weekday = day;
    }
    if (payload?.startTime !== undefined) {
      const time = this.normalizeTime(String(payload.startTime));
      values.hour_from = this.timeToHourFloat(time);
    }
    if (payload?.endTime !== undefined) {
      const time = this.normalizeTime(String(payload.endTime));
      values.hour_to = this.timeToHourFloat(time);
    }

    const nextStart = values.hour_from !== undefined ? this.hourFloatToTime(values.hour_from) : this.hourFloatToTime(row.hour_from);
    const nextEnd = values.hour_to !== undefined ? this.hourFloatToTime(values.hour_to) : this.hourFloatToTime(row.hour_to);
    this.assertAvailabilityRange(nextStart, nextEnd);

    if (Object.keys(values).length === 0) {
      throw new BadRequestException('No updatable fields provided.');
    }

    await this.odooClient.execute(this.availabilityModel, 'write', [[id], values]);
    const [updated] = await this.odooClient.searchRead(
      this.availabilityModel,
      [['id', '=', id]],
      ['id', 'appointment_type_id', 'weekday', 'hour_from', 'hour_to', 'create_date', 'write_date'],
      { limit: 1 }
    );
    if (!updated) throw new NotFoundException('Availability rule not found after update.');

    return {
      id: String(updated.id),
      bookingTypeId: Array.isArray(updated.appointment_type_id)
        ? String(updated.appointment_type_id[0])
        : String(updated.appointment_type_id || ''),
      bookingTypeName: Array.isArray(updated.appointment_type_id) ? String(updated.appointment_type_id[1] || '') : undefined,
      dayOfWeek: Number(updated.weekday ?? 0),
      startTime: this.hourFloatToTime(updated.hour_from),
      endTime: this.hourFloatToTime(updated.hour_to),
      createdAt: updated.create_date || undefined,
      updatedAt: updated.write_date || undefined,
    };
  }

  async deleteAvailabilityRule(id: number) {
    if (!Number.isFinite(id)) throw new BadRequestException('id is invalid.');
    await this.odooClient.execute(this.availabilityModel, 'unlink', [[id]]);
    return { success: true };
  }

  async getAvailableSlots(query: any) {
    const bookingTypeId = Number(query?.bookingTypeId);
    const date = String(query?.date || '').trim();
    if (!Number.isInteger(bookingTypeId) || bookingTypeId <= 0) {
      throw new BadRequestException('bookingTypeId is required and must be numeric.');
    }
    if (!date) throw new BadRequestException('date is required (YYYY-MM-DD).');

    const rules = await this.getAvailability({ bookingTypeId: String(bookingTypeId) });
    const jsDay = new Date(`${date}T00:00:00`).getDay();
    const dayRules = rules.filter((rule: any) => Number(rule.dayOfWeek) === jsDay);
    const slots: string[] = [];
    for (const rule of dayRules) {
      let minutes = this.timeToMinutes(rule.startTime);
      const end = this.timeToMinutes(rule.endTime);
      while (minutes + 30 <= end) {
        slots.push(`${date}T${this.minutesToTime(minutes)}:00`);
        minutes += 30;
      }
    }

    return {
      bookingTypeId: String(bookingTypeId),
      date,
      slots,
    };
  }

  private normalizeTime(value: string) {
    const trimmed = String(value || '').trim();
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(trimmed)) {
      throw new BadRequestException('Time must use HH:mm format.');
    }
    return trimmed;
  }

  private assertAvailabilityRange(startTime: string, endTime: string) {
    if (this.timeToMinutes(startTime) >= this.timeToMinutes(endTime)) {
      throw new BadRequestException('endTime must be after startTime.');
    }
  }

  private timeToHourFloat(value: string) {
    const [hour, minute] = value.split(':').map((v) => Number(v));
    return hour + minute / 60;
  }

  private hourFloatToTime(value: any) {
    const hourFloat = Number(value ?? 0);
    const safe = Number.isFinite(hourFloat) ? Math.max(0, Math.min(23.99, hourFloat)) : 0;
    const hour = Math.floor(safe);
    const minute = Math.round((safe - hour) * 60);
    const hh = String(hour).padStart(2, '0');
    const mm = String(Math.min(minute, 59)).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  private timeToMinutes(value: string) {
    const [hour, minute] = value.split(':').map((v) => Number(v));
    return hour * 60 + minute;
  }

  private minutesToTime(value: number) {
    const hour = Math.floor(value / 60);
    const minute = value % 60;
    return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  }
}
