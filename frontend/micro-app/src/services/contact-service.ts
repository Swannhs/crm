import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IContact = {
  _id: string;
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  mobile?: string;
  isCompany?: boolean;
  street?: string;
  city?: string;
  vat?: string;
  status: string;
  contactType: string[];
  photo?: string;
  createdAt: string;
  companyId?: number;
  companyName?: string;
  company?: {
    id: number;
    name: string;
    email?: string;
    phone?: string;
  };
};

export type IContactsPaginatedResponse = {
  data: IContact[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type IContactAnalyticsResponse = {
  totalContacts: number;
  statusDistribution: Array<{ label: string; value: number }>;
  typeDistribution: Array<{ label: string; value: number }>;
  monthlyCreated: Array<{ month: string; value: number }>;
};

const ODOO_WRITE_DEPRECATED_MESSAGE = 'Odoo now owns this workflow. Manage it in Odoo.';
const mapContactWritePayload = (data: any) => {
  const payload: Record<string, any> = {
    name: data?.name ?? data?.fullName,
    email: data?.email,
    phone: data?.phone,
    mobile: data?.mobile,
    street: data?.street,
    city: data?.city,
    vat: data?.vat,
    is_company: data?.is_company ?? data?.isCompany,
  };
  return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined));
};

const STATUS_TYPE_MAP: Record<string, string> = {
  lead: 'Lead',
  member: 'Member',
  client: 'Client',
  qualified: 'Member',
  vendor: 'Vendor',
  employee: 'Employee',
};

const normalizeOdooContact = (contact: any): IContact => {
  const id = String(contact?.id ?? contact?._id ?? '');
  const rawStatus = String(contact?.status ?? '').toLowerCase();
  const isEmployee = Boolean(contact?.employee);
  const supplierRank = Number(contact?.supplier_rank ?? 0);

  let normalizedType = STATUS_TYPE_MAP[rawStatus];
  if (!normalizedType) {
    if (isEmployee) normalizedType = 'Employee';
    else if (supplierRank > 0) normalizedType = 'Vendor';
    else normalizedType = 'Member';
  }

  return {
    _id: id,
    id,
    fullName: contact?.name ?? contact?.fullName ?? 'Unnamed contact',
    email: contact?.email ?? '',
    phone: contact?.phone ?? contact?.mobile ?? '',
    mobile: contact?.mobile ?? '',
    isCompany: Boolean(contact?.is_company ?? contact?.isCompany ?? false),
    street: contact?.street ?? '',
    city: contact?.city ?? '',
    vat: contact?.vat ?? '',
    status: contact?.status ?? 'new',
    contactType: [normalizedType],
    createdAt: contact?.createdAt ?? contact?.create_date ?? new Date().toISOString(),
    companyId: contact?.companyId || (Array.isArray(contact?.parent_id) ? contact.parent_id[0] : undefined),
    companyName: contact?.companyName || (Array.isArray(contact?.parent_id) ? contact.parent_id[1] : undefined),
    company: contact?.company,
  };
};

export const contactService = {
  getContactsPaginated: async (params?: any): Promise<IContactsPaginatedResponse> => {
    const response = await axios.get('/api/odoo/contacts', {
      params: {
        page: params?.page,
        pageSize: params?.pageSize,
        search: params?.search ?? params?.q ?? '',
        type: params?.type,
      },
    });
    const contacts = Array.isArray(response.data?.data) ? response.data.data : [];
    const normalized = contacts.map(normalizeOdooContact);

    return {
      data: normalized,
      total: Number(response.data?.total ?? normalized.length ?? 0),
      page: Number(response.data?.page ?? params?.page ?? 1),
      pageSize: Number(response.data?.pageSize ?? params?.pageSize ?? normalized.length ?? 0),
      totalPages: Number(
        response.data?.totalPages ??
          (Number(response.data?.total ?? normalized.length ?? 0) > 0
            ? Math.ceil(Number(response.data?.total ?? normalized.length ?? 0) / Number(response.data?.pageSize ?? params?.pageSize ?? normalized.length ?? 1))
            : 0)
      ),
    };
  },

  getContacts: async (params?: any) => {
    const result = await contactService.getContactsPaginated(params);
    return result.data;
  },

  getContactsAnalytics: async (params?: any): Promise<IContactAnalyticsResponse> => {
    const response = await axios.get('/api/odoo/contacts/analytics', {
      params: {
        search: params?.search ?? params?.q ?? '',
        type: params?.type,
      },
    });

    return {
      totalContacts: Number(response.data?.totalContacts ?? 0),
      statusDistribution: Array.isArray(response.data?.statusDistribution) ? response.data.statusDistribution : [],
      typeDistribution: Array.isArray(response.data?.typeDistribution) ? response.data.typeDistribution : [],
      monthlyCreated: Array.isArray(response.data?.monthlyCreated) ? response.data.monthlyCreated : [],
    };
  },

  getContact: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${encodeURIComponent(id)}`);
    const contact = response.data?.data ?? response.data;
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
    const payload = mapContactWritePayload(data);
    const response = await axios.post('/api/odoo/contacts', payload);
    return response.data;
  },

  updateContact: async (id: string, data: any) => {
    const payload = mapContactWritePayload(data);
    const response = await axios.put(`/api/odoo/contacts/${id}`, payload);
    return response.data;
  },

  deleteContact: async (ids: string | string[]) => {
    const idList = Array.isArray(ids) ? ids : [ids];
    const promises = idList.map((id) => axios.delete(`/api/odoo/contacts/${id}`));
    await Promise.all(promises);
  },

  importContacts: async (formData: FormData) => {
    const response = await axios.post('/api/odoo/contacts/import', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getOrders: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/orders`);
    return response.data || [];
  },

  getProjects: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/projects`);
    return response.data || [];
  },

  // --- Pets ---
  getPets: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/pets`);
    return response.data || [];
  },
  createPet: async (id: string, data: any) => {
    const response = await axios.post(`/api/odoo/contacts/${id}/pets`, data);
    return response.data;
  },
  updatePet: async (petId: string, data: any) => {
    const response = await axios.put(`/api/odoo/contacts/pets/${petId}`, data);
    return response.data;
  },
  deletePet: async (petId: string) => {
    const response = await axios.delete(`/api/odoo/contacts/pets/${petId}`);
    return response.data;
  },

  // --- Files ---
  getFiles: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/files`);
    return response.data || [];
  },
  createFile: async (id: string, data: any) => {
    const response = await axios.post(`/api/odoo/contacts/${id}/files`, data);
    return response.data;
  },
  deleteFile: async (fileId: string) => {
    const response = await axios.delete(`/api/odoo/contacts/files/${fileId}`);
    return response.data;
  },

  // --- Tasks ---
  getTasks: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/tasks`);
    return response.data || [];
  },
  createTask: async (id: string, data: any) => {
    const response = await axios.post(`/api/odoo/contacts/${id}/tasks`, data);
    return response.data;
  },
  updateTask: async (taskId: string, data: any) => {
    const response = await axios.put(`/api/odoo/contacts/tasks/${taskId}`, data);
    return response.data;
  },
  deleteTask: async (taskId: string) => {
    const response = await axios.delete(`/api/odoo/contacts/tasks/${taskId}`);
    return response.data;
  },

  // --- Activities ---
  getActivities: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/timeline`);
    return response.data || [];
  },
  createActivity: async (id: string, data: any) => {
    if (data.type === 'note') {
      const response = await axios.post(`/api/odoo/contacts/${id}/notes`, { body: data.content || data.body });
      return response.data;
    }
    const response = await axios.post(`/api/odoo/contacts/${id}/activities`, data);
    return response.data;
  },
  updateActivity: async (activityId: string, data: any) => {
    const response = await axios.put(`/api/odoo/contacts/activities/${activityId}`, data);
    return response.data;
  },
  deleteActivity: async (activityId: string) => {
    const response = await axios.delete(`/api/odoo/contacts/activities/${activityId}`);
    return response.data;
  },

  // --- Shifts ---
  getShifts: async (id: string, params?: any) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/shifts`, {
      params: {
        page: params?.page,
        pageSize: params?.pageSize,
      }
    });
    return response.data || { data: [], total: 0 };
  },
  clockIn: async (id: string) => {
    const response = await axios.post(`/api/odoo/contacts/${id}/clock-in`);
    return response.data;
  },
  clockOut: async (shiftId: string) => {
    const response = await axios.post(`/api/odoo/contacts/shifts/${shiftId}/clock-out`);
    return response.data;
  },
  
  // --- Timeline & Notes ---
  getTimeline: async (id: string) => {
    const response = await axios.get(`/api/odoo/contacts/${id}/timeline`);
    return response.data || [];
  },
  createNote: async (id: string, body: string) => {
    const response = await axios.post(`/api/odoo/contacts/${id}/notes`, { body });
    return response.data;
  },
  // --- Company Relationship ---
  linkCompany: async (contactId: string | number, companyId: string | number) => {
    const response = await axios.post(`/api/odoo/contacts/${contactId}/link-company`, { companyId });
    return response.data;
  },
  unlinkCompany: async (contactId: string | number) => {
    const response = await axios.post(`/api/odoo/contacts/${contactId}/unlink-company`);
    return response.data;
  },
  getCompanies: async (params?: any) => {
    const response = await axios.get('/api/odoo/contacts/companies', {
      params: {
        page: params?.page,
        pageSize: params?.pageSize,
        search: params?.search ?? params?.q ?? '',
      },
    });
    const companies = Array.isArray(response.data?.data) ? response.data.data : [];
    return {
      data: companies.map(normalizeOdooContact),
      total: response.data?.total ?? companies.length,
    };
  },
};
