import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getRevenueStats() {
  const response = await axiosInstance.get('/api/billing/v1/stats/revenue');
  return response.data;
}

export async function getPaymentsHistory() {
  const response = await axiosInstance.get('/api/payments/v1/history');
  return response.data;
}

export async function getInvoices() {
  const response = await axiosInstance.get('/api/billing/v1/invoices');
  return response.data;
}

export const financeService = {
  getRevenueStats,
  getPaymentsHistory,
  getInvoices,
};
