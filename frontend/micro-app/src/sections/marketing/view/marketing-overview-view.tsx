'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';
import { marketingService } from 'src/services/marketing-service';

import { Iconify } from 'src/components/iconify';

import { MarketingSummaryCard } from '../marketing-summary-card';

export function MarketingOverviewView() {
  const campaignsQuery = useQuery({ queryKey: ['marketing-campaigns-overview'], queryFn: () => marketingService.getCampaigns({ pageSize: 8 }) });
  const analyticsQuery = useQuery({ queryKey: ['marketing-analytics-overview'], queryFn: () => marketingService.getAnalytics() });

  if (campaignsQuery.isLoading || analyticsQuery.isLoading) {
    return (
      <DashboardContent maxWidth="xl">
        <Skeleton variant="text" width={260} height={40} />
        <Grid container spacing={3} sx={{ mt: 1 }}>
          {[...Array(4)].map((_, i) => (
            <Grid key={i} item xs={12} md={3}><Skeleton variant="rectangular" sx={{ borderRadius: 2 }} height={110} /></Grid>
          ))}
        </Grid>
      </DashboardContent>
    );
  }

  const campaigns = Array.isArray(campaignsQuery.data) ? campaignsQuery.data : [];
  const analytics = analyticsQuery.data;

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h4">Marketing Dashboard</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Odoo-backed campaigns, attribution, and conversion analytics.
          </Typography>
        </Box>
        <Stack direction="row" spacing={1.5}>
          <Button component={Link} href={paths.dashboard.marketingSection('analytics')} variant="outlined">View Analytics</Button>
          <Button component={Link} href={paths.dashboard.marketingSection('campaigns')} variant="contained" startIcon={<Iconify icon="solar:rocket-bold" />}>
            Open Workspace
          </Button>
        </Stack>
      </Stack>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}><MarketingSummaryCard title="Total Campaigns" value={analytics?.totalCampaigns ?? 0} icon="solar:flag-bold-duotone" color="primary" /></Grid>
        <Grid item xs={12} md={3}><MarketingSummaryCard title="Active Campaigns" value={analytics?.activeCampaigns ?? 0} icon="solar:play-bold-duotone" color="success" /></Grid>
        <Grid item xs={12} md={3}><MarketingSummaryCard title="Leads" value={analytics?.totalLeads ?? 0} icon="solar:user-plus-bold-duotone" color="info" /></Grid>
        <Grid item xs={12} md={3}><MarketingSummaryCard title="Conversion" value={`${analytics?.conversionRate ?? 0}%`} icon="solar:chart-2-bold-duotone" color="warning" /></Grid>
      </Grid>

      <Card sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Recent Campaigns</Typography>
        <Stack spacing={1.25}>
          {campaigns.slice(0, 6).map((campaign: any) => (
            <Alert key={campaign.id} severity={campaign.active ? 'success' : 'warning'}>
              {campaign.name}
            </Alert>
          ))}
          {campaigns.length === 0 && <Alert severity="info">No campaigns found. Create your first one in Workspace.</Alert>}
        </Stack>
      </Card>
    </DashboardContent>
  );
}
