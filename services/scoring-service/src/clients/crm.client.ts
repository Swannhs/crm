import { config } from '../config/env.js';

export interface CrmContact {
  id: string;
  org_id?: string;
  name?: string;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  phone?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  status?: string | null;
  type?: string | null;
  company_name?: string | null;
  marketing_email_opt_in?: boolean | null;
  marketing_sms_opt_in?: boolean | null;
  lead_source?: string | null;
  lead_stage?: string | null;
  metadata?: Record<string, unknown> | null;
  created_at?: string;
  updated_at?: string;
}

async function request<T>(path: string, headers: Record<string, string>): Promise<T> {
  const response = await fetch(new URL(path, config.crmServiceUrl), { headers });
  if (!response.ok) {
    throw new Error(`CRM service request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export class CrmClient {
  async getContact(orgId: string, userId: string, contactId: string): Promise<CrmContact | null> {
    const payload = await request<{ data?: CrmContact }>(`/api/v1/contacts/${contactId}`, {
      'X-Org-Id': orgId,
      'X-User-Id': userId,
      Accept: 'application/json'
    });

    return payload.data ?? null;
  }

  async listContacts(orgId: string, userId: string): Promise<CrmContact[]> {
    const payload = await request<{ data?: CrmContact[] }>('/api/v1/contacts', {
      'X-Org-Id': orgId,
      'X-User-Id': userId,
      Accept: 'application/json'
    });

    return payload.data ?? [];
  }
}

export const crmClient = new CrmClient();
