import { createServiceApp } from "@mymanager/node-service-kit";
import { BillingController } from "./controllers/billing.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "billing-service", 
  jsonLimit: "1mb" 
});

const billingController = new BillingController();

// --- Routes ---

// Invoices
app.get("/v1/invoices", 
  identityMiddleware, 
  billingController.listInvoices
);

app.get("/v1/invoices/:id", 
  identityMiddleware,
  billingController.getInvoice
);

app.post("/v1/invoices", 
  identityMiddleware, 
  billingController.createInvoice
);

// Payments
app.get("/v1/payments",
  identityMiddleware,
  billingController.listPayments
);

app.post("/v1/payments", 
  identityMiddleware, 
  billingController.recordPayment
);

// --- Server ---

const port = Number(process.env.PORT || 7020);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "billing-service listening (Clean Arch TS)");
});
