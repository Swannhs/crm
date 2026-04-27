'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';
import { Chart, useChart } from 'src/components/chart';
import type { IContactAnalyticsResponse } from 'src/services/contact-service';

type Props = {
  analytics?: IContactAnalyticsResponse | null;
  isLoading?: boolean;
};

function formatMonthKey(monthKey: string): string {
  const [year, month] = monthKey.split('-').map(Number);
  if (!year || !month) return monthKey;
  const date = new Date(year, month - 1, 1);
  return date.toLocaleDateString(undefined, { month: 'short', year: '2-digit' });
}

export function ContactGraph({ analytics, isLoading }: Props) {
  const statusData = {
    labels: (analytics?.statusDistribution || []).map((item) => item.label),
    series: (analytics?.statusDistribution || []).map((item) => item.value),
  };
  const typeData = {
    labels: (analytics?.typeDistribution || []).map((item) => item.label),
    series: (analytics?.typeDistribution || []).map((item) => item.value),
  };
  const monthlyData = {
    labels: (analytics?.monthlyCreated || []).map((item) => formatMonthKey(item.month)),
    seriesData: (analytics?.monthlyCreated || []).map((item) => item.value),
  };

  const monthlyChartOptions = useChart({
    xaxis: { categories: monthlyData.labels },
    yaxis: { min: 0, forceNiceScale: true },
    plotOptions: {
      bar: { columnWidth: '38%' },
    },
  });

  const statusChartOptions = useChart({
    labels: statusData.labels.length ? statusData.labels : ['No data'],
    legend: { position: 'bottom', horizontalAlign: 'center' },
  });

  const typeChartOptions = useChart({
    labels: typeData.labels.length ? typeData.labels : ['No data'],
    legend: { position: 'bottom', horizontalAlign: 'center' },
  });

  if (isLoading) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 2 }} />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">Contacts Created (Last 6 Months)</Typography>
              <Typography variant="h4">{fShortenNumber(analytics?.totalContacts || 0)}</Typography>
            </Stack>
            <Box sx={{ height: 320 }}>
              <Chart
                type="bar"
                series={[{ name: 'Contacts', data: monthlyData.seriesData }]}
                options={monthlyChartOptions}
                height={320}
              />
            </Box>
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">Status Distribution</Typography>
            <Box sx={{ height: 320 }}>
              <Chart
                type="donut"
                series={statusData.series.length ? statusData.series : [1]}
                options={statusChartOptions}
                height={320}
              />
            </Box>
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">Contact Type Distribution</Typography>
            <Box sx={{ height: 320 }}>
              <Chart
                type="donut"
                series={typeData.series.length ? typeData.series : [1]}
                options={typeChartOptions}
                height={320}
              />
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
