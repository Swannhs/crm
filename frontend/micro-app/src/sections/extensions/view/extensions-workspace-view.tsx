'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function ExtensionsWorkspaceView() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Extensions', icon: 'solar:widget-bold' },
    { key: 'data', label: 'Data Management', icon: 'solar:database-bold' },
    { key: 'auth', label: 'Access & Security', icon: 'solar:shield-check-bold' },
    { key: 'ui', label: 'UI Toolkit', icon: 'solar:palette-bold' },
    { key: 'integration', label: 'External Sync', icon: 'solar:link-bold' },
  ];

  const extensions = [
    { id: 'import', title: 'Data Importer', desc: 'Batch import CSV/XLSX contacts and documents.', category: 'data', icon: 'solar:import-bold', status: 'installed' },
    { id: 'export', title: 'Data Exporter', desc: 'Export organization data to structured formats.', category: 'data', icon: 'solar:export-bold', status: 'installed' },
    { id: 'acl', title: 'Access Control (ACL)', desc: 'Advanced role-based permissions and resource locking.', category: 'auth', icon: 'solar:lock-password-bold', status: 'active' },
    { id: 'i18n', title: 'Multi-Language Support', desc: 'Localize your portal into 15+ languages.', category: 'ui', icon: 'solar:globus-bold', status: 'installed' },
    { id: 'tour', title: 'Interactive Tour', desc: 'Guided onboarding for new staff members.', category: 'ui', icon: 'solar:map-arrow-square-bold', status: 'installed' },
    { id: 'forms', title: 'Visual Form Elements', desc: 'Extended library of custom input components.', category: 'ui', icon: 'solar:checklist-bold', status: 'active' },
    { id: 'webhook', title: 'Webhook Orchestration', desc: 'Real-time event streaming to external apps.', category: 'integration', icon: 'solar:wireless-charge-bold', status: 'available' },
    { id: 'api', title: 'Developer API Keys', desc: 'Generate secure tokens for internal automation.', category: 'auth', icon: 'solar:key-bold', status: 'active' },
  ];

  const filtered = extensions.filter(e => activeCategory === 'all' || e.category === activeCategory);

  return (
    <FeatureRouteShell
      title="Extension Marketplace"
      description="Power up your organization with professional-grade utilities, data tools, and advanced security extensions."
      links={[
        { href: '#', label: 'Installed' },
        { href: '#', label: 'Available' },
        { href: '#', label: 'Developer Portal' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          Add Custom Extension
        </Button>
      }
    >
      <Box sx={{ mt: 3, display: 'flex', gap: 3 }}>
        {/* Sidebar Categories */}
        <Card sx={{ width: 240, p: 2, flexShrink: 0, height: 'fit-content' }}>
           <Typography variant="overline" sx={{ px: 1, mb: 1, color: 'text.disabled' }}>Categories</Typography>
           <Stack spacing={0.5}>
              {categories.map((cat) => {
                 const isActive = activeCategory === cat.key;
                 return (
                    <Button
                      key={cat.key}
                      fullWidth
                      variant={isActive ? 'soft' : 'text'}
                      color={isActive ? 'primary' : 'inherit'}
                      startIcon={<Iconify icon={cat.icon} />}
                      onClick={() => setActiveCategory(cat.key)}
                      sx={{ justifyContent: 'flex-start', px: 1.5 }}
                    >
                       {cat.label}
                    </Button>
                 );
              })}
           </Stack>
        </Card>

        {/* Extensions Grid */}
        <Box sx={{ flexGrow: 1 }}>
           <Grid container spacing={3}>
              {filtered.map((ext) => (
                 <Grid item xs={12} sm={6} md={4} key={ext.id}>
                    <Card sx={{ 
                       p: 3, 
                       height: '100%', 
                       display: 'flex', 
                       flexDirection: 'column',
                       transition: 'all 0.2s ease',
                       '&:hover': { transform: 'translateY(-4px)', boxShadow: (theme) => theme.customShadows.z12 }
                    }}>
                       <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                          <Box sx={{ 
                             p: 1.5, 
                             borderRadius: 1.5, 
                             bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
                             color: 'primary.main',
                             display: 'flex'
                          }}>
                             <Iconify icon={ext.icon} width={24} />
                          </Box>
                          <Box>
                             <Typography variant="subtitle1">{ext.title}</Typography>
                             <Box sx={{ 
                                display: 'inline-flex', 
                                px: 1, 
                                borderRadius: 0.5, 
                                bgcolor: ext.status === 'active' ? 'success.lighter' : 'grey.200',
                                color: ext.status === 'active' ? 'success.dark' : 'text.disabled',
                                fontSize: 10,
                                fontWeight: 800,
                                textTransform: 'uppercase'
                             }}>
                                {ext.status}
                             </Box>
                          </Box>
                       </Stack>
                       
                       <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 3 }}>
                          {ext.desc}
                       </Typography>

                       <Divider sx={{ borderStyle: 'dashed', mb: 2 }} />
                       
                       <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Button size="small" color="inherit">Settings</Button>
                          <Button size="small" variant="soft" color="primary">Manage</Button>
                       </Stack>
                    </Card>
                 </Grid>
              ))}
           </Grid>
        </Box>
      </Box>
    </FeatureRouteShell>
  );
}
