export type MagentoConnectionStatus = {
  connected: boolean;
  baseUrl?: string;
  storeCode?: string;
  message?: string;
  lastCheckedAt?: string;
};

export type MagentoConnectInput = {
  baseUrl: string;
  accessToken: string;
  storeCode?: string;
};

export type MagentoStore = {
  id?: number;
  code?: string;
  name?: string;
  website_id?: number;
  store_group_id?: number;
  is_active?: number | boolean;
};

export type MagentoProduct = {
  id?: number;
  sku: string;
  name?: string;
  price?: number;
  status?: number;
  type_id?: string;
  visibility?: number;
  created_at?: string;
  updated_at?: string;
  extension_attributes?: Record<string, unknown>;
  custom_attributes?: Array<{
    attribute_code: string;
    value: unknown;
  }>;
};

export type MagentoCustomer = {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
  created_at?: string;
  updated_at?: string;
  addresses?: Array<Record<string, unknown>>;
};

export type MagentoOrder = {
  entity_id: number;
  increment_id?: string;
  customer_id?: number;
  customer_email?: string;
  customer_firstname?: string;
  customer_lastname?: string;
  status?: string;
  state?: string;
  grand_total?: number | string;
  order_currency_code?: string;
  created_at?: string;
  updated_at?: string;
  items?: Array<{
    item_id?: number;
    sku?: string;
    name?: string;
    qty_ordered?: number;
    price?: number | string;
    row_total?: number | string;
  }>;
  payment?: Record<string, unknown>;
};

export type MagentoListResponse<T> = {
  items: T[];
  total_count?: number;
  search_criteria?: unknown;
};

export type MagentoDownstreamHealth = {
  crm?: {
    ok: boolean;
    status?: number;
    message?: string;
  };
  billing?: {
    ok: boolean;
    status?: number;
    message?: string;
  };
};

export type MagentoSyncOptions = {
  dryRun?: boolean;
  limit?: number;
  since?: string;
  push?: boolean;
};

export type MagentoSyncResult = {
  dryRun: boolean;
  entity: 'customers' | 'orders';
  seen: number;
  pushed?: number;
  skipped?: number;
  errors?: Array<{
    id?: string | number;
    message: string;
  }>;
  items?: unknown[];
  message?: string;
};

export type MagentoRestProxyInput = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  query?: Record<string, unknown>;
  body?: unknown;
};

export type MagentoGraphqlInput = {
  query: string;
  variables?: Record<string, unknown>;
};
