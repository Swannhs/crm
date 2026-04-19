import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'Dashboard: POS Tables',
};

export default function Page() {
  return <PosWorkspaceView mode="tables" />;
}
