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

const ODOO_WRITE_DEPRECATED_MESSAGE = 'Odoo now owns this workflow. Manage it in Odoo.';

function normalizeOdooInvoice(invoice: any, index: number = 0): IInvoice {
  const id = String(invoice?.id ?? invoice?._id ?? `invoice-${index}`);
  return {
    _id: id,
    id,
    no: invoice?.name ?? formatInvoiceNumber(id, index),
    customerName: invoice?.partner ?? invoice?.customerName ?? 'Unknown customer',
    totalDue: toNumber(invoice?.amountResidual ?? invoice?.amount_total ?? 0),
    totalAmount: toNumber(invoice?.amountTotal ?? invoice?.amount_total ?? 0),
    paidAmount: toNumber(invoice?.amountTotal ?? invoice?.amount_total ?? 0) - toNumber(invoice?.amountResidual ?? 0),
    status: invoice?.state ?? invoice?.status ?? 'draft',
    deliveryStatus: invoice?.paymentState ?? invoice?.payment_state ?? 'pending',
    dueDate: invoice?.dueDate ?? invoice?.invoice_date_due ?? invoice?.invoiceDate ?? '',
    createdAt: invoice?.createdAt ?? invoice?.create_date ?? '',
    billTo: invoice?.partner ?? invoice?.billTo,
    contactName: invoice?.partner ?? invoice?.contactName,
  };
}

function normalizeInvoicesResponse(payload: any): IInvoice[] {
  const invoices = Array.isArray(payload) ? payload : payload?.data;
  if (!Array.isArray(invoices)) return [];
  return invoices.map((invoice, index) => normalizeOdooInvoice(invoice, index));
}

export const billingService = {
  getInvoices: async (params?: any) => {
    const response = await axios.get('/api/odoo/invoices', {
      params: {
        page: params?.page,
        pageSize: params?.pageSize,
        search: params?.search,
      },
    });
    return normalizeInvoicesResponse(response.data);
  },

  getDueStats: async (params?: any) => {
    const invoices = await billingService.getInvoices(params);
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
    const response = await axios.get('/api/odoo/invoices', {
      params: {
        page: 1,
        pageSize: 1,
        search: id,
      },
    });
    const [invoice] = Array.isArray(response.data?.data) ? response.data.data : [];
    return invoice ? normalizeOdooInvoice(invoice) : null;
  },

  createInvoice: async (data: any) => {
    const response = await axios.post('/api/odoo/invoices', data);
    return response.data;
  },

  updateInvoice: async (id: string, data: any) => {
    const response = await axios.put(`/api/odoo/invoices/${id}`, data);
    return response.data;
  },

  deleteInvoice: async (id: string) => {
    const response = await axios.delete(`/api/odoo/invoices/${id}`);
    return response.data;
  },

  getPayments: async () => {
    return [];
  },
};
