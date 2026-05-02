'use client';

import { useState } from 'react';
import useSWR from 'swr';
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
import CircularProgress from '@mui/material/CircularProgress';

import { Iconify } from 'src/components/iconify';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { projectService } from 'src/services/project-service';
import { organizationService } from 'src/services/organization-service';

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
          New Entry
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
  const { data: tasks = [], isLoading, mutate } = useSWR('/api/projects/v1/tasks', projectService.getTasks);
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter((t: any) => 
    t?.name?.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggle = async (taskId: number, currentStage: any) => {
    // Basic toggle logic if stage mapping is known, otherwise just optimistic update
    // e.g. mapping "Done" vs "To Do"
    // await projectService.updateTask(String(taskId), { stage_id: ... })
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Card sx={{ p: 0 }}>
       <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Personal Task Board</Typography>
          <TextField 
            size="small" 
            placeholder="Search tasks..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ minWidth: 240 }} 
          />
       </Box>
       <Divider />
       <Stack>
          {filteredTasks.length === 0 && (
             <Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>
                No active tasks found.
             </Box>
          )}
          {filteredTasks.map((task: any) => (
             <Box key={task.id} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
                <Checkbox size="small" onChange={() => handleToggle(task.id, task.stage_id)} />
                <Box sx={{ flexGrow: 1, ml: 1 }}>
                   <Typography variant="subtitle2">{task.name}</Typography>
                   <Typography variant="caption" color="text.secondary">
                     {task.date_deadline ? `Due ${new Date(task.date_deadline).toLocaleDateString()}` : 'No deadline'}
                   </Typography>
                </Box>
                <Chip 
                  label={task.priority === '1' ? 'High' : task.priority === '0' ? 'Normal' : 'Low'} 
                  size="small" 
                  color={task.priority === '1' ? 'error' : 'default'} 
                  variant="soft" 
                />
             </Box>
          ))}
       </Stack>
    </Card>
  );
}

function TaskGoalsTab() {
  const { data: goals = [], isLoading, mutate } = useSWR('/org/v1/goals', organizationService.getGoals);

  if (isLoading) return <CircularProgress />;

  return (
    <Grid container spacing={3}>
       {goals.length === 0 && (
          <Grid item xs={12}>
            <Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>
              No strategic goals defined.
            </Box>
          </Grid>
       )}
       {goals.map((goal: any) => (
          <Grid item xs={12} md={6} key={goal.id}>
             <Card sx={{ p: 3 }}>
                <Typography variant="overline" color="primary">{goal.category}</Typography>
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
  const { data: habits = [], isLoading, mutate } = useSWR('/org/v1/habits', organizationService.getHabits);

  if (isLoading) return <CircularProgress />;

  return (
    <Card sx={{ p: 3 }}>
       <Typography variant="h6" sx={{ mb: 3 }}>Habit Momentum</Typography>
       <Stack spacing={3}>
          {habits.length === 0 && (
            <Box sx={{ textAlign: 'center', color: 'text.secondary' }}>
              No habits configured.
            </Box>
          )}
          {habits.map((habit: any) => {
             const momentum = Array.isArray(habit.momentum) ? habit.momentum : [];
             return (
               <Box key={habit.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle2">{habit.title}</Typography>
                  <Stack direction="row" spacing={1}>
                     {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
                        const isDone = momentum[dayIndex];
                        return (
                           <Box key={dayIndex} sx={{ 
                              width: 24, height: 24, borderRadius: 0.5, 
                              bgcolor: isDone ? 'primary.main' : 'background.neutral',
                              opacity: isDone ? 1 : 0.4
                           }} />
                        );
                     })}
                  </Stack>
               </Box>
             );
          })}
       </Stack>
    </Card>
  );
}
