import { MarketingWorkspaceView } from 'src/sections/marketing/view/marketing-workspace-view';

export const metadata = {
  title: 'Dashboard: Marketing Section',
};

type Props = {
  params: {
    section: string;
  };
};

export default function Page({ params }: Props) {
  return <MarketingWorkspaceView section={params.section} />;
}
