import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getOrganizationDetails() {
  const response = await axiosInstance.get('/api/organization/v1/details');
  return response.data;
}

export async function updateOrganization(data: any) {
  const response = await axiosInstance.put('/api/organization/v1/details', data);
  return response.data;
}

export async function getRoles() {
  const response = await axiosInstance.get('/api/organization/v1/roles');
  return response.data;
}

export const organizationService = {
  getOrganizationDetails,
  updateOrganization,
  getRoles,
};
