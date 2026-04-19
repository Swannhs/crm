import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Organization Payment Method',
};

type Props = {
  params: {
    token: string;
  };
};

export default function Page({ params }: Props) {
  return <OrgAdminWorkspaceView mode="org-payment-method" token={params.token} />;
}
