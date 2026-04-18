import api from '../lib/api';

export interface Invoice {
  id: string;
  orgId: string;
  contactId?: string;
  amountCents: number;
  paidAmountCents: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  createdAt: string;
  dueDate?: string;
}

export const billingService = {
  getInvoices: async (params?: { status?: string, page?: number, limit?: number }) => {
    const response = await api.get<{ data: Invoice[] }>(`/invoice`, { params });
    return response.data;
  },
  
  getInvoice: async (id: string) => {
    const response = await api.get<{ data: Invoice }>(`/invoice/${id}`);
    return response.data;
  }
};

