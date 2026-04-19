import { FinanceWorkspaceView } from 'src/sections/finance/view/finance-workspace-view';

export const metadata = {
  title: 'Dashboard: Finance Section',
};

type Props = {
  params: {
    section: string;
  };
};

export default function Page({ params }: Props) {
  return <FinanceWorkspaceView section={params.section} />;
}
