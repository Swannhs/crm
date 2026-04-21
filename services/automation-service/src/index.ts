import { createServiceApp, createRoleContextMiddleware, requireOrgRoles } from "@mymanager/node-service-kit";
import { 
  AutomationController, 
  WorkflowController, 
  WorkflowWorkspaceController,
  WorkflowActionController,
  OmniChatbotController,
  OmniKeywordTriggerController,
  OmniBroadcastController,
  OmniWebhookController
} from "./controllers/index.js";
import { startBillingPaymentRecordedConsumer } from "./kafka/billing.consumer.js";
import { startOmniMessageConsumer } from './kafka/omni.consumer.js';
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "automation-service", jsonLimit: "1mb" });
const auth = [identityMiddleware, createRoleContextMiddleware()];
const readAccess = [...auth, requireOrgRoles(['org_staff', 'org_manager', 'org_admin', 'org_owner'])];
const writeAccess = [...auth, requireOrgRoles(['org_manager', 'org_admin', 'org_owner'])];
const cast = (req: any) => req as any;
const route = (handler: (req: any, res: any) => unknown) => (req: any, res: any) => handler(cast(req), res);

const automationCtrl = new AutomationController();
const workflowCtrl = new WorkflowController();
const workflowWorkspaceCtrl = new WorkflowWorkspaceController();
const workflowActionCtrl = new WorkflowActionController();
const chatbotCtrl = new OmniChatbotController();
const triggerCtrl = new OmniKeywordTriggerController();
const broadcastCtrl = new OmniBroadcastController();

// --- Automation ---
app.post("/v1/automation", writeAccess, route(automationCtrl.create.bind(automationCtrl)));
app.get("/v1/automation", readAccess, route(automationCtrl.getAll.bind(automationCtrl)));
app.post("/v1/automation/changeStatus", writeAccess, route(automationCtrl.changeStatus.bind(automationCtrl)));
app.post("/v1/automation/delete", writeAccess, route(automationCtrl.delete.bind(automationCtrl)));
app.get("/v1/automation/getAutomationsByIds", readAccess, route(automationCtrl.getByIds.bind(automationCtrl)));
app.post("/v1/automation/deleteAutomationsByIds", writeAccess, route(automationCtrl.deleteByIds.bind(automationCtrl)));
app.post("/v1/automation/setVideoWatch", route(automationCtrl.setVideoWatch.bind(automationCtrl)));

// --- Workflow ---
app.post("/v1/workflow/create", writeAccess, route(workflowCtrl.create.bind(workflowCtrl)));
app.get("/v1/workflow", readAccess, route(workflowCtrl.getAll.bind(workflowCtrl)));
app.get("/v1/workflow/getById", readAccess, route(workflowCtrl.getById.bind(workflowCtrl)));
app.put("/v1/workflow/update", writeAccess, route(workflowCtrl.update.bind(workflowCtrl)));
app.put("/v1/workflow/delete", writeAccess, route(workflowCtrl.delete.bind(workflowCtrl)));
app.put("/v1/workflow/launch-workflow", writeAccess, route(workflowCtrl.launch.bind(workflowCtrl)));
app.get("/v1/workflow/trigger-names", readAccess, route(workflowCtrl.getTriggerNames.bind(workflowCtrl)));
app.get("/v1/workflow/trigger-names-categories", readAccess, route(workflowCtrl.getTriggerNamesCategories.bind(workflowCtrl)));
app.get("/v1/workflow/getConditionRootValues", readAccess, route(workflowCtrl.getConditionsRootValue.bind(workflowCtrl)));
app.get("/v1/workflow/nodes", readAccess, route(workflowCtrl.getNodes.bind(workflowCtrl)));
app.post("/v1/workflow/nodes", writeAccess, route(workflowCtrl.createNode.bind(workflowCtrl)));
app.put("/v1/workflow/nodes", writeAccess, route(workflowCtrl.updateNode.bind(workflowCtrl)));
app.get("/v1/workflow/workflow-activity", readAccess, route(workflowCtrl.getActivityLogs.bind(workflowCtrl)));
app.get("/v1/workflow/workflow-activity/count", readAccess, route(workflowCtrl.getActivityLogsCount.bind(workflowCtrl)));
app.get("/v1/workflow/getWorkflowsByPipelineStageId/:stageId", readAccess, route(workflowCtrl.getWorkflowsByPipelineStageId.bind(workflowCtrl)));
app.post("/v1/workflow/use-template/:id", writeAccess, route(workflowCtrl.useTemplate.bind(workflowCtrl)));
app.get("/v1/workflow/get-all-templates", readAccess, route(workflowCtrl.getAllTemplates.bind(workflowCtrl)));
app.get("/v1/workflow/hasEmailOrSmsNodeInTemplate/:id", readAccess, route(workflowCtrl.hasEmailOrSmsNodeInTemplate.bind(workflowCtrl)));

// --- Workflow Workspace ---
app.post("/v1/workflow-workspace", writeAccess, route(workflowWorkspaceCtrl.create.bind(workflowWorkspaceCtrl)));
app.get("/v1/workflow-workspace", readAccess, route(workflowWorkspaceCtrl.getAll.bind(workflowWorkspaceCtrl)));
app.get("/v1/workflow-workspace/:id", readAccess, route(workflowWorkspaceCtrl.getById.bind(workflowWorkspaceCtrl)));
app.put("/v1/workflow-workspace", writeAccess, route(workflowWorkspaceCtrl.update.bind(workflowWorkspaceCtrl)));
app.delete("/v1/workflow-workspace", writeAccess, route(workflowWorkspaceCtrl.delete.bind(workflowWorkspaceCtrl)));

// --- Workflow Action ---
app.post("/v1/workflow-action/start-action", writeAccess, route(workflowActionCtrl.createStartAction.bind(workflowActionCtrl)));
app.get("/v1/workflow-action/start-action", readAccess, route(workflowActionCtrl.getStartActionList.bind(workflowActionCtrl)));
app.get("/v1/workflow-action/start-action/getById/:id", readAccess, route(workflowActionCtrl.getStartActionById.bind(workflowActionCtrl)));
app.put("/v1/workflow-action/start-action/:id", writeAccess, route(workflowActionCtrl.updateStartAction.bind(workflowActionCtrl)));
app.delete("/v1/workflow-action/start-action/:id", writeAccess, route(workflowActionCtrl.deleteStartAction.bind(workflowActionCtrl)));

// --- Omni Chatbot ---
app.post("/v1/omni/chatbots", writeAccess, route(chatbotCtrl.create.bind(chatbotCtrl)));
app.get("/v1/omni/chatbots", readAccess, route(chatbotCtrl.list.bind(chatbotCtrl)));
app.get("/v1/omni/chatbots/:id", readAccess, route(chatbotCtrl.get.bind(chatbotCtrl)));
app.put("/v1/omni/chatbots/:id", writeAccess, route(chatbotCtrl.update.bind(chatbotCtrl)));
app.delete("/v1/omni/chatbots/:id", writeAccess, route(chatbotCtrl.delete.bind(chatbotCtrl)));

// --- Omni Keyword Trigger ---
app.post("/v1/omni/triggers", writeAccess, route(triggerCtrl.create.bind(triggerCtrl)));
app.get("/v1/omni/triggers", readAccess, route(triggerCtrl.list.bind(triggerCtrl)));
app.put("/v1/omni/triggers/:id", writeAccess, route(triggerCtrl.update.bind(triggerCtrl)));
app.delete("/v1/omni/triggers/:id", writeAccess, route(triggerCtrl.delete.bind(triggerCtrl)));

// --- Omni Broadcast ---
app.post("/v1/omni/broadcasts", writeAccess, route(broadcastCtrl.create.bind(broadcastCtrl)));
app.get("/v1/omni/broadcasts", readAccess, route(broadcastCtrl.list.bind(broadcastCtrl)));
app.get("/v1/omni/broadcasts/:id", readAccess, route(broadcastCtrl.get.bind(broadcastCtrl)));

// --- Omni Webhook ---
const webhookCtrl = new OmniWebhookController();
app.post("/v1/omni/webhooks", writeAccess, route(webhookCtrl.create.bind(webhookCtrl)));
app.get("/v1/omni/webhooks", readAccess, route(webhookCtrl.getAll.bind(webhookCtrl)));
app.get("/v1/omni/webhooks/:id/logs", readAccess, route(webhookCtrl.getLogs.bind(webhookCtrl)));
app.post("/v1/public/webhook/receive/:id", (req, res) => webhookCtrl.receive(req, res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "automation-service" }));

const port = Number(process.env.PORT || 7110);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "automation-service listening"));

startBillingPaymentRecordedConsumer(logger).catch((err) => {
  logger.error({ err }, "Failed to start Kafka billing payment consumer");
});

startOmniMessageConsumer(logger).catch((err) => {
  logger.error({ err }, "Failed to start Kafka omni message consumer");
});
