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
    const [invoice] = await db("invoices").insert({
      id: randomUUID(),
      org_id: orgId,
      contact_id: req.body?.contact_id || null,
      created_by_user_id: userId,
      amount_cents: amountCents,
      status: "pending",
      created_at: db.fn.now(),
      updated_at: db.fn.now()
    }).returning("*");

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
    const invoices = await db("invoices").where({ org_id: orgId }).orderBy("created_at", "desc");
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
    const invoice = await db("invoices").where({ id: req.params.id, org_id: orgId }).first();
    if (!invoice) return res.status(404).json({ message: "Not found" });
    res.json({ data: invoice });
  } catch (err) {
    logger.error({ err }, "Failed to fetch invoice");
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = Number(process.env.PORT || 7020);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "billing-service listening");
});
