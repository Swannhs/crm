import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IInvoiceLine = {
  id: number;
  name: string;
  quantity: number;
  priceUnit: number;
  priceSubtotal: number;
  productName?: string;
};

export type IInvoice = {
  _id: string;
  id: string;
  no: string;
  customerName: string;
  customerId?: number;
  totalDue: number;
  totalAmount: number;
  paidAmount: number;
  status: string;
  deliveryStatus: string;
  dueDate: string;
  invoiceDate: string;
  createdAt: string;
  isOverdue: boolean;
  currency?: string;
  lines?: IInvoiceLine[];
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

function normalizeOdooInvoice(invoice: any, index: number = 0): IInvoice {
  const id = String(invoice?.id ?? invoice?.odooId ?? invoice?._id ?? `invoice-${index}`);
  
  // Backend returns normalized shape now, but we keep fallback for legacy
  const customerName = invoice?.customerName || 
    (Array.isArray(invoice?.partner_id) ? invoice.partner_id[1] : invoice?.partner_id) || 
    invoice?.billTo || 
    'Unknown customer';

  const amountTotal = toNumber(invoice?.amountTotal ?? invoice?.amount_total ?? 0);
  const amountResidual = toNumber(invoice?.amountResidual ?? invoice?.amount_residual ?? 0);

  const lines = Array.isArray(invoice?.lines) 
    ? invoice.lines.map((l: any) => ({
        id: l.id,
        name: l.name,
        quantity: toNumber(l.quantity),
        priceUnit: toNumber(l.priceUnit || l.price_unit),
        priceSubtotal: toNumber(l.priceSubtotal || l.price_subtotal),
        productName: l.productName,
      }))
    : undefined;

  return {
    _id: id,
    id,
    no: String(invoice?.number ?? invoice?.name ?? '').trim() || 'Unnumbered invoice',
    customerName,
    customerId: invoice?.customerId || (Array.isArray(invoice?.partner_id) ? invoice.partner_id[0] : undefined),
    totalDue: amountResidual,
    totalAmount: amountTotal,
    paidAmount: Math.max(0, amountTotal - amountResidual),
    status: String(invoice?.state ?? 'draft'),
    deliveryStatus: String(invoice?.paymentState ?? invoice?.payment_state ?? 'not_paid'),
    dueDate: invoice?.dueDate || invoice?.invoice_date_due || '',
    invoiceDate: invoice?.invoiceDate || invoice?.invoice_date || '',
    createdAt: invoice?.createdAt || invoice?.create_date || '',
    isOverdue: !!invoice?.isOverdue,
    currency: invoice?.currency,
    lines,
    billTo: customerName,
    contactName: customerName,
  };
}

function normalizeInvoicesResponse(payload: any): IInvoice[] {
  const invoices = Array.isArray(payload) ? payload : (payload?.data || payload?.invoices);
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
