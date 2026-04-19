import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Uber Eats Callback',
};

export default function Page() {
  return <PublicFlowWorkspaceView mode="integration-callback" />;
}
