import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Dashboard: Service Fees',
};

export default function Page() {
  return <OrgAdminWorkspaceView mode="service-fees" />;
}
