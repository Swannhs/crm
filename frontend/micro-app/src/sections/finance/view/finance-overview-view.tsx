'use client';

import dynamic from 'next/dynamic';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TableContainer from '@mui/material/TableContainer';
import CircularProgress from '@mui/material/CircularProgress';

import { financeService } from 'src/services/finance-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { Scrollbar } from 'src/components/scrollbar';
import { AnalyticsWidgetSummary } from 'src/sections/overview/analytics-widget-summary';

// Dynamic import for ApexCharts to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// ----------------------------------------------------------------------

export function FinanceOverviewView() {
  const { data: revenueData, isLoading: revenueLoading } = useQuery({
    queryKey: ['finance-revenue'],
    queryFn: () => financeService.getRevenueStats(),
  });

  const { data: invoices, isLoading: invoicesLoading } = useQuery({
    queryKey: ['finance-invoices'],
    queryFn: () => financeService.getInvoices(),
  });

  if (revenueLoading || invoicesLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const chartOptions: any = {
    chart: { toolbar: { show: false }, zoom: { enabled: false } },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
    colors: ['#00A76F'],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.5, opacityTo: 0.1 } },
  };

  const chartSeries = [{ name: 'Revenue', data: [12000, 15000, 18000, 14000, 22000, 25000, 19000, 28000] }];

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>Financial Overview</Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Total Revenue"
            total={72450}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnalyticsWidgetSummary
            title="Net Profit"
            total={42100}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-users.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
           <AnalyticsWidgetSummary
            title="Pending Invoices"
            total={12}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-buy.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
           <AnalyticsWidgetSummary
            title="Expenses"
            total={15200}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic-glass-message.png" />}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Revenue Breakdown" />
            <Box sx={{ p: 3, pb: 1 }}>
              <Chart dir="ltr" type="area" series={chartSeries} options={chartOptions} height={364} />
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardHeader title="Top Services" />
            <Box sx={{ p: 3 }}>
               <Stack spacing={3}>
                  {['Web Development', 'Consulting', 'SaaS Subscription'].map((label, index) => (
                    <Box key={label}>
                       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">{label}</Typography>
                          <Typography variant="subtitle2">{[45, 30, 25][index]}%</Typography>
                       </Box>
                       <Box sx={{ height: 8, bgcolor: 'background.neutral', borderRadius: 1, overflow: 'hidden' }}>
                          <Box sx={{ height: '100%', bgcolor: 'primary.main', width: `${[45, 30, 25][index]}%` }} />
                       </Box>
                    </Box>
                  ))}
               </Stack>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardHeader title="Recent Invoices" sx={{ mb: 3 }} />
            <TableContainer sx={{ overflow: 'unset' }}>
              <Scrollbar>
                <Table sx={{ minWidth: 800 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Invoice ID</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(invoices || []).slice(0, 5).map((row: any) => (
                      <TableRow key={row._id} hover>
                        <TableCell>{row.invoiceNumber || row._id.slice(0, 8)}</TableCell>
                        <TableCell>{row.customerName || 'Syncing...'}</TableCell>
                        <TableCell>{new Date(row.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell>${row.totalAmount.toFixed(2)}</TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    ))}
                    {(invoices || []).length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 5 }}>No invoices found</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Scrollbar>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
