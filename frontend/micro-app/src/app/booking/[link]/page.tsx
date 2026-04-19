import { CalendarWorkspaceView } from 'src/sections/calendar/view/calendar-workspace-view';

export const metadata = {
  title: 'Booking',
};

type Props = {
  params: {
    link: string;
  };
};

export default function Page({ params }: Props) {
  return <CalendarWorkspaceView bookingLink={params.link} publicMode="booking" />;
}
