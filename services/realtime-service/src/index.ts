import http from "node:http";
import { Server as SocketIOServer } from "socket.io";
import { createServiceApp, connectAmqpWithRetry, ensureTopicExchange } from "@mymanager/node-service-kit";
import { 
  LiveChatChannelController, 
  LiveChatMessageController, 
  LiveChatContactController,
  LiveChatWidgetSettingController,
  LiveChatStatisticsController
} from "./controllers/index.js";
import { identityMiddleware } from "./middleware/identity.js";

const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";

const { app, logger } = createServiceApp({ serviceName: "realtime-service", jsonLimit: "10mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const channelCtrl = new LiveChatChannelController();
const messageCtrl = new LiveChatMessageController();
const contactCtrl = new LiveChatContactController();
const widgetCtrl = new LiveChatWidgetSettingController();
const statsCtrl = new LiveChatStatisticsController();

app.post("/v1/livechat/channels", auth, (req, res) => channelCtrl.getChannelsByAdminId(cast(req), res));
app.get("/v1/livechat/channel/:channelId", auth, (req, res) => channelCtrl.getChannelById(cast(req), res));
app.delete("/v1/livechat/channel/:channelId/:contactId", auth, (req, res) => channelCtrl.deleteChannel(cast(req), res));

app.get("/v1/livechat/chathistory/:channelId", (req, res) => messageCtrl.getChatHistory(cast(req), res));
app.post("/v1/livechat/newmessage", (req, res) => messageCtrl.addMessage(cast(req), res));
app.get("/v1/livechat/chats-and-contacts", auth, (req, res) => messageCtrl.getChatsAndContacts(cast(req), res));

app.post("/v1/livechat/contact", auth, (req, res) => contactCtrl.createContact(cast(req), res));

app.post("/v1/livechat/widget-setting", auth, (req, res) => widgetCtrl.saveSetting(cast(req), res));
app.get("/v1/livechat/widget-setting", auth, (req, res) => widgetCtrl.getSetting(cast(req), res));
app.get("/v1/livechat/widget-setting/pub", (req, res) => widgetCtrl.getPublicSetting(cast(req), res));
app.post("/v1/livechat/widget-setting/send-code", auth, (req, res) => widgetCtrl.sendCode(cast(req), res));

app.get("/v1/livechat/statistics", auth, (req, res) => statsCtrl.getStatistics(cast(req), res));

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  logger.info({ id: socket.id }, "socket connected");
  
  socket.on("join-org", (orgId: string) => {
    socket.join(`org:${orgId}`);
    logger.info({ socketId: socket.id, orgId }, "socket joined org room");
  });
  
  socket.on("join-channel", (channelId: string) => {
    socket.join(`channel:${channelId}`);
    logger.info({ socketId: socket.id, channelId }, "socket joined channel room");
  });
  
  socket.on("send-message", (data: { channelId: string; message: any }) => {
    io.to(`channel:${data.channelId}`).emit("new-message", data.message);
  });
  
  socket.on("typing", (data: { channelId: string; userId: string }) => {
    socket.to(`channel:${data.channelId}`).emit("user-typing", data);
  });
  
  socket.on("mark-read", (data: { channelId: string; userId: string }) => {
    io.to(`channel:${data.channelId}`).emit("messages-read", data);
  });
  
  socket.emit("hello", { message: "connected to realtime-service" });
  socket.on("disconnect", () => logger.info({ id: socket.id }, "socket disconnected"));
});

async function startConsumer() {
  const conn = await connectAmqpWithRetry(url, logger);
  const ch = await conn.createChannel();
  await ensureTopicExchange(ch, "domain-events");
  const { queue } = await ch.assertQueue("realtime-service", { durable: true });
  await ch.bindQueue(queue, "domain-events", "#");

  await ch.consume(queue, (msg: any) => {
    if (!msg) return;
    const routingKey = msg.fields.routingKey;
    let data: any = null;
    try {
      data = JSON.parse(msg.content.toString("utf8"));
    } catch {
      data = { raw: msg.content.toString("utf8") };
    }
    io.emit("domain-event", { routingKey, data });
    ch.ack(msg);
  });

  logger.info({ queue }, "realtime-service consuming domain-events");
}

app.get("/health", (_req, res) => res.json({ status: "ok", service: "realtime-service" }));

const port = Number(process.env.PORT || 7030);
server.listen(port, "0.0.0.0", async () => {
  logger.info({ port }, "realtime-service listening (TS + Socket.IO)");
  try {
    await startConsumer();
  } catch (err) {
    logger.error({ err }, "failed to start consumer");
  }
});