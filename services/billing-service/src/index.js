import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import pinoHttp from "pino-http";
import { randomUUID } from "node:crypto";
import { getChannel } from "./amqp.js";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const app = express();

app.use(pinoHttp({ logger }));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/readyz", (_req, res) => res.status(200).json({ status: "ok" }));

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
  ch.publish(
    "domain-events",
    "billing.invoice.created",
    Buffer.from(JSON.stringify({ invoice })),
    { contentType: "application/json" }
  );

  return res.status(201).json({ data: invoice });
});

const port = Number(process.env.PORT || 7020);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "billing-service listening");
});

