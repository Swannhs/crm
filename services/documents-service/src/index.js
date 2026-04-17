import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";

const { app, logger } = createServiceApp({
  serviceName: "documents-service",
  jsonLimit: "50mb",
  urlEncodedLimit: "50mb"
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
  "document",
  "document-recipient",
  "document-signature",
  "document-custome-fields",
  "file-manager",
  "file-manager-activity",
  "upload",
  "local-storage"
]) {
  app.all(`/api/${module}/*`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
  app.all(`/api/${module}`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
}

const port = Number(process.env.PORT || 7070);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "documents-service listening");
});

