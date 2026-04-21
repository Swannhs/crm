import { startKafkaConsumer } from "@mymanager/node-service-kit";
import { OmniKeywordTriggerService, OmniChatbotService } from "../services/index.js";
import { OmniMessageReceivedEvent } from "../types/index.js";

const triggerSvc = new OmniKeywordTriggerService();
const chatbotSvc = new OmniChatbotService();

export async function startOmniMessageConsumer(logger: any) {
  const brokers = process.env.KAFKA_BROKERS || "localhost:9092";
  
  await startKafkaConsumer({
    clientId: "automation-service-omni",
    brokers,
    groupId: "automation-service.omni-events",
    topic: "omni.message.received",
    logger,
    onMessage: async ({ payload }) => {
      const event = payload as OmniMessageReceivedEvent;
      logger.info({ event }, "Automation processing inbound message");

      try {
        // 1. Check for Keyword Triggers
        const trigger = await triggerSvc.findMatchingTrigger(event.content.trim(), event.organizationId);
        
        if (trigger && trigger.isActive) {
          logger.info({ triggerId: trigger.id }, "Keyword trigger matched");
          // Execute the associated action (e.g., send a message, start a flow)
          await triggerSvc.executeTrigger(trigger, event, logger);
          return;
        }

        // 2. Check for active chatbot flows for this contact/provider
        // This would involve checking the contact's current flow state
        await chatbotSvc.processMessage(event, logger);

      } catch (err) {
        logger.error({ err, event }, "Failed to process automation for inbound message");
      }
    },
  });
}
