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
import TextField from '@mui/material/TextField';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function OrganizationWorkspaceView() {
  const [activeTab, setActiveTab] = useState('directory');

  const TABS = [
    { value: 'directory', label: 'Directory', icon: 'solar:users-group-rounded-bold' },
    { value: 'locations', label: 'Locations', icon: 'solar:map-point-bold' },
    { value: 'service-fees', label: 'Service Fees', icon: 'solar:bill-list-bold' },
    { value: 'blueprints', label: 'Blueprints', icon: 'solar:layers-bold' },
    { value: 'branding', label: 'Branding', icon: 'solar:palette-bold' },
    { value: 'plans', label: 'Billing Plans', icon: 'solar:card-2-bold' },
    { value: 'settings', label: 'Global Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Organization Orchestration"
      description="Global management of multi-organizational structures, branch locations, and automated service fee monitoring."
      links={[
        { href: '#', label: 'Organization Directory' },
        { href: '#', label: 'Branch Mapping' },
        { href: '#', label: 'Fee Management' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Add Organization
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

        {activeTab === 'directory' && <OrgDirectoryTab />}
        {activeTab === 'locations' && <OrgLocationsTab />}
        {activeTab === 'service-fees' && <OrgServiceFeesTab />}
        {activeTab === 'blueprints' && <OrgBlueprintsTab />}
        {activeTab === 'branding' && <OrgBrandingTab />}
        {activeTab === 'plans' && <OrgPlansTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function OrgBrandingTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 3 }}>Brand Identity</Typography>
             <Stack spacing={3}>
                <Box>
                   <Typography variant="subtitle2" sx={{ mb: 1 }}>Primary Brand Logo</Typography>
                   <Box sx={{ border: (theme) => `2px dashed ${theme.palette.divider}`, borderRadius: 2, p: 4, textAlign: 'center' }}>
                      <Iconify icon="solar:camera-bold" width={32} color="text.disabled" sx={{ mb: 1 }} />
                      <Typography variant="caption" sx={{ display: 'block' }}>Click to upload or drag logo</Typography>
                   </Box>
                </Box>
                <Stack direction="row" spacing={2}>
                   <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>Primary Color</Typography>
                      <Box sx={{ height: 40, bgcolor: 'primary.main', borderRadius: 1 }} />
                   </Box>
                   <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>Secondary Color</Typography>
                      <Box sx={{ height: 40, bgcolor: 'secondary.main', borderRadius: 1 }} />
                   </Box>
                </Stack>
                <Button variant="contained">Update Brand Assets</Button>
             </Stack>
          </Card>
       </Grid>
       <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 3 }}>White-label Domains</Typography>
             <Stack spacing={2.5}>
                <Box>
                   <Typography variant="subtitle2">System Domain</Typography>
                   <Typography variant="body2" color="text.secondary">mymanager.com/org/elite-martial-arts</Typography>
                </Box>
                <Divider />
                <Box>
                   <Typography variant="subtitle2">Custom Domain</Typography>
                   <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                      <TextField fullWidth size="small" placeholder="app.yourbrand.com" />
                      <Button variant="soft">Verify</Button>
                   </Stack>
                   <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                      Configure your CNAME records to point to our tactical servers.
                   </Typography>
                </Box>
             </Stack>
          </Card>
       </Grid>
       <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 3 }}>System Theme Preview</Typography>
             <Box sx={{ 
                p: 4, 
                borderRadius: 2, 
                bgcolor: 'background.neutral', 
                border: (theme) => `1px solid ${theme.palette.divider}`
             }}>
                <Grid container spacing={2}>
                   <Grid item xs={3}>
                      <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, height: 200, borderLeft: (theme) => `4px solid ${theme.palette.primary.main}` }}>
                         <Box sx={{ width: 40, height: 8, bgcolor: 'primary.main', mb: 2, borderRadius: 0.5 }} />
                         <Stack spacing={1}>
                            {[1, 2, 3].map((i) => <Box key={i} sx={{ width: '100%', height: 4, bgcolor: 'background.neutral', borderRadius: 0.5 }} />)}
                         </Stack>
                      </Box>
                   </Grid>
                   <Grid item xs={9}>
                      <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1, height: 200 }}>
                         <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
                            <Box sx={{ width: 80, height: 12, bgcolor: 'secondary.main', borderRadius: 0.5 }} />
                            <Box sx={{ width: 24, height: 24, bgcolor: 'primary.main', borderRadius: '50%' }} />
                         </Stack>
                         <Grid container spacing={2}>
                            <Grid item xs={6}><Box sx={{ height: 100, bgcolor: 'background.neutral', borderRadius: 1 }} /></Grid>
                            <Grid item xs={6}><Box sx={{ height: 100, bgcolor: 'background.neutral', borderRadius: 1 }} /></Grid>
                         </Grid>
                      </Box>
                   </Grid>
                </Grid>
                <Typography variant="caption" sx={{ mt: 2, display: 'block', textAlign: 'center', color: 'text.secondary' }}>
                   * High-fidelity visualization of organizational theme orchestration.
                </Typography>
             </Box>
          </Card>
       </Grid>
    </Grid>
  );
}

function OrgBlueprintsTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Professional Business', cat: 'Business', icon: 'solar:case-bold', count: 12 },
         { name: 'Restaurant & Dining', cat: 'Food Industry', icon: 'solar:clutter-bold', count: 8 },
         { name: 'Sports & Fitness', cat: 'Sports', icon: 'solar:clutter-bold', count: 15 },
       ].map((blueprint) => (
          <Grid item xs={12} md={4} key={blueprint.name}>
             <Card sx={{ p: 3 }}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                   <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: 'primary.lighter', color: 'primary.main' }}>
                      <Iconify icon={blueprint.icon} />
                   </Box>
                   <Box>
                      <Typography variant="subtitle1">{blueprint.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{blueprint.cat}</Typography>
                   </Box>
                </Stack>
                <Divider sx={{ borderStyle: 'dashed', my: 2 }} />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                   <Typography variant="body2">{blueprint.count} Templates</Typography>
                   <Button size="small" variant="soft">View Collection</Button>
                </Stack>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function OrgDirectoryTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Active Organizations</Typography>
          <TextField size="small" placeholder="Search orgs..." sx={{ minWidth: 240 }} />
       </Box>
       <Divider />
       <Stack>
          {[
            { name: 'Elite Martial Arts', owner: 'Sensei Smith', status: 'Platinum', locations: 3 },
            { name: 'Premier Fitness Club', owner: 'John Doe', status: 'Gold', locations: 1 },
            { name: 'Downtown Yoga Studio', owner: 'Jane Roe', status: 'Silver', locations: 2 },
          ].map((org) => (
             <Box key={org.name} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: 'primary.lighter', color: 'primary.main', mr: 2 }}>
                   <Iconify icon="solar:globus-bold" />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                   <Typography variant="subtitle2">{org.name}</Typography>
                   <Typography variant="caption" color="text.secondary">Owner: {org.owner} • {org.locations} branches</Typography>
                </Box>
                <Chip label={org.status} size="small" color="primary" variant="soft" />
                <Button variant="soft" size="small" sx={{ ml: 2 }}>Manage</Button>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function OrgLocationsTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={8}>
          <Card sx={{ p: 3, height: 400, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Typography variant="body2" color="text.secondary">Branch Mapping Visualizer (Placeholder)</Typography>
          </Card>
       </Grid>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 2 }}>Branch Statistics</Typography>
             <Stack spacing={2}>
                <Box>
                   <Typography variant="caption" color="text.secondary">Total Active Locations</Typography>
                   <Typography variant="h4">124</Typography>
                </Box>
                <Box>
                   <Typography variant="caption" color="text.secondary">Geo-Coverage</Typography>
                   <Typography variant="subtitle1">12 States, 4 Countries</Typography>
                </Box>
             </Stack>
          </Card>
       </Grid>
    </Grid>
  );
}

function OrgServiceFeesTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5 }}>
          <Typography variant="h6">Service Fee Dashboard</Typography>
          <Typography variant="caption" color="text.secondary">Monitoring automated transaction fees across all organizations.</Typography>
       </Box>
       <Divider />
       <TableContainer>
          <Table>
             <TableHead>
                <TableRow>
                   <TableCell>Organization</TableCell>
                   <TableCell>Fee Structure</TableCell>
                   <TableCell>Collected (MTD)</TableCell>
                   <TableCell>Status</TableCell>
                </TableRow>
             </TableHead>
             <TableBody>
                {[
                  { name: 'Elite Martial Arts', fee: '2.5% + $0.30', collected: '$1,240.50', status: 'Current' },
                  { name: 'Premier Fitness Club', fee: '2.9% + $0.30', collected: '$850.20', status: 'Current' },
                ].map((row) => (
                   <TableRow key={row.name}>
                      <TableCell><Typography variant="subtitle2">{row.name}</Typography></TableCell>
                      <TableCell>{row.fee}</TableCell>
                      <TableCell><Typography variant="subtitle2">{row.collected}</Typography></TableCell>
                      <TableCell><Chip label={row.status} size="small" color="success" variant="soft" /></TableCell>
                   </TableRow>
                ))}
             </TableBody>
          </Table>
       </TableContainer>
    </Card>
  );
}

function OrgPlansTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Organization Starter', price: '$99/mo', features: ['1 Location', '100 Members', 'Email Marketing'] },
         { name: 'Professional Suite', price: '$299/mo', features: ['5 Locations', '1000 Members', 'Full Marketing Hub'] },
         { name: 'Enterprise Global', price: 'Custom', features: ['Unlimited Locations', 'White-label Support', 'Custom Integrations'] },
       ].map((plan) => (
          <Grid item xs={12} md={4} key={plan.name}>
             <Card sx={{ p: 3, border: (theme) => plan.name.includes('Professional') ? `2px solid ${theme.palette.primary.main}` : 'none' }}>
                <Typography variant="h6" color="primary">{plan.name}</Typography>
                <Typography variant="h3" sx={{ my: 2 }}>{plan.price}</Typography>
                <Stack spacing={1} sx={{ mb: 3 }}>
                   {plan.features.map((f) => (
                      <Stack key={f} direction="row" spacing={1} alignItems="center">
                         <Iconify icon="solar:check-circle-bold" color="green" width={16} />
                         <Typography variant="body2">{f}</Typography>
                      </Stack>
                   ))}
                </Stack>
                <Button fullWidth variant={plan.name.includes('Professional') ? 'contained' : 'soft'}>Edit Plan</Button>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
