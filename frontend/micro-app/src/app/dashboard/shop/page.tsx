import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';
import { DashboardContent } from 'src/layouts/dashboard';

export const metadata = {
  title: 'Dashboard: Shop',
};

export default function Page() {
  return <CommerceWorkspaceView mode="dashboard-shop" section="dashboard" />;
}
