import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import pinoHttp from "pino-http";
import { getChannel } from "./amqp.js";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const app = express();

app.use(pinoHttp({ logger }));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/readyz", (_req, res) => res.status(200).json({ status: "ok" }));

app.get("/v1/hello", (req, res) => {
  res.json({
    message: "hello from organization-service",
    identity: {
      userId: req.header("X-User-Id") || null,
      orgId: req.header("X-Org-Id") || null
    }
  });
});

app.get("/v1/organizations", async (req, res) => {
  // Stub response for the first cut. We'll back this with its own DB later.
  res.json({
    data: [
      {
        id: req.header("X-Org-Id") || "84e0b41b-dff4-42fe-bb73-b5abc8298ba3",
        name: "Demo Organization"
      }
    ]
  });
});

app.post("/v1/organizations/events/demo", async (_req, res) => {
  // Demo endpoint to prove the event bus wiring end-to-end.
  const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";
  const ch = await getChannel({ url, logger });
  const routingKey = "org.demo.published";
  const payload = { at: new Date().toISOString() };

  ch.publish("domain-events", routingKey, Buffer.from(JSON.stringify(payload)), {
    contentType: "application/json"
  });

  res.status(202).json({ status: "queued", routingKey, payload });
});

const port = Number(process.env.PORT || 7010);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "organization-service listening");
});
