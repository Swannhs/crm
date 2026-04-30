'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { useRouter } from 'src/routes/hooks';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';

import { useMarketingCampaign, useMarketingSegments } from '../hooks/use-marketing';
import { MarketingCampaignForm } from '../components/marketing-campaign-form';

// ----------------------------------------------------------------------

type Props = {
  id?: string;
};

export function MarketingCampaignDetailView({ id }: Props) {
  const router = useRouter();
  const isEdit = !!id;

  const { data: campaign, isLoading: campaignLoading } = useMarketingCampaign(id || '');
  const { data: segments = [], isLoading: segmentsLoading } = useMarketingSegments();
  
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
    </DashboardContent>
  );
}
