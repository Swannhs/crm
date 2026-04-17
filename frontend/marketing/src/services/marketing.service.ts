import { api } from "@/lib/api";

export interface Campaign {
  id: string;
  name: string;
  subject: string;
  status: string;
  scheduledAt: string | null;
  createdAt: string;
}

export interface EmailMessage {
  id: string;
  subject: string;
  to: string[];
  isSent: boolean;
  createdAt: string;
}

export const marketingService = {
  getCampaigns: async () => {
    const response = await api.get('/marketing/campaigns');
    return response.data;
  },
  
  getEmails: async () => {
    const response = await api.get('/marketing/emails');
    return response.data;
  },
  
  createCampaign: async (data: any) => {
    const response = await api.post('/marketing/campaigns', data);
    return response.data;
  }
};
