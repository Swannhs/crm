import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'POS New Stock Manager',
};

type Props = {
  params: {
    shopId: string;
  };
};

export default function Page({ params }: Props) {
  return <PosWorkspaceView mode="stock-manager" shopId={params.shopId} />;
}
