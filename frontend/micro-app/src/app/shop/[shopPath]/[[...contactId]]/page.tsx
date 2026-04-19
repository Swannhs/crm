import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Public Shop',
};

type Props = {
  params: {
    shopPath: string;
    contactId?: string[];
  };
};

export default function Page({ params }: Props) {
  return (
    <CommerceWorkspaceView
      mode="public-shop"
      shopPath={params.shopPath}
      contactId={params.contactId?.[0]}
    />
  );
}
