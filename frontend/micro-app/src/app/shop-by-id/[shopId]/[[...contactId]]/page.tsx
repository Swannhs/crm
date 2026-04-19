import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Public Shop By ID',
};

type Props = {
  params: {
    shopId: string;
    contactId?: string[];
  };
};

export default function Page({ params }: Props) {
  return (
    <CommerceWorkspaceView
      mode="public-shop"
      shopId={params.shopId}
      contactId={params.contactId?.[0]}
    />
  );
}
