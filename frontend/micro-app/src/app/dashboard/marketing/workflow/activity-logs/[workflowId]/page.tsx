import { MarketingWorkspaceView } from 'src/sections/marketing/view/marketing-workspace-view';

export const metadata = {
  title: 'Dashboard: Workflow Activity',
};

type Props = {
  params: {
    workflowId: string;
  };
};

export default function Page({ params }: Props) {
  return <MarketingWorkspaceView mode="workflow-activity" workflowId={params.workflowId} />;
}
