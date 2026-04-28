'use client';

import { useMemo, useState } from 'react';
import { useQueries } from '@tanstack/react-query';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { DashboardContent } from 'src/layouts/dashboard';
import { dashboardService } from 'src/services/dashboard-service';

import { Iconify } from 'src/components/iconify';

import { OverviewHeader } from '../components/overview-header';
import { OverviewKpiGrid } from '../components/overview-kpi-grid';
import { OverviewGraphPanel } from '../components/overview-graph-panel';
import { OverviewErrorState } from '../components/overview-error-state';
import { OverviewActivityFeed } from '../components/overview-activity-feed';
import { OverviewAttentionPanel } from '../components/overview-attention-panel';

// ----------------------------------------------------------------------

type ViewMode = 'graphs' | 'activity';
type GraphMode = 'revenue' | 'contacts' | 'orders' | 'pipeline' | 'bookings';
type RangeMode = '7d' | '30d' | '90d' | '180d';

export function OverviewView() {
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

  const [overviewQuery, graphQuery, activityQuery, attentionQuery] = queryResults;

  const kpis = useMemo(() => (overviewQuery.data as any)?.kpis ?? {}, [overviewQuery.data]);
  const sourceStatus = useMemo(() => (overviewQuery.data as any)?.sourceStatus ?? {}, [overviewQuery.data]);

  const graphData = useMemo(() => {
    const categories = Array.isArray(graphQuery.data?.categories) ? graphQuery.data.categories : [];
    const series = Array.isArray(graphQuery.data?.series) ? graphQuery.data.series : [];

    // Format categories if they look like month keys (YYYY-MM)
    const formattedCategories = categories.map((cat: string) => {
      if (cat.includes('-') && cat.split('-').length === 2) {
        const [year, month] = cat.split('-').map(Number);
        return new Date(year, month - 1, 1).toLocaleDateString(undefined, { month: 'short', year: '2-digit' });
      }
      return cat;
    });

    return { categories: formattedCategories, series };
  }, [graphQuery.data]);

  const activities = useMemo(() => {
    const raw = Array.isArray(activityQuery.data) ? activityQuery.data : [];
    return raw.map((item: any) => ({
      id: String(item?.id ?? Math.random()),
      title: String(item?.title ?? 'Activity'),
      subtitle: String(item?.subtitle ?? ''),
      timestamp: String(item?.timestamp ?? ''),
      type: String(item?.type ?? 'other'),
    }));
  }, [activityQuery.data]);

  const attention = useMemo(() => {
    const raw = Array.isArray(attentionQuery.data) ? attentionQuery.data : [];
    return raw.map((item: any) => ({
      title: String(item?.title ?? 'Attention required'),
      count: Number(item?.count ?? 0),
      severity: (item?.severity ?? 'info') as any,
    }));
  }, [attentionQuery.data]);

  const handleRefresh = () => {
    queryResults.forEach((q) => q.refetch());
  };

  return (
    <DashboardContent maxWidth="xl">
      <OverviewHeader
        rangeMode={rangeMode}
        onRangeChange={(v) => setRangeMode(v)}
        onRefresh={handleRefresh}
        loading={queryResults.some(q => q.isFetching)}
      />

      <Stack spacing={4}>
        <OverviewKpiGrid
          kpis={kpis}
          loading={overviewQuery.isLoading}
          error={overviewQuery.isError}
        />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Business Performance</Typography>

          <ToggleButtonGroup
            size="small"
            value={viewMode}
            exclusive
            onChange={(_, value) => value && setViewMode(value)}
            sx={{ bgcolor: 'background.neutral', p: 0.5, borderRadius: 1 }}
          >
            <ToggleButton value="graphs" sx={{ border: 'none', px: 2 }}>
              <Iconify icon="solar:chart-2-bold" width={18} sx={{ mr: 1 }} />
              Analytics
            </ToggleButton>
            <ToggleButton value="activity" sx={{ border: 'none', px: 2 }}>
              <Iconify icon="solar:history-bold" width={18} sx={{ mr: 1 }} />
              Activity
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Grid container spacing={3}>
          <Grid xs={12} md={viewMode === 'graphs' ? 8 : 12}>
            {viewMode === 'graphs' ? (
              <OverviewGraphPanel
                data={graphData}
                loading={graphQuery.isLoading}
                error={graphQuery.isError}
                activeMode={graphMode}
                onModeChange={(v) => setGraphMode(v)}
              />
            ) : (
              <OverviewActivityFeed
                activities={activities}
                loading={activityQuery.isLoading}
              />
            )}
          </Grid>

          {viewMode === 'graphs' && (
            <Grid xs={12} md={4}>
              <OverviewAttentionPanel
                attention={attention}
                sourceStatus={sourceStatus}
                loading={attentionQuery.isLoading || overviewQuery.isLoading}
              />
            </Grid>
          )}
        </Grid>

        {queryResults.some(q => q.isError) && (
          <OverviewErrorState
            severity="warning"
            message="Some dashboard modules are currently unavailable. We are still showing the data we could retrieve."
          />
        )}
      </Stack>
    </DashboardContent>
  );
}
