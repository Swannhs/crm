import { config } from './config/env.js';
import { createServiceApp } from './lib/node-service-kit.js';
import scoringRoutes from './routes/scoring.routes.js';

const { app, logger } = createServiceApp({
  serviceName: 'scoring-service'
});

app.use('/api/v1/scoring', scoringRoutes);

app.get('/health', (_req: unknown, res: { json: (payload: unknown) => void }) => {
  res.json({
    status: 'healthy',
    service: 'scoring-service',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.use((error: unknown, _req: unknown, res: { status: (code: number) => { json: (payload: unknown) => void; }; }) => {
  const message = error instanceof Error ? error.message : 'Unknown error';
  const statusCode = message.includes('not found') ? 404 : 400;
  res.status(statusCode).json({
    success: false,
    error: message
  });
});

app.listen(config.port, '0.0.0.0', () => {
  logger.info({ port: config.port, env: config.nodeEnv }, 'scoring-service listening');
});
