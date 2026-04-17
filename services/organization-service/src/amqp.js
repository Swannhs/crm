import amqp from "amqplib";

let conn;
let channel;

export async function getChannel({ url, logger }) {
  if (channel) return channel;

  conn = await amqp.connect(url);
  conn.on("error", (err) => logger.error({ err }, "amqp connection error"));
  conn.on("close", () => logger.warn("amqp connection closed"));

  channel = await conn.createChannel();
  await channel.assertExchange("domain-events", "topic", { durable: true });
  return channel;
}

