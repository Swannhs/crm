import { createServiceApp, connectAmqpWithRetry, ensureTopicExchange } from "@mymanager/node-service-kit";
import {
  NotificationController,
  NotificationSettingController,
  EmailMessageController,
  SmsController,
  ContactPhoneVerificationController,
} from "./controllers/notification.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "notification-service" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const notifCtrl = new NotificationController();
const settingsCtrl = new NotificationSettingController();
const emailCtrl = new EmailMessageController();
const smsCtrl = new SmsController();
const contactPhoneVerificationCtrl = new ContactPhoneVerificationController();

// --- Notifications ---
app.get("/v1/notifications", auth, (req, res) => notifCtrl.list(cast(req), res));
app.get("/v1/notifications/total", auth, (req, res) => notifCtrl.totals(cast(req), res));
app.get("/v1/notifications/unseen-count/:groupId/:userId", auth, (req, res) => notifCtrl.unseenCount(cast(req), res));
app.post("/v1/notifications/mark-seen/:notificationId/:userId", auth, (req, res) => notifCtrl.markSeen(cast(req), res));
app.post("/v1/notifications/read", auth, (req, res) => notifCtrl.markRead(cast(req), res));
app.post("/v1/notifications/archive", auth, (req, res) => notifCtrl.archive(cast(req), res));
app.post("/v1/notifications/unarchive", auth, (req, res) => notifCtrl.unarchive(cast(req), res));

// --- Notification Settings ---
app.get("/v1/notifications/settings", auth, (req, res) => settingsCtrl.get(cast(req), res));
app.post("/v1/notifications/settings", auth, (req, res) => settingsCtrl.save(cast(req), res));

// --- Email Messages ---
app.get("/v1/email-messages", auth, (req, res) => emailCtrl.list(cast(req), res));
app.get("/v1/email-messages/totals", auth, (req, res) => emailCtrl.totals(cast(req), res));
app.post("/v1/email-messages", auth, (req, res) => emailCtrl.create(cast(req), res));
app.put("/v1/email-messages/:id/sent", auth, (req, res) => emailCtrl.markSent(cast(req), res));

// --- SMS ---
app.get("/v1/sms", auth, (req, res) => smsCtrl.list(cast(req), res));
app.post("/v1/sms", auth, (req, res) => smsCtrl.send(cast(req), res));

// --- Public contact phone verification ---
app.post("/v1/contact-phone-verifications/generate", (req, res) =>
  contactPhoneVerificationCtrl.generate(cast(req), res)
);

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "notification-service (TS)" }));

const port = Number(process.env.PORT || 8000);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "notification-service listening (Clean Arch TS)"));

// --- AMQP Consumer ---
const amqpUrl = process.env.RABBITMQ_URL || "amqp://localhost:5672";

async function startAmqp() {
  const conn = await connectAmqpWithRetry(amqpUrl, logger);
  const ch = await conn.createChannel();
  await ensureTopicExchange(ch, "domain-events");
  const { queue } = await ch.assertQueue("notification-service", { durable: true });
  await ch.bindQueue(queue, "domain-events", "#");
  logger.info({ queue }, "notification-service consuming domain-events");
  await ch.consume(queue, async (msg: any) => {
    if (!msg) return;
    try {
      const payload = JSON.parse(msg.content.toString("utf8"));
      await notifCtrl.handleDomainEvent(msg.fields.routingKey, payload);
      logger.info({ routingKey: msg.fields.routingKey }, "domain event received");
    } catch (err) {
      logger.error({ err, routingKey: msg.fields.routingKey }, "Failed to process domain event");
    }
    ch.ack(msg);
  }, { consumerTag: "notification-service" });
}

startAmqp().catch((err) => logger.error({ err }, "AMQP startup failed"));
