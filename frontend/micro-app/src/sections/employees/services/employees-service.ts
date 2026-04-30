import axiosInstance from 'src/utils/axios';

import {
  AttendanceRecord,
  Employee,
  EmployeeDepartment,
  EmployeeDocument,
  EmployeeRole,
  EmployeeSummary,
  TimeOffRequest,
} from '../types';

const API_BASE = '/api/employees';

class EmployeesUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EmployeesUnavailableError';
  }
}

const isUnavailable = (error: any) => {
  const code = Number(error?.response?.status);
  return code === 404 || code === 405 || code === 410 || code === 501 || code === 502 || code === 503;
};

const mapEmployee = (row: any): Employee => {
  const name = String(row?.name || '').trim();
  const parts = name.split(' ').filter(Boolean);
  const firstName = parts[0] || '';
  const lastName = parts.slice(1).join(' ');
  const active = row?.active !== false;

  return {
    id: String(row?.id || ''),
    firstName,
    lastName,
    displayName: name || undefined,
    email: row?.work_email || row?.email || undefined,
    phone: row?.work_phone || row?.mobile_phone || row?.phone || undefined,
    jobTitle: row?.job_title || undefined,
    departmentId: Array.isArray(row?.department_id) ? String(row.department_id[0]) : undefined,
    departmentName: Array.isArray(row?.department_id) ? String(row.department_id[1]) : undefined,
    managerId: Array.isArray(row?.parent_id) ? String(row.parent_id[0]) : undefined,
    managerName: Array.isArray(row?.parent_id) ? String(row.parent_id[1]) : undefined,
    status: active ? 'active' : 'inactive',
    createdAt: row?.create_date || undefined,
    updatedAt: row?.write_date || undefined,
  };
};

const mapDepartment = (row: any): EmployeeDepartment => ({
  id: String(row?.id || ''),
  name: String(row?.name || 'Untitled Department'),
  managerId: Array.isArray(row?.manager_id) ? String(row.manager_id[0]) : undefined,
  managerName: Array.isArray(row?.manager_id) ? String(row.manager_id[1]) : undefined,
  createdAt: row?.create_date || undefined,
  updatedAt: row?.write_date || undefined,
});

const mapAttendance = (row: any): AttendanceRecord => ({
  id: String(row?.id || ''),
  employeeId: Array.isArray(row?.employee_id) ? String(row.employee_id[0]) : '',
  employeeName: Array.isArray(row?.employee_id) ? String(row.employee_id[1]) : undefined,
  date: String(row?.check_in || row?.create_date || ''),
  clockIn: row?.check_in || undefined,
  clockOut: row?.check_out || undefined,
  totalHours: typeof row?.worked_hours === 'number' ? row.worked_hours : undefined,
  status: row?.check_out ? 'present' : 'remote',
  createdAt: row?.create_date || undefined,
  updatedAt: row?.write_date || undefined,
});

const mapTimeOff = (row: any): TimeOffRequest => ({
  id: String(row?.id || ''),
  employeeId: Array.isArray(row?.employee_id) ? String(row.employee_id[0]) : '',
  employeeName: Array.isArray(row?.employee_id) ? String(row.employee_id[1]) : undefined,
  type: 'other',
  startDate: String(row?.request_date_from || ''),
  endDate: String(row?.request_date_to || ''),
  days: typeof row?.number_of_days === 'number' ? row.number_of_days : undefined,
  reason: row?.name ? String(row.name) : undefined,
  status:
    row?.state === 'validate'
      ? 'approved'
      : row?.state === 'refuse'
      ? 'rejected'
      : row?.state === 'cancel'
      ? 'cancelled'
      : 'pending',
  createdAt: row?.create_date || undefined,
  updatedAt: row?.write_date || undefined,
});

const mapResponseList = (payload: any) => (Array.isArray(payload?.data) ? payload.data : Array.isArray(payload) ? payload : []);

export const employeesService = {
  async getEmployees(params?: Record<string, any>): Promise<{ data: Employee[]; total: number }> {
    const response = await axiosInstance.get(API_BASE, { params });
    const rows = mapResponseList(response.data);
    return {
      data: rows.map(mapEmployee),
      total: Number(response.data?.total ?? rows.length),
    };
  },

  async getEmployee(id: string): Promise<Employee | null> {
    const response = await axiosInstance.get(`${API_BASE}/${id}`);
    const row = response.data?.data ?? response.data;
    return row ? mapEmployee(row) : null;
  },

  async createEmployee(payload: any) {
    const response = await axiosInstance.post(API_BASE, payload);
    return response.data?.data ?? response.data;
  },

  async updateEmployee(id: string, payload: any) {
    const response = await axiosInstance.put(`${API_BASE}/${id}`, payload);
    return response.data?.data ?? response.data;
  },

  async archiveEmployee(id: string) {
    const response = await axiosInstance.patch(`${API_BASE}/${id}/status`, { status: 'inactive' });
    return response.data?.data ?? response.data;
  },

  async getDepartments(): Promise<EmployeeDepartment[]> {
    const response = await axiosInstance.get(`${API_BASE}/departments`, { params: { page: 1, pageSize: 200 } });
    return mapResponseList(response.data).map(mapDepartment);
  },

  async createDepartment(payload: any) {
    const response = await axiosInstance.post(`${API_BASE}/departments`, payload);
    return response.data?.data ?? response.data;
  },

  async getAttendance(params?: Record<string, any>): Promise<AttendanceRecord[]> {
    const response = await axiosInstance.get(`${API_BASE}/attendance`, { params });
    return mapResponseList(response.data).map(mapAttendance);
  },

  async clockIn(employeeId: string) {
    const response = await axiosInstance.post(`${API_BASE}/attendance/clock-in`, { employeeId });
    return response.data?.data ?? response.data;
  },

  async clockOut(attendanceId: string) {
    const response = await axiosInstance.post(`${API_BASE}/attendance/${attendanceId}/clock-out`, {});
    return response.data?.data ?? response.data;
  },

  async getTimeOffRequests(params?: Record<string, any>): Promise<TimeOffRequest[]> {
    const response = await axiosInstance.get(`${API_BASE}/time-off`, { params });
    return mapResponseList(response.data).map(mapTimeOff);
  },

  async createTimeOffRequest(payload: any) {
    const response = await axiosInstance.post(`${API_BASE}/time-off`, payload);
    return response.data?.data ?? response.data;
  },

  async approveTimeOffRequest(id: string) {
    const response = await axiosInstance.post(`${API_BASE}/time-off/${id}/approve`, {});
    return response.data?.data ?? response.data;
  },

  async rejectTimeOffRequest(id: string) {
    const response = await axiosInstance.post(`${API_BASE}/time-off/${id}/reject`, {});
    return response.data?.data ?? response.data;
  },

  async cancelTimeOffRequest(id: string) {
    const response = await axiosInstance.post(`${API_BASE}/time-off/${id}/cancel`, {});
    return response.data?.data ?? response.data;
  },

  async getEmployeeSummary(): Promise<EmployeeSummary> {
    const [employees, attendance, leaves, departments] = await Promise.all([
      this.getEmployees({ page: 1, pageSize: 200 }),
      this.getAttendance({ page: 1, pageSize: 200 }).catch(() => []),
      this.getTimeOffRequests({ page: 1, pageSize: 200 }).catch(() => []),
      this.getDepartments().catch(() => []),
    ]);

    return {
      totalEmployees: employees.total,
      activeEmployees: employees.data.filter((e) => e.status === 'active').length,
      onLeave: leaves.filter((l) => l.status === 'approved').length,
      departments: departments.length,
      pendingTimeOff: leaves.filter((l) => l.status === 'pending').length,
      todayAttendance: attendance.filter((a) => !!a.clockIn).length,
    };
  },

  async getRoles(): Promise<EmployeeRole[]> {
    try {
      const response = await axiosInstance.get(`${API_BASE}/roles`);
      return mapResponseList(response.data);
    } catch (error) {
      if (isUnavailable(error)) {
        throw new EmployeesUnavailableError('Role and access management is not available yet.');
      }
      throw error;
    }
  },

  async assignRole(employeeId: string, roleId: string) {
    const response = await axiosInstance.post(`${API_BASE}/${employeeId}/roles`, { roleId: Number(roleId) });
    return response.data?.data ?? response.data;
  },

  async removeRole(employeeId: string, roleId: string) {
    const response = await axiosInstance.delete(`${API_BASE}/${employeeId}/roles/${roleId}`);
    return response.data?.data ?? response.data;
  },

  async updateEmployeePermissions(employeeId: string, roleIds: string[]) {
    const response = await axiosInstance.patch(`${API_BASE}/${employeeId}/permissions`, {
      roleIds: roleIds.map((id) => Number(id)),
    });
    return response.data?.data ?? response.data;
  },

  async getSettings() {
    try {
      const response = await axiosInstance.get(`${API_BASE}/settings`);
      return response.data?.data ?? response.data;
    } catch (error) {
      if (isUnavailable(error)) {
        throw new EmployeesUnavailableError('Employee settings are not available yet.');
      }
      throw error;
    }
  },

  async updateSettings(payload: any) {
    const response = await axiosInstance.patch(`${API_BASE}/settings`, payload);
    return response.data?.data ?? response.data;
  },

  async getEmployeeDocuments(employeeId: string): Promise<EmployeeDocument[]> {
    const response = await axiosInstance.get(`${API_BASE}/${employeeId}/documents`);
    return mapResponseList(response.data);
  },

  async uploadEmployeeDocument(employeeId: string, payload: any): Promise<EmployeeDocument> {
    const response = await axiosInstance.post(`${API_BASE}/${employeeId}/documents`, payload);
    return response.data?.data ?? response.data;
  },

  async deleteEmployeeDocument(employeeId: string, documentId: string) {
    const response = await axiosInstance.delete(`${API_BASE}/${employeeId}/documents/${documentId}`);
    return response.data?.data ?? response.data;
  },

  isUnavailable,
  EmployeesUnavailableError,
};
