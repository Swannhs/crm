'use client';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  mode: 'checkout' | 'sign';
  contractId?: string;
  contactId?: string;
};

export function PublicMembershipView({ mode, contractId, contactId }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 4 }}>
            {mode === 'checkout' && (
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h4">Elite Performance Membership</Typography>
                  <Typography variant="body2" color="text.secondary">Review your subscription details and complete the checkout.</Typography>
                </Box>

                <Box sx={{ p: 3, bgcolor: 'primary.lighter', borderRadius: 2, color: 'primary.darker' }}>
                   <Stack direction="row" spacing={2} alignItems="center">
                      <Iconify icon="solar:star-bold" width={32} />
                      <Box>
                         <Typography variant="subtitle1">Annual Plan - $1,200.00</Typography>
                         <Typography variant="caption">Full access to all facilities and premium coaching sessions.</Typography>
                      </Box>
                   </Stack>
                </Box>

                <Divider />

                <Typography variant="h6">Personal Information</Typography>
                <Grid container spacing={2}>
                   <Grid item xs={12} sm={6}><TextField fullWidth label="First Name" defaultValue="John" /></Grid>
                   <Grid item xs={12} sm={6}><TextField fullWidth label="Last Name" defaultValue="Doe" /></Grid>
                   <Grid item xs={12}><TextField fullWidth label="Email Address" defaultValue="john.doe@example.com" /></Grid>
                </Grid>

                <Button variant="contained" color="primary" size="large" fullWidth>
                   Continue to Payment
                </Button>
              </Stack>
            )}

            {mode === 'sign' && (
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h4">Digital Contract Signing</Typography>
                  <Typography variant="body2" color="text.secondary">Please review the terms of your Elite Performance membership contract.</Typography>
                </Box>

                <Box sx={{ 
                   height: 300, 
                   overflowY: 'auto', 
                   p: 3, 
                   border: `1px solid ${theme.palette.divider}`, 
                   borderRadius: 1,
                   bgcolor: 'background.neutral'
                }}>
                   <Typography variant="subtitle2" sx={{ mb: 2 }}>MEMBERSHIP TERMS & CONDITIONS</Typography>
                   <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      This contract orchestrates the legal relationship between the organization and the member. 
                      By signing this digital document, you agree to the tactical operational guidelines and 
                      financial commitments associated with the Elite Performance tier.
                      <br /><br />
                      1. Subscription Cycle: Annual billing from the date of activation.
                      <br />
                      2. Cancellation Policy: Requires 30-day tactical notice via the organization portal.
                      <br />
                      3. Facility Access: Unlimited during standard operational hours.
                   </Typography>
                </Box>

                <Box sx={{ 
                   height: 120, 
                   border: `2px dashed ${theme.palette.divider}`, 
                   borderRadius: 1,
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'crosshair',
                   bgcolor: 'grey.50'
                }}>
                   <Typography variant="caption" color="text.disabled">Draw your signature here</Typography>
                </Box>

                <Button variant="contained" color="primary" size="large" fullWidth>
                   Sign & Activate Membership
                </Button>
              </Stack>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
