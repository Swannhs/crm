import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Forgot Password',
};

export default function Page() {
  return <PublicFlowWorkspaceView mode="forgot-password" />;
}
