import { connectAmqpWithRetry, ensureTopicExchange, createServiceApp } from "@mymanager/node-service-kit";

const { logger } = createServiceApp({ serviceName: "notification-service" });
const url = process.env.RABBITMQ_URL || "amqp://localhost:5672";

async function main() {
  const conn = await connectAmqpWithRetry(url, logger);

  const ch = await conn.createChannel();
  await ensureTopicExchange(ch, "domain-events");

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
