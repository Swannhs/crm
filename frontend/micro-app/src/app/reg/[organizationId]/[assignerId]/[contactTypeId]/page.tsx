import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Self Register',
};

type Props = {
  params: {
    organizationId: string;
    assignerId: string;
    contactTypeId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PublicFlowWorkspaceView
      mode="generic-auth"
      organizationId={params.organizationId}
      assignerId={params.assignerId}
      contactTypeId={params.contactTypeId}
    />
  );
}
