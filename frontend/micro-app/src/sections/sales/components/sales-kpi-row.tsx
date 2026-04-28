import type { SalesSummary } from 'src/services/sales-dashboard-service';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { formatOptionalNumber, formatOptionalCurrency } from '../utils';

function KpiCard({ title, value, icon, loading }: { title: string; value: string; icon: string; loading?: boolean }) {
  return (
    <Card sx={{ p: 2.5 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" width="45%" />
          <Skeleton variant="text" width="60%" height={32} />
        </Stack>
      ) : (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack spacing={0.25}>
            <Typography variant="caption" color="text.secondary">{title}</Typography>
            <Typography variant="h6">{value}</Typography>
          </Stack>
          <Iconify icon={icon} width={20} sx={{ color: 'text.secondary' }} />
        </Stack>
      )}
    </Card>
  );
}

export function SalesKpiRow({ summary, loading }: { summary?: SalesSummary; loading?: boolean }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <KpiCard title="Revenue" value={formatOptionalCurrency(summary?.totalRevenue)} icon="solar:wallet-money-bold" loading={loading} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KpiCard title="Orders" value={formatOptionalNumber(summary?.totalOrders)} icon="solar:bag-4-bold" loading={loading} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KpiCard title="Average Order Value" value={formatOptionalCurrency(summary?.avgOrderValue)} icon="solar:chart-square-bold" loading={loading} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KpiCard title="Open Leads" value={formatOptionalNumber(summary?.hotLeads)} icon="solar:users-group-rounded-bold" loading={loading} />
      </Grid>
    </Grid>
  );
}
