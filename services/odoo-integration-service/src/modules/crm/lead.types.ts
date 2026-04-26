export type OdooLeadRecord = {
  id: number;
  name?: string;
  partner_id?: [number, string] | false;
  contact_name?: string;
  email_from?: string;
  phone?: string;
  stage_id?: [number, string] | false;
  type?: 'lead' | 'opportunity' | string;
  expected_revenue?: number;
  probability?: number;
  date_deadline?: string;
  create_date?: string;
  write_date?: string;
};

export type LeadDto = {
  id: number;
  name: string;
  partner?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  stage?: string;
  type?: string;
  expectedRevenue?: number;
  probability?: number;
  deadline?: string;
  createdAt?: string;
  updatedAt?: string;
};
