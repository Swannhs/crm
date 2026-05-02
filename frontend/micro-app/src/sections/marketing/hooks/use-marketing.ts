import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { marketingService } from '../services/marketing-service';
import { MarketingCampaign, MarketingSegment, MarketingTemplate } from '../types';

export function useMarketingSummary() {
  return useQuery({
    queryKey: ['marketing', 'summary'],
    queryFn: marketingService.getSummary,
  });
}

export function useMarketingActivity() {
  return useQuery({
    queryKey: ['marketing', 'activity'],
    queryFn: marketingService.getActivity,
  });
}

export function useMarketingCampaigns() {
  return useQuery({
    queryKey: ['marketing', 'campaigns'],
    queryFn: marketingService.getCampaigns,
  });
}

export function useMarketingCampaign(id: string) {
  return useQuery({
    queryKey: ['marketing', 'campaign', id],
    queryFn: () => marketingService.getCampaign(id),
    enabled: !!id,
  });
}

export function useMarketingSegments() {
  return useQuery({
    queryKey: ['marketing', 'segments'],
    queryFn: marketingService.getSegments,
  });
}

export function useMarketingTemplates() {
  return useQuery({
    queryKey: ['marketing', 'templates'],
    queryFn: marketingService.getTemplates,
  });
}

export function useCreateCampaign() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<MarketingCampaign>) => marketingService.createCampaign(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketing', 'campaigns'] });
    },
  });
}

export function useUpdateCampaign() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<MarketingCampaign> }) => 
      marketingService.updateCampaign(id, data),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['marketing', 'campaigns'] });
      queryClient.invalidateQueries({ queryKey: ['marketing', 'campaign', variables.id] });
    },
  });
}

export function useDeleteCampaign() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => marketingService.deleteCampaign(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketing', 'campaigns'] });
    },
  });
}

// --- Segment Mutations ---

export function useCreateSegment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<MarketingSegment>) => marketingService.createSegment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketing', 'segments'] });
    },
  });
}

export function useUpdateSegment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<MarketingSegment> }) => 
      marketingService.updateSegment(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketing', 'segments'] });
    },
  });
}

export function useDeleteSegment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => marketingService.deleteSegment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['marketing', 'segments'] });
    },
  });
}
