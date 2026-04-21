import { createServiceApp } from "@mymanager/node-service-kit";
import {
  InvoiceController,
  DepositController,
  CheckoutPageController,
  QrPayPageController,
} from "./controllers/payment.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "payments-service", jsonLimit: "10mb" });

const invoiceController = new InvoiceController();
const depositController = new DepositController();
const checkoutPageController = new CheckoutPageController();
const qrPayPageController = new QrPayPageController();
const auth = identityMiddleware;
const cast = (req: any) => req as any;

// --- Invoices ---
app.get("/v1/invoices", auth, (req, res) => invoiceController.list(cast(req), res));
app.post("/v1/invoices", auth, (req, res) => invoiceController.create(cast(req), res));
app.get("/v1/invoices/stats", auth, (req, res) => invoiceController.stats(cast(req), res));
app.post("/v1/invoices/:id/payments", auth, (req, res) => invoiceController.addPayment(cast(req), res));

// --- Deposits ---
app.get("/v1/deposits", auth, (req, res) => depositController.list(cast(req), res));
app.post("/v1/deposits", auth, (req, res) => depositController.create(cast(req), res));
app.get("/v1/payments", auth, (req, res) => depositController.listPayments(cast(req), res));

// --- Public checkout / QR pay ---
app.get("/v1/checkout-pages/public/:slug", (req, res) => checkoutPageController.getPublic(cast(req), res));
app.get("/v1/qr-pay-pages/public/:slug", (req, res) => qrPayPageController.getPublic(cast(req), res));
app.post("/v1/qr-pay-pages/public/:slug/track", (req, res) => qrPayPageController.trackPublic(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "payments-service (TS)" }));

const port = Number(process.env.PORT || 7090);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "payments-service listening (Clean Arch TS)"));
