'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function MarketingWorkspaceView() {
  const [activeTab, setActiveTab] = useState('email');

  const TABS = [
    { value: 'email', label: 'Email Marketing', icon: 'solar:letter-bold' },
    { value: 'sms', label: 'SMS / Text', icon: 'solar:chat-round-dots-bold' },
    { value: 'ads', label: 'Ads Manager', icon: 'solar:megaphone-bold' },
    { value: 'workflow', label: 'Automations', icon: 'solar:bolt-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Marketing Orchestration"
      description="Central command for your organizational communication channels, visual campaigns, and automated marketing workflows."
      links={[
        { href: '#', label: 'Campaigns' },
        { href: '#', label: 'Audience' },
        { href: '#', label: 'Analytics' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Create Campaign
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

        {activeTab === 'email' && <MarketingEmailTab />}
        {activeTab === 'sms' && <MarketingSmsTab />}
        {activeTab === 'ads' && <MarketingAdsTab />}
        {activeTab === 'workflow' && <MarketingWorkflowTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function MarketingEmailTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={8}>
          <Card sx={{ p: 0 }}>
             <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Recent Email Campaigns</Typography>
                <Button variant="soft" size="small">View Library</Button>
             </Box>
             <Divider />
             <Stack>
                {[
                  { name: 'Welcome Series - April', sent: '1.2k', opened: '45%', status: 'Active' },
                  { name: 'Flash Sale: 24 Hours Left', sent: '5.8k', opened: '22%', status: 'Completed' },
                  { name: 'Newsletter: Spring Updates', sent: '4.5k', opened: '31%', status: 'Completed' },
                ].map((camp) => (
                   <Box key={camp.name} sx={{ p: 2.5, display: 'flex', alignItems: 'center', borderBottom: (theme) => `1px solid ${theme.palette.divider}`, '&:last-child': { borderBottom: 0 } }}>
                      <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: 'primary.lighter', color: 'primary.main', mr: 2 }}>
                         <Iconify icon="solar:letter-bold" />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                         <Typography variant="subtitle2">{camp.name}</Typography>
                         <Typography variant="caption" color="text.secondary">{camp.sent} recipients • {camp.opened} open rate</Typography>
                      </Box>
                      <Box sx={{ 
                         px: 1, 
                         borderRadius: 0.5, 
                         bgcolor: camp.status === 'Active' ? 'success.lighter' : 'grey.200',
                         color: camp.status === 'Active' ? 'success.dark' : 'text.disabled',
                         fontSize: 11,
                         fontWeight: 700
                      }}>
                         {camp.status.toUpperCase()}
                      </Box>
                   </Box>
                ))}
             </Stack>
          </Card>
       </Grid>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, bgcolor: 'primary.main', color: 'common.white' }}>
             <Typography variant="h6" sx={{ mb: 1 }}>Quick Designer</Typography>
             <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>Start a new campaign using our visual drag-and-drop editor.</Typography>
             <Button fullWidth variant="contained" color="inherit" sx={{ color: 'primary.main' }}>Launch Editor</Button>
          </Card>
       </Grid>
    </Grid>
  );
}

function MarketingSmsTab() {
  return (
    <Card sx={{ p: 4, textAlign: 'center' }}>
       <Stack spacing={3} alignItems="center">
          <Iconify icon="solar:chat-round-dots-bold-duotone" width={64} sx={{ color: 'primary.main' }} />
          <Box>
             <Typography variant="h5">SMS Messaging</Typography>
             <Typography variant="body2" color="text.secondary">Connect with your audience directly via professional text message campaigns.</Typography>
          </Box>
          <Box sx={{ p: 3, borderRadius: 2, bgcolor: 'background.neutral', width: '100%', maxWidth: 400 }}>
             <Typography variant="subtitle2" sx={{ mb: 1 }}>SMS Balance</Typography>
             <Typography variant="h4">$42.80</Typography>
             <Button variant="soft" color="primary" sx={{ mt: 2 }}>Recharge Credits</Button>
          </Box>
       </Stack>
    </Card>
  );
}

function MarketingAdsTab() {
  return (
    <Grid container spacing={3}>
       {[
         { platform: 'Facebook & Instagram', icon: 'logos:facebook', spend: '$1,240', clicks: '4.2k' },
         { platform: 'Google Search Ads', icon: 'logos:google-icon', spend: '$850', clicks: '1.1k' },
       ].map((ad) => (
          <Grid item xs={12} md={6} key={ad.platform}>
             <Card sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                   <Iconify icon={ad.icon} width={32} />
                   <Typography variant="h6">{ad.platform}</Typography>
                </Stack>
                <Grid container spacing={2}>
                   <Grid item xs={6}>
                      <Typography variant="caption" color="text.secondary">SPEND (MONTH)</Typography>
                      <Typography variant="h5">{ad.spend}</Typography>
                   </Grid>
                   <Grid item xs={6}>
                      <Typography variant="caption" color="text.secondary">TOTAL CLICKS</Typography>
                      <Typography variant="h5">{ad.clicks}</Typography>
                   </Grid>
                </Grid>
                <Button fullWidth variant="soft" sx={{ mt: 3 }}>Manage Ads</Button>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function MarketingWorkflowTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5 }}>
          <Typography variant="h6">Marketing Automations</Typography>
       </Box>
       <Divider />
       <Stack>
          {[
            { title: 'Abandon Cart Recovery', trigger: 'E-commerce Event', actions: 3 },
            { title: 'New Member Onboarding', trigger: 'Contact Added', actions: 5 },
            { title: 'Birthday Promotion', trigger: 'Annual Date', actions: 1 },
          ].map((flow) => (
             <Box key={flow.title} sx={{ p: 2.5, display: 'flex', alignItems: 'center', borderBottom: (theme) => `1px solid ${theme.palette.divider}`, '&:last-child': { borderBottom: 0 } }}>
                <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: 'warning.lighter', color: 'warning.main', mr: 2 }}>
                   <Iconify icon="solar:bolt-bold" />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                   <Typography variant="subtitle2">{flow.title}</Typography>
                   <Typography variant="caption" color="text.secondary">Trigger: {flow.trigger} • {flow.actions} active steps</Typography>
                </Box>
                <Button variant="soft" size="small">Edit Flow</Button>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}
