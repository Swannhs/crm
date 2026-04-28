'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function AccountWorkspaceView() {
  const [activeTab, setActiveTab] = useState('profile');

  const TABS = [
    { value: 'profile', label: 'Profile', icon: 'solar:user-circle-bold' },
    { value: 'settings', label: 'Settings', icon: 'solar:settings-bold' },
    { value: 'notifications', label: 'Notifications', icon: 'solar:bell-bold' },
    { value: 'wallet', label: 'Wallet', icon: 'solar:wallet-money-bold' },
    { value: 'api-key', label: 'API Keys', icon: 'solar:key-bold' },
    { value: 'license', label: 'License', icon: 'solar:diploma-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Account Center"
      description="Orchestrate your personal identity, manage security preferences, and monitor financial assets within the organization."
      links={[
        { href: '#', label: 'Privacy Policy' },
        { href: '#', label: 'Terms of Service' },
        { href: '#', label: 'Security' },
      ]}
      action={
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="solar:logout-bold" />}
        >
          Sign Out
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

        {activeTab === 'profile' && <AccountProfileTab />}
        {activeTab === 'settings' && <AccountSettingsTab />}
        {activeTab === 'notifications' && <AccountNotificationsTab />}
        {activeTab === 'wallet' && <AccountWalletTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function AccountProfileTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, textAlign: 'center' }}>
             <Avatar 
               src="/path-to-avatar" 
               sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: (theme) => `4px solid ${theme.palette.background.neutral}` }} 
             />
             <Typography variant="h5">John Doe</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Global Administrator</Typography>
             <Button variant="soft" fullWidth startIcon={<Iconify icon="solar:camera-bold" />}>Change Photo</Button>
          </Card>
       </Grid>
       <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 3 }}>Personal Identity</Typography>
             <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><TextField fullWidth label="First Name" defaultValue="John" /></Grid>
                <Grid item xs={12} sm={6}><TextField fullWidth label="Last Name" defaultValue="Doe" /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Email Address" defaultValue="john.doe@example.com" /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Phone Number" defaultValue="+1 (555) 000-0000" /></Grid>
                <Grid item xs={12}><TextField fullWidth label="Bio" multiline rows={4} placeholder="Tell us about yourself..." /></Grid>
             </Grid>
             <Button variant="contained" sx={{ mt: 3 }}>Save Changes</Button>
          </Card>
       </Grid>
    </Grid>
  );
}

function AccountSettingsTab() {
  return (
    <Stack spacing={3}>
       <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Security & Authentication</Typography>
          <Stack spacing={2}>
             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                   <Typography variant="subtitle2">Two-Step Verification</Typography>
                   <Typography variant="caption" color="text.secondary">Add an extra layer of tactical security to your account.</Typography>
                </Box>
                <Switch defaultChecked />
             </Box>
             <Divider />
             <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                   <Typography variant="subtitle2">Password Management</Typography>
                   <Typography variant="caption" color="text.secondary">Last updated 3 months ago.</Typography>
                </Box>
                <Button variant="soft">Update Password</Button>
             </Box>
          </Stack>
       </Card>
    </Stack>
  );
}

function AccountNotificationsTab() {
  return (
    <Card sx={{ p: 3 }}>
       <Typography variant="h6" sx={{ mb: 3 }}>Engagement Preferences</Typography>
       <Stack spacing={3}>
          {[
            { title: 'Email Alerts', desc: 'Receive tactical summaries and campaign reports via email.', checked: true },
            { title: 'SMS Notifications', desc: 'Real-time alerts for critical organizational events.', checked: false },
            { title: 'Browser Push', desc: 'Stay updated with dashboard activity in real-time.', checked: true },
          ].map((pref) => (
             <Box key={pref.title} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                   <Typography variant="subtitle2">{pref.title}</Typography>
                   <Typography variant="body2" color="text.secondary">{pref.desc}</Typography>
                </Box>
                <Switch defaultChecked={pref.checked} />
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function AccountWalletTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, bgcolor: 'primary.darker', color: 'common.white' }}>
             <Typography variant="overline" sx={{ opacity: 0.72 }}>Available Balance</Typography>
             <Typography variant="h2">$4,250.00</Typography>
             <Button variant="contained" color="inherit" sx={{ mt: 3, color: 'primary.darker' }} fullWidth>Deposit Funds</Button>
          </Card>
       </Grid>
       <Grid item xs={12} md={8}>
          <Card sx={{ p: 0 }}>
             <Box sx={{ p: 2.5 }}>
                <Typography variant="h6">Recent Transactions</Typography>
             </Box>
             <Divider />
             <Stack>
                {[
                  { title: 'Credits Purchase', amount: '+$500.00', date: 'Today, 10:00 AM', status: 'completed' },
                  { title: 'SMS Campaign Fee', amount: '-$12.50', date: 'Yesterday', status: 'completed' },
                ].map((tx, i) => (
                   <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', justifyContent: 'space-between' }}>
                      <Box>
                         <Typography variant="subtitle2">{tx.title}</Typography>
                         <Typography variant="caption" color="text.secondary">{tx.date}</Typography>
                      </Box>
                      <Typography variant="subtitle1" color={tx.amount.startsWith('+') ? 'success.main' : 'error.main'}>{tx.amount}</Typography>
                   </Box>
                ))}
             </Stack>
          </Card>
       </Grid>
    </Grid>
  );
}
