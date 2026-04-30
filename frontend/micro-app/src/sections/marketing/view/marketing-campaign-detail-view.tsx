'use client';

import { useQuery } from '@tanstack/react-query';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { useRouter } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';

import { marketingService } from '../services/marketing-service';
import { MarketingCampaignForm } from '../components/marketing-campaign-form';
import { useMarketingCampaign, useMarketingSegments } from '../hooks/use-marketing';

// ----------------------------------------------------------------------

type Props = {
  id?: string;
};

export function MarketingCampaignDetailView({ id }: Props) {
  const router = useRouter();
  const isEdit = !!id;

  const { data: campaign, isLoading: campaignLoading } = useMarketingCampaign(id || '');
  const { data: segments = [], isLoading: segmentsLoading } = useMarketingSegments();
  const usageQuery = useQuery({
    queryKey: ['marketing-campaign-template-usage', id],
    enabled: Boolean(id),
    queryFn: () => marketingService.getCampaignTemplateUsage(String(id)),
  });
  const eventsQuery = useQuery({
    queryKey: ['marketing-campaign-delivery-events', id],
    enabled: Boolean(id),
    queryFn: () => marketingService.getCampaignDeliveryEvents(String(id)),
  });
  
  if (campaignLoading || segmentsLoading) {
    return (
      <DashboardContent>
        <Stack alignItems="center" justifyContent="center" sx={{ py: 20 }}>
          <CircularProgress />
        </Stack>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction="row" alignItems="center" sx={{ mb: 3 }}>
        <Button
          onClick={() => router.back()}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Typography variant="h4">{isEdit ? 'Edit Campaign' : 'New Campaign'}</Typography>
      </Stack>

      <MarketingCampaignForm campaign={campaign} segments={segments} />

      {isEdit && (
        <Stack spacing={2} sx={{ mt: 3 }}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Template Usage</Typography>
            {usageQuery.isError && <Alert severity="info">Template usage metadata is unavailable.</Alert>}
            {Array.isArray(usageQuery.data) && usageQuery.data.length === 0 && (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>No template recorded.</Typography>
            )}
            {Array.isArray(usageQuery.data) && usageQuery.data.length > 0 && (
              <Stack spacing={1}>
                {usageQuery.data.slice(0, 10).map((u: any) => (
                  <Typography key={u.id} variant="body2">
                    {u.templateNameSnapshot || 'Template'} • {new Date(u.appliedAt).toLocaleString()}
                  </Typography>
                ))}
              </Stack>
            )}
          </Card>

          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Delivery Event Timeline</Typography>
            {eventsQuery.isError && <Alert severity="info">Delivery events are unavailable.</Alert>}
            {Array.isArray(eventsQuery.data) && eventsQuery.data.length === 0 && (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>No delivery events recorded.</Typography>
            )}
            {Array.isArray(eventsQuery.data) && eventsQuery.data.length > 0 && (
              <Stack spacing={1}>
                {eventsQuery.data.slice(0, 20).map((event: any) => (
                  <Typography key={event.id} variant="body2">
                    {String(event.eventType || '').toUpperCase()} • {new Date(event.occurredAt).toLocaleString()} • {event.recipientEmail || event.recipientPhone || 'recipient'}
                  </Typography>
                ))}
              </Stack>
            )}
          </Card>
        </Stack>
      )}
    </DashboardContent>
  );
}
