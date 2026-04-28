'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  mode: 'checkin' | 'bracket' | 'fundraising';
  eventId?: string;
  campaignId?: string;
  guestId?: string;
};

export function PublicEventView({ mode, eventId, campaignId, guestId }: Props) {
  const [checkInCode, setCheckInCode] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Box sx={{ py: 3 }}>
      {mode === 'checkin' && (
        <Grid container spacing={3} justifyContent="center">
           <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: 'center' }}>
                 {!isSuccess ? (
                    <Stack spacing={4}>
                       <Box>
                          <Box sx={{ width: 80, height: 80, borderRadius: '50%', bgcolor: 'primary.lighter', color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
                             <Iconify icon="solar:qr-code-bold-duotone" width={40} />
                          </Box>
                          <Typography variant="h4">Event Check-In</Typography>
                          <Typography variant="body2" color="text.secondary">Scan your QR code or enter your 6-digit check-in code below.</Typography>
                       </Box>

                       <TextField 
                         fullWidth 
                         label="Check-In Code" 
                         placeholder="e.g. 123456" 
                         value={checkInCode} 
                         onChange={(e) => setCheckInCode(e.target.value)}
                         inputProps={{ style: { textAlign: 'center', fontSize: 24, letterSpacing: 8, fontWeight: 700 } }}
                       />

                       <Button 
                         fullWidth 
                         size="large" 
                         variant="contained" 
                         color="primary"
                         onClick={() => setIsSuccess(true)}
                         disabled={checkInCode.length < 4}
                       >
                         Verify & Check-In
                       </Button>

                       <Box sx={{ p: 3, borderRadius: 2, border: (theme) => `1px dashed ${theme.palette.divider}` }}>
                          <Typography variant="caption" sx={{ fontWeight: 700, mb: 1, display: 'block', color: 'text.secondary' }}>QUICK SCANNER</Typography>
                          <Button variant="soft" color="inherit" startIcon={<Iconify icon="solar:camera-bold" />}>Open Camera</Button>
                       </Box>
                    </Stack>
                 ) : (
                    <Stack spacing={3} alignItems="center" sx={{ py: 4 }}>
                       <Box sx={{ 
                          width: 80, 
                          height: 80, 
                          borderRadius: '50%', 
                          bgcolor: 'success.lighter', 
                          color: 'success.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2
                       }}>
                          <Iconify icon="solar:verified-check-bold" width={48} />
                       </Box>
                       <Box>
                          <Typography variant="h4">Check-In Successful!</Typography>
                          <Typography variant="body1" color="text.secondary">Welcome to the event. Your registration has been verified.</Typography>
                       </Box>
                       <Button variant="soft" color="inherit" onClick={() => { setIsSuccess(false); setCheckInCode(''); }}>Check-In Another Participant</Button>
                    </Stack>
                 )}
              </Card>
           </Grid>
        </Grid>
      )}

      {mode === 'bracket' && (
         <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
               <Card sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 3 }}>Submit Tournament Result</Typography>
                  <Stack spacing={4}>
                     <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
                        <Box sx={{ textAlign: 'center', flex: 1 }}>
                           <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: 'primary.lighter', mx: 'auto', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Typography variant="h6">ME</Typography>
                           </Box>
                           <Typography variant="subtitle2">You</Typography>
                           <TextField size="small" sx={{ mt: 1, width: 60 }} placeholder="0" />
                        </Box>
                        <Typography variant="h4" color="text.disabled">VS</Typography>
                        <Box sx={{ textAlign: 'center', flex: 1 }}>
                           <Box sx={{ width: 64, height: 64, borderRadius: '50%', bgcolor: 'grey.200', mx: 'auto', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Typography variant="h6">OP</Typography>
                           </Box>
                           <Typography variant="subtitle2">Opponent</Typography>
                           <TextField size="small" sx={{ mt: 1, width: 60 }} placeholder="0" />
                        </Box>
                     </Stack>

                     <Divider sx={{ borderStyle: 'dashed' }} />

                     <Box>
                        <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Match Details</Typography>
                        <Grid container spacing={2}>
                           <Grid item xs={12} sm={6}>
                              <TextField fullWidth label="Match ID" value="#MTR-482" disabled />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField fullWidth label="Stage" value="Quarter Finals" disabled />
                           </Grid>
                        </Grid>
                     </Box>

                     <Button variant="contained" color="primary" size="large">Submit Final Score</Button>
                  </Stack>
               </Card>
            </Grid>
            <Grid item xs={12} md={4}>
               <Card sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>Match Information</Typography>
                  <Stack spacing={2}>
                     <Box>
                        <Typography variant="caption" color="text.secondary">TOURNAMENT</Typography>
                        <Typography variant="subtitle2">Annual Spring Open 2024</Typography>
                     </Box>
                     <Box>
                        <Typography variant="caption" color="text.secondary">LOCATION</Typography>
                        <Typography variant="subtitle2">Main Arena - Court 4</Typography>
                     </Box>
                  </Stack>
               </Card>
            </Grid>
         </Grid>
      )}

      {mode === 'fundraising' && (
         <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <Card sx={{ p: 0, overflow: 'hidden' }}>
               <Box sx={{ height: 300, bgcolor: 'primary.main', p: 6, color: 'common.white', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <Typography variant="overline" sx={{ opacity: 0.8 }}>SUPPORT OUR MISSION</Typography>
                  <Typography variant="h2" sx={{ fontWeight: 800 }}>Spring Youth Fundraiser</Typography>
               </Box>
               <Box sx={{ p: 4 }}>
                  <Grid container spacing={4}>
                     <Grid item xs={12} md={7}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Why Your Support Matters</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                           Every donation helps us provide high-quality training equipment and community scholarships for our youth programs. 
                           Your contribution directly impacts the future of our local athletes.
                        </Typography>
                        <Box sx={{ mt: 4, p: 3, bgcolor: 'background.neutral', borderRadius: 2 }}>
                           <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                              <Typography variant="subtitle2">Campaign Goal</Typography>
                              <Typography variant="subtitle2">$8,500 / $10,000</Typography>
                           </Stack>
                           <Box sx={{ width: '100%', height: 12, bgcolor: 'divider', borderRadius: 6, overflow: 'hidden' }}>
                              <Box sx={{ width: '85%', height: '100%', bgcolor: 'primary.main' }} />
                           </Box>
                        </Box>
                     </Grid>
                     <Grid item xs={12} md={5}>
                        <Card sx={{ p: 3, bgcolor: 'background.neutral' }}>
                           <Typography variant="h6" sx={{ mb: 2 }}>Make a Donation</Typography>
                           <Stack spacing={2}>
                              <Grid container spacing={1}>
                                 {['$10', '$25', '$50', '$100'].map((amt) => (
                                    <Grid item xs={6} key={amt}>
                                       <Button fullWidth variant="outlined" color="primary">{amt}</Button>
                                    </Grid>
                                 ))}
                              </Grid>
                              <TextField fullWidth label="Custom Amount" placeholder="Enter amount" />
                              <Button fullWidth variant="contained" color="primary" size="large">Donate Now</Button>
                           </Stack>
                        </Card>
                     </Grid>
                  </Grid>
               </Box>
            </Card>
         </Box>
      )}
    </Box>
  );
}
