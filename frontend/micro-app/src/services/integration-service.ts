import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const integrationService = {
  generateAdpToken: async () => {
    const response = await axios.post('/api/adp/generate-token');
    return response.data?.data ?? response.data;
  },

  getAdpStatus: async () => {
    const response = await axios.get('/api/adp/status');
    return response.data?.data ?? response.data;
  },

  disconnectAdp: async () => {
    const response = await axios.post('/api/adp/disconnect');
    return response.data?.data ?? response.data;
  },
};
