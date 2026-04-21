import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

function toNumber(value: unknown): number {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  if (typeof value === 'bigint') return Number(value);
  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

export type RevenueStats = {
  totalRevenue: number;
  paid: number;
  outstanding: number;
  byStatus: any[];
  invoiceCount: number;
};

export async function getRevenueStats(): Promise<RevenueStats> {
  try {
    const response = await axiosInstance.get('/api/invoice/statistics/income');
    
    const stats = response.data?.data ?? response.data ?? [];

    if (stats && !Array.isArray(stats)) {
      const processed = {
        totalRevenue: toNumber((stats as any).totalRevenue),
        paid: toNumber((stats as any).paid),
        outstanding: toNumber((stats as any).outstanding),
        byStatus: Array.isArray((stats as any).byStatus) ? (stats as any).byStatus : [],
        invoiceCount: toNumber((stats as any).invoiceCount),
      };
      return processed;
    }

  if (!Array.isArray(stats)) {
    return { totalRevenue: 0, paid: 0, outstanding: 0, byStatus: [], invoiceCount: 0 };
  }

  const totalRevenue = stats.reduce((sum: number, item: any) => sum + toNumber(item?._sum?.total_cents), 0) / 100;
  const paid = stats
    .filter((item: any) => String(item?.status).toLowerCase() === 'paid')
    .reduce((sum: number, item: any) => sum + toNumber(item?._sum?.total_cents), 0) / 100;

    return {
      totalRevenue,
      paid,
      outstanding: Math.max(totalRevenue - paid, 0),
      byStatus: stats,
      invoiceCount: stats.reduce((sum: number, item: any) => sum + toNumber(item?._count?.status || item?._count?._all || 0), 0),
    };
  } catch (error) {
    console.error('[FinanceService] Failed to fetch revenue stats:', error);
    throw error;
  }
}

export async function getPaymentsHistory() {
  const response = await axiosInstance.get('/api/payments');
  return response.data?.data ?? response.data;
}

export async function getInvoices() {
  const response = await axiosInstance.get('/api/invoice');
  return response.data?.data ?? response.data;
}

export const financeService = {
  getRevenueStats,
  getPaymentsHistory,
  getInvoices,
};
