import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Order Payment',
};

type Props = {
  params: {
    orderId: string;
  };
};

export default function Page({ params }: Props) {
  return <CommerceWorkspaceView mode="order-payment" orderId={params.orderId} />;
}
