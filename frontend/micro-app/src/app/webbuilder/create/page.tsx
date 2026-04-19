import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Web Builder',
};

export default function Page() {
  return <BuilderWorkspaceView mode="webbuilder-create" />;
}
