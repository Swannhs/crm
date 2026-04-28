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

export async function getBookingTypeByLink(link: string) {
  try {
    const response = await axiosInstance.get(`/api/booking/public/booking-types/${encodeURIComponent(link)}`);
    return response.data?.data ?? response.data;
  } catch {
    const response = await axiosInstance.get(`/api/booking/booking-types/${encodeURIComponent(link)}`);
    return response.data?.data ?? response.data;
  }
}

export async function getAvailableSlots(bookingTypeId: string, date: string) {
  const response = await axiosInstance.get('/api/booking/available-slots', {
    params: { bookingTypeId, date },
  });
  return Array.isArray(response.data?.data) ? response.data.data : response.data;
}

export async function createBookingType(data: any) {
  const response = await axiosInstance.post('/api/booking/booking-types', data);
  return response.data?.data ?? response.data;
}

export async function updateBookingType(id: string, data: any) {
  const response = await axiosInstance.patch(`/api/booking/booking-types/${id}`, data);
  return response.data?.data ?? response.data;
}


export async function createAppointment(data: any) {
  const response = await axiosInstance.post('/api/booking/appointments/user', data);
  return response.data?.data ?? response.data;
}

export async function cancelAppointment(id: string) {
  const response = await axiosInstance.delete(`/api/booking/appointments/${id}`);
  return response.data?.data ?? response.data;
}

export const bookingService = {
  getBookingTypes,
  getAppointments,
  getBookingTypeByLink,
  getAvailableSlots,
  createBookingType,
  updateBookingType,
  createAppointment,
  cancelAppointment,

};
