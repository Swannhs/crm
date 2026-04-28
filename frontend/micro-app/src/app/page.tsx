'use client';

import { useEffect } from 'react';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export default function Page() {
  const router = useRouter();
  const { loading, authenticated } = useAuthContext();

  useEffect(() => {
    // Wait for Keycloak to resolve (processes any ?code callback automatically).
    // Then route directly based on auth state to avoid dashboard/auth ping-pong.
    if (!loading) {
      if (authenticated) {
        router.replace(CONFIG.auth.redirectPath);
      } else {
        router.replace(`${paths.auth.keycloak.signIn}?returnTo=${encodeURIComponent(CONFIG.auth.redirectPath)}`);
      }
    }
  }, [authenticated, loading, router]);

  return null;
}
