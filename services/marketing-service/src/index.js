import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";
import { randomUUID } from "node:crypto";

const { app, logger } = createServiceApp({ serviceName: "marketing-service", jsonLimit: "5mb" });

// ─── Campaigns ────────────────────────────────────────────────────────────────
app.get("/v1/campaigns", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { type, status, page = 1, limit = 20 } = req.query;
  const where = { orgId, isDeleted: false };
  if (type) where.type = type;
  if (status) where.status = status;
  try {
    const [data, total] = await Promise.all([
      db.campaign.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
      db.campaign.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch campaigns");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/campaigns/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const campaign = await db.campaign.findFirst({ where: { id: req.params.id, orgId, isDeleted: false }, include: { emails: true } });
    if (!campaign) return res.status(404).json({ message: "Not found" });
    res.json({ data: campaign });
  } catch (err) {
    logger.error({ err }, "Failed to fetch campaign");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/campaigns", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, type, subject, body, scheduledAt } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  try {
    const campaign = await db.campaign.create({
      data: { orgId, createdBy: userId, name, type: type || "email", subject, body, scheduledAt: scheduledAt ? new Date(scheduledAt) : null }
    });
    res.status(201).json({ data: campaign });
  } catch (err) {
    logger.error({ err }, "Failed to create campaign");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/campaigns/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, type, subject, body, scheduledAt, status } = req.body;
  try {
    await db.campaign.updateMany({ where: { id: req.params.id, orgId }, data: { name, type, subject, body, status, scheduledAt: scheduledAt ? new Date(scheduledAt) : undefined } });
    res.json({ message: "Updated" });
  } catch (err) {
    logger.error({ err }, "Failed to update campaign");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/v1/campaigns/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.campaign.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

app.post("/v1/campaigns/:id/send", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    await db.campaign.updateMany({ where: { id: req.params.id, orgId }, data: { status: "sent", sentAt: new Date() } });
    res.json({ message: "Campaign marked as sent" });
  } catch (err) {
    logger.error({ err }, "Failed to send campaign");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Email Messages ───────────────────────────────────────────────────────────
app.get("/v1/emails", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { campaignId, status, page = 1, limit = 30 } = req.query;
  const where = { orgId };
  if (campaignId) where.campaignId = campaignId;
  if (status) where.status = status;
  try {
    const [data, total] = await Promise.all([
      db.emailMessage.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
      db.emailMessage.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch emails");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/emails/send", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { campaignId, toEmail, subject, body } = req.body;
  if (!toEmail || !subject || !body) return res.status(400).json({ message: "toEmail, subject, and body required" });
  try {
    const email = await db.emailMessage.create({
      data: { orgId, campaignId: campaignId || null, toEmail, subject, body, status: "sent", sentAt: new Date() }
    });
    res.status(201).json({ data: email });
  } catch (err) {
    logger.error({ err }, "Failed to send email");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Automations ──────────────────────────────────────────────────────────────
app.get("/v1/automations", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, page = 1, limit = 20 } = req.query;
  const where = { orgId, isDeleted: false };
  if (status) where.status = status;
  try {
    const [data, total] = await Promise.all([
      db.automation.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
      db.automation.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch automations");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/automations", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, trigger, conditions, actions } = req.body;
  if (!name || !trigger) return res.status(400).json({ message: "name and trigger required" });
  try {
    const automation = await db.automation.create({
      data: { orgId, createdBy: userId, name, trigger, conditions: conditions || [], actions: actions || [] }
    });
    res.status(201).json({ data: automation });
  } catch (err) {
    logger.error({ err }, "Failed to create automation");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/automations/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, trigger, conditions, actions, status } = req.body;
  await db.automation.updateMany({ where: { id: req.params.id, orgId }, data: { name, trigger, conditions, actions, status } });
  res.json({ message: "Updated" });
});

app.delete("/v1/automations/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.automation.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

app.post("/v1/automations/:id/trigger", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    await db.automation.updateMany({ where: { id: req.params.id, orgId }, data: { runCount: { increment: 1 } } });
    res.json({ message: "Automation triggered" });
  } catch (err) {
    logger.error({ err }, "Failed to trigger automation");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Subscribers ──────────────────────────────────────────────────────────────
app.get("/v1/subscribers", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, page = 1, limit = 30 } = req.query;
  const where = { orgId };
  if (status) where.status = status;
  try {
    const [data, total] = await Promise.all([
      db.subscriber.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
      db.subscriber.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch subscribers");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/subscribers", async (req, res) => {
  const { orgId, email, firstName, lastName, phone, source, tags } = req.body;
  if (!orgId || !email) return res.status(400).json({ message: "orgId and email required" });
  try {
    const subscriber = await db.subscriber.upsert({
      where: { orgId_email: { orgId, email } },
      create: { orgId, email, firstName, lastName, phone, source, tags: tags || [] },
      update: { firstName, lastName, phone, source }
    });
    res.status(201).json({ data: subscriber });
  } catch (err) {
    logger.error({ err }, "Failed to add subscriber");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/subscribers/:id/unsubscribe", async (req, res) => {
  try {
    await db.subscriber.update({ where: { id: req.params.id }, data: { status: "unsubscribed" } });
    res.json({ message: "Unsubscribed" });
  } catch (err) {
    logger.error({ err }, "Failed to unsubscribe");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Opt-in Forms ─────────────────────────────────────────────────────────────
app.get("/v1/optin-forms", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const forms = await db.optinForm.findMany({ where: { orgId, isDeleted: false }, orderBy: { createdAt: "desc" } });
    res.json({ data: forms });
  } catch (err) {
    logger.error({ err }, "Failed to fetch optin forms");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/optin-forms/public/:slug", async (req, res) => {
  try {
    const form = await db.optinForm.findUnique({ where: { slug: req.params.slug } });
    if (!form || !form.isPublished) return res.status(404).json({ message: "Form not found" });
    res.json({ data: form });
  } catch (err) {
    logger.error({ err }, "Failed to fetch form");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/optin-forms", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, fields, settings } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const slug = `${name.toLowerCase().replace(/\s+/g, "-")}-${randomUUID().substring(0, 8)}`;
  try {
    const form = await db.optinForm.create({
      data: { orgId, createdBy: userId, name, slug, fields: fields || [], settings: settings || {} }
    });
    res.status(201).json({ data: form });
  } catch (err) {
    logger.error({ err }, "Failed to create optin form");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/optin-forms/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, fields, settings, isPublished } = req.body;
  await db.optinForm.updateMany({ where: { id: req.params.id, orgId }, data: { name, fields, settings, isPublished } });
  res.json({ message: "Updated" });
});

app.delete("/v1/optin-forms/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.optinForm.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Health ───────────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok", service: "marketing-service" }));

const port = Number(process.env.PORT || 8030);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "marketing-service listening");
});
