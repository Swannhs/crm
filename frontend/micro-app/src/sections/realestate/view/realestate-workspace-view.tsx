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
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function RealestateWorkspaceView() {
  const [activeTab, setActiveTab] = useState('properties');

  const TABS = [
    { value: 'properties', label: 'Properties', icon: 'solar:home-2-bold' },
    { value: 'listings', label: 'Listings', icon: 'solar:signpost-bold' },
    { value: 'leases', label: 'Lease Management', icon: 'solar:document-text-bold' },
    { value: 'maintenance', label: 'Maintenance', icon: 'solar:tuning-square-2-bold' },
    { value: 'settings', label: 'Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Real Estate Orchestration"
      description="Manage organizational property portfolios, track lease lifecycles, and facilitate tenant maintenance requests through high-fidelity management hubs."
      links={[
        { href: '#', label: 'Property Portfolio' },
        { href: '#', label: 'Tenant Directory' },
        { href: '#', label: 'Listing Hub' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Add Property
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

        {activeTab === 'properties' && <REPropertiesTab />}
        {activeTab === 'listings' && <REListingsTab />}
        {activeTab === 'leases' && <RELeasesTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function REPropertiesTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Downtown Heights', units: 24, type: 'Residential', status: 'Managed' },
         { name: 'Skyline Plaza', units: 12, type: 'Commercial', status: 'Managed' },
         { name: 'Sunset Villas', units: 8, type: 'Residential', status: 'Managed' },
       ].map((prop) => (
          <Grid item xs={12} md={4} key={prop.name}>
             <Card sx={{ p: 0, overflow: 'hidden' }}>
                <Box sx={{ height: 180, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Iconify icon="solar:home-bold" width={64} color="text.disabled" />
                </Box>
                <Box sx={{ p: 2.5 }}>
                   <Typography variant="subtitle1">{prop.name}</Typography>
                   <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>{prop.type} • {prop.units} Units</Typography>
                   <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Chip label={prop.status} size="small" variant="soft" color="success" />
                      <Button size="small" variant="soft">Manage</Button>
                   </Stack>
                </Box>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function REListingsTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Active Listings</Typography>
          <TextField size="small" placeholder="Search listings..." sx={{ minWidth: 240 }} />
       </Box>
       <Divider />
       <Stack>
          {[
            { title: 'Modern 2BR Apartment', price: '$2,500/mo', views: 124, status: 'Active' },
            { title: 'Commercial Office Space', price: '$4,200/mo', views: 45, status: 'Pending' },
          ].map((listing, i) => (
             <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
                <Box sx={{ p: 1.5, borderRadius: 1.5, bgcolor: 'primary.lighter', color: 'primary.main', mr: 2 }}>
                   <Iconify icon="solar:signpost-bold" />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                   <Typography variant="subtitle2">{listing.title}</Typography>
                   <Typography variant="caption" color="text.secondary">{listing.price} • {listing.views} views</Typography>
                </Box>
                <Chip label={listing.status} size="small" color={listing.status === 'Active' ? 'success' : 'warning'} variant="soft" />
                <Button variant="soft" size="small" sx={{ ml: 2 }}>View</Button>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function RELeasesTab() {
  return (
    <Card sx={{ p: 3 }}>
       <Typography variant="h6" sx={{ mb: 3 }}>Lease Orchestration</Typography>
       <Stack spacing={2}>
          {[
            { tenant: 'John Doe', unit: 'Unit 4B', expires: '2026-12-01', status: 'Current' },
            { tenant: 'Jane Smith', unit: 'Unit 12A', expires: '2026-08-15', status: 'Expiring Soon' },
          ].map((lease, i) => (
             <Box key={i} sx={{ p: 2, borderRadius: 1.5, border: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                   <Box>
                      <Typography variant="subtitle2">{lease.tenant}</Typography>
                      <Typography variant="caption" color="text.secondary">{lease.unit} • Expires {lease.expires}</Typography>
                   </Box>
                   <Chip label={lease.status} size="small" color={lease.status === 'Current' ? 'primary' : 'error'} variant="soft" />
                </Stack>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}
