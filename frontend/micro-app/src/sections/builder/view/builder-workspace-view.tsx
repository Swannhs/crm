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
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function BuilderWorkspaceView() {
  const [activeTab, setActiveTab] = useState('websites');

  const TABS = [
    { value: 'websites', label: 'My Websites', icon: 'solar:globus-bold' },
    { value: 'editor', label: 'Visual Editor', icon: 'solar:pen-bold' },
    { value: 'pages', label: 'Page Orchestration', icon: 'solar:layers-bold' },
    { value: 'templates', label: 'Blueprints', icon: 'solar:copy-bold' },
    { value: 'settings', label: 'Domain Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Visual Web Builder"
      description="Orchestrate high-fidelity web experiences, manage multi-page organizational sites, and deploy category-specific blueprints."
      links={[
        { href: '#', label: 'Website Directory' },
        { href: '#', label: 'Visual Editor' },
        { href: '#', label: 'Template Library' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Create New Site
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

        {activeTab === 'websites' && <BuilderWebsitesTab />}
        {activeTab === 'editor' && <BuilderEditorTab />}
        {activeTab === 'templates' && <BuilderTemplatesTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function BuilderEditorTab() {
  return (
    <Card sx={{ height: '70vh', display: 'flex', overflow: 'hidden' }}>
       {/* Left Sidebar: Blocks */}
       <Box sx={{ width: 240, borderRight: (theme) => `1px solid ${theme.palette.divider}`, bgcolor: 'background.neutral' }}>
          <Box sx={{ p: 2 }}>
             <Typography variant="overline">Elements</Typography>
          </Box>
          <Stack spacing={1} sx={{ p: 1 }}>
             {[
               { icon: 'solar:text-bold', label: 'Text Block' },
               { icon: 'solar:gallery-bold', label: 'Image Section' },
               { icon: 'solar:play-circle-bold', label: 'Video Player' },
               { icon: 'solar:button-bold', label: 'Tactical Button' },
             ].map((el) => (
                <Box key={el.label} sx={{ p: 1.5, bgcolor: 'background.paper', borderRadius: 1, border: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'primary.lighter' } }}>
                   <Iconify icon={el.icon} width={18} sx={{ mr: 1 }} />
                   <Typography variant="caption">{el.label}</Typography>
                </Box>
             ))}
          </Stack>
       </Box>

       {/* Main Canvas */}
       <Box sx={{ flexGrow: 1, p: 4, bgcolor: 'common.white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ textAlign: 'center', maxWidth: 400 }}>
             <Iconify icon="solar:pen-bold-duotone" width={64} color="primary.main" sx={{ mb: 2, opacity: 0.4 }} />
             <Typography variant="h5">Visual Orchestration Canvas</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Drag and drop elements here to build organizational web assets in real-time.
             </Typography>
          </Box>
       </Box>

       {/* Right Sidebar: Styles */}
       <Box sx={{ width: 280, borderLeft: (theme) => `1px solid ${theme.palette.divider}`, bgcolor: 'background.neutral' }}>
          <Box sx={{ p: 2 }}>
             <Typography variant="overline">Style Manager</Typography>
          </Box>
          <Stack spacing={2} sx={{ p: 2 }}>
             <Box>
                <Typography variant="caption" color="text.secondary">Typography</Typography>
                <Box sx={{ height: 32, bgcolor: 'background.paper', border: (theme) => `1px solid ${theme.palette.divider}`, borderRadius: 0.5, mt: 0.5 }} />
             </Box>
             <Box>
                <Typography variant="caption" color="text.secondary">Dimensions</Typography>
                <Box sx={{ height: 32, bgcolor: 'background.paper', border: (theme) => `1px solid ${theme.palette.divider}`, borderRadius: 0.5, mt: 0.5 }} />
             </Box>
             <Box>
                <Typography variant="caption" color="text.secondary">Decorations</Typography>
                <Box sx={{ height: 32, bgcolor: 'background.paper', border: (theme) => `1px solid ${theme.palette.divider}`, borderRadius: 0.5, mt: 0.5 }} />
             </Box>
          </Stack>
       </Box>
    </Card>
  );
}

function BuilderWebsitesTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Elite Martial Arts Official', domain: 'elitema.com', pages: 12, status: 'Published' },
         { name: 'Summer Campaign Landing', domain: 'promo.elitema.com', pages: 1, status: 'Draft' },
       ].map((site) => (
          <Grid item xs={12} md={6} key={site.name}>
             <Card sx={{ p: 0, overflow: 'hidden' }}>
                <Box sx={{ height: 200, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Iconify icon="solar:monitor-bold" width={80} color="text.disabled" />
                </Box>
                <Box sx={{ p: 2.5 }}>
                   <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Box>
                         <Typography variant="subtitle1">{site.name}</Typography>
                         <Typography variant="caption" color="text.secondary">{site.domain} • {site.pages} Pages</Typography>
                      </Box>
                      <Chip label={site.status} size="small" color={site.status === 'Published' ? 'success' : 'warning'} variant="soft" />
                   </Stack>
                   <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                      <Button fullWidth variant="contained" startIcon={<Iconify icon="solar:pen-bold" />}>Edit Content</Button>
                      <Button variant="soft" color="inherit"><Iconify icon="solar:eye-bold" /></Button>
                      <Button variant="soft" color="inherit"><Iconify icon="solar:settings-bold" /></Button>
                   </Stack>
                </Box>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function BuilderTemplatesTab() {
  return (
    <Grid container spacing={3}>
       {[
         { name: 'Corporate Pro', cat: 'Business', icon: 'solar:case-bold' },
         { name: 'Fitness Flow', cat: 'Sports', icon: 'solar:clutter-bold' },
         { name: 'Landing Hero', cat: 'Marketing', icon: 'solar:flag-bold' },
       ].map((tpl) => (
          <Grid item xs={12} sm={6} md={4} key={tpl.name}>
             <Card sx={{ p: 3, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'primary.lighter' } }}>
                <Iconify icon={tpl.icon} width={40} color="primary.main" sx={{ mb: 2 }} />
                <Typography variant="subtitle1">{tpl.name}</Typography>
                <Typography variant="caption" color="text.secondary">{tpl.cat} Blueprint</Typography>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}
