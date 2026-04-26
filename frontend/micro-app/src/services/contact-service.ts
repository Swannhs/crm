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

  createContact: async (_data: any) => {
    throw new Error(ODOO_WRITE_DEPRECATED_MESSAGE);
  },

  updateContact: async (_id: string, _data: any) => {
    throw new Error(ODOO_WRITE_DEPRECATED_MESSAGE);
  },

  deleteContact: async (_ids: string[]) => {
    throw new Error(ODOO_WRITE_DEPRECATED_MESSAGE);
  },
};
