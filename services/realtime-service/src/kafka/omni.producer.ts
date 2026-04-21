import { connectKafkaProducerWithRetry, publishJson } from "@mymanager/node-service-kit";

let producer: any = null;

export async function startOmniProducer(logger: any) {
  if (producer) return producer;

  producer = await connectKafkaProducerWithRetry({
    clientId: "realtime-service-omni",
    brokers: process.env.KAFKA_BROKERS,
    logger,
  });

  return producer;
}

export async function emitOmniMessageSend(event: any, logger: any) {
  try {
    const prod = await startOmniProducer(logger);
    await publishJson(prod, "omni.message.send", event, event.organizationId);
    logger.info({ event }, "Emitted omni.message.send event");
  } catch (err) {
    logger.error({ err, event }, "Failed to emit omni.message.send event");
  }
}
