import type { SalesStage, SalesFilters, SalesActivity, SalesOpportunity } from 'src/sections/sales/types';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import {
  getSalesLeads,
  getSalesOrders,
  getSalesSummary,
  getSalesAnalytics,
  getSalesActivities,
  createSalesActivity,
  runMagentoToOdooSync,
  completeSalesActivity,
  getSalesOpportunities,
  createSalesOpportunity,
  linkOrderToOpportunity,
  updateOpportunityStage,
  updateSalesOpportunity,
  previewMagentoToOdooSync,
  getSalesStages,
  deleteSalesActivity,
  createOpportunityNote,
} from 'src/services/sales-dashboard-service';

export const salesDashboardKeys = {
  all: ['sales-dashboard'] as const,
  summary: (filters?: SalesFilters) => [...salesDashboardKeys.all, 'summary', filters ?? {}] as const,
  orders: (filters?: SalesFilters) => [...salesDashboardKeys.all, 'orders', filters ?? {}] as const,
  leads: (filters?: SalesFilters) => [...salesDashboardKeys.all, 'leads', filters ?? {}] as const,
  opportunities: (filters?: SalesFilters) => [...salesDashboardKeys.all, 'opportunities', filters ?? {}] as const,
  activities: (filters?: SalesFilters) => [...salesDashboardKeys.all, 'activities', filters ?? {}] as const,
  analytics: (filters?: SalesFilters) => [...salesDashboardKeys.all, 'analytics', filters ?? {}] as const,
  stages: () => [...salesDashboardKeys.all, 'stages'] as const,
  timeline: (id: string | number) => [...salesDashboardKeys.all, 'timeline', id] as const,
};

export function useSalesStages() {
  return useQuery({ queryKey: salesDashboardKeys.stages(), queryFn: getSalesStages, staleTime: 60 * 60 * 1000 });
}

export function useSalesSummary(filters?: SalesFilters) {
  return useQuery({ queryKey: salesDashboardKeys.summary(filters), queryFn: () => getSalesSummary(filters), staleTime: 30 * 1000 });
}

export function useSalesOrders(filters?: SalesFilters) {
  return useQuery({ queryKey: salesDashboardKeys.orders(filters), queryFn: () => getSalesOrders(filters), staleTime: 30 * 1000 });
}

export function useSalesLeads(filters?: SalesFilters) {
  return useQuery({ queryKey: salesDashboardKeys.leads(filters), queryFn: () => getSalesLeads(filters), staleTime: 30 * 1000 });
}

export function useSalesOpportunities(filters?: SalesFilters) {
  return useQuery({ queryKey: salesDashboardKeys.opportunities(filters), queryFn: () => getSalesOpportunities(filters), staleTime: 30 * 1000 });
}

export function useSalesActivities(filters?: SalesFilters) {
  return useQuery({ queryKey: salesDashboardKeys.activities(filters), queryFn: () => getSalesActivities(filters), staleTime: 30 * 1000 });
}

export function useSalesAnalytics(filters?: SalesFilters) {
  return useQuery({ queryKey: salesDashboardKeys.analytics(filters), queryFn: () => getSalesAnalytics(filters), staleTime: 30 * 1000 });
}

async function invalidateSales(queryClient: ReturnType<typeof useQueryClient>) {
  await Promise.all([
    queryClient.invalidateQueries({ queryKey: ['sales-dashboard', 'summary'] }),
    queryClient.invalidateQueries({ queryKey: ['sales-dashboard', 'orders'] }),
    queryClient.invalidateQueries({ queryKey: ['sales-dashboard', 'leads'] }),
    queryClient.invalidateQueries({ queryKey: ['sales-dashboard', 'opportunities'] }),
    queryClient.invalidateQueries({ queryKey: ['sales-dashboard', 'activities'] }),
    queryClient.invalidateQueries({ queryKey: ['sales-dashboard', 'analytics'] }),
    queryClient.invalidateQueries({ queryKey: ['sales-dashboard', 'timeline'] }),
  ]);
}

export function useCreateSalesOpportunity() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: createSalesOpportunity, onSuccess: async () => invalidateSales(queryClient) });
}

export function useUpdateSalesOpportunity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: Partial<SalesOpportunity> }) => updateSalesOpportunity(id, payload),
    onSuccess: async () => invalidateSales(queryClient),
  });
}

export function useUpdateOpportunityStage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, stage }: { id: string; stage: SalesStage }) => updateOpportunityStage(id, stage),
    onSuccess: async () => invalidateSales(queryClient),
  });
}

export function useCreateSalesActivity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ opportunityId, payload }: { opportunityId: string; payload: { type: SalesActivity['type']; title: string; dueDate?: string } }) =>
      createSalesActivity(opportunityId, payload),
    onSuccess: async () => invalidateSales(queryClient),
  });
}

export function useCompleteSalesActivity() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: completeSalesActivity, onSuccess: async () => invalidateSales(queryClient) });
}

export function useDeleteSalesActivity() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: deleteSalesActivity, onSuccess: async () => invalidateSales(queryClient) });
}

export function useCreateOpportunityNote() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, body }: { id: string | number; body: string }) => createOpportunityNote(id, body),
    onSuccess: async () => invalidateSales(queryClient),
  });
}

export function usePreviewMagentoToOdooSync() {
  return useMutation({ mutationFn: previewMagentoToOdooSync });
}

export function useRunMagentoToOdooSync() {
  const queryClient = useQueryClient();
  return useMutation({ mutationFn: runMagentoToOdooSync, onSuccess: async () => invalidateSales(queryClient) });
}

export function useLinkOrderToOpportunity() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ orderId, opportunityId }: { orderId: string; opportunityId: string }) => linkOrderToOpportunity(orderId, opportunityId),
    onSuccess: async () => invalidateSales(queryClient),
  });
}
