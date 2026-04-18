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
  getDocuments: async () => {
    const response = await axios.get('/api/document');
    return response.data;
  },
};
