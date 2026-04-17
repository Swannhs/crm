import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";

const { app, logger } = createServiceApp({
  serviceName: "payments-service",
  jsonLimit: "10mb",
  urlEncodedLimit: "10mb"
});

function notImplemented(module, req, res) {
  res.status(501).json({
    message: "API not implemented in microservices yet.",
    module,
    method: req.method,
    path: req.path
  });
}

for (const module of [
  "payment",
  "payment-cards",
  "payment-fluidpay",
  "payment-paypal",
  "payment-valor",
  "payment-method-tag",
  "fullstack-payment",
  "qr-pay-page",
  "processing-fee-settings"
]) {
  app.all(`/api/${module}/*`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
  app.all(`/api/${module}`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
}

const port = Number(process.env.PORT || 7080);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "payments-service listening");
});

