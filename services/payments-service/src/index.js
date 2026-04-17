import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";

const { app, logger } = createServiceApp({
  serviceName: "payments-service",
  jsonLimit: "10mb",
  urlEncodedLimit: "10mb"
});

// ─── Invoices ────────────────────────────────────────────────────────────────

app.get("/v1/invoices", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, contact_id, page = 1, limit = 20 } = req.query;
  const where = { orgId, isDelete: false };
  if (status) where.status = status;
  if (contact_id) where.contactId = contact_id;
  const [data, total] = await Promise.all([
    db.invoice.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * +limit,
      take: +limit,
      include: { payments: true }
    }),
    db.invoice.count({ where })
  ]);
  res.json({ data, total, page: +page, limit: +limit });
});

app.post("/v1/invoices", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { contact_id, title, invoice_number, line_items = [], amount_cents, tax_cents = 0, discount_cents = 0, currency = "USD", due_date, metadata = {} } = req.body;
  const total_cents = (amount_cents || 0) + (tax_cents || 0) - (discount_cents || 0);
  const invoice = await db.invoice.create({
    data: {
      orgId,
      createdByUserId: userId,
      contactId: contact_id,
      title,
      invoiceNumber: invoice_number,
      lineItems: line_items,
      amountCents: BigInt(amount_cents || 0),
      taxCents: BigInt(tax_cents),
      discountCents: BigInt(discount_cents),
      totalCents: BigInt(total_cents),
      currency,
      dueDate: due_date ? new Date(due_date) : null,
      metadata
    }
  });
  res.status(201).json({ data: invoice });
});

app.get("/v1/invoices/stats", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const stats = await db.invoice.groupBy({
    by: ["status"],
    where: { orgId, isDelete: false },
    _count: true,
    _sum: { totalCents: true }
  });
  res.json({ data: stats });
});

app.get("/v1/invoices/due-stats", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const now = new Date();
  const [overdue, dueThisWeek] = await Promise.all([
    db.invoice.count({ where: { orgId, isDelete: false, status: { notIn: ["paid", "cancelled"] }, dueDate: { lt: now } } }),
    db.invoice.count({ where: { orgId, isDelete: false, status: { notIn: ["paid", "cancelled"] }, dueDate: { gte: now, lt: new Date(now.getTime() + 7 * 86400000) } } })
  ]);
  res.json({ data: { overdue, dueThisWeek } });
});

app.get("/v1/invoices/tax-statistics", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { year } = req.query;
  const start = new Date(`${year || new Date().getFullYear()}-01-01`);
  const end = new Date(`${(year || new Date().getFullYear()) + 1}-01-01`);
  const result = await db.invoice.aggregate({
    where: { orgId, isDelete: false, createdAt: { gte: start, lt: end } },
    _sum: { taxCents: true, totalCents: true }
  });
  res.json({ data: result._sum });
});

app.get("/v1/invoices/statistics/income", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { year } = req.query;
  const start = new Date(`${year || new Date().getFullYear()}-01-01`);
  const end = new Date(`${Number(year || new Date().getFullYear()) + 1}-01-01`);
  const invoices = await db.invoice.findMany({
    where: { orgId, isDelete: false, status: "paid", paidAt: { gte: start, lt: end } },
    select: { paidAt: true, paidCents: true }
  });
  // group by month
  const monthly = {};
  for (const inv of invoices) {
    const month = inv.paidAt?.getMonth() + 1;
    if (!monthly[month]) monthly[month] = 0n;
    monthly[month] += inv.paidCents;
  }
  res.json({ data: monthly });
});

app.get("/v1/invoices/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const invoice = await db.invoice.findFirst({
    where: { id: req.params.id, orgId },
    include: { payments: true, activities: { orderBy: { createdAt: "desc" } } }
  });
  if (!invoice) return res.status(404).json({ message: "Not found" });
  res.json({ data: invoice });
});

app.put("/v1/invoices/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.invoice.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { title, invoice_number, line_items, amount_cents, tax_cents, discount_cents, currency, due_date, status, metadata } = req.body;
  const total_cents = amount_cents != null ? BigInt(amount_cents + (tax_cents ?? 0) - (discount_cents ?? 0)) : undefined;
  const invoice = await db.invoice.update({
    where: { id: req.params.id },
    data: {
      ...(title != null && { title }),
      ...(invoice_number != null && { invoiceNumber: invoice_number }),
      ...(line_items != null && { lineItems: line_items }),
      ...(amount_cents != null && { amountCents: BigInt(amount_cents) }),
      ...(tax_cents != null && { taxCents: BigInt(tax_cents) }),
      ...(discount_cents != null && { discountCents: BigInt(discount_cents) }),
      ...(total_cents != null && { totalCents: total_cents }),
      ...(currency && { currency }),
      ...(due_date && { dueDate: new Date(due_date) }),
      ...(status && { status }),
      ...(metadata && { metadata })
    }
  });
  res.json({ data: invoice });
});

app.delete("/v1/invoices/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.invoice.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  await db.invoice.update({ where: { id: req.params.id }, data: { isDelete: true } });
  res.json({ message: "Deleted" });
});

app.post("/v1/invoices/:id/send-email", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const invoice = await db.invoice.findFirst({ where: { id: req.params.id, orgId } });
  if (!invoice) return res.status(404).json({ message: "Not found" });
  await db.invoice.update({ where: { id: req.params.id }, data: { status: "sent", sentAt: new Date() } });
  await db.invoiceActivity.create({ data: { invoiceId: invoice.id, orgId, action: "sent", note: "Invoice sent via email" } });
  res.json({ message: "Invoice marked as sent" });
});

app.post("/v1/invoices/:id/payments", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const invoice = await db.invoice.findFirst({ where: { id: req.params.id, orgId } });
  if (!invoice) return res.status(404).json({ message: "Not found" });
  const { amount_cents, method = "cash", reference, notes } = req.body;
  const payment = await db.payment.create({
    data: {
      invoiceId: invoice.id,
      orgId,
      createdByUserId: userId,
      amountCents: BigInt(amount_cents),
      method,
      reference,
      notes
    }
  });
  const newPaid = invoice.paidCents + BigInt(amount_cents);
  const newStatus = newPaid >= invoice.totalCents ? "paid" : invoice.status;
  await db.invoice.update({
    where: { id: invoice.id },
    data: {
      paidCents: newPaid,
      status: newStatus,
      ...(newStatus === "paid" && { paidAt: new Date() })
    }
  });
  await db.invoiceActivity.create({ data: { invoiceId: invoice.id, orgId, userId, action: "payment_added", note: `Payment of ${amount_cents} cents via ${method}` } });
  res.status(201).json({ data: payment });
});

app.post("/v1/invoices/:id/refund/cash", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const invoice = await db.invoice.findFirst({ where: { id: req.params.id, orgId } });
  if (!invoice) return res.status(404).json({ message: "Not found" });
  const { amount_cents, notes } = req.body;
  const payment = await db.payment.create({
    data: {
      invoiceId: invoice.id,
      orgId,
      createdByUserId: userId,
      amountCents: BigInt(-amount_cents),
      method: "cash",
      status: "refunded",
      notes: notes || "Cash refund"
    }
  });
  await db.invoice.update({ where: { id: invoice.id }, data: { paidCents: { decrement: BigInt(amount_cents) }, status: "refunded" } });
  res.json({ data: payment });
});

app.post("/v1/invoices/:id/refund/card", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const invoice = await db.invoice.findFirst({ where: { id: req.params.id, orgId } });
  if (!invoice) return res.status(404).json({ message: "Not found" });
  const { amount_cents, processor_id, notes } = req.body;
  const payment = await db.payment.create({
    data: {
      invoiceId: invoice.id,
      orgId,
      createdByUserId: userId,
      amountCents: BigInt(-amount_cents),
      method: "card",
      processor: "stripe",
      processorId: processor_id,
      status: "refunded",
      notes: notes || "Card refund"
    }
  });
  await db.invoice.update({ where: { id: invoice.id }, data: { paidCents: { decrement: BigInt(amount_cents) }, status: "refunded" } });
  res.json({ data: payment });
});

app.get("/v1/invoices/:id/activity", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const activities = await db.invoiceActivity.findMany({
    where: { invoiceId: req.params.id, orgId },
    orderBy: { createdAt: "desc" }
  });
  res.json({ data: activities });
});

app.patch("/v1/invoices/update-all-payments", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { invoice_ids, status } = req.body;
  if (!invoice_ids?.length || !status) return res.status(400).json({ message: "invoice_ids and status required" });
  await db.invoice.updateMany({ where: { id: { in: invoice_ids }, orgId }, data: { status } });
  res.json({ message: "Updated" });
});

// ─── Deposits ────────────────────────────────────────────────────────────────

app.get("/v1/deposits", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const deposits = await db.deposit.findMany({
    where: { orgId, isDeleted: false },
    orderBy: { createdAt: "desc" }
  });
  res.json({ data: deposits });
});

app.post("/v1/deposits", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { contact_id, amount_cents, currency = "USD", description, payment_method } = req.body;
  const deposit = await db.deposit.create({
    data: { orgId, createdByUserId: userId, contactId: contact_id, amountCents: BigInt(amount_cents), currency, description, paymentMethod: payment_method }
  });
  res.status(201).json({ data: deposit });
});

app.get("/v1/deposits/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const deposit = await db.deposit.findFirst({ where: { id: req.params.id, orgId } });
  if (!deposit) return res.status(404).json({ message: "Not found" });
  res.json({ data: deposit });
});

app.delete("/v1/deposits/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.deposit.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  await db.deposit.update({ where: { id: req.params.id }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Health ───────────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok", service: "payments-service" }));

const PORT = process.env.PORT || 7080;
app.listen(PORT, () => logger.info(`payments-service listening on port ${PORT}`));
}

const port = Number(process.env.PORT || 7080);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "payments-service listening");
});

