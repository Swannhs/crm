import { createServiceApp } from "@mymanager/node-service-kit";
import { OrganizationController, LocationController } from "./controllers/organization.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "organization-service", jsonLimit: "1mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const orgCtrl = new OrganizationController();
const locationCtrl = new LocationController();

// --- Organizations ---
app.get("/v1/organizations", auth, (req, res) => orgCtrl.get(cast(req), res));
app.put("/v1/organizations", auth, (req, res) => orgCtrl.update(cast(req), res));

// --- Locations ---
app.get("/v1/locations", auth, (req, res) => locationCtrl.list(cast(req), res));
app.post("/v1/locations", auth, (req, res) => locationCtrl.create(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "organization-service (TS)" }));

const port = Number(process.env.PORT || 7010);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "organization-service listening (Clean Arch TS)"));
