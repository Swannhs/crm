import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getEvents() {
  const response = await axiosInstance.get('/api/calendar/v1/events');
  return response.data;
}

export async function createEvent(data: any) {
  const response = await axiosInstance.post('/api/calendar/v1/events', data);
  return response.data;
}

export async function updateEvent(id: string, data: any) {
  const response = await axiosInstance.put(`/api/calendar/v1/events/${id}`, data);
  return response.data;
}

export async function deleteEvent(id: string) {
  const response = await axiosInstance.delete(`/api/calendar/v1/events/${id}`);
  return response.data;
}

export const calendarService = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
