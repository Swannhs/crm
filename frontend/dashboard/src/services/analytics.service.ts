import api from '../lib/api';

export interface AnalyticMetric {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
}

export interface ChartData {
  label: string;
  value: number;
}

export const analyticsService = {
  getCoreMetrics: async () => {
    const response = await api.get<{ data: AnalyticMetric[] }>(`/v1/analytics/metrics`);
    return response.data;
  },
  
  getRevenueData: async (period: string) => {
    const response = await api.get<{ data: ChartData[] }>(`/v1/analytics/revenue`, {
      params: { period }
    });
    return response.data;
  },
  
  getRetentionStats: async () => {
    const response = await api.get<{ data: any }>(`/v1/analytics/retention`);
    return response.data;
  }
};
