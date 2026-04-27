import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getOrganizationDetails() {
  const response = await axiosInstance.get('/api/organization/v1/details');
  return response.data?.data ?? response.data;
}

export async function updateOrganization(data: any) {
  const response = await axiosInstance.put('/api/organization/v1/details', data);
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

export const organizationService = {
  getOrganizationDetails,
  updateOrganization,
  getRoles,
  getLocations,
  createLocation,
  getMyMembership,
  upsertMembership,
  removeMembership,
  getRbacCatalog,
  getAccessUsers,
  searchKeycloakUsers,
  createKeycloakUser,
  syncMembershipToKeycloak,
};
