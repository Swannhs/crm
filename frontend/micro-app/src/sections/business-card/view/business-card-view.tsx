'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { businessCardService } from 'src/services/business-card-service';
import { toast } from 'src/components/snackbar';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export function BusinessCardView() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('edit');

  const { data: cardData, isLoading } = useQuery({
    queryKey: ['business-card'],
    queryFn: () => businessCardService.getCard(),
  });

  const saveMutation = useMutation({
    mutationFn: (data: any) => {
       const cardId = cardData?.card?._id;
       if (cardId) return businessCardService.updateCard(cardId, { fields: data });
       return businessCardService.createCard({ fields: data, cardName: 'My Business Card' });
    },
    onSuccess: () => {
      toast.success('Business card saved successfully!');
      queryClient.invalidateQueries({ queryKey: ['business-card'] });
    },
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const fields = cardData?.card?.fields || {};

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <Box>
          <Typography variant="h4">Business Card</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Create and share your digital business card with ease.
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
           <Button variant="soft" color="inherit" startIcon={<Iconify icon="solar:camera-bold" />} onClick={() => setActiveTab('scan')}>
              Scan Physical Card
           </Button>
           <Button variant="contained" onClick={() => saveMutation.mutate(fields)} disabled={saveMutation.isPending}>
              Save Changes
           </Button>
        </Stack>
      </Stack>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Card sx={{ p: 3 }}>
             <Stack spacing={3}>
                <Typography variant="h6">Card Customization</Typography>
                
                <Box>
                   <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>BASIC INFORMATION</Typography>
                   <Stack spacing={2}>
                      <FieldRow label="Full Name" icon="solar:user-bold" />
                      <FieldRow label="Phone Number" icon="solar:phone-bold" />
                      <FieldRow label="Email Address" icon="solar:letter-bold" />
                      <FieldRow label="Profile Photo" icon="solar:camera-bold" />
                   </Stack>
                </Box>

                <Box>
                   <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>WORK INFORMATION</Typography>
                   <Stack spacing={2}>
                      <FieldRow label="Company & Title" icon="solar:case-bold" />
                      <FieldRow label="Website URL" icon="solar:global-bold" />
                   </Stack>
                </Box>

                <Box>
                   <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>SOCIAL LINKS</Typography>
                   <Stack direction="row" flexWrap="wrap" gap={1}>
                      {['LinkedIn', 'Twitter', 'Instagram', 'Facebook'].map(platform => (
                         <Button key={platform} variant="soft" size="small" startIcon={<Iconify icon={`logos:${platform.toLowerCase()}${platform === 'LinkedIn' ? '-icon' : ''}`} width={16} />}>
                            {platform}
                         </Button>
                      ))}
                   </Stack>
                </Box>
             </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Stack spacing={3}>
             <Typography variant="h6">Live Preview</Typography>
             
             {/* Digital Card Preview (Apple Wallet Style) */}
             <Card
                sx={{
                  p: 3,
                  height: 480,
                  borderRadius: 3,
                  position: 'relative',
                  overflow: 'hidden',
                  background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  color: 'primary.contrastText',
                  boxShadow: (theme) => theme.customShadows.z24,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
             >
                <Box sx={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
                
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                   <Iconify icon="solar:share-bold" width={32} />
                   <Typography variant="h6" sx={{ opacity: 0.8 }}>BUSINESS CARD</Typography>
                </Stack>

                <Box>
                   <Avatar sx={{ width: 80, height: 80, mb: 2, border: '4px solid rgba(255,255,255,0.2)' }} />
                   <Typography variant="h4">{fields.fullName?.value || 'Your Name'}</Typography>
                   <Typography variant="body1" sx={{ opacity: 0.8 }}>{fields.company?.title || 'Job Title'}</Typography>
                </Box>

                <Stack spacing={1.5}>
                   <PreviewItem icon="solar:phone-bold" text={fields.phone?.value || '+1 234 567 890'} />
                   <PreviewItem icon="solar:letter-bold" text={fields.email?.value || 'email@example.com'} />
                   <PreviewItem icon="solar:global-bold" text={fields.website?.value || 'www.website.com'} />
                </Stack>
             </Card>

             <Card sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>SHARE YOUR CARD</Typography>
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
                   <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 1.5, border: (theme) => `1px solid ${theme.palette.divider}` }}>
                      <Iconify icon="solar:qr-code-bold" width={120} sx={{ color: 'black' }} />
                   </Box>
                </Stack>
                <Button fullWidth variant="soft" startIcon={<Iconify icon="solar:copy-bold" />}>
                   Copy Shareable Link
                </Button>
             </Card>
          </Stack>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

function FieldRow({ label, icon }: any) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.5, borderBottom: (theme) => `1px dashed ${theme.palette.divider}` }}>
       <Stack direction="row" spacing={2} alignItems="center">
          <Box sx={{ width: 40, height: 40, borderRadius: 1, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Iconify icon={icon} width={20} sx={{ color: 'text.secondary' }} />
          </Box>
          <Box>
             <Typography variant="subtitle2">{label}</Typography>
             <Typography variant="caption" sx={{ color: 'text.secondary' }}>Use profile default</Typography>
          </Box>
       </Stack>
       <Switch defaultChecked />
    </Stack>
  );
}

function PreviewItem({ icon, text }: any) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
       <Iconify icon={icon} width={20} sx={{ opacity: 0.6 }} />
       <Typography variant="body2">{text}</Typography>
    </Stack>
  );
}
