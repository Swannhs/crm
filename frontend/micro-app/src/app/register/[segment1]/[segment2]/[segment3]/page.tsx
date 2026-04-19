import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'Table Register',
};

type Props = {
  params: {
    segment1: string;
    segment2: string;
    segment3: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <PosWorkspaceView
      mode="table-register"
      orderId={params.segment1}
      roomId={params.segment2}
      table={params.segment3}
    />
  );
}
