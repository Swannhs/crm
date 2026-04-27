import { createServiceApp } from "@mymanager/node-service-kit";
import { OrganizationController, LocationController, OnboardingController, MembershipController, } from "./controllers/organization.controller.js";
import { identityMiddleware } from "./middleware/identity.js";
import { attachRoleContext, requireOrgRoles } from "./middleware/authorization.js";
const { app, logger } = createServiceApp({ serviceName: "organization-service", jsonLimit: "1mb" });
const auth = [identityMiddleware, attachRoleContext];
const cast = (req) => req;
const orgCtrl = new OrganizationController();
const locationCtrl = new LocationController();
const onboardingCtrl = new OnboardingController();
const membershipCtrl = new MembershipController();
const ownerOrAdmin = requireOrgRoles(['org_owner', 'org_admin']);
const managerUp = requireOrgRoles(['org_owner', 'org_admin', 'org_manager']);
// --- Organizations ---
app.get("/v1/organizations", identityMiddleware, attachRoleContext, (req, res) => orgCtrl.get(cast(req), res));
app.put("/v1/organizations", identityMiddleware, attachRoleContext, ownerOrAdmin, (req, res) => orgCtrl.update(cast(req), res));
// --- Locations ---
app.get("/v1/locations", identityMiddleware, attachRoleContext, (req, res) => locationCtrl.list(cast(req), res));
app.post("/v1/locations", identityMiddleware, attachRoleContext, managerUp, (req, res) => locationCtrl.create(cast(req), res));
// --- Memberships ---
app.get("/v1/memberships/resolve", identityMiddleware, attachRoleContext, (req, res) => membershipCtrl.resolve(cast(req), res));
app.get("/v1/memberships/me", identityMiddleware, attachRoleContext, (req, res) => membershipCtrl.resolve(cast(req), res));
app.get("/v1/memberships", identityMiddleware, attachRoleContext, ownerOrAdmin, (req, res) => membershipCtrl.list(cast(req), res));
app.post("/v1/memberships", identityMiddleware, attachRoleContext, ownerOrAdmin, (req, res) => membershipCtrl.upsert(cast(req), res));
app.patch("/v1/memberships/:userId", identityMiddleware, attachRoleContext, ownerOrAdmin, (req, res) => membershipCtrl.upsert(cast(req), res));
// --- Onboarding ---
app.get("/v1/onboarding/status", identityMiddleware, attachRoleContext, (req, res) => onboardingCtrl.list(cast(req), res));
app.post("/v1/onboarding/status", identityMiddleware, attachRoleContext, (req, res) => onboardingCtrl.create(cast(req), res));
// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "organization-service (TS)" }));
const port = Number(process.env.PORT || 7010);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "organization-service listening (Clean Arch TS)"));
