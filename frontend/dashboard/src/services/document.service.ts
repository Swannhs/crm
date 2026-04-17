import api from '../lib/api';

export interface Document {
  id: string;
  name: string;
  type: string;
  sizeBytes: number;
  status: 'draft' | 'pending' | 'signed' | 'review';
  createdAt: string;
}

export const documentService = {
  getDocuments: async () => {
    const response = await api.get<{ data: Document[] }>(`/api/document`);
    return response.data;
  }
};
