import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';
import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';
import { COMMERCE_DASHBOARD_MODULES } from 'src/sections/commerce/view/commerce-workspace.types';

type Props = {
  params: {
    section: string;
  };
};

export const metadata = {
  title: 'Dashboard: Shop',
};

export default function Page({ params }: Props) {
  const { section } = params;

  if (!COMMERCE_DASHBOARD_MODULES.includes(section as (typeof COMMERCE_DASHBOARD_MODULES)[number])) {
    redirect(paths.dashboard.shopSection('dashboard'));
  }

  return <CommerceWorkspaceView mode="dashboard-shop" section={section} />;
}
