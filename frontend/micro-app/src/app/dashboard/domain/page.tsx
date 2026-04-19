import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Dashboard: Domain',
};

export default function Page() {
  return <OrgAdminWorkspaceView mode="domain" />;
}
