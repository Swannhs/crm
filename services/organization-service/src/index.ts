import { createServiceApp } from "@mymanager/node-service-kit";
import {
  OrganizationController,
  LocationController,
  OnboardingController,
  MembershipController,
  UserAccessController,
  CrmConfigurationController,
} from "./controllers/organization.controller.js";
import { identityMiddleware } from "./middleware/identity.js";
import { attachRoleContext, requireOrgRoles } from "./middleware/authorization.js";

const { app, logger } = createServiceApp({ 
  serviceName: "organization-service", 
  jsonLimit: "1mb",
  enableCors: false
});
const auth = [identityMiddleware, attachRoleContext];
const cast = (req: any) => req as any;

const orgCtrl = new OrganizationController();
const locationCtrl = new LocationController();
const onboardingCtrl = new OnboardingController();
const membershipCtrl = new MembershipController();
const userAccessCtrl = new UserAccessController();
const crmConfigCtrl = new CrmConfigurationController();
const ownerOrAdmin = requireOrgRoles(['org_owner', 'org_admin']) as any;
const ownerOnly = requireOrgRoles(['org_owner']) as any;
const managerUp = requireOrgRoles(['org_owner', 'org_admin', 'org_manager']) as any;

// --- Organizations ---
app.get("/v1/organizations", identityMiddleware as any, attachRoleContext as any, (req, res) => orgCtrl.get(cast(req), res));
app.get("/v1/details", identityMiddleware as any, attachRoleContext as any, (req, res) => orgCtrl.get(cast(req), res));
app.put("/v1/organizations", identityMiddleware as any, attachRoleContext as any, ownerOrAdmin, (req, res) =>
  orgCtrl.update(cast(req), res)
);
app.put("/v1/details", identityMiddleware as any, attachRoleContext as any, ownerOrAdmin, (req, res) =>
  orgCtrl.update(cast(req), res)
);
app.get("/v1/workspace", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  orgCtrl.workspace(cast(req), res)
);
app.get("/v1/settings/:section", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  orgCtrl.getSettings(cast(req), res)
);
app.put("/v1/settings/:section", identityMiddleware as any, attachRoleContext as any, ownerOrAdmin, (req, res) =>
  orgCtrl.updateSettings(cast(req), res)
);

// --- Locations ---
app.get("/v1/locations", identityMiddleware as any, attachRoleContext as any, (req, res) => locationCtrl.list(cast(req), res));
app.post("/v1/locations", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  locationCtrl.create(cast(req), res)
);
app.patch("/v1/locations/:locationId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  locationCtrl.update(cast(req), res)
);
app.delete("/v1/locations/:locationId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  locationCtrl.remove(cast(req), res)
);

// --- Memberships ---
app.get("/v1/memberships/resolve", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  membershipCtrl.resolve(cast(req), res)
);
app.get("/v1/memberships/me", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  membershipCtrl.resolve(cast(req), res)
);
app.get("/v1/memberships", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  membershipCtrl.list(cast(req), res)
);
app.post("/v1/memberships", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  membershipCtrl.upsert(cast(req), res)
);
app.patch("/v1/memberships/:userId", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  membershipCtrl.upsert(cast(req), res)
);
app.delete("/v1/memberships/:userId", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  membershipCtrl.remove(cast(req), res)
);

// --- RBAC / User Management ---
app.get("/v1/rbac/catalog", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  userAccessCtrl.catalog(cast(req), res)
);
app.get("/v1/users/access", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  userAccessCtrl.list(cast(req), res)
);
app.get("/v1/keycloak/users", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  userAccessCtrl.keycloakUsers(cast(req), res)
);
app.post("/v1/keycloak/users", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  userAccessCtrl.create(cast(req), res)
);
app.post("/v1/memberships/:userId/sync-keycloak", identityMiddleware as any, attachRoleContext as any, ownerOnly, (req, res) =>
  userAccessCtrl.sync(cast(req), res)
);

// --- CRM Configuration ---
app.get("/v1/teams", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  crmConfigCtrl.listTeams(cast(req), res)
);
app.post("/v1/teams", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.upsertTeam(cast(req), res)
);
app.patch("/v1/teams/:teamId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.upsertTeam(cast(req), res)
);
app.delete("/v1/teams/:teamId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.deleteTeam(cast(req), res)
);

app.get("/v1/crm/pipelines", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  crmConfigCtrl.listPipelines(cast(req), res)
);
app.post("/v1/crm/pipelines", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.upsertPipeline(cast(req), res)
);
app.patch("/v1/crm/pipelines/:pipelineId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.upsertPipeline(cast(req), res)
);
app.delete("/v1/crm/pipelines/:pipelineId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.deletePipeline(cast(req), res)
);

app.get("/v1/crm/custom-fields", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  crmConfigCtrl.listCustomFields(cast(req), res)
);
app.post("/v1/crm/custom-fields", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.upsertCustomField(cast(req), res)
);
app.patch("/v1/crm/custom-fields/:fieldId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.upsertCustomField(cast(req), res)
);
app.delete("/v1/crm/custom-fields/:fieldId", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.deleteCustomField(cast(req), res)
);

app.get("/v1/crm/automation", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  crmConfigCtrl.getAutomationRules(cast(req), res)
);
app.put("/v1/crm/automation", identityMiddleware as any, attachRoleContext as any, managerUp, (req, res) =>
  crmConfigCtrl.updateAutomationRules(cast(req), res)
);

// --- Onboarding ---
app.get("/v1/onboarding/status", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  onboardingCtrl.list(cast(req), res)
);
app.post("/v1/onboarding/status", identityMiddleware as any, attachRoleContext as any, (req, res) =>
  onboardingCtrl.create(cast(req), res)
);

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "organization-service (TS)" }));

const port = Number(process.env.PORT || 7010);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "organization-service listening (Clean Arch TS)"));
