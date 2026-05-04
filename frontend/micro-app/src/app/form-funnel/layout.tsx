import { ReactNode } from 'react';
import { DashboardLayout } from 'src/layouts/dashboard';
import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
