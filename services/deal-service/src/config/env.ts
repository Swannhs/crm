import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.string().default('7150'),
  DATABASE_URL: z.string().url(),
  CORS_ORIGINS: z.string().default('http://localhost:3000'),
  RABBITMQ_URL: z.string().default('amqp://localhost:5672'),
  KEYCLOAK_URL: z.string().url(),
  KEYCLOAK_REALM: z.string().default('mymanager'),
  KEYCLOAK_CLIENT_ID: z.string().default('crm-api')
});

const envVars = envSchema.parse(process.env);

export const config = {
  nodeEnv: envVars.NODE_ENV,
  port: parseInt(envVars.PORT, 10),
  databaseUrl: envVars.DATABASE_URL,
  corsOrigins: envVars.CORS_ORIGINS.split(',').map(url => url.trim()),
  rabbitmqUrl: envVars.RABBITMQ_URL,
  keycloak: {
    url: envVars.KEYCLOAK_URL,
    realm: envVars.KEYCLOAK_REALM,
    clientId: envVars.KEYCLOAK_CLIENT_ID
  }
};
