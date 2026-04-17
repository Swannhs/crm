import { createServiceApp } from "@mymanager/node-service-kit";
import { getChannel } from "./amqp.js";
import crypto from "node:crypto";

import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "organization-service", jsonLimit: "1mb" });

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
  const orgId = req.header("X-Org-Id");
  if (!orgId) {
    return res.status(401).json({ message: "Missing X-Org-Id" });
  }

  try {
    const org = await db("organizations").where({ id: orgId }).first();
    if (!org) {
      return res.status(404).json({ message: "Organization not found" });
    }
    res.json({ data: org });
  } catch (err) {
    logger.error({ err }, "Failed to fetch organization");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/organizations", async (req, res) => {
  const orgId = req.header("X-Org-Id");
  const { name } = req.body;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });
  if (!name) return res.status(400).json({ message: "Name is required" });

  try {
    await db("organizations")
      .where({ id: orgId })
      .update({ name, updated_at: db.fn.now() });

    const updated = await db("organizations").where({ id: orgId }).first();
    res.json({ data: updated });
  } catch (err) {
    logger.error({ err }, "Failed to update organization");
    res.status(500).json({ message: "Internal server error" });
  }
});

/**
 * Locations API
 */

app.get("/v1/locations", async (req, res) => {
  const orgId = req.header("X-Org-Id");
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const locations = await db("locations").where({ organization_id: orgId }).orderBy("name");
    res.json({ data: locations });
  } catch (err) {
    logger.error({ err }, "Failed to fetch locations");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/locations", async (req, res) => {
  const orgId = req.header("X-Org-Id");
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  const { name, email, phone, street, city, state, zip_code, country } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });

  try {
    const [location] = await db("locations").insert({
      id: crypto.randomUUID(),
      organization_id: orgId,
      name,
      email,
      phone,
      street,
      city,
      state,
      zip_code: zip_code,
      country,
      created_at: db.fn.now(),
      updated_at: db.fn.now()
    }).returning("*");

    res.status(201).json({ data: location });
  } catch (err) {
    logger.error({ err }, "Failed to create location");
    res.status(500).json({ message: "Internal server error" });
  }
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
