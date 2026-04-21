import http from "node:http";
import { Server as SocketIOServer } from "socket.io";
import { createServiceApp, startKafkaConsumer } from "@mymanager/node-service-kit";
import { 
  LiveChatChannelController, 
  LiveChatMessageController, 
  LiveChatContactController,
  LiveChatWidgetSettingController,
  LiveChatStatisticsController,
  OmniConversationController,
  OmniMessageController,
  OmniAIController
} from "./controllers/index.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "realtime-service", jsonLimit: "10mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;
const route = (handler: (req: any, res: any) => unknown) => (req: any, res: any) => handler(cast(req), res);

const channelCtrl = new LiveChatChannelController();
const messageCtrl = new LiveChatMessageController();
const contactCtrl = new LiveChatContactController();
const widgetCtrl = new LiveChatWidgetSettingController();
const statsCtrl = new LiveChatStatisticsController();
const omniConvCtrl = new OmniConversationController();
const omniMsgCtrl = new OmniMessageController();
const omniAICtrl = new OmniAIController();

// --- Live Chat ---
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

// --- Omni ---
app.get("/v1/omni/conversations", auth, route(omniConvCtrl.getConversations.bind(omniConvCtrl)));
app.get("/v1/omni/conversations/:conversationId", auth, route(omniConvCtrl.getConversationById.bind(omniConvCtrl)));
app.post("/v1/omni/conversations/:conversationId/assign", auth, route(omniConvCtrl.assignAgent.bind(omniConvCtrl)));
app.patch("/v1/omni/conversations/:conversationId", auth, route(omniConvCtrl.updateConversation.bind(omniConvCtrl)));
app.get("/v1/omni/conversations/:conversationId/history", auth, route(omniMsgCtrl.getHistory.bind(omniMsgCtrl)));
app.post("/v1/omni/messages", auth, route(omniMsgCtrl.addMessage.bind(omniMsgCtrl)));
app.post("/v1/omni/ai/translate", auth, route(omniAICtrl.translate.bind(omniAICtrl)));
app.post("/v1/omni/ai/suggest-reply", auth, route(omniAICtrl.suggestReply.bind(omniAICtrl)));

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
  const brokers = process.env.KAFKA_BROKERS || "localhost:9092";
  await startKafkaConsumer({
    clientId: "realtime-service",
    brokers,
    groupId: "realtime-service.domain-events",
    topics: ["billing.payment.recorded", "omni.message.received"],
    logger,
    onMessage: async ({ topic, payload }) => {
      if (topic === "omni.message.received") {
        const event = payload as any;
        logger.info({ event }, "Processing incoming omni message");
        
        try {
          // Handle inbound message logic
          // 1. Find or create contact
          let contact = await contactCtrl.findOrCreateByPhone(event.contactMobile, event.organizationId, event.contactName);
          
          // 2. Find or create conversation
          let conversation = await omniConvCtrl.findOrCreateByContact(contact.id, event.organizationId, event.provider, event.contactMobile);
          
          // 3. Add message
          const message = await omniMsgCtrl.addInboundMessage({
            conversationId: conversation.id,
            senderId: contact.id,
            content: event.content,
            type: event.type,
            metadata: event.metadata
          });
          
          // 4. Push to sockets
          io.to(`org:${event.organizationId}`).emit("omni:message", {
            conversationId: conversation.id,
            message
          });
          
        } catch (err) {
          logger.error({ err }, "Failed to process inbound omni message");
        }
      } else {
        io.emit("domain-event", { routingKey: topic, data: payload });
      }
    },
  });
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
