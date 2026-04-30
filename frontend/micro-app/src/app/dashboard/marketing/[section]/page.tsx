import { MarketingSegmentsView } from 'src/sections/marketing/view/marketing-segments-view';
import { MarketingCampaignsView } from 'src/sections/marketing/view/marketing-campaigns-view';
import { MarketingTemplatesView } from 'src/sections/marketing/view/marketing-templates-view';
import { MarketingAnalyticsView } from 'src/sections/marketing/view/marketing-analytics-view';
import { MarketingWorkspaceView } from 'src/sections/marketing/view/marketing-workspace-view';
import { MarketingAutomationView } from 'src/sections/marketing/view/marketing-automation-view';
import { MarketingComplianceView } from 'src/sections/marketing/view/marketing-compliance-view';

export const metadata = {
  title: 'Dashboard: Marketing Section',
};

type Props = {
  params: {
    section: string;
  };
};

export default function Page({ params }: Props) {
  const { section } = params;

  if (section === 'campaigns') {
    return <MarketingCampaignsView />;
  }

  if (section === 'segments') {
    return <MarketingSegmentsView />;
  }

  if (section === 'templates') {
    return <MarketingTemplatesView />;
  }

  if (section === 'automation') {
    return <MarketingAutomationView />;
  }

  if (section === 'compliance') {
    return <MarketingComplianceView />;
  }

  if (section === 'analytics') {
    return <MarketingAnalyticsView />;
  }

  if (section === 'sources') {
    return <MarketingWorkspaceView section="sources" />;
  }

  if (section === 'mediums') {
    return <MarketingWorkspaceView section="mediums" />;
  }

  return <MarketingCampaignsView />;
}
