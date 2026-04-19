import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'POS New CFD',
};

type Props = {
  params: {
    shopId: string;
  };
};

export default function Page({ params }: Props) {
  return <PosWorkspaceView mode="cfd" shopId={params.shopId} />;
}
