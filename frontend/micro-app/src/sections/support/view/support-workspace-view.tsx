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
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function SupportWorkspaceView() {
  const [activeTab, setActiveTab] = useState('kb');

  const TABS = [
    { value: 'kb', label: 'Knowledge Base', icon: 'solar:book-bold' },
    { value: 'faq', label: 'FAQ', icon: 'solar:question-square-bold' },
    { value: 'blog', label: 'Organization Blog', icon: 'solar:pen-bold' },
    { value: 'pricing', label: 'Pricing Hub', icon: 'solar:tag-bold' },
    { value: 'ui-elements', label: 'UI Blueprints', icon: 'solar:layers-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Support & Intelligence"
      description="Access organizational knowledge, explore tactical guides, and monitor the latest community updates and pricing structures."
      links={[
        { href: '#', label: 'Help Center' },
        { href: '#', label: 'Community Forum' },
        { href: '#', label: 'Submit Ticket' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:chat-round-dots-bold" />}
        >
          Live Support
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

        {activeTab === 'kb' && <SupportKBTab />}
        {activeTab === 'faq' && <SupportFAQTab />}
        {activeTab === 'blog' && <SupportBlogTab />}
        {activeTab === 'ui-elements' && <SupportUIElementsTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function SupportKBTab() {
  return (
    <Stack spacing={4}>
       <Box sx={{ textAlign: 'center', py: 5, bgcolor: 'background.neutral', borderRadius: 2 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>How can we help you today?</Typography>
          <TextField 
            sx={{ maxWidth: 600, width: '100%', bgcolor: 'background.paper', borderRadius: 1 }}
            placeholder="Search for articles, guides, or tactical updates..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="solar:magnifer-bold" width={24} color="text.disabled" />
                </InputAdornment>
              ),
            }}
          />
       </Box>

       <Grid container spacing={3}>
          {[
            { title: 'Getting Started', icon: 'solar:rocket-bold', count: 12 },
            { title: 'Account & Billing', icon: 'solar:card-2-bold', count: 8 },
            { title: 'Marketing Tools', icon: 'solar:graph-bold', count: 15 },
            { title: 'API & Integrations', icon: 'solar:code-bold', count: 24 },
          ].map((cat) => (
             <Grid item xs={12} sm={6} md={3} key={cat.title}>
                <Card sx={{ p: 3, textAlign: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'primary.lighter' } }}>
                   <Iconify icon={cat.icon} width={40} color="primary.main" sx={{ mb: 2 }} />
                   <Typography variant="subtitle1">{cat.title}</Typography>
                   <Typography variant="caption" color="text.secondary">{cat.count} Articles</Typography>
                </Card>
             </Grid>
          ))}
       </Grid>
    </Stack>
  );
}

function SupportFAQTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5 }}>
          <Typography variant="h6">Frequently Asked Questions</Typography>
       </Box>
       <Divider />
       <Stack>
          {[
            { q: 'How do I orchestrate a new campaign?', a: 'Navigate to the Marketing Workspace and select "New Campaign" to begin the tactical setup.' },
            { q: 'Can I manage multiple locations?', a: 'Yes, the Organization Workspace allows for global multi-branch orchestration.' },
          ].map((faq, i) => (
             <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
                <Typography variant="subtitle2" sx={{ color: 'primary.main', mb: 1 }}>{faq.q}</Typography>
                <Typography variant="body2" color="text.secondary">{faq.a}</Typography>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function SupportBlogTab() {
  return (
    <Grid container spacing={3}>
       {[
         { title: 'Scaling Your Organization in 2026', author: 'Jane Smith', date: 'April 12, 2026', cat: 'Strategy' },
         { title: 'Tactical Social Media Mastery', author: 'John Doe', date: 'April 10, 2026', cat: 'Marketing' },
       ].map((post, i) => (
          <Grid item xs={12} md={6} key={i}>
             <Card sx={{ p: 0, overflow: 'hidden' }}>
                <Box sx={{ height: 200, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <Iconify icon="solar:gallery-bold" width={64} color="text.disabled" />
                </Box>
                <Box sx={{ p: 3 }}>
                   <Typography variant="overline" color="primary">{post.cat}</Typography>
                   <Typography variant="h5" sx={{ mt: 1, mb: 2 }}>{post.title}</Typography>
                   <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ width: 24, height: 24 }} />
                      <Typography variant="caption" color="text.secondary">{post.author} • {post.date}</Typography>
                   </Stack>
                </Box>
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function SupportUIElementsTab() {
  const CATEGORIES = [
    { title: 'Core Elements', items: ['Typography', 'Icons', 'Buttons', 'Dividers'], icon: 'solar:widget-bold' },
    { title: 'Feedback', items: ['Alerts', 'Badges', 'Toasts', 'Progress'], icon: 'solar:bell-bold' },
    { title: 'Navigation', items: ['Breadcrumbs', 'Pagination', 'Tabs', 'Pills'], icon: 'solar:map-point-bold' },
    { title: 'Data Display', items: ['Cards (Analytics)', 'Timelines', 'Accordions'], icon: 'solar:chart-2-bold' },
    { title: 'Overlays', items: ['Modals', 'Dropdowns', 'Popovers', 'Tooltips'], icon: 'solar:layers-bold' },
  ];

  return (
    <Stack spacing={4}>
       <Box sx={{ p: 3, bgcolor: 'primary.lighter', borderRadius: 2, color: 'primary.darker' }}>
          <Typography variant="h6">Tactical UI Blueprint Library</Typography>
          <Typography variant="body2">Explore the high-fidelity component library used to orchestrate the MyManager design system.</Typography>
       </Box>

       <Grid container spacing={3}>
          {CATEGORIES.map((cat) => (
             <Grid item xs={12} md={4} key={cat.title}>
                <Card sx={{ p: 3 }}>
                   <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Box sx={{ p: 1, borderRadius: 1, bgcolor: 'primary.main', color: 'common.white' }}>
                         <Iconify icon={cat.icon} />
                      </Box>
                      <Typography variant="subtitle1">{cat.title}</Typography>
                   </Stack>
                   <Stack spacing={1}>
                      {cat.items.map((item) => (
                         <Box key={item} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, borderRadius: 1, '&:hover': { bgcolor: 'background.neutral' }, cursor: 'pointer' }}>
                            <Typography variant="body2">{item}</Typography>
                            <Iconify icon="solar:arrow-right-bold" width={14} color="text.disabled" />
                         </Box>
                      ))}
                   </Stack>
                </Card>
             </Grid>
          ))}
       </Grid>
    </Stack>
  );
}
