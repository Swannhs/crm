import type { Identity } from '../middleware/identity.js';
import { httpJson } from '../lib/http.js';

export type MagentoSyncOptions = {
  limit?: number;
  page?: number;
  pageSize?: number;
  search?: string;
};

export class MagentoClient {
  constructor(private readonly baseUrl: string) {}

  async getCustomers(identity: Identity, options: MagentoSyncOptions = {}): Promise<any[]> {
    const query = new URLSearchParams();
    if (options.page) query.set('currentPage', String(options.page));
    if (options.pageSize || options.limit) query.set('pageSize', String(options.pageSize || options.limit));
    if (options.search) query.set('search', options.search);

    const data = await httpJson<any>(`${this.baseUrl}/v1/magento/customers${query.toString() ? `?${query}` : ''}`, {
      headers: {
        Authorization: `Bearer ${identity.token}`,
        'X-Org-Id': identity.orgId,
        'X-User-Id': identity.userId,
      },
    });

    return Array.isArray(data?.items) ? data.items : Array.isArray(data) ? data : [];
  }

  async getOrders(identity: Identity, options: MagentoSyncOptions = {}): Promise<any[]> {
    const query = new URLSearchParams();
    if (options.page) query.set('currentPage', String(options.page));
    if (options.pageSize || options.limit) query.set('pageSize', String(options.pageSize || options.limit));
    if (options.search) query.set('search', options.search);

    const data = await httpJson<any>(`${this.baseUrl}/v1/magento/orders${query.toString() ? `?${query}` : ''}`, {
      headers: {
        Authorization: `Bearer ${identity.token}`,
        'X-Org-Id': identity.orgId,
        'X-User-Id': identity.userId,
      },
    });

    return Array.isArray(data?.items) ? data.items : Array.isArray(data) ? data : [];
  }
}
