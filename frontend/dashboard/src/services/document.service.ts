import api from '../lib/api';

export interface Document {
  id: string;
  name: string;
  type: string;
  file_size?: number;
  status: 'draft' | 'pending' | 'signed' | 'review';
  created_at: string;
  cloud_url?: string;
}

export const documentService = {
  getDocuments: async () => {
    const response = await api.get<{ data: Document[] }>(`/api/document`);
    return response.data;
  }
};
