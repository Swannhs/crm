import type { MagentoClient } from '../../clients/magentoClient.js';
import type { OdooClient } from '../../clients/odooClient.js';
import type { Identity } from '../../middleware/identity.js';
import type { SyncResponse } from './types.js';

async function findOrCreateProductBySku(odooClient: OdooClient, sku: string, name: string, price: number, dryRun: boolean): Promise<number | null> {
  const existing = await odooClient.searchRead('product.product', [['default_code', '=', sku]], ['id', 'default_code'], { limit: 1 });
  const existingFirst = Array.isArray(existing) ? (existing[0] as any) : null;
  if (existingFirst?.id) {
    return Number(existingFirst.id);
  }

  if (dryRun) {
    return null;
  }

  const templateId = await odooClient.create('product.template', {
    name: name || sku,
    default_code: sku,
    list_price: Number.isFinite(price) ? price : 0,
    type: 'consu',
  });

  const product = await odooClient.searchRead('product.product', [['product_tmpl_id', '=', templateId]], ['id'], { limit: 1 });
  const firstProduct = Array.isArray(product) ? (product[0] as any) : null;
  if (firstProduct?.id) return Number(firstProduct.id);
  return null;
}

async function findPartnerId(odooClient: OdooClient, order: any, dryRun: boolean): Promise<number | null> {
  const email = order?.customer_email ? String(order.customer_email) : '';
  const customerId = order?.customer_id;
  const ref = customerId ? `magento:${customerId}` : '';

  if (ref) {
    const byRef = await odooClient.searchRead('res.partner', [['ref', '=', ref]], ['id'], { limit: 1 });
    const first = Array.isArray(byRef) ? (byRef[0] as any) : null;
    if (first?.id) return Number(first.id);
  }

  if (email) {
    const byEmail = await odooClient.searchRead('res.partner', [['email', '=', email]], ['id'], { limit: 1 });
    const first = Array.isArray(byEmail) ? (byEmail[0] as any) : null;
    if (first?.id) return Number(first.id);
  }

  if (dryRun) return null;

  const partnerName = [order?.customer_firstname, order?.customer_lastname].filter(Boolean).join(' ') || email || 'Magento Customer';
  const values: Record<string, unknown> = {
    name: partnerName,
    email: email || undefined,
    is_company: false,
    company_type: 'person',
  };
  if (ref) values.ref = ref;

  return odooClient.create('res.partner', values);
}

export async function syncMagentoOrdersToOdoo(params: {
  identity: Identity;
  magentoClient: MagentoClient;
  odooClient: OdooClient;
  dryRun: boolean;
  limit: number;
  push: boolean;
}): Promise<SyncResponse> {
  const { identity, magentoClient, odooClient, dryRun, limit, push } = params;
  const orders = await magentoClient.getOrders(identity, { limit, page: 1, pageSize: limit });

  const result: SyncResponse = {
    dryRun,
    source: 'magento',
    target: 'odoo',
    entity: 'orders',
    seen: orders.length,
    created: 0,
    updated: 0,
    skipped: 0,
    errors: [],
    items: [],
  };

  for (const order of orders) {
    const incrementId = order?.increment_id ? String(order.increment_id) : String(order?.entity_id || '');
    const clientOrderRef = incrementId ? `magento:${incrementId}` : '';

    try {
      const existing = await odooClient.searchRead('sale.order', [['client_order_ref', '=', clientOrderRef]], ['id', 'name'], { limit: 1 });
      const first = Array.isArray(existing) ? (existing[0] as any) : null;
      const existingId = first?.id ? Number(first.id) : null;

      const partnerId = await findPartnerId(odooClient, order, dryRun);
      if (!partnerId && !dryRun) {
        throw new Error('Unable to resolve customer partner for order sync.');
      }

      const rawItems = Array.isArray(order?.items) ? order.items : [];
      const orderLines: unknown[] = [];
      const linePreview: Array<Record<string, unknown>> = [];

      for (const item of rawItems) {
        const sku = item?.sku ? String(item.sku) : '';
        if (!sku) continue;

        const name = String(item?.name || sku);
        const qty = Number(item?.qty_ordered || 1);
        const price = Number(item?.price || 0);
        const productId = await findOrCreateProductBySku(odooClient, sku, name, price, dryRun);

        if (!productId && !dryRun) {
          result.skipped = (result.skipped || 0) + 1;
          result.errors?.push({ id: incrementId, message: `Missing product mapping for SKU ${sku}` });
          continue;
        }

        if (productId) {
          orderLines.push([0, 0, { product_id: productId, product_uom_qty: qty, price_unit: price, name }]);
        }

        linePreview.push({ sku, name, qty, price, productId: productId || undefined });
      }

      const payload: Record<string, unknown> = {
        partner_id: partnerId || undefined,
        client_order_ref: clientOrderRef,
        date_order: order?.created_at || new Date().toISOString(),
      };

      if (orderLines.length > 0) {
        payload.order_line = orderLines;
      }

      if (dryRun) {
        result.items?.push({
          id: incrementId,
          action: existingId ? 'update' : 'create',
          clientOrderRef,
          partnerId,
          lines: linePreview,
        });
        if (existingId) result.updated = (result.updated || 0) + 1;
        else result.created = (result.created || 0) + 1;
        continue;
      }

      if (!push) {
        throw new Error('Push mode is required when dryRun is false.');
      }

      if (existingId) {
        await odooClient.write('sale.order', [existingId], payload);
        result.updated = (result.updated || 0) + 1;
      } else {
        await odooClient.create('sale.order', payload);
        result.created = (result.created || 0) + 1;
      }
    } catch (error) {
      result.skipped = (result.skipped || 0) + 1;
      result.errors?.push({
        id: incrementId,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  result.message = dryRun ? 'Dry-run preview generated.' : 'Magento orders synced to Odoo.';
  return result;
}
