import api from '../lib/api';

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status: 'active' | 'inactive' | 'lead';
  createdAt: string;
}

export const contactService = {
  getContacts: async (page = 1, limit = 20) => {
    const response = await api.get<{ data: Contact[], total: number }>(`/v1/contacts`, {
      params: { page, limit }
    });
    return response.data;
  },
  
  getContact: async (id: string) => {
    const response = await api.get<{ data: Contact }>(`/v1/contacts/${id}`);
    return response.data;
  },
  
  createContact: async (data: Partial<Contact>) => {
    const response = await api.post<{ data: Contact }>(`/v1/contacts`, data);
    return response.data;
  }
};
