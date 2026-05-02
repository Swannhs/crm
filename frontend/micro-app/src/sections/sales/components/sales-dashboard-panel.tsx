import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { fCurrency } from 'src/utils/format-number';
import { Chart, useChart } from 'src/components/chart';
import { Label } from 'src/components/label';

import type { SalesSummary, SalesActivity } from '../types';

type Props = {
  summary?: SalesSummary;
  pipelineByStage?: Array<{ stage: string; count: number; value: number }>;
  recentActivities?: SalesActivity[];
};

export function SalesDashboardPanel({ summary, pipelineByStage = [], recentActivities = [] }: Props) {
  const theme = useTheme();

  const chartOptions = useChart({
    chart: { type: 'bar' },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: '28%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => fCurrency(val),
      style: { fontSize: '12px' },
    },
    xaxis: {
      categories: pipelineByStage.map((s) => s.stage),
      labels: {
        formatter: (val: number) => `$${Math.round(val / 1000)}k`,
      },
    },
    colors: [
      theme.palette.primary.main,
      theme.palette.info.main,
      theme.palette.warning.main,
      theme.palette.success.main,
      theme.palette.error.main,
    ],
    legend: { show: false },
    tooltip: {
      y: {
        formatter: (val: number) => fCurrency(val),
      },
    },
  });

  const series = [{ data: pipelineByStage.map((s) => s.value) }];

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Card sx={{ p: 3, border: `1px solid ${theme.palette.divider}`, boxShadow: theme.customShadows.card }}>
            <CardHeader title="Pipeline Value by Stage" subheader="Expected revenue distribution" sx={{ mb: 3, p: 0 }} />
            <Chart type="bar" series={series} options={chartOptions} height={320} />
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
          <Stack spacing={3}>
            <Card sx={{ p: 3, border: `1px solid ${theme.palette.divider}`, boxShadow: theme.customShadows.card }}>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>Weighted Forecast</Typography>
              <Typography variant="h3">{fCurrency(summary?.weightedValue || 0)}</Typography>
              <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 'bold', mt: 1, display: 'block' }}>
                +12.5% from last month
              </Typography>
            </Card>

            <Card sx={{ p: 3, border: `1px solid ${theme.palette.divider}`, boxShadow: theme.customShadows.card }}>
               <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>Total Open Deals</Typography>
               <Typography variant="h3">{summary?.opportunityCount || 0}</Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                 Across all pipeline stages
               </Typography>
            </Card>

            <Card sx={{ p: 3, border: `1px solid ${theme.palette.divider}`, boxShadow: theme.customShadows.card }}>
               <Typography variant="subtitle2" sx={{ color: 'text.secondary', mb: 1 }}>Win Rate</Typography>
               <Typography variant="h3">
                 {summary?.wonValue && summary?.lostValue 
                   ? `${Math.round((summary.wonValue / (summary.wonValue + summary.lostValue)) * 100)}%` 
                   : '0%'}
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                 Based on closed deals
               </Typography>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
