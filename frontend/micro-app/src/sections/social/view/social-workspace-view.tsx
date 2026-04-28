'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function SocialWorkspaceView() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const TABS = [
    { value: 'dashboard', label: 'Dashboard', icon: 'solar:chart-square-bold' },
    { value: 'scheduler', label: 'Scheduler', icon: 'solar:calendar-date-bold' },
    { value: 'connect', label: 'Connect', icon: 'solar:link-bold' },
    { value: 'proof', label: 'Social Proof', icon: 'solar:shield-check-bold' },
    { value: 'reputation', label: 'Reputation', icon: 'solar:star-bold' },
    { value: 'journal', label: 'Journal', icon: 'solar:notebook-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Social Orchestration"
      description="Manage your organizational social presence, schedule multi-platform content, and monitor reputation health."
      links={[
        { href: '#', label: 'Connect Accounts' },
        { href: '#', label: 'Post Calendar' },
        { href: '#', label: 'Reputation' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:pen-new-square-bold" />}
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

        {activeTab === 'dashboard' && <SocialDashboardTab />}
        {activeTab === 'scheduler' && <SocialSchedulerTab />}
        {activeTab === 'connect' && <SocialConnectTab />}
        {activeTab === 'proof' && <SocialProofTab />}
        {activeTab === 'reputation' && <SocialReputationTab />}
        {activeTab === 'journal' && <SocialJournalTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function SocialDashboardTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
             <Typography variant="overline" color="text.secondary">Total Audience</Typography>
             <Typography variant="h3">12.4k</Typography>
             <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'success.main', mt: 0.5 }}>
                <Iconify icon="solar:double-alt-arrow-up-bold" width={16} />
                <Typography variant="subtitle2">+8.2%</Typography>
             </Stack>
          </Card>
       </Grid>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
             <Typography variant="overline" color="text.secondary">Engagement Rate</Typography>
             <Typography variant="h3">4.1%</Typography>
             <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'success.main', mt: 0.5 }}>
                <Iconify icon="solar:double-alt-arrow-up-bold" width={16} />
                <Typography variant="subtitle2">+1.5%</Typography>
             </Stack>
          </Card>
       </Grid>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
             <Typography variant="overline" color="text.secondary">Reputation Score</Typography>
             <Typography variant="h3">4.8</Typography>
             <Stack direction="row" spacing={0.5}>
                {[1, 2, 3, 4, 5].map((s) => <Iconify key={s} icon="solar:star-bold" color="orange" />)}
             </Stack>
          </Card>
       </Grid>
       <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 2 }}>Recent Activity</Typography>
             <Stack spacing={2}>
                {[
                  { user: 'Admin', action: 'scheduled a post to Facebook', time: '2h ago' },
                  { user: 'System', action: 'connected Instagram account', time: '5h ago' },
                  { user: 'Moderator', action: 'responded to a Google Review', time: 'Yesterday' },
                ].map((act, i) => (
                   <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2"><strong>{act.user}</strong> {act.action}</Typography>
                      <Typography variant="caption" color="text.secondary">{act.time}</Typography>
                   </Stack>
                ))}
             </Stack>
          </Card>
       </Grid>
    </Grid>
  );
}

function SocialSchedulerTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Scheduled Content</Typography>
          <Button variant="soft" size="small" startIcon={<Iconify icon="solar:calendar-bold" />}>Calendar View</Button>
       </Box>
       <Divider />
       <Stack>
          {[
            { title: 'Spring Promotion - Day 1', platforms: ['fb', 'insta'], time: 'Tomorrow, 10:00 AM' },
            { title: 'Weekly Training Tip', platforms: ['insta'], time: 'Wed, 02:30 PM' },
          ].map((post) => (
             <Box key={post.title} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Typography variant="subtitle2">{post.title}</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                   {post.platforms.map((p) => (
                      <Chip key={p} size="small" label={p.toUpperCase()} variant="soft" color="primary" />
                   ))}
                   <Box sx={{ flexGrow: 1 }} />
                   <Typography variant="caption" color="text.secondary">{post.time}</Typography>
                </Stack>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function SocialConnectTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Facebook', connected: true, icon: 'logos:facebook' },
         { name: 'Instagram', connected: true, icon: 'logos:instagram-icon' },
         { name: 'Google My Business', connected: false, icon: 'logos:google-icon' },
         { name: 'Twitter (X)', connected: false, icon: 'logos:twitter' },
       ].map((platform) => (
          <Grid item xs={12} sm={6} md={4} key={platform.name}>
             <Card sx={{ p: 3, textAlign: 'center' }}>
                <Iconify icon={platform.icon} width={48} sx={{ mb: 2 }} />
                <Typography variant="subtitle1">{platform.name}</Typography>
                <Button 
                  fullWidth 
                  variant={platform.connected ? 'soft' : 'contained'} 
                  color={platform.connected ? 'success' : 'primary'}
                  sx={{ mt: 2 }}
                >
                   {platform.connected ? 'Connected' : 'Connect Account'}
                </Button>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function SocialProofTab() {
  return (
    <Card sx={{ p: 4, textAlign: 'center' }}>
       <Iconify icon="solar:shield-check-bold-duotone" width={64} color="primary.main" sx={{ mb: 2 }} />
       <Typography variant="h5">Social Proof Campaigns</Typography>
       <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Increase conversions by displaying real-time organizational activity on your public pages.</Typography>
       <Button variant="contained">Launch Proof Campaign</Button>
    </Card>
  );
}

function SocialReputationTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5 }}>
          <Typography variant="h6">Recent Reviews</Typography>
       </Box>
       <Divider />
       <Stack>
          {[
            { author: 'Alice Smith', platform: 'Google', rating: 5, comment: 'Amazing experience at this organization!' },
            { author: 'Bob Johnson', platform: 'Facebook', rating: 4, comment: 'Great service, highly recommended.' },
          ].map((rev, i) => (
             <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                   {[...Array(rev.rating)].map((_, j) => <Iconify key={j} icon="solar:star-bold" color="orange" width={16} />)}
                </Stack>
                <Typography variant="body2" sx={{ mb: 0.5 }}>"{rev.comment}"</Typography>
                <Typography variant="caption" color="text.secondary">— {rev.author} on {rev.platform}</Typography>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function SocialJournalTab() {
  return (
    <Card sx={{ p: 4, textAlign: 'center' }}>
       <Iconify icon="solar:notebook-bold-duotone" width={64} color="primary.main" sx={{ mb: 2 }} />
       <Typography variant="h5">Organizational Journal</Typography>
       <Typography variant="body2" color="text.secondary">Document internal milestones, training tips, and organizational news for your team.</Typography>
       <Button variant="soft" color="primary" sx={{ mt: 3 }}>Create Journal Entry</Button>
    </Card>
  );
}
