import type {
  SalesStage,
  SyncResult,
  SyncPreview,
  SalesFilters,
  SalesLeadRow,
  SalesSummary,
  SalesActivity,
  SalesOrderRow,
  SalesAnalytics,
  SalesOpportunity,
} from 'src/sections/sales/types';

import axios from 'src/utils/axios';

type OpportunityPayload = Partial<Omit<SalesOpportunity, 'id' | 'nextActivity' | 'linkedMagentoOrderIds'>> & {
  notes?: string;
};

type ActivityPayload = {
  type: SalesActivity['type'];
  title: string;
  dueDate?: string;
};

function unwrap<T>(payload: unknown): T {
  const typed = payload as { data?: T };
  return (typed?.data ?? payload) as T;
}

function paramsFromFilters(filters?: SalesFilters) {
  if (!filters) return undefined;
  return Object.fromEntries(Object.entries(filters).filter(([, value]) => value !== undefined && value !== ''));
}

export async function getSalesSummary(filters?: SalesFilters): Promise<SalesSummary> {
  const response = await axios.get('/api/sales-dashboard/summary', { params: paramsFromFilters(filters) });
  return unwrap<SalesSummary>(response.data);
}

export async function getSalesOrders(filters?: SalesFilters): Promise<SalesOrderRow[]> {
  const response = await axios.get('/api/sales-dashboard/orders', { params: paramsFromFilters(filters) });
  return unwrap<SalesOrderRow[]>(response.data);
}

export async function getSalesLeads(filters?: SalesFilters): Promise<SalesLeadRow[]> {
  const response = await axios.get('/api/sales-dashboard/leads', { params: paramsFromFilters(filters) });
  return unwrap<SalesLeadRow[]>(response.data);
}

export async function getSalesOpportunities(filters?: SalesFilters): Promise<SalesOpportunity[]> {
  const response = await axios.get('/api/sales-dashboard/opportunities', { params: paramsFromFilters(filters) });
  return unwrap<SalesOpportunity[]>(response.data);
}

export async function getSalesActivities(filters?: SalesFilters): Promise<SalesActivity[]> {
  const response = await axios.get('/api/sales-dashboard/activities', { params: paramsFromFilters(filters) });
  return unwrap<SalesActivity[]>(response.data);
}

export async function getSalesAnalytics(filters?: SalesFilters): Promise<SalesAnalytics> {
  const response = await axios.get('/api/sales-dashboard/analytics', { params: paramsFromFilters(filters) });
  return unwrap<SalesAnalytics>(response.data);
}

export async function createSalesOpportunity(payload: OpportunityPayload): Promise<SalesOpportunity> {
  const response = await axios.post('/api/sales-dashboard/opportunities', payload);
  return unwrap<SalesOpportunity>(response.data);
}

export async function updateSalesOpportunity(id: string, payload: OpportunityPayload): Promise<SalesOpportunity> {
  const response = await axios.patch(`/api/sales-dashboard/opportunities/${encodeURIComponent(id)}`, payload);
  return unwrap<SalesOpportunity>(response.data);
}

export async function updateOpportunityStage(id: string, stage: SalesStage): Promise<SalesOpportunity> {
  const response = await axios.patch(`/api/sales-dashboard/opportunities/${encodeURIComponent(id)}/stage`, { stage });
  return unwrap<SalesOpportunity>(response.data);
}

export async function createSalesActivity(opportunityId: string, payload: ActivityPayload): Promise<SalesActivity> {
  const response = await axios.post(`/api/sales-dashboard/opportunities/${encodeURIComponent(opportunityId)}/activities`, payload);
  return unwrap<SalesActivity>(response.data);
}

export async function completeSalesActivity(activityId: string): Promise<SalesActivity> {
  const response = await axios.patch(`/api/sales-dashboard/activities/${encodeURIComponent(activityId)}/complete`);
  return unwrap<SalesActivity>(response.data);
}

export async function previewMagentoToOdooSync(): Promise<SyncPreview> {
  const response = await axios.post('/api/sales-dashboard/sync/magento-to-odoo/preview');
  return unwrap<SyncPreview>(response.data);
}

export async function runMagentoToOdooSync(): Promise<SyncResult> {
  const response = await axios.post('/api/sales-dashboard/sync/magento-to-odoo/run');
  return unwrap<SyncResult>(response.data);
}

export async function linkOrderToOpportunity(orderId: string, opportunityId: string): Promise<void> {
  await axios.post(`/api/sales-dashboard/orders/${encodeURIComponent(orderId)}/link-opportunity`, {
    opportunityId,
  });
}

export async function getSalesStages(): Promise<Array<{ id: number; name: string; sequence: number; is_won: boolean }>> {
  const response = await axios.get('/api/odoo/crm/stages');
  return unwrap<any[]>(response.data);
}
