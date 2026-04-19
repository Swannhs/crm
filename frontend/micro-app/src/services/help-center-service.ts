import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const helpCenterService = {
  getArticles: async (params?: Record<string, string>) => {
    const response = await axios.get('/api/public/help-center/articles', { params });
    return response.data?.data ?? response.data ?? [];
  },

  getArticle: async (id: string, params?: Record<string, string>) => {
    const response = await axios.get(`/api/public/help-center/articles/${id}`, { params });
    return response.data?.data ?? response.data;
  },
};
