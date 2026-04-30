'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { DashboardContent } from 'src/layouts/dashboard';
import { MarketingSummaryCards } from '../components/marketing-summary-cards';
import { MarketingCampaignAnalytics } from '../components/marketing-campaign-analytics';
import { useMarketingSummary } from '../hooks/use-marketing';

export function MarketingAnalyticsView() {
  const { data: summary, isLoading } = useMarketingSummary();

  // Mock data for overall analytics
  const overallAnalytics = {
    delivered: 12500,
    opened: 4500,
    clicked: 1200,
    bounced: 150,
    unsubscribed: 45,
    complained: 5,
    converted: 85,
    deliveryRate: 98.5,
    openRate: 36,
    clickRate: 9.6,
    unsubscribeRate: 0.36,
    bounceRate: 1.2,
    conversionCount: 85,
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Marketing Analytics
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Detailed performance metrics for your marketing efforts across all campaigns.
        </Typography>
      </Box>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Overall Summary</Typography>
          <MarketingSummaryCards summary={summary} />
        </Box>

        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Channel Performance</Typography>
          <MarketingCampaignAnalytics analytics={overallAnalytics} />
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3, height: 400, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Campaign Growth</Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.neutral', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ color: 'text.disabled' }}>
                  [Chart: Campaigns Sent vs Conversions]
                </Typography>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: 400, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>Channel Health</Typography>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.neutral', borderRadius: 1.5 }}>
                <Typography variant="h6" sx={{ color: 'text.disabled' }}>
                  [Chart: Delivery Health]
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </DashboardContent>
  );
}
