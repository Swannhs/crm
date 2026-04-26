import type { MagentoClient } from '../../clients/magentoClient.js';
import type { OdooClient } from '../../clients/odooClient.js';
import type { Identity } from '../../middleware/identity.js';
import type { SyncResponse } from './types.js';

export async function syncMagentoCustomersToOdoo(params: {
  identity: Identity;
  magentoClient: MagentoClient;
  odooClient: OdooClient;
  dryRun: boolean;
  limit: number;
  push: boolean;
}): Promise<SyncResponse> {
  const { identity, magentoClient, odooClient, dryRun, limit, push } = params;

  const customers = await magentoClient.getCustomers(identity, { limit, page: 1, pageSize: limit });

  const result: SyncResponse = {
    dryRun,
    source: 'magento',
    target: 'odoo',
    entity: 'customers',
    seen: customers.length,
    created: 0,
    updated: 0,
    skipped: 0,
    errors: [],
    items: [],
  };

  for (const customer of customers) {
    const customerId = customer?.id;
    const ref = customerId ? `magento:${customerId}` : undefined;
    const email = customer?.email ? String(customer.email) : undefined;
    const firstName = String(customer?.firstname || '').trim();
    const lastName = String(customer?.lastname || '').trim();
    const name = [firstName, lastName].filter(Boolean).join(' ') || email || `Magento Customer ${customerId || ''}`.trim();
    const phone = customer?.addresses?.[0]?.telephone ? String(customer.addresses[0].telephone) : undefined;

    try {
      let existingId: number | null = null;

      if (ref) {
        const byRef = await odooClient.searchRead('res.partner', [['ref', '=', ref]], ['id', 'email'], { limit: 1 });
        const first = Array.isArray(byRef) ? (byRef[0] as any) : null;
        if (first?.id) existingId = Number(first.id);
      }

      if (!existingId && email) {
        const byEmail = await odooClient.searchRead('res.partner', [['email', '=', email]], ['id', 'email'], { limit: 1 });
        const first = Array.isArray(byEmail) ? (byEmail[0] as any) : null;
        if (first?.id) existingId = Number(first.id);
      }

      const values: Record<string, unknown> = {
        name,
        email,
        phone,
        is_company: false,
        company_type: 'person',
      };
      if (ref) values.ref = ref;

      if (dryRun) {
        result.items?.push({
          id: customerId,
          action: existingId ? 'update' : 'create',
          ref,
          email,
          values,
        });
        if (existingId) result.updated = (result.updated || 0) + 1;
        else result.created = (result.created || 0) + 1;
        continue;
      }

      if (!push) {
        throw new Error('Push mode is required when dryRun is false.');
      }

      if (existingId) {
        await odooClient.write('res.partner', [existingId], values);
        result.updated = (result.updated || 0) + 1;
      } else {
        await odooClient.create('res.partner', values);
        result.created = (result.created || 0) + 1;
      }
    } catch (error) {
      result.skipped = (result.skipped || 0) + 1;
      result.errors?.push({
        id: customerId,
        message: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  result.message = dryRun ? 'Dry-run preview generated.' : 'Magento customers synced to Odoo.';
  return result;
}
