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
