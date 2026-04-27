import { billingService } from 'src/services/billing-service';

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
  byStatus: Record<string, number>;
  invoiceCount: number;
};

export async function getRevenueStats(): Promise<RevenueStats> {
  try {
    const { data: invoices } = await billingService.getInvoices();
    if (!Array.isArray(invoices)) {
      return { totalRevenue: 0, paid: 0, outstanding: 0, byStatus: {}, invoiceCount: 0 };
    }

    const totalRevenue = invoices.reduce((sum: number, item: any) => sum + toNumber(item?.totalAmount ?? item?.totalDue), 0);
    const paid = invoices.reduce((sum: number, item: any) => sum + toNumber(item?.paidAmount), 0);
    const byStatus = invoices.reduce((acc: Record<string, number>, item: any) => {
      const key = String(item?.status || 'unknown').toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return {
      totalRevenue,
      paid,
      outstanding: Math.max(totalRevenue - paid, 0),
      byStatus,
      invoiceCount: invoices.length,
    };
  } catch (error) {
    console.error('[FinanceService] Failed to fetch revenue stats:', error);
    throw error;
  }
}

export async function getPaymentsHistory() {
  const { data: invoices } = await billingService.getInvoices();
  return invoices
    .filter((item: any) => toNumber(item?.paidAmount) > 0)
    .map((item: any) => ({
      id: item.id,
      description: item.no || item.id,
      amount: toNumber(item.paidAmount),
      status: item.deliveryStatus || item.status,
      customerName: item.customerName,
      date: item.createdAt || item.dueDate,
    }));
}

export async function getInvoices() {
  return billingService.getInvoices();
}

export const financeService = {
  getRevenueStats,
  getPaymentsHistory,
  getInvoices,
};
