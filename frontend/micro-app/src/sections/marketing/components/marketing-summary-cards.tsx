import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { MarketingSummary } from '../types';

type Props = {
  summary?: MarketingSummary;
};

export function MarketingSummaryCards({ summary }: Props) {
  const theme = useTheme();

  const items = [
    {
      title: 'Total Contacts',
      value: summary?.totalContacts ?? 0,
      icon: 'solar:users-group-rounded-bold-duotone',
      color: 'primary',
    },
    {
      title: 'Active Campaigns',
      value: summary?.activeCampaigns ?? 0,
      icon: 'solar:play-bold-duotone',
      color: 'success',
    },
    {
      title: 'Scheduled',
      value: summary?.scheduledCampaigns ?? 0,
      icon: 'solar:calendar-bold-duotone',
      color: 'info',
    },
    {
      title: 'Sent',
      value: summary?.sentCampaigns ?? 0,
      icon: 'solar:paper-plane-bold-duotone',
      color: 'warning',
    },
    {
      title: 'Open Rate',
      value: `${summary?.openRate ?? 0}%`,
      icon: 'solar:letter-opened-bold-duotone',
      color: 'error',
    },
    {
      title: 'Click Rate',
      value: `${summary?.clickRate ?? 0}%`,
      icon: 'solar:cursor-bold-duotone',
      color: 'secondary',
    },
  ];

  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid key={item.title} item xs={12} sm={6} md={4}>
          <Card
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="h3">{item.value}</Typography>
            </Box>

            <Box
              sx={{
                width: 64,
                height: 64,
                display: 'flex',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.palette[item.color as any].main,
                bgcolor: alpha(theme.palette[item.color as any].main, 0.08),
              }}
            >
              <Iconify icon={item.icon} width={32} />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
