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

export function ProjectWorkspaceView() {
  const [activeTab, setActiveTab] = useState('kanban');

  const TABS = [
    { value: 'kanban', label: 'Kanban Board', icon: 'solar:clutter-bold' },
    { value: 'list', label: 'Task List', icon: 'solar:list-bold' },
    { value: 'calendar', label: 'Timeline', icon: 'solar:calendar-bold' },
    { value: 'scrum', label: 'Scrums', icon: 'solar:users-group-rounded-bold' },
    { value: 'settings', label: 'Board Settings', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Project Orchestration"
      description="Manage organizational projects, track task lifecycles, and facilitate agile team collaboration through high-fidelity Kanban boards."
      links={[
        { href: '#', label: 'All Projects' },
        { href: '#', label: 'Team Workspaces' },
        { href: '#', label: 'Global Archives' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          New Project
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

        {activeTab === 'kanban' && <ProjectKanbanTab />}
        {activeTab === 'list' && <ProjectListTab />}
        {activeTab === 'calendar' && <ProjectCalendarTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function ProjectKanbanTab() {
  return (
    <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 3 }}>
       {[
         { title: 'To Do', tasks: ['Market Analysis', 'Brand Identity'] },
         { title: 'In Progress', tasks: ['UI Orchestration', 'Database Schema'] },
         { title: 'Testing', tasks: ['Auth Handshake'] },
         { title: 'Completed', tasks: ['Project Scoping'] },
       ].map((column) => (
          <Box key={column.title} sx={{ minWidth: 280, width: 280, flexShrink: 0 }}>
             <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1">{column.title}</Typography>
                <Chip label={column.tasks.length} size="small" variant="soft" />
             </Box>
             <Stack spacing={2}>
                {column.tasks.map((task) => (
                   <Card key={task} sx={{ p: 2, cursor: 'pointer', '&:hover': { boxShadow: (theme) => theme.customShadows.z12 } }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>{task}</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                         <Iconify icon="solar:clock-circle-bold" width={14} color="text.disabled" />
                         <Typography variant="caption" color="text.secondary">Due in 2 days</Typography>
                      </Stack>
                   </Card>
                ))}
                <Button fullWidth variant="dashed" startIcon={<Iconify icon="solar:add-circle-bold" />}>Add Task</Button>
             </Stack>
          </Box>
       ))}
    </Box>
  );
}

function ProjectListTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">All Active Tasks</Typography>
          <Button variant="soft" size="small" startIcon={<Iconify icon="solar:filter-bold" />}>Filters</Button>
       </Box>
       <Divider />
       <Stack>
          {[
            { task: 'Market Analysis', priority: 'High', owner: 'John Doe', status: 'Pending' },
            { task: 'UI Orchestration', priority: 'Critical', owner: 'Admin', status: 'In Progress' },
          ].map((t, i) => (
             <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" />
                <Box sx={{ ml: 2, flexGrow: 1 }}>
                   <Typography variant="subtitle2">{t.task}</Typography>
                   <Typography variant="caption" color="text.secondary">Owned by {t.owner}</Typography>
                </Box>
                <Chip label={t.priority} size="small" color={t.priority === 'Critical' ? 'error' : 'warning'} variant="soft" />
                <Typography variant="caption" sx={{ ml: 2, minWidth: 80, textAlign: 'right' }}>{t.status}</Typography>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function ProjectCalendarTab() {
  return (
    <Card sx={{ p: 4, height: 500, bgcolor: 'background.neutral', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
       <Box>
          <Iconify icon="solar:calendar-bold-duotone" width={64} color="primary.main" sx={{ mb: 2 }} />
          <Typography variant="h5">Task Timeline Visualizer</Typography>
          <Typography variant="body2" color="text.secondary">Orchestrating high-fidelity calendar view for project deadlines...</Typography>
       </Box>
    </Card>
  );
}

import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
