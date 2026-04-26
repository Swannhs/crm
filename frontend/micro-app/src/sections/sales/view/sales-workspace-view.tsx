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
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { fCurrency } from 'src/utils/format-number';

import { useGetDeals } from 'src/hooks/use-deals';

import { Iconify } from 'src/components/iconify';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function SalesWorkspaceView() {
  const [activeTab, setActiveTab] = useState('pipeline');

  const { deals, dealsLoading } = useGetDeals();

  const TABS = [
    { value: 'pipeline', label: 'Sales Pipeline', icon: 'solar:graph-up-bold' },
    { value: 'leads', label: 'Lead Management', icon: 'solar:users-group-rounded-bold' },
    { value: 'funnels', label: 'Conversion Funnels', icon: 'solar:filters-bold' },
    { value: 'analytics', label: 'Revenue Analytics', icon: 'solar:chart-2-bold' },
    { value: 'settings', label: 'Pipeline Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Sales Orchestration"
      description="Manage organizational sales pipelines, track lead lifecycles, and monitor revenue conversion through high-fidelity deal tracking."
      links={[
        { href: '#', label: 'Active Deals' },
        { href: '#', label: 'Lead Sources' },
        { href: '#', label: 'Conversion Reports' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          New Lead
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

        {dealsLoading ? (
          <Box sx={{ py: 10, textAlign: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {activeTab === 'pipeline' && <SalesPipelineTab deals={deals} />}
            {activeTab === 'leads' && <SalesLeadsTab />}
            {activeTab === 'funnels' && <SalesFunnelsTab />}
          </>
        )}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function SalesPipelineTab({ deals }: { deals: any[] }) {
  const STAGES = [
    { id: 'prospect', label: 'Prospecting' },
    { id: 'qualification', label: 'Qualification' },
    { id: 'proposal', label: 'Proposal' },
    { id: 'negotiation', label: 'Negotiation' },
    { id: 'closed_won', label: 'Closed Won' },
    { id: 'closed_lost', label: 'Closed Lost' },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 3 }}>
       {STAGES.map((stage) => {
         const stageDeals = deals.filter((d) => d.stage === stage.id);
         
         return (
            <Box key={stage.id} sx={{ minWidth: 280, width: 280, flexShrink: 0 }}>
               <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1">{stage.label}</Typography>
                  <Chip label={stageDeals.length} size="small" variant="soft" />
               </Box>
               <Stack spacing={2}>
                  {stageDeals.map((deal) => (
                     <Card key={deal.id} sx={{ p: 2, cursor: 'pointer', '&:hover': { boxShadow: (theme) => theme.customShadows.z12 } }}>
                        <Typography variant="subtitle2" sx={{ mb: 1 }}>{deal.name}</Typography>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                           <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700 }}>
                             {fCurrency(deal.amount)}
                           </Typography>
                           <Iconify 
                             icon={deal.priority === 'high' || deal.priority === 'urgent' ? "solar:flag-bold" : "solar:flag-linear"} 
                             width={14} 
                             color={deal.priority === 'high' || deal.priority === 'urgent' ? "error.main" : "text.disabled"} 
                           />
                        </Stack>
                     </Card>
                  ))}
                  <Button fullWidth variant="dashed" startIcon={<Iconify icon="solar:add-circle-bold" />}>Add Deal</Button>
               </Stack>
            </Box>
         );
       })}
    </Box>
  );
}

function SalesLeadsTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Lead Directory</Typography>
          <TextField size="small" placeholder="Search leads..." sx={{ minWidth: 240 }} />
       </Box>
       <Divider />
       <Stack>
          {[
            { name: 'John Smith', source: 'Website Form', status: 'Warm', date: '2 hours ago' },
            { name: 'Sarah Wilson', source: 'Facebook Ads', status: 'Hot', date: '5 hours ago' },
          ].map((lead, i) => (
             <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ mr: 2 }}>{lead.name[0]}</Avatar>
                <Box sx={{ flexGrow: 1 }}>
                   <Typography variant="subtitle2">{lead.name}</Typography>
                   <Typography variant="caption" color="text.secondary">Source: {lead.source} • {lead.date}</Typography>
                </Box>
                <Chip label={lead.status} size="small" color={lead.status === 'Hot' ? 'error' : 'warning'} variant="soft" />
                <Button variant="soft" size="small" sx={{ ml: 2 }}>Nurture</Button>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function SalesFunnelsTab() {
  return (
    <Grid container spacing={3}>
       <Grid item xs={12} md={8}>
          <Card sx={{ p: 4, height: 400, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Box sx={{ textAlign: 'center' }}>
                <Iconify icon="solar:filters-bold-duotone" width={64} color="primary.main" sx={{ mb: 2 }} />
                <Typography variant="h5">Visual Conversion Funnel</Typography>
                <Typography variant="body2" color="text.secondary">Orchestrating high-fidelity data visualization for lead-to-deal conversion...</Typography>
             </Box>
          </Card>
       </Grid>
       <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
             <Typography variant="h6" sx={{ mb: 2 }}>Funnel Metrics</Typography>
             <Stack spacing={2}>
                <Box>
                   <Typography variant="caption" color="text.secondary">Total Conversions</Typography>
                   <Typography variant="h4">12.5%</Typography>
                </Box>
                <Box>
                   <Typography variant="caption" color="text.secondary">Average Deal Size</Typography>
                   <Typography variant="h4">$8,420</Typography>
                </Box>
             </Stack>
          </Card>
       </Grid>
    </Grid>
  );
}

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
