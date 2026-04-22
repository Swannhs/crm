'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { reputationService } from 'src/services/reputation-service';

import { ReputationReviews } from '../reputation-reviews';
import { ReputationRequests } from '../reputation-requests';
import { ReputationSettings } from '../reputation-settings';

// ----------------------------------------------------------------------

export function ReputationView() {
  const [currentTab, setCurrentTab] = useState('overview');

  const { data: overview, isLoading } = useQuery({
    queryKey: ['reputation-overview'],
    queryFn: () => reputationService.getOverview(),
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <Box>
          <Typography variant="h4">Reputation Management</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Monitor and improve your online presence across Google and Facebook.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Iconify icon="solar:chat-round-plus-bold" />}
          onClick={() => setCurrentTab('requests')}
        >
          Request Review
        </Button>
      </Stack>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} md={4}>
          <SummaryCard title="Average Rating" value={overview?.averageRating || 0} icon="solar:star-bold-duotone" color="warning" subText={`${overview?.totalReviews || 0} Total Reviews`} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SummaryCard title="Positive Sentiment" value={`${overview?.sentiment || 0}%`} icon="solar:emoji-funny-circle-bold-duotone" color="success" subText="Based on recent reviews" />
        </Grid>
        <Grid item xs={12} md={4}>
          <SummaryCard title="Response Rate" value={`${overview?.responseRate || 0}%`} icon="solar:chat-round-check-bold-duotone" color="info" subText="Replies to reviews" />
        </Grid>
      </Grid>

      <Tabs
        value={currentTab}
        onChange={(e, val) => setCurrentTab(val)}
        sx={{ mb: 5 }}
      >
        <Tab icon={<Iconify icon="solar:chart-bold-duotone" />} label="Overview & Reviews" value="overview" />
        <Tab icon={<Iconify icon="solar:letter-bold-duotone" />} label="Review Requests" value="requests" />
        <Tab icon={<Iconify icon="solar:settings-bold-duotone" />} label="Settings" value="settings" />
      </Tabs>

      {currentTab === 'overview' && <ReputationReviews />}
      {currentTab === 'requests' && <ReputationRequests />}
      {currentTab === 'settings' && <ReputationSettings />}
    </DashboardContent>
  );
}

function SummaryCard({ title, value, icon, color, subText }: any) {
  return (
    <Card
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: `${color}.lighter`,
        color: `${color}.darker`,
      }}
    >
      <Box>
        <Typography variant="subtitle2" sx={{ opacity: 0.64, mb: 1 }}>{title}</Typography>
        <Typography variant="h3">{value}</Typography>
        <Typography variant="caption" sx={{ opacity: 0.64 }}>{subText}</Typography>
      </Box>
      <Iconify icon={icon} width={64} sx={{ opacity: 0.24 }} />
    </Card>
  );
}
