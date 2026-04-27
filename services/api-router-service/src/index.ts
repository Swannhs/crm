import { createServiceApp } from "@mymanager/node-service-kit";

const { app, logger } = createServiceApp({
  serviceName: "api-router-service",
  jsonLimit: "50mb",
  urlEncodedLimit: "50mb",
  enableCors: false
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

function withQuery(req: Request, targetPath: string) {
  const query = new URLSearchParams(req.query as Record<string, string>).toString();
  return query ? `${targetPath}?${query}` : targetPath;
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
  "document": "http://documents-service:7080",
  "documents": "http://documents-service:7080",
  "document-recipient": "http://documents-service:7080",
  "document-signature": "http://documents-service:7080",
  "upload": "http://documents-service:7080",
  "payment": "http://payments-service:7090",
  "payments": "http://payments-service:7090",
  "payment-cards": "http://payments-service:7090",
  "deposit": "http://payments-service:7090",
  "employee": "http://employees-service:7070",
  "employees": "http://employees-service:7070",
  "employee-schedule": "http://employees-service:7070",
  "employee-timeoff-request": "http://employees-service:7070",
  "employee-attendance": "http://employees-service:7070"
};

const deprecatedCommerceModules = new Set([
  "shopv2",
  "cart",
  "product",
  "product-category",
  "category",
  "coupon",
]);

async function handleApiCompat(req: Request, res: Response) {
  const module = req.params.module;
  const rest = req.params[0] ? `/${req.params[0]}` : "";

  if (module === "public" && req.method === "GET" && rest === "/help-center/articles") {
    return res.json({ data: [], total: 0 });
  }

  if (module === "auth") {
    if (req.method === "POST" && rest === "/sign-in") {
      try {
        const { email, password } = req.body;
        const keycloakUrl = "http://keycloak:8080/realms/mymanager/protocol/openid-connect/token";
        const body = new URLSearchParams({
          grant_type: "password",
          client_id: "mymanager-web",
          username: email,
          password: password,
          scope: "openid profile email"
        });

        const response = await fetch(keycloakUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString()
        });

        if (!response.ok) {
          const errorData = await response.json();
          return res.status(response.status).json(errorData);
        }

        const data = await response.json();
        return res.json({
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          expiresIn: data.expires_in
        });
      } catch (err) {
        logger.error({ err }, "Auth sign-in failed");
        return res.status(500).json({ message: "Internal Auth Error" });
      }
    }

    if (req.method === "GET" && rest === "/me") {
       const ident = identityOr401(req, res);
       if (!ident) return;
       return res.json({ 
         user: { 
           id: ident.userId, 
           email: "owner@example.com", // Fallback or extract from token
           role: "admin" 
         } 
       });
    }
  }

  const ident = identityOr401(req, res);
  if (!ident) return;

  try {
    if (module === "form-builder" && req.method === "GET" && (rest === "/forms" || rest === "/templates")) {
      return res.json({ data: [] });
    }

    if (module === "webbuilder" && req.method === "GET" && (rest === "" || rest === "/")) {
      return res.json({ data: [] });
    }

    if (module === "reputation" && req.method === "GET" && rest === "/dashboard-stats") {
      return res.json({
        data: {
          reviews: 0,
          averageRating: 0,
          responseRate: 0,
          mentions: 0,
        },
      });
    }

    if (deprecatedCommerceModules.has(module)) {
      return res.status(410).json({
        message: "Deprecated commerce compatibility module.",
        module,
        canonical: "/api/magento/* (CRM/admin integration)",
        storefront: "Use Magento storefront/GraphQL APIs for public commerce flows.",
      });
    }

    if (domainRoutes[module]) {
      return proxyTo(req, res, { baseUrl: domainRoutes[module], targetPath: `/api/${module}${rest}` });
    }

    if (module === "contact") {
      return res.status(410).json({
        message: "Deprecated CRM compatibility module.",
        module,
        canonical: "/api/odoo/contacts",
      });
    }

    if (module === "invoice") {
      return res.status(410).json({
        message: "Deprecated billing compatibility module.",
        module,
        canonical: "/api/odoo/invoices",
      });
    }

    if (module === "booking") {
      if (req.method === "GET" && rest === "/booking-types") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/booking-types" });
      if (req.method === "POST" && rest === "/booking-types") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/booking-types" });
      return notImplemented(res, { module, method: req.method, path: rest, hint: "booking-types (scaffold)" });
    }

    if (module === "scoring") {
      if (req.method === "GET" && (rest === "/models" || rest === "/hot-leads")) {
        const query = new URLSearchParams(req.query as Record<string, string>).toString();
        const targetPath = rest === "/models"
          ? "/api/v1/scoring/models"
          : `/api/v1/scoring/leads/hot${query ? `?${query}` : ""}`;
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath });
      }

      if (req.method === "POST" && rest === "/models") {
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath: "/api/v1/scoring/models" });
      }

      if (req.method === "POST" && rest === "/calculate") {
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath: "/api/v1/scoring/calculate" });
      }

      if (req.method === "POST" && rest === "/sync") {
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath: "/api/v1/scoring/sync" });
      }

      if (req.method === "POST" && rest.startsWith("/sync/contacts/")) {
        const contactId = rest.split("/").pop();
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath: `/api/v1/scoring/sync/contacts/${contactId}` });
      }

      if (req.method === "GET" && rest.startsWith("/contacts/") && rest.endsWith("/score")) {
        const contactId = rest.split("/")[2];
        const query = new URLSearchParams(req.query as Record<string, string>).toString();
        const targetPath = query
          ? `/api/v1/scoring/contacts/${contactId}/score?${query}`
          : `/api/v1/scoring/contacts/${contactId}/score`;
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath });
      }

      return notImplemented(res, {
        module,
        method: req.method,
        path: rest,
        hint: "Implemented: GET /models, POST /models, POST /calculate, POST /sync, POST /sync/contacts/:contactId, GET /contacts/:contactId/score, GET /hot-leads"
      });
    }

    if (module === "business") {
      return res.status(410).json({
        message: "Deprecated business-report compatibility module.",
        module,
        canonical: "/api/odoo/invoices (derive reporting from Odoo data)",
      });
    }

    if (module === "lead") {
      if (req.method === "GET" && rest === "/hot") {
        const query = new URLSearchParams(req.query as Record<string, string>).toString();
        const targetPath = query
          ? `/api/v1/scoring/leads/hot?${query}`
          : "/api/v1/scoring/leads/hot";
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath });
      }

      if (req.method === "GET" && rest.startsWith("/score/")) {
        const contactId = rest.split("/").pop();
        const query = new URLSearchParams(req.query as Record<string, string>).toString();
        const targetPath = query
          ? `/api/v1/scoring/contacts/${contactId}/score?${query}`
          : `/api/v1/scoring/contacts/${contactId}/score`;
        return proxyTo(req, res, { baseUrl: "http://scoring-service:7180", targetPath });
      }

      return notImplemented(res, {
        module,
        method: req.method,
        path: rest,
        hint: "Implemented: GET /hot, GET /score/:contactId"
      });
    }

    if (module === "finance-category") {
      return proxyTo(req, res, { baseUrl: "http://finance-service:7170", targetPath: withQuery(req, `/api/finance-category${rest}`) });
    }

    if (module === "finance-dashboard") {
      return proxyTo(req, res, { baseUrl: "http://finance-service:7170", targetPath: withQuery(req, `/api/finance-dashboard${rest}`) });
    }

    if (module === "finance-kanban") {
      return proxyTo(req, res, { baseUrl: "http://finance-service:7170", targetPath: withQuery(req, `/api/finance-kanban${rest}`) });
    }

    if (module === "super-admin-finance") {
      return proxyTo(req, res, { baseUrl: "http://finance-service:7170", targetPath: withQuery(req, `/api/super-admin-finance${rest}`) });
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
