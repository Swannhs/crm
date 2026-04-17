import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";

const { app, logger } = createServiceApp({
  serviceName: "community-service",
  jsonLimit: "10mb",
  urlEncodedLimit: "10mb"
});

// API-compat surface (monolith module names).
// We start with a controlled 501 response and implement endpoints incrementally.
function notImplemented(module, req, res) {
  res.status(501).json({
    message: "API not implemented in microservices yet.",
    module,
    method: req.method,
    path: req.path
  });
}

for (const module of [
  "community",
  "community-group",
  "community-members",
  "community-post",
  "community-livechat",
  "community-group-livechat",
  "community-follow",
  "community-booking",
  "community-profile",
  "community-settings",
  "community-events",
  "community-badges",
  "community-badge-library",
  "community-activity",
  "community-points"
]) {
  app.all(`/api/${module}/*`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
  app.all(`/api/${module}`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
}

const port = Number(process.env.PORT || 7050);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "community-service listening");
});

