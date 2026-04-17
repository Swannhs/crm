import amqp from "amqplib";

export async function connectAmqpWithRetry(url, logger, { maxDelayMs = 10000 } = {}) {
  let attempt = 0;
  while (true) {
    try {
      attempt += 1;
      const conn = await amqp.connect(url);
      conn.on("error", (err) => logger.error({ err }, "amqp connection error"));
      conn.on("close", () => logger.warn("amqp connection closed"));
      return conn;
    } catch (err) {
      const delayMs = Math.min(maxDelayMs, 500 + attempt * 500);
      logger.warn({ err, attempt, delayMs }, "amqp connect failed, retrying");
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

export async function ensureTopicExchange(channel, exchangeName) {
  await channel.assertExchange(exchangeName, "topic", { durable: true });
}

export function publishJson(channel, exchangeName, routingKey, payload) {
  return channel.publish(
    exchangeName,
    routingKey,
    Buffer.from(JSON.stringify(payload)),
    { contentType: "application/json" }
  );
}

