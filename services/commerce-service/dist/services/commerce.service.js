import { OrderRepository } from '../repositories/order.repository.js';
import { ProductRepository } from '../repositories/product.repository.js';
import { CategoryRepository } from '../repositories/category.repository.js';
export class CommerceService {
    orderRepo = new OrderRepository();
    productRepo = new ProductRepository();
    async createOrder(orgId, userId, data) {
        return this.orderRepo.withTransaction(async (tx) => {
            const { contact_id, items, shipping_address } = data;
            let totalAmountCents = 0;
            for (const item of items) {
                totalAmountCents += (item.unit_price_cents || 0) * (item.quantity || 1);
            }
            return tx.order.create({
                data: {
                    orgId,
                    userId,
                    contactId: contact_id || null,
                    totalAmountCents,
                    status: "pending",
                    paymentStatus: "unpaid",
                    shippingAddress: shipping_address || {},
                    items: {
                        create: items.map((item) => ({
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
    async getOrders(orgId) {
        return this.orderRepo.findMany(orgId);
    }
}
export class ProductService {
    productRepo = new ProductRepository();
    categoryRepo = new CategoryRepository();
    serializeProduct(product, categoryLookup) {
        const metadata = (product?.metadata || {});
        const matchedCategory = (metadata.categoryId && categoryLookup?.get(metadata.categoryId)) ||
            null;
        const resolvedCategoryName = matchedCategory?.name || metadata.categoryName || null;
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
    async getProducts(orgId) {
        const [products, categories] = await Promise.all([
            this.productRepo.findMany(orgId),
            this.categoryRepo.findAll(orgId),
        ]);
        const categoryLookup = new Map(categories.map((category) => [category.id, category]));
        return products.map((product) => this.serializeProduct(product, categoryLookup));
    }
    async getProductById(orgId, id) {
        const [product, categories] = await Promise.all([
            this.productRepo.findUnique(id, orgId),
            this.categoryRepo.findAll(orgId),
        ]);
        const categoryLookup = new Map(categories.map((category) => [category.id, category]));
        return product ? this.serializeProduct(product, categoryLookup) : null;
    }
    async createProduct(orgId, data) {
        const category = data.category_id ? await this.categoryRepo.findById(orgId, data.category_id) : null;
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
            variants: (data.variants || []).map((variant) => ({
                name: variant.name,
                sku: variant.sku || null,
                priceCents: variant.priceCents ?? variant.price_cents ?? 0,
                stock: variant.stock ?? 0,
                options: variant.options || {},
            })),
            attributes: (data.attributes || []).map((attribute) => ({
                name: attribute.name,
                values: attribute.values || [],
            })),
            modifierGroups: (data.modifierGroups || []).map((group) => ({
                name: group.name,
                minSelected: group.minSelected ?? 0,
                maxSelected: group.maxSelected ?? null,
                modifiers: (group.modifiers || []).map((modifier) => ({
                    name: modifier.name,
                    priceCents: modifier.priceCents ?? modifier.price_cents ?? 0,
                })),
            })),
        });
        const categoryLookup = new Map(category ? [[category.id, category]] : []);
        return this.serializeProduct(product, categoryLookup);
    }
    async updateProduct(orgId, id, data) {
        const category = data.category_id ? await this.categoryRepo.findById(orgId, data.category_id) : null;
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
        const product = await this.productRepo.update(id, orgId, {
            name: data.name,
            description: data.description,
            priceCents: data.price_cents,
            photos: data.photos || [],
            status: data.status || 'draft',
            metadata,
            variants: (data.variants || []).map((variant) => ({
                name: variant.name,
                sku: variant.sku || null,
                priceCents: variant.priceCents ?? variant.price_cents ?? 0,
                stock: variant.stock ?? 0,
                options: variant.options || {},
            })),
            attributes: (data.attributes || []).map((attribute) => ({
                name: attribute.name,
                values: attribute.values || [],
            })),
            modifierGroups: (data.modifierGroups || []).map((group) => ({
                name: group.name,
                minSelected: group.minSelected ?? 0,
                maxSelected: group.maxSelected ?? null,
                modifiers: (group.modifiers || []).map((modifier) => ({
                    name: modifier.name,
                    priceCents: modifier.priceCents ?? modifier.price_cents ?? 0,
                })),
            })),
        });
        const categoryLookup = new Map(category ? [[category.id, category]] : []);
        return this.serializeProduct(product, categoryLookup);
    }
    async deleteProduct(orgId, id) {
        return this.productRepo.delete(id, orgId);
    }
}
