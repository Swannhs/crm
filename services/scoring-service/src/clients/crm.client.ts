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
    const payload = await request<{ data?: Array<Record<string, unknown>> }>(
      `/v1/odoo/contacts?page=1&pageSize=1&search=${encodeURIComponent(contactId)}`,
      {
      'X-Org-Id': orgId,
      'X-User-Id': userId,
      Authorization: 'Bearer scoring-service-internal',
      Accept: 'application/json'
    });

    const raw = Array.isArray(payload.data) ? payload.data[0] : null;
    if (!raw) return null;

    return {
      id: String(raw.id ?? ''),
      name: typeof raw.name === 'string' ? raw.name : undefined,
      email: typeof raw.email === 'string' ? raw.email : undefined,
      phone: typeof raw.phone === 'string' ? raw.phone : undefined,
      city: typeof raw.city === 'string' ? raw.city : undefined,
      country: typeof raw.country === 'string' ? raw.country : undefined,
      status: 'active',
      type: typeof raw.type === 'string' ? raw.type : 'contact',
      company_name: typeof raw.company === 'string' ? raw.company : undefined,
      created_at: typeof raw.createdAt === 'string' ? raw.createdAt : undefined,
      updated_at: typeof raw.updatedAt === 'string' ? raw.updatedAt : undefined
    };
  }

  async listContacts(orgId: string, userId: string): Promise<CrmContact[]> {
    const payload = await request<{ data?: Array<Record<string, unknown>> }>('/v1/odoo/contacts?page=1&pageSize=200', {
      'X-Org-Id': orgId,
      'X-User-Id': userId,
      Authorization: 'Bearer scoring-service-internal',
      Accept: 'application/json'
    });

    const rows = Array.isArray(payload.data) ? payload.data : [];
    return rows.map((raw) => ({
      id: String(raw.id ?? ''),
      name: typeof raw.name === 'string' ? raw.name : undefined,
      email: typeof raw.email === 'string' ? raw.email : undefined,
      phone: typeof raw.phone === 'string' ? raw.phone : undefined,
      city: typeof raw.city === 'string' ? raw.city : undefined,
      country: typeof raw.country === 'string' ? raw.country : undefined,
      status: 'active',
      type: typeof raw.type === 'string' ? raw.type : 'contact',
      company_name: typeof raw.company === 'string' ? raw.company : undefined,
      created_at: typeof raw.createdAt === 'string' ? raw.createdAt : undefined,
      updated_at: typeof raw.updatedAt === 'string' ? raw.updatedAt : undefined
    }));
  }
}

export const crmClient = new CrmClient();
