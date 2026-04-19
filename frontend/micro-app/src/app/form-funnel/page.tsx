import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Form Funnel',
};

export default function Page() {
  return <BuilderWorkspaceView mode="form-list" />;
}
