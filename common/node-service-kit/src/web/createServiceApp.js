import express from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import pinoHttp from "pino-http";

export function createServiceApp({
  serviceName,
  loggerLevel = process.env.LOG_LEVEL || "info",
  jsonLimit = "2mb",
  urlEncodedLimit = "2mb"
}) {
  const logger = pino({ level: loggerLevel, name: serviceName });
  const app = express();

  app.disable("x-powered-by");
  app.use(pinoHttp({ logger }));
  app.use(helmet());
  app.use(cors());
  app.use(express.json({ limit: jsonLimit }));
  app.use(express.urlencoded({ limit: urlEncodedLimit, extended: true, parameterLimit: 50000 }));

  // Standard health endpoints for k8s/compose probes.
  app.get("/healthz", (_req, res) => res.status(200).json({ status: "ok", service: serviceName }));
  app.get("/readyz", (_req, res) => res.status(200).json({ status: "ok", service: serviceName }));

  return { app, logger };
}
