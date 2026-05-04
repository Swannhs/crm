import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { AppLoader } from 'src/components/loading';

import { CampaignAnalytics, formatOptionalNumber } from '../types';

type Props = {
  analytics?: CampaignAnalytics;
  loading?: boolean;
};

export function MarketingCampaignAnalytics({ analytics, loading }: Props) {
  const theme = useTheme();

  if (loading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ py: 4 }}>
        <AppLoader type="linear" label="Loading campaign analytics..." />
      </Stack>
    );
  }

  const items = [
    {
      label: 'Delivered',
      value: formatOptionalNumber(analytics?.delivered),
      rate: typeof analytics?.deliveryRate === 'number' ? `${analytics.deliveryRate}%` : 'Unavailable',
      icon: 'solar:check-circle-bold-duotone',
      color: 'success',
    },
    {
      label: 'Opened',
      value: formatOptionalNumber(analytics?.opened),
      rate: typeof analytics?.openRate === 'number' ? `${analytics.openRate}%` : 'Unavailable',
      icon: 'solar:letter-opened-bold-duotone',
      color: 'info',
    },
    {
      label: 'Clicked',
      value: formatOptionalNumber(analytics?.clicked),
      rate: typeof analytics?.clickRate === 'number' ? `${analytics.clickRate}%` : 'Unavailable',
      icon: 'solar:cursor-bold-duotone',
      color: 'primary',
    },
    {
      label: 'Converted',
      value: formatOptionalNumber(analytics?.converted),
      rate: typeof analytics?.conversionCount === 'number' ? `${analytics.conversionCount} conversions` : 'Unavailable',
      icon: 'solar:bag-bold-duotone',
      color: 'warning',
    },
    {
      label: 'Bounced',
      value: formatOptionalNumber(analytics?.bounced),
      rate: typeof analytics?.bounceRate === 'number' ? `${analytics.bounceRate}%` : 'Unavailable',
      icon: 'solar:danger-bold-duotone',
      color: 'error',
    },
    {
      label: 'Unsubscribed',
      value: formatOptionalNumber(analytics?.unsubscribed),
      rate: typeof analytics?.unsubscribeRate === 'number' ? `${analytics.unsubscribeRate}%` : 'Unavailable',
      icon: 'solar:user-minus-bold-duotone',
      color: 'secondary',
    },
  ];

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid key={item.label} item xs={12} sm={6} md={4}>
          <Card sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette[item.color as any].main,
                bgcolor: alpha(theme.palette[item.color as any].main, 0.08),
                mr: 2,
              }}
            >
              <Iconify icon={item.icon} width={24} />
            </Box>

            <Box>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                {item.label}
              </Typography>
              <Stack direction="row" alignItems="baseline" spacing={0.5}>
                <Typography variant="h4">{item.value}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  ({item.rate})
                </Typography>
              </Stack>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
