import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Login Contact',
};

type Props = {
  params: {
    organizationId: string;
    location: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PublicFlowWorkspaceView
      mode="phone-auth"
      organizationId={params.organizationId}
      location={params.location}
    />
  );
}
