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
  return [];
}

export const organizationService = {
  getOrganizationDetails,
  updateOrganization,
  getRoles,
};
