'use client';

import { useMemo, useState } from 'react';
import { useQueries } from '@tanstack/react-query';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { alpha } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { useAuthContext } from 'src/auth/hooks';
import { fCurrency, fNumber } from 'src/utils/format-number';
import { DashboardContent } from 'src/layouts/dashboard';
import { dashboardService } from 'src/services/dashboard-service';

import { Chart, useChart } from 'src/components/chart';
import { Iconify } from 'src/components/iconify';

type ViewMode = 'cards' | 'graphs' | 'timeline';
type GraphMode = 'revenue' | 'contacts' | 'orders' | 'pipeline' | 'bookings';
type RangeMode = '7d' | '30d' | '90d' | '180d';

type DashboardKpis = {
  contactsTotal?: number;
  leadsTotal?: number;
  opportunitiesTotal?: number;
  revenueTotal?: number;
  outstandingTotal?: number;
  orderCount?: number;
  bookingCount?: number;
  overdueCount?: number;
};

const KPI_COLORS = [
  { main: '#0ea5e9', soft: '#e0f2fe' },
  { main: '#10b981', soft: '#dcfce7' },
  { main: '#f59e0b', soft: '#fef3c7' },
  { main: '#ef4444', soft: '#fee2e2' },
  { main: '#06b6d4', soft: '#cffafe' },
  { main: '#3b82f6', soft: '#dbeafe' },
  { main: '#22c55e', soft: '#dcfce7' },
  { main: '#f97316', soft: '#ffedd5' },
];

function formatMonthKey(monthKey: string): string {
  const [year, month] = monthKey.split('-').map(Number);
  if (!year || !month) return monthKey;
  return new Date(year, month - 1, 1).toLocaleDateString(undefined, { month: 'short', year: '2-digit' });
}

function toPercent(part?: number, total?: number) {
  if (!Number.isFinite(part) || !Number.isFinite(total) || !total) return null;
  return Math.round(((part as number) / (total as number)) * 100);
}

function toTimelineDate(value?: string) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleString();
}

function KpiCard({
  title,
  value,
  description,
  icon,
  trend,
  loading,
  error,
  color,
}: {
  title: string;
  value?: string | number;
  description: string;
  icon: string;
  trend?: string;
  loading?: boolean;
  error?: string | null;
  color: { main: string; soft: string };
}) {
  return (
    <Card
      sx={{
        p: 2.5,
        height: '100%',
        border: (theme) => `1px solid ${alpha(color.main, 0.2)}`,
        background: `linear-gradient(165deg, ${alpha(color.soft, 0.8)} 0%, #ffffff 65%)`,
      }}
    >
      {loading ? <LinearProgress sx={{ mb: 2, color: color.main }} /> : null}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack spacing={0.5}>
          <Typography variant="overline" sx={{ color: alpha('#111827', 0.75) }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ color: '#0f172a' }}>{loading ? '—' : value ?? 'Unavailable'}</Typography>
        </Stack>
        <Box
          sx={{
            width: 46,
            height: 46,
            borderRadius: 1.5,
            bgcolor: alpha(color.main, 0.14),
            color: color.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `1px solid ${alpha(color.main, 0.24)}`,
          }}
        >
          <Iconify icon={icon} width={22} />
        </Box>
      </Stack>
      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.25 }}>
        {error ? `Data unavailable: ${error}` : description}
      </Typography>
      {trend ? <Chip size="small" label={trend} sx={{ mt: 1.5, bgcolor: alpha(color.main, 0.12), color: color.main, fontWeight: 700 }} /> : null}
    </Card>
  );
}

export function OverviewView() {
  const router = useRouter();
  const { user } = useAuthContext();

  const [viewMode, setViewMode] = useState<ViewMode>('graphs');
  const [graphMode, setGraphMode] = useState<GraphMode>('revenue');
  const [rangeMode, setRangeMode] = useState<RangeMode>('30d');

  const queryResults = useQueries({
    queries: [
      { queryKey: ['overview-unified-kpis', rangeMode], queryFn: () => dashboardService.getOverview(rangeMode) },
      { queryKey: ['overview-unified-graph', graphMode, rangeMode], queryFn: () => dashboardService.getGraph(graphMode, rangeMode) },
      { queryKey: ['overview-unified-activity'], queryFn: () => dashboardService.getActivity(12) },
      { queryKey: ['overview-unified-attention'], queryFn: () => dashboardService.getAttention() },
    ],
  });

  const [unifiedOverviewQuery, unifiedGraphQuery, unifiedActivityQuery, unifiedAttentionQuery] = queryResults;
  const anyRefetching = queryResults.some((q) => q.isFetching);

  const displayName = user?.fullName || user?.username || user?.email || 'Operator';
  const unifiedOverview = useMemo(() => unifiedOverviewQuery.data ?? {}, [unifiedOverviewQuery.data]);
  const unifiedKpis = useMemo<DashboardKpis>(() => (unifiedOverview as any)?.kpis ?? {}, [unifiedOverview]);
  const sourceStatus = useMemo(() => (unifiedOverview as any)?.sourceStatus ?? {}, [unifiedOverview]);
  const unifiedGraph = useMemo(() => unifiedGraphQuery.data ?? {}, [unifiedGraphQuery.data]);
  const unifiedActivity = useMemo(() => (Array.isArray(unifiedActivityQuery.data) ? unifiedActivityQuery.data : []), [unifiedActivityQuery.data]);
  const unifiedAttention = useMemo(() => (Array.isArray(unifiedAttentionQuery.data) ? unifiedAttentionQuery.data : []), [unifiedAttentionQuery.data]);

  const graphCategories: string[] = Array.isArray(unifiedGraph?.categories) ? unifiedGraph.categories : [];
  const graphSeries: Array<{ name: string; data: number[] }> = Array.isArray(unifiedGraph?.series) ? unifiedGraph.series : [];

  const recentTimeline = useMemo(() => {
    return unifiedActivity
      .map((item: any) => ({
        id: String(item?.id ?? ''),
        title: String(item?.title ?? 'Activity'),
        subtitle: String(item?.subtitle ?? ''),
        date: toTimelineDate(item?.timestamp),
        icon:
          item?.type === 'contact'
            ? 'solar:user-plus-bold'
            : item?.type === 'invoice'
              ? 'solar:bill-list-bold'
              : item?.type === 'order'
                ? 'solar:bag-4-bold'
                : 'solar:calendar-mark-bold',
      }))
      .filter((item: any) => item.date)
      .slice(0, 10);
  }, [unifiedActivity]);

  const attentionRows = useMemo(
    () =>
      unifiedAttention.map((row: any) => ({
        label: String(row?.title ?? 'Attention item'),
        value: Number(row?.count ?? 0),
        color: row?.severity === 'error' ? 'error' : row?.severity === 'warning' ? 'warning' : row?.severity === 'info' ? 'info' : 'success',
      })),
    [unifiedAttention]
  );

  const revenueTrend = toPercent(
    Number(unifiedKpis?.revenueTotal ?? 0) - Number(unifiedKpis?.outstandingTotal ?? 0),
    Number(unifiedKpis?.revenueTotal ?? 0)
  );
  const conversionTrend = toPercent(Number(unifiedKpis?.leadsTotal ?? 0), Number(unifiedKpis?.opportunitiesTotal ?? 0));

  const chartOptions = useChart({
    xaxis: { categories: graphCategories.length ? graphCategories.map((k) => (k.includes('-') ? formatMonthKey(k) : k)) : ['No data'] },
    legend: { position: 'top' },
    stroke: { width: 3, curve: 'smooth' },
    colors: ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444'],
    grid: { borderColor: alpha('#94a3b8', 0.2) },
  });

  return (
    <DashboardContent maxWidth="xl">
      <Stack spacing={3}>
        <Card
          sx={{
            p: { xs: 2.5, md: 3 },
            border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            background:
              'linear-gradient(140deg, rgba(14,165,233,0.14) 0%, rgba(16,185,129,0.10) 45%, rgba(245,158,11,0.08) 100%)',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between" spacing={2}>
            <Box>
              <Typography variant="h4" sx={{ color: '#0f172a', mb: 0.5 }}>Dashboard Overview</Typography>
              <Typography variant="body2" sx={{ color: alpha('#0f172a', 0.75) }}>
                Unified CRM and commerce snapshot for {displayName}
              </Typography>
            </Box>

            <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap" useFlexGap>
              <ToggleButtonGroup size="small" value={viewMode} exclusive onChange={(_, value) => value && setViewMode(value)}
                sx={{ bgcolor: alpha('#ffffff', 0.9), borderRadius: 1.5 }}
              >
                <ToggleButton value="cards"><Iconify icon="solar:widget-2-bold" /></ToggleButton>
                <ToggleButton value="graphs"><Iconify icon="solar:chart-2-bold" /></ToggleButton>
                <ToggleButton value="timeline"><Iconify icon="solar:clock-circle-bold" /></ToggleButton>
              </ToggleButtonGroup>
              <Select size="small" value={rangeMode} onChange={(e) => setRangeMode(e.target.value as RangeMode)} sx={{ bgcolor: alpha('#ffffff', 0.9) }}>
                <MenuItem value="7d">Last 7 days</MenuItem>
                <MenuItem value="30d">Last 30 days</MenuItem>
                <MenuItem value="90d">Last 90 days</MenuItem>
                <MenuItem value="180d">Last 6 months</MenuItem>
              </Select>
              <Button size="small" variant="contained" color="info" startIcon={<Iconify icon="solar:refresh-bold" />} onClick={() => queryResults.forEach((q) => q.refetch())}>
                Refresh
              </Button>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
            {anyRefetching ? <Chip label="Refreshing" size="small" color="warning" variant="soft" /> : null}
            <Button size="small" variant="contained" onClick={() => router.push(paths.dashboard.contacts)} startIcon={<Iconify icon="solar:user-plus-bold" />}>Add contact</Button>
            <Button size="small" variant="outlined" color="info" onClick={() => router.push(paths.dashboard.invoiceNew)} startIcon={<Iconify icon="solar:bill-list-bold" />}>Create invoice</Button>
            <Button size="small" variant="outlined" color="success" onClick={() => router.push(paths.dashboard.shopSection('orders'))} startIcon={<Iconify icon="solar:bag-4-bold" />}>View orders</Button>
            <Button size="small" variant="outlined" color="warning" onClick={() => router.push(paths.dashboard.billing)} startIcon={<Iconify icon="solar:checklist-minimalistic-bold" />}>Reconciliation</Button>
            <Button size="small" variant="outlined" color="secondary" onClick={() => router.push(paths.dashboard.calendar)} startIcon={<Iconify icon="solar:calendar-mark-bold" />}>Create booking</Button>
          </Stack>
        </Card>

        <Grid container spacing={2.5}>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[0]} title="Total contacts" value={fNumber(unifiedKpis.contactsTotal || 0)} description="CRM contacts" icon="solar:users-group-rounded-bold" loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[1]} title="New leads" value={fNumber(unifiedKpis.leadsTotal || 0)} description="Priority opportunities" icon="solar:fire-bold" trend={conversionTrend !== null ? `${conversionTrend}% lead-to-opportunity` : undefined} loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[2]} title="Revenue" value={fCurrency(unifiedKpis.revenueTotal || 0)} description="Invoiced total" icon="solar:wallet-money-bold" trend={revenueTrend !== null ? `${revenueTrend}% collected` : undefined} loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[3]} title="Magento orders" value={fNumber(unifiedKpis.orderCount || 0)} description="Commerce volume" icon="solar:bag-4-bold" loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[4]} title="Outstanding" value={fCurrency(unifiedKpis.outstandingTotal || 0)} description="Awaiting payment" icon="solar:bill-list-bold" loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[5]} title="Opportunities" value={fNumber(unifiedKpis.opportunitiesTotal || 0)} description="Open pipeline" icon="solar:chart-2-bold" loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[6]} title="Bookings" value={fNumber(unifiedKpis.bookingCount || 0)} description="Scheduled appointments" icon="solar:calendar-mark-bold" loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
          <Grid xs={12} sm={6} md={3}><KpiCard color={KPI_COLORS[7]} title="Overdue invoices" value={fNumber(unifiedKpis.overdueCount || 0)} description="Needs action" icon="solar:shield-warning-bold" loading={unifiedOverviewQuery.isLoading} error={unifiedOverviewQuery.isError ? 'overview unavailable' : null} /></Grid>
        </Grid>

        {viewMode === 'graphs' ? (
          <Stack spacing={2.5}>
            <Tabs value={graphMode} onChange={(_, value) => setGraphMode(value)} sx={{ '& .MuiTab-root.Mui-selected': { color: '#0ea5e9' } }}>
              <Tab value="revenue" label="Revenue" />
              <Tab value="contacts" label="Contacts" />
              <Tab value="orders" label="Orders" />
              <Tab value="pipeline" label="Pipeline" />
              <Tab value="bookings" label="Bookings" />
            </Tabs>

            <Grid container spacing={2.5}>
              <Grid xs={12} md={8}>
                <Card sx={{ p: 3, border: (theme) => `1px solid ${alpha('#0ea5e9', 0.2)}`, background: 'linear-gradient(180deg, rgba(14,165,233,0.08) 0%, rgba(255,255,255,0.96) 70%)' }}>
                  <Typography variant="h6" sx={{ color: '#0f172a' }}>{graphMode[0].toUpperCase() + graphMode.slice(1)} trend</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Range: {rangeMode.toUpperCase()} • Unified Odoo + Magento analytics</Typography>
                  {unifiedGraphQuery.isError ? <Alert severity="error">Graph endpoint unavailable.</Alert> : null}
                  {unifiedGraphQuery.isLoading ? <Skeleton variant="rectangular" height={320} /> : null}
                  {!unifiedGraphQuery.isLoading && !unifiedGraphQuery.isError && graphSeries.length > 0 ? (
                    <Chart type={graphMode === 'revenue' ? 'line' : 'bar'} series={graphSeries as any} options={chartOptions} height={320} />
                  ) : null}
                  {!unifiedGraphQuery.isLoading && !unifiedGraphQuery.isError && graphSeries.length === 0 ? <Alert severity="info">No graph data returned for this range.</Alert> : null}
                </Card>
              </Grid>
              <Grid xs={12} md={4}>
                <Card sx={{ p: 3, border: (theme) => `1px solid ${alpha('#10b981', 0.2)}`, background: 'linear-gradient(180deg, rgba(16,185,129,0.08) 0%, rgba(255,255,255,0.96) 70%)' }}>
                  <Typography variant="h6">Attention required</Typography>
                  <Stack spacing={1.5} sx={{ mt: 2 }}>
                    {attentionRows.map((row) => (
                      <Stack key={row.label} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2">{row.label}</Typography>
                        <Chip size="small" color={row.color as any} label={fNumber(row.value)} variant="soft" />
                      </Stack>
                    ))}
                  </Stack>
                  <Box sx={{ mt: 2.5 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Source health</Typography>
                    <Stack spacing={1}>
                      {Object.entries(sourceStatus).map(([key, value]: any) => (
                        <Stack key={key} direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{key}</Typography>
                          <Chip size="small" color={value?.ok ? 'success' : 'warning'} label={value?.ok ? 'ok' : 'degraded'} variant="soft" />
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        ) : null}

        {viewMode === 'timeline' ? (
          <Grid container spacing={2.5}>
            <Grid xs={12} md={8}>
              <Card sx={{ p: 3, border: (theme) => `1px solid ${alpha('#3b82f6', 0.18)}`, background: 'linear-gradient(180deg, rgba(59,130,246,0.07) 0%, #fff 78%)' }}>
                <Typography variant="h6">Business timeline</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Recent cross-system activity from unified dashboard APIs.</Typography>
                {unifiedActivityQuery.isLoading ? <Skeleton variant="rectangular" height={260} /> : null}
                {!unifiedActivityQuery.isLoading && recentTimeline.length === 0 ? <Alert severity="info">No recent activity is available yet.</Alert> : null}
                {!unifiedActivityQuery.isLoading && recentTimeline.length > 0 ? (
                  <Stack spacing={2}>
                    {recentTimeline.map((event) => (
                      <Stack key={event.id} direction="row" spacing={1.5} alignItems="flex-start">
                        <Box sx={{ mt: 0.2, width: 34, height: 34, borderRadius: '50%', bgcolor: alpha('#0ea5e9', 0.12), color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Iconify icon={event.icon} width={18} />
                        </Box>
                        <Box>
                          <Typography variant="subtitle2">{event.title}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{event.subtitle}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{event.date}</Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                ) : null}
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card sx={{ p: 3, border: (theme) => `1px solid ${alpha('#f59e0b', 0.2)}`, background: 'linear-gradient(180deg, rgba(245,158,11,0.08) 0%, #fff 78%)' }}>
                <Typography variant="h6">Attention required</Typography>
                <Stack spacing={1.5} sx={{ mt: 2 }}>
                  {attentionRows.map((row) => (
                    <Stack key={row.label} direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2">{row.label}</Typography>
                      <Chip size="small" color={row.color as any} label={fNumber(row.value)} variant="soft" />
                    </Stack>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        ) : null}

        {viewMode === 'cards' ? (
          <Grid container spacing={2.5}>
            <Grid xs={12} md={8}>
              <Card sx={{ p: 3, border: (theme) => `1px solid ${alpha('#06b6d4', 0.2)}`, background: 'linear-gradient(180deg, rgba(6,182,212,0.09) 0%, #fff 82%)' }}>
                <Typography variant="h6">Business snapshot</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Key operational totals without charts.</Typography>
                {unifiedOverviewQuery.isLoading ? <Skeleton variant="rectangular" height={220} /> : null}
                {unifiedOverviewQuery.isError ? <Alert severity="error">Unable to load business snapshot.</Alert> : null}
                {!unifiedOverviewQuery.isLoading && !unifiedOverviewQuery.isError ? (
                  <Grid container spacing={2}>
                    <Grid xs={12} sm={6}><Card variant="outlined" sx={{ p: 2, borderColor: alpha('#0ea5e9', 0.3) }}><Typography variant="caption" sx={{ color: 'text.secondary' }}>Invoiced</Typography><Typography variant="h6">{fCurrency(Number(unifiedKpis.revenueTotal ?? 0))}</Typography></Card></Grid>
                    <Grid xs={12} sm={6}><Card variant="outlined" sx={{ p: 2, borderColor: alpha('#ef4444', 0.3) }}><Typography variant="caption" sx={{ color: 'text.secondary' }}>Outstanding</Typography><Typography variant="h6">{fCurrency(Number(unifiedKpis.outstandingTotal ?? 0))}</Typography></Card></Grid>
                    <Grid xs={12} sm={6}><Card variant="outlined" sx={{ p: 2, borderColor: alpha('#10b981', 0.3) }}><Typography variant="caption" sx={{ color: 'text.secondary' }}>Orders</Typography><Typography variant="h6">{fNumber(Number(unifiedKpis.orderCount ?? 0))}</Typography></Card></Grid>
                    <Grid xs={12} sm={6}><Card variant="outlined" sx={{ p: 2, borderColor: alpha('#f59e0b', 0.3) }}><Typography variant="caption" sx={{ color: 'text.secondary' }}>Bookings</Typography><Typography variant="h6">{fNumber(Number(unifiedKpis.bookingCount ?? 0))}</Typography></Card></Grid>
                  </Grid>
                ) : null}
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card sx={{ p: 3, border: (theme) => `1px solid ${alpha('#22c55e', 0.2)}`, background: 'linear-gradient(180deg, rgba(34,197,94,0.08) 0%, #fff 80%)' }}>
                <Typography variant="h6">Attention required</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Outstanding action items from operational data.</Typography>
                <Stack spacing={1.5}>
                  {attentionRows.map((row) => (
                    <Stack key={row.label} direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2">{row.label}</Typography>
                      <Chip size="small" color={row.color as any} label={fNumber(row.value)} variant="soft" />
                    </Stack>
                  ))}
                </Stack>
              </Card>
            </Grid>
            <Grid xs={12}>
              <Card sx={{ p: 3, border: (theme) => `1px solid ${alpha('#3b82f6', 0.2)}` }}>
                <Typography variant="h6">Recent activity</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>Latest events across CRM and commerce.</Typography>
                {recentTimeline.length > 0 ? (
                  <Stack spacing={1.5}>
                    {recentTimeline.slice(0, 6).map((event) => (
                      <Stack key={event.id} direction="row" spacing={1.5} alignItems="flex-start">
                        <Iconify icon={event.icon} width={18} />
                        <Box>
                          <Typography variant="subtitle2">{event.title}</Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{event.subtitle}</Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                ) : (
                  <Alert severity="info">No recent events returned yet.</Alert>
                )}
              </Card>
            </Grid>
          </Grid>
        ) : null}

        {(unifiedOverviewQuery.isError || unifiedGraphQuery.isError || unifiedActivityQuery.isError || unifiedAttentionQuery.isError) ? (
          <Alert severity="warning">One or more dashboard integrations failed to respond. Available sections are still shown clearly.</Alert>
        ) : null}
      </Stack>
    </DashboardContent>
  );
}
