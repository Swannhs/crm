import { MarketingCampaignDetailView } from 'src/sections/marketing/view/marketing-campaign-detail-view';

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
  const { section, subsection } = params;

  if (section === 'campaigns') {
    if (subsection === 'new') {
      return <MarketingCampaignDetailView />;
    }
    return <MarketingCampaignDetailView id={subsection} />;
  }

  return <div>Not found</div>;
}
