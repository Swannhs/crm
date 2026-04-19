import { PosWorkspaceView } from 'src/sections/commerce/view/pos-workspace-view';

export const metadata = {
  title: 'POS New Tables',
};

export default function Page() {
  return <PosWorkspaceView mode="tables" />;
}
