import api from '../lib/api';

export interface Invoice {
  id: string;
  orgId: string;
  contactId?: string;
  amountCents: number;
  paidAmountCents: number;
  status: 'pending' | 'partial' | 'paid' | 'cancelled';
  createdAt: string;
  dueDate?: string;
}

export const billingService = {
  getInvoices: async (params?: { status?: string, page?: number, limit?: number }) => {
    const response = await api.get<{ data: Invoice[] }>(`/api/invoice`, { params });
    return response.data;
  },
  
  getInvoice: async (id: string) => {
    const response = await api.get<{ data: Invoice }>(`/api/invoice/${id}`);
    return response.data;
  },
  
  getStats: async () => {
    // Note: True stats endpoint might be missing, using a placeholder or combined metric if needed.
    // For now, mapping to existing KrakenD stat endpoints if found.
    const response = await api.get<{ data: any }>(`/api/invoice/statistics/income`);
    return response.data;
  }
};

