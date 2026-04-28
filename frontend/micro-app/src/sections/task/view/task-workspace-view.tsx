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
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { Iconify } from 'src/components/iconify';

import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

export function TaskWorkspaceView() {
  const [activeTab, setActiveTab] = useState('tasks');

  const TABS = [
    { value: 'tasks', label: 'Active Tasks', icon: 'solar:checklist-bold' },
    { value: 'goals', label: 'Strategic Goals', icon: 'solar:flag-bold' },
    { value: 'habits', label: 'Habit Tracker', icon: 'solar:calendar-bold' },
    { value: 'todo', label: 'Quick To-Do', icon: 'solar:list-bold' },
    { value: 'settings', label: 'Preferences', icon: 'solar:settings-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Task & Goal Orchestration"
      description="Monitor organizational performance, track personal habit progression, and manage complex task lifecycles through tactical dashboards."
      links={[
        { href: '#', label: 'Personal Board' },
        { href: '#', label: 'Team Objectives' },
        { href: '#', label: 'Habit Analytics' },
      ]}
      action={
        <Button
          variant="contained"
          color="primary"
          startIcon={<Iconify icon="solar:add-circle-bold" />}
        >
          New Task
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

        {activeTab === 'tasks' && <TaskListsTab />}
        {activeTab === 'goals' && <TaskGoalsTab />}
        {activeTab === 'habits' && <TaskHabitsTab />}
      </Box>
    </FeatureRouteShell>
  );
}

// --- Tab Components ---

function TaskListsTab() {
  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Personal Task Board</Typography>
          <TextField size="small" placeholder="Search tasks..." sx={{ minWidth: 240 }} />
       </Box>
       <Divider />
       <Stack>
          {[
            { title: 'Update Organization Logo', priority: 'High', due: 'Today' },
            { title: 'Review Marketing Funnel', priority: 'Medium', due: 'Tomorrow' },
          ].map((task, i) => (
             <Box key={i} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" />
                <Box sx={{ flexGrow: 1, ml: 1 }}>
                   <Typography variant="subtitle2">{task.title}</Typography>
                   <Typography variant="caption" color="text.secondary">Due {task.due}</Typography>
                </Box>
                <Chip label={task.priority} size="small" color={task.priority === 'High' ? 'error' : 'warning'} variant="soft" />
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function TaskGoalsTab() {
  return (
    <Grid container spacing={3}>
       {[
         { title: 'Global Expansion 2026', progress: 65, cat: 'Strategic' },
         { title: 'Revenue Milestone $1M', progress: 42, cat: 'Financial' },
       ].map((goal) => (
          <Grid item xs={12} md={6} key={goal.title}>
             <Card sx={{ p: 3 }}>
                <Typography variant="overline" color="primary">{goal.cat}</Typography>
                <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>{goal.title}</Typography>
                <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                   <Typography variant="caption" color="text.secondary">Tactical Progress</Typography>
                   <Typography variant="subtitle2">{goal.progress}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={goal.progress} sx={{ height: 8, borderRadius: 1 }} />
             </Card>
          </Grid>
       ))}
    </Grid>
  );
}

function TaskHabitsTab() {
  return (
    <Card sx={{ p: 3 }}>
       <Typography variant="h6" sx={{ mb: 3 }}>Habit Momentum</Typography>
       <Stack spacing={3}>
          {['Morning Briefing', 'Code Review', 'Organizational Audit'].map((habit) => (
             <Box key={habit} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle2">{habit}</Typography>
                <Stack direction="row" spacing={1}>
                   {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <Box key={day} sx={{ 
                         width: 24, height: 24, borderRadius: 0.5, 
                         bgcolor: day < 4 ? 'primary.main' : 'background.neutral',
                         opacity: day < 4 ? 1 : 0.4
                      }} />
                   ))}
                </Stack>
             </Box>
          ))}
       </Stack>
    </Card>
  );
}
