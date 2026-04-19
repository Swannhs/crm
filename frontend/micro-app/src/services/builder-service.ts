import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getForms(params?: Record<string, any>) {
  const response = await axiosInstance.get('/api/form-builder/forms', { params });
  return response.data?.data ?? response.data ?? [];
}

export async function getFormTemplates() {
  const response = await axiosInstance.get('/api/form-builder/templates');
  return response.data?.data ?? response.data ?? [];
}

export async function getFormPreview(id: string) {
  const response = await axiosInstance.get(`/api/form-builder/preview/${id}`);
  return response.data?.data ?? response.data;
}

export async function createForm(data: any) {
  const response = await axiosInstance.post('/api/form-builder/create', data);
  return response.data?.data ?? response.data;
}

export async function getWebsites() {
  const response = await axiosInstance.get('/api/webbuilder');
  return response.data?.data ?? response.data ?? [];
}

export async function getWebsite(id: string) {
  const response = await axiosInstance.get(`/api/webbuilder/${id}`);
  return response.data?.data ?? response.data;
}

export async function createWebsite(data: any) {
  const response = await axiosInstance.post('/api/webbuilder', data);
  return response.data?.data ?? response.data;
}

export async function getWebsitePreviewData(websiteId: string, pageSlug?: string) {
  const url = pageSlug
    ? `/api/webbuilder/preview-data/${websiteId}/page/${pageSlug}`
    : `/api/webbuilder/preview-data/${websiteId}`;
  const response = await axiosInstance.get(url);
  return response.data?.data ?? response.data;
}

export async function getReputationDashboardStats() {
  const response = await axiosInstance.get('/api/reputation/dashboard-stats');
  return response.data?.data ?? response.data ?? {};
}

export const builderService = {
  getForms,
  getFormTemplates,
  getFormPreview,
  createForm,
  getWebsites,
  getWebsite,
  createWebsite,
  getWebsitePreviewData,
  getReputationDashboardStats,
};
