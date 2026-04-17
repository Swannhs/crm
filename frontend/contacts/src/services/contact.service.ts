import api from '../lib/api';

export interface Contact {
  id: string;
  name: string;
  first_name?: string;
  last_name?: string;
  email: string;
  phone?: string;
  status: 'active' | 'inactive' | 'pending';
  type: 'individual' | 'company';
  created_at: string;
}

export const contactService = {
  getContacts: async (q = '') => {
    const response = await api.get<{ data: Contact[] }>(`/crm/v1/contacts`, {
      params: { q }
    });
    return response.data;
  },
  
  getContact: async (id: string) => {
    const response = await api.get<{ data: Contact }>(`/crm/v1/contacts/${id}`);
    return response.data;
  },
  
  createContact: async (data: Partial<Contact>) => {
    const response = await api.post<{ data: Contact }>(`/crm/v1/contacts`, data);
    return response.data;
  }
};

