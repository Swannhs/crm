import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IDocument = {
  id: string;
  name: string;
  type: string;
  file_size?: number;
  status: 'draft' | 'pending' | 'signed' | 'review';
  created_at: string;
  cloud_url?: string;
};

export const documentService = {
  getDocuments: async (params?: any) => {
    const response = await axios.get('/api/documents', { params });
    return response.data?.data ?? response.data ?? [];
  },

  getDocument: async (id: string) => {
    const response = await axios.get(`/api/documents/${id}`);
    return response.data?.data ?? response.data;
  },

  getSharedDocument: async (hashcode: string) => {
    const response = await axios.get(`/api/documents/share/${hashcode}`);
    return response.data?.data ?? response.data;
  },
};
