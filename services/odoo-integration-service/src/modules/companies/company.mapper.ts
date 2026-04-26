import type { OdooPartnerRecord } from '../contacts/contact.types.js';
import type { CompanyDto } from './company.types.js';

export function mapPartnerToCompany(record: OdooPartnerRecord): CompanyDto {
  return {
    id: record.id,
    name: record.name || 'Unnamed company',
    email: record.email || undefined,
    phone: record.phone || record.mobile || undefined,
    city: record.city || undefined,
    country: Array.isArray(record.country_id) ? String(record.country_id[1]) : undefined,
    vat: record.vat || undefined,
    createdAt: record.create_date || undefined,
    updatedAt: record.write_date || undefined,
  };
}
