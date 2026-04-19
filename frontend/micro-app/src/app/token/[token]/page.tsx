import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Token Access',
};

type Props = {
  params: {
    token: string;
  };
};

export default function Page({ params }: Props) {
  return <OrgAdminWorkspaceView mode="token-auth" token={params.token} />;
}
