import type { ContactDto, OdooPartnerRecord } from './contact.types.js';

export function mapPartnerToContact(record: OdooPartnerRecord): ContactDto {
  return {
    id: record.id,
    name: record.name || 'Unnamed',
    email: record.email || undefined,
    phone: record.phone || undefined,
    mobile: record.mobile || undefined,
    isCompany: Boolean(record.is_company),
    parentId: Array.isArray(record.parent_id) ? Number(record.parent_id[0]) : undefined,
    companyType: record.company_type || undefined,
    street: record.street || undefined,
    city: record.city || undefined,
    country: Array.isArray(record.country_id) ? String(record.country_id[1]) : undefined,
    vat: record.vat || undefined,
    customerRank: typeof record.customer_rank === 'number' ? record.customer_rank : undefined,
    supplierRank: typeof record.supplier_rank === 'number' ? record.supplier_rank : undefined,
    createdAt: record.create_date || undefined,
    updatedAt: record.write_date || undefined,
  };
}
