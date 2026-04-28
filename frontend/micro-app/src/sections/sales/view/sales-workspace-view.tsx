'use client';

import { useMemo, useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { fCurrency } from 'src/utils/format-number';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { syncMagentoAllToOdoo } from 'src/services/odoo-service';
import { useSalesLeads, useSalesOrders, useSalesSummary } from 'src/hooks/use-sales-dashboard';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

import type { SalesLeadRow, SalesSummary, SalesOrderRow } from 'src/services/sales-dashboard-service';

export function SalesWorkspaceView() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [syncing, setSyncing] = useState(false);

  const summaryQuery = useSalesSummary();
  const ordersQuery = useSalesOrders();
  const leadsQuery = useSalesLeads();

  const loading = summaryQuery.isLoading || ordersQuery.isLoading || leadsQuery.isLoading;
  const summary = summaryQuery.data;
  const orders = ordersQuery.data ?? [];
  const leads = leadsQuery.data ?? [];

  const handleSync = useCallback(async () => {
    try {
      setSyncing(true);
      const result = await syncMagentoAllToOdoo({ dryRun: false });
      toast.success(`Successfully integrated: ${result.syncedOrders ?? 0} orders synced to Odoo CRM.`);

      summaryQuery.refetch();
      ordersQuery.refetch();
      leadsQuery.refetch();
    } catch (error) {
      toast.error(error.message || 'Sync failed');
    } finally {
      setSyncing(false);
    }
  }, [summaryQuery, ordersQuery, leadsQuery]);

  const TABS = [
    { value: 'pipeline', label: 'Sales Pipeline', icon: 'solar:graph-up-bold' },
    { value: 'leads', label: 'Lead Management', icon: 'solar:users-group-rounded-bold' },
    { value: 'funnels', label: 'Conversion Funnels', icon: 'solar:filters-bold' },
    { value: 'analytics', label: 'Revenue Analytics', icon: 'solar:chart-2-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Sales Orchestration"
      description="Live Odoo and Magento sales operations, merged into one dashboard."
      links={[
        { href: '#', label: `Magento Orders: ${summary?.sources?.magentoOrders ?? 0}` },
        { href: '#', label: `Odoo Orders: ${summary?.sources?.odooOrders ?? 0}` },
        { href: '#', label: `Opportunities: ${summary?.opportunities ?? 0}` },
      ]}
      action={
        <Stack direction="row" spacing={1}>
          <Button
            variant="soft"
            color="warning"
            loading={syncing}
            startIcon={<Iconify icon="solar:round-transfer-horizontal-bold" />}
            onClick={handleSync}
          >
            Sync Magento to Odoo
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="solar:refresh-bold" />}
            onClick={() => {
              summaryQuery.refetch();
              ordersQuery.refetch();
              leadsQuery.refetch();
            }}
          >
            Refresh Data
          </Button>
        </Stack>
      }
    >
      <Grid container spacing={2} sx={{ mt: 0.5 }}>
        <KpiCard title="Total Revenue" value={fCurrency(summary?.totalRevenue ?? 0)} icon="solar:wad-of-money-bold-duotone" />
        <KpiCard title="Total Orders" value={String(summary?.totalOrders ?? 0)} icon="solar:bag-4-bold-duotone" />
        <KpiCard title="AOV" value={fCurrency(summary?.avgOrderValue ?? 0)} icon="solar:chart-square-bold-duotone" />
        <KpiCard title="Hot Leads" value={String(summary?.hotLeads ?? 0)} icon="solar:fire-bold-duotone" />
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ mb: 3, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} icon={<Iconify icon={tab.icon} width={20} />} iconPosition="start" />
          ))}
        </Tabs>

        {loading ? <PipelineSkeleton /> : null}
        {!loading && activeTab === 'pipeline' ? <SalesPipelineTab orders={orders} /> : null}
        {!loading && activeTab === 'leads' ? <SalesLeadsTab leads={leads} /> : null}
        {!loading && activeTab === 'funnels' ? <SalesFunnelsTab orders={orders} leads={leads} /> : null}
        {!loading && activeTab === 'analytics' ? <SalesAnalyticsTab summary={summary} /> : null}
      </Box>
    </FeatureRouteShell>
  );
}

function KpiCard({ title, value, icon }: { title: string; value: string; icon: string }) {
  return (
    <Grid item xs={12} md={3}>
      <Card sx={{ p: 2.5 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="caption" color="text.secondary">{title}</Typography>
            <Typography variant="h5">{value}</Typography>
          </Box>
          <Iconify icon={icon} width={28} />
        </Stack>
      </Card>
    </Grid>
  );
}

function SalesPipelineTab({ orders }: { orders: SalesOrderRow[] }) {
  const groups = useMemo(() => {
    const statusMap = new Map<string, SalesOrderRow[]>();
    orders.forEach((order) => {
      const key = (order.status || 'unknown').toLowerCase();
      const current = statusMap.get(key) ?? [];
      current.push(order);
      statusMap.set(key, current);
    });
    return Array.from(statusMap.entries());
  }, [orders]);

  return (
    <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 3 }}>
      {groups.map(([status, rows]) => (
        <Box key={status} sx={{ minWidth: 300, width: 300, flexShrink: 0 }}>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>{status}</Typography>
            <Chip label={rows.length} size="small" variant="soft" />
          </Box>
          <Stack spacing={2}>
            {rows.slice(0, 8).map((order) => (
              <Card key={order.id} sx={{ p: 2 }}>
                <Typography variant="subtitle2">{order.ref}</Typography>
                <Typography variant="caption" color="text.secondary">{order.customer}</Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 1 }}>
                  <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700 }}>
                    {fCurrency(order.amount)}
                  </Typography>
                  <Chip size="small" label={order.source} color={order.source === 'magento' ? 'warning' : 'info'} variant="soft" />
                </Stack>
              </Card>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}

function PipelineSkeleton() {
  return (
    <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 3 }}>
      {[...Array(4)].map((_, i) => (
        <Box key={i} sx={{ minWidth: 280, width: 280, flexShrink: 0 }}>
          <Stack spacing={2}>
            <Skeleton variant="text" width="60%" height={32} />
            {[...Array(3)].map((__, j) => (
              <Card key={j} sx={{ p: 2 }}>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="40%" />
              </Card>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
}

function SalesLeadsTab({ leads }: { leads: SalesLeadRow[] }) {
  return (
    <Card sx={{ p: 0 }}>
      <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Lead Directory (Odoo CRM)</Typography>
        <TextField size="small" placeholder="Search leads..." sx={{ minWidth: 240 }} />
      </Box>
      <Divider />
      <Stack>
        {leads.slice(0, 12).map((lead) => (
          <Box key={lead.id} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ mr: 2 }}>{lead.name[0]}</Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2">{lead.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                Stage: {lead.stage} • Expected: {fCurrency(lead.expectedRevenue)}
              </Typography>
            </Box>
            <Chip label={lead.type} size="small" color={lead.type === 'opportunity' ? 'success' : 'default'} variant="soft" />
          </Box>
        ))}
      </Stack>
    </Card>
  );
}

function SalesFunnelsTab({ orders, leads }: { orders: SalesOrderRow[]; leads: SalesLeadRow[] }) {
  const opportunities = leads.filter((lead) => lead.type === 'opportunity').length;
  const converted = orders.length;
  const conversionRate = opportunities > 0 ? (converted / opportunities) * 100 : 0;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Conversion Snapshot</Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="caption" color="text.secondary">Leads + Opportunities</Typography>
              <Typography variant="h4">{leads.length}</Typography>
            </Box>
            <Box>
              <Typography variant="caption" color="text.secondary">Converted Orders (Magento + Odoo)</Typography>
              <Typography variant="h4">{orders.length}</Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Funnel Metrics</Typography>
          <Typography variant="caption" color="text.secondary">Opportunity to Order</Typography>
          <Typography variant="h3">{conversionRate.toFixed(1)}%</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

function SalesAnalyticsTab({ summary }: { summary: SalesSummary | undefined }) {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Revenue Analytics</Typography>
      <Stack spacing={1}>
        <Typography variant="body2">Total Revenue: {fCurrency(summary?.totalRevenue ?? 0)}</Typography>
        <Typography variant="body2">Average Order Value: {fCurrency(summary?.avgOrderValue ?? 0)}</Typography>
        <Typography variant="body2">Magento Orders: {summary?.sources?.magentoOrders ?? 0}</Typography>
        <Typography variant="body2">Odoo Orders: {summary?.sources?.odooOrders ?? 0}</Typography>
      </Stack>
    </Card>
  );
}
