import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type IEmployee = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  totalShifts: number;
  displaySummary: string;
  categories: any[];
};

export const employeeService = {
  getEmployeesWithShifts: async (params?: any) => {
    // Note: The endpoint we found was /api/employee-schedule/get-contacts-with-categories-and-shifts
    // But let's check if there's a simpler one or use this one.
    const response = await axios.get('/api/employee-schedule/get-contacts-with-categories-and-shifts', { params });
    return response.data;
  },

  getSchedules: async (params?: any) => {
    const response = await axios.get('/api/employee-schedule/get-all', { params });
    return response.data;
  },

  createSchedule: async (data: any) => {
    const response = await axios.post('/api/employee-schedule/add', data);
    return response.data;
  },
};
