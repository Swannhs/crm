import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Signup Invitation',
};

type Props = {
  params: {
    email: string;
    organizationId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PublicFlowWorkspaceView
      mode="generic-auth"
      email={params.email}
      organizationId={params.organizationId}
    />
  );
}
