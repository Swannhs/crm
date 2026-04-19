import { ContactRouteView } from 'src/sections/contacts/view/contact-route-view';

export const metadata = {
  title: 'Dashboard: Employee Contacts',
};

export default function Page() {
  return <ContactRouteView type="employee" />;
}
