import { connectKafkaProducerWithRetry } from "@mymanager/node-service-kit";
let producerPromise;
export async function getProducer({ brokers, logger, }) {
    if (!producerPromise) {
        producerPromise = connectKafkaProducerWithRetry({
            clientId: "billing-service",
            brokers,
            logger,
        });
    }
    return producerPromise;
}
