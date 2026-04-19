import { CommerceWorkspaceView } from 'src/sections/commerce/view/commerce-workspace-view';

export const metadata = {
  title: 'Memberships Catalog',
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
      mode="public-memberships"
      shopPath={params.shopPath}
      contactId={params.contactId?.[0]}
    />
  );
}
