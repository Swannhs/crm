import { connectAmqpWithRetry, ensureTopicExchange } from "@mymanager/node-service-kit";

let channel;

export async function getChannel({ url, logger }) {
  if (channel) return channel;

  const conn = await connectAmqpWithRetry(url, logger);
  channel = await conn.createChannel();
  await ensureTopicExchange(channel, "domain-events");
  return channel;
}
