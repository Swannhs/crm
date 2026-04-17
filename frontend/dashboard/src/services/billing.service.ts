import api from '../lib/api';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  contactName: string;
  amountCents: bigint;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  dueDate: string;
  createdAt: string;
}

export const billingService = {
  getInvoices: async (params?: { status?: string, page?: number, limit?: number }) => {
    const response = await api.get<{ data: Invoice[], total: number }>(`/v1/invoices`, { params });
    return response.data;
  },
  
  getInvoice: async (id: string) => {
    const response = await api.get<{ data: Invoice }>(`/v1/invoices/${id}`);
    return response.data;
  },
  
  getStats: async () => {
    const response = await api.get<{ data: any }>(`/v1/invoices/stats`);
    return response.data;
  }
};
