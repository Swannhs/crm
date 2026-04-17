import { connectAmqpWithRetry, ensureTopicExchange, createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "notification-service" });

// ─── Notifications HTTP API ───────────────────────────────────────────────────

app.get("/v1/notifications", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { page = 1, limit = 30, category } = req.query;
  const where = { orgId, userId };
  if (category) where.category = category;
  const [data, total] = await Promise.all([
    db.notification.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
    db.notification.count({ where })
  ]);
  res.json({ data, total });
});

app.get("/v1/notifications/total", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const categories = await db.notification.groupBy({
    by: ["category"],
    where: { orgId, userId, isRead: false },
    _count: true
  });
  res.json({ data: categories });
});

app.get("/v1/notifications/unseen-count/:groupId/:userId", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const count = await db.notification.count({
    where: { orgId, category: req.params.groupId, userId: req.params.userId, isSeen: false }
  });
  res.json({ data: { count } });
});

app.post("/v1/notifications/mark-seen/:notificationId/:userId", requireIdentityContext, async (req, res) => {
  await db.notification.updateMany({
    where: { id: req.params.notificationId, userId: req.params.userId },
    data: { isSeen: true, seenAt: new Date() }
  });
  res.json({ message: "Marked as seen" });
});

app.post("/v1/notifications/read", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { ids } = req.body;
  const where = { orgId, userId };
  if (ids?.length) where.id = { in: ids };
  await db.notification.updateMany({ where, data: { isRead: true } });
  res.json({ message: "Marked as read" });
});

// ─── Notification Settings ────────────────────────────────────────────────────

app.get("/v1/notifications/settings", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const settings = await db.notificationSetting.findUnique({ where: { orgId } });
  res.json({ data: settings || { orgId, emailEnabled: true, smsEnabled: true, pushEnabled: true, settings: {} } });
});

app.post("/v1/notifications/settings", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { email_enabled, sms_enabled, push_enabled, settings } = req.body;
  const result = await db.notificationSetting.upsert({
    where: { orgId },
    create: { orgId, emailEnabled: email_enabled ?? true, smsEnabled: sms_enabled ?? true, pushEnabled: push_enabled ?? true, settings: settings || {} },
    update: { emailEnabled: email_enabled ?? true, smsEnabled: sms_enabled ?? true, pushEnabled: push_enabled ?? true, settings: settings || {} }
  });
  res.json({ data: result });
});

// ─── Device Tokens ────────────────────────────────────────────────────────────

app.post("/v1/notifications/expo-token/client", async (req, res) => {
  const { user_id, org_id, token } = req.body;
  if (!user_id || !token) return res.status(400).json({ message: "user_id and token required" });
  await db.deviceToken.upsert({
    where: { userId_token: { userId: user_id, token } },
    create: { userId: user_id, orgId: org_id, type: "expo", token },
    update: { orgId: org_id }
  });
  res.json({ message: "Token saved" });
});

app.post("/v1/notifications/expo-token/user", requireIdentityContext, async (req, res) => {
  const { userId, orgId } = req.identity;
  const { token } = req.body;
  if (!token) return res.status(400).json({ message: "token required" });
  await db.deviceToken.upsert({
    where: { userId_token: { userId, token } },
    create: { userId, orgId, type: "expo", token },
    update: { orgId }
  });
  res.json({ message: "Token saved" });
});

app.post("/v1/notifications/voip-token/user", requireIdentityContext, async (req, res) => {
  const { userId, orgId } = req.identity;
  const { token } = req.body;
  if (!token) return res.status(400).json({ message: "token required" });
  await db.deviceToken.upsert({
    where: { userId_token: { userId, token } },
    create: { userId, orgId, type: "voip", token },
    update: { orgId }
  });
  res.json({ message: "Token saved" });
});

// ─── Email Messages ───────────────────────────────────────────────────────────

app.get("/v1/email-messages", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { page = 1, limit = 20 } = req.query;
  const where = { orgId, isDeleted: false };
  const [data, total] = await Promise.all([
    db.emailMessage.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
    db.emailMessage.count({ where })
  ]);
  res.json({ data, total });
});

app.get("/v1/email-messages/totals", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const [total, sent] = await Promise.all([
    db.emailMessage.count({ where: { orgId, isDeleted: false } }),
    db.emailMessage.count({ where: { orgId, isDeleted: false, isSent: true } })
  ]);
  res.json({ data: { total, sent, draft: total - sent } });
});

app.get("/v1/email-messages/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const msg = await db.emailMessage.findFirst({ where: { id: req.params.id, orgId } });
  if (!msg) return res.status(404).json({ message: "Not found" });
  res.json({ data: msg });
});

app.post("/v1/email-messages", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { subject, body, to, cc, bcc, from_email, from_name, metadata } = req.body;
  const msg = await db.emailMessage.create({
    data: { orgId, createdBy: userId, subject, body, to: to || [], cc: cc || [], bcc: bcc || [], fromEmail: from_email, fromName: from_name, metadata: metadata || {} }
  });
  res.status(201).json({ data: msg });
});

app.put("/v1/email-messages/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.emailMessage.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { subject, body, to, cc, bcc, metadata } = req.body;
  const msg = await db.emailMessage.update({
    where: { id: req.params.id },
    data: { subject, body, to, cc, bcc, metadata }
  });
  res.json({ data: msg });
});

app.put("/v1/email-messages/:id/sent", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.emailMessage.updateMany({ where: { id: req.params.id, orgId }, data: { isSent: true, sentAt: new Date() } });
  res.json({ message: "Marked as sent" });
});

app.put("/v1/email-messages", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { ids } = req.body;
  if (!ids?.length) return res.status(400).json({ message: "ids required" });
  await db.emailMessage.updateMany({ where: { id: { in: ids }, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

app.put("/v1/email-messages/update-many", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { ids, ...updates } = req.body;
  if (!ids?.length) return res.status(400).json({ message: "ids required" });
  await db.emailMessage.updateMany({ where: { id: { in: ids }, orgId }, data: updates });
  res.json({ message: "Updated" });
});

// ─── Email Campaigns ──────────────────────────────────────────────────────────

app.get("/v1/email-campaigns", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const campaigns = await db.emailCampaign.findMany({ where: { orgId, isDeleted: false }, orderBy: { createdAt: "desc" } });
  res.json({ data: campaigns });
});

app.post("/v1/email-campaigns", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, subject, body, scheduled_at } = req.body;
  if (!name || !subject) return res.status(400).json({ message: "name and subject required" });
  const campaign = await db.emailCampaign.create({
    data: { orgId, createdBy: userId, name, subject, body, scheduledAt: scheduled_at ? new Date(scheduled_at) : null }
  });
  res.status(201).json({ data: campaign });
});

app.put("/v1/email-campaigns/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.emailCampaign.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { name, subject, body, status, scheduled_at } = req.body;
  const campaign = await db.emailCampaign.update({
    where: { id: req.params.id },
    data: { name, subject, body, status, scheduledAt: scheduled_at ? new Date(scheduled_at) : undefined }
  });
  res.json({ data: campaign });
});

app.delete("/v1/email-campaigns/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.emailCampaign.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

app.get("/v1/email-campaigns/:seriesId", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const campaign = await db.emailCampaign.findFirst({ where: { seriesId: req.params.seriesId, orgId } });
  if (!campaign) return res.status(404).json({ message: "Not found" });
  res.json({ data: campaign });
});

// ─── SMS ──────────────────────────────────────────────────────────────────────

app.get("/v1/sms", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { page = 1, limit = 20 } = req.query;
  const [data, total] = await Promise.all([
    db.smsMessage.findMany({ where: { orgId, isDeleted: false }, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
    db.smsMessage.count({ where: { orgId, isDeleted: false } })
  ]);
  res.json({ data, total });
});

app.post("/v1/sms", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { to, body } = req.body;
  if (!to || !body) return res.status(400).json({ message: "to and body required" });
  const msg = await db.smsMessage.create({ data: { orgId, createdBy: userId, to, body } });
  res.status(201).json({ data: msg });
});

// ─── Health ───────────────────────────────────────────────────────────────────

app.get("/health", (_req, res) => res.json({ status: "ok", service: "notification-service" }));

const port = Number(process.env.PORT || 8000);
app.listen(port, "0.0.0.0", () => {
    logger.info({ port }, "notification-service listening");
});

// ─── AMQP Consumer ───────────────────────────────────────────────────────────

const amqpUrl = process.env.RABBITMQ_URL || "amqp://localhost:5672";

async function startAmqp() {
  const conn = await connectAmqpWithRetry(amqpUrl, logger);
  const ch = await conn.createChannel();
  await ensureTopicExchange(ch, "domain-events");
  const { queue } = await ch.assertQueue("notification-service", { durable: true });
  await ch.bindQueue(queue, "domain-events", "#");
  logger.info({ queue }, "notification-service consuming domain-events");
  await ch.consume(queue, async (msg) => {
    if (!msg) return;
    const routingKey = msg.fields.routingKey;
    try {
      const payload = JSON.parse(msg.content.toString("utf8"));
      logger.info({ routingKey }, "domain event received");
      // TODO: create push/email notifications based on event type
    } catch (err) {
      logger.error({ err, routingKey }, "Failed to process domain event");
    }
    ch.ack(msg);
  }, { consumerTag: "notification-service" });
}

startAmqp().catch((err) => logger.error({ err }, "AMQP startup failed"));
