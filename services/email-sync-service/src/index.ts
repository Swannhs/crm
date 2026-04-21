import { createServiceApp } from '@mymanager/node-service-kit';
import emailRoutes from './routes/email.routes.js';
import { config } from './config/env.js';

const app = createServiceApp({
  serviceName: 'email-sync-service',
  port: config.port,
  corsOrigins: config.corsOrigins
});

// Register routes
app.use('/api/v1/email', emailRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'email-sync-service',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(config.port, () => {
  console.log(`🚀 Email Sync Service running on port ${config.port}`);
  console.log(`📧 Environment: ${config.nodeEnv}`);
});

export default app;
