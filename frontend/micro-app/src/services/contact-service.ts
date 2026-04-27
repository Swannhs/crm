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

const normalizeOdooContact = (contact: any): IContact => {
  const id = String(contact?.id ?? contact?._id ?? '');
  return {
    _id: id,
    id,
    fullName: contact?.name ?? contact?.fullName ?? 'Unnamed contact',
    email: contact?.email ?? '',
    phone: contact?.phone ?? contact?.mobile ?? '',
    status: contact?.status ?? 'active',
    contactType: [contact?.isCompany ? 'Company' : 'Client'],
    createdAt: contact?.createdAt ?? contact?.create_date ?? new Date().toISOString(),
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

    const response = await axios.put(`/api/odoo/contacts/${id}`, payload);
    return response.data;
  },

  deleteContact: async (ids: string[]) => {
    // Note: If Odoo supports batch delete, we can pass the array. 
    // For now, we delete one by one or assume the backend handles the array.
    const promises = ids.map(id => axios.delete(`/api/odoo/contacts/${id}`));
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
    const response = await axios.get(`/api/odoo/contacts/${id}/activities`);
    return response.data || [];
  },
  createActivity: async (id: string, data: any) => {
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
};
