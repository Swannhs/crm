import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Online Shop Orders',
};

type Props = {
  params: {
    shopId: string;
  };
};

export default function Page({ params }: Props) {
  return <CommerceWorkspaceView mode="online-orders" shopId={params.shopId} />;
}
