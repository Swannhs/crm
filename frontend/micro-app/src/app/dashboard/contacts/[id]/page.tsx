import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';

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
  redirect(paths.dashboard.contactView(params.id, 'overview'));
}
