import { Router } from 'express';
import type { Request, Response } from 'express';
import { createRoleContextMiddleware, requireOrgRoles } from '@mymanager/node-service-kit';
import type { IdentityRequest } from '../middleware/identity.js';
import { asError } from '../lib/errors.js';
import { createOdooClient } from '../modules/connection/connection.service.js';
import { getConnectionHandler, postConnectHandler, postDisconnectHandler } from '../modules/connection/connection.routes.js';
import { mapPartnerToContact } from '../modules/contacts/contact.mapper.js';
import { mapPartnerToCompany } from '../modules/companies/company.mapper.js';
import { mapLead } from '../modules/crm/lead.mapper.js';
import { mapSalesOrder } from '../modules/sales/salesOrder.mapper.js';
import { mapInvoice } from '../modules/accounting/invoice.mapper.js';
import type { OdooInventoryRecord } from '../modules/inventory/inventory.types.js';
import { MagentoClient } from '../clients/magentoClient.js';
import { config } from '../config/env.js';
import { normalizeSyncBody } from '../modules/sync/types.js';
import { syncMagentoCustomersToOdoo } from '../modules/sync/syncMagentoCustomersToOdoo.js';
import { syncMagentoOrdersToOdoo } from '../modules/sync/syncMagentoOrdersToOdoo.js';

const READ_ROLES = ['org_viewer', 'org_staff', 'org_manager', 'org_admin', 'org_owner'];
const WRITE_ROLES = ['org_manager', 'org_admin', 'org_owner'];

function parsePage(value: unknown, fallback = 1) {
  const parsed = Number(value || fallback);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.floor(parsed);
}

function parsePageSize(value: unknown, fallback = 50) {
  const parsed = Number(value || fallback);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(200, Math.floor(parsed));
}

function parseSearch(value: unknown): string | undefined {
  const text = String(value || '').trim();
  return text || undefined;
}

function mapInventory(record: OdooInventoryRecord) {
  return {
    product: Array.isArray(record.product_id) ? String(record.product_id[1]) : undefined,
    location: Array.isArray(record.location_id) ? String(record.location_id[1]) : undefined,
    quantity: typeof record.quantity === 'number' ? record.quantity : undefined,
    reservedQuantity: typeof record.reserved_quantity === 'number' ? record.reserved_quantity : undefined,
    availableQuantity: typeof record.available_quantity === 'number' ? record.available_quantity : undefined,
    updatedAt: record.write_date || undefined,
  };
}

export const odooRoutes = Router();
const roleContext = createRoleContextMiddleware();
const readAccess = [roleContext, requireOrgRoles(READ_ROLES)] as any[];
const writeAccess = [roleContext, requireOrgRoles(WRITE_ROLES)] as any[];

// TODO: Production must not trust public user-supplied X-User-Id or X-Org-Id.
// A verified auth layer should set trusted identity headers.

odooRoutes.get('/connection', readAccess, getConnectionHandler);
odooRoutes.post('/connect', writeAccess, postConnectHandler);
odooRoutes.post('/disconnect', writeAccess, postDisconnectHandler);

odooRoutes.get('/contacts', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);
    const search = parseSearch(req.query.search);

    const domain: unknown[] = search
      ? [
          '&',
          '|',
          ['customer_rank', '>', 0],
          ['is_company', '=', false],
          '|',
          ['name', 'ilike', search],
          ['email', 'ilike', search],
        ]
      : ['|', ['customer_rank', '>', 0], ['is_company', '=', false]];

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'res.partner',
      domain,
      [
        'id', 'name', 'email', 'phone', 'mobile', 'is_company', 'parent_id', 'company_type',
        'street', 'city', 'country_id', 'vat', 'customer_rank', 'supplier_rank', 'create_date', 'write_date',
      ],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows.map((x) => mapPartnerToContact(x as any)) });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.get('/companies', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);
    const search = parseSearch(req.query.search);

    const domain: unknown[] = search
      ? ['&', ['is_company', '=', true], '|', ['name', 'ilike', search], ['email', 'ilike', search]]
      : [['is_company', '=', true]];

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'res.partner',
      domain,
      [
        'id', 'name', 'email', 'phone', 'mobile', 'is_company', 'parent_id', 'company_type',
        'street', 'city', 'country_id', 'vat', 'customer_rank', 'supplier_rank', 'create_date', 'write_date',
      ],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows.map((x) => mapPartnerToCompany(x as any)) });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.get('/leads', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);
    const search = parseSearch(req.query.search);

    const domain: unknown[] = search
      ? ['&', ['type', '=', 'lead'], '|', ['name', 'ilike', search], ['email_from', 'ilike', search]]
      : [['type', '=', 'lead']];

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'crm.lead',
      domain,
      ['id', 'name', 'partner_id', 'contact_name', 'email_from', 'phone', 'stage_id', 'type', 'expected_revenue', 'probability', 'date_deadline', 'create_date', 'write_date'],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows.map((x) => mapLead(x as any)) });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.get('/opportunities', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);
    const search = parseSearch(req.query.search);

    const domain: unknown[] = search
      ? ['&', ['type', '=', 'opportunity'], '|', ['name', 'ilike', search], ['email_from', 'ilike', search]]
      : [['type', '=', 'opportunity']];

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'crm.lead',
      domain,
      ['id', 'name', 'partner_id', 'contact_name', 'email_from', 'phone', 'stage_id', 'type', 'expected_revenue', 'probability', 'date_deadline', 'create_date', 'write_date'],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows.map((x) => mapLead(x as any)) });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.get('/sales-orders', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'sale.order',
      [],
      ['id', 'name', 'partner_id', 'date_order', 'amount_total', 'state', 'currency_id', 'client_order_ref', 'create_date', 'write_date'],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows.map((x) => mapSalesOrder(x as any)) });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.get('/invoices', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'account.move',
      [['move_type', 'in', ['out_invoice', 'out_refund']]],
      ['id', 'name', 'partner_id', 'invoice_date', 'invoice_date_due', 'amount_total', 'amount_residual', 'payment_state', 'state', 'currency_id', 'create_date', 'write_date'],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows.map((x) => mapInvoice(x as any)) });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.get('/products', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);
    const search = parseSearch(req.query.search);

    const domain: unknown[] = search ? ['|', ['name', 'ilike', search], ['default_code', 'ilike', search]] : [];

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'product.template',
      domain,
      ['id', 'name', 'default_code', 'barcode', 'list_price', 'standard_price', 'type', 'qty_available', 'virtual_available', 'write_date'],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.get('/inventory', readAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const page = parsePage(req.query.page);
    const pageSize = parsePageSize(req.query.pageSize);

    const client = createOdooClient(identity.orgId);
    const rows = await client.searchRead(
      'stock.quant',
      [],
      ['product_id', 'location_id', 'quantity', 'reserved_quantity', 'available_quantity', 'write_date'],
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
    );

    return res.json({ success: true, data: rows.map((x) => mapInventory(x as OdooInventoryRecord)) });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.post('/sync/magento/customers', writeAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const options = normalizeSyncBody(req.body || {});

    if (!options.dryRun && !options.push) {
      return res.status(400).json({ success: false, message: 'Push sync requires dryRun=false and push=true.' });
    }

    const output = await syncMagentoCustomersToOdoo({
      identity,
      magentoClient: new MagentoClient(config.magentoApiBaseUrl),
      odooClient: createOdooClient(identity.orgId),
      dryRun: options.dryRun,
      limit: options.limit,
      push: options.push === true,
    });

    return res.json({ success: true, data: output });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.post('/sync/magento/orders', writeAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const options = normalizeSyncBody(req.body || {});

    if (!options.dryRun && !options.push) {
      return res.status(400).json({ success: false, message: 'Push sync requires dryRun=false and push=true.' });
    }

    const output = await syncMagentoOrdersToOdoo({
      identity,
      magentoClient: new MagentoClient(config.magentoApiBaseUrl),
      odooClient: createOdooClient(identity.orgId),
      dryRun: options.dryRun,
      limit: options.limit,
      push: options.push === true,
    });

    return res.json({ success: true, data: output });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});

odooRoutes.post('/sync/magento/all', writeAccess, async (req: Request, res: Response) => {
  try {
    const identity = (req as IdentityRequest).identity;
    const options = normalizeSyncBody(req.body || {});

    if (!options.dryRun && !options.push) {
      return res.status(400).json({ success: false, message: 'Push sync requires dryRun=false and push=true.' });
    }

    const magentoClient = new MagentoClient(config.magentoApiBaseUrl);
    const odooClient = createOdooClient(identity.orgId);

    const customers = await syncMagentoCustomersToOdoo({
      identity,
      magentoClient,
      odooClient,
      dryRun: options.dryRun,
      limit: options.limit,
      push: options.push === true,
    });

    const orders = await syncMagentoOrdersToOdoo({
      identity,
      magentoClient,
      odooClient,
      dryRun: options.dryRun,
      limit: options.limit,
      push: options.push === true,
    });

    return res.json({
      success: true,
      data: {
        dryRun: options.dryRun,
        source: 'magento',
        target: 'odoo',
        entity: 'all',
        seen: (customers.seen || 0) + (orders.seen || 0),
        created: (customers.created || 0) + (orders.created || 0),
        updated: (customers.updated || 0) + (orders.updated || 0),
        skipped: (customers.skipped || 0) + (orders.skipped || 0),
        errors: [...(customers.errors || []), ...(orders.errors || [])],
        items: [{ ...customers }, { ...orders }],
        message: options.dryRun ? 'Dry-run preview generated for all sync entities.' : 'Magento customers and orders synced to Odoo.',
      },
    });
  } catch (error) {
    const appError = asError(error);
    return res.status(appError.status).json({ success: false, code: appError.code, message: appError.message });
  }
});
