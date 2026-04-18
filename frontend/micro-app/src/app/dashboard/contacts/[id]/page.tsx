import { ContactDetailsView } from 'src/sections/contacts/view/contact-details-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Contact Details',
};

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;

  return <ContactDetailsView id={id} />;
}
