import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getOrganizationDetails() {
  const response = await axiosInstance.get('/api/organization/v1/details');
  return response.data?.data ?? response.data;
}

export async function getOrganizationWorkspace() {
  const response = await axiosInstance.get('/org/v1/workspace');
  return response.data?.data ?? response.data;
}

export async function updateOrganization(data: any) {
  const response = await axiosInstance.put('/api/organization/v1/details', data);
  return response.data?.data ?? response.data;
}

export async function getOrganizationSettings(section: 'profile' | 'branding' | 'crm' | 'security') {
  const response = await axiosInstance.get(`/org/v1/settings/${section}`);
  return response.data?.data ?? response.data;
}

export async function updateOrganizationSettings(section: 'profile' | 'branding' | 'crm' | 'security', data: any) {
  const response = await axiosInstance.put(`/org/v1/settings/${section}`, data);
  return response.data?.data ?? response.data;
}

export async function getRoles() {
  const response = await axiosInstance.get('/org/v1/memberships');
  return response.data?.data ?? [];
}

export async function getLocations() {
  const response = await axiosInstance.get('/org/v1/locations');
  return response.data?.data ?? response.data ?? [];
}

export async function createLocation(data: any) {
  const response = await axiosInstance.post('/org/v1/locations', data);
  return response.data?.data ?? response.data;
}

export async function updateLocation(locationId: string, data: any) {
  const response = await axiosInstance.patch(`/org/v1/locations/${locationId}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteLocation(locationId: string) {
  const response = await axiosInstance.delete(`/org/v1/locations/${locationId}`);
  return response.data?.data ?? response.data;
}

export async function getMyMembership() {
  const response = await axiosInstance.get('/org/v1/memberships/me');
  return response.data?.data ?? null;
}

export async function upsertMembership(userId: string, data: any) {
  const response = await axiosInstance.patch(`/org/v1/memberships/${userId}`, data);
  return response.data?.data ?? response.data;
}

export async function removeMembership(userId: string) {
  const response = await axiosInstance.delete(`/org/v1/memberships/${userId}`);
  return response.data?.data ?? response.data;
}

export async function getRbacCatalog() {
  const response = await axiosInstance.get('/org/v1/rbac/catalog');
  return response.data?.data ?? response.data ?? {};
}

export async function getAccessUsers(params?: { search?: string }) {
  const response = await axiosInstance.get('/org/v1/users/access', {
    params: {
      search: params?.search || '',
    },
  });
  return response.data?.data ?? [];
}

export async function searchKeycloakUsers(params?: { search?: string }) {
  const response = await axiosInstance.get('/org/v1/keycloak/users', {
    params: {
      search: params?.search || '',
    },
  });
  return response.data?.data ?? [];
}

export async function createKeycloakUser(data: any) {
  const response = await axiosInstance.post('/org/v1/keycloak/users', data);
  return response.data?.data ?? response.data;
}

export async function syncMembershipToKeycloak(userId: string) {
  const response = await axiosInstance.post(`/org/v1/memberships/${userId}/sync-keycloak`);
  return response.data?.data ?? response.data;
}

export async function getTeams() {
  const response = await axiosInstance.get('/org/v1/teams');
  return response.data?.data ?? [];
}

export async function createTeam(data: any) {
  const response = await axiosInstance.post('/org/v1/teams', data);
  return response.data?.data ?? response.data;
}

export async function updateTeam(teamId: string, data: any) {
  const response = await axiosInstance.patch(`/org/v1/teams/${teamId}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteTeam(teamId: string) {
  const response = await axiosInstance.delete(`/org/v1/teams/${teamId}`);
  return response.data?.data ?? response.data;
}

export async function getCrmPipelines() {
  const response = await axiosInstance.get('/org/v1/crm/pipelines');
  return response.data?.data ?? [];
}

export async function createCrmPipeline(data: any) {
  const response = await axiosInstance.post('/org/v1/crm/pipelines', data);
  return response.data?.data ?? response.data;
}

export async function updateCrmPipeline(pipelineId: string, data: any) {
  const response = await axiosInstance.patch(`/org/v1/crm/pipelines/${pipelineId}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteCrmPipeline(pipelineId: string) {
  const response = await axiosInstance.delete(`/org/v1/crm/pipelines/${pipelineId}`);
  return response.data?.data ?? response.data;
}

export async function getCrmCustomFields() {
  const response = await axiosInstance.get('/org/v1/crm/custom-fields');
  return response.data?.data ?? [];
}

export async function createCrmCustomField(data: any) {
  const response = await axiosInstance.post('/org/v1/crm/custom-fields', data);
  return response.data?.data ?? response.data;
}

export async function updateCrmCustomField(fieldId: string, data: any) {
  const response = await axiosInstance.patch(`/org/v1/crm/custom-fields/${fieldId}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteCrmCustomField(fieldId: string) {
  const response = await axiosInstance.delete(`/org/v1/crm/custom-fields/${fieldId}`);
  return response.data?.data ?? response.data;
}

export async function getCrmAutomationRules() {
  const response = await axiosInstance.get('/org/v1/crm/automation');
  return response.data?.data ?? [];
}

export async function updateCrmAutomationRules(data: { rules: any[] }) {
  const response = await axiosInstance.put('/org/v1/crm/automation', data);
  return response.data?.data ?? response.data;
}

// --- Goals ---
export async function getGoals() {
  const response = await axiosInstance.get('/org/v1/goals');
  return response.data?.data ?? [];
}

export async function createGoal(data: any) {
  const response = await axiosInstance.post('/org/v1/goals', data);
  return response.data?.data ?? response.data;
}

export async function updateGoal(goalId: string, data: any) {
  const response = await axiosInstance.patch(`/org/v1/goals/${goalId}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteGoal(goalId: string) {
  const response = await axiosInstance.delete(`/org/v1/goals/${goalId}`);
  return response.data?.data ?? response.data;
}

export async function completeGoal(goalId: string) {
  const response = await axiosInstance.post(`/org/v1/goals/${goalId}/complete`);
  return response.data?.data ?? response.data;
}

export async function archiveGoal(goalId: string) {
  const response = await axiosInstance.post(`/org/v1/goals/${goalId}/archive`);
  return response.data?.data ?? response.data;
}

// --- Habits ---
export async function getHabits() {
  const response = await axiosInstance.get('/org/v1/habits');
  return response.data?.data ?? [];
}

export async function createHabit(data: any) {
  const response = await axiosInstance.post('/org/v1/habits', data);
  return response.data?.data ?? response.data;
}

export async function updateHabit(habitId: string, data: any) {
  const response = await axiosInstance.patch(`/org/v1/habits/${habitId}`, data);
  return response.data?.data ?? response.data;
}

export async function deleteHabit(habitId: string) {
  const response = await axiosInstance.delete(`/org/v1/habits/${habitId}`);
  return response.data?.data ?? response.data;
}

export async function checkInHabit(habitId: string, date?: string) {
  const response = await axiosInstance.post(`/org/v1/habits/${habitId}/check-in`, { date });
  return response.data?.data ?? response.data;
}

export const organizationService = {
  getOrganizationDetails,
  getOrganizationWorkspace,
  updateOrganization,
  getOrganizationSettings,
  updateOrganizationSettings,
  getRoles,
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  getMyMembership,
  upsertMembership,
  removeMembership,
  getRbacCatalog,
  getAccessUsers,
  searchKeycloakUsers,
  createKeycloakUser,
  syncMembershipToKeycloak,
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
  getCrmPipelines,
  createCrmPipeline,
  updateCrmPipeline,
  deleteCrmPipeline,
  getCrmCustomFields,
  createCrmCustomField,
  updateCrmCustomField,
  deleteCrmCustomField,
  getCrmAutomationRules,
  updateCrmAutomationRules,
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
  completeGoal,
  archiveGoal,
  getHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  checkInHabit,
};
