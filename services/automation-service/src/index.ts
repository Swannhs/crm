import { createServiceApp, createRoleContextMiddleware, requireOrgRoles } from "@mymanager/node-service-kit";
import { 
  AutomationController, 
  WorkflowController, 
  WorkflowWorkspaceController,
  WorkflowActionController,
  OmniChatbotController,
  OmniKeywordTriggerController,
  OmniBroadcastController
} from "./controllers/index.js";
import { startBillingPaymentRecordedConsumer } from "./kafka/billing.consumer.js";
import { startOmniMessageConsumer } from './kafka/omni.consumer.js';
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "automation-service", jsonLimit: "1mb" });
const auth = [identityMiddleware, createRoleContextMiddleware()];
const readAccess = [...auth, requireOrgRoles(['org_staff', 'org_manager', 'org_admin', 'org_owner'])];
const writeAccess = [...auth, requireOrgRoles(['org_manager', 'org_admin', 'org_owner'])];
const cast = (req: any) => req as any;

const automationCtrl = new AutomationController();
const workflowCtrl = new WorkflowController();
const workflowWorkspaceCtrl = new WorkflowWorkspaceController();
const workflowActionCtrl = new WorkflowActionController();
const chatbotCtrl = new OmniChatbotController();
const triggerCtrl = new OmniKeywordTriggerController();
const broadcastCtrl = new OmniBroadcastController();

// --- Automation ---
app.post("/v1/automation", writeAccess, (req, res) => automationCtrl.create(cast(req), res));
app.get("/v1/automation", readAccess, (req, res) => automationCtrl.getAll(cast(req), res));
app.post("/v1/automation/changeStatus", writeAccess, (req, res) => automationCtrl.changeStatus(cast(req), res));
app.post("/v1/automation/delete", writeAccess, (req, res) => automationCtrl.delete(cast(req), res));
app.get("/v1/automation/getAutomationsByIds", readAccess, (req, res) => automationCtrl.getByIds(cast(req), res));
app.post("/v1/automation/deleteAutomationsByIds", writeAccess, (req, res) => automationCtrl.deleteByIds(cast(req), res));
app.post("/v1/automation/setVideoWatch", (req, res) => automationCtrl.setVideoWatch(cast(req), res));

// --- Workflow ---
app.post("/v1/workflow/create", writeAccess, (req, res) => workflowCtrl.create(cast(req), res));
app.get("/v1/workflow", readAccess, (req, res) => workflowCtrl.getAll(cast(req), res));
app.get("/v1/workflow/getById", readAccess, (req, res) => workflowCtrl.getById(cast(req), res));
app.put("/v1/workflow/update", writeAccess, (req, res) => workflowCtrl.update(cast(req), res));
app.put("/v1/workflow/delete", writeAccess, (req, res) => workflowCtrl.delete(cast(req), res));
app.put("/v1/workflow/launch-workflow", writeAccess, (req, res) => workflowCtrl.launch(cast(req), res));
app.get("/v1/workflow/trigger-names", readAccess, (req, res) => workflowCtrl.getTriggerNames(cast(req), res));
app.get("/v1/workflow/trigger-names-categories", readAccess, (req, res) => workflowCtrl.getTriggerNamesCategories(cast(req), res));
app.get("/v1/workflow/getConditionRootValues", readAccess, (req, res) => workflowCtrl.getConditionsRootValue(cast(req), res));
app.get("/v1/workflow/nodes", readAccess, (req, res) => workflowCtrl.getNodes(cast(req), res));
app.post("/v1/workflow/nodes", writeAccess, (req, res) => workflowCtrl.createNode(cast(req), res));
app.put("/v1/workflow/nodes", writeAccess, (req, res) => workflowCtrl.updateNode(cast(req), res));
app.get("/v1/workflow/workflow-activity", readAccess, (req, res) => workflowCtrl.getActivityLogs(cast(req), res));
app.get("/v1/workflow/workflow-activity/count", readAccess, (req, res) => workflowCtrl.getActivityLogsCount(cast(req), res));
app.get("/v1/workflow/getWorkflowsByPipelineStageId/:stageId", readAccess, (req, res) => workflowCtrl.getWorkflowsByPipelineStageId(cast(req), res));
app.post("/v1/workflow/use-template/:id", writeAccess, (req, res) => workflowCtrl.useTemplate(cast(req), res));
app.get("/v1/workflow/get-all-templates", readAccess, (req, res) => workflowCtrl.getAllTemplates(cast(req), res));
app.get("/v1/workflow/hasEmailOrSmsNodeInTemplate/:id", readAccess, (req, res) => workflowCtrl.hasEmailOrSmsNodeInTemplate(cast(req), res));

// --- Workflow Workspace ---
app.post("/v1/workflow-workspace", writeAccess, (req, res) => workflowWorkspaceCtrl.create(cast(req), res));
app.get("/v1/workflow-workspace", readAccess, (req, res) => workflowWorkspaceCtrl.getAll(cast(req), res));
app.get("/v1/workflow-workspace/:id", readAccess, (req, res) => workflowWorkspaceCtrl.getById(cast(req), res));
app.put("/v1/workflow-workspace", writeAccess, (req, res) => workflowWorkspaceCtrl.update(cast(req), res));
app.delete("/v1/workflow-workspace", writeAccess, (req, res) => workflowWorkspaceCtrl.delete(cast(req), res));

// --- Workflow Action ---
app.post("/v1/workflow-action/start-action", writeAccess, (req, res) => workflowActionCtrl.createStartAction(cast(req), res));
app.get("/v1/workflow-action/start-action", readAccess, (req, res) => workflowActionCtrl.getStartActionList(cast(req), res));
app.get("/v1/workflow-action/start-action/getById/:id", readAccess, (req, res) => workflowActionCtrl.getStartActionById(cast(req), res));
app.put("/v1/workflow-action/start-action/:id", writeAccess, (req, res) => workflowActionCtrl.updateStartAction(cast(req), res));
app.delete("/v1/workflow-action/start-action/:id", writeAccess, (req, res) => workflowActionCtrl.deleteStartAction(cast(req), res));

// --- Omni Chatbot ---
app.post("/v1/omni/chatbot", writeAccess, (req, res) => chatbotCtrl.create(cast(req), res));
app.get("/v1/omni/chatbot", readAccess, (req, res) => chatbotCtrl.list(cast(req), res));
app.get("/v1/omni/chatbot/:id", readAccess, (req, res) => chatbotCtrl.get(cast(req), res));
app.put("/v1/omni/chatbot/:id", writeAccess, (req, res) => chatbotCtrl.update(cast(req), res));
app.delete("/v1/omni/chatbot/:id", writeAccess, (req, res) => chatbotCtrl.delete(cast(req), res));

// --- Omni Keyword Trigger ---
app.post("/v1/omni/trigger", writeAccess, (req, res) => triggerCtrl.create(cast(req), res));
app.get("/v1/omni/trigger", readAccess, (req, res) => triggerCtrl.list(cast(req), res));
app.put("/v1/omni/trigger/:id", writeAccess, (req, res) => triggerCtrl.update(cast(req), res));
app.delete("/v1/omni/trigger/:id", writeAccess, (req, res) => triggerCtrl.delete(cast(req), res));

// --- Omni Broadcast ---
app.post("/v1/omni/broadcast", writeAccess, (req, res) => broadcastCtrl.create(cast(req), res));
app.get("/v1/omni/broadcast", readAccess, (req, res) => broadcastCtrl.list(cast(req), res));
app.get("/v1/omni/broadcast/:id", readAccess, (req, res) => broadcastCtrl.get(cast(req), res));

// --- Omni Webhook ---
const webhookCtrl = new OmniWebhookController();
app.post("/v1/omni/webhooks", writeAccess, (req, res) => webhookCtrl.create(cast(req), res));
app.get("/v1/omni/webhooks", readAccess, (req, res) => webhookCtrl.getAll(cast(req), res));
app.get("/v1/omni/webhooks/:id/logs", readAccess, (req, res) => webhookCtrl.getLogs(cast(req), res));
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

import { startOmniMessageConsumer } from './kafka/omni.consumer.js';
