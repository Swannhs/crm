import { CalendarWorkspaceView } from 'src/sections/calendar/view/calendar-workspace-view';

export const metadata = {
  title: 'Dashboard: Event Details',
};

type Props = {
  params: {
    eventId: string;
  };
};

export default function Page({ params }: Props) {
  return <CalendarWorkspaceView eventId={params.eventId} />;
}
