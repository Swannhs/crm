import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Workflow',
};

export default function Page() {
  return <BuilderWorkspaceView mode="workflow" />;
}
