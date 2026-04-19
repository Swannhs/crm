import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Waiver Sign',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <PublicFlowWorkspaceView mode="waiver" id={params.id} />;
}
