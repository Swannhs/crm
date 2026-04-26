import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  connectOdoo,
  disconnectOdoo,
  getOdooCompanies,
  getOdooConnection,
  getOdooContacts,
  getOdooInventory,
  getOdooInvoices,
  getOdooLeads,
  getOdooOpportunities,
  getOdooProducts,
  getOdooSalesOrders,
  syncMagentoAllToOdoo,
  syncMagentoCustomersToOdoo,
  syncMagentoOrdersToOdoo,
} from 'src/services/odoo-service';
import type { OdooConnectInput, OdooListParams, OdooSyncOptions } from 'src/types/odoo';

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

export function useOdooContacts(params?: OdooListParams) {
  return makeListQuery(odooKeys.contacts(params), () => getOdooContacts(params));
}

export function useOdooCompanies(params?: OdooListParams) {
  return makeListQuery(odooKeys.companies(params), () => getOdooCompanies(params));
}

export function useOdooLeads(params?: OdooListParams) {
  return makeListQuery(odooKeys.leads(params), () => getOdooLeads(params));
}

export function useOdooOpportunities(params?: OdooListParams) {
  return makeListQuery(odooKeys.opportunities(params), () => getOdooOpportunities(params));
}

export function useOdooSalesOrders(params?: OdooListParams) {
  return makeListQuery(odooKeys.salesOrders(params), () => getOdooSalesOrders(params));
}

export function useOdooInvoices(params?: OdooListParams) {
  return makeListQuery(odooKeys.invoices(params), () => getOdooInvoices(params));
}

export function useOdooProducts(params?: OdooListParams) {
  return makeListQuery(odooKeys.products(params), () => getOdooProducts(params));
}

export function useOdooInventory(params?: OdooListParams) {
  return makeListQuery(odooKeys.inventory(params), () => getOdooInventory(params));
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
    mutationFn: (options?: OdooSyncOptions) => syncMagentoCustomersToOdoo({ dryRun: true, ...options }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.sync() });
    },
  });
}

export function useSyncMagentoOrdersToOdooMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (options?: OdooSyncOptions) => syncMagentoOrdersToOdoo({ dryRun: true, ...options }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.sync() });
    },
  });
}

export function useSyncMagentoAllToOdooMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (options?: OdooSyncOptions) => syncMagentoAllToOdoo({ dryRun: true, ...options }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: odooKeys.sync() });
    },
  });
}
