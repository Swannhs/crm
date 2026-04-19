'use client';

import { useEffect } from 'react';

import { useRouter } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function Page() {
  const router = useRouter();
  const { loading } = useAuthContext();

  useEffect(() => {
    // Wait for Keycloak to resolve (processes any ?code callback automatically).
    // Then send to the dashboard — AuthGuard handles the sign-in redirect if not authenticated.
    if (!loading) {
      router.replace(CONFIG.auth.redirectPath);
    }
  }, [loading, router]);

  return null;
}
