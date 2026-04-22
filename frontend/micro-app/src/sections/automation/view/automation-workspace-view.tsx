'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function AutomationWorkspaceView() {
  const [activeTab, setActiveTab] = useState('workflows');

  const TABS = [
    { value: 'workflows', label: 'Workflows', icon: 'solar:playback-speed-bold' },
    { value: 'builder', label: 'Visual Builder', icon: 'solar:tuning-square-2-bold' },
    { value: 'logs', label: 'Activity Logs', icon: 'solar:clipboard-list-bold' },
    { value: 'triggers', label: 'Event Triggers', icon: 'solar:bolt-bold' },
    { value: 'settings', label: 'Automation Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Automation Orchestration"
      description="Design high-fidelity automation sequences, map organizational triggers to tactical actions, and monitor real-time execution logs."
      links={[
        { href: '#', label: 'Active Workflows' },
        { href: '#', label: 'Trigger Registry' },
        { href: '#', label: 'System Logs' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Create Workflow
        </Button>
      }
    >
      <Box sx={{ mt: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(e, v) => setActiveTab(v)}
          sx={{ mb: 3, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          {TABS.map((tab) => (
            <Tab 
              key={tab.value} 
              value={tab.value} 
              label={tab.label} 
              icon={<Iconify icon={tab.icon} width={20} />} 
              iconPosition="start"
            />
          ))}
        </Tabs>

        {activeTab === 'workflows' && <AutomationWorkflowsTab />}
        {activeTab === 'builder' && <AutomationBuilderTab />}
        {activeTab === 'logs' && <AutomationLogsTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function AutomationWorkflowsTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Onboarding Sequence', trigger: 'New Lead', status: 'Running', count: 124 },
         { name: 'Cart Abandonment', trigger: 'Product Left', status: 'Paused', count: 45 },
         { name: 'Membership Renewal', trigger: '30 Days Left', status: 'Running', count: 890 },
       ].map((wf) => (
          <Grid item xs={12} md={4} key={wf.name}>
             <Card sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                   <Typography variant="subtitle1">{wf.name}</Typography>
                   <Chip label={wf.status} size="small" color={wf.status === 'Running' ? 'success' : 'warning'} variant="soft" />
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>Trigger: {wf.trigger}</Typography>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                   <Typography variant="body2"><strong>{wf.count}</strong> executions</Typography>
                   <Button size="small" variant="soft">Edit</Button>
                </Stack>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function AutomationBuilderTab() {
  return (
    <Card sx={{ height: '60vh', p: 4, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <Box sx={{ textAlign: 'center' }}>
          <Iconify icon="solar:tuning-square-2-bold-duotone" width={80} color="primary.main" sx={{ mb: 2, opacity: 0.4 }} />
          <Typography variant="h4">Visual Node Orchestrator</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
             Design tactical automation flows by mapping nodes and triggers on the visual canvas.
          </Typography>
          <Button variant="contained" sx={{ mt: 3 }} size="large">Launch Builder Engine</Button>
       </Box>
    </Card>
  );
}

function AutomationLogsTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Activity Intelligence</Typography>
          <Button variant="soft" size="small" color="error">Clear Logs</Button>
       </Box>
       <Divider />
       <Stack>
          {[
            { event: 'Email Sent', flow: 'Onboarding', status: 'Success', time: '2 mins ago' },
            { event: 'Trigger Activated', flow: 'Membership', status: 'Success', time: '15 mins ago' },
            { event: 'Webhook Failed', flow: 'External Sync', status: 'Error', time: '1 hour ago' },
          ].map((log, i) => (
             <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ p: 1, borderRadius: 1, bgcolor: log.status === 'Success' ? 'success.lighter' : 'error.lighter', color: log.status === 'Success' ? 'success.main' : 'error.main', mr: 2 }}>
                   <Iconify icon={log.status === 'Success' ? 'solar:check-circle-bold' : 'solar:danger-bold'} />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                   <Typography variant="subtitle2">{log.event}</Typography>
                   <Typography variant="caption" color="text.secondary">Flow: {log.flow} • {log.time}</Typography>
                </Box>
                <Chip label={log.status} size="small" variant="soft" color={log.status === 'Success' ? 'success' : 'error'} />
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

import Chip from '@mui/material/Chip';
