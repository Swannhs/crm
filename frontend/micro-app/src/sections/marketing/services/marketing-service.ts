import axiosInstance from 'src/utils/axios';

import { 
  MarketingSegment, 
  MarketingSummary, 
  MarketingCampaign, 
  MarketingTemplate, 
  CampaignAnalytics 
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

const normalizeCampaign = (row: any): MarketingCampaign => {
  const rawStatus = String(row?.status || '').toLowerCase();
  const status =
    rawStatus === 'draft' ||
    rawStatus === 'scheduled' ||
    rawStatus === 'sending' ||
    rawStatus === 'sent' ||
    rawStatus === 'failed'
      ? rawStatus
      : row?.active === false
      ? 'draft'
      : 'sent';

  const rawType = String(row?.type || '').toLowerCase();
  const type =
    rawType === 'email' || rawType === 'sms' || rawType === 'broadcast' || rawType === 'multi-channel'
      ? rawType
      : 'email';

  return {
    id: String(row?.id || ''),
    name: String(row?.name || 'Untitled Campaign'),
    type,
    status,
    subject: row?.subject ? String(row.subject) : row?.title ? String(row.title) : undefined,
    scheduleTime: row?.scheduleTime || row?.schedule_date || undefined,
    createdAt: row?.createdAt || row?.create_date || new Date().toISOString(),
    updatedAt: row?.updatedAt || row?.write_date || new Date().toISOString(),
  };
};

export const marketingService = {
  // Dashboard
  getSummary: async (): Promise<MarketingSummary & { isFallback?: boolean }> => safeGet(`${API_BASE}/summary`, {
      totalContacts: 0,
      activeCampaigns: 0,
      scheduledCampaigns: 0,
      sentCampaigns: 0,
      openRate: 0,
      clickRate: 0,
      conversionRate: 0,
      channelHealth: 'healthy',
    }),
  getActivity: async () => safeGet(`${API_BASE}/activity`, []),

  // Segments
  getSegments: async (): Promise<MarketingSegment[]> => safeGet(`${API_BASE}/segments`, []),
  getSegment: async (id: string): Promise<MarketingSegment> => safeGet(`${API_BASE}/segments/${id}`, null),
  createSegment: async (data: Partial<MarketingSegment>) => {
    const response = await axiosInstance.post(`${API_BASE}/segments`, data, axiosConfig);
    return response.data?.data ?? response.data;
  },
  updateSegment: async (id: string, data: Partial<MarketingSegment>) => {
    const response = await axiosInstance.patch(`${API_BASE}/segments/${id}`, data, axiosConfig);
    return response.data?.data ?? response.data;
  },
  deleteSegment: async (id: string) => {
    const response = await axiosInstance.delete(`${API_BASE}/segments/${id}`, axiosConfig);
    return response.data?.data ?? response.data;
  },
  previewSegment: async (filters: any) => {
    const response = await axiosInstance.post(`${API_BASE}/segments/preview`, { filters }, axiosConfig);
    return response.data?.data ?? response.data;
  },

  // Campaigns
  getCampaigns: async (): Promise<MarketingCampaign[] & { isFallback?: boolean }> => {
    const payload = await safeGet(`${API_BASE}/campaigns`, []);
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
    const response = await axiosInstance.delete(`${API_BASE}/campaigns/${id}`, axiosConfig);
    return response.data?.data ?? response.data;
  },
  duplicateCampaign: async (id: string) => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/duplicate`, {}, axiosConfig);
    return response.data?.data ?? response.data;
  },
  sendTest: async (id: string, email: string) => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/send-test`, { email }, axiosConfig);
    return response.data?.data ?? response.data;
  },
  scheduleCampaign: async (id: string, time: string) => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/schedule`, { time }, axiosConfig);
    return response.data?.data ?? response.data;
  },
  cancelSchedule: async (id: string) => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/cancel`, {}, axiosConfig);
    return response.data?.data ?? response.data;
  },
  sendCampaign: async (id: string) => {
    const response = await axiosInstance.post(`${API_BASE}/campaigns/${id}/send`, {}, axiosConfig);
    return response.data?.data ?? response.data;
  },

  // Templates
  getTemplates: async (): Promise<MarketingTemplate[]> => safeGet(`${API_BASE}/templates`, []),
  getTemplate: async (id: string): Promise<MarketingTemplate> => safeGet(`${API_BASE}/templates/${id}`, null),
  createTemplate: async (data: Partial<MarketingTemplate>) => {
    const response = await axiosInstance.post(`${API_BASE}/templates`, data, axiosConfig);
    return response.data?.data ?? response.data;
  },
  updateTemplate: async (id: string, data: Partial<MarketingTemplate>) => {
    const response = await axiosInstance.patch(`${API_BASE}/templates/${id}`, data, axiosConfig);
    return response.data?.data ?? response.data;
  },
  deleteTemplate: async (id: string) => {
    const response = await axiosInstance.delete(`${API_BASE}/templates/${id}`, axiosConfig);
    return response.data?.data ?? response.data;
  },

  // Analytics
  getCampaignAnalytics: async (id: string): Promise<CampaignAnalytics> => safeGet(`${API_BASE}/campaigns/${id}/analytics`, null),
  getOverallAnalytics: async () => safeGet(`${API_BASE}/analytics`, null),
};
