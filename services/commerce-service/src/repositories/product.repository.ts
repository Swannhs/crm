import { db } from '../db.js';

export class ProductRepository {
  async findMany(orgId: string) {
    return db.product.findMany({
      where: { orgId },
      include: {
        variants: true,
        attributes: true,
        modifierGroups: {
          include: { modifiers: true }
        }
      },
      orderBy: { name: 'asc' }
    });
  }

  async findUnique(id: string, orgId: string) {
    return db.product.findFirst({
      where: { id, orgId },
      include: {
        variants: true,
        attributes: true,
        modifierGroups: {
          include: { modifiers: true }
        }
      }
    });
  }

  async create(data: any) {
    const { variants, attributes, modifierGroups, ...productData } = data;
    
    return db.product.create({
      data: {
        ...productData,
        variants: variants ? { create: variants } : undefined,
        attributes: attributes ? { create: attributes } : undefined,
        modifierGroups: modifierGroups ? {
          create: modifierGroups.map((group: any) => ({
            name: group.name,
            minSelected: group.minSelected,
            maxSelected: group.maxSelected,
            modifiers: { create: group.modifiers }
          }))
        } : undefined
      },
      include: {
        variants: true,
        attributes: true,
        modifierGroups: {
          include: { modifiers: true }
        }
      }
    });
  }

  async update(id: string, data: any) {
    const { variants, attributes, modifierGroups, ...productData } = data;

    // For simplicity in this step, we'll focus on the product basic data.
    // Full nested update/sync logic for relations would require more complex diffing.
    return db.product.update({
      where: { id },
      data: productData,
      include: {
        variants: true,
        attributes: true,
        modifierGroups: {
          include: { modifiers: true }
        }
      }
    });
  }

  async delete(id: string) {
    return db.product.delete({ where: { id } });
  }
}
