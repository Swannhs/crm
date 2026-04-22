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
  shopId?: string;
  productId?: string;
  orderId?: string;
  workspaceId?: string;
  boardId?: string;
  cartId?: string;
};

export function PublicCommerceView({ mode, shopId, productId, orderId, workspaceId, boardId, cartId }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ py: 3 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={10}>
          {/* Online Shop Flow */}
          {mode === 'online-shop' && (
            <Stack spacing={4}>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h3">Organizational Storefront</Typography>
                  <Button variant="soft" startIcon={<Iconify icon="solar:cart-bold" />}>Cart (0)</Button>
               </Box>
               
               <Grid container spacing={3}>
                  {[1, 2, 3, 4].map((p) => (
                    <Grid item xs={12} sm={6} md={3} key={p}>
                       <Card sx={{ p: 0, overflow: 'hidden' }}>
                          <Box sx={{ height: 160, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                             <Iconify icon="solar:box-bold" width={48} color="text.disabled" />
                          </Box>
                          <Box sx={{ p: 2 }}>
                             <Typography variant="subtitle2">Premium Product {p}</Typography>
                             <Typography variant="h6" color="primary" sx={{ mt: 0.5 }}>$49.99</Typography>
                             <Button fullWidth variant="contained" sx={{ mt: 2 }} size="small">Add to Cart</Button>
                          </Box>
                       </Card>
                    </Grid>
                  ))}
               </Grid>
            </Stack>
          )}

          {/* Table-side Ordering Flow */}
          {mode === 'table-ordering' && (
            <Stack spacing={4} sx={{ textAlign: 'center' }}>
               <Iconify icon="solar:tuning-square-2-bold-duotone" width={80} color="primary.main" sx={{ mx: 'auto' }} />
               <Typography variant="h3">Table-side Orchestration</Typography>
               <Typography variant="body1" color="text.secondary">
                  Scanning Table {boardId || 'N/A'} in Room {workspaceId || 'N/A'}...
               </Typography>
               <Box sx={{ p: 4, bgcolor: 'background.neutral', borderRadius: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2 }}>Join Existing Order?</Typography>
                  <Button variant="contained" fullWidth size="large">Sync with Table</Button>
               </Box>
            </Stack>
          )}

          {/* Delivery Status Flow */}
          {mode === 'delivery-status' && (
            <Stack spacing={4} sx={{ textAlign: 'center' }}>
               <Typography variant="h4">Delivery Tactical Monitor</Typography>
               <Box sx={{ p: 4, bgcolor: 'background.neutral', borderRadius: 2 }}>
                  <Stack spacing={3}>
                     {[
                       { step: 'Order Placed', time: '10:00 AM', completed: true },
                       { step: 'Preparing', time: '10:05 AM', completed: true },
                       { step: 'Out for Delivery', time: 'Pending', completed: false },
                     ].map((step, i) => (
                        <Stack key={i} direction="row" spacing={2} alignItems="center">
                           <Box sx={{ 
                              width: 24, height: 24, borderRadius: '50%', 
                              bgcolor: step.completed ? 'success.main' : 'background.paper',
                              border: (theme) => `2px solid ${theme.palette.divider}`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center'
                           }}>
                              {step.completed && <Iconify icon="solar:check-circle-bold" width={16} color="common.white" />}
                           </Box>
                           <Box sx={{ textAlign: 'left', flexGrow: 1 }}>
                              <Typography variant="subtitle2" sx={{ opacity: step.completed ? 1 : 0.4 }}>{step.step}</Typography>
                              <Typography variant="caption" color="text.secondary">{step.time}</Typography>
                           </Box>
                        </Stack>
                     ))}
                  </Stack>
               </Box>
               <Button variant="soft" fullWidth>Contact Courier</Button>
            </Stack>
          )}

          {/* Board Share Flow */}
          {mode === 'board-share' && (
            <Card sx={{ p: 5, textAlign: 'center' }}>
               <Iconify icon="solar:users-group-rounded-bold-duotone" width={80} color="primary.main" sx={{ mb: 2 }} />
               <Typography variant="h4">Shared Project Board</Typography>
               <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  You have been granted tactical access to view and collaborate on the <strong>Organizational Roadmap</strong> board.
               </Typography>
               <Button variant="contained" size="large">Accept Invitation & View Board</Button>
            </Card>
          )}

          {/* POS/Display Modes Placeholder */}
          {['pos-main', 'kds-display', 'cfd-display', 'kiosk-mode'].includes(mode) && (
            <Box sx={{ 
               height: '70vh', 
               bgcolor: 'common.black', 
               color: 'common.white', 
               borderRadius: 2, 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               flexDirection: 'column',
               p: 4,
               textAlign: 'center'
            }}>
               <Iconify icon="solar:monitor-bold-duotone" width={100} sx={{ mb: 3, opacity: 0.4 }} />
               <Typography variant="h3" sx={{ textTransform: 'uppercase', letterSpacing: 2 }}>{mode.replace('-', ' ')}</Typography>
               <Typography variant="body1" sx={{ mt: 2, opacity: 0.7 }}>
                  Orchestrating high-fidelity operational display mode for organizational POS terminals...
               </Typography>
            </Box>
          )}

          {/* Default Placeholder */}
          {!['online-shop', 'board-share', 'pos-main', 'kds-display', 'cfd-display', 'kiosk-mode'].includes(mode) && (
            <Card sx={{ p: 5, textAlign: 'center' }}>
               <Typography variant="h4">Tactical Commerce Component: {mode.toUpperCase()}</Typography>
               <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  Orchestrating high-fidelity guest-facing commerce orchestration...
               </Typography>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
