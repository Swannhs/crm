import { ProjectWorkspaceView } from 'src/sections/projects/view/project-workspace-view';

export const metadata = {
  title: 'Shared Board',
};

type Props = {
  params: {
    workspaceId: string;
    boardId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <ProjectWorkspaceView
      mode="share-board"
      workspaceId={params.workspaceId}
      boardId={params.boardId}
    />
  );
}
