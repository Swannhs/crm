import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class CategoryRepository {
    async findAll(orgId) {
        return prisma.category.findMany({
            where: { orgId },
            orderBy: { name: 'asc' },
        });
    }
    async findById(orgId, id) {
        return prisma.category.findFirst({
            where: { orgId, id },
        });
    }
    async create(data) {
        return prisma.category.create({
            data: {
                orgId: data.orgId,
                name: data.name,
                description: data.description,
                parentId: data.parentId,
                slug: data.slug,
                image_url: data.image_url,
                isActive: data.isActive ?? true,
                metadata: data.metadata || {},
            },
        });
    }
    async update(orgId, id, data) {
        return prisma.category.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description,
                parentId: data.parentId,
                slug: data.slug,
                image_url: data.image_url,
                isActive: data.isActive,
                metadata: data.metadata || {},
            },
        });
    }
    async delete(orgId, id) {
        return prisma.category.deleteMany({
            where: { orgId, id },
        });
    }
}
