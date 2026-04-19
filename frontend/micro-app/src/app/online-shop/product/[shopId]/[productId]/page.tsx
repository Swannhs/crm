import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Online Product Detail',
};

type Props = {
  params: {
    shopId: string;
    productId: string;
  };
};

export default function Page({ params }: Props) {
  return <CommerceWorkspaceView mode="online-product" shopId={params.shopId} productId={params.productId} />;
}
