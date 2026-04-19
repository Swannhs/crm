'use client';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function LegacyAuthPageShell({ children }: Props) {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: 4 }}>{children}</Paper>
    </Container>
  );
}
