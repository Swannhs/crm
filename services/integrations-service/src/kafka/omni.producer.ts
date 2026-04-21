import { connectKafkaProducerWithRetry, publishJson } from "@mymanager/node-service-kit";
import { OmniMessageReceivedEvent } from "../types/index.js";

let producer: any = null;

export async function startOmniProducer(logger: any) {
  if (producer) return producer;

  producer = await connectKafkaProducerWithRetry({
    clientId: "integrations-service-omni",
    brokers: process.env.KAFKA_BROKERS,
    logger,
  });

  return producer;
}

export async function emitOmniMessageReceived(event: OmniMessageReceivedEvent, logger: any) {
  try {
    const prod = await startOmniProducer(logger);
    await publishJson(prod, "omni.message.received", event, event.organizationId);
    logger.info({ event }, "Emitted omni.message.received event");
  } catch (err) {
    logger.error({ err, event }, "Failed to emit omni.message.received event");
  }
}
