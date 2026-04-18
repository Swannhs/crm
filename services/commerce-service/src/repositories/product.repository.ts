import { db } from '../db.js';

export class ProductRepository {
  async findMany(orgId: string) {
    return db.product.findMany({
      where: { orgId },
      orderBy: { name: 'asc' }
    });
  }

  async findUnique(id: string, orgId: string) {
    return db.product.findFirst({
      where: { id, orgId }
    });
  }

  async create(data: any) {
    return db.product.create({ data });
  }

  async update(id: string, data: any) {
    return db.product.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return db.product.delete({ where: { id } });
  }
}
