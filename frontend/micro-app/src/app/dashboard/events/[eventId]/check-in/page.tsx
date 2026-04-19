import { CalendarWorkspaceView } from 'src/sections/calendar/view/calendar-workspace-view';

export const metadata = {
  title: 'Dashboard: Event Check-In',
};

type Props = {
  params: {
    eventId: string;
  };
};

export default function Page({ params }: Props) {
  return <CalendarWorkspaceView tab="check-in" eventId={params.eventId} />;
}
