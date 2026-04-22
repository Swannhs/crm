'use client';

import { useMemo } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { DashboardContent } from 'src/layouts/dashboard';
import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AnalyticsWorkspaceView() {
  const theme = useTheme();

  const salesData = useMemo(() => [
    { name: 'Direct', data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43] },
    { name: 'Affiliate', data: [13, 23, 20, 8, 13, 27, 33, 12, 11, 14, 21] },
    { name: 'Organic', data: [11, 17, 15, 15, 21, 14, 15, 13, 22, 18, 15] },
  ], []);

  const chartOptions = useChart({
    colors: [theme.palette.primary.main, theme.palette.info.main, theme.palette.warning.main],
    chart: { stacked: true },
    stroke: { width: 0 },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
    },
    tooltip: { y: { formatter: (value: number) => `$${value}k` } },
  });

  const distributionOptions = useChart({
    labels: ['Completed', 'Pending', 'Cancelled', 'Refunded'],
    colors: [theme.palette.success.main, theme.palette.warning.main, theme.palette.error.main, theme.palette.info.main],
    stroke: { show: false },
    legend: { position: 'bottom', horizontalAlign: 'center' },
    tooltip: { fillSeriesColor: false },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            show: true,
            total: {
               label: 'Total Orders',
               formatter: () => '1,240',
            },
          },
        },
      },
    },
  });

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
            <Chart type="bar" series={salesData} options={chartOptions} height={364} />
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Order Distribution</Typography>
            <Chart type="donut" series={[44, 32, 12, 12]} options={distributionOptions} height={364} />
          </Card>
        </Grid>

        <Grid xs={12} md={4}>
           <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>Customer Growth</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 3 }}>New members acquired per month.</Typography>
              <Chart 
                 type="area" 
                 series={[{ name: 'New Customers', data: [12, 34, 21, 56, 45, 67, 89, 76, 54, 43, 32] }]} 
                 options={useChart({
                    colors: [theme.palette.success.main],
                    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'] },
                 })} 
                 height={240} 
              />
           </Card>
        </Grid>

        <Grid xs={12} md={8}>
           <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 3 }}>Conversion Metrics</Typography>
              <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                 <StatWidget label="Visit to Lead" value="12.5%" color="primary" />
                 <StatWidget label="Lead to Sale" value="8.4%" color="success" />
                 <StatWidget label="Churn Rate" value="1.2%" color="error" />
              </Stack>
              <Box sx={{ p: 10, bgcolor: 'background.neutral', borderRadius: 2, textAlign: 'center' }}>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Complex multi-axis line chart for correlation analysis would be rendered here.
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
