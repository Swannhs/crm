import { createServiceApp, publishJson } from "@mymanager/node-service-kit";
import { randomUUID } from "node:crypto";
import { getChannel } from "./amqp.js";

import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "billing-service", jsonLimit: "1mb" });

app.post("/v1/invoices", async (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  const userId = req.header("X-User-Id") || null;

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context headers." });
  }

  const amountCents = Number(req.body?.amount_cents ?? 0);
  if (!Number.isFinite(amountCents) || amountCents <= 0) {
    return res.status(422).json({ message: "amount_cents must be a positive number." });
  }

  try {
    const invoice = await db.invoice.create({
      data: {
        orgId: orgId,
        contactId: req.body?.contact_id || null,
        createdByUserId: userId,
        amountCents: amountCents,
        status: "pending",
      }
    });

    const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";
    const ch = await getChannel({ url, logger });
    publishJson(ch, "domain-events", "billing.invoice.created", { invoice });

    return res.status(201).json({ data: invoice });
  } catch (err) {
    logger.error({ err }, "Failed to create invoice");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/invoices", async (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const invoices = await db.invoice.findMany({
      where: { orgId: orgId },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ data: invoices });
  } catch (err) {
    logger.error({ err }, "Failed to fetch invoices");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/invoices/:id", async (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const invoice = await db.invoice.findUnique({
      where: { id: req.params.id, orgId: orgId }
    });
    if (!invoice) return res.status(404).json({ message: "Not found" });
    res.json({ data: invoice });
  } catch (err) {
    logger.error({ err }, "Failed to fetch invoice");
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * Payments API
 */

app.get("/v1/payments", async (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const payments = await db.payment.findMany({
      where: { orgId: orgId },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ data: payments });
  } catch (err) {
    logger.error({ err }, "Failed to fetch payments");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/payments", async (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  const userId = req.header("X-User-Id") || null;

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context headers." });
  }

  const { invoice_id, amount_cents, payment_method, transaction_id, note } = req.body;

  if (!invoice_id || !amount_cents || !payment_method) {
    return res.status(400).json({ message: "invoice_id, amount_cents, and payment_method are required." });
  }

  try {
    const result = await db.$transaction(async (tx) => {
      // 1. Fetch invoice
      const invoice = await tx.invoice.findFirst({
        where: { id: invoice_id, orgId: orgId }
      });
      if (!invoice) {
        throw new Error("Invoice not found");
      }

      // 2. Record payment
      const payment = await tx.payment.create({
        data: {
          orgId: orgId,
          invoiceId: invoice_id,
          contactId: invoice.contactId,
          createdByUserId: userId,
          amountCents: Number(amount_cents),
          paymentMethod: payment_method,
          transactionId: transaction_id,
          note: note,
          status: "succeeded"
        }
      });

      // 3. Update invoice status/paid amount
      const newPaidAmount = Number(invoice.paidAmountCents || 0) + Number(amount_cents);
      const isPaidFull = newPaidAmount >= Number(invoice.amountCents);
      
      await tx.invoice.update({
        where: { id: invoice_id },
        data: {
          paidAmountCents: newPaidAmount,
          status: isPaidFull ? "paid" : "partial"
        }
      });

      return payment;
    });

    const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";
    const ch = await getChannel({ url, logger });
    publishJson(ch, "domain-events", "billing.payment.recorded", { payment: result });

    return res.status(201).json({ data: result });
  } catch (err) {
    if (err.message === "Invoice not found") {
        return res.status(404).json({ message: err.message });
    }
    logger.error({ err }, "Failed to record payment");
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = Number(process.env.PORT || 7020);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "billing-service listening");
});
