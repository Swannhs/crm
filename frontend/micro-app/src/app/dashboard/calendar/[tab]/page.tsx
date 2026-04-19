import { CalendarWorkspaceView } from 'src/sections/calendar/view/calendar-workspace-view';

export const metadata = {
  title: 'Dashboard: Calendar Tab',
};

type Props = {
  params: {
    tab: string;
  };
};

export default function Page({ params }: Props) {
  return <CalendarWorkspaceView tab={params.tab} />;
}
