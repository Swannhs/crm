import { createServiceApp, publishJson } from "@mymanager/node-service-kit";
import { randomUUID } from "node:crypto";
import { getChannel } from "./amqp.js";

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

  // Stub persistence for now. We'll add a dedicated billing DB + outbox next.
  const invoice = {
    id: randomUUID(),
    org_id: orgId,
    created_by_user_id: userId,
    amount_cents: amountCents,
    status: "created",
    created_at: new Date().toISOString()
  };

  const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";
  const ch = await getChannel({ url, logger });
  publishJson(ch, "domain-events", "billing.invoice.created", { invoice });

  return res.status(201).json({ data: invoice });
});

app.get("/v1/invoices", (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  const userId = req.header("X-User-Id") || null;
  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context headers." });
  }

  // Stub response. Next step: persist invoices in a billing DB and support filters.
  return res.json({ data: [] });
});

app.get("/v1/invoices/:id", (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  const userId = req.header("X-User-Id") || null;
  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context headers." });
  }

  // Stub response for parity scaffolding. Real implementation will load from DB.
  return res.status(404).json({ message: "Not found" });
});

const port = Number(process.env.PORT || 7020);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "billing-service listening");
});
