import type { Express, RequestHandler } from 'express';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const {
  createServiceApp: rawCreateServiceApp,
  requireIdentityContext: rawRequireIdentityContext
} = require('../../../../common/node-service-kit/src/index.js') as {
  createServiceApp: (options: {
    serviceName: string;
    loggerLevel?: string;
    jsonLimit?: string;
    urlEncodedLimit?: string;
    enableCors?: boolean;
  }) => { app: Express; logger: ServiceLogger };
  requireIdentityContext: RequestHandler;
};

interface ServiceLogger {
  info: (payload: unknown, message?: string) => void;
  error: (payload: unknown, message?: string) => void;
}

export function createServiceApp(options: {
  serviceName: string;
  loggerLevel?: string;
  jsonLimit?: string;
  urlEncodedLimit?: string;
  enableCors?: boolean;
}): { app: Express; logger: ServiceLogger } {
  return rawCreateServiceApp(options) as { app: Express; logger: ServiceLogger };
}

export function requireIdentityContext(): RequestHandler {
  return rawRequireIdentityContext as RequestHandler;
}
