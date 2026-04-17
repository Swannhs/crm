import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";

const { app, logger } = createServiceApp({
  serviceName: "commerce-service",
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
  "shopv2",
  "cart",
  "checkout-page",
  "product",
  "product-category",
  "category",
  "coupon",
  "hardware",
  "hardware-quote",
  "modifier-type",
  "modifier-files",
  "label",
  "cash-drawer",
  "pos-cash-register"
]) {
  app.all(`/api/${module}/*`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
  app.all(`/api/${module}`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
}

const port = Number(process.env.PORT || 7060);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "commerce-service listening");
});

