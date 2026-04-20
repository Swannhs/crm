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

const normalizeContact = (contact: any): IContact => {
  const id = contact?._id ?? contact?.id ?? '';
  const derivedName = [contact?.first_name, contact?.last_name].filter(Boolean).join(' ').trim();
  const fullName = contact?.fullName ?? contact?.name ?? (derivedName || 'Unnamed contact');

  return {
    ...contact,
    _id: id,
    id,
    fullName,
    email: contact?.email ?? '',
    phone: contact?.phone ?? '',
    status: contact?.status ?? 'active',
    contactType: Array.isArray(contact?.contactType)
      ? contact.contactType
      : contact?.type
        ? [contact.type]
        : ['Client'],
    createdAt: contact?.createdAt ?? contact?.created_at ?? new Date().toISOString(),
  };
};

const toContactPayload = (data: any) => ({
  name: data?.fullName ?? data?.name ?? '',
  email: data?.email ?? '',
  phone: data?.phone ?? '',
  status: data?.status ?? 'active',
});

export const contactService = {
  getContacts: async (params?: any) => {
    const response = await axios.get('/api/crm/v1/contacts', {
      params: {
        q: params?.search ?? params?.q ?? '',
        ...params,
      },
    });
    const contacts = Array.isArray(response.data)
      ? response.data
      : response.data?.data ?? response.data?.contacts ?? [];
    return contacts.map(normalizeContact);
  },

  getContact: async (id: string) => {
    const response = await axios.get(`/api/crm/v1/contacts/${id}`);
    return normalizeContact(response.data?.data ?? response.data?.contact ?? response.data);
  },

  getContactsByType: async (type: string, id?: string, params?: any) => {
    if (id) {
      const response = await axios.get(`/api/crm/v1/contacts`, {
        params: { q: params?.search ?? params?.q ?? '', ...params, type, contactTypeId: id },
      });
      const contacts = response.data?.data ?? response.data?.contacts ?? response.data ?? [];
      return contacts.map(normalizeContact);
    }

    const response = await axios.get('/api/crm/v1/contacts', {
      params: { q: params?.search ?? params?.q ?? '', ...params, type },
    });
    const contacts = response.data?.data ?? response.data?.contacts ?? response.data ?? [];
    return contacts.map(normalizeContact);
  },

  createContact: async (data: any) => {
    const response = await axios.post('/api/crm/v1/contacts', toContactPayload(data));
    return normalizeContact(response.data?.data ?? response.data?.contact ?? response.data);
  },

  updateContact: async (id: string, data: any) => {
    const response = await axios.patch(`/api/crm/v1/contacts/${id}`, toContactPayload(data));
    return normalizeContact(response.data?.data ?? response.data?.contact ?? response.data);
  },

  deleteContact: async (ids: string[]) => {
    const [firstId] = ids;
    const response = await axios.delete(`/crm/v1/contacts/${ids[0]}`);
    return response.data ?? { status: 'ok', deletedId: firstId };
  },

  normalizeContact,
};
