import Grid from '@mui/material/Unstable_Grid2';

import { SalesKpiCard } from './sales-kpi-card';
import { formatOptionalNumber, formatOptionalPercent, formatOptionalCurrency } from '../utils';

import type { SalesSummary } from '../types';

export function SalesKpiGrid({ summary, loading }: { summary?: SalesSummary; loading?: boolean }) {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Pipeline Value" value={formatOptionalCurrency(summary?.pipelineValue)} subtitle="Open opportunity value" icon="solar:pie-chart-bold" loading={loading} /></Grid>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Weighted Forecast" value={formatOptionalCurrency(summary?.weightedForecast)} subtitle="Probability-weighted" icon="solar:chart-square-bold" loading={loading} /></Grid>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Total Revenue" value={formatOptionalCurrency(summary?.totalRevenue)} subtitle="Orders + invoices" icon="solar:wallet-money-bold" loading={loading} /></Grid>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Average Order Value" value={formatOptionalCurrency(summary?.avgOrderValue)} subtitle="Commerce order quality" icon="solar:chart-2-bold" loading={loading} /></Grid>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Open Opportunities" value={formatOptionalNumber(summary?.opportunities)} subtitle="Active CRM pipeline" icon="solar:rocket-bold" loading={loading} /></Grid>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Hot Leads" value={formatOptionalNumber(summary?.hotLeads)} subtitle="High-intent leads" icon="solar:fire-bold" loading={loading} /></Grid>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Win Rate" value={formatOptionalPercent(summary?.winRate)} subtitle="Recent conversion" icon="solar:medal-ribbon-bold" loading={loading} /></Grid>
      <Grid xs={12} sm={6} md={3}><SalesKpiCard title="Orders" value={formatOptionalNumber(summary?.sources?.magentoOrders)} subtitle="Commerce source volume" icon="solar:bag-4-bold" loading={loading} /></Grid>
    </Grid>
  );
}
