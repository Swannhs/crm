import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Organization Register',
};

type Props = {
  params: {
    organizationId: string;
  };
};

export default function Page({ params }: Props) {
  return <PublicFlowWorkspaceView mode="generic-auth" organizationId={params.organizationId} />;
}
