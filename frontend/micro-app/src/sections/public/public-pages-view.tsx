'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  mode: string;
  slug?: string;
  id?: string;
  token?: string;
  formId?: string;
  userId?: string;
  organizationId?: string;
  location?: string;
};

export function PublicPagesView({ mode, slug, id, token, formId, userId, organizationId, location }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 4 }}>
            {/* Quote Flows */}
            {mode === 'quote-view' && (
              <Stack spacing={4}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                   <Box>
                      <Typography variant="h4">Quote #QT-8201</Typography>
                      <Typography variant="body2" color="text.secondary">Prepared for: John Doe</Typography>
                   </Box>
                   <Chip label="PENDING REVIEW" color="warning" variant="soft" />
                </Box>
                <Divider />
                <Stack spacing={2}>
                   <Typography variant="subtitle1">Tactical Services</Typography>
                   {[
                     { item: 'Standard Membership (Annual)', price: '$1,200.00' },
                     { item: 'Onboarding Fee', price: '$50.00' },
                   ].map((line, i) => (
                      <Stack key={i} direction="row" justifyContent="space-between">
                         <Typography variant="body2">{line.item}</Typography>
                         <Typography variant="subtitle2">{line.price}</Typography>
                      </Stack>
                   ))}
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                   <Typography variant="h5">Total Amount</Typography>
                   <Typography variant="h5" color="primary">$1,250.00</Typography>
                </Stack>
                <Button variant="contained" size="large" fullWidth>Accept Quote</Button>
              </Stack>
            )}

            {/* Verification Flow */}
            {mode === 'verify-email' && (
              <Stack spacing={3} sx={{ textAlign: 'center' }}>
                 <Iconify icon="solar:letter-bold-duotone" width={64} color="primary.main" sx={{ mx: 'auto' }} />
                 <Typography variant="h4">Verify Your Email</Typography>
                 <Typography variant="body2" color="text.secondary">We've sent a tactical verification code to your email address. Please enter it below to activate your account.</Typography>
                 <TextField fullWidth placeholder="Enter 6-digit code" sx={{ textAlign: 'center' }} inputProps={{ style: { textAlign: 'center', letterSpacing: 8, fontSize: 24, fontWeight: 'bold' } }} />
                 <Button variant="contained" fullWidth size="large">Verify Account</Button>
              </Stack>
            )}

            {/* Web Preview Flow */}
            {mode === 'web-preview' && (
              <Stack spacing={4}>
                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4">Website Preview</Typography>
                    <Stack direction="row" spacing={1}>
                       <Button size="small" variant="soft" startIcon={<Iconify icon="solar:monitor-bold" />}>Desktop</Button>
                       <Button size="small" variant="soft" startIcon={<Iconify icon="solar:smartphone-bold" />}>Mobile</Button>
                    </Stack>
                 </Box>
                 <Box sx={{ 
                    height: '60vh', 
                    bgcolor: 'background.neutral', 
                    borderRadius: 2, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: (theme) => `1px solid ${theme.palette.divider}`
                 }}>
                    <Box sx={{ textAlign: 'center' }}>
                       <Iconify icon="solar:globus-bold" width={80} color="primary.main" sx={{ mb: 2, opacity: 0.4 }} />
                       <Typography variant="h5">Orchestrating High-Fidelity Preview</Typography>
                       <Typography variant="body2" color="text.secondary">Website ID: {id || 'N/A'}</Typography>
                    </Box>
                 </Box>
                 <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
                    This is a tactical preview of the organizational web asset. Content may vary after final publication.
                 </Typography>
              </Stack>
            )}

            {/* QR Pay Placeholder */}
            {mode === 'qr-pay' && (
              <Stack spacing={3} sx={{ textAlign: 'center' }}>
                 <Typography variant="h4">QR Payment Orchestration</Typography>
                 <Box sx={{ p: 4, bgcolor: 'background.neutral', borderRadius: 2, display: 'flex', justifyContent: 'center' }}>
                    <Iconify icon="solar:qr-code-bold" width={200} />
                 </Box>
                 <Typography variant="body2" color="text.secondary">Scan the QR code above to initiate the secure payment sequence.</Typography>
              </Stack>
            )}

            {/* Default Placeholder */}
            {!['quote-view', 'verify-email', 'qr-pay'].includes(mode) && (
              <Box sx={{ textAlign: 'center', py: 5 }}>
                 <Typography variant="h5">Tactical Interface: {mode.toUpperCase()}</Typography>
                 <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Orchestrating high-fidelity public component for organizational interaction...
                 </Typography>
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

import Chip from '@mui/material/Chip';
