import api from '../lib/api';

export interface Employee {
  id: string;
  orgId: string;
  userId?: string;
  contactId?: string;
  jobTitle?: string;
  department?: string;
  status: 'active' | 'inactive';
}

export interface Schedule {
  id: string;
  employeeId: string;
  startTime: string;
  endTime: string;
  position?: string;
  notes?: string;
}

export const employeeService = {
  getEmployees: async () => {
    const response = await api.get<{ data: Employee[] }>(`/api/employees`);
    return response.data;
  },
  
  getSchedules: async (start?: string, end?: string) => {
    const response = await api.get<{ data: Schedule[] }>(`/api/employees/schedules`, {
      params: { start, end }
    });
    return response.data;
  },
  
  createSchedule: async (data: Partial<Schedule>) => {
    const response = await api.post<{ data: Schedule }>(`/api/employees/schedules`, data);
    return response.data;
  }
};

