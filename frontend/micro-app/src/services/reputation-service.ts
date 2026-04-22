import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const reputationService = {
  getOverview: async () => {
    const response = await axios.get('/api/reputation/overview');
    return response.data?.data ?? response.data;
  },

  getReviews: async (params?: any) => {
    const response = await axios.get('/api/reputation/reviews', { params });
    return response.data?.data ?? response.data;
  },

  getReviewRequests: async () => {
    const response = await axios.get('/api/reputation/requests');
    return response.data?.data ?? response.data;
  },

  sendReviewRequest: async (payload: any) => {
    const response = await axios.post('/api/reputation/send-request', payload);
    return response.data?.data ?? response.data;
  },

  updateSettings: async (payload: any) => {
    const response = await axios.post('/api/reputation/settings', payload);
    return response.data?.data ?? response.data;
  },

  connectProvider: async (provider: 'google' | 'facebook') => {
    const response = await axios.post(`/api/reputation/connect/${provider}`);
    return response.data?.data ?? response.data;
  },

  disconnectProvider: async (provider: 'google' | 'facebook') => {
    const response = await axios.post(`/api/reputation/disconnect/${provider}`);
    return response.data?.data ?? response.data;
  },
};
