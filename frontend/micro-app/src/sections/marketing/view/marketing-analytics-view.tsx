'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';

import { useMarketingSummary } from '../hooks/use-marketing';
import { marketingService } from '../services/marketing-service';
import { MarketingSummaryCards } from '../components/marketing-summary-cards';
import { MarketingUnavailableState } from '../components/marketing-state-blocks';
import { MarketingCampaignAnalytics } from '../components/marketing-campaign-analytics';

export function MarketingAnalyticsView() {
  const { data: summary, isLoading } = useMarketingSummary();
  const analyticsQuery = useQuery({
    queryKey: ['marketing-overall-analytics'],
    queryFn: marketingService.getOverallAnalytics,
  });

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          Marketing Analytics
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Real campaign delivery and conversion metrics.
        </Typography>
      </Box>

      <Stack spacing={4}>
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Overall Summary</Typography>
          <MarketingSummaryCards summary={summary} />
        </Box>

        {!analyticsQuery.data ? (
          <MarketingUnavailableState
            title="Analytics unavailable"
            description="Marketing analytics are not available yet."
          />
        ) : (
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Delivery Performance</Typography>
            <MarketingCampaignAnalytics analytics={analyticsQuery.data} loading={isLoading || analyticsQuery.isLoading} />
          </Box>
        )}
      </Stack>
    </DashboardContent>
  );
}
