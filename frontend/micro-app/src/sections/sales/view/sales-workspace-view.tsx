'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import {
  useSalesLeads,
  useSalesOrders,
  useSalesSummary,
  useSalesAnalytics,
  useSalesActivities,
  useSalesOpportunities,
  useCreateSalesActivity,
  useRunMagentoToOdooSync,
  useCompleteSalesActivity,
  useLinkOrderToOpportunity,
  useUpdateSalesOpportunity,
  useCreateSalesOpportunity,
  useUpdateOpportunityStage,
  usePreviewMagentoToOdooSync,
} from 'src/hooks/use-sales-dashboard';

import { toast } from 'src/components/snackbar';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

import { SalesHeader } from '../components/sales-header';
import { SalesKpiRow } from '../components/sales-kpi-row';
import { SalesSyncDialog } from '../components/sales-sync-dialog';
import { SalesErrorState } from '../components/sales-error-state';
import { SalesLeadsPanel } from '../components/sales-leads-panel';
import { SalesTabs, type SalesTab } from '../components/sales-tabs';
import { SalesOrdersTable } from '../components/sales-orders-table';
import { SalesPipelineKanban } from '../components/sales-pipeline-kanban';
import { SalesAnalyticsPanel } from '../components/sales-analytics-panel';
import { SalesActivitiesPanel } from '../components/sales-activities-panel';
import { SalesOpportunityDrawer } from '../components/sales-opportunity-drawer';
import { SalesOpportunityDialog, type OpportunityFormValues } from '../components/sales-opportunity-dialog';

import type { SalesFilters, SalesActivity, SalesOpportunity } from '../types';

export function SalesWorkspaceView() {
  const [tab, setTab] = useState<SalesTab>('pipeline');
  const [search, setSearch] = useState('');
  const [syncOpen, setSyncOpen] = useState(false);
  const [opportunityOpen, setOpportunityOpen] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<SalesOpportunity | null>(null);
  const [activityOpen, setActivityOpen] = useState(false);
  const [activityTitle, setActivityTitle] = useState('');
  const [activityType, setActivityType] = useState<SalesActivity['type']>('todo');
  const [activityDueDate, setActivityDueDate] = useState('');

  const filters: SalesFilters = { search: search || undefined };

  const summaryQuery = useSalesSummary(filters);
  const opportunitiesQuery = useSalesOpportunities(filters);
  const leadsQuery = useSalesLeads(filters);
  const ordersQuery = useSalesOrders(filters);
  const activitiesQuery = useSalesActivities(filters);
  const analyticsQuery = useSalesAnalytics(filters);

  const createOpportunityMutation = useCreateSalesOpportunity();
  const updateOpportunityMutation = useUpdateSalesOpportunity();
  const stageMutation = useUpdateOpportunityStage();
  const createActivityMutation = useCreateSalesActivity();
  const completeActivityMutation = useCompleteSalesActivity();
  const linkOrderMutation = useLinkOrderToOpportunity();
  const previewSyncMutation = usePreviewMagentoToOdooSync();
  const runSyncMutation = useRunMagentoToOdooSync();

  const failedSections = [summaryQuery, opportunitiesQuery, leadsQuery, ordersQuery, activitiesQuery, analyticsQuery].filter((query) => query.isError).length;

  const refreshAll = () => {
    summaryQuery.refetch();
    opportunitiesQuery.refetch();
    leadsQuery.refetch();
    ordersQuery.refetch();
    activitiesQuery.refetch();
    analyticsQuery.refetch();
  };

  const handleOpportunitySubmit = async (values: OpportunityFormValues) => {
    try {
      if (selectedOpportunity?.id) {
        await updateOpportunityMutation.mutateAsync({ id: selectedOpportunity.id, payload: values });
        toast.success('Opportunity updated');
      } else {
        await createOpportunityMutation.mutateAsync(values);
        toast.success('Opportunity created');
      }
      setOpportunityOpen(false);
    } catch (error: any) {
      toast.error(error?.message || 'Unable to save opportunity');
    }
  };

  const handleMoveStage = async (id: string, stage: SalesOpportunity['stage']) => {
    try {
      await stageMutation.mutateAsync({ id, stage });
      toast.success('Stage updated');
      if (selectedOpportunity?.id === id) {
        setSelectedOpportunity({ ...selectedOpportunity, stage });
      }
    } catch (error: any) {
      toast.error(error?.message || 'Stage update unavailable');
    }
  };

  return (
    <FeatureRouteShell title="Sales" description="Track pipeline, leads, orders, and revenue in one place.">
      <Stack spacing={3}>
        <SalesHeader
          search={search}
          onSearch={setSearch}
          onRefresh={refreshAll}
          onOpenSync={() => setSyncOpen(true)}
          onOpenCreate={() => {
            setSelectedOpportunity(null);
            setOpportunityOpen(true);
          }}
        />

        {failedSections >= 2 ? <Alert severity="warning">Some sales sections are temporarily unavailable. Available sections still work.</Alert> : null}

        {summaryQuery.isError ? (
          <SalesErrorState
            title="Summary unavailable"
            message={(summaryQuery.error as Error)?.message}
            onRetry={() => summaryQuery.refetch()}
          />
        ) : (
          <SalesKpiRow summary={summaryQuery.data} loading={summaryQuery.isLoading} />
        )}

        <SalesTabs value={tab} onChange={setTab} />

        <Box>
          {tab === 'pipeline' ? (
            opportunitiesQuery.isError ? (
              <SalesErrorState
                title="Pipeline unavailable"
                message={(opportunitiesQuery.error as Error)?.message}
                onRetry={() => opportunitiesQuery.refetch()}
              />
            ) : (
              <SalesPipelineKanban
                opportunities={opportunitiesQuery.data ?? []}
                moving={stageMutation.isPending}
                onOpen={(item) => setSelectedOpportunity(item)}
                onMove={handleMoveStage}
              />
            )
          ) : null}

          {tab === 'leads' ? (
            leadsQuery.isError ? (
              <SalesErrorState
                title="Leads unavailable"
                message={(leadsQuery.error as Error)?.message}
                onRetry={() => leadsQuery.refetch()}
              />
            ) : (
              <SalesLeadsPanel leads={leadsQuery.data ?? []} search={search} />
            )
          ) : null}

          {tab === 'orders' ? (
            ordersQuery.isError ? (
              <SalesErrorState
                title="Orders unavailable"
                message={(ordersQuery.error as Error)?.message}
                onRetry={() => ordersQuery.refetch()}
              />
            ) : (
              <SalesOrdersTable
                rows={ordersQuery.data ?? []}
                opportunities={opportunitiesQuery.data ?? []}
                onLink={async (orderId, opportunityId) => {
                  try {
                    await linkOrderMutation.mutateAsync({ orderId, opportunityId });
                    toast.success('Order linked');
                  } catch (error: any) {
                    toast.error(error?.message || 'Link unavailable');
                  }
                }}
                linking={linkOrderMutation.isPending}
              />
            )
          ) : null}

          {tab === 'activities' ? (
            activitiesQuery.isError ? (
              <SalesErrorState
                title="Activities unavailable"
                message={(activitiesQuery.error as Error)?.message}
                onRetry={() => activitiesQuery.refetch()}
              />
            ) : (
              <SalesActivitiesPanel
                rows={activitiesQuery.data ?? []}
                onComplete={async (id) => {
                  try {
                    await completeActivityMutation.mutateAsync(id);
                    toast.success('Activity completed');
                  } catch (error: any) {
                    toast.error(error?.message || 'Complete unavailable');
                  }
                }}
                completing={completeActivityMutation.isPending}
              />
            )
          ) : null}

          {tab === 'analytics' ? (
            analyticsQuery.isError && summaryQuery.isError && leadsQuery.isError && ordersQuery.isError ? (
              <SalesErrorState title="Analytics unavailable" description="Analytics data is currently unavailable." />
            ) : (
              <SalesAnalyticsPanel summary={summaryQuery.data} leads={leadsQuery.data ?? []} orders={ordersQuery.data ?? []} />
            )
          ) : null}
        </Box>
      </Stack>

      <SalesOpportunityDrawer
        open={Boolean(selectedOpportunity)}
        item={selectedOpportunity}
        orders={ordersQuery.data ?? []}
        stageLoading={stageMutation.isPending}
        onClose={() => setSelectedOpportunity(null)}
        onEdit={() => setOpportunityOpen(true)}
        onAddActivity={() => setActivityOpen(true)}
        onLinkOrder={async (orderId, opportunityId) => {
          try {
            await linkOrderMutation.mutateAsync({ orderId, opportunityId });
            toast.success('Order linked');
          } catch (error: any) {
            toast.error(error?.message || 'Link unavailable');
          }
        }}
        onMoveStage={handleMoveStage}
      />

      <SalesOpportunityDialog
        open={opportunityOpen}
        initial={selectedOpportunity}
        loading={createOpportunityMutation.isPending || updateOpportunityMutation.isPending}
        onClose={() => setOpportunityOpen(false)}
        onSubmit={handleOpportunitySubmit}
      />

      <Dialog open={activityOpen} onClose={() => setActivityOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Add activity</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            <TextField label="Title" value={activityTitle} onChange={(e) => setActivityTitle(e.target.value)} />
            <TextField select label="Type" value={activityType} onChange={(e) => setActivityType(e.target.value as SalesActivity['type'])}>
              <MenuItem value="call">Call</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="meeting">Meeting</MenuItem>
              <MenuItem value="todo">To-do</MenuItem>
              <MenuItem value="note">Note</MenuItem>
            </TextField>
            <TextField type="date" label="Due date" InputLabelProps={{ shrink: true }} value={activityDueDate} onChange={(e) => setActivityDueDate(e.target.value)} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setActivityOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            disabled={!selectedOpportunity?.id || !activityTitle || createActivityMutation.isPending}
            onClick={async () => {
              if (!selectedOpportunity?.id) return;
              try {
                await createActivityMutation.mutateAsync({
                  opportunityId: selectedOpportunity.id,
                  payload: {
                    type: activityType,
                    title: activityTitle,
                    dueDate: activityDueDate || undefined,
                  },
                });
                toast.success('Activity created');
                setActivityOpen(false);
                setActivityTitle('');
                setActivityDueDate('');
              } catch (error: any) {
                toast.error(error?.message || 'Create activity unavailable');
              }
            }}
          >
            Add activity
          </Button>
        </DialogActions>
      </Dialog>

      <SalesSyncDialog
        open={syncOpen}
        preview={previewSyncMutation.data ?? null}
        result={runSyncMutation.data ?? null}
        previewLoading={previewSyncMutation.isPending}
        runLoading={runSyncMutation.isPending}
        onClose={() => setSyncOpen(false)}
        onPreview={() => previewSyncMutation.mutate()}
        onRun={async () => {
          try {
            await runSyncMutation.mutateAsync();
            toast.success('Sync completed');
            refreshAll();
          } catch (error: any) {
            toast.error(error?.message || 'Sync unavailable');
          }
        }}
      />
    </FeatureRouteShell>
  );
}
