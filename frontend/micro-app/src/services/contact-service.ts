import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IContact = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  status: string;
  contactType: string[];
  photo?: string;
  createdAt: string;
};

export const contactService = {
  getContacts: async (params?: any) => {
    const response = await axios.get('/api/contact/get', { params });
    return response.data;
  },

  getContact: async (id: string) => {
    const response = await axios.get(`/api/contact/getById/${id}`);
    return response.data;
  },

  createContact: async (data: any) => {
    const response = await axios.post('/api/contact/add', data);
    return response.data;
  },

  updateContact: async (id: string, data: any) => {
    const response = await axios.put(`/api/contact/update/${id}`, data);
    return response.data;
  },

  deleteContact: async (ids: string[]) => {
    const response = await axios.delete('/api/contact/delete', { data: { ids } });
    return response.data;
  },
};
