import api from '../lib/api';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface Schedule {
  id: string;
  employeeId: string;
  start: string;
  end: string;
  title: string;
}

export const employeeService = {
  getEmployees: async () => {
    const response = await api.get<{ data: Employee[] }>(`/v1/employees`);
    return response.data;
  },
  
  getSchedules: async (start?: string, end?: string) => {
    const response = await api.get<{ data: Schedule[] }>(`/v1/schedules`, {
      params: { start, end }
    });
    return response.data;
  },
  
  createSchedule: async (data: Partial<Schedule>) => {
    const response = await api.post<{ data: Schedule }>(`/v1/schedules`, data);
    return response.data;
  }
};
