import api from '../lib/api';

export interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'social';
  status: 'draft' | 'scheduled' | 'sent';
  reach: number;
  conversions: number;
}

export const marketingService = {
  getCampaigns: async () => {
    const response = await api.get<{ data: Campaign[] }>(`/v1/campaigns`);
    return response.data;
  },
  
  createCampaign: async (data: Partial<Campaign>) => {
    const response = await api.post<{ data: Campaign }>(`/v1/campaigns`, data);
    return response.data;
  },
  
  getMarketingStats: async () => {
    const response = await api.get<{ data: any }>(`/v1/marketing/stats`);
    return response.data;
  }
};
