import { OrgAdminWorkspaceView } from 'src/sections/organization/view/org-admin-workspace-view';

export const metadata = {
  title: 'Plan Payment',
};

type Props = {
  params: {
    planId: string;
    duration: string;
  };
};

export default function Page({ params }: Props) {
  return <OrgAdminWorkspaceView mode="plan-payment" planId={params.planId} duration={params.duration} />;
}
