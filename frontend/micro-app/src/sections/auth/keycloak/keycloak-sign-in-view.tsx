'use client';

import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function KeycloakSignInView() {
  const { login, authenticated, loading } = useAuthContext();

  useEffect(() => {
    if (!loading && !authenticated) {
      login?.();
    }
  }, [authenticated, loading, login]);

  return (
    <Stack spacing={3} sx={{ alignItems: 'center', textAlign: 'center', py: 10 }}>
      <Typography variant="h5">Redirecting to Login...</Typography>
      <CircularProgress />
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Please wait while we redirect you to our secure login provider.
      </Typography>
    </Stack>
  );
}
