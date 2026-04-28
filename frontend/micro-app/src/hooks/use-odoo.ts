import type { OdooListParams, OdooSyncOptions, OdooConnectInput } from 'src/types/odoo';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
  connectOdoo,
  getOdooLeads,
  disconnectOdoo,
  getOdooContacts,
  getOdooInvoices,
  getOdooProducts,
  getOdooCompanies,
  getOdooInventory,
  getOdooConnection,
  getOdooSalesOrders,
  getOdooOpportunities,
  syncMagentoAllToOdoo,
  syncMagentoOrdersToOdoo,
  syncMagentoCustomersToOdoo,
} from 'src/services/odoo-service';

export const odooKeys = {
  all: ['odoo'] as const,
  connection: () => [...odooKeys.all, 'connection'] as const,
  contacts: (params?: OdooListParams) => [...odooKeys.all, 'contacts', params ?? null] as const,
  companies: (params?: OdooListParams) => [...odooKeys.all, 'companies', params ?? null] as const,
  leads: (params?: OdooListParams) => [...odooKeys.all, 'leads', params ?? null] as const,
  opportunities: (params?: OdooListParams) => [...odooKeys.all, 'opportunities', params ?? null] as const,
  salesOrders: (params?: OdooListParams) => [...odooKeys.all, 'sales-orders', params ?? null] as const,
  invoices: (params?: OdooListParams) => [...odooKeys.all, 'invoices', params ?? null] as const,
  products: (params?: OdooListParams) => [...odooKeys.all, 'products', params ?? null] as const,
  inventory: (params?: OdooListParams) => [...odooKeys.all, 'inventory', params ?? null] as const,
  sync: () => [...odooKeys.all, 'sync'] as const,
};

const DEFAULT_STALE_TIME = 60 * 1000;

export function useOdooConnection() {
  return useQuery({
    queryKey: odooKeys.connection(),
    queryFn: getOdooConnection,
    staleTime: 15 * 1000,
  });
}

function makeListQuery<T>(key: readonly unknown[], queryFn: () => Promise<T>, enabled = true) {
  return useQuery({ queryKey: key, queryFn, staleTime: DEFAULT_STALE_TIME, enabled });
}

function useOdooConnected() {
  const connection = useOdooConnection();
  return connection.data?.connected ?? false;
}

export function useOdooContacts(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.contacts(params), () => getOdooContacts(params), connected);
}

export function useOdooCompanies(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.companies(params), () => getOdooCompanies(params), connected);
}

export function useOdooLeads(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.leads(params), () => getOdooLeads(params), connected);
}

export function useOdooOpportunities(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.opportunities(params), () => getOdooOpportunities(params), connected);
}

export function useOdooSalesOrders(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.salesOrders(params), () => getOdooSalesOrders(params), connected);
}

export function useOdooInvoices(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.invoices(params), () => getOdooInvoices(params), connected);
}

export function useOdooProducts(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.products(params), () => getOdooProducts(params), connected);
}

export function useOdooInventory(params?: OdooListParams) {
  const connected = useOdooConnected();
  return makeListQuery(odooKeys.inventory(params), () => getOdooInventory(params), connected);
}

export function useConnectOdooMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: OdooConnectInput) => connectOdoo(input),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.all });
    },
  });
}

export function useDisconnectOdooMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => disconnectOdoo(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.all });
    },
  });
}

export function useSyncMagentoCustomersToOdooMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (options?: OdooSyncOptions) =>
      syncMagentoCustomersToOdoo({ ...options, dryRun: options?.dryRun ?? true }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.sync() });
    },
  });
}

export function useSyncMagentoOrdersToOdooMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (options?: OdooSyncOptions) => syncMagentoOrdersToOdoo({ ...options, dryRun: options?.dryRun ?? true }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.sync() });
    },
  });
}

export function useSyncMagentoAllToOdooMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (options?: OdooSyncOptions) => syncMagentoAllToOdoo({ ...options, dryRun: options?.dryRun ?? true }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.sync() });
    },
  });
}
