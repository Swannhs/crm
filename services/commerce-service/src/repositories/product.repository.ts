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

  async update(id: string, orgId: string, data: any) {
    const { variants, attributes, modifierGroups, ...productData } = data;

    return db.$transaction(async (tx) => {
      const existing = await tx.product.findFirst({
        where: { id, orgId }
      });

      if (!existing) {
        throw new Error('Product not found');
      }

      await tx.productVariant.deleteMany({ where: { productId: id } });
      await tx.productAttribute.deleteMany({ where: { productId: id } });
      await tx.productModifierGroup.deleteMany({ where: { productId: id } });

      return tx.product.update({
        where: { id },
        data: {
          ...productData,
          variants: variants ? { create: variants } : undefined,
          attributes: attributes ? { create: attributes } : undefined,
          modifierGroups: modifierGroups
            ? {
                create: modifierGroups.map((group: any) => ({
                  name: group.name,
                  minSelected: group.minSelected,
                  maxSelected: group.maxSelected,
                  modifiers: { create: group.modifiers || [] }
                }))
              }
            : undefined
        },
        include: {
          variants: true,
          attributes: true,
          modifierGroups: {
            include: { modifiers: true }
          }
        }
      });
    });
  }

  async delete(id: string, orgId: string) {
    return db.product.deleteMany({ where: { id, orgId } });
  }
}
