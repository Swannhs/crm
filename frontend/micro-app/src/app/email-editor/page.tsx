import { BuilderWorkspaceView } from 'src/sections/builders/view/builder-workspace-view';

export const metadata = {
  title: 'Email Editor',
};

export default function Page() {
  return <BuilderWorkspaceView mode="email-editor" />;
}
