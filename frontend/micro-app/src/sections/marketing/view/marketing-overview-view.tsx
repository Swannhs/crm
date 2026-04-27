'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { marketingService } from 'src/services/marketing-service';

import { MarketingSummaryCard } from '../marketing-summary-card';
import { MarketingRecentActivity } from '../marketing-recent-activity';

// ----------------------------------------------------------------------

export function MarketingOverviewView() {
  const { data: campaigns, isLoading: campaignsLoading } = useQuery({
    queryKey: ['marketing-campaigns'],
    queryFn: () => marketingService.getCampaigns(),
  });

  const { data: automations, isLoading: automationsLoading } = useQuery({
    queryKey: ['marketing-automations'],
    queryFn: () => marketingService.getAutomations(),
  });

  if (campaignsLoading || automationsLoading) {
    return (
      <DashboardContent maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
          <Box><Skeleton variant="text" width={240} height={40} /><Skeleton variant="text" width={400} /></Box>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: 1 }} />
            <Skeleton variant="rectangular" width={140} height={40} sx={{ borderRadius: 1 }} />
          </Stack>
        </Stack>
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {[...Array(4)].map((_, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Skeleton variant="rectangular" height={100} sx={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}><Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} /></Grid>
          <Grid item xs={12} md={4}><Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} /></Grid>
        </Grid>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <Box>
          <Typography variant="h4">Marketing Dashboard</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Drive growth through automated campaigns and multi-channel outreach.
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
           <Button variant="soft" color="inherit" startIcon={<Iconify icon="solar:chart-bold" />}>
              Full Analytics
           </Button>
           <Button variant="contained" startIcon={<Iconify icon="solar:add-circle-bold" />}>
              Create Campaign
           </Button>
        </Stack>
      </Stack>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} md={3}>
           <MarketingSummaryCard title="Total Campaigns" value={campaigns?.length || 0} icon="solar:mailbox-bold-duotone" color="primary" />
        </Grid>
        <Grid item xs={12} md={3}>
           <MarketingSummaryCard title="Active Automations" value={automations?.length || 0} icon="solar:magic-stick-3-bold-duotone" color="info" />
        </Grid>
        <Grid item xs={12} md={3}>
           <MarketingSummaryCard title="Avg. Open Rate" value="24.8%" icon="solar:eye-bold-duotone" color="success" />
        </Grid>
        <Grid item xs={12} md={3}>
           <MarketingSummaryCard title="Avg. CTR" value="4.2%" icon="solar:cursor-bold-duotone" color="warning" />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
           <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Campaign Performance</Typography>
              <Box sx={{ height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.neutral', borderRadius: 2 }}>
                 <Stack alignItems="center" spacing={1}>
                    <Iconify icon="solar:chart-line-duotone" width={64} sx={{ opacity: 0.24 }} />
                    <Typography variant="body2" color="text.secondary">Performance visualization loading...</Typography>
                 </Stack>
              </Box>
           </Card>
        </Grid>

        <Grid item xs={12} md={4}>
           <MarketingRecentActivity />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
