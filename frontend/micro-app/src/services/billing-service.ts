import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IInvoice = {
  _id: string;
  id: string;
  no: string;
  customerName: string;
  totalDue: number;
  totalAmount: number;
  paidAmount: number;
  status: string;
  deliveryStatus: string;
  dueDate: string;
  createdAt: string;
};

function toNumber(value: unknown): number {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  if (typeof value === 'bigint') return Number(value);
  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function centsToCurrency(value: unknown): number {
  return toNumber(value) / 100;
}

function formatInvoiceNumber(id?: string, index: number = 0) {
  if (!id) return `INV-${String(index + 1).padStart(4, '0')}`;
  return `INV-${id.slice(0, 8).toUpperCase()}`;
}

function normalizeInvoice(invoice: any, index: number = 0): IInvoice {
  const amount =
    invoice?.totalDue ??
    invoice?.totalAmount ??
    centsToCurrency(invoice?.total_cents ?? invoice?.amountCents ?? invoice?.amount_cents);

  const paid =
    invoice?.paidAmount ??
    centsToCurrency(invoice?.paidAmountCents ?? invoice?.paid_cents);

  return {
    _id: invoice?._id ?? invoice?.id ?? `invoice-${index}`,
    id: invoice?.id ?? invoice?._id ?? `invoice-${index}`,
    no: invoice?.no ?? invoice?.invoiceNumber ?? invoice?.invoice_number ?? formatInvoiceNumber(invoice?.id, index),
    customerName:
      invoice?.customerName ??
      invoice?.metadata?.customerName ??
      invoice?.billTo ??
      invoice?.contactName ??
      invoice?.contact?.name ??
      'Walk-in customer',
    totalDue: amount,
    totalAmount: amount,
    paidAmount: paid,
    status: invoice?.status ?? 'pending',
    deliveryStatus: invoice?.deliveryStatus ?? invoice?.delivery_status ?? 'pending',
    dueDate:
      invoice?.dueDate ??
      invoice?.metadata?.dueDate ??
      invoice?.due_date ??
      invoice?.createdAt ??
      invoice?.created_at ??
      '',
    createdAt: invoice?.createdAt ?? invoice?.created_at ?? invoice?.dueDate ?? invoice?.due_date ?? '',
  };
}

function normalizeInvoicesResponse(payload: any): IInvoice[] {
  const invoices = Array.isArray(payload) ? payload : payload?.data;
  if (!Array.isArray(invoices)) return [];
  return invoices.map((invoice, index) => normalizeInvoice(invoice, index));
}

export const billingService = {
  getInvoices: async (params?: any) => {
    const response = await axios.get('/api/invoice', { params });
    return normalizeInvoicesResponse(response.data);
  },

  getDueStats: async (params?: any) => {
    const response = await axios.get('/api/invoice/due-stats', { params });
    return response.data;
  },

  getInvoice: async (id: string) => {
    const response = await axios.get(`/api/invoice/${id}`);
    return normalizeInvoice(response.data?.data ?? response.data);
  },

  createInvoice: async (data: any) => {
    const response = await axios.post('/api/invoice', data);
    return response.data?.data ?? response.data;
  },

  updateInvoice: async (id: string, data: any) => {
    const response = await axios.put(`/api/invoice/update/${id}`, data);
    return response.data?.data ?? response.data;
  },

  deleteInvoice: async (id: string) => {
    const response = await axios.delete(`/api/invoice/${id}`);
    return response.data;
  },

  getPayments: async () => {
    const response = await axios.get('/api/payments');
    return response.data?.data ?? response.data ?? [];
  },
};
