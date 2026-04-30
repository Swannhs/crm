import axiosInstance from 'src/utils/axios';

import { 
  MarketingSegment, 
  MarketingSummary,
  MarketingCampaign, 
  MarketingTemplate, 
  CampaignAnalytics, 
  MarketingSegmentPreview 
} from '../types';

const API_BASE = '/api/marketing';

const axiosConfig = {
  skipGlobalErrorToast: true,
} as any;

const safeGet = async (url: string, fallback: any) => {
  try {
    const response = await axiosInstance.get(url, axiosConfig);
    return response.data?.data ?? response.data;
  } catch (error) {
    console.error(`Marketing Service Error [GET ${url}]:`, error);
    // Add a flag to indicate this is fallback data
    if (typeof fallback === 'object' && fallback !== null) {
      return { ...fallback, isFallback: true };
    }
    return fallback;
  }
};

const strictGet = async (url: string) => {
  const response = await axiosInstance.get(url, axiosConfig);
  return response.data?.data ?? response.data;
};

const normalizeCampaign = (row: any): MarketingCampaign => {
  const rawStatus = String(row?.status || '').toLowerCase();
  const status =
    rawStatus === 'draft' ||
    rawStatus === 'scheduled' ||
    rawStatus === 'sending' ||
    rawStatus === 'sent' ||
    rawStatus === 'paused' ||
    rawStatus === 'archived' ||
    rawStatus === 'failed'
      ? rawStatus
      : row?.active === false
      ? 'draft'
      : 'sent';

  const rawType = String(row?.type || '').toLowerCase();
  const type =
    rawType === 'email' || rawType === 'sms' || rawType === 'broadcast' || rawType === 'multi_channel'
      ? rawType
      : 'email';

  return {
    id: String(row?.id || ''),
    name: String(row?.name || 'Untitled Campaign'),
    type,
    status,
    subject: row?.subject ? String(row.subject) : row?.title ? String(row.title) : undefined,
    scheduledAt: row?.scheduledAt || row?.scheduleTime || row?.schedule_date || undefined,
    sentAt: row?.sentAt || undefined,
    createdAt: row?.createdAt || row?.create_date || new Date().toISOString(),
    updatedAt: row?.updatedAt || row?.write_date || new Date().toISOString(),
    metrics: row?.metrics,
  };
};

const normalizeSegment = (row: any): MarketingSegment => ({
  id: String(row?.id || ''),
  name: String(row?.name || 'Untitled Segment'),
  description: row?.description ? String(row.description) : undefined,
  type: row?.type === 'dynamic' ? 'dynamic' : 'static',
  filters: Array.isArray(row?.filters) ? row.filters : undefined,
  contactCount: typeof row?.contactCount === 'number' ? row.contactCount : undefined,
  createdAt: row?.createdAt || row?.create_date || undefined,
  updatedAt: row?.updatedAt || row?.write_date || undefined,
});

const normalizeTemplate = (row: any): MarketingTemplate => ({
  id: String(row?.id || ''),
  name: String(row?.name || 'Untitled Template'),
  type: row?.type === 'sms' ? 'sms' : 'email',
  category: row?.category,
  subject: row?.subject ? String(row.subject) : undefined,
  previewText: row?.previewText ? String(row.previewText) : undefined,
  content: row?.content ? String(row.content) : row?.body_html ? String(row.body_html) : undefined,
  createdAt: row?.createdAt || row?.create_date || undefined,
  updatedAt: row?.updatedAt || row?.write_date || undefined,
});

export const marketingService = {
  // Dashboard
  getSummary: async (): Promise<MarketingSummary & { isFallback?: boolean }> => safeGet(`${API_BASE}/summary`, {
      totalContacts: undefined,
      activeCampaigns: undefined,
      scheduledCampaigns: undefined,
      sentCampaigns: undefined,
      openRate: undefined,
      clickRate: undefined,
      conversionRate: undefined,
      channelHealth: 'warning',
    }),
  getActivity: async () => safeGet(`${API_BASE}/activity`, []),

  // Segments
  getSegments: async (): Promise<MarketingSegment[]> => {
    const payload = await strictGet(`${API_BASE}/segments`);
    const rows = Array.isArray(payload) ? payload : Array.isArray(payload?.data) ? payload.data : [];
    return rows.map(normalizeSegment);
  },
  getSegment: async (id: string): Promise<MarketingSegment> => {
    const payload = await safeGet(`${API_BASE}/segments/${id}`, null);
    return payload ? normalizeSegment(payload) : null;
  },
  createSegment: async (data: Partial<MarketingSegment>) => {
    const response = await axiosInstance.post(`${API_BASE}/segments`, data, axiosConfig);
    return normalizeSegment(response.data?.data ?? response.data);
  },
  updateSegment: async (id: string, data: Partial<MarketingSegment>) => {
    const response = await axiosInstance.patch(`${API_BASE}/segments/${id}`, data, axiosConfig);
    return normalizeSegment(response.data?.data ?? response.data);
  },
  deleteSegment: async (id: string) => {
    await axiosInstance.delete(`${API_BASE}/segments/${id}`, axiosConfig);
  },
  previewSegment: async (filters: any): Promise<MarketingSegmentPreview> => {
    const response = await axiosInstance.post(`${API_BASE}/segments/preview`, filters, axiosConfig);
    return response.data?.data ?? response.data;
  },

  // Campaigns
  getCampaigns: async (): Promise<MarketingCampaign[] & { isFallback?: boolean }> => {
    const payload = await strictGet(`${API_BASE}/campaigns`);
    const rows = Array.isArray(payload) ? payload : Array.isArray(payload?.data) ? payload.data : [];
    return rows.map(normalizeCampaign) as MarketingCampaign[] & { isFallback?: boolean };
  },
  getCampaign: async (id: string): Promise<MarketingCampaign> => {
    const payload = await safeGet(`${API_BASE}/campaigns/${id}`, null);
    return payload ? normalizeCampaign(payload) : null;
  },
  createCampaign: async (data: Partial<MarketingCampaign>) => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns`, data, axiosConfig);
    return response.data?.data ?? response.data;
  },
  updateCampaign: async (id: string, data: Partial<MarketingCampaign>) => {
    const response = await axiosInstance.patch(`${API_BASE}/campaigns/${id}`, data, axiosConfig);
    return response.data?.data ?? response.data;
  },
  deleteCampaign: async (id: string) => {
    await axiosInstance.delete(`${API_BASE}/campaigns/${id}`, axiosConfig);
  },
  duplicateCampaign: async (id: string) => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/duplicate`, {}, axiosConfig);
    return response.data?.data ?? response.data;
  },
  updateCampaignContent: async (id: string, data: Partial<MarketingCampaign>): Promise<MarketingCampaign> => {
    const response = await axiosInstance.patch(`${API_BASE}/campaigns/${id}/content`, data, axiosConfig);
    return normalizeCampaign(response.data?.data ?? response.data);
  },
  sendTestCampaign: async (id: string, payload: { to: string }) => {
    await axiosInstance.post(`${API_BASE}/campaigns/${id}/send-test`, payload, axiosConfig);
  },
  scheduleCampaign: async (id: string, payload: { scheduledAt: string }): Promise<MarketingCampaign> => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/schedule`, payload, axiosConfig);
    return normalizeCampaign(response.data?.data ?? response.data);
  },
  cancelScheduledCampaign: async (id: string): Promise<MarketingCampaign> => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/cancel-schedule`, {}, axiosConfig);
    return normalizeCampaign(response.data?.data ?? response.data);
  },
  sendCampaignNow: async (id: string): Promise<MarketingCampaign> => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/send`, {}, axiosConfig);
    return normalizeCampaign(response.data?.data ?? response.data);
  },

  // Templates
  getTemplates: async (): Promise<MarketingTemplate[]> => {
    const payload = await strictGet(`${API_BASE}/templates`);
    const rows = Array.isArray(payload) ? payload : Array.isArray(payload?.data) ? payload.data : [];
    return rows.map(normalizeTemplate);
  },
  getTemplate: async (id: string): Promise<MarketingTemplate> => {
    const payload = await safeGet(`${API_BASE}/templates/${id}`, null);
    return payload ? normalizeTemplate(payload) : null;
  },
  createTemplate: async (data: Partial<MarketingTemplate>) => {
    const response = await axiosInstance.post(`${API_BASE}/templates`, data, axiosConfig);
    return normalizeTemplate(response.data?.data ?? response.data);
  },
  updateTemplate: async (id: string, data: Partial<MarketingTemplate>) => {
    const response = await axiosInstance.patch(`${API_BASE}/templates/${id}`, data, axiosConfig);
    return normalizeTemplate(response.data?.data ?? response.data);
  },
  deleteTemplate: async (id: string) => {
    await axiosInstance.delete(`${API_BASE}/templates/${id}`, axiosConfig);
  },
  duplicateTemplate: async (id: string): Promise<MarketingTemplate> => {
    const response = await axiosInstance.post(`${API_BASE}/templates/${id}/duplicate`, {}, axiosConfig);
    return normalizeTemplate(response.data?.data ?? response.data);
  },
  getTemplateUsage: async (id: string) => strictGet(`${API_BASE}/templates/${id}/usage`),

  // Analytics
  getCampaignAnalytics: async (id: string): Promise<CampaignAnalytics> => safeGet(`${API_BASE}/campaigns/${id}/analytics`, null),
  getCampaignComplianceStatus: async (id: string) => safeGet(`${API_BASE}/campaigns/${id}/compliance-status`, null),
  getSenderStatus: async () => safeGet(`${API_BASE}/sender-status`, null),
  getCampaignTemplateUsage: async (id: string) => strictGet(`${API_BASE}/campaigns/${id}/template-usage`),
  getCampaignDeliveryEvents: async (id: string) => strictGet(`${API_BASE}/campaigns/${id}/delivery-events`),
  getSuppressionList: async () => strictGet(`${API_BASE}/suppression-list`),
  addSuppressionEntry: async (payload: any) => axiosInstance.post(`${API_BASE}/suppression-list`, payload, axiosConfig).then((r) => r.data?.data ?? r.data),
  removeSuppressionEntry: async (id: string) => axiosInstance.delete(`${API_BASE}/suppression-list/${id}`, axiosConfig).then((r) => r.data?.data ?? r.data),
  updateContactConsent: async (id: string, payload: any) => axiosInstance.post(`${API_BASE}/contacts/${id}/consent`, payload, axiosConfig).then((r) => r.data?.data ?? r.data),
  getOverallAnalytics: async () => safeGet(`${API_BASE}/analytics`, null),
};
