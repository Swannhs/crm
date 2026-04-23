import { createServiceApp } from '@mymanager/node-service-kit';
import dealRoutes from './routes/deal.routes.js';
import { config } from './config/env.js';

const { app, logger } = createServiceApp({
  serviceName: 'deal-service',
  enableCors: false
});

// Register routes
app.use('/api/v1/deals', dealRoutes);

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({
    status: 'healthy',
    service: 'deal-service',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(config.port, '0.0.0.0', () => {
  logger.info({ port: config.port, nodeEnv: config.nodeEnv }, 'deal-service listening');
});

export default app;
