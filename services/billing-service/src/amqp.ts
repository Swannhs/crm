import { connectAmqpWithRetry, ensureTopicExchange } from "@mymanager/node-service-kit";

let channel: any;

export async function getChannel({ url, logger }: { url: string; logger: any }) {
  if (channel) return channel;

  const conn = await connectAmqpWithRetry(url, logger);
  channel = await conn.createChannel();
  await ensureTopicExchange(channel, "domain-events");
  return channel;
}
