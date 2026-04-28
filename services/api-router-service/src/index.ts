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

type CompatEmployeeRow = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  totalShifts: number;
  displaySummary: string;
  categories: Array<{ _id: string; name: string }>;
};

function toCompatEmployeeRow(raw: any): CompatEmployeeRow {
  const id = String(raw?.uuid ?? raw?.id ?? "");
  const contactTypes = Array.isArray(raw?.contactType)
    ? raw.contactType
    : (raw?.contactType ? [raw.contactType] : []);

  return {
    _id: id,
    fullName: String(raw?.fullName ?? raw?.name ?? "Unnamed employee"),
    email: String(raw?.email ?? ""),
    phone: String(raw?.phone ?? ""),
    totalShifts: 0,
    displaySummary: "0 shifts",
    categories: contactTypes.map((name: string, idx: number) => ({
      _id: `${id}-cat-${idx}`,
      name: String(name),
    })),
  };
}

async function getCompatEmployeesFromOdoo(req: Request): Promise<CompatEmployeeRow[]> {
  const headers = {
    Authorization: req.header("Authorization") ?? "",
    "X-Org-Id": req.header("X-Org-Id") ?? "",
    "X-User-Id": req.header("X-User-Id") ?? "",
  };

  let page = 1;
  let totalPages = 1;
  const rows: any[] = [];

  do {
    const query = new URLSearchParams({
      page: String(page),
      pageSize: "200",
      type: "employee",
      search: String(req.query.search ?? ""),
    });

    const upstream = await fetch(`http://odoo-integration-service:7200/v1/odoo/contacts?${query.toString()}`, {
      method: "GET",
      headers,
    });

    if (!upstream.ok) {
      throw new Error(`Odoo contacts compat failed with status ${upstream.status}`);
    }

    const payload = await upstream.json();
    const batch = Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload)
        ? payload
        : [];

    rows.push(...batch);
    totalPages = Number(payload?.totalPages ?? 1);
    page += 1;
  } while (page <= totalPages);

  return rows.map(toCompatEmployeeRow);
}

function getForwardHeaders(req: Request) {
  return {
    Authorization: req.header("Authorization") ?? "",
    "X-Org-Id": req.header("X-Org-Id") ?? "",
    "X-User-Id": req.header("X-User-Id") ?? "",
  };
}

async function fetchUpstreamJson(req: Request, url: string) {
  const upstream = await fetch(url, {
    method: "GET",
    headers: getForwardHeaders(req),
  });

  if (!upstream.ok) {
    throw new Error(`Upstream failed (${upstream.status}) for ${url}`);
  }

  return upstream.json();
}

async function fetchUpstreamJsonSafe(req: Request, url: string) {
  try {
    const data = await fetchUpstreamJson(req, url);
    return { ok: true as const, data, error: null as string | null };
  } catch (error: any) {
    return { ok: false as const, data: null, error: String(error?.message ?? "Unknown upstream error") };
  }
}

async function odooWriteInvoice(req: Request, invoiceId: number, payload: Record<string, unknown>) {
  const upstream = await fetch(`http://odoo-integration-service:7200/v1/odoo/invoices/${invoiceId}`, {
    method: "PUT",
    headers: {
      ...getForwardHeaders(req),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!upstream.ok) {
    const body = await upstream.text();
    throw new Error(`Odoo invoice update failed (${upstream.status}): ${body}`);
  }

  return upstream.json();
}

async function fetchAllOdooInvoicesForGraph(req: Request, opts?: { months?: number; maxPages?: number }) {
  const months = Math.max(1, Math.min(24, Number(opts?.months ?? 6)));
  const maxPages = Math.max(1, Math.min(50, Number(opts?.maxPages ?? 20)));
  const pageSize = 200;
  const rows: any[] = [];

  for (let page = 1; page <= maxPages; page += 1) {
    const query = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
    });
    const upstream = await fetchUpstreamJsonSafe(req, `http://odoo-integration-service:7200/v1/odoo/invoices?${query.toString()}`);
    if (!upstream.ok) break;

    const batch = Array.isArray(upstream.data?.data) ? upstream.data.data : [];
    rows.push(...batch);
    if (batch.length < pageSize) break;
  }

  const startDate = new Date();
  startDate.setDate(1);
  startDate.setMonth(startDate.getMonth() - (months - 1));
  const startTime = startDate.getTime();

  return rows.filter((inv) => {
    const rawDate = inv?.invoice_date || inv?.create_date || inv?.invoice_date_due;
    if (!rawDate) return false;
    const d = new Date(rawDate);
    if (Number.isNaN(d.getTime())) return false;
    return d.getTime() >= startTime;
  });
}

async function fetchMagentoOrders(req: Request, query: URLSearchParams = new URLSearchParams()) {
  const base = new URL("http://magento-inegration-service:7210/api/v1/magento/orders");
  query.forEach((value, key) => base.searchParams.set(key, value));
  return fetchUpstreamJsonSafe(req, base.toString());
}

function toNum(value: unknown): number {
  const n = Number(value ?? 0);
  return Number.isFinite(n) ? n : 0;
}

function invoiceTotals(invoices: any[]) {
  const totalInvoiced = invoices.reduce((sum, inv) => sum + toNum(inv?.amount_total), 0);
  const totalOutstanding = invoices.reduce((sum, inv) => sum + toNum(inv?.amount_residual), 0);
  const totalPaid = Math.max(0, totalInvoiced - totalOutstanding);
  return { totalInvoiced, totalOutstanding, totalPaid };
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

    if (module === "employee-schedule" && req.method === "GET") {
      if (rest === "/get-contacts-with-categories-and-shifts" || rest === "/get-employee-category-schedule-data") {
        const data = await getCompatEmployeesFromOdoo(req);
        return res.json({ data, total: data.length });
      }

      if (rest === "/get-all") {
        return res.json({ data: [], total: 0 });
      }
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

    if (module === "odoo") {
      const targetPath = withQuery(req, `/v1/odoo${rest}`);
      return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath });
    }

    if (module === "image-library") {
      if (req.method === "GET" && (rest === "" || rest === "/")) {
        return proxyTo(req, res, {
          baseUrl: "http://integrations-service:7140",
          targetPath: withQuery(req, "/v1/image-library"),
        });
      }

      if (req.method === "POST" && (rest === "" || rest === "/")) {
        return proxyTo(req, res, {
          baseUrl: "http://integrations-service:7140",
          targetPath: "/v1/image-library",
        });
      }

      if (req.method === "DELETE" && /^\/[^/]+$/.test(rest)) {
        const id = rest.slice(1);
        return proxyTo(req, res, {
          baseUrl: "http://integrations-service:7140",
          targetPath: `/v1/image-library/${id}`,
        });
      }
    }

    if (module === "billing") {
      if (req.method === "GET" && rest === "/graph") {
        const months = Math.max(1, Math.min(24, Number(req.query.months ?? 6)));
        const invoices = await fetchAllOdooInvoicesForGraph(req, { months, maxPages: 20 });

        const monthKeys: string[] = [];
        const cursor = new Date();
        cursor.setDate(1);
        for (let i = months - 1; i >= 0; i -= 1) {
          const d = new Date(cursor.getFullYear(), cursor.getMonth() - i, 1);
          monthKeys.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
        }

        const points = monthKeys.map((key) => {
          const items = invoices.filter((inv: any) => {
            const rawDate = inv?.invoice_date || inv?.create_date || inv?.invoice_date_due;
            if (!rawDate) return false;
            const d = new Date(rawDate);
            if (Number.isNaN(d.getTime())) return false;
            const invKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
            return invKey === key;
          });

          const invoiced = items.reduce((sum: number, inv: any) => sum + toNum(inv?.amount_total), 0);
          const outstanding = items.reduce((sum: number, inv: any) => sum + toNum(inv?.amount_residual), 0);
          const paid = Math.max(0, invoiced - outstanding);
          return { key, invoiced, paid, outstanding, count: items.length };
        });

        return res.json({
          data: {
            categories: monthKeys,
            series: [
              { name: "Invoiced", data: points.map((p) => p.invoiced) },
              { name: "Paid", data: points.map((p) => p.paid) },
              { name: "Outstanding", data: points.map((p) => p.outstanding) },
            ],
            monthly: points,
            months,
          },
        });
      }

      if (req.method === "GET" && rest === "/summary") {
        const query = new URLSearchParams({
          page: "1",
          pageSize: String(req.query.pageSize ?? 200),
          ...(req.query.search ? { search: String(req.query.search) } : {}),
          ...(req.query.contactId ? { contactId: String(req.query.contactId) } : {}),
        });

        const [odooInvoicesRes, magentoOrdersRes] = await Promise.all([
          fetchUpstreamJsonSafe(req, `http://odoo-integration-service:7200/v1/odoo/invoices?${query.toString()}`),
          fetchMagentoOrders(req, new URLSearchParams({ pageSize: "100", currentPage: "1" })),
        ]);

        const invoices = Array.isArray(odooInvoicesRes.data?.data) ? odooInvoicesRes.data.data : [];
        const magentoOrders = Array.isArray(magentoOrdersRes.data?.data?.items) ? magentoOrdersRes.data.data.items : [];
        const { totalInvoiced, totalOutstanding, totalPaid } = invoiceTotals(invoices);
        const overdueCount = invoices.filter((inv: any) => {
          const dueDate = String(inv?.invoice_date_due ?? "");
          if (!dueDate) return false;
          const outstanding = toNum(inv?.amount_residual);
          return outstanding > 0 && new Date(dueDate).getTime() < Date.now();
        }).length;

        return res.json({
          data: {
            totalInvoiced,
            totalPaid,
            totalOutstanding,
            overdueCount,
            invoiceCount: invoices.length,
            magentoOrderCount: magentoOrders.length,
            magentoRevenue: magentoOrders.reduce((sum: number, order: any) => sum + toNum(order?.grand_total), 0),
          },
          meta: {
            upstream: {
              odoo: { ok: odooInvoicesRes.ok, error: odooInvoicesRes.error },
              magento: { ok: magentoOrdersRes.ok, error: magentoOrdersRes.error },
            },
          },
        });
      }

      if (req.method === "GET" && rest === "/invoices") {
        return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath: withQuery(req, "/v1/odoo/invoices") });
      }

      if (req.method === "POST" && rest === "/invoices") {
        return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath: "/v1/odoo/invoices" });
      }

      if (req.method === "GET" && /^\/invoices\/\d+$/.test(rest)) {
        const id = rest.split("/")[2];
        return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath: `/v1/odoo/invoices/${id}` });
      }

      if (req.method === "PUT" && /^\/invoices\/\d+$/.test(rest)) {
        const id = rest.split("/")[2];
        return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath: `/v1/odoo/invoices/${id}` });
      }

      if (req.method === "DELETE" && /^\/invoices\/\d+$/.test(rest)) {
        const id = rest.split("/")[2];
        return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath: `/v1/odoo/invoices/${id}` });
      }

      if (req.method === "POST" && /^\/invoices\/\d+\/post$/.test(rest)) {
        const id = rest.split("/")[2];
        return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath: `/v1/odoo/invoices/${id}/post` });
      }

      if (req.method === "GET" && /^\/invoices\/\d+\/download$/.test(rest)) {
        const id = rest.split("/")[2];
        return proxyTo(req, res, { baseUrl: "http://odoo-integration-service:7200", targetPath: `/v1/odoo/invoices/${id}/download` });
      }

      if (req.method === "GET" && rest === "/magento/orders") {
        const query = new URLSearchParams(req.query as Record<string, string>);
        const result = await fetchMagentoOrders(req, query);
        return res.status(result.ok ? 200 : 502).json(result.ok ? result.data : { message: result.error });
      }

      if (req.method === "GET" && /^\/magento\/orders\/[^/]+$/.test(rest)) {
        const id = rest.split("/")[3];
        return proxyTo(req, res, {
          baseUrl: "http://magento-inegration-service:7210",
          targetPath: `/api/v1/magento/rest/V1/orders/${id}`,
        });
      }

      if (req.method === "GET" && /^\/magento\/customers\/[^/]+\/orders$/.test(rest)) {
        const customerId = rest.split("/")[3];
        const query = new URLSearchParams({
          "searchCriteria[pageSize]": String(req.query.pageSize ?? 50),
          "searchCriteria[currentPage]": String(req.query.currentPage ?? 1),
          "searchCriteria[filter_groups][0][filters][0][field]": "customer_id",
          "searchCriteria[filter_groups][0][filters][0][value]": customerId,
          "searchCriteria[filter_groups][0][filters][0][condition_type]": "eq",
        });
        return proxyTo(req, res, {
          baseUrl: "http://magento-inegration-service:7210",
          targetPath: `/api/v1/magento/rest/default/V1/orders?${query.toString()}`,
        });
      }

      if (req.method === "GET" && rest === "/reconciliation") {
        const [odooInvoicesRes, magentoOrdersRes] = await Promise.all([
          fetchUpstreamJsonSafe(req, "http://odoo-integration-service:7200/v1/odoo/invoices?page=1&pageSize=200"),
          fetchMagentoOrders(req, new URLSearchParams({ pageSize: "200", currentPage: "1" })),
        ]);
        const invoices = Array.isArray(odooInvoicesRes.data?.data) ? odooInvoicesRes.data.data : [];
        const magentoOrders = Array.isArray(magentoOrdersRes.data?.data?.items) ? magentoOrdersRes.data.data.items : [];
        const magentoByRef = new Map(magentoOrders.map((o: any) => [String(o?.increment_id ?? o?.entity_id ?? ""), o]));

        const rows = invoices.map((invoice: any) => {
          const invoiceRef = String(invoice?.invoice_origin ?? invoice?.ref ?? "");
          const order = invoiceRef ? magentoByRef.get(invoiceRef) : undefined;
          return {
            invoiceId: invoice?.id,
            invoiceNumber: invoice?.name,
            invoiceTotal: toNum(invoice?.amount_total),
            residual: toNum(invoice?.amount_residual),
            invoiceStatus: invoice?.state,
            paymentStatus: invoice?.payment_state,
            magentoOrderRef: invoiceRef || null,
            magentoOrderId: order?.entity_id ?? null,
            magentoGrandTotal: toNum(order?.grand_total ?? 0),
            matched: Boolean(order),
          };
        });

        return res.json({
          data: rows,
          meta: {
            matched: rows.filter((r: any) => r.matched).length,
            unmatched: rows.filter((r: any) => !r.matched).length,
          },
        });
      }

      if (req.method === "POST" && rest === "/reconciliation/link") {
        const invoiceIdRaw = req.body?.invoiceId;
        const magentoOrderRefRaw = req.body?.magentoOrderRef;
        const invoiceId = Number(invoiceIdRaw);
        const magentoOrderRef = String(magentoOrderRefRaw ?? "").trim();

        if (!Number.isFinite(invoiceId) || invoiceId <= 0) {
          return res.status(400).json({ message: "invoiceId is required and must be a positive number." });
        }
        if (!magentoOrderRef) {
          return res.status(400).json({ message: "magentoOrderRef is required." });
        }

        // Persist reconciliation marker directly on the Odoo invoice.
        // `invoice_origin` is commonly used to keep source document reference.
        const result = await odooWriteInvoice(req, invoiceId, {
          invoice_origin: magentoOrderRef,
          ref: `Magento ${magentoOrderRef}`,
        });

        return res.status(200).json({
          applied: true,
          invoiceId,
          magentoOrderRef,
          result,
        });
      }

      if (req.method === "POST" && rest === "/reconciliation/unlink") {
        const invoiceIdRaw = req.body?.invoiceId;
        const invoiceId = Number(invoiceIdRaw);

        if (!Number.isFinite(invoiceId) || invoiceId <= 0) {
          return res.status(400).json({ message: "invoiceId is required and must be a positive number." });
        }

        // Clear only the reconciliation reference fields.
        const result = await odooWriteInvoice(req, invoiceId, {
          invoice_origin: false,
          ref: false,
        });

        return res.status(200).json({
          applied: true,
          invoiceId,
          result,
        });
      }

      return notImplemented(res, {
        module,
        method: req.method,
        path: rest,
        hint: "Implemented: invoices CRUD/post/download, summary, magento orders, reconciliation",
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
      if (req.method === "GET" && rest === "/appointments") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/appointments" });
      if (req.method === "POST" && rest === "/appointments") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/appointments" });
      if (req.method === "POST" && rest === "/appointments/user") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: "/v1/appointments/public" });
      if (req.method === "GET" && rest === "/available-slots") return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: `/v1/appointments/available-slots?${new URLSearchParams(req.query as any).toString()}` });
      if (req.method === "DELETE" && rest.startsWith("/appointments/")) {
        const id = rest.split("/").pop();
        return proxyTo(req, res, { baseUrl: "http://booking-service:7040", targetPath: `/v1/appointments/${id}` });
      }
      return notImplemented(res, { module, method: req.method, path: rest, hint: "booking-types & appointments" });
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

    if (module === "sales-dashboard") {
      const magentoOrdersUrl = "http://magento-inegration-service:7210/api/v1/magento/orders?pageSize=100&currentPage=1";
      const odooOrdersUrl = "http://odoo-integration-service:7200/v1/odoo/sales/orders?pageSize=100&page=1";
      const odooCrmUrl = "http://odoo-integration-service:7200/v1/odoo/crm?pageSize=100&page=1";

      if (req.method === "GET" && rest === "/summary") {
        const [magentoRes, odooRes, crmRes] = await Promise.all([
          fetchUpstreamJsonSafe(req, magentoOrdersUrl),
          fetchUpstreamJsonSafe(req, odooOrdersUrl),
          fetchUpstreamJsonSafe(req, odooCrmUrl),
        ]);

        const magentoItems = Array.isArray(magentoRes.data?.data?.items) ? magentoRes.data.data.items : [];
        const odooItems = Array.isArray(odooRes.data?.data) ? odooRes.data.data : [];
        const crmItems = Array.isArray(crmRes.data?.data) ? crmRes.data.data : [];

        const magentoRevenue = magentoItems.reduce((sum: number, order: any) => sum + Number(order?.grand_total ?? 0), 0);
        const odooRevenue = odooItems.reduce((sum: number, order: any) => sum + Number(order?.amount_total ?? 0), 0);

        const totalOrders = magentoItems.length + odooItems.length;
        const totalRevenue = magentoRevenue + odooRevenue;
        const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
        const hotLeads = crmItems.filter((lead: any) => Number(lead?.probability ?? 0) >= 70).length;
        const opportunities = crmItems.length;

        return res.json({
          data: {
            totalOrders,
            totalRevenue,
            avgOrderValue,
            hotLeads,
            opportunities,
            sources: {
              magentoOrders: magentoItems.length,
              odooOrders: odooItems.length,
            },
            upstream: {
              magento: { ok: magentoRes.ok, error: magentoRes.error },
              odooSales: { ok: odooRes.ok, error: odooRes.error },
              odooCrm: { ok: crmRes.ok, error: crmRes.error },
            },
          },
        });
      }

      if (req.method === "GET" && rest === "/orders") {
        const [magentoRes, odooRes] = await Promise.all([
          fetchUpstreamJsonSafe(req, magentoOrdersUrl),
          fetchUpstreamJsonSafe(req, odooOrdersUrl),
        ]);

        const magentoItems = Array.isArray(magentoRes.data?.data?.items) ? magentoRes.data.data.items : [];
        const odooItems = Array.isArray(odooRes.data?.data) ? odooRes.data.data : [];

        const normalizedMagento = magentoItems.map((order: any) => ({
          id: String(order?.entity_id ?? order?.increment_id ?? ""),
          ref: String(order?.increment_id ?? order?.entity_id ?? ""),
          customer: String(order?.customer_firstname && order?.customer_lastname
            ? `${order.customer_firstname} ${order.customer_lastname}`
            : order?.customer_email ?? "Magento Customer"),
          amount: Number(order?.grand_total ?? 0),
          status: String(order?.status ?? "unknown"),
          date: String(order?.created_at ?? ""),
          source: "magento",
        }));

        const normalizedOdoo = odooItems.map((order: any) => ({
          id: String(order?.id ?? ""),
          ref: String(order?.name ?? order?.id ?? ""),
          customer: String(Array.isArray(order?.partner_id) ? order.partner_id[1] : "Odoo Customer"),
          amount: Number(order?.amount_total ?? 0),
          status: String(order?.state ?? "unknown"),
          date: String(order?.date_order ?? ""),
          source: "odoo",
        }));

        const rows = [...normalizedMagento, ...normalizedOdoo]
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return res.json({
          data: rows,
          meta: {
            upstream: {
              magento: { ok: magentoRes.ok, error: magentoRes.error },
              odooSales: { ok: odooRes.ok, error: odooRes.error },
            },
          },
        });
      }

      if (req.method === "GET" && rest === "/leads") {
        const crmRes = await fetchUpstreamJsonSafe(req, odooCrmUrl);
        const crmItems = Array.isArray(crmRes.data?.data) ? crmRes.data.data : [];
        const rows = crmItems.map((lead: any) => ({
          id: String(lead?.id ?? ""),
          name: String(lead?.name ?? "Unnamed lead"),
          stage: String(Array.isArray(lead?.stage_id) ? lead.stage_id[1] : "Unstaged"),
          priority: Number(lead?.probability ?? 0) >= 70 ? "high" : "normal",
          expectedRevenue: Number(lead?.expected_revenue ?? lead?.planned_revenue ?? 0),
          type: String(lead?.type ?? "opportunity"),
          email: String(lead?.email_from ?? ""),
          phone: String(lead?.phone ?? ""),
        }));
        return res.json({
          data: rows,
          meta: {
            upstream: {
              odooCrm: { ok: crmRes.ok, error: crmRes.error },
            },
          },
        });
      }

      return notImplemented(res, {
        module,
        method: req.method,
        path: rest,
        hint: "Implemented: GET /summary, GET /orders, GET /leads",
      });
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
