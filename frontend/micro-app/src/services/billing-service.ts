import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IInvoice = {
  _id: string;
  no: string;
  customerName: string;
  totalDue: number;
  paidAmount: number;
  status: string;
  deliveryStatus: string;
  dueDate: string;
  createdAt: string;
};

export const billingService = {
  getInvoices: async (params?: any) => {
    const response = await axios.get('/api/invoice', { params });
    return response.data?.data ?? response.data;
  },

  getDueStats: async (params?: any) => {
    const response = await axios.get('/api/invoice/due-stats', { params });
    return response.data;
  },

  getInvoice: async (id: string) => {
    const response = await axios.get(`/api/invoice/${id}`);
    return response.data?.data ?? response.data;
  },

  createInvoice: async (data: any) => {
    const response = await axios.post('/api/invoice', data);
    return response.data?.data ?? response.data;
  },

  updateInvoice: async (id: string, data: any) => {
    const response = await axios.put(`/api/invoice/update/${id}`, data);
    return response.data?.data ?? response.data;
  },

  getPayments: async () => {
    const response = await axios.get('/api/payments');
    return response.data?.data ?? response.data ?? [];
  },
};
