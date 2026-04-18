import api from '../lib/api';

export interface Campaign {
  id: string;
  orgId: string;
  name: string;
  type: 'email' | 'sms' | 'push';
  status: 'draft' | 'scheduled' | 'sent' | 'cancelled';
  subject?: string;
  scheduledAt?: string;
  sentAt?: string;
  createdAt?: string;
}

export interface Subscriber {
  id: string;
  orgId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  status: 'active' | 'unsubscribed' | 'bounced';
  createdAt?: string;
}

export const marketingService = {
  getCampaigns: async (params?: { status?: string; type?: string }) => {
    const response = await api.get<{ data: Campaign[]; total?: number }>(`/marketing/v1/campaigns`, { params });
    return response.data;
  },

  getCampaign: async (id: string) => {
    const response = await api.get<{ data: Campaign }>(`/marketing/v1/campaigns/${id}`);
    return response.data;
  },
  
  createCampaign: async (data: Partial<Campaign>) => {
    const response = await api.post<{ data: Campaign }>(`/marketing/v1/campaigns`, data);
    return response.data;
  },

  sendCampaign: async (id: string) => {
    const response = await api.post(`/marketing/v1/campaigns/${id}/send`, {});
    return response.data;
  },

  getSubscribers: async (params?: { status?: string }) => {
    const response = await api.get<{ data: Subscriber[]; total?: number }>(`/marketing/v1/subscribers`, { params });
    return response.data;
  }
};
