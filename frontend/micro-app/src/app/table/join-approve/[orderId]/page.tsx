import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'Table Join Approve',
};

type Props = {
  params: {
    orderId: string;
  };
};

export default function Page({ params }: Props) {
  return <PosWorkspaceView mode="table-join-approve" orderId={params.orderId} />;
}
