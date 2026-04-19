import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Notifications',
};

export default function Page() {
  return <PublicFlowWorkspaceView mode="notifications" />;
}
