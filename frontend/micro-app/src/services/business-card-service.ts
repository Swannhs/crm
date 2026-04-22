import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const businessCardService = {
  getCard: async () => {
    const response = await axios.get('/api/business-card/default');
    return response.data?.data ?? response.data;
  },

  updateCard: async (id: string, data: any) => {
    const response = await axios.put(`/api/business-card/${id}`, data);
    return response.data?.data ?? response.data;
  },

  createCard: async (data: any) => {
    const response = await axios.post('/api/business-card', data);
    return response.data?.data ?? response.data;
  },

  scanCard: async (image: File) => {
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post('/api/businessCardOcr/scan', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data?.data ?? response.data;
  },

  saveScannedContact: async (data: any) => {
    const response = await axios.post('/api/businessCardOcr/save-contact', data);
    return response.data?.data ?? response.data;
  },
};
