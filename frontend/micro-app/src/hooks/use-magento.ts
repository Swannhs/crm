import type {
  MagentoSyncOptions,
  MagentoConnectInput,
  MagentoGraphqlInput,
  MagentoRestProxyInput,
} from 'src/types/magento';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
  connectMagento,
  sendMagentoRest,
  getMagentoOrders,
  getMagentoStores,
  disconnectMagento,
  syncMagentoOrders,
  getMagentoProducts,
  sendMagentoGraphql,
  getMagentoCustomers,
  getMagentoConnection,
  syncMagentoCustomers,
  getMagentoDownstreamHealth,
} from 'src/services/magento-service';

export const magentoKeys = {
  all: ['magento'] as const,
  connection: () => [...magentoKeys.all, 'connection'] as const,
  stores: () => [...magentoKeys.all, 'stores'] as const,
  products: (params?: unknown) => [...magentoKeys.all, 'products', params ?? null] as const,
  orders: (params?: unknown) => [...magentoKeys.all, 'orders', params ?? null] as const,
  customers: (params?: unknown) => [...magentoKeys.all, 'customers', params ?? null] as const,
  downstreamHealth: () => [...magentoKeys.all, 'downstream-health'] as const,
  sync: () => [...magentoKeys.all, 'sync'] as const,
};

const DEFAULT_STALE_TIME = 60 * 1000;

export function useMagentoConnection() {
  return useQuery({
    queryKey: magentoKeys.connection(),
    queryFn: getMagentoConnection,
    staleTime: 15 * 1000,
  });
}

export function useMagentoStores() {
  return useQuery({
    queryKey: magentoKeys.stores(),
    queryFn: getMagentoStores,
    staleTime: 5 * 60 * 1000,
  });
}

export function useMagentoProducts(params?: { page?: number; pageSize?: number; search?: string }) {
  const connectionQuery = useMagentoConnection();

  return useQuery({
    queryKey: magentoKeys.products(params),
    queryFn: () => getMagentoProducts(params),
    staleTime: DEFAULT_STALE_TIME,
    enabled: connectionQuery.data?.connected ?? false,
  });
}

export function useMagentoOrders(params?: {
  page?: number;
  pageSize?: number;
  status?: string;
  search?: string;
}) {
  const connectionQuery = useMagentoConnection();

  return useQuery({
    queryKey: magentoKeys.orders(params),
    queryFn: () => getMagentoOrders(params),
    staleTime: DEFAULT_STALE_TIME,
    enabled: connectionQuery.data?.connected ?? false,
  });
}

export function useMagentoCustomers(params?: { page?: number; pageSize?: number; search?: string }) {
  const connectionQuery = useMagentoConnection();

  return useQuery({
    queryKey: magentoKeys.customers(params),
    queryFn: () => getMagentoCustomers(params),
    staleTime: DEFAULT_STALE_TIME,
    enabled: connectionQuery.data?.connected ?? false,
  });
}

export function useMagentoDownstreamHealth() {
  return useQuery({
    queryKey: magentoKeys.downstreamHealth(),
    queryFn: getMagentoDownstreamHealth,
    staleTime: 30 * 1000,
  });
}

export function useConnectMagentoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: MagentoConnectInput) => connectMagento(input),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: magentoKeys.connection() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.stores() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.products() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.orders() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.customers() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.downstreamHealth() }),
      ]);
    },
  });
}

export function useDisconnectMagentoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: disconnectMagento,
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: magentoKeys.connection() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.stores() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.products() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.orders() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.customers() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.downstreamHealth() }),
      ]);
    },
  });
}

export function useSyncMagentoCustomersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (options?: MagentoSyncOptions) => syncMagentoCustomers({ dryRun: true, ...options }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: magentoKeys.sync() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.connection() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.customers() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.downstreamHealth() }),
      ]);
    },
  });
}

export function useSyncMagentoOrdersMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (options?: MagentoSyncOptions) => syncMagentoOrders({ dryRun: true, ...options }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: magentoKeys.sync() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.connection() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.orders() }),
        queryClient.invalidateQueries({ queryKey: magentoKeys.downstreamHealth() }),
      ]);
    },
  });
}

export function useMagentoGraphqlMutation<T = unknown>() {
  return useMutation({
    mutationFn: (input: MagentoGraphqlInput) => sendMagentoGraphql<T>(input),
  });
}

export function useMagentoRestMutation<T = unknown>() {
  return useMutation({
    mutationFn: (input: MagentoRestProxyInput) => sendMagentoRest<T>(input),
  });
}
