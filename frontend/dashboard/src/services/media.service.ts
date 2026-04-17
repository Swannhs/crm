import api from '../lib/api';

export interface MediaAsset {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video' | 'pdf' | 'document';
  size: string;
  createdAt: string;
}

export const mediaService = {
  getAssets: async (type?: string) => {
    const response = await api.get<{ data: MediaAsset[] }>(`/v1/media`, {
      params: { type }
    });
    return response.data;
  },
  
  uploadAsset: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post<{ data: MediaAsset }>(`/v1/media/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  },
  
  deleteAsset: async (id: string) => {
    const response = await api.delete(`/v1/media/${id}`);
    return response.data;
  }
};
