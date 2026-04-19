import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Dashboard: Organization Detail',
};

type Props = {
  params: {
    organizationId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <OrgAdminWorkspaceView mode="organization-detail" organizationId={params.organizationId} />
  );
}
