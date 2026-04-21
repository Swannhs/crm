import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CategoryRepository {
  async findAll(orgId: string) {
    return prisma.category.findMany({
      where: { orgId },
      orderBy: { name: 'asc' },
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
}
