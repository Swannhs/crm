import { SettingsWorkspaceView } from 'src/sections/organization/view/settings-workspace-view';

export const metadata = {
  title: 'Dashboard: Settings Tab',
};

type Props = {
  params: {
    tab: string;
  };
};

export default function Page({ params }: Props) {
  return <SettingsWorkspaceView tab={params.tab} />;
}
