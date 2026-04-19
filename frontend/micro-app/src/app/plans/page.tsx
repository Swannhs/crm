import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Plans',
};

export default function Page() {
  return <OrgAdminWorkspaceView mode="plans" />;
}
