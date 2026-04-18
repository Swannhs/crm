export interface ICalendar {
  id: string;
  orgId: string;
  userId: string;
  name: string;
  color: string;
  isDefault: boolean;
  isVisible: boolean;
  provider?: string | null;
}

export interface IEvent {
  id: string;
  orgId: string;
  createdBy: string;
  calendarId?: string | null;
  categoryId?: string | null;
  title: string;
  description?: string | null;
  location?: string | null;
  startDate: Date;
  endDate: Date;
  allDay: boolean;
  status: string;
  color?: string | null;
  attendees: any[];
  recurrence: any;
  isRecurring: boolean;
  isDeleted: boolean;
}

export interface IEventCategory {
  id: string;
  orgId: string;
  name: string;
  color: string;
  icon?: string | null;
}
