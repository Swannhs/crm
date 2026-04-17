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
