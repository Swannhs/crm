import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";
import { randomUUID } from "node:crypto";
import crypto from "node:crypto";

const { app, logger } = createServiceApp({ serviceName: "documents-service", jsonLimit: "50mb" });

// ─── Documents ────────────────────────────────────────────────────────────────

app.get("/v1/documents", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const page = Math.max(1, parseInt(req.query.page || 1));
  const limit = Math.min(parseInt(req.query.limit || 20), 200);
  try {
    const where = { org_id: orgId, is_deleted: false };
    if (req.query.type) where.type = req.query.type;
    if (req.query.status) where.status = req.query.status;
    const [data, total] = await Promise.all([
      db.document.findMany({ where, orderBy: { created_at: "desc" }, skip: (page - 1) * limit, take: limit }),
      db.document.count({ where })
    ]);
    res.json({ data, pagination: { total, page, limit, pages: Math.ceil(total / limit) } });
  } catch (err) {
    logger.error({ err }, "documents list failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/documents/statuses-and-docs-count", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const [byStatus, total] = await Promise.all([
      db.document.groupBy({ by: ["status"], where: { org_id: orgId, is_deleted: false }, _count: true }),
      db.document.count({ where: { org_id: orgId, is_deleted: false } })
    ]);
    res.json({ data: { total, by_status: byStatus } });
  } catch (err) {
    logger.error({ err }, "statuses count failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/documents/templates", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const templates = await db.document.findMany({
      where: { org_id: orgId, type: "contract", is_deleted: false },
      orderBy: { created_at: "desc" }
    });
    res.json({ data: templates });
  } catch (err) {
    logger.error({ err }, "get templates failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/documents/templates/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const doc = await db.document.findFirst({ where: { id: req.params.id, org_id: orgId, is_deleted: false } });
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json({ data: doc });
  } catch (err) {
    logger.error({ err }, "get template failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/documents/upload", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, cloud_url, type, creator_type } = req.body;
  if (!name || !cloud_url || !type) return res.status(422).json({ message: "name, cloud_url, and type required" });
  try {
    const doc = await db.document.create({
      data: { id: randomUUID(), org_id: orgId, created_by_user_id: userId, name, cloud_url, type, metadata: { creator_type } }
    });
    res.status(201).json({ success: true, data: doc });
  } catch (err) {
    logger.error({ err }, "upload failed");
    res.status(500).json({ message: "Failed to save document" });
  }
});

app.post("/v1/documents/delete", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { ids } = req.body;
  if (!Array.isArray(ids)) return res.status(422).json({ message: "ids array required" });
  try {
    await db.documentRecipient.updateMany({ where: { org_id: orgId, id: { in: ids } }, data: { is_deleted: true } });
    res.json({ success: true });
  } catch (err) {
    logger.error({ err }, "bulk delete failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/documents/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const doc = await db.document.findFirst({ where: { id: req.params.id, org_id: orgId, is_deleted: false }, include: { recipients: true } });
    if (!doc) return res.status(404).json({ message: "Not found" });
    res.json({ data: doc });
  } catch (err) {
    logger.error({ err }, "get document failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Email-link (document sharing) ────────────────────────────────────────────

app.post("/v1/documents/email-link", async (req, res) => {
  const { document_id, email, name } = req.body;
  if (!document_id || !email) return res.status(422).json({ message: "document_id and email required" });
  try {
    const doc = await db.document.findUnique({ where: { id: document_id } });
    if (!doc) return res.status(404).json({ message: "Document not found" });
    const hashCode = crypto.randomBytes(32).toString("hex");
    const recipient = await db.documentRecipient.create({
      data: { id: randomUUID(), document_id, org_id: doc.org_id, name: name || email, email, hash_code: hashCode }
    });
    res.json({ data: { recipient, token: hashCode } });
  } catch (err) {
    logger.error({ err }, "email-link gen failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/documents/email-link/send-otp", async (req, res) => {
  const { hash_code } = req.body;
  if (!hash_code) return res.status(422).json({ message: "hash_code required" });
  try {
    const recipient = await db.documentRecipient.findUnique({ where: { hash_code } });
    if (!recipient) return res.status(404).json({ message: "Not found" });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await db.documentRecipient.update({
      where: { id: recipient.id },
      data: { otp, otp_expires_at: new Date(Date.now() + 10 * 60 * 1000) }
    });
    logger.info({ email: recipient.email }, "OTP generated (dispatch to notification-service)");
    res.json({ success: true, message: "OTP sent" });
  } catch (err) {
    logger.error({ err }, "send OTP failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/documents/email-link/verify-otp", async (req, res) => {
  const { hash_code, otp } = req.body;
  if (!hash_code || !otp) return res.status(422).json({ message: "hash_code and otp required" });
  try {
    const recipient = await db.documentRecipient.findUnique({ where: { hash_code } });
    if (!recipient || recipient.otp !== otp || recipient.otp_expires_at < new Date()) {
      return res.status(401).json({ message: "Invalid or expired OTP" });
    }
    res.json({ success: true, token: hash_code });
  } catch (err) {
    logger.error({ err }, "verify OTP failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/documents/email-link", async (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(401).json({ message: "token required" });
  try {
    const recipient = await db.documentRecipient.findUnique({ where: { hash_code: token }, include: { document: true } });
    if (!recipient || recipient.is_deleted) return res.status(404).json({ message: "Not found" });
    res.json({ data: { document: recipient.document, recipient } });
  } catch (err) {
    logger.error({ err }, "get doc by hash failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Document Activities ───────────────────────────────────────────────────────

app.get("/v1/documents/activity/recent", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const activities = await db.documentActivity.findMany({
      where: { org_id: orgId }, orderBy: { created_at: "desc" }, take: 20,
      include: { document: { select: { id: true, name: true } } }
    });
    res.json({ data: activities });
  } catch (err) {
    logger.error({ err }, "recent activities failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/documents/activity/:recipientId", requireIdentityContext, async (req, res) => {
  try {
    const activities = await db.documentActivity.findMany({
      where: { document_recipient_id: req.params.recipientId }, orderBy: { created_at: "desc" }
    });
    res.json({ data: activities });
  } catch (err) {
    logger.error({ err }, "activity fetch failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/documents/activity", async (req, res) => {
  const { document_id, document_recipient_id, action, ip_address, user_agent } = req.body;
  if (!document_id || !action) return res.status(422).json({ message: "document_id and action required" });
  try {
    const doc = await db.document.findUnique({ where: { id: document_id } });
    if (!doc) return res.status(404).json({ message: "Not found" });
    const activity = await db.documentActivity.create({
      data: { id: randomUUID(), document_id, document_recipient_id: document_recipient_id || null, org_id: doc.org_id, action, ip_address, user_agent }
    });
    res.status(201).json({ data: activity });
  } catch (err) {
    logger.error({ err }, "log activity failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/documents/certificate/:recipientId", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const recipient = await db.documentRecipient.findFirst({
      where: { id: req.params.recipientId, org_id: orgId },
      include: { document: true, activities: { orderBy: { created_at: "asc" } } }
    });
    if (!recipient) return res.status(404).json({ message: "Not found" });
    res.json({ data: recipient });
  } catch (err) {
    logger.error({ err }, "certificate fetch failed");
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = Number(process.env.PORT || 7080);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "documents-service listening"));

