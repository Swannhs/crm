import { createServiceApp } from '@mymanager/node-service-kit';
import { config } from './config/env.js';
import { identityMiddleware } from './middleware/identity.js';
import { odooRoutes } from './routes/odoo.routes.js';

const { app, logger } = createServiceApp({
  serviceName: 'odoo-integration-service',
  jsonLimit: '10mb',
  enableCors: false,
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'odoo-integration-service' });
});

app.use('/v1/odoo', identityMiddleware as any, odooRoutes);

const port = Number.isFinite(config.port) ? config.port : 7200;
app.listen(port, '0.0.0.0', () => {
  logger.info({ port }, 'odoo-integration-service listening');
});
