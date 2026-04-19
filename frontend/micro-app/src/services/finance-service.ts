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

export async function getRevenueStats() {
  const response = await axiosInstance.get('/api/invoice/statistics/income');
  const stats = response.data?.data ?? response.data ?? [];

  if (stats && !Array.isArray(stats)) {
    return {
      totalRevenue: toNumber((stats as any).totalRevenue),
      paid: toNumber((stats as any).paid),
      outstanding: toNumber((stats as any).outstanding),
      byStatus: Array.isArray((stats as any).byStatus) ? (stats as any).byStatus : [],
      invoiceCount: toNumber((stats as any).invoiceCount),
    };
  }

  if (!Array.isArray(stats)) {
    return { totalRevenue: 0, paid: 0, outstanding: 0, byStatus: [] };
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
  };
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
