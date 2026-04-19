import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getCampaigns() {
  const response = await axiosInstance.get('/api/marketing/v1/campaigns');
  return response.data?.data ?? response.data ?? [];
}

export async function getOptinForms() {
  const response = await axiosInstance.get('/api/marketing/v1/optin-forms');
  return response.data?.data ?? response.data ?? [];
}

export async function createCampaign(data: any) {
  const response = await axiosInstance.post('/api/marketing/v1/campaigns', data);
  return response.data;
}

export async function getAutomations() {
  const response = await axiosInstance.get('/api/marketing/v1/automations');
  return response.data?.data ?? response.data ?? [];
}

export async function getWorkflowWorkspaces() {
  const response = await axiosInstance.get('/api/workflow-workspace');
  return response.data?.data ?? response.data ?? [];
}

export async function getWorkflowById(workflowId: string) {
  const response = await axiosInstance.get('/api/workflow/getById', { params: { id: workflowId } });
  return response.data?.data ?? response.data;
}

export async function getWorkflowActivity(workflowId: string) {
  const response = await axiosInstance.get('/api/workflow/workflow-activity', {
    params: { workflowId },
  });
  return response.data?.data ?? response.data ?? [];
}

export const marketingService = {
  getCampaigns,
  getOptinForms,
  createCampaign,
  getAutomations,
  getWorkflowWorkspaces,
  getWorkflowById,
  getWorkflowActivity,
};
