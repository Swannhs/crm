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

const MOCK_PRODUCTS = [
  {
    id: 1001,
    sku: "MM-CUP-12OZ",
    name: "MyManager Branded Cup 12oz",
    price: 12.99,
    status: 1,
    custom_attributes: [{ attribute_code: "description", value: "Reusable insulated cup for daily office use." }],
  },
  {
    id: 1002,
    sku: "MM-NOTE-A5",
    name: "A5 Workflow Notebook",
    price: 9.5,
    status: 1,
    custom_attributes: [{ attribute_code: "description", value: "Premium notebook for meeting notes and sprint planning." }],
  },
  {
    id: 1003,
    sku: "MM-HOODIE-BLK",
    name: "Team Hoodie (Black)",
    price: 49.0,
    status: 1,
    custom_attributes: [{ attribute_code: "description", value: "Soft fleece hoodie with embroidered MyManager logo." }],
  },
  {
    id: 1004,
    sku: "MM-STICKER-PACK",
    name: "Sticker Pack Vol. 1",
    price: 4.99,
    status: 1,
    custom_attributes: [{ attribute_code: "description", value: "Set of 12 matte stickers for laptops and notebooks." }],
  },
];

const MOCK_ORDERS = [
  {
    entity_id: 91001,
    increment_id: "000091001",
    base_grand_total: 58.49,
    status: "processing",
    state: "processing",
    created_at: "2026-04-24T14:22:00Z",
    customer_firstname: "Olivia",
    customer_lastname: "Bennett",
    customer_email: "olivia.bennett@example.com",
    billing_address: { telephone: "+1-555-0101" },
    items: [
      { item_id: 1, name: "Team Hoodie (Black)", qty_ordered: 1, price: 49.0 },
      { item_id: 2, name: "Sticker Pack Vol. 1", qty_ordered: 1, price: 4.99 },
    ],
  },
  {
    entity_id: 91002,
    increment_id: "000091002",
    base_grand_total: 25.98,
    status: "complete",
    state: "complete",
    created_at: "2026-04-23T10:05:00Z",
    customer_firstname: "Marcus",
    customer_lastname: "Lee",
    customer_email: "marcus.lee@example.com",
    billing_address: { telephone: "+1-555-0102" },
    items: [{ item_id: 3, name: "MyManager Branded Cup 12oz", qty_ordered: 2, price: 12.99 }],
  },
  {
    entity_id: 91003,
    increment_id: "000091003",
    base_grand_total: 19.0,
    status: "pending_payment",
    state: "new",
    created_at: "2026-04-22T18:44:00Z",
    customer_firstname: "Nina",
    customer_lastname: "Patel",
    customer_email: "nina.patel@example.com",
    billing_address: { telephone: "+1-555-0103" },
    items: [{ item_id: 4, name: "A5 Workflow Notebook", qty_ordered: 2, price: 9.5 }],
  },
];

const MOCK_CUSTOMERS = [
  { id: 7001, firstname: "Olivia", lastname: "Bennett", email: "olivia.bennett@example.com" },
  { id: 7002, firstname: "Marcus", lastname: "Lee", email: "marcus.lee@example.com" },
  { id: 7003, firstname: "Nina", lastname: "Patel", email: "nina.patel@example.com" },
];

function mockCategoriesRoot() {
  return {
    id: 2,
    name: "Default Category",
    children_data: [
      { id: 11, name: "Office Essentials", is_active: true },
      { id: 12, name: "Apparel", is_active: true },
      { id: 13, name: "Accessories", is_active: true },
    ],
  };
}

function paginate<T>(items: T[], pageSize: number, currentPage: number) {
  const start = (currentPage - 1) * pageSize;
  const pagedItems = items.slice(start, start + pageSize);
  return {
    items: pagedItems,
    total_count: items.length,
    search_criteria: {
      page_size: pageSize,
      current_page: currentPage,
    },
  };
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
    const connection = await getMagentoConnection(withIdentity(req).identity);
    return res.json({ success: true, data: connection ? publicConnection(connection) : null });
  } catch (error) {
    return asError(res, error);
  }
});

app.post("/v1/magento/disconnect", auth, async (req, res) => {
  try {
    const removed = await disconnectMagento(withIdentity(req).identity);
    return res.json({ success: true, data: { disconnected: removed } });
  } catch (error) {
    return asError(res, error);
  }
});

app.get("/v1/magento/stores", auth, async (req, res) => {
  try {
    const connection = await getMagentoConnection(withIdentity(req).identity);
    if (!connection) {
      return res.json({ success: true, data: [], meta: { connected: false } });
    }

    const data = await magentoRequest(connection, "GET", "/rest/all/V1/store/storeConfigs");
    return res.json({ success: true, data });
  } catch (error) {
    return asError(res, error);
  }
});

app.get("/v1/magento/products", auth, async (req, res) => {
  try {
    const pageSize = parsePageSize(req.query.pageSize);
    const currentPage = parseCurrentPage(req.query.currentPage);
    const search = String(req.query.search || "").trim().toLowerCase();

    const connection = await getMagentoConnection(withIdentity(req).identity);
    if (!connection) {
      const filtered = search
        ? MOCK_PRODUCTS.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.sku.toLowerCase().includes(search) ||
              String(item.id).includes(search)
          )
        : MOCK_PRODUCTS;
      return res.json({
        success: true,
        data: paginate(filtered, pageSize, currentPage),
        meta: { connected: false },
      });
    }

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
    const pageSize = parsePageSize(req.query.pageSize);
    const currentPage = parseCurrentPage(req.query.currentPage);

    const connection = await getMagentoConnection(withIdentity(req).identity);
    if (!connection) {
      return res.json({
        success: true,
        data: paginate(MOCK_ORDERS, pageSize, currentPage),
        meta: { connected: false },
      });
    }

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
    const pageSize = parsePageSize(req.query.pageSize);
    const currentPage = parseCurrentPage(req.query.currentPage);

    const connection = await getMagentoConnection(withIdentity(req).identity);
    if (!connection) {
      return res.json({
        success: true,
        data: paginate(MOCK_CUSTOMERS, pageSize, currentPage),
        meta: { connected: false },
      });
    }

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
    const connection = await getMagentoConnection(withIdentity(req).identity);
    if (!connection) {
      return res.json({
        success: true,
        data: null,
        meta: { connected: false },
      });
    }

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
    const connection = await getMagentoConnection(withIdentity(req).identity);

    const method = String(req.body?.method || "GET").toUpperCase();
    const path = String(req.body?.path || "");
    if (!path.startsWith("/")) {
      return res.status(400).json({ success: false, message: "path must start with /" });
    }

    if (!connection) {
      if (path.includes("/categories")) {
        return res.json({
          success: true,
          data: mockCategoriesRoot(),
          meta: { connected: false },
        });
      }
      if (path.includes("/products")) {
        return res.json({
          success: true,
          data: paginate(MOCK_PRODUCTS, 50, 1),
          meta: { connected: false },
        });
      }
      if (path.includes("/orders")) {
        return res.json({
          success: true,
          data: paginate(MOCK_ORDERS, 50, 1),
          meta: { connected: false },
        });
      }
      return res.json({
        success: true,
        data: {},
        meta: { connected: false },
      });
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
