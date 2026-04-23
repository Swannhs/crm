import { createServiceApp } from '@mymanager/node-service-kit';
import emailRoutes from './routes/email.routes.js';
import { config } from './config/env.js';

const { app, logger } = createServiceApp({
  serviceName: 'email-sync-service',
  enableCors: false
});

// Register routes
app.use('/api/v1/email', emailRoutes);

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'email-sync-service',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(config.port, '0.0.0.0', () => {
  logger.info({ port: config.port, nodeEnv: config.nodeEnv }, 'email-sync-service listening');
});

export default app;
