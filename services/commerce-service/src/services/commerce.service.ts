import { OrderRepository } from '../repositories/order.repository.js';
import { ProductRepository } from '../repositories/product.repository.js';
import { CategoryRepository } from '../repositories/category.repository.js';

export class CommerceService {
  private orderRepo = new OrderRepository();
  private productRepo = new ProductRepository();

  async createOrder(orgId: string, userId: string, data: any) {
    return this.orderRepo.withTransaction(async (tx) => {
      const { contact_id, items, shipping_address, coupon_code, discount_cents } = data;
      
      let subtotalAmountCents = 0;
      for (const item of items) {
        subtotalAmountCents += (item.unit_price_cents || 0) * (item.quantity || 1);
      }

      let appliedCoupon: any = null;
      if (coupon_code) {
        appliedCoupon = await tx.coupon.findFirst({
          where: { orgId, code: String(coupon_code).trim().toUpperCase() },
        });

        if (
          appliedCoupon &&
          appliedCoupon.isActive &&
          (!appliedCoupon.expiresAt || appliedCoupon.expiresAt >= new Date()) &&
          appliedCoupon.minOrderCents <= subtotalAmountCents &&
          (appliedCoupon.maxUsage === null || appliedCoupon.usedCount < appliedCoupon.maxUsage)
        ) {
          await tx.coupon.update({
            where: { id: appliedCoupon.id },
            data: { usedCount: { increment: 1 } },
          });
        } else {
          appliedCoupon = null;
        }
      }

      const safeDiscountCents = Math.max(0, Math.min(Number(discount_cents || 0), subtotalAmountCents));
      const totalAmountCents = Math.max(0, subtotalAmountCents - safeDiscountCents);

      return tx.order.create({
        data: {
          orgId,
          userId,
          contactId: contact_id || null,
          totalAmountCents,
          status: "pending",
          paymentStatus: "unpaid",
          shippingAddress: shipping_address || {},
          metadata: {
            couponCode: appliedCoupon?.code || null,
            discountCents: safeDiscountCents,
            subtotalAmountCents,
          },
          items: {
            create: items.map((item: any) => ({
              productId: item.product_id,
              productName: item.product_name,
              quantity: item.quantity,
              unitPriceCents: item.unit_price_cents
            }))
          }
        },
        include: { items: true }
      });
    });
  }

  async getOrders(orgId: string) {
    return this.orderRepo.findMany(orgId);
  }
}

export class ProductService {
  private productRepo = new ProductRepository();
  private categoryRepo = new CategoryRepository();

  private serializeProduct(product: any, categoryLookup?: Map<string, any>) {
    const metadata = (product?.metadata || {}) as Record<string, any>;
    const matchedCategory =
      (metadata.categoryId && categoryLookup?.get(metadata.categoryId)) ||
      null;
    const resolvedCategoryName =
      matchedCategory?.name || metadata.categoryName || null;

    return {
      ...product,
      sku: metadata.sku || null,
      barcode: metadata.barcode || null,
      categoryId: metadata.categoryId || null,
      categoryName: resolvedCategoryName,
      compareAtPriceCents: metadata.compareAtPriceCents || 0,
      costCents: metadata.costCents || 0,
      lowStockThreshold: metadata.lowStockThreshold || 5,
      tags: Array.isArray(metadata.tags) ? metadata.tags : [],
    };
  }

  async getProducts(orgId: string) {
    const [products, categories] = await Promise.all([
      this.productRepo.findMany(orgId),
      this.categoryRepo.findAll(orgId),
    ]);
    const categoryLookup = new Map(categories.map((category) => [category.id, category]));
    return products.map((product) => this.serializeProduct(product, categoryLookup));
  }

  async getProductById(orgId: string, id: string) {
    const [product, categories] = await Promise.all([
      this.productRepo.findUnique(id, orgId),
      this.categoryRepo.findAll(orgId),
    ]);
    const categoryLookup = new Map(categories.map((category) => [category.id, category]));
    return product ? this.serializeProduct(product, categoryLookup) : null;
  }

  async createProduct(orgId: string, data: any) {
    const category =
      data.category_id ? await this.categoryRepo.findById(orgId, data.category_id) : null;
    const metadata = {
      sku: data.sku || null,
      barcode: data.barcode || null,
      categoryId: category?.id || null,
      categoryName: category?.name || data.categoryName || null,
      compareAtPriceCents: data.compare_at_price_cents || 0,
      costCents: data.cost_cents || 0,
      lowStockThreshold: data.low_stock_threshold || 5,
      tags: Array.isArray(data.tags) ? data.tags : [],
    };

    const product = await this.productRepo.create({
      orgId,
      name: data.name,
      description: data.description,
      priceCents: data.price_cents,
      photos: data.photos || [],
      status: data.status || "draft",
      metadata,
      variants: (data.variants || []).map((variant: any) => ({
        name: variant.name,
        sku: variant.sku || null,
        priceCents: variant.priceCents ?? variant.price_cents ?? 0,
        stock: variant.stock ?? 0,
        options: variant.options || {},
      })),
      attributes: (data.attributes || []).map((attribute: any) => ({
        name: attribute.name,
        values: attribute.values || [],
      })),
      modifierGroups: (data.modifierGroups || []).map((group: any) => ({
        name: group.name,
        minSelected: group.minSelected ?? 0,
        maxSelected: group.maxSelected ?? null,
        modifiers: (group.modifiers || []).map((modifier: any) => ({
          name: modifier.name,
          priceCents: modifier.priceCents ?? modifier.price_cents ?? 0,
        })),
      })),
    });

    const categoryLookup = new Map(category ? [[category.id, category]] : []);
    return this.serializeProduct(product, categoryLookup);
  }

  async updateProduct(orgId: string, id: string, data: any) {
    const existingProduct = await this.productRepo.findUnique(id, orgId);
    if (!existingProduct) {
      throw new Error('Product not found');
    }

    const existingMetadata = (existingProduct.metadata || {}) as Record<string, any>;
    const categoryId = data.category_id ?? existingMetadata.categoryId ?? null;
    const category =
      categoryId ? await this.categoryRepo.findById(orgId, categoryId) : null;
    const metadata = {
      sku: data.sku ?? existingMetadata.sku ?? null,
      barcode: data.barcode ?? existingMetadata.barcode ?? null,
      categoryId: category?.id || categoryId || null,
      categoryName: category?.name || data.categoryName || existingMetadata.categoryName || null,
      compareAtPriceCents: data.compare_at_price_cents ?? existingMetadata.compareAtPriceCents ?? 0,
      costCents: data.cost_cents ?? existingMetadata.costCents ?? 0,
      lowStockThreshold: data.low_stock_threshold ?? existingMetadata.lowStockThreshold ?? 5,
      tags: Array.isArray(data.tags) ? data.tags : existingMetadata.tags || [],
    };

    const product = await this.productRepo.update(id, orgId, {
      name: data.name ?? existingProduct.name,
      description: data.description ?? existingProduct.description,
      priceCents: data.price_cents ?? existingProduct.priceCents,
      photos: data.photos ?? existingProduct.photos ?? [],
      status: data.status ?? existingProduct.status ?? 'draft',
      metadata,
      variants: (data.variants || []).map((variant: any) => ({
        name: variant.name,
        sku: variant.sku || null,
        priceCents: variant.priceCents ?? variant.price_cents ?? 0,
        stock: variant.stock ?? 0,
        options: variant.options || {},
      })),
      attributes: (data.attributes || []).map((attribute: any) => ({
        name: attribute.name,
        values: attribute.values || [],
      })),
      modifierGroups: (data.modifierGroups || []).map((group: any) => ({
        name: group.name,
        minSelected: group.minSelected ?? 0,
        maxSelected: group.maxSelected ?? null,
        modifiers: (group.modifiers || []).map((modifier: any) => ({
          name: modifier.name,
          priceCents: modifier.priceCents ?? modifier.price_cents ?? 0,
        })),
      })),
    });

    const categoryLookup = new Map(category ? [[category.id, category]] : []);
    return this.serializeProduct(product, categoryLookup);
  }

  async deleteProduct(orgId: string, id: string) {
    return this.productRepo.delete(id, orgId);
  }
}
