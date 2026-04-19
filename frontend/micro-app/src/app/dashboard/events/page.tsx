import { CalendarWorkspaceView } from 'src/sections/calendar/view/calendar-workspace-view';

export const metadata = {
  title: 'Dashboard: Events',
};

export default function Page() {
  return <CalendarWorkspaceView tab="events" />;
}
