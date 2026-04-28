import Grid from '@mui/material/Unstable_Grid2';

import { OverviewKpiCard } from './overview-kpi-card';

// ----------------------------------------------------------------------

type Props = {
  kpis: {
    contactsTotal?: number;
    leadsTotal?: number;
    opportunitiesTotal?: number;
    revenueTotal?: number;
    outstandingTotal?: number;
    orderCount?: number;
    bookingCount?: number;
    overdueCount?: number;
  };
  loading?: boolean;
  error?: boolean;
};

function toPercent(part?: number, total?: number) {
  if (part === undefined || total === undefined || !total) return null;
  return Math.round((part / total) * 100);
}

export function OverviewKpiGrid({ kpis, loading, error }: Props) {
  const revenueTrend = toPercent(
    (kpis.revenueTotal ?? 0) - (kpis.outstandingTotal ?? 0),
    kpis.revenueTotal
  );

  const conversionTrend = toPercent(kpis.leadsTotal, kpis.opportunitiesTotal);

  return (
    <Grid container spacing={3}>
      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Total Contacts"
          value={kpis.contactsTotal}
          icon="solar:users-group-rounded-bold"
          loading={loading}
          error={error}
          description="In CRM"
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Active Leads"
          value={kpis.leadsTotal}
          icon="solar:fire-bold"
          color="warning"
          loading={loading}
          error={error}
          description="High priority"
          trend={conversionTrend !== null ? {
            label: `${conversionTrend}% conv.`,
            variant: 'warning'
          } : undefined}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Revenue"
          value={kpis.revenueTotal}
          type="currency"
          icon="solar:wallet-money-bold"
          color="success"
          loading={loading}
          error={error}
          description="Total invoiced"
          trend={revenueTrend !== null ? {
            label: `${revenueTrend}% collected`,
            variant: 'success'
          } : undefined}
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Orders"
          value={kpis.orderCount}
          icon="solar:bag-4-bold"
          color="info"
          loading={loading}
          error={error}
          description="Magento volume"
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Outstanding"
          value={kpis.outstandingTotal}
          type="currency"
          icon="solar:bill-list-bold"
          color="error"
          loading={loading}
          error={error}
          description="Awaiting payment"
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Pipeline"
          value={kpis.opportunitiesTotal}
          icon="solar:chart-2-bold"
          color="secondary"
          loading={loading}
          error={error}
          description="Open opportunities"
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Bookings"
          value={kpis.bookingCount}
          icon="solar:calendar-mark-bold"
          color="primary"
          loading={loading}
          error={error}
          description="Scheduled this month"
        />
      </Grid>

      <Grid xs={12} sm={6} md={3}>
        <OverviewKpiCard
          title="Overdue"
          value={kpis.overdueCount}
          icon="solar:shield-warning-bold"
          color="error"
          loading={loading}
          error={error}
          description="Action required"
        />
      </Grid>
    </Grid>
  );
}
