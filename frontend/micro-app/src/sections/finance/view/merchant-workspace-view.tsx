'use client';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { Chart, useChart } from 'src/components/chart';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function FinanceMerchantWorkspaceView({ merchantId }: { merchantId?: string }) {
  const theme = useTheme();

  return (
    <FeatureRouteShell
      title={merchantId ? `Merchant: ${merchantId}` : 'Merchant Management'}
      description="Orchestrate organizational merchant accounts, track transaction health, and manage integrated payment gateways."
      links={[
        { href: '#', label: 'Overview' },
        { href: '#', label: 'Transactions' },
        { href: '#', label: 'Gateway Settings' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:shield-check-bold" />}
        >
          Verify Account
        </Button>
      }
    >
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {/* Merchant Stats */}
        <Grid item xs={12} md={4}>
           <Card sx={{ p: 3 }}>
              <Stack spacing={2.5}>
                 <Box>
                    <Typography variant="overline" sx={{ color: 'text.disabled' }}>Settlement Balance</Typography>
                    <Typography variant="h3">$12,480.00</Typography>
                 </Box>
                 <Box sx={{ p: 2, bgcolor: 'success.lighter', borderRadius: 1.5, color: 'success.darker' }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                       <Iconify icon="solar:check-circle-bold" />
                       <Typography variant="subtitle2">Merchant Active</Typography>
                    </Stack>
                    <Typography variant="caption">Last payout processed 4h ago</Typography>
                 </Box>
                 <Divider sx={{ borderStyle: 'dashed' }} />
                 <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">Gateway</Typography>
                    <Typography variant="subtitle2">Full Stack Payments</Typography>
                 </Stack>
                 <Stack direction="row" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary">Merchant ID</Typography>
                    <Typography variant="subtitle2">{merchantId || 'MTR-88201'}</Typography>
                 </Stack>
              </Stack>
           </Card>
        </Grid>

        {/* Transaction Volume Chart */}
        <Grid item xs={12} md={8}>
           <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Transaction Volume</Typography>
              <Chart
                type="area"
                series={[
                  { name: 'Gross Volume', data: [31, 40, 28, 51, 42, 109, 100] },
                  { name: 'Net Volume', data: [11, 32, 45, 32, 34, 52, 41] },
                ]}
                options={useChart({
                  colors: [theme.palette.primary.main, theme.palette.info.main],
                  xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
                })}
                height={260}
              />
           </Card>
        </Grid>

        {/* Recent Payouts */}
        <Grid item xs={12}>
           <Card>
              <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <Typography variant="h6">Recent Payouts</Typography>
                 <Button variant="soft" size="small">View All</Button>
              </Box>
              <Divider />
              <Box sx={{ overflowX: 'auto' }}>
                 <Stack sx={{ minWidth: 600 }}>
                    {[
                      { id: 'PY-1', date: 'Oct 24, 2024', amount: '$4,200.00', status: 'Succeeded' },
                      { id: 'PY-2', date: 'Oct 23, 2024', amount: '$1,850.50', status: 'Succeeded' },
                      { id: 'PY-3', date: 'Oct 22, 2024', amount: '$6,420.00', status: 'Pending' },
                    ].map((payout) => (
                       <Box key={payout.id} sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: (theme) => `1px solid ${theme.palette.divider}`, '&:last-child': { borderBottom: 0 } }}>
                          <Box sx={{ flexGrow: 1 }}>
                             <Typography variant="subtitle2">{payout.id}</Typography>
                             <Typography variant="caption" color="text.secondary">{payout.date}</Typography>
                          </Box>
                          <Typography variant="subtitle1" sx={{ mr: 4 }}>{payout.amount}</Typography>
                          <Box sx={{ 
                             px: 1, 
                             borderRadius: 0.5, 
                             bgcolor: payout.status === 'Succeeded' ? 'success.lighter' : 'warning.lighter',
                             color: payout.status === 'Succeeded' ? 'success.dark' : 'warning.dark',
                             fontSize: 11,
                             fontWeight: 700
                          }}>
                             {payout.status.toUpperCase()}
                          </Box>
                       </Box>
                    ))}
                 </Stack>
              </Box>
           </Card>
        </Grid>
      </Grid>
    </FeatureRouteShell>
  );
}
