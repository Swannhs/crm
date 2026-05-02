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
import { normalizeStage } from 'src/sections/sales/utils';

export type {
  SalesLeadRow,
  SalesSummary,
  SalesOrderRow,
  SalesAnalytics,
  SalesOpportunity,
  SalesActivity,
} from 'src/sections/sales/types';

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

export function normalizeSalesOpportunity(raw: any): SalesOpportunity {
  const stageObject = raw?.stage && typeof raw.stage === 'object' ? raw.stage : null;
  const stageName = stageObject?.name ?? raw?.stage ?? raw?.stageName ?? 'new';
  const normalizedStage = normalizeStage(stageObject?.status ?? raw?.stageStatus ?? raw?.status ?? stageName);
  const expectedRevenue = Number(raw?.expectedRevenue ?? raw?.plannedRevenue ?? raw?.expected_revenue ?? raw?.planned_revenue ?? 0);
  const probability = Number(raw?.probability ?? 0);
  const source = raw?.source === 'magento' || raw?.source === 'manual' ? raw.source : 'odoo';
  const priority = raw?.priority === 'low' || raw?.priority === 'high' ? raw.priority : 'medium';

  return {
    id: String(raw?.id ?? raw?.odooId ?? ''),
    odooId: Number(raw?.odooId ?? raw?.id ?? 0) || undefined,
    name: raw?.name ?? 'Untitled opportunity',
    customerName: raw?.customerName ?? raw?.partner?.name ?? raw?.companyName ?? '',
    companyName: raw?.companyName ?? raw?.partner?.name ?? '',
    email: raw?.email ?? raw?.email_from ?? '',
    phone: raw?.phone ?? '',
    stage: normalizedStage,
    stageId: Number(raw?.stageId ?? stageObject?.id ?? 0) || undefined,
    probability,
    expectedRevenue,
    weightedValue: Number(raw?.weightedValue ?? (expectedRevenue * probability) / 100),
    recurringRevenue: Number(raw?.recurringRevenue ?? raw?.recurring_revenue_monthly ?? 0),
    assignedTo: raw?.assignedTo ?? raw?.user?.name ?? '',
    priority,
    source,
    status: normalizeStage(raw?.status ?? raw?.stageStatus ?? normalizedStage),
    expectedCloseDate: raw?.expectedCloseDate ?? raw?.expectedClose ?? raw?.date_deadline ?? '',
    createdAt: raw?.createdAt ?? raw?.create_date,
    updatedAt: raw?.updatedAt ?? raw?.write_date,
    nextActivity: raw?.nextActivity
      ? {
          id: String(raw.nextActivity.id ?? raw.nextActivity.odooId ?? ''),
          type: raw.nextActivity.type ?? 'todo',
          title: raw.nextActivity.title ?? raw.nextActivity.summary ?? 'Activity',
          dueDate: raw.nextActivity.dueDate ?? raw.nextActivity.deadline,
          overdue: raw.nextActivity.overdue ?? raw.nextActivity.state === 'overdue',
          state: raw.nextActivity.state,
        }
      : undefined,
    linkedMagentoOrderIds: raw?.linkedMagentoOrderIds ?? [],
  };
}

function normalizeSalesOpportunityRows(payload: any): SalesOpportunity[] {
  const rows = Array.isArray(payload?.data) ? payload.data : Array.isArray(payload) ? payload : [];
  return rows.map(normalizeSalesOpportunity);
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
  return normalizeSalesOpportunityRows(unwrap<any>(response.data));
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
  return normalizeSalesOpportunity(unwrap<any>(response.data));
}

export async function updateSalesOpportunity(id: string, payload: OpportunityPayload): Promise<SalesOpportunity> {
  const response = await axios.patch(`/api/sales-dashboard/opportunities/${encodeURIComponent(id)}`, payload);
  return normalizeSalesOpportunity(unwrap<any>(response.data));
}

export async function updateOpportunityStage(id: string, stage: SalesStage, stageId?: number): Promise<SalesOpportunity> {
  const response = await axios.patch(`/api/sales-dashboard/opportunities/${encodeURIComponent(id)}/stage`, { stage, stageId });
  return normalizeSalesOpportunity(unwrap<any>(response.data));
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

export async function getSalesDashboard(): Promise<any> {
  const response = await axios.get('/api/odoo/crm/dashboard');
  return unwrap<any>(response.data);
}

export async function getOpportunityTimeline(id: string | number): Promise<any[]> {
  const response = await axios.get(`/api/sales-dashboard/opportunities/${encodeURIComponent(id)}/timeline`);
  return unwrap<any[]>(response.data);
}

export async function createOpportunityNote(id: string | number, body: string): Promise<any> {
  const response = await axios.post(`/api/sales-dashboard/opportunities/${encodeURIComponent(id)}/notes`, { body });
  return unwrap<any>(response.data);
}

export async function deleteSalesActivity(id: string | number): Promise<boolean> {
  const response = await axios.delete(`/api/sales-dashboard/activities/${encodeURIComponent(id)}`);
  return unwrap<boolean>(response.data);
}

export async function deleteSalesOpportunity(id: string | number): Promise<boolean> {
  const response = await axios.delete(`/api/sales-dashboard/opportunities/${encodeURIComponent(id)}`);
  return unwrap<boolean>(response.data);
}
