import { FinanceWorkspaceView } from 'src/sections/finance/view/finance-workspace-view';

export const metadata = {
  title: 'Invoice Preview',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <FinanceWorkspaceView invoiceId={params.id} mode="preview" />;
}
