import { FinanceWorkspaceView } from 'src/sections/finance/view/finance-workspace-view';

export const metadata = {
  title: 'Dashboard: New Invoice',
};

export default function Page() {
  return <FinanceWorkspaceView mode="new" />;
}
