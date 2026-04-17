import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "commerce-service", jsonLimit: "1mb" });

// Products API
app.get("/v1/products", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;

  try {
    const products = await db.product.findMany({
      where: { orgId: orgId },
      orderBy: { name: 'asc' }
    });
    res.json({ data: products });
  } catch (err) {
    logger.error({ err }, "Failed to fetch products");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/products", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, description, price_cents, photos, status } = req.body;

  if (!name || price_cents === undefined) {
    return res.status(400).json({ message: "Name and price_cents are required" });
  }

  try {
    const product = await db.product.create({
      data: {
        orgId: orgId,
        name,
        description,
        priceCents: price_cents,
        photos: photos || [],
        status: status || "draft"
      }
    });

    res.status(201).json({ data: product });
  } catch (err) {
    logger.error({ err }, "Failed to create product");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Orders API
app.post("/v1/orders", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { contact_id, items, shipping_address } = req.body;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Items are required" });
  }

  try {
    const order = await db.$transaction(async (tx) => {
      // 1. Calculate total
      let totalAmountCents = 0;
      for (const item of items) {
        totalAmountCents += item.unit_price_cents * item.quantity;
      }

      // 2. Create order with nested items
      const newOrder = await tx.order.create({
        data: {
          orgId: orgId,
          contactId: contact_id || null,
          userId: userId,
          totalAmountCents: totalAmountCents,
          status: "pending",
          paymentStatus: "unpaid",
          shippingAddress: shipping_address || {},
          items: {
            create: items.map(item => ({
              productId: item.product_id,
              productName: item.product_name,
              quantity: item.quantity,
              unitPriceCents: item.unit_price_cents
            }))
          }
        },
        include: {
          items: true
        }
      });

      return newOrder;
    });

    res.status(201).json({ data: order });
  } catch (err) {
    logger.error({ err }, "Failed to create order");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/orders", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;

  try {
    const orders = await db.order.findMany({
      where: { orgId: orgId },
      orderBy: { createdAt: 'desc' },
      include: { items: true }
    });
    res.json({ data: orders });
  } catch (err) {
    logger.error({ err }, "Failed to fetch orders");
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = Number(process.env.PORT || 7060);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "commerce-service listening");
});

// ─── Products (extended) ──────────────────────────────────────────────────────

app.get("/v1/products/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const product = await db.product.findFirst({ where: { id: req.params.id, orgId } });
  if (!product) return res.status(404).json({ message: "Not found" });
  res.json({ data: product });
});

app.put("/v1/products/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.product.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { name, description, price_cents, photos, status, metadata } = req.body;
  const product = await db.product.update({
    where: { id: req.params.id },
    data: { name, description, priceCents: price_cents, photos, status, metadata }
  });
  res.json({ data: product });
});

app.delete("/v1/products/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.product.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  await db.product.delete({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

// ─── Categories ───────────────────────────────────────────────────────────────

app.get("/v1/categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const categories = await db.category.findMany({ where: { orgId }, orderBy: { name: "asc" } });
  res.json({ data: categories });
});

app.post("/v1/categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, description, parent_id, slug, image_url } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const cat = await db.category.create({ data: { orgId, name, description, parentId: parent_id, slug, imageUrl: image_url } });
  res.status(201).json({ data: cat });
});

app.put("/v1/categories/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.category.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { name, description, slug, image_url, is_active } = req.body;
  const cat = await db.category.update({ where: { id: req.params.id }, data: { name, description, slug, imageUrl: image_url, isActive: is_active } });
  res.json({ data: cat });
});

app.delete("/v1/categories/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.category.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Coupons ──────────────────────────────────────────────────────────────────

app.get("/v1/coupons", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const coupons = await db.coupon.findMany({ where: { orgId }, orderBy: { createdAt: "desc" } });
  res.json({ data: coupons });
});

app.post("/v1/coupons", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { code, type, value, min_order_cents, max_usage, expires_at } = req.body;
  if (!code || !type || value == null) return res.status(400).json({ message: "code, type, value required" });
  const coupon = await db.coupon.create({
    data: { orgId, code: code.toUpperCase(), type, value, minOrderCents: min_order_cents || 0, maxUsage: max_usage, expiresAt: expires_at ? new Date(expires_at) : null }
  });
  res.status(201).json({ data: coupon });
});

app.put("/v1/coupons/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.coupon.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { code, type, value, min_order_cents, max_usage, expires_at, is_active } = req.body;
  const coupon = await db.coupon.update({
    where: { id: req.params.id },
    data: { code: code?.toUpperCase(), type, value, minOrderCents: min_order_cents, maxUsage: max_usage, expiresAt: expires_at ? new Date(expires_at) : undefined, isActive: is_active }
  });
  res.json({ data: coupon });
});

app.delete("/v1/coupons/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.coupon.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

app.post("/v1/coupons/validate", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { code, order_total_cents } = req.body;
  const coupon = await db.coupon.findFirst({ where: { orgId, code: code?.toUpperCase(), isActive: true } });
  if (!coupon) return res.status(404).json({ message: "Invalid coupon" });
  if (coupon.expiresAt && new Date() > coupon.expiresAt) return res.status(400).json({ message: "Coupon expired" });
  if (coupon.maxUsage && coupon.usedCount >= coupon.maxUsage) return res.status(400).json({ message: "Coupon usage limit reached" });
  if (order_total_cents < coupon.minOrderCents) return res.status(400).json({ message: `Minimum order is ${coupon.minOrderCents} cents` });
  const discount = coupon.type === "percent" ? Math.round(order_total_cents * coupon.value / 100) : coupon.value;
  res.json({ data: { coupon, discount_cents: discount } });
});

// ─── Orders (extended) ────────────────────────────────────────────────────────

app.get("/v1/orders/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const order = await db.order.findFirst({ where: { id: req.params.id, orgId }, include: { items: true } });
  if (!order) return res.status(404).json({ message: "Not found" });
  res.json({ data: order });
});

app.put("/v1/orders/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.order.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { status, payment_status, shipping_address, metadata } = req.body;
  const order = await db.order.update({ where: { id: req.params.id }, data: { status, paymentStatus: payment_status, shippingAddress: shipping_address, metadata } });
  res.json({ data: order });
});

app.delete("/v1/orders/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.order.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  await db.order.delete({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

// ─── Cart ─────────────────────────────────────────────────────────────────────

app.get("/v1/cart", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const cart = await db.cart.findFirst({ where: { orgId, userId, status: "active" }, include: { items: true } });
  res.json({ data: cart || null });
});

app.post("/v1/cart/items", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { product_id, product_name, unit_price_cents, quantity = 1 } = req.body;
  if (!product_id || !product_name || unit_price_cents == null) return res.status(400).json({ message: "product_id, product_name, unit_price_cents required" });
  let cart = await db.cart.findFirst({ where: { orgId, userId, status: "active" } });
  if (!cart) cart = await db.cart.create({ data: { orgId, userId } });
  const item = await db.cartItem.create({ data: { cartId: cart.id, productId: product_id, productName: product_name, unitPriceCents: unit_price_cents, quantity } });
  const updatedCart = await db.cart.findUnique({ where: { id: cart.id }, include: { items: true } });
  res.status(201).json({ data: updatedCart });
});

app.delete("/v1/cart/items/:itemId", requireIdentityContext, async (req, res) => {
  await db.cartItem.delete({ where: { id: req.params.itemId } });
  res.json({ message: "Item removed" });
});

app.delete("/v1/cart", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  await db.cart.updateMany({ where: { orgId, userId, status: "active" }, data: { status: "abandoned" } });
  res.json({ message: "Cart cleared" });
});

// ─── Health ───────────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => res.json({ status: "ok", service: "commerce-service" }));
