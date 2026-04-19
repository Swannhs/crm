import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Shop Checkout',
};

type Props = {
  params: {
    shopPath: string;
    cartId: string;
  };
};

export default function Page({ params }: Props) {
  return <CommerceWorkspaceView mode="checkout" shopPath={params.shopPath} cartId={params.cartId} />;
}
