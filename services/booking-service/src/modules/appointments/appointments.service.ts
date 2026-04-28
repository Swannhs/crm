import { Injectable, NotFoundException, BadRequestException, UnauthorizedException, Inject } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { addMinutes, format, startOfDay, endOfDay, isBefore, isAfter } from 'date-fns';

@Injectable()
export class AppointmentsService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(orgId: string, data: any) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');

    // Basic validation
    const bookingType = await this.prisma.bookingType.findUnique({
      where: { id: data.bookingTypeId }
    });

    if (!bookingType) throw new NotFoundException('Booking type not found');
    if (bookingType.orgId !== orgId) {
      throw new BadRequestException('Booking type does not belong to the authenticated organization');
    }

    const startTime = new Date(data.startTime);
    const endTime = addMinutes(startTime, bookingType.durationMinutes);
    const { orgId: _ignoredOrgId, ...safeData } = data;

    return this.prisma.appointment.create({
      data: {
        ...safeData,
        orgId,
        startTime,
        endTime,
      }
    });
  }

  async createPublic(data: any) {
    if (!data?.bookingTypeId) {
      throw new BadRequestException('bookingTypeId is required for public booking');
    }

    const bookingType = await this.prisma.bookingType.findUnique({
      where: { id: data.bookingTypeId }
    });

    if (!bookingType) throw new NotFoundException('Booking type not found');
    if (!bookingType.isActive) throw new BadRequestException('Booking type is not active');

    const startTime = new Date(data.startTime);
    const endTime = addMinutes(startTime, bookingType.durationMinutes);
    const { orgId: _ignoredOrgId, ...safeData } = data;

    return this.prisma.appointment.create({
      data: {
        ...safeData,
        orgId: bookingType.orgId,
        startTime,
        endTime,
      },
    });
  }

  async findAll(orgId: string, contactId?: string) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');
    const where: any = { orgId };
    if (contactId) where.contactId = contactId;

    try {
      return await this.prisma.appointment.findMany({
        where,
        include: {
          bookingType: true
        },
        orderBy: { startTime: 'asc' }
      });
    } catch (errorWithInclude) {
      // Keep the endpoint usable even if relational rows are partially inconsistent.
      try {
        return await this.prisma.appointment.findMany({
          where,
          orderBy: { startTime: 'asc' },
        });
      } catch (errorPlain) {
        console.error('AppointmentsService.findAll failed', {
          orgId,
          contactId,
          errorWithInclude: errorWithInclude instanceof Error ? errorWithInclude.message : String(errorWithInclude),
          errorPlain: errorPlain instanceof Error ? errorPlain.message : String(errorPlain),
        });
        return [];
      }
    }
  }

  async findOne(orgId: string, id: string) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');

    const appointment = await this.prisma.appointment.findFirst({
      where: { id, orgId },
      include: { bookingType: true }
    });

    if (!appointment) throw new NotFoundException(`Appointment ${id} not found`);
    return appointment;
  }

  async update(orgId: string, id: string, data: any) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');
    const { count } = await this.prisma.appointment.updateMany({
      where: { id, orgId },
      data,
    });

    if (count === 0) throw new NotFoundException(`Appointment ${id} not found`);
    return this.findOne(orgId, id);
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
