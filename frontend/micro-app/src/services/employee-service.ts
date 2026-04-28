import axios from 'src/utils/axios';

export type IEmployee = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  totalShifts: number;
  displaySummary: string;
  categories: Array<{ _id: string; name: string }>;
  photo?: string;
  jobTitle?: string;
  active?: boolean;
};

export const employeeService = {
  getEmployees: async (params?: any) => {
    const response = await axios.get('/api/odoo/employees', {
      params: {
        page: params?.page ?? 1,
        pageSize: params?.pageSize ?? 20,
        search: params?.search ?? '',
        type: params?.type ?? undefined,
      },
    });

    const rows = Array.isArray(response.data?.data) ? response.data.data : [];
    const data: IEmployee[] = rows.map((employee: any) => ({
      _id: String(employee?.id ?? ''),
      fullName: String(employee?.name ?? 'Unnamed employee'),
      email: String(employee?.work_email ?? ''),
      phone: String(employee?.work_phone ?? employee?.mobile_phone ?? ''),
      totalShifts: 0,
      displaySummary: employee?.job_title || 'Employee',
      categories: employee?.department_id?.[1]
        ? [{ _id: String(employee.department_id[0]), name: String(employee.department_id[1]) }]
        : [],
      photo: '',
      jobTitle: String(employee?.job_title ?? ''),
      active: employee?.active !== false,
    }));

    return {
      data,
      total: Number(response.data?.total ?? data.length),
      page: Number(response.data?.page ?? params?.page ?? 1),
      pageSize: Number(response.data?.pageSize ?? params?.pageSize ?? 20),
      totalPages: Number(response.data?.totalPages ?? 0),
    };
  },

  getEmployee: async (id: string | number) => {
    const response = await axios.get(`/api/odoo/employees/${id}`);
    return response.data;
  },

  createEmployee: async (data: any) => {
    const response = await axios.post('/api/odoo/employees', data);
    return response.data;
  },

  updateEmployee: async (id: string | number, data: any) => {
    const response = await axios.put(`/api/odoo/employees/${id}`, data);
    return response.data;
  },

  updateEmployeeStatus: async (id: string | number, status: 'active' | 'inactive') => {
    const response = await axios.patch(`/api/odoo/employees/${id}/status`, { status });
    return response.data;
  },

  getDepartments: async (params?: any) => {
    const response = await axios.get('/api/odoo/employees/departments', {
      params: {
        page: params?.page ?? 1,
        pageSize: params?.pageSize ?? 50,
        search: params?.search ?? '',
      },
    });
    return response.data;
  },

  createDepartment: async (data: any) => {
    const response = await axios.post('/api/odoo/employees/departments', data);
    return response.data;
  },

  getJobs: async (params?: any) => {
    const response = await axios.get('/api/odoo/employees/jobs', {
      params: {
        page: params?.page ?? 1,
        pageSize: params?.pageSize ?? 50,
        search: params?.search ?? '',
      },
    });
    return response.data;
  },

  createJob: async (data: any) => {
    const response = await axios.post('/api/odoo/employees/jobs', data);
    return response.data;
  },

  getAttendance: async (params?: any) => {
    const response = await axios.get('/api/odoo/employees/attendance', { params });
    return response.data;
  },

  getAttendanceDashboard: async (params?: any) => {
    const response = await axios.get('/api/odoo/employees/attendance/dashboard', { params });
    return response.data;
  },

  getEmployeeAttendance: async (employeeId: string | number, params?: any) => {
    const response = await axios.get(`/api/odoo/employees/${employeeId}/attendance`, { params });
    return response.data;
  },

  clockIn: async (employeeId: string | number) => {
    const response = await axios.post('/api/odoo/employees/attendance/clock-in', { employeeId });
    return response.data;
  },

  clockOut: async (attendanceId: string | number) => {
    const response = await axios.post(`/api/odoo/employees/attendance/${attendanceId}/clock-out`, {});
    return response.data;
  },

  getLeaveTypes: async () => {
    const response = await axios.get('/api/odoo/employees/leave/types');
    return response.data;
  },

  getLeaveRequests: async (params?: any) => {
    const response = await axios.get('/api/odoo/employees/leave/requests', { params });
    return response.data;
  },

  createLeaveRequest: async (data: any) => {
    const response = await axios.post('/api/odoo/employees/leave/requests', data);
    return response.data;
  },

  approveLeaveRequest: async (id: string | number) => {
    const response = await axios.post(`/api/odoo/employees/leave/requests/${id}/approve`, {});
    return response.data;
  },

  refuseLeaveRequest: async (id: string | number) => {
    const response = await axios.post(`/api/odoo/employees/leave/requests/${id}/refuse`, {});
    return response.data;
  },

  getShifts: async (params?: any) => {
    const response = await axios.get('/api/odoo/employees/shifts', { params });
    return response.data;
  },

  getEmployeeShifts: async (employeeId: string | number, params?: any) => {
    const response = await axios.get(`/api/odoo/employees/${employeeId}/shifts`, { params });
    return response.data;
  },

  createShift: async (data: any) => {
    const response = await axios.post('/api/odoo/employees/shifts', data);
    return response.data;
  },

  updateShift: async (id: string | number, data: any) => {
    const response = await axios.put(`/api/odoo/employees/shifts/${id}`, data);
    return response.data;
  },

  deleteShift: async (id: string | number) => {
    const response = await axios.delete(`/api/odoo/employees/shifts/${id}`);
    return response.data;
  },
};

