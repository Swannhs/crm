import { useQuery } from '@tanstack/react-query';

import { getSalesLeads, getSalesOrders, getSalesSummary } from 'src/services/sales-dashboard-service';

export const salesDashboardKeys = {
  all: ['sales-dashboard'] as const,
  summary: () => [...salesDashboardKeys.all, 'summary'] as const,
  orders: () => [...salesDashboardKeys.all, 'orders'] as const,
  leads: () => [...salesDashboardKeys.all, 'leads'] as const,
};

export function useSalesSummary() {
  return useQuery({
    queryKey: salesDashboardKeys.summary(),
    queryFn: getSalesSummary,
    staleTime: 30 * 1000,
  });
}

export function useSalesOrders() {
  return useQuery({
    queryKey: salesDashboardKeys.orders(),
    queryFn: getSalesOrders,
    staleTime: 30 * 1000,
  });
}

export function useSalesLeads() {
  return useQuery({
    queryKey: salesDashboardKeys.leads(),
    queryFn: getSalesLeads,
    staleTime: 30 * 1000,
  });
}
