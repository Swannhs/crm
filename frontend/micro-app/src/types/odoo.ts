export type OdooConnectionStatus = {
  connected: boolean;
  baseUrl?: string;
  db?: string | null;
  username?: string | null;
  usingApiKey?: boolean;
  credentialSource?: 'env-only' | 'memory';
};

export type OdooConnectInput = {
  baseUrl?: string;
  db?: string;
  username?: string;
  password?: string;
  apiKey?: string;
};

export type OdooContact = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  mobile?: string;
  isCompany?: boolean;
  companyType?: string;
  city?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type OdooLead = {
  id: number;
  name: string;
  partner?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  stage?: string;
  type?: string;
  expectedRevenue?: number;
  probability?: number;
  deadline?: string;
};

export type OdooSalesOrder = {
  id: number;
  name: string;
  partner?: string;
  dateOrder?: string;
  amountTotal?: number;
  state?: string;
  currency?: string;
  clientOrderRef?: string;
};

export type OdooInvoice = {
  id: number;
  name: string;
  partner?: string;
  invoiceDate?: string;
  dueDate?: string;
  amountTotal?: number;
  amountResidual?: number;
  paymentState?: string;
  state?: string;
  currency?: string;
};

export type OdooProduct = {
  id: number;
  name: string;
  default_code?: string;
  barcode?: string;
  list_price?: number;
  standard_price?: number;
  type?: string;
  qty_available?: number;
  virtual_available?: number;
  write_date?: string;
};

export type OdooInventory = {
  product?: string;
  location?: string;
  quantity?: number;
  reservedQuantity?: number;
  availableQuantity?: number;
  updatedAt?: string;
};

export type OdooListParams = {
  page?: number;
  pageSize?: number;
  search?: string;
};

export type OdooSyncOptions = {
  dryRun?: boolean;
  limit?: number;
  since?: string;
  push?: boolean;
};

export type OdooSyncResult = {
  dryRun: boolean;
  source: 'magento';
  target: 'odoo';
  entity: 'customers' | 'orders' | 'all';
  seen: number;
  created?: number;
  updated?: number;
  skipped?: number;
  errors?: Array<{ id?: string | number; message: string }>;
  items?: unknown[];
  message?: string;
};
