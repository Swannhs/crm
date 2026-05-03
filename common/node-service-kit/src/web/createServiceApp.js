import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import pinoHttp from "pino-http";
import { rateLimit } from "express-rate-limit";

export function createServiceApp({
  serviceName,
  loggerLevel = process.env.LOG_LEVEL || "info",
  jsonLimit = "2mb",
  urlEncodedLimit = "2mb",
  enableCors = true,
  enableRateLimit = true,
  rateLimitWindowMs = 1 * 60 * 1000, // 1 minute
  rateLimitMax = 100 // 100 requests per minute
}) {
  const logger = pino({ level: loggerLevel, name: serviceName });
  const app = express();

  app.disable("x-powered-by");
  app.use(pinoHttp({ logger }));
  app.use(helmet());

  if (enableCors) {
    const origin = process.env.ALLOWED_ORIGIN || "*";
    app.use(cors({
      origin: origin === "*" ? true : origin,
      credentials: true
    }));
  }

  if (enableRateLimit) {
    app.use(rateLimit({
      windowMs: rateLimitWindowMs,
      max: rateLimitMax,
      standardHeaders: true,
      legacyHeaders: false,
      message: { 
        success: false, 
        error: { 
          code: 'TOO_MANY_REQUESTS', 
          message: 'Too many requests, please try again later.' 
        } 
      }
    }));
  }

  app.use(express.json({ limit: jsonLimit }));
  app.use(express.urlencoded({ limit: urlEncodedLimit, extended: true, parameterLimit: 50000 }));

  // Standard health endpoints for k8s/compose probes.
  app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok", service: serviceName }));
  app.get("/readyz", (_req, res) => res.status(200).json({ status: "ok", service: serviceName }));

  return { app, logger };
}

export function createRateLimiter({ windowMs, max, message }) {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    message: message || { 
      success: false, 
      error: { 
        code: 'TOO_MANY_REQUESTS', 
        message: 'Too many requests, please try again later.' 
      } 
    }
  });
}
