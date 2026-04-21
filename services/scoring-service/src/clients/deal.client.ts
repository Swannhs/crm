import { config } from '../config/env.js';

export interface DealRecord {
  id: string;
  contactId?: string | null;
  amount?: string | number | null;
  currency?: string | null;
  stage?: string | null;
  probability?: number | null;
  source?: string | null;
  priority?: string | null;
  expectedCloseDate?: string | null;
  actualCloseDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

async function request<T>(path: string, headers: Record<string, string>): Promise<T> {
  const response = await fetch(new URL(path, config.dealServiceUrl), { headers });
  if (!response.ok) {
    throw new Error(`Deal service request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export class DealClient {
  async listDealsForContact(orgId: string, userId: string, contactId: string): Promise<DealRecord[]> {
    const qs = new URLSearchParams({
      contactId,
      limit: '100'
    });

    const payload = await request<{ data?: DealRecord[] }>(`/api/v1/deals?${qs.toString()}`, {
      'X-Org-Id': orgId,
      'X-User-Id': userId,
      Accept: 'application/json'
    });

    return payload.data ?? [];
  }
}

export const dealClient = new DealClient();
