import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { addMinutes, format, parse, startOfDay, endOfDay, isBefore, isAfter, eachMinuteOfInterval } from 'date-fns';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(orgId: string, data: any) {
    // Basic validation
    const bookingType = await this.prisma.bookingType.findUnique({
      where: { id: data.bookingTypeId }
    });

    if (!bookingType) throw new NotFoundException('Booking type not found');

    const startTime = new Date(data.startTime);
    const endTime = addMinutes(startTime, bookingType.durationMinutes);

    return this.prisma.appointment.create({
      data: {
        ...data,
        orgId,
        startTime,
        endTime,
      }
    });
  }

  async findAll(orgId: string, contactId?: string) {
    const where: any = { orgId };
    if (contactId) where.contactId = contactId;

    return this.prisma.appointment.findMany({
      where,
      include: {
        bookingType: true
      },
      orderBy: { startTime: 'asc' }
    });
  }

  async findOne(id: string) {
    return this.prisma.appointment.findUnique({
      where: { id },
      include: { bookingType: true }
    });
  }

  async update(id: string, data: any) {
    return this.prisma.appointment.update({
      where: { id },
      data
    });
  }

  async getAvailableSlots(bookingTypeId: string, dateStr: string) {
    const bookingType = await this.prisma.bookingType.findUnique({
      where: { id: bookingTypeId },
      include: { availabilities: true }
    });

    if (!bookingType) throw new NotFoundException('Booking type not found');

    const date = new Date(dateStr);
    const dayOfWeek = date.getDay();
    const dayAvailability = bookingType.availabilities.find(a => a.dayOfWeek === dayOfWeek);

    if (!dayAvailability) return [];

    // Get existing appointments for this day
    const dayStart = startOfDay(date);
    const dayEnd = endOfDay(date);

    const existingAppointments = await this.prisma.appointment.findMany({
      where: {
        bookingTypeId,
        startTime: { gte: dayStart, lte: dayEnd },
        status: { notIn: ['CANCELLED'] }
      }
    });

    // Generate possible slots
    const slots = [];
    const [startH, startM] = dayAvailability.startTime.split(':').map(Number);
    const [endH, endM] = dayAvailability.endTime.split(':').map(Number);

    let currentSlot = new Date(date);
    currentSlot.setHours(startH, startM, 0, 0);

    const dayEndTime = new Date(date);
    dayEndTime.setHours(endH, endM, 0, 0);

    while (isBefore(addMinutes(currentSlot, bookingType.durationMinutes), dayEndTime) || 
           format(addMinutes(currentSlot, bookingType.durationMinutes), 'HH:mm') === dayAvailability.endTime) {
      
      const slotEnd = addMinutes(currentSlot, bookingType.durationMinutes);
      
      // Check for overlap
      const isBooked = existingAppointments.some(app => {
        return (isBefore(currentSlot, app.endTime) && isAfter(slotEnd, app.startTime));
      });

      if (!isBooked) {
        slots.push({
          start: format(currentSlot, "yyyy-MM-dd'T'HH:mm:ssXXX"),
          end: format(slotEnd, "yyyy-MM-dd'T'HH:mm:ssXXX"),
          label: format(currentSlot, 'HH:mm')
        });
      }

      currentSlot = addMinutes(currentSlot, bookingType.durationMinutes + bookingType.bufferMinutes);
    }

    return slots;
  }
}
