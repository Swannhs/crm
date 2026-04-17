import { createServiceApp } from "@mymanager/node-service-kit";

const { app, logger } = createServiceApp({
  serviceName: "api-router-service",
  jsonLimit: "50mb",
  urlEncodedLimit: "50mb"
});

function identityOr401(req, res) {
  const orgId = req.header("X-Org-Id") || null;
  const userId = req.header("X-User-Id") || null;
  if (!orgId || !userId) {
    res.status(401).json({ message: "Missing identity context headers." });
    return null;
  }
  return { orgId, userId };
}

function notImplemented(res, { module, path, method, hint }) {
  res.status(501).json({
    message: "API not implemented in microservices yet.",
    module,
    method,
    path,
    hint
  });
}

async function proxyTo(req, res, { baseUrl, targetPath }) {
  const url = new URL(targetPath, baseUrl);

  const headers = new Headers();
  const hopByHop = new Set([
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "host"
  ]);

  for (const [k, v] of Object.entries(req.headers)) {
    if (!k) continue;
    const key = k.toLowerCase();
    if (hopByHop.has(key)) continue;
    // Forward identity context headers (injected by KrakenD) + content-type, etc.
    headers.set(k, Array.isArray(v) ? v.join(",") : String(v));
  }

  const init = {
    method: req.method,
    headers
  };

  if (!["GET", "HEAD"].includes(req.method)) {
    // Prefer raw body passthrough? For now we re-serialize JSON or form bodies.
    if (req.is("application/json")) {
      init.body = JSON.stringify(req.body ?? {});
      headers.set("content-type", "application/json");
    } else if (req.is("application/x-www-form-urlencoded")) {
      init.body = new URLSearchParams(req.body ?? {}).toString();
      headers.set("content-type", "application/x-www-form-urlencoded");
    } else {
      // Unknown body type. Return a clear error until we add raw-body proxy support.
      res.status(415).json({ message: "Unsupported Content-Type for proxy." });
      return;
    }
  }

  const upstream = await fetch(url, init);
  res.status(upstream.status);

  upstream.headers.forEach((value, key) => {
    if (hopByHop.has(key.toLowerCase())) return;
    res.setHeader(key, value);
  });

  const buf = Buffer.from(await upstream.arrayBuffer());
  res.send(buf);
}

// Wildcard API-compat entrypoint.
// KrakenD calls this like: /api/<module>/<rest...>
async function handleApiCompat(req, res) {
  const ident = identityOr401(req, res);
  if (!ident) return;

  const module = req.params.module;
  // Express stores the wildcard match at params[0] for routes like "/api/:module/*".
  const rest = req.params[0] ? `/${req.params[0]}` : "";

  // Route modules we’ve already started migrating.
  // Everything else returns 501 (so clients see “not implemented” rather than 404).
  try {
    // Modules that are owned by other domain services but still in "stub" mode.
    // We forward them 1:1 so those services can implement endpoints incrementally.
    const domainRoutes = {
      // community domain
      "community": "http://community-service:7050",
      "community-group": "http://community-service:7050",
      "community-members": "http://community-service:7050",
      "community-post": "http://community-service:7050",
      "community-livechat": "http://community-service:7050",
      "community-group-livechat": "http://community-service:7050",
      "community-follow": "http://community-service:7050",
      "community-booking": "http://community-service:7050",
      "community-profile": "http://community-service:7050",
      "community-settings": "http://community-service:7050",
      "community-events": "http://community-service:7050",
      "community-badges": "http://community-service:7050",
      "community-activity": "http://community-service:7050",
      "community-points": "http://community-service:7050",

      // commerce domain
      "shopv2": "http://commerce-service:7060",
      "cart": "http://commerce-service:7060",
      "checkout-page": "http://commerce-service:7060",
      "product": "http://commerce-service:7060",
      "product-category": "http://commerce-service:7060",
      "category": "http://commerce-service:7060",
      "coupon": "http://commerce-service:7060",
      "hardware": "http://commerce-service:7060",
      "hardware-quote": "http://commerce-service:7060",
      "modifier-type": "http://commerce-service:7060",
      "modifier-files": "http://commerce-service:7060",
      "label": "http://commerce-service:7060",
      "cash-drawer": "http://commerce-service:7060",

      // documents domain
      "document": "http://documents-service:7070",
      "document-recipient": "http://documents-service:7070",
      "document-signature": "http://documents-service:7070",
      "document-custome-fields": "http://documents-service:7070",
      "file-manager": "http://documents-service:7070",
      "file-manager-activity": "http://documents-service:7070",
      "upload": "http://documents-service:7070",
      "local-storage": "http://documents-service:7070",

      // payments domain
      "payment": "http://payments-service:7080",
      "payment-cards": "http://payments-service:7080",
      "payment-fluidpay": "http://payments-service:7080",
      "payment-paypal": "http://payments-service:7080",
      "payment-valor": "http://payments-service:7080",
      "payment-method-tag": "http://payments-service:7080",
      "fullstack-payment": "http://payments-service:7080",
      "qr-pay-page": "http://payments-service:7080",
      "processing-fee-settings": "http://payments-service:7080"
    };

    if (domainRoutes[module]) {
      const path = `/api/${module}${rest}`;
      return proxyTo(req, res, { baseUrl: domainRoutes[module], targetPath: path });
    }

    if (module === "contact") {
      // Minimal compatibility mapping for the endpoints we already support.
      if (req.method === "GET" && rest === "/get") {
        return proxyTo(req, res, { baseUrl: "http://crm-service:8010", targetPath: "/api/v1/contacts" });
      }
      if (req.method === "POST" && rest === "/add") {
        return proxyTo(req, res, { baseUrl: "http://crm-service:8010", targetPath: "/api/v1/contacts" });
      }
      if (req.method === "GET" && rest.startsWith("/getById/")) {
        const id = rest.split("/").pop();
        return proxyTo(req, res, { baseUrl: "http://crm-service:8010", targetPath: `/api/v1/contacts/${id}` });
      }
      return notImplemented(res, { module, method: req.method, path: rest, hint: "Implemented: GET /get, POST /add, GET /getById/:id" });
    }

    if (module === "invoice") {
      if (req.method === "GET" && (rest === "" || rest === "/")) {
        return proxyTo(req, res, { baseUrl: "http://billing-service:7020", targetPath: "/v1/invoices" });
      }
      if (req.method === "POST" && (rest === "" || rest === "/")) {
        return proxyTo(req, res, { baseUrl: "http://billing-service:7020", targetPath: "/v1/invoices" });
      }
      if (req.method === "GET" && rest.split("/").filter(Boolean).length === 1) {
        const id = rest.replace("/", "");
        return proxyTo(req, res, { baseUrl: "http://billing-service:7020", targetPath: `/v1/invoices/${id}` });
      }
      return notImplemented(res, { module, method: req.method, path: rest, hint: "Implemented: GET /, POST /, GET /:id (stubs for reads)" });
    }

    if (module === "booking") {
      if (req.method === "GET" && rest === "/booking-types") {
        return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/booking-types" });
      }
      if (req.method === "POST" && rest === "/booking-types") {
        return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/booking-types" });
      }
      if (req.method === "GET" && rest === "/booking-types-count") {
        return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/booking-types-count" });
      }
      if (req.method === "GET" && rest.startsWith("/booking-types/")) {
        const link = rest.split("/").pop();
        return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: `/v1/booking-types/${link}` });
      }
      return notImplemented(res, { module, method: req.method, path: rest, hint: "Implemented: booking-types + count (scaffold)" });
    }

    return notImplemented(res, { module, method: req.method, path: rest, hint: "Not migrated yet. Track in migration/TRACKER.md" });
  } catch (err) {
    logger.error({ err, module, rest }, "api-router-service failed");
    res.status(502).json({ message: "Upstream error", module, path: rest });
  }
}

// Handles routes like /api/invoice (no trailing segment).
app.all("/api/:module", handleApiCompat);
// Handles routes like /api/contact/get, /api/contact/getById/:id, etc.
app.all("/api/:module/*", handleApiCompat);

const port = Number(process.env.PORT || 7001);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "api-router-service listening");
});
