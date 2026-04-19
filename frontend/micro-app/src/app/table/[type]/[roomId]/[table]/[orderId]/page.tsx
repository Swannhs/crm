import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'Table Side',
};

type Props = {
  params: {
    type: string;
    roomId: string;
    table: string;
    orderId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PosWorkspaceView
      mode="table-side"
      type={params.type}
      roomId={params.roomId}
      table={params.table}
      orderId={params.orderId}
    />
  );
}
