import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Online Shop Receipt',
};

type Props = {
  params: {
    id: string;
    type?: string[];
  };
};

export default function Page({ params }: Props) {
  return <CommerceWorkspaceView mode="receipt" receiptId={params.id} type={params.type?.[0]} />;
}
