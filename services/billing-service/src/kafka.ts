import { connectKafkaProducerWithRetry } from "@mymanager/node-service-kit";
import type { Producer } from "kafkajs";

let producerPromise: Promise<Producer> | undefined;

export async function getProducer({
  brokers,
  logger,
}: {
  brokers: string;
  logger?: { info?: Function; warn?: Function; error?: Function };
}) {
  if (!producerPromise) {
    producerPromise = connectKafkaProducerWithRetry({
      clientId: "billing-service",
      brokers,
      logger,
    });
  }

  return producerPromise;
}
