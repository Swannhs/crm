export type OdooPartnerRecord = {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  is_company?: boolean;
  parent_id?: [number, string] | false;
  company_type?: string;
  street?: string;
  city?: string;
  country_id?: [number, string] | false;
  vat?: string;
  customer_rank?: number;
  supplier_rank?: number;
  create_date?: string;
  write_date?: string;
};

export type ContactDto = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  mobile?: string;
  isCompany: boolean;
  parentId?: number;
  companyType?: string;
  street?: string;
  city?: string;
  country?: string;
  vat?: string;
  customerRank?: number;
  supplierRank?: number;
  createdAt?: string;
  updatedAt?: string;
};
