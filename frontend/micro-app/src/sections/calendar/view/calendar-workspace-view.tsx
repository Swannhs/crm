'use client';

import { CalendarView } from './calendar-view';

type Props = {
  tab?: string;
  eventId?: string;
  bookingLink?: string;
  publicMode?: 'booking' | 'landing';
};

export function CalendarWorkspaceView(_props: Props) {
  return <CalendarView />;
}
