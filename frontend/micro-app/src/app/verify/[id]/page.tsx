import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Verify Email',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <PublicFlowWorkspaceView mode="verify-email" id={params.id} />;
}
