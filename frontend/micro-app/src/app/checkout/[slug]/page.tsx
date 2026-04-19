import { PublicFlowWorkspaceView } from 'src/sections/public/public-flow-workspace-view';

export const metadata = {
  title: 'Checkout',
};

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return <PublicFlowWorkspaceView mode="checkout" slug={params.slug} />;
}
