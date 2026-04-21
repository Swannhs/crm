import { redirect } from 'next/navigation';

import { paths } from 'src/routes/paths';

export const metadata = {
  title: 'Dashboard: Shop',
};

export default function Page() {
  redirect(paths.dashboard.shopSection('dashboard'));
}
