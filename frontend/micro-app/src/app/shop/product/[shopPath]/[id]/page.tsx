import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Public Product Detail',
};

type Props = {
  params: {
    shopPath: string;
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <CommerceWorkspaceView mode="product-detail" shopPath={params.shopPath} productId={params.id} />;
}
