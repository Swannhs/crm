'use client';

import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { marketingService } from 'src/services/marketing-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { AnalyticsWidgetSummary } from 'src/sections/overview/analytics-widget-summary';

// ----------------------------------------------------------------------

export function MarketingOverviewView() {
  const { data: campaigns, isLoading: campaignsLoading } = useQuery({
    queryKey: ['marketing-campaigns'],
    queryFn: () => marketingService.getCampaigns(),
  });

  const { data: forms, isLoading: formsLoading } = useQuery({
    queryKey: ['marketing-forms'],
    queryFn: () => marketingService.getOptinForms(),
  });

  if (campaignsLoading || formsLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Marketing Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Total Campaigns"
            total={campaigns?.length || 0}
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Opt-in Forms"
            total={forms?.length || 0}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Active Subscribers"
            total={1240}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Sent Emails"
            total={42500}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.png" />}
          />
        </Grid>

        <Grid item xs={12} md={8}>
           <Card sx={{ p: 3, minHeight: 400 }}>
              <Typography variant="h6">Recent Campaigns</Typography>
              <Box sx={{ mt: 3 }}>
                {campaigns?.map((c: any) => (
                   <Box key={c._id} sx={{ mb: 2, p: 2, borderBottom: '1px solid #f0f0f0' }}>
                      <Typography variant="subtitle2">{c.title}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {c.type} • Status: {c.status}
                      </Typography>
                   </Box>
                ))}
              </Box>
           </Card>
        </Grid>

        <Grid item xs={12} md={4}>
           <Card sx={{ p: 3, minHeight: 400 }}>
              <Typography variant="h6">Form Performance</Typography>
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                 <Typography variant="h2" sx={{ color: 'primary.main' }}>12.5%</Typography>
                 <Typography variant="subtitle2">Average Conversion Rate</Typography>
              </Box>
           </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
