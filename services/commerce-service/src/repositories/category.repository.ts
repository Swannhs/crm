import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CategoryRepository {
  async findAll(orgId: string) {
    return prisma.category.findMany({
      where: { orgId },
      orderBy: { name: 'asc' },
    });
  }

  async findById(orgId: string, id: string) {
    return prisma.category.findFirst({
      where: { orgId, id },
    });
  }

  async create(data: any) {
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

  async update(orgId: string, id: string, data: any) {
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

  async delete(orgId: string, id: string) {
    return prisma.category.deleteMany({
      where: { orgId, id },
    });
  }
}
