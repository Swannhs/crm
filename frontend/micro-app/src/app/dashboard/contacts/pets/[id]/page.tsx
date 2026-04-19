import { ContactRouteView } from 'src/sections/contacts/view/contact-route-view';

export const metadata = {
  title: 'Dashboard: Pet Contacts',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  return <ContactRouteView type="pets" id={params.id} />;
}
