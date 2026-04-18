import api from '../lib/api';

export interface Appointment {
  id: string;
  orgId: string;
  contactId?: string;
  employeeId?: string;
  bookingTypeId?: string;
  title?: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no_show';
  notes?: string;
  createdAt: string;
}

export interface BookingType {
  id: string;
  orgId: string;
  name: string;
  duration: number;
  price?: number;
  description?: string;
  status: 'active' | 'inactive';
}

export const bookingService = {
  getAppointments: async (params?: { status?: string; start?: string; end?: string }) => {
    const response = await api.get<{ data: Appointment[] }>('/booking/v1/appointments', { params });
    return response.data;
  },

  getAppointment: async (id: string) => {
    const response = await api.get<{ data: Appointment }>(`/booking/v1/appointments/by-id/${id}`);
    return response.data;
  },

  createAppointment: async (data: Partial<Appointment>) => {
    const response = await api.post<{ data: Appointment }>('/booking/v1/appointments/user', data);
    return response.data;
  },

  getBookingTypes: async () => {
    const response = await api.get<{ data: BookingType[] }>('/booking/v1/booking-types');
    return response.data;
  },
};
