import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'Delivery Status',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <PosWorkspaceView mode="deliver" deliveryId={params.id} />;
}
