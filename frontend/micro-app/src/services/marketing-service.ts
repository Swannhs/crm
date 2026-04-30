import axiosInstance from 'src/utils/axios';

export type MarketingCampaign = {
  id: string;
  name: string;
  title?: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type MarketingSource = {
  id: string;
  name: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type MarketingMedium = {
  id: string;
  name: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type MarketingAnalytics = {
  totalCampaigns: number;
  activeCampaigns: number;
  totalSources: number;
  totalMediums: number;
  totalLeads: number;
  totalOpportunities: number;
  conversionRate: number;
  wonOrders: number;
  revenue: number;
  avgRevenuePerWonOrder: number;
};

export type MarketingCampaignInsights = {
  leads: any[];
  leadsTotal: number;
  orders: any[];
  ordersTotal: number;
};

const toCampaign = (row: any): MarketingCampaign => ({
  id: String(row?.id || ''),
  name: String(row?.name || row?.title || 'Untitled Campaign'),
  title: row?.title ? String(row.title) : undefined,
  active: row?.active !== false,
  createdAt: row?.create_date ? String(row.create_date) : undefined,
  updatedAt: row?.write_date ? String(row.write_date) : undefined,
});

const toSource = (row: any): MarketingSource => ({
  id: String(row?.id || ''),
  name: String(row?.name || 'Untitled Source'),
  active: row?.active !== false,
  createdAt: row?.create_date ? String(row.create_date) : undefined,
  updatedAt: row?.write_date ? String(row.write_date) : undefined,
});

const toMedium = (row: any): MarketingMedium => ({
  id: String(row?.id || ''),
  name: String(row?.name || 'Untitled Medium'),
  active: row?.active !== false,
  createdAt: row?.create_date ? String(row.create_date) : undefined,
  updatedAt: row?.write_date ? String(row.write_date) : undefined,
});

export async function getCampaigns(params?: { page?: number; pageSize?: number; search?: string }) {
  const response = await axiosInstance.get('/api/odoo/marketing/campaigns', {
    params: {
      page: params?.page ?? 1,
      pageSize: params?.pageSize ?? 100,
      search: params?.search ?? '',
    },
  });
  const rows = Array.isArray(response.data?.data) ? response.data.data : [];
  return rows.map(toCampaign);
}

export async function createCampaign(data: { name: string; title?: string; active?: boolean }) {
  const response = await axiosInstance.post('/api/odoo/marketing/campaigns', data);
  return response.data?.data ?? response.data;
}

export async function updateCampaign(id: string, data: { name?: string; title?: string; active?: boolean }) {
  const response = await axiosInstance.put(`/api/odoo/marketing/campaigns/${Number(id)}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteCampaign(id: string) {
  const response = await axiosInstance.delete(`/api/odoo/marketing/campaigns/${Number(id)}`);
  return response.data?.data ?? response.data;
}

export async function setCampaignAction(id: string, action: 'launch' | 'pause' | 'archive') {
  const response = await axiosInstance.post(`/api/odoo/marketing/campaigns/${Number(id)}/${action}`);
  return response.data?.data ?? response.data;
}

export async function getSources(params?: { page?: number; pageSize?: number; search?: string }) {
  const response = await axiosInstance.get('/api/odoo/marketing/sources', {
    params: {
      page: params?.page ?? 1,
      pageSize: params?.pageSize ?? 100,
      search: params?.search ?? '',
    },
  });
  const rows = Array.isArray(response.data?.data) ? response.data.data : [];
  return rows.map(toSource);
}

export async function createSource(data: { name: string; active?: boolean }) {
  const response = await axiosInstance.post('/api/odoo/marketing/sources', data);
  return response.data?.data ?? response.data;
}

export async function updateSource(id: string, data: { name?: string; active?: boolean }) {
  const response = await axiosInstance.put(`/api/odoo/marketing/sources/${Number(id)}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteSource(id: string) {
  const response = await axiosInstance.delete(`/api/odoo/marketing/sources/${Number(id)}`);
  return response.data?.data ?? response.data;
}

export async function getMediums(params?: { page?: number; pageSize?: number; search?: string }) {
  const response = await axiosInstance.get('/api/odoo/marketing/mediums', {
    params: {
      page: params?.page ?? 1,
      pageSize: params?.pageSize ?? 100,
      search: params?.search ?? '',
    },
  });
  const rows = Array.isArray(response.data?.data) ? response.data.data : [];
  return rows.map(toMedium);
}

export async function createMedium(data: { name: string; active?: boolean }) {
  const response = await axiosInstance.post('/api/odoo/marketing/mediums', data);
  return response.data?.data ?? response.data;
}

export async function updateMedium(id: string, data: { name?: string; active?: boolean }) {
  const response = await axiosInstance.put(`/api/odoo/marketing/mediums/${Number(id)}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteMedium(id: string) {
  const response = await axiosInstance.delete(`/api/odoo/marketing/mediums/${Number(id)}`);
  return response.data?.data ?? response.data;
}

export async function getAnalytics(params?: { dateFrom?: string; dateTo?: string }): Promise<MarketingAnalytics> {
  const response = await axiosInstance.get('/api/odoo/marketing/analytics', {
    params: {
      dateFrom: params?.dateFrom || '',
      dateTo: params?.dateTo || '',
    },
  });
  return response.data?.data ?? response.data ?? {
    totalCampaigns: 0,
    activeCampaigns: 0,
    totalSources: 0,
    totalMediums: 0,
    totalLeads: 0,
    totalOpportunities: 0,
    conversionRate: 0,
    wonOrders: 0,
    revenue: 0,
    avgRevenuePerWonOrder: 0,
  };
}

export async function getCampaignInsights(
  id: string,
  params?: { page?: number; pageSize?: number }
): Promise<MarketingCampaignInsights> {
  const response = await axiosInstance.get(`/api/odoo/marketing/campaigns/${Number(id)}/insights`, {
    params: {
      page: params?.page ?? 1,
      pageSize: params?.pageSize ?? 20,
    },
  });
  return response.data?.data ?? response.data ?? { leads: [], leadsTotal: 0, orders: [], ordersTotal: 0 };
}

// Legacy compatibility methods still used in builder/workflow surfaces.
export async function getOptinForms() {
  return [];
}

export async function getAutomations() {
  return [];
}

export async function getWorkflowWorkspaces() {
  const response = await axiosInstance.get('/api/workflow-workspace');
  return response.data?.data ?? response.data ?? [];
}

export async function getWorkflowById(workflowId: string) {
  const response = await axiosInstance.get('/api/workflow/getById', { params: { id: workflowId } });
  return response.data?.data ?? response.data;
}

export async function getWorkflowActivity(workflowId: string) {
  const response = await axiosInstance.get('/api/workflow/workflow-activity', { params: { workflowId } });
  return response.data?.data ?? response.data ?? [];
}

export async function getEmailTemplates() {
  return [];
}

export async function getSmsCampaigns() {
  return [];
}

export async function getAdAccounts() {
  return [];
}

export const marketingService = {
  getCampaigns,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  setCampaignAction,
  getSources,
  createSource,
  updateSource,
  deleteSource,
  getMediums,
  createMedium,
  updateMedium,
  deleteMedium,
  getAnalytics,
  getCampaignInsights,
  getOptinForms,
  getAutomations,
  getWorkflowWorkspaces,
  getWorkflowById,
  getWorkflowActivity,
  getEmailTemplates,
  getSmsCampaigns,
  getAdAccounts,
};
