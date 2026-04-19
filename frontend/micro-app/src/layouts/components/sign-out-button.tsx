import { useCallback } from 'react';

import Button from '@mui/material/Button';

import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

export function SignOutButton({ onClose, ...other }) {
  const { logout } = useAuthContext();

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      onClose?.();
    } catch (error) {
      console.error(error);
    }
  }, [logout, onClose]);

  return (
    <Button fullWidth variant="soft" size="large" color="error" onClick={handleLogout} {...other}>
      Logout
    </Button>
  );
}
