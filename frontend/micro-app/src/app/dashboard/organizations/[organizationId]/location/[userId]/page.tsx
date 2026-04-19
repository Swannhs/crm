import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Dashboard: Organization Locations',
};

type Props = {
  params: {
    organizationId: string;
    userId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <OrgAdminWorkspaceView
      mode="organization-location"
      organizationId={params.organizationId}
      userId={params.userId}
    />
  );
}
