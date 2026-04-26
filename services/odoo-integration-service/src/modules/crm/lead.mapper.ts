import type { LeadDto, OdooLeadRecord } from './lead.types.js';

export function mapLead(record: OdooLeadRecord): LeadDto {
  return {
    id: record.id,
    name: record.name || 'Untitled lead',
    partner: Array.isArray(record.partner_id) ? String(record.partner_id[1]) : undefined,
    contactName: record.contact_name || undefined,
    email: record.email_from || undefined,
    phone: record.phone || undefined,
    stage: Array.isArray(record.stage_id) ? String(record.stage_id[1]) : undefined,
    type: record.type || undefined,
    expectedRevenue: typeof record.expected_revenue === 'number' ? record.expected_revenue : undefined,
    probability: typeof record.probability === 'number' ? record.probability : undefined,
    deadline: record.date_deadline || undefined,
    createdAt: record.create_date || undefined,
    updatedAt: record.write_date || undefined,
  };
}
