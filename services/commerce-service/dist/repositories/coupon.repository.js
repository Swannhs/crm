import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class CouponRepository {
    async findAll(orgId) {
        return prisma.coupon.findMany({
            where: { orgId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(data) {
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
}
