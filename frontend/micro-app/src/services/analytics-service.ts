import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getDashboardStats() {
  const response = await axios.get('/api/analytics/dashboard');
  return response.data?.data ?? response.data;
}

export async function getRevenueStreams() {
  const response = await axios.get('/api/analytics/revenue-streams');
  return response.data?.data ?? response.data ?? [];
}

export async function getOrderDistribution() {
  const response = await axios.get('/api/analytics/order-distribution');
  return response.data?.data ?? response.data ?? [];
}

export async function getCustomerGrowth() {
  const response = await axios.get('/api/analytics/customer-growth');
  return response.data?.data ?? response.data ?? [];
}

export const analyticsService = {
  getDashboardStats,
  getRevenueStreams,
  getOrderDistribution,
  getCustomerGrowth,
};
