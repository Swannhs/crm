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

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

type Props = {
  mode: 'feedback' | 'ticket-feedback' | 'chatbot-feedback' | 'help-center' | 'help-article';
  id?: string;
  ticketId?: string;
  chatbotId?: string;
};

export function PublicSupportView({ mode, id, ticketId, chatbotId }: Props) {
  const [rating, setRating] = useState(0);

  return (
    <Box sx={{ py: 3 }}>
      {/* Feedback Flow */}
      {(mode === 'feedback' || mode === 'ticket-feedback' || mode === 'chatbot-feedback') && (
        <Grid container spacing={3} justifyContent="center">
           <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, textAlign: 'center' }}>
                 <Stack spacing={4}>
                    <Box>
                       <Typography variant="h4">How was your experience?</Typography>
                       <Typography variant="body2" color="text.secondary">
                          {mode === 'ticket-feedback' ? `Feedback for Ticket #${ticketId}` : 
                           mode === 'chatbot-feedback' ? 'Rate your chat interaction' : 
                           'We value your feedback to help us improve.'}
                       </Typography>
                    </Box>

                    <Stack direction="row" justifyContent="center" spacing={2}>
                       {[1, 2, 3, 4, 5].map((star) => (
                          <Iconify 
                            key={star} 
                            icon={star <= rating ? "solar:star-bold" : "solar:star-outline"} 
                            width={40} 
                            sx={{ color: star <= rating ? 'warning.main' : 'text.disabled', cursor: 'pointer' }}
                            onClick={() => setRating(star)}
                          />
                       ))}
                    </Stack>

                    <TextField 
                      fullWidth 
                      multiline 
                      rows={4} 
                      placeholder="Share your thoughts with us..." 
                      label="Your Comments"
                    />

                    <Button variant="contained" color="primary" size="large" fullWidth>Submit Feedback</Button>
                 </Stack>
              </Card>
           </Grid>
        </Grid>
      )}

      {/* Help Center Flow */}
      {(mode === 'help-center' || mode === 'help-article') && (
        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
           {mode === 'help-center' && (
              <Stack spacing={5}>
                 <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h3">Knowledge Base</Typography>
                    <Typography variant="body1" color="text.secondary">Search our help articles for quick answers and guidance.</Typography>
                    <Box sx={{ mt: 3, maxWidth: 500, mx: 'auto' }}>
                       <TextField 
                          fullWidth 
                          placeholder="Search articles..." 
                          InputProps={{ startAdornment: <Iconify icon="solar:magnifer-bold" sx={{ mr: 1 }} /> }}
                       />
                    </Box>
                 </Box>

                 <Grid container spacing={3}>
                    {['Getting Started', 'Account Settings', 'Billing & Payments', 'Integrations'].map((cat) => (
                       <Grid item xs={12} sm={6} key={cat}>
                          <Card sx={{ p: 3, cursor: 'pointer', '&:hover': { bgcolor: 'background.neutral' } }}>
                             <Stack direction="row" spacing={2} alignItems="center">
                                <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: 'primary.lighter', color: 'primary.main' }}>
                                   <Iconify icon="solar:folder-bold" />
                                </Box>
                                <Box>
                                   <Typography variant="subtitle1">{cat}</Typography>
                                   <Typography variant="caption" color="text.secondary">12 articles in this category</Typography>
                                </Box>
                             </Stack>
                          </Card>
                       </Grid>
                    ))}
                 </Grid>
              </Stack>
           )}

           {mode === 'help-article' && (
              <Card sx={{ p: 4 }}>
                 <Button variant="text" color="inherit" startIcon={<Iconify icon="solar:arrow-left-bold" />} sx={{ mb: 3 }}>Back to Help Center</Button>
                 <Typography variant="overline" color="primary" sx={{ fontWeight: 800 }}>GETTING STARTED</Typography>
                 <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>How to connect your custom domain</Typography>
                 
                 <Stack spacing={3}>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                       Connecting a custom domain to your organization portal is a professional-grade way to enhance your brand presence. 
                       Follow these tactical steps to orchestrate your DNS settings and verify your ownership.
                    </Typography>
                    
                    <Box sx={{ p: 3, bgcolor: 'background.neutral', borderRadius: 2 }}>
                       <Typography variant="subtitle2" sx={{ mb: 1 }}>Pro Tip</Typography>
                       <Typography variant="body2">Ensure your CNAME records are correctly pointed to our server cluster for real-time verification.</Typography>
                    </Box>

                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                       1. Navigate to Domain Settings in your mission control.
                       2. Enter your full domain name (e.g. portal.yourbrand.com).
                       3. Update your DNS records with your registrar.
                    </Typography>
                 </Stack>

                 <Divider sx={{ my: 4, borderStyle: 'dashed' }} />
                 
                 <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle2">Was this article helpful?</Typography>
                    <Stack direction="row" spacing={1}>
                       <Button variant="soft" color="success" startIcon={<Iconify icon="solar:like-bold" />}>Yes</Button>
                       <Button variant="soft" color="error" startIcon={<Iconify icon="solar:dislike-bold" />}>No</Button>
                    </Stack>
                 </Stack>
              </Card>
           )}
        </Box>
      )}
    </Box>
  );
}
