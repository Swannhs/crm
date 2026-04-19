import { ProjectWorkspaceView } from 'src/sections/projects/view/project-workspace-view';

export const metadata = {
  title: 'Dashboard: Project Tasks',
};

export default function Page() {
  return <ProjectWorkspaceView mode="tasks" />;
}
