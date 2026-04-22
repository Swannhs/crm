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

export function PresenceWorkspaceView() {
  const [activeTab, setActiveTab] = useState('social-proof');

  const TABS = [
    { value: 'social-proof', label: 'Social Proof', icon: 'solar:widget-bold' },
    { value: 'scheduler', label: 'Social Scheduler', icon: 'solar:calendar-bold' },
    { value: 'reputation', label: 'Reputation Hub', icon: 'solar:star-bold' },
    { value: 'settings', label: 'Presence Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Digital Presence Orchestration"
      description="Amplify organizational credibility through social proof widgets, automate social media posting, and monitor your global reputation."
      links={[
        { href: '#', label: 'Widget Library' },
        { href: '#', label: 'Social Accounts' },
        { href: '#', label: 'Review Alerts' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:share-bold" />}
        >
          New Post
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

        {activeTab === 'social-proof' && <PresenceSocialProofTab />}
        {activeTab === 'scheduler' && <PresenceSchedulerTab />}
        {activeTab === 'reputation' && <PresenceReputationTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function PresenceSocialProofTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Recent Purchase Pop', active: true, type: 'Notification' },
         { name: 'Total Visitors Counter', active: true, type: 'Counter' },
         { name: 'Review Carousel', active: false, type: 'Widget' },
       ].map((widget) => (
          <Grid item xs={12} md={4} key={widget.name}>
             <Card sx={{ p: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                   <Typography variant="subtitle1">{widget.name}</Typography>
                   <Switch defaultChecked={widget.active} size="small" />
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3 }}>Type: {widget.type}</Typography>
                <Button fullWidth variant="soft" startIcon={<Iconify icon="solar:code-bold" />}>Get Code</Button>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function PresenceSchedulerTab() {
  return (
    <Card sx={{ p: 4, textAlign: 'center', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
       <Box>
          <Iconify icon="solar:calendar-bold-duotone" width={64} color="primary.main" sx={{ mb: 2 }} />
          <Typography variant="h5">Multi-Platform Post Scheduler</Typography>
          <Typography variant="body2" color="text.secondary">Orchestrating high-fidelity calendar for automated social media deployment...</Typography>
       </Box>
    </Card>
  );
}

function PresenceReputationTab() {
  return (
    <Stack spacing={3}>
       <Card sx={{ p: 3 }}>
          <Stack direction="row" spacing={3} alignItems="center">
             <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2">4.8</Typography>
                <Rating value={4.8} readOnly precision={0.1} />
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>Based on 1.2k reviews</Typography>
             </Box>
             <Divider orientation="vertical" flexItem />
             <Box sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle2">Organizational Sentiment</Typography>
                <Typography variant="body2" color="text.secondary">Positive sentiment is up 12% this month.</Typography>
             </Box>
          </Stack>
       </Card>
    </Stack>
  );
}

import Switch from '@mui/material/Switch';
import Rating from '@mui/material/Rating';
