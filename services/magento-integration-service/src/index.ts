import { createServiceApp } from "@mymanager/node-service-kit";
import type { Response } from "express";
import { identityMiddleware, type IdentityRequest } from "./middleware/identity.js";
import {
  connectMagento,
  disconnectMagento,
  getMagentoConnection,
  magentoRequest,
  publicConnection,
} from "./lib/magento.js";

const { app, logger } = createServiceApp({
  serviceName: "magento-integration-service",
  jsonLimit: "10mb",
  enableCors: false,
});

const auth = identityMiddleware as any;

function withIdentity(req: any): IdentityRequest {
  return req as IdentityRequest;
}

function parsePageSize(value: unknown, defaultValue = 50) {
  const parsed = Number(value ?? defaultValue);
  if (!Number.isFinite(parsed) || parsed <= 0) return defaultValue;
  return Math.min(parsed, 200);
}

function parseCurrentPage(value: unknown, defaultValue = 1) {
  const parsed = Number(value ?? defaultValue);
  if (!Number.isFinite(parsed) || parsed <= 0) return defaultValue;
  return Math.floor(parsed);
}

function asError(res: Response, error: unknown) {
  const message = error instanceof Error ? error.message : "Internal server error";
  return res.status(500).json({ success: false, message });
}

function requireConnection(req: IdentityRequest, res: Response) {
  const connection = getMagentoConnection(req.identity);
  if (!connection) {
    res.status(400).json({
      success: false,
      message: "Magento is not connected for this identity. Call POST /v1/magento/connect first.",
    });
    return null;
  }
  return connection;
}

app.post("/v1/magento/connect", auth, async (req, res) => {
  try {
    const connection = await connectMagento(withIdentity(req).identity, req.body || {});
    return res.status(201).json({ success: true, data: publicConnection(connection) });
  } catch (error) {
    return asError(res, error);
  }
});

app.get("/v1/magento/connection", auth, async (req, res) => {
  try {
    const connection = getMagentoConnection(withIdentity(req).identity);
    return res.json({ success: true, data: connection ? publicConnection(connection) : null });
  } catch (error) {
    return asError(res, error);
  }
});

app.post("/v1/magento/disconnect", auth, async (req, res) => {
  try {
    const removed = disconnectMagento(withIdentity(req).identity);
    return res.json({ success: true, data: { disconnected: removed } });
  } catch (error) {
    return asError(res, error);
  }
});

app.get("/v1/magento/stores", auth, async (req, res) => {
  try {
    const connection = requireConnection(withIdentity(req), res);
    if (!connection) return;

    const data = await magentoRequest(connection, "GET", "/rest/all/V1/store/storeConfigs");
    return res.json({ success: true, data });
  } catch (error) {
    return asError(res, error);
  }
});

app.get("/v1/magento/products", auth, async (req, res) => {
  try {
    const connection = requireConnection(withIdentity(req), res);
    if (!connection) return;

    const pageSize = parsePageSize(req.query.pageSize);
    const currentPage = parseCurrentPage(req.query.currentPage);
    const search = String(req.query.search || "");

    const query: Record<string, unknown> = {
      "searchCriteria[pageSize]": pageSize,
      "searchCriteria[currentPage]": currentPage,
    };

    if (search) {
      query["searchCriteria[filter_groups][0][filters][0][field]"] = "name";
      query["searchCriteria[filter_groups][0][filters][0][value]"] = `%${search}%`;
      query["searchCriteria[filter_groups][0][filters][0][condition_type]"] = "like";
    }

    const data = await magentoRequest(connection, "GET", `/rest/${connection.storeCode}/V1/products`, query);
    return res.json({ success: true, data });
  } catch (error) {
    return asError(res, error);
  }
});

app.get("/v1/magento/orders", auth, async (req, res) => {
  try {
    const connection = requireConnection(withIdentity(req), res);
    if (!connection) return;

    const pageSize = parsePageSize(req.query.pageSize);
    const currentPage = parseCurrentPage(req.query.currentPage);

    const data = await magentoRequest(connection, "GET", `/rest/${connection.storeCode}/V1/orders`, {
      "searchCriteria[pageSize]": pageSize,
      "searchCriteria[currentPage]": currentPage,
      "searchCriteria[sortOrders][0][field]": "created_at",
      "searchCriteria[sortOrders][0][direction]": "DESC",
    });

    return res.json({ success: true, data });
  } catch (error) {
    return asError(res, error);
  }
});

app.get("/v1/magento/customers", auth, async (req, res) => {
  try {
    const connection = requireConnection(withIdentity(req), res);
    if (!connection) return;

    const pageSize = parsePageSize(req.query.pageSize);
    const currentPage = parseCurrentPage(req.query.currentPage);

    const data = await magentoRequest(connection, "GET", `/rest/${connection.storeCode}/V1/customers/search`, {
      "searchCriteria[pageSize]": pageSize,
      "searchCriteria[currentPage]": currentPage,
    });

    return res.json({ success: true, data });
  } catch (error) {
    return asError(res, error);
  }
});

// Admin/integration use only. Public storefront traffic should hit Magento storefront APIs directly.
app.post("/v1/magento/graphql", auth, async (req, res) => {
  try {
    const connection = requireConnection(withIdentity(req), res);
    if (!connection) return;

    const { query, variables, operationName } = req.body || {};
    if (!query) {
      return res.status(400).json({ success: false, message: "query is required" });
    }

    const data = await magentoRequest(connection, "POST", "/graphql", {}, { query, variables, operationName });
    return res.json({ success: true, data });
  } catch (error) {
    return asError(res, error);
  }
});

// Security note: raw Magento proxy access must remain protected and allowlisted by caller policy.
app.post("/v1/magento/rest", auth, async (req, res) => {
  try {
    const connection = requireConnection(withIdentity(req), res);
    if (!connection) return;

    const method = String(req.body?.method || "GET").toUpperCase();
    const path = String(req.body?.path || "");
    if (!path.startsWith("/")) {
      return res.status(400).json({ success: false, message: "path must start with /" });
    }

    const data = await magentoRequest(connection, method, path, req.body?.query || {}, req.body?.body);
    return res.json({ success: true, data });
  } catch (error) {
    return asError(res, error);
  }
});

app.post("/v1/magento/sync/customers", auth, async (req, res) => {
  return res.status(410).json({
    success: false,
    message:
      "Deprecated endpoint. Use odoo-integration-service /v1/odoo/sync/magento/customers (via /api/odoo/sync/magento/customers).",
  });
});

app.post("/v1/magento/sync/orders", auth, async (req, res) => {
  return res.status(410).json({
    success: false,
    message:
      "Deprecated endpoint. Use odoo-integration-service /v1/odoo/sync/magento/orders (via /api/odoo/sync/magento/orders).",
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "magento-integration-service" });
});

const port = Number(process.env.PORT || 7190);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "magento-integration-service listening"));
