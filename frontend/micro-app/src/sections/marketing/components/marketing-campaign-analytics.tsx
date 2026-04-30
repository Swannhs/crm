import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';

import { Iconify } from 'src/components/iconify';
import { CampaignAnalytics } from '../types';

type Props = {
  analytics?: CampaignAnalytics;
  loading?: boolean;
};

export function MarketingCampaignAnalytics({ analytics, loading }: Props) {
  const theme = useTheme();

  if (loading) {
    return (
      <Stack alignItems="center" justifyContent="center" sx={{ py: 10 }}>
        <CircularProgress />
      </Stack>
    );
  }

  const items = [
    {
      label: 'Delivered',
      value: analytics?.delivered ?? 0,
      rate: `${analytics?.deliveryRate ?? 0}%`,
      icon: 'solar:check-circle-bold-duotone',
      color: 'success',
    },
    {
      label: 'Opened',
      value: analytics?.opened ?? 0,
      rate: `${analytics?.openRate ?? 0}%`,
      icon: 'solar:letter-opened-bold-duotone',
      color: 'info',
    },
    {
      label: 'Clicked',
      value: analytics?.clicked ?? 0,
      rate: `${analytics?.clickRate ?? 0}%`,
      icon: 'solar:cursor-bold-duotone',
      color: 'primary',
    },
    {
      label: 'Converted',
      value: analytics?.converted ?? 0,
      rate: `${analytics?.conversionCount ?? 0} conversions`,
      icon: 'solar:bag-bold-duotone',
      color: 'warning',
    },
    {
      label: 'Bounced',
      value: analytics?.bounced ?? 0,
      rate: `${analytics?.bounceRate ?? 0}%`,
      icon: 'solar:danger-bold-duotone',
      color: 'error',
    },
    {
      label: 'Unsubscribed',
      value: analytics?.unsubscribed ?? 0,
      rate: `${analytics?.unsubscribeRate ?? 0}%`,
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
