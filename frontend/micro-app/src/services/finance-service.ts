import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getRevenueStats() {
  const response = await axiosInstance.get('/api/invoice/statistics/income');
  return response.data;
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
