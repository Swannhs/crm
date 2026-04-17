import amqp from "amqplib";
import pino from "pino";

const logger = pino({ level: process.env.LOG_LEVEL || "info" });
const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";

async function main() {
  // RabbitMQ may start slower than this service. Keep retrying instead of crashing the container.
  let conn;
  let attempt = 0;
  while (!conn) {
    try {
      attempt += 1;
      conn = await amqp.connect(url);
    } catch (err) {
      const delayMs = Math.min(10_000, 500 + attempt * 500);
      logger.warn({ err, attempt, delayMs }, "amqp connect failed, retrying");
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }

  conn.on("error", (err) => logger.error({ err }, "amqp connection error"));
  conn.on("close", () => logger.warn("amqp connection closed"));

  const ch = await conn.createChannel();
  await ch.assertExchange("domain-events", "topic", { durable: true });

  const { queue } = await ch.assertQueue("notification-service", { durable: true });
  await ch.bindQueue(queue, "domain-events", "#");

  logger.info({ queue }, "notification-service consuming domain-events");

  await ch.consume(
    queue,
    (msg) => {
      if (!msg) return;
      const routingKey = msg.fields.routingKey;
      const body = msg.content.toString("utf8");
      logger.info({ routingKey, body }, "event received");
      ch.ack(msg);
    },
    { consumerTag: "notification-service" }
  );
}

main().catch((err) => {
  logger.error({ err }, "notification-service failed");
  process.exit(1);
});
