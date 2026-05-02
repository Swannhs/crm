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
  overdue: number;
  byStatus: Record<string, number>;
  invoiceCount: number;
};

export async function getRevenueStats(): Promise<RevenueStats> {
  try {
    const summary = await billingService.getSummary();
    
    return {
      totalRevenue: toNumber(summary?.totalInvoiced ?? 0),
      paid: toNumber(summary?.totalPaid ?? 0),
      outstanding: toNumber(summary?.totalOutstanding ?? 0),
      overdue: toNumber(summary?.totalOverdueValue ?? 0),
      byStatus: {}, // Status breakdown not provided by summary currently
      invoiceCount: toNumber(summary?.invoiceCount ?? 0),
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
