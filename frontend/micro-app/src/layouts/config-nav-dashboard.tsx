import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

import type { NavSection } from './types';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`} />
);

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData: NavSection[] = [
  /**
   * Overview
   */
  {
    subheader: 'Management',
    items: [
      { title: 'Overview', path: paths.dashboard.overview, icon: ICONS.dashboard },
      { title: 'Contacts', path: paths.dashboard.contacts, icon: ICONS.user },
      { title: 'Billing', path: '/dashboard/billing', icon: ICONS.invoice },
      { title: 'Finance', path: '/dashboard/finance', icon: ICONS.banking },
      { title: 'Projects', path: '/dashboard/projects', icon: ICONS.kanban },
      { title: 'Marketing', path: '/dashboard/marketing', icon: ICONS.course },
      { title: 'Calendar', path: '/dashboard/calendar', icon: ICONS.calendar },
      { title: 'Community', path: '/dashboard/community', icon: ICONS.chat },
      { title: 'Chat', path: '/dashboard/chat', icon: ICONS.mail },
      { title: 'Booking', path: '/dashboard/booking', icon: ICONS.tour },
      { title: 'Settings', path: '/dashboard/settings', icon: ICONS.setting },
      { title: 'Documents', path: paths.dashboard.documents, icon: ICONS.folder },
      { title: 'Employees', path: paths.dashboard.employees, icon: ICONS.job },
    ],
  },
];
