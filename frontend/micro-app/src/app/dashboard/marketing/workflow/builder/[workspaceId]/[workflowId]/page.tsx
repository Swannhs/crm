import { MarketingWorkspaceView } from 'src/sections/marketing/view/marketing-workspace-view';

export const metadata = {
  title: 'Dashboard: Workflow Builder',
};

type Props = {
  params: {
    workspaceId: string;
    workflowId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <MarketingWorkspaceView
      mode="workflow-builder"
      workspaceId={params.workspaceId}
      workflowId={params.workflowId}
    />
  );
}
