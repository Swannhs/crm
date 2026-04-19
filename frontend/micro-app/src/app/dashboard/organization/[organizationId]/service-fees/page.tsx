import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Dashboard: Organization Service Fees',
};

type Props = {
  params: {
    organizationId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <OrgAdminWorkspaceView mode="organization-service-fees" organizationId={params.organizationId} />
  );
}
