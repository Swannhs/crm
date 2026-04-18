import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getBookingTypes() {
  const response = await axiosInstance.get('/api/booking/v1/booking-types');
  return response.data;
}

export async function getAppointments() {
  const response = await axiosInstance.get('/api/booking/v1/appointments');
  return response.data;
}

export async function createBookingType(data: any) {
  const response = await axiosInstance.post('/api/booking/v1/booking-types', data);
  return response.data;
}

export const bookingService = {
  getBookingTypes,
  getAppointments,
  createBookingType,
};
