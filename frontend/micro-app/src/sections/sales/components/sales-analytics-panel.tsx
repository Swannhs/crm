import type { SalesLeadRow, SalesSummary, SalesOrderRow } from 'src/services/sales-dashboard-service';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { SalesEmptyState } from './sales-empty-state';
import { formatOptionalNumber, formatOptionalCurrency } from '../utils';

export function SalesAnalyticsPanel({
  summary,
  orders,
  leads,
}: {
  summary?: SalesSummary;
  orders: SalesOrderRow[];
  leads: SalesLeadRow[];
}) {
  if (!summary && !orders.length && !leads.length) {
    return <SalesEmptyState title="Not enough data" description="Not enough data to show analytics yet." />;
  }

  const opportunities = leads.filter((lead) => String(lead.type || '').toLowerCase().includes('opportunity')).length;
  const conversionRate = opportunities > 0 ? (orders.length / opportunities) * 100 : undefined;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Revenue</Typography>
            <Typography variant="h6">{formatOptionalCurrency(summary?.totalRevenue)}</Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Orders</Typography>
            <Typography variant="h6">{formatOptionalNumber(summary?.totalOrders ?? orders.length)}</Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Leads</Typography>
            <Typography variant="h6">{formatOptionalNumber(leads.length)}</Typography>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={0.5}>
            <Typography variant="caption" color="text.secondary">Conversion Snapshot</Typography>
            <Typography variant="h6">{typeof conversionRate === 'number' ? `${conversionRate.toFixed(1)}%` : 'Unavailable'}</Typography>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}
