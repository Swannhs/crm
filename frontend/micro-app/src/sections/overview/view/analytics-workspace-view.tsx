'use client';

import useSWR from 'swr';
import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { Chart, useChart } from 'src/components/chart';
import { analyticsService } from 'src/services/analytics-service';

// ----------------------------------------------------------------------

export function AnalyticsWorkspaceView() {
  const theme = useTheme();

  const { data: stats, isLoading: statsLoading } = useSWR('analytics-stats', analyticsService.getDashboardStats);
  const { data: revenueData = [], isLoading: revenueLoading } = useSWR('revenue-streams', analyticsService.getRevenueStreams);
  const { data: orderDist = [], isLoading: distLoading } = useSWR('order-distribution', analyticsService.getOrderDistribution);
  const { data: growthData = [], isLoading: growthLoading } = useSWR('customer-growth', analyticsService.getCustomerGrowth);

  const revenueChart = useMemo(() => {
    const categories = revenueData.map((item: any) => item.date_order || 'Unknown');
    const seriesData = revenueData.map((item: any) => item.amount_total || 0);

    return {
      categories,
      series: [{ name: 'Revenue', data: seriesData }],
    };
  }, [revenueData]);

  const distributionChart = useMemo(() => {
    const labels = orderDist.map((item: any) => item.state || 'Unknown');
    const series = orderDist.map((item: any) => item.id_count || item.state_count || 0);
    return { labels, series };
  }, [orderDist]);

  const growthChart = useMemo(() => {
    const categories = growthData.map((item: any) => item.create_date || 'Unknown');
    const seriesData = growthData.map((item: any) => item.id_count || 0);
    return {
      categories,
      series: [{ name: 'New Customers', data: seriesData }],
    };
  }, [growthData]);

  const chartOptions = useChart({
    colors: [theme.palette.primary.main],
    xaxis: { categories: revenueChart.categories },
    tooltip: { y: { formatter: (value: number) => `$${value.toLocaleString()}` } },
  });

  const distOptions = useChart({
    labels: distributionChart.labels,
    legend: { position: 'bottom', horizontalAlign: 'center' },
    plotOptions: { pie: { donut: { size: '90%' } } },
  });

  const growthOptions = useChart({
    colors: [theme.palette.success.main],
    xaxis: { categories: growthChart.categories },
  });

  if (statsLoading || revenueLoading || distLoading || growthLoading) {
    return (
      <DashboardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
        <CircularProgress />
      </DashboardContent>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <Box>
          <Typography variant="h4">Business Intelligence Dashboard</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            A high-fidelity visualization of your platform's operational health and growth.
          </Typography>
        </Box>
      </Stack>

      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Revenue Streams</Typography>
            <Chart type="bar" series={revenueChart.series} options={chartOptions} height={364} />
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Order Distribution</Typography>
            <Chart type="donut" series={distributionChart.series} options={distOptions} height={364} />
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
           <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Customer Growth</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>New members acquired per month.</Typography>
              <Chart 
                 type="area" 
                 series={growthChart.series} 
                 options={growthOptions} 
                 height={240} 
              />
           </Card>
        </Grid>

        <Grid xs={12} md={8}>
           <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Conversion Metrics</Typography>
              <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                 <StatWidget label="Total Leads" value={stats?.leads || 0} color="primary" />
                 <StatWidget label="Opportunities" value={stats?.opportunities || 0} color="info" />
                 <StatWidget label="Active Sales" value={stats?.activeSales || 0} color="success" />
                 <StatWidget label="Revenue" value={`$${(stats?.totalRevenue || 0).toLocaleString()}`} color="warning" />
              </Stack>
              <Box sx={{ p: 10, bgcolor: 'background.neutral', borderRadius: 2, textAlign: 'center' }}>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Historical trend analysis and multi-axis correlation data.
                 </Typography>
              </Box>
           </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}

function StatWidget({ label, value, color }: any) {
   return (
      <Box>
         <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>{label}</Typography>
         <Typography variant="h4" sx={{ color: `${color}.main` }}>{value}</Typography>
      </Box>
   );
}
