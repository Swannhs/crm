'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { marketingService } from 'src/services/marketing-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

type Props = {
  section?: string;
  subsection?: string;
  workflowId?: string;
  workspaceId?: string;
  mode?: 'section' | 'workflow-activity' | 'workflow-builder';
};

export function MarketingWorkspaceView({
  section,
  subsection,
  workflowId,
  workspaceId,
  mode = 'section',
}: Props) {
  const campaignsQuery = useQuery({
    queryKey: ['campaigns'],
    queryFn: () => marketingService.getCampaigns(),
  });

  const formsQuery = useQuery({
    queryKey: ['optin-forms'],
    queryFn: () => marketingService.getOptinForms(),
  });

  const automationsQuery = useQuery({
    queryKey: ['automations'],
    queryFn: () => marketingService.getAutomations(),
  });

  const workflowQuery = useQuery({
    queryKey: ['workflow', workflowId],
    queryFn: () => marketingService.getWorkflowById(workflowId!),
    enabled: Boolean(workflowId),
  });

  const workflowActivityQuery = useQuery({
    queryKey: ['workflow-activity', workflowId],
    queryFn: () => marketingService.getWorkflowActivity(workflowId!),
    enabled: Boolean(workflowId),
  });

  const workspaceQuery = useQuery({
    queryKey: ['workflow-workspaces'],
    queryFn: () => marketingService.getWorkflowWorkspaces(),
    enabled: mode === 'workflow-builder',
  });

  if (
    campaignsQuery.isLoading ||
    formsQuery.isLoading ||
    automationsQuery.isLoading ||
    workflowQuery.isLoading ||
    workflowActivityQuery.isLoading ||
    workspaceQuery.isLoading
  ) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <FeatureRouteShell
      title={
        mode === 'workflow-activity'
          ? 'Workflow Activity Logs'
          : mode === 'workflow-builder'
            ? 'Workflow Builder'
            : 'Marketing'
      }
      description="Legacy marketing section/subsection routes and workflow routes mapped into the micro-app."
      links={[
        { href: paths.dashboard.marketing, label: 'Overview' },
        { href: paths.dashboard.marketingSection('campaigns'), label: 'Campaigns' },
        { href: paths.dashboard.marketingSubsection('email', 'forms'), label: 'Email Forms' },
      ]}
    >
      {mode === 'workflow-activity' ? (
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">{workflowQuery.data?.name || 'Workflow'}</Typography>
            {(workflowActivityQuery.data || []).map((activity: any, index: number) => (
              <Box key={activity.id || index} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Typography variant="subtitle2">{activity.status || activity.type || 'Activity'}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {activity.message || activity.description || 'No additional details'}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Card>
      ) : mode === 'workflow-builder' ? (
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">
              Workspace {workspaceId}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Available workspaces: {(workspaceQuery.data || []).length}
            </Typography>
            <Typography variant="body2">
              Workflow: {workflowQuery.data?.name || workflowId}
            </Typography>
          </Stack>
        </Card>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Campaigns</Typography>
              <Typography variant="h3">{campaignsQuery.data?.length || 0}</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Automations</Typography>
              <Typography variant="h3">{automationsQuery.data?.length || 0}</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>Forms</Typography>
              <Typography variant="h3">{formsQuery.data?.length || 0}</Typography>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Current route
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Section: {section || 'overview'} {subsection ? ` / ${subsection}` : ''}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      )}
    </FeatureRouteShell>
  );
}
