import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'Table Register',
};

type Props = {
  params: {
    orderId: string;
    roomId: string;
    table: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PosWorkspaceView
      mode="table-register"
      orderId={params.orderId}
      roomId={params.roomId}
      table={params.table}
    />
  );
}
