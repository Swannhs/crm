import { AppointmentRepository } from '../repositories/appointment.repository.js';
import { BookingTypeRepository } from '../repositories/booking-type.repository.js';
import { randomUUID } from "node:crypto";

export class BookingService {
  private aptRepo = new AppointmentRepository();
  private bookingTypeRepo = new BookingTypeRepository();

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
