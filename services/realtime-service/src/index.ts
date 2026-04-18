import http from "node:http";
import { Server as SocketIOServer } from "socket.io";
import { createServiceApp, connectAmqpWithRetry, ensureTopicExchange } from "@mymanager/node-service-kit";

const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";

const { app, logger } = createServiceApp({ serviceName: "realtime-service", jsonLimit: "1mb" });

const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  logger.info({ id: socket.id }, "socket connected");
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

const port = Number(process.env.PORT || 7030);
server.listen(port, "0.0.0.0", async () => {
  logger.info({ port }, "realtime-service listening (TS)");
  try {
    await startConsumer();
  } catch (err) {
    logger.error({ err }, "failed to start consumer");
  }
});
