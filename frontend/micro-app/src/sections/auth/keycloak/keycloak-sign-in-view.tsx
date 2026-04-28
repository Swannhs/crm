'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { useRouter, useSearchParams } from 'src/routes/hooks';

import { CONFIG } from 'src/config-global';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function KeycloakSignInView() {
  const { login, authenticated, loading } = useAuthContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // While loading, the AuthProvider is either processing the ?code exchange or
    // checking an existing session. Do nothing — just show the spinner.
    if (loading) return;

    if (authenticated) {
      const returnTo = searchParams.get('returnTo') || CONFIG.auth.redirectPath;
      router.replace(returnTo);
      return;
    }

    // Not authenticated. Trigger login automatically.
    // The login() function always uses redirectUri = origin + '/' so the code
    // always lands at the root page where the AuthProvider handles it.
    const timer = setTimeout(() => login?.(), 300);
    return () => clearTimeout(timer);
  }, [authenticated, loading, login, router, searchParams]);

  return (
    <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center', py: 10 }}>
      <Typography variant="h5">Sign in to MyManager</Typography>
      
      {loading ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" color="primary" onClick={() => login?.()} size="large">
          Sign In with Keycloak
        </Button>
      )}

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {loading ? 'Preparing secure login...' : 'If you are not redirected automatically, please click the button above.'}
      </Typography>
    </Stack>
  );
}
