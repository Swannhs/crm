import { createServiceApp } from "@mymanager/node-service-kit";

const { app, logger } = createServiceApp({
  serviceName: "api-router-service",
  jsonLimit: "50mb",
  urlEncodedLimit: "50mb"
});

import type { Request, Response } from "express";

function identityOr401(req: Request, res: Response): { orgId: string; userId: string } | null {
  const orgId = req.header("X-Org-Id") || null;
  const userId = req.header("X-User-Id") || null;
  if (!orgId || !userId) {
    res.status(401).json({ message: "Missing identity context headers." });
    return null;
  }
  return { orgId, userId };
}

function notImplemented(res: Response, meta: { module: string; path: string; method: string; hint: string }) {
  res.status(501).json({ message: "API not implemented in microservices yet.", ...meta });
}

async function proxyTo(req: Request, res: Response, opts: { baseUrl: string; targetPath: string }) {
  const url = new URL(opts.targetPath, opts.baseUrl);

  const headers = new Headers();
  const hopByHop = new Set(["connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "te", "trailer", "transfer-encoding", "upgrade", "host"]);

  for (const [k, v] of Object.entries(req.headers)) {
    if (!k) continue;
    if (hopByHop.has(k.toLowerCase())) continue;
    headers.set(k, Array.isArray(v) ? v.join(",") : String(v));
  }

  const init: RequestInit = { method: req.method, headers };

  if (!["GET", "HEAD"].includes(req.method)) {
    if (req.is("application/json")) {
      init.body = JSON.stringify(req.body ?? {});
      headers.set("content-type", "application/json");
    } else if (req.is("application/x-www-form-urlencoded")) {
      init.body = new URLSearchParams(req.body ?? {}).toString();
      headers.set("content-type", "application/x-www-form-urlencoded");
    } else {
      res.status(415).json({ message: "Unsupported Content-Type for proxy." });
      return;
    }
  }

  const upstream = await fetch(url, init);
  res.status(upstream.status);

  upstream.headers.forEach((value: string, key: string) => {
    if (hopByHop.has(key.toLowerCase())) return;
    res.setHeader(key, value);
  });

  const buf = Buffer.from(await upstream.arrayBuffer());
  res.send(buf);
}

const domainRoutes: Record<string, string> = {
  "community": "http://community-service:7030",
  "community-group": "http://community-service:7030",
  "community-members": "http://community-service:7030",
  "community-post": "http://community-service:7030",
  "community-profile": "http://community-service:7030",
  "community-settings": "http://community-service:7030",
  "community-events": "http://community-service:7030",
  "community-badges": "http://community-service:7030",
  "community-activity": "http://community-service:7030",
  "community-points": "http://community-service:7030",
  "shopv2": "http://commerce-service:7060",
  "cart": "http://commerce-service:7060",
  "product": "http://commerce-service:7060",
  "product-category": "http://commerce-service:7060",
  "category": "http://commerce-service:7060",
  "coupon": "http://commerce-service:7060",
  "document": "http://documents-service:7080",
  "document-recipient": "http://documents-service:7080",
  "document-signature": "http://documents-service:7080",
  "upload": "http://documents-service:7080",
  "payment": "http://payments-service:7090",
  "payment-cards": "http://payments-service:7090",
  "deposit": "http://payments-service:7090",
  "employee": "http://employees-service:7070",
  "employee-schedule": "http://employees-service:7070",
  "employee-timeoff-request": "http://employees-service:7070",
  "employee-attendance": "http://employees-service:7070"
};

async function handleApiCompat(req: Request, res: Response) {
  const ident = identityOr401(req, res);
  if (!ident) return;

  const module = req.params.module;
  const rest = req.params[0] ? `/${req.params[0]}` : "";

  try {
    if (domainRoutes[module]) {
      return proxyTo(req, res, { baseUrl: domainRoutes[module], targetPath: `/api/${module}${rest}` });
    }

    if (module === "contact") {
      if (req.method === "GET" && rest === "/get") return proxyTo(req, res, { baseUrl: "http://crm-service:8010", targetPath: "/api/v1/contacts" });
      if (req.method === "POST" && rest === "/add") return proxyTo(req, res, { baseUrl: "http://crm-service:8010", targetPath: "/api/v1/contacts" });
      if (req.method === "GET" && rest.startsWith("/getById/")) {
        const id = rest.split("/").pop();
        return proxyTo(req, res, { baseUrl: "http://crm-service:8010", targetPath: `/api/v1/contacts/${id}` });
      }
      return notImplemented(res, { module, method: req.method, path: rest, hint: "Implemented: GET /get, POST /add, GET /getById/:id" });
    }

    if (module === "invoice") {
      if (req.method === "GET" && (rest === "" || rest === "/")) return proxyTo(req, res, { baseUrl: "http://billing-service:7020", targetPath: "/v1/invoices" });
      if (req.method === "POST" && (rest === "" || rest === "/")) return proxyTo(req, res, { baseUrl: "http://billing-service:7020", targetPath: "/v1/invoices" });
      if (req.method === "GET" && (rest === "/stats" || rest === "/statistics/income")) {
        return proxyTo(req, res, { baseUrl: "http://payments-service:7090", targetPath: "/v1/invoices/stats" });
      }
      return notImplemented(res, { module, method: req.method, path: rest, hint: "Implemented: GET /, POST /" });
    }

    if (module === "booking") {
      if (req.method === "GET" && rest === "/booking-types") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/booking-types" });
      if (req.method === "POST" && rest === "/booking-types") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/booking-types" });
      return notImplemented(res, { module, method: req.method, path: rest, hint: "booking-types (scaffold)" });
    }

    // Fallback: proxy to legacy monolith
    const path = `/api/${module}${rest}`;
    logger.info({ module, path }, "Proxying unmigrated route to legacy monolith");
    return proxyTo(req, res, { baseUrl: "http://monolith:5000", targetPath: path });
  } catch (err) {
    logger.error({ err, module, rest }, "api-router-service failed");
    res.status(502).json({ message: "Upstream error", module, path: rest });
  }
}

app.all("/api/:module", handleApiCompat);
app.all("/api/:module/*", handleApiCompat);

const port = Number(process.env.PORT || 7001);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "api-router-service listening (TS)"));
