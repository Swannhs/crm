import axios from 'src/utils/axios';

export type SalesSummary = {
  totalOrders: number;
  totalRevenue: number;
  avgOrderValue: number;
  hotLeads: number;
  opportunities: number;
  sources: {
    magentoOrders: number;
    odooOrders: number;
  };
};

export type SalesOrderRow = {
  id: string;
  ref: string;
  customer: string;
  amount: number;
  status: string;
  date: string;
  source: 'magento' | 'odoo';
};

export type SalesLeadRow = {
  id: string;
  name: string;
  stage: string;
  priority: string;
  expectedRevenue: number;
  type: string;
  email: string;
  phone: string;
};

function unwrap<T>(payload: unknown): T {
  const typed = payload as { data?: T };
  return (typed?.data ?? payload) as T;
}

export async function getSalesSummary(): Promise<SalesSummary> {
  const response = await axios.get('/api/sales-dashboard/summary');
  return unwrap<SalesSummary>(response.data);
}

export async function getSalesOrders(): Promise<SalesOrderRow[]> {
  const response = await axios.get('/api/sales-dashboard/orders');
  return unwrap<SalesOrderRow[]>(response.data);
}

export async function getSalesLeads(): Promise<SalesLeadRow[]> {
  const response = await axios.get('/api/sales-dashboard/leads');
  return unwrap<SalesLeadRow[]>(response.data);
}
