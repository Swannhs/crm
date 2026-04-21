import { startKafkaConsumer } from "@mymanager/node-service-kit";
import { WorkflowService } from "../services/index.js";

type BillingPaymentRecordedEvent = {
  event_name: "billing.payment.recorded";
  occurred_at: string;
  payment_id: string;
  invoice_id: string;
  org_id: string;
  actor_user_id: string;
  amount_cents: number;
  currency: string;
  contact_id?: string | null;
  transaction_id?: string | null;
};

export async function startBillingPaymentRecordedConsumer(logger) {
  const brokers = process.env.KAFKA_BROKERS || "localhost:9092";
  const workflowService = new WorkflowService();

  return startKafkaConsumer({
    clientId: "automation-service",
    brokers,
    groupId: "automation-service.billing-payment-recorded",
    topic: "billing.payment.recorded",
    logger,
    onMessage: async ({ payload }) => {
      const event = payload as BillingPaymentRecordedEvent | null;
      if (!event || event.event_name !== "billing.payment.recorded") {
        return;
      }

      const workflows = await workflowService.getActiveWorkflowsForOrganization(event.org_id);
      if (workflows.length === 0) {
        logger.info?.({ orgId: event.org_id }, "No active workflows for billing payment event");
        return;
      }

      await Promise.all(
        workflows.map((workflow) =>
          workflowService.logActivity({
            userId: event.actor_user_id,
            organizationId: event.org_id,
            workflowId: workflow.id,
            contactId: event.contact_id ?? null,
            action: "billing.payment.recorded",
            details: {
              invoiceId: event.invoice_id,
              paymentId: event.payment_id,
              amountCents: event.amount_cents,
              currency: event.currency,
              occurredAt: event.occurred_at,
              transactionId: event.transaction_id ?? null,
              sourceTopic: "billing.payment.recorded",
            },
          })
        )
      );

      logger.info?.(
        { orgId: event.org_id, workflowCount: workflows.length, paymentId: event.payment_id },
        "Processed billing payment event"
      );
    },
  });
}
