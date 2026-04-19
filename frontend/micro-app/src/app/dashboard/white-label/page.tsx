import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Dashboard: White Label',
};

export default function Page() {
  return <OrgAdminWorkspaceView mode="white-label" />;
}
