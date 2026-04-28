'use client';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  mode: 'onboarding' | 'verified' | 'plans' | 'payment' | 'success' | 'token-auth' | 'fdd-public';
  orgId?: string;
  planId?: string;
  token?: string;
  formId?: string;
  userId?: string;
};

export function PublicOrgView({ mode, orgId, planId, token, formId, userId }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={10}>
          {/* Onboarding Flow */}
          {mode === 'onboarding' && (
            <Card sx={{ p: 5 }}>
               <Stack spacing={4}>
                  <Box sx={{ textAlign: 'center' }}>
                     <Typography variant="h3">Welcome to MyManager</Typography>
                     <Typography variant="body1" color="text.secondary">Let's orchestrate your organization's digital identity in a few tactical steps.</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                     <Stack direction="row" spacing={2}>
                        {[1, 2, 3].map((step) => (
                           <Box key={step} sx={{ 
                              width: 40, height: 40, borderRadius: '50%', 
                              bgcolor: step === 1 ? 'primary.main' : 'background.neutral',
                              color: step === 1 ? 'common.white' : 'text.disabled',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontWeight: 700
                           }}>{step}</Box>
                        ))}
                     </Stack>
                  </Box>

                  <Grid container spacing={3}>
                     <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Organization Name" placeholder="e.g. Elite Martial Arts" />
                     </Grid>
                     <Grid item xs={12} md={6}>
                        <TextField fullWidth label="Primary Category" select defaultValue="Martial Arts">
                           <option value="Martial Arts">Martial Arts</option>
                           <option value="Fitness">Fitness</option>
                           <option value="Yoga">Yoga</option>
                        </TextField>
                     </Grid>
                     <Grid item xs={12}>
                        <TextField fullWidth label="Organization Website" placeholder="https://yourbrand.com" />
                     </Grid>
                  </Grid>

                  <Button variant="contained" color="primary" size="large" fullWidth>Continue to Plan Selection</Button>
               </Stack>
            </Card>
          )}

          {/* Verification Flow */}
          {mode === 'verified' && (
            <Card sx={{ p: 5, textAlign: 'center' }}>
               <Iconify icon="solar:check-circle-bold-duotone" width={80} color="success.main" sx={{ mb: 2 }} />
               <Typography variant="h3">Organization Verified</Typography>
               <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Your organization account has been successfully verified and tactical access has been granted.
               </Typography>
               <Button variant="contained" size="large">Enter Dashboard</Button>
            </Card>
          )}

          {/* Billing Plans Flow */}
          {mode === 'plans' && (
            <Box>
               <Box sx={{ textAlign: 'center', mb: 5 }}>
                  <Typography variant="h3">Select Your Mission Level</Typography>
                  <Typography variant="body1" color="text.secondary">Choose the tactical plan that best fits your organizational scale.</Typography>
               </Box>
               <Grid container spacing={3}>
                  {[
                    { name: 'Starter', price: '$99', feat: ['1 Location', 'Basic CRM'] },
                    { name: 'Professional', price: '$299', feat: ['5 Locations', 'Marketing Hub', 'Reputation Manager'] },
                    { name: 'Enterprise', price: 'Custom', feat: ['Unlimited Locations', 'Dedicated Manager'] },
                  ].map((plan) => (
                    <Grid item xs={12} md={4} key={plan.name}>
                       <Card sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h5" color="primary">{plan.name}</Typography>
                          <Typography variant="h2" sx={{ my: 3 }}>{plan.price}<Typography component="span" variant="caption">/mo</Typography></Typography>
                          <Stack spacing={1.5} sx={{ flexGrow: 1, mb: 4 }}>
                             {plan.feat.map((f) => (
                                <Stack key={f} direction="row" spacing={1} alignItems="center">
                                   <Iconify icon="solar:check-circle-bold" color="green" width={18} />
                                   <Typography variant="body2">{f}</Typography>
                                </Stack>
                             ))}
                          </Stack>
                          <Button variant="contained" fullWidth>Select {plan.name}</Button>
                       </Card>
                    </Grid>
                  ))}
               </Grid>
            </Box>
          )}

          {/* Payment & Success Placeholder */}
          {(mode === 'payment' || mode === 'success') && (
            <Card sx={{ p: 5, textAlign: 'center' }}>
               <Typography variant="h4">{mode === 'payment' ? 'Secure Payment' : 'Success!'}</Typography>
               <Typography variant="body2" sx={{ mt: 2 }}>
                  {mode === 'payment' ? 'Orchestrating secure transaction gateway...' : 'Your subscription is now active.'}
               </Typography>
            </Card>
          )}

          {/* Token Auth Flow */}
          {mode === 'token-auth' && (
            <Card sx={{ p: 5, textAlign: 'center' }}>
               <CircularProgress sx={{ mb: 3 }} />
               <Typography variant="h5">Authenticating Organization Token</Typography>
               <Typography variant="body2" color="text.secondary">Orchestrating secure handshake with organizational identity server...</Typography>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
