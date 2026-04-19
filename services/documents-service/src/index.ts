import { createServiceApp } from "@mymanager/node-service-kit";
import { ContactWaiverController, DocumentController } from "./controllers/document.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "documents-service", jsonLimit: "50mb" });

const docController = new DocumentController();
const waiverController = new ContactWaiverController();
const auth = identityMiddleware;
const cast = (req: any) => req as any;

// --- Documents ---
app.get("/v1/documents", auth, (req, res) => docController.list(cast(req), res));
app.get("/v1/documents/statuses-and-docs-count", auth, (req, res) => docController.statusCounts(cast(req), res));
app.post("/v1/documents/upload", auth, (req, res) => docController.upload(cast(req), res));
app.get("/v1/documents/:id", auth, (req, res) => docController.get(cast(req), res));

// --- Public waivers ---
app.get("/v1/contact-waivers/public/:id", (req, res) => waiverController.getPublic(cast(req), res));
app.put("/v1/contact-waivers/public/sign/:id", (req, res) => waiverController.signPublic(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "documents-service (TS)" }));

const port = Number(process.env.PORT || 7080);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "documents-service listening (Clean Arch TS)"));
