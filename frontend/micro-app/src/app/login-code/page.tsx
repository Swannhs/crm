import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Login Code',
};

export default function Page() {
  return <PublicFlowWorkspaceView mode="code-auth" />;
}
