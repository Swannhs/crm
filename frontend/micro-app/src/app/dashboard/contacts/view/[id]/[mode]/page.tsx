import { ContactRouteView } from 'src/sections/contacts/view/contact-route-view';

export const metadata = {
  title: 'Dashboard: Contact View',
};

type Props = {
  params: {
    id: string;
    mode: string;
  };
};

export default function Page({ params }: Props) {
  return <ContactRouteView id={params.id} mode={params.mode} />;
}
