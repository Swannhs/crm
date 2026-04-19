import { AppointmentRepository } from '../repositories/appointment.repository.js';
import { BookingTypeRepository } from '../repositories/booking-type.repository.js';
import { randomUUID } from "node:crypto";
import { slugify } from '../utils/slug.js';

export class BookingService {
  private aptRepo = new AppointmentRepository();
  private bookingTypeRepo = new BookingTypeRepository();

  async getBookingTypes(orgId: string) {
    return this.bookingTypeRepo.findMany(orgId);
  }

  async countBookingTypes(orgId: string) {
    return this.bookingTypeRepo.count(orgId);
  }

  async getBookingTypeByLink(orgId: string, link: string) {
    return this.bookingTypeRepo.findByLink(orgId, link);
  }

  async createBookingType(orgId: string, userId: string, data: any) {
    const title = String(data.title || '').trim();

    if (!title) {
      throw new Error('Booking type title is required');
    }

    const requestedLink = String(data.link || '').trim();
    const link = slugify(requestedLink || title);

    if (!link) {
      throw new Error('Booking type link is required');
    }

    const existing = await this.bookingTypeRepo.findByLink(orgId, link);
    if (existing) {
      throw new Error('Booking type link already exists');
    }

    return this.bookingTypeRepo.create({
      id: randomUUID(),
      org_id: orgId,
      created_by_user_id: userId,
      title,
      description: data.description || null,
      link,
      meeting_type: data.meeting_type || 'inperson',
      location: data.location || null,
      geo_location: data.geo_location || {},
      duration_minutes: Number(data.duration_minutes || 30),
      color: data.color || '#3b82f6',
      notification_mins: data.notification_mins ?? null,
      notification_type: data.notification_type || 'email',
      email_subject: data.email_subject || null,
      email_body: data.email_body || null,
      submit_button_label: data.submit_button_label || 'Schedule Meeting',
      status: data.status || 'active',
      is_archived: Boolean(data.is_archived),
      synced_with_schedule: Boolean(data.synced_with_schedule),
      metadata: data.metadata || {},
    });
  }

  async getAppointments(orgId: string, page: number, limit: number) {
    const skip = (page - 1) * limit;
    return this.aptRepo.findMany({ org_id: orgId }, skip, limit);
  }

  async createAppointment(orgId: string, userId: string, data: any) {
    let durationMinutes = data.duration_minutes || 30;

    if (data.booking_type_id) {
      const bt = await this.bookingTypeRepo.findUnique(data.booking_type_id);
      if (bt) durationMinutes = bt.duration_minutes;
    }

    const startTime = new Date(data.start_datetime);
    const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

    return this.aptRepo.create({
      id: randomUUID(),
      org_id: orgId,
      created_by_user_id: userId,
      booking_type_id: data.booking_type_id || null,
      title: data.title,
      description: data.description || null,
      contact_id: data.contact_id || null,
      meeting_type: data.meeting_type || 'inperson',
      location: data.location || null,
      start_datetime: startTime,
      end_datetime: endTime,
      duration_minutes: durationMinutes,
      status: 'scheduled',
      metadata: data.metadata || {},
    });
  }

  async cancelAppointment(id: string, orgId: string) {
    const apt = await this.aptRepo.findUnique(id);
    if (!apt || apt.org_id !== orgId) throw new Error('Appointment not found');
    
    return this.aptRepo.update(id, { status: 'cancelled' });
  }
}
