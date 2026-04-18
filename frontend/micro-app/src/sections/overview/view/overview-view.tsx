'use client';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { useMockedUser } from 'src/auth/hooks';

import { AnalyticsWidgetSummary } from '../analytics-widget-summary';

// ----------------------------------------------------------------------

export function OverviewView() {
  const { user } = useMockedUser();

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back {user?.displayName} 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Total Contacts"
            total={714000}
            icon="solar:users-group-rounded-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Active Invoices"
            total={1352831}
            color="info"
            icon="solar:bill-list-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Pending Signatures"
            total={1723315}
            color="warning"
            icon="solar:pen-bold"
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Messages"
            total={234}
            color="error"
            icon="solar:chat-round-dots-bold"
          />
        </Grid>

        <Grid xs={12} md={8}>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Platform Performance
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Your organization's reach has increased by 12% this month. Maintain high engagement by updating your community posts.
          </Typography>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
