import http from "node:http";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import amqp from "amqplib";
import { Server as SocketIOServer } from "socket.io";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok" }));
app.get("/readyz", (_req, res) => res.status(200).json({ status: "ok" }));

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
  const conn = await amqp.connect(url);
  conn.on("error", (err) => logger.error({ err }, "amqp connection error"));
  conn.on("close", () => logger.warn("amqp connection closed"));

  const ch = await conn.createChannel();
  await ch.assertExchange("domain-events", "topic", { durable: true });

  const { queue } = await ch.assertQueue("realtime-service", { durable: true });
  await ch.bindQueue(queue, "domain-events", "#");

  await ch.consume(queue, (msg) => {
    if (!msg) return;
    const routingKey = msg.fields.routingKey;
    let data = null;
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
  logger.info({ port }, "realtime-service listening");
  try {
    await startConsumer();
  } catch (err) {
    logger.error({ err }, "failed to start consumer");
  }
});

