import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const publicCommerceService = {
  getProducts: async (orgId: string) => {
    const response = await axios.get('/api/shop/public/products', {
      headers: { 'X-Org-Id': orgId }
    });
    return response.data?.data ?? response.data ?? [];
  },

  getProduct: async (orgId: string, productId: string) => {
    const response = await axios.get(`/api/shop/public/products/${productId}`, {
      headers: { 'X-Org-Id': orgId }
    });
    return response.data?.data ?? response.data;
  },

  signup: async (orgId: string, data: any) => {
    const response = await axios.post('/api/shop/public/auth/signup', data, {
      headers: { 'X-Org-Id': orgId }
    });
    return response.data?.data ?? response.data;
  },

  login: async (orgId: string, data: any) => {
    const response = await axios.post('/api/shop/public/auth/login', data, {
      headers: { 'X-Org-Id': orgId }
    });
    return response.data?.data ?? response.data;
  },
};
