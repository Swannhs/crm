import { MarketingWorkspaceView } from 'src/sections/marketing/view/marketing-workspace-view';

export const metadata = {
  title: 'Dashboard: Marketing Subsection',
};

type Props = {
  params: {
    section: string;
    subsection: string;
  };
};

export default function Page({ params }: Props) {
  return <MarketingWorkspaceView section={params.section} subsection={params.subsection} />;
}
