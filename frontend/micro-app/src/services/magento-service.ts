import type {
  MagentoOrder,
  MagentoStore,
  MagentoProduct,
  MagentoCustomer,
  MagentoSyncResult,
  MagentoSyncOptions,
  MagentoConnectInput,
  MagentoGraphqlInput,
  MagentoListResponse,
  MagentoRestProxyInput,
  MagentoConnectionStatus,
  MagentoDownstreamHealth,
} from 'src/types/magento';

import axios from 'src/utils/axios';

const MAGENTO_API_BASE = '/api/magento';

type HttpErrorLike = {
  status?: number;
  message?: string;
  error?: string;
  details?: string;
};

function normalizeApiError(error: unknown): Error {
  const payload = (error ?? {}) as HttpErrorLike;
  const status = payload?.status;

  if (status === 401 || status === 403) {
    return new Error('You do not have permission to access Magento integration.');
  }
  if (status === 404) {
    return new Error('Magento route is not available. Please verify gateway configuration.');
  }
  if (status === 429) {
    return new Error('Magento rate limit reached. Please try again shortly.');
  }
  if (typeof status === 'number' && status >= 500) {
    return new Error('Magento integration is temporarily unavailable. Please try again later.');
  }

  const message = payload?.message || payload?.error || payload?.details;

  if (message) {
    const lowercase = String(message).toLowerCase();

    if (lowercase.includes('not connected')) {
      return new Error('Magento is not connected. Please connect and retry.');
    }
    if (lowercase.includes('token') && lowercase.includes('invalid')) {
      return new Error('Invalid Magento token. Verify credentials and retry.');
    }
    if (lowercase.includes('econn') || lowercase.includes('unreachable') || lowercase.includes('timeout')) {
      return new Error('Magento API is unreachable right now.');
    }
    if (lowercase.includes('downstream') || lowercase.includes('crm') || lowercase.includes('billing')) {
      return new Error('CRM/Billing downstream service is unavailable.');
    }

    return new Error(String(message));
  }

  return new Error('Unexpected Magento integration error.');
}

function unwrapResponse<T>(payload: unknown): T {
  const typedPayload = payload as { data?: T };
  return (typedPayload?.data ?? payload) as T;
}

function toListParams(params?: { page?: number; pageSize?: number; search?: string; status?: string }) {
  if (!params) return undefined;

  return {
    currentPage: params.page,
    pageSize: params.pageSize,
    search: params.search,
    status: params.status,
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

export async function connectMagento(input: MagentoConnectInput): Promise<MagentoConnectionStatus> {
  return request<MagentoConnectionStatus>(() => axios.post(`${MAGENTO_API_BASE}/connect`, input));
}

export async function getMagentoConnection(): Promise<MagentoConnectionStatus> {
  return request<MagentoConnectionStatus>(() => axios.get(`${MAGENTO_API_BASE}/connection`));
}

export async function disconnectMagento(): Promise<void> {
  await request<unknown>(() => axios.post(`${MAGENTO_API_BASE}/disconnect`));
}

export async function getMagentoStores(): Promise<MagentoStore[]> {
  return request<MagentoStore[]>(() => axios.get(`${MAGENTO_API_BASE}/stores`));
}

export async function getMagentoProducts(params?: {
  page?: number;
  pageSize?: number;
  search?: string;
}): Promise<MagentoListResponse<MagentoProduct> | MagentoProduct[]> {
  return request<MagentoListResponse<MagentoProduct> | MagentoProduct[]>(() =>
    axios.get(`${MAGENTO_API_BASE}/products`, {
      params: toListParams(params),
    })
  );
}

export async function getMagentoOrders(params?: {
  page?: number;
  pageSize?: number;
  status?: string;
  search?: string;
}): Promise<MagentoListResponse<MagentoOrder> | MagentoOrder[]> {
  return request<MagentoListResponse<MagentoOrder> | MagentoOrder[]>(() =>
    axios.get(`${MAGENTO_API_BASE}/orders`, {
      params: toListParams(params),
    })
  );
}

export async function getMagentoCustomers(params?: {
  page?: number;
  pageSize?: number;
  search?: string;
}): Promise<MagentoListResponse<MagentoCustomer> | MagentoCustomer[]> {
  return request<MagentoListResponse<MagentoCustomer> | MagentoCustomer[]>(() =>
    axios.get(`${MAGENTO_API_BASE}/customers`, {
      params: toListParams(params),
    })
  );
}

export async function sendMagentoGraphql<T = unknown>(input: MagentoGraphqlInput): Promise<T> {
  return request<T>(() => axios.post(`${MAGENTO_API_BASE}/graphql`, input));
}

export async function sendMagentoRest<T = unknown>(input: MagentoRestProxyInput): Promise<T> {
  return request<T>(() => axios.post(`${MAGENTO_API_BASE}/rest`, input));
}

export async function getMagentoDownstreamHealth(): Promise<MagentoDownstreamHealth> {
  return request<MagentoDownstreamHealth>(() => axios.get(`${MAGENTO_API_BASE}/downstream/health`));
}

export async function syncMagentoCustomers(options?: MagentoSyncOptions): Promise<MagentoSyncResult> {
  return request<MagentoSyncResult>(() =>
    axios.post(`${MAGENTO_API_BASE}/sync/customers`, {
      dryRun: options?.dryRun ?? true,
      ...options,
    })
  );
}

export async function syncMagentoOrders(options?: MagentoSyncOptions): Promise<MagentoSyncResult> {
  return request<MagentoSyncResult>(() =>
    axios.post(`${MAGENTO_API_BASE}/sync/orders`, {
      dryRun: options?.dryRun ?? true,
      ...options,
    })
  );
}
