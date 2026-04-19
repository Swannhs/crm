import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Shipping Payment',
};

type Props = {
  params: {
    orderId: string;
    incomeId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <CommerceWorkspaceView
      mode="shipping-payment"
      orderId={params.orderId}
      incomeId={params.incomeId}
    />
  );
}
