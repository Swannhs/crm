'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export function DashboardAnalyticsTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      {/* Financial Summary */}
      <Grid item xs={12} md={4}>
        <AnalyticsWidgetSummary
          title="Profit & Loss"
          total="$48,240"
          percent={2.6}
          chart={{
            series: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          }}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3, height: '100%' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
            <Box>
              <Typography variant="h6">Business Performance</Typography>
              <Typography variant="caption" color="text.secondary">Lead conversion vs Revenue growth</Typography>
            </Box>
            <Button variant="soft" size="small" endIcon={<Iconify icon="eva:chevron-down-fill" />}>This Month</Button>
          </Stack>
          <Chart
            type="bar"
            series={[
              { name: 'Leads', data: [44, 55, 41, 67, 22, 43, 21, 49] },
              { name: 'Revenue', data: [13, 23, 20, 8, 13, 27, 33, 12] },
            ]}
            options={useChart({
              colors: [theme.palette.primary.main, theme.palette.info.main],
              xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'] },
            })}
            height={300}
          />
        </Card>
      </Grid>

      {/* Goal Tracking */}
      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Organization Goals</Typography>
          <Stack spacing={3}>
            {[
              { label: 'Member Retention', value: 85, color: 'primary' },
              { label: 'Annual Revenue', value: 62, color: 'success' },
              { label: 'Staff Training', value: 45, color: 'warning' },
            ].map((goal) => (
              <Box key={goal.label}>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2">{goal.label}</Typography>
                  <Typography variant="body2">{goal.value}%</Typography>
                </Stack>
                <LinearProgress 
                  variant="determinate" 
                  value={goal.value} 
                  color={goal.color as any} 
                  sx={{ height: 8, borderRadius: 1 }}
                />
              </Box>
            ))}
          </Stack>
        </Card>
      </Grid>

      {/* Notifications & Events */}
      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Recent Alerts</Typography>
          <Stack spacing={2.5}>
            {[
              { title: 'New High-Value Lead', time: '15m ago', icon: 'solar:user-plus-bold', color: 'info' },
              { title: 'Payment Overdue: #INV-482', time: '2h ago', icon: 'solar:bill-list-bold', color: 'error' },
              { title: 'Staff Meeting Reminder', time: '5h ago', icon: 'solar:calendar-bold', color: 'primary' },
            ].map((alert) => (
              <Stack key={alert.title} direction="row" spacing={2} alignItems="center">
                <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: `${alert.color}.lighter`, color: `${alert.color}.main`, display: 'flex' }}>
                   <Iconify icon={alert.icon} />
                </Box>
                <Box>
                  <Typography variant="subtitle2">{alert.title}</Typography>
                  <Typography variant="caption" color="text.secondary">{alert.time}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Card>
      </Grid>

      {/* Task List */}
      <Grid item xs={12} md={4}>
        <Card sx={{ p: 0 }}>
          <Box sx={{ p: 2.5 }}>
            <Typography variant="h6">My Tasks</Typography>
          </Box>
          <Divider />
          <Stack>
            {[
              { task: 'Review new instructor contracts', priority: 'High' },
              { task: 'Update monthly marketing spend', priority: 'Medium' },
              { task: 'Prepare for Q3 board meeting', priority: 'Low' },
            ].map((item) => (
              <Box key={item.task} sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: (theme) => `1px solid ${theme.palette.divider}`, '&:last-child': { borderBottom: 0 } }}>
                <Iconify icon="solar:check-square-bold" sx={{ mr: 2, color: 'text.disabled' }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle2">{item.task}</Typography>
                  <Typography variant="caption" color="text.secondary">Priority: {item.priority}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export function DashboardEcommerceTab() {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>Revenue by Product Category</Typography>
          <Chart
            type="area"
            series={[
              { name: 'Memberships', data: [31, 40, 28, 51, 42, 109, 100] },
              { name: 'Inventory', data: [11, 32, 45, 32, 34, 52, 41] },
            ]}
            options={useChart({
              colors: [theme.palette.primary.main, theme.palette.warning.main],
              xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
            })}
            height={300}
          />
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 3 }}>Sales Overview</Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="caption" color="text.secondary">Total Orders</Typography>
              <Typography variant="h4">1,240</Typography>
              <LinearProgress variant="determinate" value={72} sx={{ mt: 1, height: 6, borderRadius: 1 }} />
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">Conversion Rate</Typography>
              <Typography variant="h4">3.2%</Typography>
              <LinearProgress variant="determinate" value={45} color="info" sx={{ mt: 1, height: 6, borderRadius: 1 }} />
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

// --- Internal Components ---

function AnalyticsWidgetSummary({ title, total, percent, chart }: any) {
  const theme = useTheme();

  return (
    <Card sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2">{title}</Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1, mb: 1 }}>
          <Typography variant="h3">{total}</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Iconify 
            icon={percent < 0 ? 'solar:double-alt-arrow-down-bold-duotone' : 'solar:double-alt-arrow-up-bold-duotone'} 
            sx={{ color: percent < 0 ? 'error.main' : 'success.main' }}
          />
          <Typography variant="subtitle2" sx={{ color: percent < 0 ? 'error.main' : 'success.main' }}>
            {percent > 0 && '+'}
            {percent}%
          </Typography>
          <Typography variant="caption" color="text.secondary">than last month</Typography>
        </Stack>
      </Box>
      <Chart
        type="line"
        series={chart.series}
        options={useChart({
          colors: [theme.palette.primary.main],
          chart: { sparkline: { enabled: true } },
          tooltip: { x: { show: false }, y: { formatter: (value: number) => value, title: { formatter: () => '' } }, marker: { show: false } },
        })}
        width={120}
        height={80}
      />
    </Card>
  );
}
