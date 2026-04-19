import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'QR Pay',
};

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return <PublicFlowWorkspaceView mode="qrpay" slug={params.slug} />;
}
