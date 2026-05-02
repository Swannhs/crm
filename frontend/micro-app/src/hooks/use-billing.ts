import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { billingService } from 'src/services/billing-service';

export function useInvoices(params?: any) {
  return useQuery({
    queryKey: ['invoices', params],
    queryFn: () => billingService.getInvoices(params),
  });
}

export function useInvoice(id: string) {
  return useQuery({
    queryKey: ['invoice', id],
    queryFn: () => billingService.getInvoice(id),
    enabled: !!id,
  });
}

export function useBillingSummary() {
  return useQuery({
    queryKey: ['billing-summary'],
    queryFn: () => billingService.getSummary(),
  });
}

export function useBillingGraph(months: number = 6) {
  return useQuery({
    queryKey: ['billing-graph', months],
    queryFn: () => billingService.getGraph(months),
  });
}

export function useBillingReconciliation() {
  return useQuery({
    queryKey: ['billing-reconciliation'],
    queryFn: () => billingService.getReconciliation(),
  });
}

export function usePostInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => billingService.postInvoice(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] });
      queryClient.invalidateQueries({ queryKey: ['billing-summary'] });
    },
  });
}

export function useDeleteInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => billingService.deleteInvoice(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invoices'] });
      queryClient.invalidateQueries({ queryKey: ['billing-summary'] });
    },
  });
}
