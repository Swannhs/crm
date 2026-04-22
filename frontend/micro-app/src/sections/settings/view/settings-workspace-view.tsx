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

export function SettingsWorkspaceView() {
  const [activeTab, setActiveTab] = useState('general');

  const TABS = [
    { value: 'general', label: 'General Configuration', icon: 'solar:settings-bold' },
    { value: 'billing', label: 'Billing & Plans', icon: 'solar:card-2-bold' },
    { value: 'integrations', label: 'Integrations', icon: 'solar:link-bold' },
    { value: 'advanced', label: 'Advanced Engine', icon: 'solar:tuning-square-2-bold' },
    { value: 'reports', label: 'Automated Reports', icon: 'solar:chart-square-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Global Orchestration Settings"
      description="Fine-tune your organization's digital engine, manage administrative access, and orchestrate global integration handshakes."
      links={[
        { href: '#', label: 'System Logs' },
        { href: '#', label: 'Access Control' },
        { href: '#', label: 'Data Export' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:refresh-bold" />}
        >
          Sync Settings
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

        {activeTab === 'general' && <SettingsGeneralTab />}
        {activeTab === 'billing' && <SettingsBillingTab />}
        {activeTab === 'integrations' && <SettingsIntegrationsTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function SettingsGeneralTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 3 }}>Organization Profile</Typography>
             <Stack spacing={2.5}>
                <TextField fullWidth label="Organization Legal Name" defaultValue="Elite Martial Arts Global" />
                <TextField fullWidth label="Primary Industry" defaultValue="Sports & Fitness" />
                <TextField fullWidth label="Time Zone" defaultValue="(GMT-05:00) Eastern Time" />
                <Button variant="contained">Save Profile</Button>
             </Stack>
          </Card>
       </Grid>
       <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 3 }}>Branding Orchestration</Typography>
             <Box sx={{ border: (theme) => `2px dashed ${theme.palette.divider}`, borderRadius: 2, p: 4, textAlign: 'center' }}>
                <Iconify icon="solar:upload-bold" width={48} color="text.disabled" sx={{ mb: 2 }} />
                <Typography variant="subtitle2">Upload Organization Logo</Typography>
                <Typography variant="caption" color="text.secondary">PNG, JPG or SVG. Max 2MB.</Typography>
             </Box>
          </Card>
       </Grid>
    </Grid>
  );
}

function SettingsBillingTab() {
  return (
    <Stack spacing={3}>
       <Card sx={{ p: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
             <Box>
                <Typography variant="h6">Subscription Blueprint</Typography>
                <Typography variant="body2" color="text.secondary">You are currently on the <strong>Professional Suite</strong>.</Typography>
             </Box>
             <Button variant="soft" color="primary">Change Plan</Button>
          </Stack>
          <Divider sx={{ borderStyle: 'dashed', my: 3 }} />
          <Grid container spacing={3}>
             <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: 'background.neutral', borderRadius: 2 }}>
                   <Typography variant="overline" color="text.secondary">Next Renewal</Typography>
                   <Typography variant="h6">May 12, 2026</Typography>
                </Box>
             </Grid>
             <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: 'background.neutral', borderRadius: 2 }}>
                   <Typography variant="overline" color="text.secondary">Billing Frequency</Typography>
                   <Typography variant="h6">Monthly</Typography>
                </Box>
             </Grid>
             <Grid item xs={12} md={4}>
                <Box sx={{ p: 2, bgcolor: 'background.neutral', borderRadius: 2 }}>
                   <Typography variant="overline" color="text.secondary">Payment Status</Typography>
                   <Typography variant="h6" color="success.main">Current</Typography>
                </Box>
             </Grid>
          </Grid>
       </Card>
    </Stack>
  );
}

function SettingsIntegrationsTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Zoom Video', icon: 'solar:videocamera-record-bold', desc: 'Sync meetings and tactical briefings directly to your calendar.', status: 'Connected' },
         { name: 'Stripe Payments', icon: 'solar:card-bold', desc: 'Securely orchestrate organizational transactions and billing.', status: 'Connected' },
         { name: 'Google Workspace', icon: 'solar:globus-bold', desc: 'Full integration with Drive, Docs, and organizational mail.', status: 'Disconnected' },
       ].map((integration) => (
          <Grid item xs={12} md={4} key={integration.name}>
             <Card sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                   <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: 'primary.lighter', color: 'primary.main' }}>
                      <Iconify icon={integration.icon} />
                   </Box>
                   <Box>
                      <Typography variant="subtitle1">{integration.name}</Typography>
                      <Chip label={integration.status} size="small" variant="soft" color={integration.status === 'Connected' ? 'success' : 'default'} />
                   </Box>
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{integration.desc}</Typography>
                <Button fullWidth variant={integration.status === 'Connected' ? 'soft' : 'contained'} color={integration.status === 'Connected' ? 'error' : 'primary'}>
                   {integration.status === 'Connected' ? 'Disconnect' : 'Setup Now'}
                </Button>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
