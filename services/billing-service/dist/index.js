import { createServiceApp, createRoleContextMiddleware, requireOrgRoles } from "@mymanager/node-service-kit";
import { BillingController } from "./controllers/billing.controller.js";
import { identityMiddleware } from "./middleware/identity.js";
const { app, logger } = createServiceApp({
    serviceName: "billing-service",
    jsonLimit: "1mb"
});
const billingController = new BillingController();
const auth = [identityMiddleware, createRoleContextMiddleware()];
const readAccess = [...auth, requireOrgRoles(['org_viewer', 'org_staff', 'org_manager', 'org_admin', 'org_owner'])];
const writeAccess = [...auth, requireOrgRoles(['org_staff', 'org_manager', 'org_admin', 'org_owner'])];
// --- Routes ---
// Invoices
app.get("/v1/invoices", readAccess, billingController.listInvoices);
app.get("/v1/invoices/stats", readAccess, billingController.getInvoiceStats);
app.get("/v1/invoices/:id", readAccess, billingController.getInvoice);
app.post("/v1/invoices", writeAccess, billingController.createInvoice);
// Payments
app.get("/v1/payments", readAccess, billingController.listPayments);
app.post("/v1/payments", writeAccess, billingController.recordPayment);
// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "billing-service (TS)" }));
const port = Number(process.env.PORT || 7020);
app.listen(port, "0.0.0.0", () => {
    logger.info({ port }, "billing-service listening (Clean Arch TS)");
});
