import api from '../lib/api';

export interface SupportTicket {
  id: string;
  subject: string;
  status: 'open' | 'pending' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  userId: string;
  userName: string;
}

export const supportService = {
  getTickets: async () => {
    const response = await api.get<{ data: SupportTicket[] }>(`/v1/support/tickets`);
    return response.data;
  },
  
  updateTicketStatus: async (id: string, status: SupportTicket['status']) => {
    const response = await api.patch<{ data: SupportTicket }>(`/v1/support/tickets/${id}`, { status });
    return response.data;
  },
  
  getFeedbackStats: async () => {
    const response = await api.get<{ data: any }>(`/v1/support/feedback`);
    return response.data;
  }
};
