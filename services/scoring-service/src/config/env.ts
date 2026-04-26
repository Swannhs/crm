const envVars = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: process.env.PORT ?? '7160',
  DATABASE_URL: process.env.DATABASE_URL,
  CORS_ORIGINS: process.env.CORS_ORIGINS ?? 'http://localhost:3000',
  ODOO_SERVICE_URL: process.env.ODOO_SERVICE_URL ?? process.env.CRM_SERVICE_URL ?? 'http://odoo-integration-service:7200',
  DEAL_SERVICE_URL: process.env.DEAL_SERVICE_URL ?? 'http://deal-service:7150'
};

if (!envVars.DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}

export const config = {
  nodeEnv: envVars.NODE_ENV,
  port: Number.parseInt(envVars.PORT, 10),
  databaseUrl: envVars.DATABASE_URL,
  corsOrigins: envVars.CORS_ORIGINS.split(',').map((url) => url.trim()),
  crmServiceUrl: envVars.ODOO_SERVICE_URL,
  dealServiceUrl: envVars.DEAL_SERVICE_URL
};
