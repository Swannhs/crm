import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class AvailabilityService {
  constructor(private readonly prisma: PrismaService) {}

  private normalizeTime(value: string) {
    const trimmed = String(value || '').trim();
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(trimmed)) {
      throw new BadRequestException('Time must use HH:mm format.');
    }
    return trimmed;
  }

  private assertRange(startTime: string, endTime: string) {
    if (startTime >= endTime) {
      throw new BadRequestException('endTime must be after startTime.');
    }
  }

  async findAll(orgId: string, bookingTypeId?: string) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');
    const where: any = { bookingType: { orgId } };
    if (bookingTypeId) where.bookingTypeId = bookingTypeId;

    return this.prisma.availability.findMany({
      where,
      include: {
        bookingType: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
      orderBy: [{ bookingTypeId: 'asc' }, { dayOfWeek: 'asc' }, { startTime: 'asc' }],
    });
  }

  async create(orgId: string, data: any) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');
    const bookingTypeId = String(data?.bookingTypeId || '').trim();
    if (!bookingTypeId) throw new BadRequestException('bookingTypeId is required.');

    const dayOfWeek = Number(data?.dayOfWeek);
    if (!Number.isInteger(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6) {
      throw new BadRequestException('dayOfWeek must be an integer between 0 and 6.');
    }

    const startTime = this.normalizeTime(data?.startTime);
    const endTime = this.normalizeTime(data?.endTime);
    this.assertRange(startTime, endTime);

    const bookingType = await this.prisma.bookingType.findFirst({ where: { id: bookingTypeId, orgId } });
    if (!bookingType) {
      throw new BadRequestException('bookingTypeId is invalid for this organization.');
    }

    return this.prisma.availability.create({
      data: {
        bookingTypeId,
        dayOfWeek,
        startTime,
        endTime,
      },
      include: {
        bookingType: {
          select: { id: true, title: true, slug: true },
        },
      },
    });
  }

  async update(orgId: string, id: string, data: any) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');
    const row = await this.prisma.availability.findFirst({
      where: { id, bookingType: { orgId } },
      include: { bookingType: { select: { id: true } } },
    });
    if (!row) throw new NotFoundException(`Availability rule ${id} not found.`);

    const patch: any = {};
    if (data?.dayOfWeek !== undefined) {
      const dayOfWeek = Number(data.dayOfWeek);
      if (!Number.isInteger(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6) {
        throw new BadRequestException('dayOfWeek must be an integer between 0 and 6.');
      }
      patch.dayOfWeek = dayOfWeek;
    }

    if (data?.startTime !== undefined) patch.startTime = this.normalizeTime(data.startTime);
    if (data?.endTime !== undefined) patch.endTime = this.normalizeTime(data.endTime);

    const nextStart = patch.startTime ?? row.startTime;
    const nextEnd = patch.endTime ?? row.endTime;
    this.assertRange(nextStart, nextEnd);

    if (Object.keys(patch).length === 0) {
      throw new BadRequestException('No updatable fields provided.');
    }

    return this.prisma.availability.update({
      where: { id: row.id },
      data: patch,
      include: {
        bookingType: {
          select: { id: true, title: true, slug: true },
        },
      },
    });
  }

  async remove(orgId: string, id: string) {
    if (!orgId) throw new UnauthorizedException('Missing X-Org-Id header');
    const row = await this.prisma.availability.findFirst({ where: { id, bookingType: { orgId } } });
    if (!row) throw new NotFoundException(`Availability rule ${id} not found.`);

    await this.prisma.availability.delete({ where: { id: row.id } });
    return { success: true };
  }
}
