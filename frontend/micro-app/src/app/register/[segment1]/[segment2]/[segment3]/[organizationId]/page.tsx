import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Contact Register',
};

type Props = {
  params: {
    segment1: string;
    segment2: string;
    segment3: string;
    organizationId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PublicFlowWorkspaceView
      mode="generic-auth"
      contactTypeId={params.segment1}
      assignerId={params.segment2}
      contactId={params.segment3}
      organizationId={params.organizationId}
    />
  );
}
