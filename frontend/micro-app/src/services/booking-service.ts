import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getBookingTypes() {
  const response = await axiosInstance.get('/api/booking/booking-types');
  return Array.isArray(response.data?.data) ? response.data.data : [];
}

export async function getAppointments() {
  const response = await axiosInstance.get('/api/booking/appointments');
  return Array.isArray(response.data?.data) ? response.data.data : [];
}

export async function createBookingType(data: any) {
  const response = await axiosInstance.post('/api/booking/booking-types', data);
  return response.data?.data ?? response.data;
}

export const bookingService = {
  getBookingTypes,
  getAppointments,
  createBookingType,
};
