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
  billTo?: string;
  contactName?: string;
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

function formatInvoiceNumber(id?: string, index: number = 0) {
  if (!id) return `INV-${String(index + 1).padStart(4, '0')}`;
  return `INV-${id.slice(0, 8).toUpperCase()}`;
}

function normalizeOdooInvoice(invoice: any, index: number = 0): IInvoice {
  const id = String(invoice?.id ?? invoice?._id ?? `invoice-${index}`);
  const partnerName = Array.isArray(invoice?.partner_id)
    ? String(invoice.partner_id[1] ?? '')
    : String(invoice?.partner ?? invoice?.customerName ?? '');
  const amountTotal = toNumber(invoice?.amount_total ?? invoice?.amountTotal ?? 0);
  const amountResidual = toNumber(invoice?.amount_residual ?? invoice?.amountResidual ?? 0);

  return {
    _id: id,
    id,
    no: invoice?.name ?? formatInvoiceNumber(id, index),
    customerName: partnerName || 'Unknown customer',
    totalDue: amountResidual,
    totalAmount: amountTotal,
    paidAmount: Math.max(0, amountTotal - amountResidual),
    status: String(invoice?.state ?? invoice?.status ?? 'draft'),
    deliveryStatus: String(invoice?.payment_state ?? invoice?.paymentState ?? 'not_paid'),
    dueDate: invoice?.dueDate ?? invoice?.invoice_date_due ?? invoice?.invoiceDate ?? '',
    createdAt: invoice?.createdAt ?? invoice?.create_date ?? '',
    billTo: partnerName || invoice?.billTo,
    contactName: partnerName || invoice?.contactName,
  };
}

function normalizeInvoicesResponse(payload: any): IInvoice[] {
  const invoices = Array.isArray(payload) ? payload : payload?.data;
  if (!Array.isArray(invoices)) return [];
  return invoices.map((invoice, index) => normalizeOdooInvoice(invoice, index));
}

export const billingService = {
  getInvoices: async (params?: any) => {
    const response = await axios.get('/api/billing/invoices', {
      params: {
        page: params?.page,
        pageSize: params?.pageSize,
        search: params?.search,
        contactId: params?.contactId,
      },
    });
    const invoices = normalizeInvoicesResponse(response.data);
    return {
      data: invoices,
      total: response.data?.total ?? invoices.length,
    };
  },

  getDueStats: async (params?: any) => {
    const { data: invoices } = await billingService.getInvoices(params);
    const totalDue = invoices.reduce((sum, invoice) => sum + (invoice.totalDue || 0), 0);
    const totalAmount = invoices.reduce((sum, invoice) => sum + (invoice.totalAmount || 0), 0);
    const paidAmount = invoices.reduce((sum, invoice) => sum + (invoice.paidAmount || 0), 0);
    return {
      totalDue,
      totalAmount,
      paidAmount,
      invoiceCount: invoices.length,
    };
  },

  getInvoice: async (id: string) => {
    const response = await axios.get(`/api/billing/invoices/${id}`);
    return response.data ? normalizeOdooInvoice(response.data) : null;
  },

  createInvoice: async (data: any) => {
    const response = await axios.post('/api/billing/invoices', data);
    return response.data;
  },

  updateInvoice: async (id: string, data: any) => {
    const response = await axios.put(`/api/billing/invoices/${id}`, data);
    return response.data;
  },

  deleteInvoice: async (id: string) => {
    const response = await axios.delete(`/api/billing/invoices/${id}`);
    return response.data;
  },

  downloadInvoice: async (id: string) => {
    const response = await axios.get(`/api/billing/invoices/${id}/download`, {
      responseType: 'blob',
    });
    return response.data; // This will be a Blob
  },

  postInvoice: async (id: string) => {
    const response = await axios.post(`/api/billing/invoices/${id}/post`);
    return response.data;
  },

  getSummary: async () => {
    const response = await axios.get('/api/billing/summary');
    return response.data?.data ?? response.data;
  },

  getGraph: async (months: number = 6) => {
    const response = await axios.get('/api/billing/graph', {
      params: { months },
    });
    return response.data?.data ?? response.data;
  },

  getReconciliation: async () => {
    const response = await axios.get('/api/billing/reconciliation');
    return response.data?.data ?? [];
  },

  linkReconciliation: async (payload: { invoiceId: string | number; magentoOrderRef: string }) => {
    const response = await axios.post('/api/billing/reconciliation/link', payload);
    return response.data;
  },

  unlinkReconciliation: async (payload: { invoiceId: string | number }) => {
    const response = await axios.post('/api/billing/reconciliation/unlink', payload);
    return response.data;
  },

  getPayments: async () => {
    const { data } = await billingService.getInvoices({ page: 1, pageSize: 100 });
    return data
      .filter((invoice) => invoice.paidAmount > 0)
      .map((invoice) => ({
        id: invoice.id,
        customerName: invoice.customerName,
        amount: invoice.paidAmount,
        status: invoice.deliveryStatus,
        createdAt: invoice.createdAt,
      }));
  },
};
