import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Dashboard: Orders',
};

export default function Page() {
  return <CommerceWorkspaceView mode="dashboard-orders" />;
}
