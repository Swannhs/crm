export interface IBookingType {
  id: string;
  org_id: string;
  title: string;
  link: string;
  duration_minutes: number;
  meeting_type: string;
  location?: string | null;
  description?: string | null;
  price_cents: number;
  is_active: boolean;
  metadata: any;
}

export interface IAppointment {
  id: string;
  org_id: string;
  contact_id?: string | null;
  booking_type_id?: string | null;
  title: string;
  description?: string | null;
  start_datetime: Date;
  end_datetime: Date;
  duration_minutes: number;
  meeting_type: string;
  location?: string | null;
  status: 'scheduled' | 'completed' | 'cancelled' | 'noshow';
  invited_users: string[];
  metadata: any;
}

export interface IIdentityContext {
  orgId: string;
  userId: string;
}
