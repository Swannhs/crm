import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class BookingTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(orgId: string, data: any) {
    const slug = data.slug || data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    return this.prisma.bookingType.create({
      data: {
        ...data,
        orgId,
        slug,
        availabilities: {
          create: data.availabilities || []
        }
      },
      include: {
        availabilities: true
      }
    });
  }

  async findAll(orgId: string) {
    return this.prisma.bookingType.findMany({
      where: { orgId, isActive: true },
      include: {
        availabilities: true
      }
    });
  }

  async findOne(idOrSlug: string) {
    const bookingType = await this.prisma.bookingType.findFirst({
      where: {
        OR: [
          { id: idOrSlug },
          { slug: idOrSlug }
        ]
      },
      include: {
        availabilities: true
      }
    });

    if (!bookingType) {
      throw new NotFoundException(`Booking type ${idOrSlug} not found`);
    }

    return bookingType;
  }

  async update(id: string, data: any) {
    const { availabilities, ...rest } = data;

    if (availabilities) {
      await this.prisma.availability.deleteMany({
        where: { bookingTypeId: id }
      });
      
      return this.prisma.bookingType.update({
        where: { id },
        data: {
          ...rest,
          availabilities: {
            create: availabilities
          }
        },
        include: {
          availabilities: true
        }
      });
    }

    return this.prisma.bookingType.update({
      where: { id },
      data: rest,
      include: {
        availabilities: true
      }
    });
  }

  async remove(id: string) {
    return this.prisma.bookingType.update({
      where: { id },
      data: { isActive: false }
    });
  }
}
