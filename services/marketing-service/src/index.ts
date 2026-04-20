import { createServiceApp } from "@mymanager/node-service-kit";
import { CampaignController, AutomationController, SubscriberController, OptinFormController, OmniBroadcastController } from "./controllers/marketing.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "marketing-service", 
  jsonLimit: "10mb",
  enableCors: false
});
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const campaignCtrl = new CampaignController();
const automationCtrl = new AutomationController();
const subscriberCtrl = new SubscriberController();
const formCtrl = new OptinFormController();
const omniBroadcastCtrl = new OmniBroadcastController();

// --- Campaigns ---
app.get("/v1/campaigns", auth, (req, res) => campaignCtrl.list(cast(req), res));
app.get("/v1/campaigns/:id", auth, (req, res) => campaignCtrl.get(cast(req), res));
app.post("/v1/campaigns", auth, (req, res) => campaignCtrl.create(cast(req), res));
app.put("/v1/campaigns/:id", auth, (req, res) => campaignCtrl.update(cast(req), res));
app.delete("/v1/campaigns/:id", auth, (req, res) => campaignCtrl.delete(cast(req), res));
app.post("/v1/campaigns/:id/send", auth, (req, res) => campaignCtrl.send(cast(req), res));

// --- Automations ---
app.get("/v1/automations", auth, (req, res) => automationCtrl.list(cast(req), res));
app.post("/v1/automations", auth, (req, res) => automationCtrl.create(cast(req), res));
app.put("/v1/automations/:id", auth, (req, res) => automationCtrl.update(cast(req), res));
app.delete("/v1/automations/:id", auth, (req, res) => automationCtrl.delete(cast(req), res));

// --- Subscribers ---
app.get("/v1/subscribers", auth, (req, res) => subscriberCtrl.list(cast(req), res));
app.post("/v1/subscribers", auth, (req, res) => subscriberCtrl.add(cast(req), res));
app.put("/v1/subscribers/:id/unsubscribe", (req, res) => subscriberCtrl.unsubscribe(cast(req), res));

// --- Opt-in Forms ---
app.get("/v1/optin-forms", auth, (req, res) => formCtrl.list(cast(req), res));
app.post("/v1/optin-forms", auth, (req, res) => formCtrl.create(cast(req), res));
app.put("/v1/optin-forms/:id", auth, (req, res) => formCtrl.update(cast(req), res));
app.delete("/v1/optin-forms/:id", auth, (req, res) => formCtrl.delete(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "marketing-service (TS)" }));

const port = Number(process.env.PORT || 8030);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "marketing-service listening (Clean Arch TS)"));
