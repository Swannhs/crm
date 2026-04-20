import { createServiceApp } from "@mymanager/node-service-kit";
import { 
  AutomationController, 
  WorkflowController, 
  WorkflowWorkspaceController,
  WorkflowActionController 
} from "./controllers/index.js";
import { startBillingPaymentRecordedConsumer } from "./kafka/billing.consumer.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "automation-service", jsonLimit: "1mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const automationCtrl = new AutomationController();
const workflowCtrl = new WorkflowController();
const workflowWorkspaceCtrl = new WorkflowWorkspaceController();
const workflowActionCtrl = new WorkflowActionController();

// --- Automation ---
app.post("/v1/automation", auth, (req, res) => automationCtrl.create(cast(req), res));
app.get("/v1/automation", auth, (req, res) => automationCtrl.getAll(cast(req), res));
app.post("/v1/automation/changeStatus", auth, (req, res) => automationCtrl.changeStatus(cast(req), res));
app.post("/v1/automation/delete", auth, (req, res) => automationCtrl.delete(cast(req), res));
app.get("/v1/automation/getAutomationsByIds", auth, (req, res) => automationCtrl.getByIds(cast(req), res));
app.post("/v1/automation/deleteAutomationsByIds", auth, (req, res) => automationCtrl.deleteByIds(cast(req), res));
app.post("/v1/automation/setVideoWatch", (req, res) => automationCtrl.setVideoWatch(cast(req), res));

// --- Workflow ---
app.post("/v1/workflow/create", auth, (req, res) => workflowCtrl.create(cast(req), res));
app.get("/v1/workflow", auth, (req, res) => workflowCtrl.getAll(cast(req), res));
app.get("/v1/workflow/getById", auth, (req, res) => workflowCtrl.getById(cast(req), res));
app.put("/v1/workflow/update", auth, (req, res) => workflowCtrl.update(cast(req), res));
app.put("/v1/workflow/delete", auth, (req, res) => workflowCtrl.delete(cast(req), res));
app.put("/v1/workflow/launch-workflow", auth, (req, res) => workflowCtrl.launch(cast(req), res));
app.get("/v1/workflow/trigger-names", auth, (req, res) => workflowCtrl.getTriggerNames(cast(req), res));
app.get("/v1/workflow/trigger-names-categories", auth, (req, res) => workflowCtrl.getTriggerNamesCategories(cast(req), res));
app.get("/v1/workflow/getConditionRootValues", auth, (req, res) => workflowCtrl.getConditionsRootValue(cast(req), res));
app.get("/v1/workflow/nodes", auth, (req, res) => workflowCtrl.getNodes(cast(req), res));
app.post("/v1/workflow/nodes", auth, (req, res) => workflowCtrl.createNode(cast(req), res));
app.put("/v1/workflow/nodes", auth, (req, res) => workflowCtrl.updateNode(cast(req), res));
app.get("/v1/workflow/workflow-activity", auth, (req, res) => workflowCtrl.getActivityLogs(cast(req), res));
app.get("/v1/workflow/workflow-activity/count", auth, (req, res) => workflowCtrl.getActivityLogsCount(cast(req), res));
app.get("/v1/workflow/getWorkflowsByPipelineStageId/:stageId", auth, (req, res) => workflowCtrl.getWorkflowsByPipelineStageId(cast(req), res));
app.post("/v1/workflow/use-template/:id", auth, (req, res) => workflowCtrl.useTemplate(cast(req), res));
app.get("/v1/workflow/get-all-templates", auth, (req, res) => workflowCtrl.getAllTemplates(cast(req), res));
app.get("/v1/workflow/hasEmailOrSmsNodeInTemplate/:id", auth, (req, res) => workflowCtrl.hasEmailOrSmsNodeInTemplate(cast(req), res));

// --- Workflow Workspace ---
app.post("/v1/workflow-workspace", auth, (req, res) => workflowWorkspaceCtrl.create(cast(req), res));
app.get("/v1/workflow-workspace", auth, (req, res) => workflowWorkspaceCtrl.getAll(cast(req), res));
app.get("/v1/workflow-workspace/:id", auth, (req, res) => workflowWorkspaceCtrl.getById(cast(req), res));
app.put("/v1/workflow-workspace", auth, (req, res) => workflowWorkspaceCtrl.update(cast(req), res));
app.delete("/v1/workflow-workspace", auth, (req, res) => workflowWorkspaceCtrl.delete(cast(req), res));

// --- Workflow Action ---
app.post("/v1/workflow-action/start-action", auth, (req, res) => workflowActionCtrl.createStartAction(cast(req), res));
app.get("/v1/workflow-action/start-action", auth, (req, res) => workflowActionCtrl.getStartActionList(cast(req), res));
app.get("/v1/workflow-action/start-action/getById/:id", auth, (req, res) => workflowActionCtrl.getStartActionById(cast(req), res));
app.put("/v1/workflow-action/start-action/:id", auth, (req, res) => workflowActionCtrl.updateStartAction(cast(req), res));
app.delete("/v1/workflow-action/start-action/:id", auth, (req, res) => workflowActionCtrl.deleteStartAction(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "automation-service" }));

const port = Number(process.env.PORT || 7110);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "automation-service listening"));

startBillingPaymentRecordedConsumer(logger).catch((err) => {
  logger.error({ err }, "Failed to start Kafka billing payment consumer");
});
