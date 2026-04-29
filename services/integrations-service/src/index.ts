import http from "node:http";
import { createServiceApp } from "@mymanager/node-service-kit";
import { 
  IntegrationController,
  GoogleController,
  ZoomController,
  FacebookController,
  InstagramController,
  LinkedInController,
  TikTokController,
  ShopifyController,
  MagentoController,
  UberEatsController,
  EasyPostController,
  UserIntegrationSettingsController,
  MetaIntegrationController,
  VoiceIntegrationController,
  WhatsAppController,
  TelegramController,
  WebhookController,
  OdooController,
  ImageLibraryController
} from "./controllers/index.js";
import { identityMiddleware } from "./middleware/identity.js";
import { startOmniSendConsumer } from './kafka/omni.send.consumer.js';

const { app, logger } = createServiceApp({ serviceName: "integrations-service", jsonLimit: "10mb" });
const server = http.createServer(app);
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const integrationCtrl = new IntegrationController();
const googleCtrl = new GoogleController();
const zoomCtrl = new ZoomController();
const facebookCtrl = new FacebookController();
const instagramCtrl = new InstagramController();
const linkedinCtrl = new LinkedInController();
const tiktokCtrl = new TikTokController();
const shopifyCtrl = new ShopifyController();
const magentoCtrl = new MagentoController();
const uberEatsCtrl = new UberEatsController();
const easyPostCtrl = new EasyPostController();
const settingsCtrl = new UserIntegrationSettingsController();
const metaCtrl = new MetaIntegrationController();
const voiceCtrl = new VoiceIntegrationController();
const whatsappCtrl = new WhatsAppController();
const telegramCtrl = new TelegramController();
const webhookCtrl = new WebhookController();
const odooCtrl = new OdooController();
const imageLibraryCtrl = new ImageLibraryController();

function scheduleOmniSendConsumerStart(logger: any, attempt = 1) {
  const maxBackoffMs = 30000;
  const delayMs = Math.min(maxBackoffMs, Math.max(1000, attempt * 2000));

  startOmniSendConsumer(logger)
    .then(() => {
      logger.info({ attempt }, "omni send consumer started");
    })
    .catch((err) => {
      logger.error({ err, attempt, retryInMs: delayMs }, "Failed to start omni send consumer, will retry");
      const timer = setTimeout(() => scheduleOmniSendConsumerStart(logger, attempt + 1), delayMs);
      timer.unref?.();
    });
}

// --- Webhooks (Public) ---
app.get("/v1/webhook/whatsapp", (req, res) => webhookCtrl.verifyMeta(req, res));
app.post("/v1/webhook/whatsapp", (req, res) => webhookCtrl.handleMeta(req, res));
app.post("/v1/webhook/telegram", (req, res) => webhookCtrl.handleTelegram(req, res));
app.post("/v1/webhook/telegram/:sessionId", (req, res) => webhookCtrl.handleTelegram(req, res));

// --- Generic Integration ---
app.post("/v1/integrations/connect", auth, (req, res) => integrationCtrl.connect(cast(req), res));
app.get("/v1/integrations", auth, (req, res) => integrationCtrl.getConnections(cast(req), res));
app.post("/v1/integrations/disconnect", auth, (req, res) => integrationCtrl.disconnect(cast(req), res));

// --- Google ---
app.post("/v1/integrations/google/connect", auth, (req, res) => googleCtrl.connect(cast(req), res));
app.get("/v1/integrations/google", auth, (req, res) => googleCtrl.getConnection(cast(req), res));
app.get("/v1/integrations/google/reviews", auth, (req, res) => googleCtrl.getReviews(cast(req), res));
app.get("/v1/integrations/google/params", auth, (req, res) => googleCtrl.getSecret(cast(req), res));

// --- Zoom ---
app.post("/v1/integrations/zoom/connect", auth, (req, res) => zoomCtrl.connect(cast(req), res));
app.get("/v1/integrations/zoom", auth, (req, res) => zoomCtrl.getConnection(cast(req), res));
app.post("/v1/integrations/zoom/create-meeting", auth, (req, res) => zoomCtrl.createMeeting(cast(req), res));
app.get("/v1/integrations/zoom/meetings", auth, (req, res) => zoomCtrl.getMeetings(cast(req), res));
app.patch("/v1/integrations/zoom/update-meeting/:meetingId", auth, (req, res) => zoomCtrl.updateMeeting(cast(req), res));
app.delete("/v1/integrations/zoom/delete-meeting/:meetingId", auth, (req, res) => zoomCtrl.deleteMeeting(cast(req), res));
app.get("/v1/integrations/zoom/current-user", auth, (req, res) => zoomCtrl.getCurrentUser(cast(req), res));
app.post("/v1/integrations/zoom/generate-signature", auth, (req, res) => zoomCtrl.generateSignature(cast(req), res));
app.get("/v1/integrations/zoom/is-zoom-profile-exists", auth, (req, res) => zoomCtrl.isProfileExists(cast(req), res));
app.get("/v1/integrations/zoom/zoom-credentials", auth, (req, res) => zoomCtrl.getCredentials(cast(req), res));

// --- Facebook ---
app.post("/v1/integrations/facebook/connect", auth, (req, res) => facebookCtrl.connect(cast(req), res));
app.get("/v1/integrations/facebook/pages", auth, (req, res) => facebookCtrl.getPages(cast(req), res));
app.post("/v1/integrations/facebook/post", auth, (req, res) => facebookCtrl.createPost(cast(req), res));
app.get("/v1/integrations/facebook/campaigns-insights", auth, (req, res) => facebookCtrl.getCampaignsInsights(cast(req), res));

// --- Instagram ---
app.post("/v1/integrations/instagram/connect", auth, (req, res) => instagramCtrl.connect(cast(req), res));
app.post("/v1/integrations/instagram/post", auth, (req, res) => instagramCtrl.createPost(cast(req), res));
app.get("/v1/integrations/instagram/insights", auth, (req, res) => instagramCtrl.getInsights(cast(req), res));

// --- LinkedIn ---
app.post("/v1/integrations/linkedin/connect", auth, (req, res) => linkedinCtrl.connect(cast(req), res));
app.post("/v1/integrations/linkedin/post", auth, (req, res) => linkedinCtrl.createPost(cast(req), res));

// --- TikTok ---
app.post("/v1/integrations/tiktok/connect", auth, (req, res) => tiktokCtrl.connect(cast(req), res));
app.post("/v1/integrations/tiktok/video", auth, (req, res) => tiktokCtrl.createVideo(cast(req), res));

// --- Shopify ---
app.post("/v1/integrations/shopify/connect", auth, (req, res) => shopifyCtrl.connect(cast(req), res));
app.get("/v1/integrations/shopify/stores", auth, (req, res) => shopifyCtrl.getStores(cast(req), res));
app.get("/v1/integrations/shopify/products", auth, (req, res) => shopifyCtrl.getProducts(cast(req), res));

// --- Magento ---
app.post("/v1/integrations/magento/connect", auth, (req, res) => magentoCtrl.connect(cast(req), res));
app.get("/v1/integrations/magento", auth, (req, res) => magentoCtrl.getConnection(cast(req), res));
app.post("/v1/integrations/magento/disconnect", auth, (req, res) => magentoCtrl.disconnect(cast(req), res));
app.get("/v1/integrations/magento/stores", auth, (req, res) => magentoCtrl.getStores(cast(req), res));
app.get("/v1/integrations/magento/products", auth, (req, res) => magentoCtrl.getProducts(cast(req), res));
app.get("/v1/integrations/magento/orders", auth, (req, res) => magentoCtrl.getOrders(cast(req), res));
app.get("/v1/integrations/magento/customers", auth, (req, res) => magentoCtrl.getCustomers(cast(req), res));

// --- Uber Eats ---
app.post("/v1/integrations/uber-eats/connect", auth, (req, res) => uberEatsCtrl.connect(cast(req), res));
app.get("/v1/integrations/uber-eats/orders", auth, (req, res) => uberEatsCtrl.getOrders(cast(req), res));

// --- EasyPost ---
app.post("/v1/integrations/easypost/connect", auth, (req, res) => easyPostCtrl.connect(cast(req), res));
app.post("/v1/integrations/easypost/shipment", auth, (req, res) => easyPostCtrl.createShipment(cast(req), res));
app.post("/v1/integrations/easypost/rates", auth, (req, res) => easyPostCtrl.getRates(cast(req), res));

// --- User Integration Settings ---
app.get("/v1/integrations/settings", auth, (req, res) => settingsCtrl.getSettings(cast(req), res));
app.put("/v1/integrations/settings", auth, (req, res) => settingsCtrl.updateSettings(cast(req), res));

// --- Meta Integration ---
app.get("/v1/integrations/meta", auth, (req, res) => metaCtrl.getIntegration(cast(req), res));
app.put("/v1/integrations/meta", auth, (req, res) => metaCtrl.updateIntegration(cast(req), res));

// --- Voice Integration ---
app.get("/v1/integrations/voice", auth, (req, res) => voiceCtrl.getIntegration(cast(req), res));
app.put("/v1/integrations/voice", auth, (req, res) => voiceCtrl.updateIntegration(cast(req), res));

// --- WhatsApp ---
app.get("/v1/integrations/whatsapp/instances", auth, (req, res) => whatsappCtrl.getInstances(cast(req), res));
app.post("/v1/integrations/whatsapp/instances", auth, (req, res) => whatsappCtrl.createInstance(cast(req), res));
app.delete("/v1/integrations/whatsapp/instances/:instanceId", auth, (req, res) => whatsappCtrl.deleteInstance(cast(req), res));
app.get("/v1/integrations/whatsapp/qr/:instanceId", auth, (req, res) => whatsappCtrl.getQr(cast(req), res));
app.get("/v1/integrations/whatsapp/status/:instanceId", auth, (req, res) => whatsappCtrl.getStatus(cast(req), res));

// --- Telegram ---
app.get("/v1/integrations/telegram/sessions", auth, (req, res) => telegramCtrl.getSessions(cast(req), res));
app.post("/v1/integrations/telegram/sessions", auth, (req, res) => telegramCtrl.createSession(cast(req), res));
app.delete("/v1/integrations/telegram/sessions/:sessionId", auth, (req, res) => telegramCtrl.deleteSession(cast(req), res));

// --- Odoo ---
app.post("/v1/integrations/odoo/connect", auth, (req, res) => odooCtrl.connect(cast(req), res));
app.get("/v1/integrations/odoo", auth, (req, res) => odooCtrl.getConnection(cast(req), res));
app.post("/v1/integrations/odoo/disconnect", auth, (req, res) => odooCtrl.disconnect(cast(req), res));
app.get("/v1/integrations/odoo/contacts", auth, (req, res) => odooCtrl.getContacts(cast(req), res));
app.get("/v1/integrations/odoo/invoices", auth, (req, res) => odooCtrl.getInvoices(cast(req), res));
app.post("/v1/integrations/odoo/sync/magento", auth, (req, res) => odooCtrl.syncMagento(cast(req), res));

// --- Image Library ---
app.get("/v1/image-library", auth, (req, res) => imageLibraryCtrl.list(cast(req), res));
app.post("/v1/image-library", auth, (req, res) => imageLibraryCtrl.create(cast(req), res));
app.delete("/v1/image-library/:id", auth, (req, res) => imageLibraryCtrl.remove(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "integrations-service" }));

const port = Number(process.env.PORT || 7140);
server.listen(port, "0.0.0.0", async () => {
  logger.info({ port }, "integrations-service listening");
  scheduleOmniSendConsumerStart(logger);
});
