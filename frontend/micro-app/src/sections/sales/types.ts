export type SalesStage = 'new' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';

export type SalesSource = 'odoo' | 'magento' | 'manual';

export type SalesPriority = 'low' | 'medium' | 'high';

export type SalesFilters = {
  range?: '7d' | '30d' | '90d' | '180d' | 'custom';
  from?: string;
  to?: string;
  ownerId?: string;
  stage?: string;
  source?: string;
  status?: string;
  search?: string;
};

export type SalesSummary = {
  totalOrders?: number;
  totalRevenue?: number;
  avgOrderValue?: number;
  hotLeads?: number;
  opportunities?: number;
  opportunityCount?: number;
  pipelineValue?: number;
  weightedForecast?: number;
  weightedValue?: number;
  wonValue?: number;
  lostValue?: number;
  archivedValue?: number;
  openCount?: number;
  wonCount?: number;
  lostCount?: number;
  archivedCount?: number;
  winRate?: number;
  sources?: {
    magentoOrders?: number;
    odooOrders?: number;
  };
};

export type SalesOpportunity = {
  id: string;
  name: string;
  customerName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  stage: SalesStage;
  stageId?: number;
  odooId?: number;
  probability?: number;
  expectedRevenue?: number;
  weightedValue?: number;
  recurringRevenue?: number;
  assignedTo?: string;
  priority?: SalesPriority;
  source: SalesSource;
  status?: SalesStage;
  expectedCloseDate?: string;
  createdAt?: string;
  updatedAt?: string;
  nextActivity?: {
    id: string;
    type: string;
    title: string;
    dueDate?: string;
    overdue?: boolean;
    state?: string;
  };
  linkedMagentoCustomerId?: string;
  linkedMagentoOrderIds?: string[];
};

export type SalesLeadRow = {
  id: string;
  name: string;
  stage: string;
  priority?: string;
  expectedRevenue?: number;
  type: string;
  email?: string;
  phone?: string;
  source?: SalesSource;
  createdAt?: string;
};

export type SalesOrderRow = {
  id: string;
  ref: string;
  customer: string;
  amount?: number;
  status: string;
  date?: string;
  source: 'magento' | 'odoo';
  linkedOpportunityId?: string;
};

export type SalesActivity = {
  id: string;
  odooId?: number;
  opportunityId?: string;
  contactId?: string;
  type: 'call' | 'email' | 'meeting' | 'todo' | 'note';
  title: string;
  note?: string;
  dueDate?: string;
  completed?: boolean;
  state?: string;
  assignedTo?: string;
  createdAt?: string;
};

export type SalesAnalytics = {
  revenueTrend?: {
    categories: string[];
    series: Array<{ name: string; data: number[] }>;
  };
  pipelineByStage?: Array<{ stage: SalesStage; value: number; count: number }>;
  funnel?: Array<{ label: string; value: number }>;
  sourceBreakdown?: Array<{ source: SalesSource; value: number }>;
  winLoss?: Array<{ label: string; value: number }>;
};

export type SyncPreview = {
  ordersToCreate?: number;
  ordersToUpdate?: number;
  customersToCreate?: number;
  customersToLink?: number;
  opportunitiesToCreate?: number;
  opportunitiesToUpdate?: number;
  invoicesAffected?: number;
  warnings?: string[];
  errors?: string[];
  raw?: unknown;
};

export type SyncResult = {
  success?: boolean;
  syncedOrders?: number;
  createdOpportunities?: number;
  linkedCustomers?: number;
  warnings?: string[];
  errors?: string[];
  raw?: unknown;
};
