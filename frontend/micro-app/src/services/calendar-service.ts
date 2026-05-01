import axiosInstance from 'src/utils/axios';

export type CalendarViewMode = 'month' | 'week' | 'day' | 'agenda';

export type CalendarEventStatus =
  | 'scheduled'
  | 'confirmed'
  | 'tentative'
  | 'completed'
  | 'cancelled'
  | 'no_show';

export type CalendarEventType =
  | 'meeting'
  | 'call'
  | 'task'
  | 'follow_up'
  | 'booking'
  | 'internal'
  | 'deadline'
  | 'personal'
  | 'other';

export type CalendarEvent = {
  id: string;
  title: string;
  description?: string;
  type: CalendarEventType;
  status: CalendarEventStatus;
  startAt: string;
  endAt: string;
  timezone?: string;
  allDay?: boolean;
  location?: string;
  ownerUserId?: string;
  ownerName?: string;
  attendees?: Array<{ id?: string }>;
  createdAt?: string;
  updatedAt?: string;
};

export class CalendarUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalendarUnavailableError';
  }
}

const API_BASE = '/api/calendar';

const isUnavailable = (error: any) => {
  const code = Number(error?.response?.status);
  return code === 404 || code === 405 || code === 410 || code === 501 || code === 502 || code === 503;
};

const extractList = (payload: any) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

export const calendarService = {
  async getCalendarSummary(params?: Record<string, any>) {
    const response = await axiosInstance.get(`${API_BASE}/summary`, { params });
    return response.data?.data ?? response.data;
  },

  async getEvents(params?: Record<string, any>): Promise<{ data: CalendarEvent[]; total: number }> {
    const response = await axiosInstance.get(`${API_BASE}/events`, { params });
    const rows = extractList(response.data);
    return {
      data: rows,
      total: Number(response.data?.total ?? rows.length),
    };
  },

  async getEvent(id: string): Promise<CalendarEvent> {
    const response = await axiosInstance.get(`${API_BASE}/events/${id}`);
    return response.data?.data ?? response.data;
  },

  async createEvent(payload: any): Promise<CalendarEvent> {
    const response = await axiosInstance.post(`${API_BASE}/events`, payload);
    return response.data?.data ?? response.data;
  },

  async updateEvent(id: string, payload: any): Promise<CalendarEvent> {
    const response = await axiosInstance.patch(`${API_BASE}/events/${id}`, payload);
    return response.data?.data ?? response.data;
  },

  async deleteEvent(id: string) {
    const response = await axiosInstance.delete(`${API_BASE}/events/${id}`);
    return response.data?.data ?? response.data;
  },

  async cancelEvent(id: string, payload?: { reason?: string }) {
    const response = await axiosInstance.post(`${API_BASE}/events/${id}/cancel`, payload || {});
    return response.data?.data ?? response.data;
  },

  async completeEvent(id: string) {
    const response = await axiosInstance.post(`${API_BASE}/events/${id}/complete`, {});
    return response.data?.data ?? response.data;
  },

  async getAvailability(params?: Record<string, any>) {
    try {
      const response = await axiosInstance.get(`${API_BASE}/availability`, { params });
      return extractList(response.data);
    } catch (error) {
      if (isUnavailable(error)) throw new CalendarUnavailableError('Availability is not available yet.');
      throw error;
    }
  },

  async getAvailableSlots(params?: Record<string, any>) {
    try {
      const response = await axiosInstance.get(`${API_BASE}/available-slots`, { params });
      return extractList(response.data);
    } catch (error) {
      if (isUnavailable(error)) throw new CalendarUnavailableError('Available slots are not available yet.');
      throw error;
    }
  },

  async getBookingLinks() {
    try {
      const response = await axiosInstance.get(`${API_BASE}/booking-links`);
      return extractList(response.data);
    } catch (error) {
      if (isUnavailable(error)) throw new CalendarUnavailableError('Booking links are not available yet.');
      throw error;
    }
  },

  async getReminders() {
    try {
      const response = await axiosInstance.get(`${API_BASE}/reminders`);
      return extractList(response.data);
    } catch (error) {
      if (isUnavailable(error)) throw new CalendarUnavailableError('Reminders are not available yet.');
      throw error;
    }
  },

  async getCalendarSettings() {
    try {
      const response = await axiosInstance.get(`${API_BASE}/settings`);
      return response.data?.data ?? response.data;
    } catch (error) {
      if (isUnavailable(error)) throw new CalendarUnavailableError('Calendar settings are not available yet.');
      throw error;
    }
  },
};
