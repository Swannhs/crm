import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IContact = {
  _id: string;
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  status: string;
  contactType: string[];
  photo?: string;
  createdAt: string;
};

const ODOO_WRITE_DEPRECATED_MESSAGE = 'Odoo now owns this workflow. Manage it in Odoo.';

const normalizeOdooContact = (contact: any): IContact => {
  const id = String(contact?.id ?? contact?._id ?? '');
  return {
    _id: id,
    id,
    fullName: contact?.name ?? contact?.fullName ?? 'Unnamed contact',
    email: contact?.email ?? '',
    phone: contact?.phone ?? contact?.mobile ?? '',
    status: 'active',
    contactType: [contact?.isCompany ? 'Company' : 'Client'],
    createdAt: contact?.createdAt ?? contact?.create_date ?? new Date().toISOString(),
  };
};

export const contactService = {
  getContacts: async (params?: any) => {
    const response = await axios.get('/api/odoo/contacts', {
      params: {
        page: params?.page,
        pageSize: params?.pageSize,
        search: params?.search ?? params?.q ?? '',
      },
    });
    const contacts = Array.isArray(response.data?.data) ? response.data.data : [];
    return contacts.map(normalizeOdooContact);
  },

  getContact: async (id: string) => {
    const response = await axios.get('/api/odoo/contacts', {
      params: {
        page: 1,
        pageSize: 1,
        search: id,
      },
    });
    const [contact] = Array.isArray(response.data?.data) ? response.data.data : [];
    return contact ? normalizeOdooContact(contact) : null;
  },

  getContactsByType: async (type: string, id?: string, params?: any) => {
    if (type === 'company' || type === 'vendor') {
      const response = await axios.get('/api/odoo/companies', {
        params: {
          page: params?.page,
          pageSize: params?.pageSize,
          search: id || params?.search || params?.q || '',
        },
      });
      const contacts = Array.isArray(response.data?.data) ? response.data.data : [];
      return contacts.map(normalizeOdooContact);
    }

    const response = await axios.get('/api/odoo/contacts', {
      params: {
        page: params?.page,
        pageSize: params?.pageSize,
        search: id || params?.search || params?.q || '',
      },
    });
    const contacts = Array.isArray(response.data?.data) ? response.data.data : [];
    return contacts.map(normalizeOdooContact);
  },

  createContact: async (data: any) => {
    const payload = {
      ...data,
      name: data.name ?? data.fullName,
    };
    delete (payload as any).fullName;
    delete (payload as any).contactType;
    delete (payload as any).status;

    const response = await axios.post('/api/odoo/contacts', payload);
    return response.data;
  },

  updateContact: async (id: string, data: any) => {
    const payload = {
      ...data,
      name: data.name ?? data.fullName,
    };
    delete (payload as any).fullName;
    delete (payload as any).contactType;
    delete (payload as any).status;

    const response = await axios.put(`/api/odoo/contacts/${id}`, payload);
    return response.data;
  },

  deleteContact: async (ids: string[]) => {
    // Note: If Odoo supports batch delete, we can pass the array. 
    // For now, we delete one by one or assume the backend handles the array.
    const promises = ids.map(id => axios.delete(`/api/odoo/contacts/${id}`));
    await Promise.all(promises);
  },
};
