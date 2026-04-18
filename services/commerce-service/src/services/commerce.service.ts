import { OrderRepository } from '../repositories/order.repository.js';
import { ProductRepository } from '../repositories/product.repository.js';

export class CommerceService {
  private orderRepo = new OrderRepository();
  private productRepo = new ProductRepository();

  async createOrder(orgId: string, userId: string, data: any) {
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

  async getProducts(orgId: string) {
    return this.productRepo.findMany(orgId);
  }

  async createProduct(orgId: string, data: any) {
    return this.productRepo.create({
      orgId,
      name: data.name,
      description: data.description,
      priceCents: data.price_cents,
      photos: data.photos || [],
      status: data.status || "draft"
    });
  }
}
