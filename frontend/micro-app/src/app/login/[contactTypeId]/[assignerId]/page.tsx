import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Login Link',
};

type Props = {
  params: {
    contactTypeId: string;
    assignerId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PublicFlowWorkspaceView
      mode="generic-auth"
      contactTypeId={params.contactTypeId}
      assignerId={params.assignerId}
    />
  );
}
