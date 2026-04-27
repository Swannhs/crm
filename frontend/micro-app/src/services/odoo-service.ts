import axios from 'src/utils/axios';

import type {
  OdooConnectInput,
  OdooConnectionStatus,
  OdooContact,
  OdooInventory,
  OdooInvoice,
  OdooLead,
  OdooListParams,
  OdooProduct,
  OdooSalesOrder,
  OdooSyncOptions,
  OdooSyncResult,
} from 'src/types/odoo';

const ODOO_API_BASE = '/api/odoo';

type HttpErrorLike = { status?: number; message?: string; error?: string; details?: string };
type AxiosLikeError = {
  response?: {
    status?: number;
    data?: HttpErrorLike;
  };
  message?: string;
};

function normalizeApiError(error: unknown): Error {
  const axiosError = (error ?? {}) as AxiosLikeError;
  const payload = (error ?? {}) as HttpErrorLike;
  const responsePayload = (axiosError.response?.data ?? {}) as HttpErrorLike;
  const status = axiosError.response?.status ?? payload?.status;

  if (status === 401 || status === 403) {
    return new Error('You do not have permission to access Odoo integration.');
  }
  if (status === 404) {
    return new Error('Odoo route is not available. Please verify gateway configuration.');
  }
  if (typeof status === 'number' && status >= 500) {
    return new Error('Odoo integration is temporarily unavailable.');
  }

  const message =
    responsePayload?.message ||
    responsePayload?.error ||
    responsePayload?.details ||
    payload?.message ||
    payload?.error ||
    payload?.details ||
    axiosError?.message;
  return new Error(message || 'Unexpected Odoo integration error.');
}

function unwrapResponse<T>(payload: unknown): T {
  const typed = payload as { data?: T };
  return (typed?.data ?? payload) as T;
}

function toListParams(params?: OdooListParams) {
  if (!params) return undefined;
  return {
    page: params.page,
    pageSize: params.pageSize,
    search: params.search,
  };
}

async function request<T>(run: () => Promise<{ data: unknown }>): Promise<T> {
  try {
    const response = await run();
    return unwrapResponse<T>(response.data);
  } catch (error) {
    throw normalizeApiError(error);
  }
}

export async function connectOdoo(input: OdooConnectInput): Promise<OdooConnectionStatus> {
  return request<OdooConnectionStatus>(() => axios.post(`${ODOO_API_BASE}/connect`, input));
}

export async function getOdooConnection(): Promise<OdooConnectionStatus> {
  return request<OdooConnectionStatus>(() => axios.get(`${ODOO_API_BASE}/connection`));
}

export async function disconnectOdoo(): Promise<{ disconnected: boolean }> {
  return request<{ disconnected: boolean }>(() => axios.post(`${ODOO_API_BASE}/disconnect`));
}

export async function getOdooContacts(params?: OdooListParams): Promise<OdooContact[]> {
  return request<OdooContact[]>(() => axios.get(`${ODOO_API_BASE}/contacts`, { params: toListParams(params) }));
}

export async function getOdooCompanies(params?: OdooListParams): Promise<OdooContact[]> {
  return request<OdooContact[]>(() => axios.get(`${ODOO_API_BASE}/companies`, { params: toListParams(params) }));
}

export async function getOdooLeads(params?: OdooListParams): Promise<OdooLead[]> {
  return request<OdooLead[]>(() => axios.get(`${ODOO_API_BASE}/leads`, { params: toListParams(params) }));
}

export async function getOdooOpportunities(params?: OdooListParams): Promise<OdooLead[]> {
  return request<OdooLead[]>(() => axios.get(`${ODOO_API_BASE}/opportunities`, { params: toListParams(params) }));
}

export async function getOdooSalesOrders(params?: OdooListParams): Promise<OdooSalesOrder[]> {
  return request<OdooSalesOrder[]>(() => axios.get(`${ODOO_API_BASE}/sales-orders`, { params: toListParams(params) }));
}

export async function getOdooInvoices(params?: OdooListParams): Promise<OdooInvoice[]> {
  return request<OdooInvoice[]>(() => axios.get(`${ODOO_API_BASE}/invoices`, { params: toListParams(params) }));
}

export async function getOdooProducts(params?: OdooListParams): Promise<OdooProduct[]> {
  return request<OdooProduct[]>(() => axios.get(`${ODOO_API_BASE}/products`, { params: toListParams(params) }));
}

export async function getOdooInventory(params?: OdooListParams): Promise<OdooInventory[]> {
  return request<OdooInventory[]>(() => axios.get(`${ODOO_API_BASE}/inventory`, { params: toListParams(params) }));
}

// --- Write Operations ---

export async function createOdooContact(data: any): Promise<number> {
  const payload = {
    ...data,
    name: data.name ?? data.fullName,
    is_company: data.is_company ?? data.isCompany,
  };
  delete (payload as any).fullName;
  delete (payload as any).isCompany;
  delete (payload as any).status;

  return request<number>(() => axios.post(`${ODOO_API_BASE}/contacts`, payload));
}

export async function updateOdooContact(id: number | string, data: any): Promise<boolean> {
  const payload = {
    ...data,
    name: data.name ?? data.fullName,
    is_company: data.is_company ?? data.isCompany,
  };
  delete (payload as any).fullName;
  delete (payload as any).isCompany;
  delete (payload as any).status;

  return request<boolean>(() => axios.put(`${ODOO_API_BASE}/contacts/${id}`, payload));
}

export async function deleteOdooContact(id: number | string): Promise<boolean> {
  return request<boolean>(() => axios.delete(`${ODOO_API_BASE}/contacts/${id}`));
}

export async function createOdooLead(data: any): Promise<number> {
  const payload = {
    ...data,
    contact_name: data.contact_name ?? data.contactName,
    expected_revenue: data.expected_revenue ?? data.expectedRevenue,
  };
  delete (payload as any).contactName;
  delete (payload as any).expectedRevenue;

  return request<number>(() => axios.post(`${ODOO_API_BASE}/leads`, payload));
}

export async function updateOdooLead(id: number | string, data: any): Promise<boolean> {
  const payload = {
    ...data,
    contact_name: data.contact_name ?? data.contactName,
    expected_revenue: data.expected_revenue ?? data.expectedRevenue,
  };
  delete (payload as any).contactName;
  delete (payload as any).expectedRevenue;

  return request<boolean>(() => axios.put(`${ODOO_API_BASE}/leads/${id}`, payload));
}

export async function deleteOdooLead(id: number | string): Promise<boolean> {
  return request<boolean>(() => axios.delete(`${ODOO_API_BASE}/leads/${id}`));
}

export async function createOdooInvoice(data: any): Promise<number> {
  const payload = {
    ...data,
    invoice_date: data.invoice_date ?? data.invoiceDate,
    invoice_date_due: data.invoice_date_due ?? data.dueDate,
    amount_total: data.amount_total ?? data.amountTotal,
    payment_state: data.payment_state ?? data.paymentState,
  };
  delete (payload as any).invoiceDate;
  delete (payload as any).dueDate;
  delete (payload as any).amountTotal;
  delete (payload as any).paymentState;
  delete (payload as any).status;
  delete (payload as any).deliveryStatus;

  return request<number>(() => axios.post(`${ODOO_API_BASE}/invoices`, payload));
}

export async function updateOdooInvoice(id: number | string, data: any): Promise<boolean> {
  const payload = {
    ...data,
    invoice_date: data.invoice_date ?? data.invoiceDate,
    invoice_date_due: data.invoice_date_due ?? data.dueDate,
    amount_total: data.amount_total ?? data.amountTotal,
    payment_state: data.payment_state ?? data.paymentState,
  };
  delete (payload as any).invoiceDate;
  delete (payload as any).dueDate;
  delete (payload as any).amountTotal;
  delete (payload as any).paymentState;
  delete (payload as any).status;
  delete (payload as any).deliveryStatus;

  return request<boolean>(() => axios.put(`${ODOO_API_BASE}/invoices/${id}`, payload));
}

export async function deleteOdooInvoice(id: number | string): Promise<boolean> {
  return request<boolean>(() => axios.delete(`${ODOO_API_BASE}/invoices/${id}`));
}

export async function createOdooProduct(data: any): Promise<number> {
  const payload = {
    ...data,
    name: data.name ?? data.title,
  };
  delete (payload as any).title;

  return request<number>(() => axios.post(`${ODOO_API_BASE}/products`, payload));
}

export async function updateOdooProduct(id: number | string, data: any): Promise<boolean> {
  const payload = {
    ...data,
    name: data.name ?? data.title,
  };
  delete (payload as any).title;

  return request<boolean>(() => axios.put(`${ODOO_API_BASE}/products/${id}`, payload));
}

export async function deleteOdooProduct(id: number | string): Promise<boolean> {
  return request<boolean>(() => axios.delete(`${ODOO_API_BASE}/products/${id}`));
}

// --- Sync Operations ---

export async function syncMagentoCustomersToOdoo(options?: OdooSyncOptions): Promise<OdooSyncResult> {
  return request<OdooSyncResult>(() =>
    axios.post(`${ODOO_API_BASE}/sync/magento/customers`, { ...options, dryRun: options?.dryRun ?? true })
  );
}

export async function syncMagentoOrdersToOdoo(options?: OdooSyncOptions): Promise<OdooSyncResult> {
  return request<OdooSyncResult>(() =>
    axios.post(`${ODOO_API_BASE}/sync/magento/orders`, { ...options, dryRun: options?.dryRun ?? true })
  );
}

export async function syncMagentoAllToOdoo(options?: OdooSyncOptions): Promise<OdooSyncResult> {
  return request<OdooSyncResult>(() =>
    axios.post(`${ODOO_API_BASE}/sync/magento/all`, { ...options, dryRun: options?.dryRun ?? true })
  );
}
