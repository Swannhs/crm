'use client';

import { useMemo, useState } from 'react';
import useSWR from 'swr';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';

import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { projectService } from 'src/services/project-service';
import { organizationService } from 'src/services/organization-service';

export function TaskWorkspaceView() {
  const [activeTab, setActiveTab] = useState('tasks');
  const [newEntryOpen, setNewEntryOpen] = useState(false);

  const TABS = [
    { value: 'tasks', label: 'Active Tasks', icon: 'solar:checklist-bold' },
    { value: 'goals', label: 'Strategic Goals', icon: 'solar:flag-bold' },
    { value: 'habits', label: 'Habit Tracker', icon: 'solar:calendar-bold' },
  ];

  return (
    <FeatureRouteShell
      title="Task & Goal Orchestration"
      description="Track tasks, goals, and habits with actionable workflows."
      action={
        <Button variant="contained" color="primary" startIcon={<Iconify icon="solar:add-circle-bold" />} onClick={() => setNewEntryOpen(true)}>
          New Entry
        </Button>
      }
    >
      <Box sx={{ mt: 3 }}>
        <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ mb: 3, borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} icon={<Iconify icon={tab.icon} width={20} />} iconPosition="start" />
          ))}
        </Tabs>

        {activeTab === 'tasks' && <TaskListsTab />}
        {activeTab === 'goals' && <TaskGoalsTab />}
        {activeTab === 'habits' && <TaskHabitsTab />}
      </Box>

      <NewEntryDialog
        open={newEntryOpen}
        defaultType={activeTab === 'goals' || activeTab === 'habits' ? activeTab : 'tasks'}
        onClose={() => setNewEntryOpen(false)}
      />
    </FeatureRouteShell>
  );
}

function TaskListsTab() {
  const { data: tasks = [], isLoading, mutate } = useSWR('/api/projects/v1/tasks', projectService.getTasks);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredTasks = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10);
    return (tasks || []).filter((t: any) => {
      const nameOk = String(t?.name ?? '').toLowerCase().includes(search.toLowerCase());
      if (!nameOk) return false;

      const done = String(t?.kanban_state ?? '').toLowerCase() === 'done';
      const dueDate = String(t?.date_deadline ?? '').slice(0, 10);
      const isToday = !!dueDate && dueDate === today;
      const isOverdue = !!dueDate && dueDate < today && !done;

      if (filter === 'completed') return done;
      if (filter === 'due-today') return isToday;
      if (filter === 'overdue') return isOverdue;
      if (filter === 'assigned-to-me') {
        // Best-effort local filter; true identity matching depends on user id propagation.
        return Array.isArray(t?.user_ids) && t.user_ids.length > 0;
      }
      return true;
    });
  }, [tasks, search, filter]);

  const handleToggle = async (task: any) => {
    try {
      const done = String(task?.kanban_state ?? '').toLowerCase() === 'done';
      if (done) {
        await projectService.updateTask(String(task.id), { kanban_state: 'normal' });
      } else {
        await projectService.completeTask(String(task.id));
      }
      await mutate();
      showToast({ message: `Task marked ${done ? 'active' : 'done'}`, severity: 'success' });
    } catch (error: any) {
      showToast({ message: error?.message || 'Failed to update task', severity: 'warning' });
    }
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Card sx={{ p: 0 }}>
      <Box sx={{ p: 2.5, display: 'flex', gap: 1.5, alignItems: 'center', flexWrap: 'wrap' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Task Board</Typography>
        <TextField size="small" placeholder="Search tasks..." value={search} onChange={(e) => setSearch(e.target.value)} sx={{ minWidth: 220 }} />
        <TextField size="small" select value={filter} onChange={(e) => setFilter(e.target.value)} sx={{ minWidth: 180 }}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="assigned-to-me">Assigned to me</MenuItem>
          <MenuItem value="due-today">Due today</MenuItem>
          <MenuItem value="overdue">Overdue</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
      </Box>
      <Divider />
      <Stack>
        {filteredTasks.length === 0 && <Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>No matching tasks found.</Box>}
        {filteredTasks.map((task: any) => {
          const done = String(task?.kanban_state ?? '').toLowerCase() === 'done';
          return (
            <Box key={task.id} sx={{ p: 2.5, borderBottom: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center' }}>
              <Checkbox size="small" checked={done} onChange={() => handleToggle(task)} />
              <Box sx={{ flexGrow: 1, ml: 1 }}>
                <Typography variant="subtitle2" sx={{ textDecoration: done ? 'line-through' : 'none' }}>{task.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {task.date_deadline ? `Due ${new Date(task.date_deadline).toLocaleDateString()}` : 'No deadline'}
                </Typography>
              </Box>
              <Chip label={done ? 'Completed' : (task.priority === '1' ? 'High' : task.priority === '0' ? 'Normal' : 'Low')} size="small" color={done ? 'success' : task.priority === '1' ? 'error' : 'default'} variant="soft" />
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
}

function TaskGoalsTab() {
  const { data: goals = [], isLoading, mutate } = useSWR('/org/v1/goals', organizationService.getGoals);

  const updateProgress = async (goalId: string, progress: number) => {
    try {
      await organizationService.updateGoal(goalId, { progress });
      await mutate();
    } catch {
      showToast({ message: 'Failed to update goal progress', severity: 'warning' });
    }
  };

  const markComplete = async (goalId: string) => {
    await organizationService.completeGoal(goalId);
    await mutate();
  };

  const archive = async (goalId: string) => {
    await organizationService.archiveGoal(goalId);
    await mutate();
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Grid container spacing={3}>
      {goals.length === 0 && <Grid item xs={12}><Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>No strategic goals defined.</Box></Grid>}
      {goals.map((goal: any) => (
        <Grid item xs={12} md={6} key={goal.id}>
          <Card sx={{ p: 3 }}>
            <Typography variant="overline" color="primary">{goal.category}</Typography>
            <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>{goal.title}</Typography>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
              <TextField
                size="small"
                type="number"
                label="Progress %"
                value={goal.progress ?? 0}
                onChange={(e) => updateProgress(goal.id, Math.max(0, Math.min(100, Number(e.target.value || 0))))}
                sx={{ maxWidth: 140 }}
              />
              <Button size="small" variant="soft" onClick={() => markComplete(goal.id)}>Complete</Button>
              <Button size="small" color="warning" variant="soft" onClick={() => archive(goal.id)}>Archive</Button>
            </Stack>
            <Typography variant="subtitle2">{goal.progress}%</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function TaskHabitsTab() {
  const { data: habits = [], isLoading, mutate } = useSWR('/org/v1/habits', organizationService.getHabits);

  const checkIn = async (habitId: string) => {
    try {
      await organizationService.checkInHabit(habitId);
      await mutate();
      showToast({ message: 'Habit check-in saved', severity: 'success' });
    } catch {
      showToast({ message: 'Habit check-in failed', severity: 'warning' });
    }
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Habit Momentum</Typography>
      <Stack spacing={3}>
        {habits.length === 0 && <Box sx={{ textAlign: 'center', color: 'text.secondary' }}>No habits configured.</Box>}
        {habits.map((habit: any) => {
          const momentum = Array.isArray(habit.momentum) ? habit.momentum : [];
          const today = new Date().toISOString().slice(0, 10);
          const checkedToday = momentum.includes(today);
          return (
            <Box key={habit.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
              <Box>
                <Typography variant="subtitle2">{habit.title}</Typography>
                <Typography variant="caption" color="text.secondary">Streak entries: {momentum.length}</Typography>
              </Box>
              <Button size="small" variant={checkedToday ? 'soft' : 'contained'} disabled={checkedToday} onClick={() => checkIn(habit.id)}>
                {checkedToday ? 'Checked In' : 'Check In'}
              </Button>
            </Box>
          );
        })}
      </Stack>
    </Card>
  );
}

function NewEntryDialog({ open, defaultType, onClose }: { open: boolean; defaultType: string; onClose: () => void }) {
  const [type, setType] = useState(defaultType);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General');

  const submit = async () => {
    try {
      if (!title.trim()) return;
      if (type === 'tasks') {
        await projectService.createTask({ name: title, priority: '0' });
      } else if (type === 'goals') {
        await organizationService.createGoal({ title, category, progress: 0 });
      } else if (type === 'habits') {
        await organizationService.createHabit({ title, momentum: [] });
      }
      showToast({ message: 'Entry created', severity: 'success' });
      setTitle('');
      onClose();
    } catch {
      showToast({ message: 'Failed to create entry', severity: 'warning' });
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>New Entry</DialogTitle>
      <DialogContent sx={{ pt: 2 }}>
        <Stack spacing={2}>
          <TextField select label="Type" value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="tasks">Task</MenuItem>
            <MenuItem value="goals">Goal</MenuItem>
            <MenuItem value="habits">Habit</MenuItem>
          </TextField>
          <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          {type === 'goals' && <TextField label="Category" value={category} onChange={(e) => setCategory(e.target.value)} />}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={submit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
