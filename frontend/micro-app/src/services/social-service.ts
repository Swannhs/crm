import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const socialService = {
  getAccounts: async () => {
    const response = await axios.get('/api/social/accounts');
    return response.data?.data ?? response.data;
  },

  getPosts: async (params?: any) => {
    const response = await axios.get('/api/social/posts', { params });
    return response.data?.data ?? response.data;
  },

  createPost: async (payload: any) => {
    const response = await axios.post('/api/social/posts', payload);
    return response.data?.data ?? response.data;
  },

  connectAccount: async (platform: string) => {
    const response = await axios.post(`/api/social/connect/${platform}`);
    return response.data?.data ?? response.data;
  },

  disconnectAccount: async (accountId: string) => {
    const response = await axios.delete(`/api/social/accounts/${accountId}`);
    return response.data?.data ?? response.data;
  },

  getAnalytics: async () => {
    const response = await axios.get('/api/social/analytics');
    return response.data?.data ?? response.data;
  },
};
