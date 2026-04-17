import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import pinoHttp from "pino-http";
import { randomUUID } from "node:crypto";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const app = express();

app.use(pinoHttp({ logger }));
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/readyz", (_req, res) => res.status(200).json({ status: "ok" }));

// This service starts as an API-compatible shell for monolith booking routes:
// monolith: /api/booking/booking-types...
// gateway will map that -> these /v1 endpoints.
const bookingTypes = [
  {
    id: randomUUID(),
    link: "demo",
    title: "Demo Booking Type",
    duration_minutes: 60
  }
];

app.get("/v1/booking-types", (req, res) => {
  // Monolith requires auth; we enforce identity headers at the gateway layer.
  const orgId = req.header("X-Org-Id") || null;
  if (!orgId) return res.status(401).json({ message: "Missing identity context headers." });
  res.json({ data: bookingTypes });
});

app.get("/v1/booking-types-count", (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  if (!orgId) return res.status(401).json({ message: "Missing identity context headers." });
  res.json({ data: { total: bookingTypes.length } });
});

app.get("/v1/booking-types/:link", (req, res) => {
  const found = bookingTypes.find((b) => b.link === req.params.link);
  if (!found) return res.status(404).json({ message: "Not found" });
  res.json({ data: found });
});

app.get("/v1/booking-types-id/:id", (req, res) => {
  const found = bookingTypes.find((b) => b.id === req.params.id);
  if (!found) return res.status(404).json({ message: "Not found" });
  res.json({ data: found });
});

app.post("/v1/booking-types", (req, res) => {
  const orgId = req.header("X-Org-Id") || null;
  const userId = req.header("X-User-Id") || null;
  if (!orgId || !userId) return res.status(401).json({ message: "Missing identity context headers." });

  const title = String(req.body?.title || "").trim();
  if (!title) return res.status(422).json({ message: "title is required" });

  const created = {
    id: randomUUID(),
    link: String(req.body?.link || randomUUID()).slice(0, 40),
    title,
    duration_minutes: Number(req.body?.duration_minutes ?? 60)
  };

  bookingTypes.unshift(created);
  res.status(201).json({ data: created });
});

const port = Number(process.env.PORT || 7040);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "booking-service listening");
});

