import axios from 'src/utils/axios';

export type DashboardRange = '7d' | '30d' | '90d' | '180d';
export type DashboardMetric = 'revenue' | 'contacts' | 'orders' | 'pipeline' | 'bookings';

function unwrap<T>(payload: unknown): T {
  const typed = payload as { data?: T };
  return (typed?.data ?? payload) as T;
}

export async function getDashboardOverview(range: DashboardRange = '30d') {
  const response = await axios.get('/api/dashboard/overview', { params: { range } });
  return unwrap<any>(response.data);
}

export async function getDashboardGraph(metric: DashboardMetric, range: DashboardRange = '30d') {
  const response = await axios.get('/api/dashboard/graphs', { params: { metric, range } });
  return unwrap<any>(response.data);
}

export async function getDashboardActivity(limit = 12) {
  const response = await axios.get('/api/dashboard/activity', { params: { limit } });
  return unwrap<any[]>(response.data);
}

export async function getDashboardAttention() {
  const response = await axios.get('/api/dashboard/attention');
  return unwrap<any[]>(response.data);
}

export const dashboardService = {
  getOverview: getDashboardOverview,
  getGraph: getDashboardGraph,
  getActivity: getDashboardActivity,
  getAttention: getDashboardAttention,
};
