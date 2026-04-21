import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CouponRepository {
  async findAll(orgId: string) {
    return prisma.coupon.findMany({
      where: { orgId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: any) {
    return prisma.coupon.create({
      data: {
        orgId: data.orgId,
        code: data.code,
        type: data.type,
        value: data.value,
        minOrderCents: data.minOrderCents || 0,
        maxUsage: data.maxUsage,
        expiresAt: data.expiresAt ? new Date(data.expiresAt) : null,
        isActive: data.isActive ?? true,
        metadata: data.metadata || {},
      },
    });
  }

  async update(id: string, orgId: string, data: any) {
    await prisma.coupon.updateMany({
      where: { id, orgId },
      data: {
        code: data.code,
        type: data.type,
        value: data.value,
        minOrderCents: data.minOrderCents || 0,
        maxUsage: data.maxUsage ?? null,
        expiresAt: data.expiresAt ? new Date(data.expiresAt) : null,
        isActive: data.isActive ?? true,
        metadata: data.metadata || {},
      },
    });

    return prisma.coupon.findFirst({
      where: { id, orgId },
    });
  }

  async delete(id: string, orgId: string) {
    return prisma.coupon.deleteMany({
      where: { id, orgId },
    });
  }
}
