'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function AdpSuccessPage() {
  return (
    <Container component={MotionContainer} sx={{ textAlign: 'center', py: 15 }}>
      <m.div variants={varBounce().in}>
        <Box
          sx={{
            mb: 5,
            width: 120,
            height: 120,
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'success.lighter',
            color: 'success.main',
          }}
        >
          <Iconify icon="eva:checkmark-circle-2-fill" width={80} />
        </Box>
      </m.div>

      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h3">Successfully Connected!</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          Your organization is now securely linked with ADP. <br />
          Data synchronization will begin automatically in the background.
        </Typography>
      </Stack>

      <Card
        sx={{
          p: 4,
          mb: 5,
          maxWidth: 480,
          mx: 'auto',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          textAlign: 'left',
        }}
      >
        <Typography variant="subtitle2" sx={{ mb: 3 }}>What's next?</Typography>
        <Stack spacing={3}>
           <Stack direction="row" spacing={2}>
              <Iconify icon="solar:user-bold" sx={{ color: 'primary.main' }} />
              <Box>
                 <Typography variant="subtitle2">Employee Sync</Typography>
                 <Typography variant="caption" sx={{ color: 'text.secondary' }}>Verify that all active employees have been imported correctly.</Typography>
              </Box>
           </Stack>
           <Stack direction="row" spacing={2}>
              <Iconify icon="solar:calendar-bold" sx={{ color: 'primary.main' }} />
              <Box>
                 <Typography variant="subtitle2">Payroll Data</Typography>
                 <Typography variant="caption" sx={{ color: 'text.secondary' }}>Review payroll periods and attendance synchronization settings.</Typography>
              </Box>
           </Stack>
        </Stack>
      </Card>

      <Button
        component={RouterLink}
        href={paths.dashboard.root}
        size="large"
        variant="contained"
        startIcon={<Iconify icon="eva:arrow-back-fill" />}
      >
        Back to Dashboard
      </Button>
    </Container>
  );
}
