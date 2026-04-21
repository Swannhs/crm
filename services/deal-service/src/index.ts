import { createServiceApp } from '@mymanager/node-service-kit';
import dealRoutes from './routes/deal.routes.js';
import { config } from './config/env.js';

const app = createServiceApp({
  serviceName: 'deal-service',
  port: config.port,
  corsOrigins: config.corsOrigins
});

// Register routes
app.use('/api/v1/deals', dealRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'deal-service',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(config.port, () => {
  console.log(`🚀 Deal Service running on port ${config.port}`);
  console.log(`📊 Environment: ${config.nodeEnv}`);
});

export default app;
