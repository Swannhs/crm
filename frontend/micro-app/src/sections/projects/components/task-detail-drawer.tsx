'use client';

import React, { useMemo, useState, useEffect } from 'react';

import LoadingButton from '@mui/lab/LoadingButton';
import { 
  Box, 
  Stack, 
  Drawer, 
  Button, 
  Divider, 
  TextField, 
  Typography, 
  IconButton,
} from '@mui/material';

import { projectService } from 'src/services/project-service';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onClose: VoidFunction;
  task: any;
  columns: any[];
  onUpdate: (data: any) => Promise<void>;
  onDelete: VoidFunction;
};

export function TaskDetailDrawer({ open, onClose, task, columns, onUpdate, onDelete }: Props) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('0');
  const [columnId, setColumnId] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  
  const [worklogs, setWorklogs] = useState<any[]>([]);
  const [isLogging, setIsLogging] = useState(false);
  const [workHours, setWorkHours] = useState(1);
  const [workDesc, setWorkDesc] = useState('');

  const [subtasks, setSubtasks] = useState<any[]>([]);
  const [isAddingSubtask, setIsAddingSubtask] = useState(false);
  const [newSubtaskTitle, setNewSubtaskTitle] = useState('');

  useEffect(() => {
    if (task) {
      setTaskName(task.name || task.title || '');
      setDescription(task.description || '');
      setPriority(task.priority || '0');
      setColumnId(task.columnId || '');
    }
  }, [task]);

  useEffect(() => {
    if (task?.id && open) {
      projectService.getWorklogs(task.id).then(setWorklogs);
      projectService.getSubtasks(task.id).then(setSubtasks);
    }
  }, [task?.id, open]);

  const handleAddSubtask = async () => {
    if (!newSubtaskTitle.trim()) return;
    try {
      await projectService.createSubtask(task.id, { name: newSubtaskTitle, columnId: task.columnId });
      setNewSubtaskTitle('');
      setIsAddingSubtask(false);
      const data = await projectService.getSubtasks(task.id);
      setSubtasks(data);
    } catch (e) { console.error(e); }
  };

  const handleLogWork = async () => {
    if (!workDesc.trim()) return;
    try {
      await projectService.logWork(task.id, {
        name: workDesc,
        hours: workHours,
        date: new Date().toISOString().split('T')[0],
        projectId: task.project_id?.[0] || 1
      });
      setWorkDesc('');
      setIsLogging(false);
      const data = await projectService.getWorklogs(task.id);
      setWorklogs(data);
    } catch (e) { console.error(e); }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await onUpdate({ name: taskName, description, priority, columnId });
      onClose();
    } catch (e) { console.error(e); } finally { setIsSaving(false); }
  };

  const drawerProps = useMemo(() => ({
    sx: { width: { xs: 1, sm: 480 }, boxShadow: (theme: any) => theme.customShadows.z24 }
  }), []);

  const backdropProps = useMemo(() => ({
    invisible: true 
  }), []);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      slotProps={{ backdrop: backdropProps }}
      PaperProps={drawerProps}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2.5 }}>
        <Typography variant="h6">Task Details</Typography>
        <Stack direction="row" spacing={1}>
           <IconButton color="error" onClick={onDelete}>
              <Iconify icon="solar:trash-bin-trash-bold" />
           </IconButton>
           <IconButton onClick={onClose}>
              <Iconify icon="mingcute:close-line" />
           </IconButton>
        </Stack>
      </Stack>

      <Divider />

      <Scrollbar sx={{ p: 3, height: 1 }}>
        <Stack spacing={4}>
          <Stack direction="row" alignItems="center" spacing={2}>
             <Label variant="soft" color={(priority === '1' && 'error') || 'default'}>
                {priority === '1' ? 'High Priority' : 'Normal Priority'}
             </Label>
             <Typography variant="caption" sx={{ color: 'text.disabled' }}>ID: TASK-{task?.id || 'NEW'}</Typography>
          </Stack>

          <TextField
            fullWidth
            variant="standard"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            InputProps={{ disableUnderline: true, sx: { typography: 'h5', fontWeight: 'bold' } }}
          />

          <Stack spacing={1.5}>
            <Typography variant="subtitle2">Description</Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'background.neutral' }, '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
            />
          </Stack>

          <Stack spacing={3}>
            <Stack direction="row" alignItems="center">
               <Typography variant="body2" sx={{ color: 'text.secondary', width: 120 }}>Status</Typography>
               <TextField select fullWidth size="small" value={columnId} onChange={(e) => setColumnId(e.target.value)} SelectProps={{ native: true }}>
                 {columns.map((col) => <option key={col.id} value={col.id}>{col.name || col.title}</option>)}
               </TextField>
            </Stack>

            <Stack direction="row" alignItems="center">
               <Typography variant="body2" sx={{ color: 'text.secondary', width: 120 }}>Priority</Typography>
               <TextField select fullWidth size="small" value={priority} onChange={(e) => setPriority(e.target.value)} SelectProps={{ native: true }}>
                 <option value="0">Normal</option>
                 <option value="1">High</option>
               </TextField>
            </Stack>
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack spacing={2}>
             <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle2">Checklist</Typography>
                <Button size="small" variant="soft" color="primary" onClick={() => setIsAddingSubtask(!isAddingSubtask)}>Add Sub-task</Button>
             </Stack>

             {isAddingSubtask && (
               <Stack direction="row" spacing={1}>
                  <TextField fullWidth size="small" autoFocus value={newSubtaskTitle} onChange={(e) => setNewSubtaskTitle(e.target.value)} />
                  <IconButton color="primary" onClick={handleAddSubtask}><Iconify icon="solar:check-circle-bold" /></IconButton>
               </Stack>
             )}

             <Stack spacing={1}>
                {subtasks.map((st: any) => (
                  <Stack key={st.id} direction="row" alignItems="center" spacing={1.5}>
                     <Iconify icon={st.kanban_state === 'done' ? "solar:check-square-bold" : "solar:stop-bold"} sx={{ color: st.kanban_state === 'done' ? 'success.main' : 'text.disabled' }} />
                     <Typography variant="body2">{st.name || st.title}</Typography>
                  </Stack>
                ))}
             </Stack>
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack spacing={2}>
             <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle2">Time Tracking</Typography>
                <Button size="small" variant="soft" color="primary" onClick={() => setIsLogging(!isLogging)}>Log Work</Button>
             </Stack>

             {isLogging && (
               <Box sx={{ p: 2, borderRadius: 1.5, bgcolor: 'background.neutral' }}>
                  <Stack spacing={2}>
                     <Stack direction="row" spacing={2}>
                        <TextField label="Hours" type="number" size="small" value={workHours} onChange={(e) => setWorkHours(Number(e.target.value))} sx={{ width: 80 }} />
                        <TextField fullWidth label="Description" size="small" value={workDesc} onChange={(e) => setWorkDesc(e.target.value)} />
                     </Stack>
                     <Button size="small" variant="contained" onClick={handleLogWork}>Log</Button>
                  </Stack>
               </Box>
             )}

             <Stack spacing={1.5}>
                {worklogs.map((log: any) => (
                  <Stack key={log.id} direction="row" justifyContent="space-between" sx={{ p: 1, bgcolor: 'background.neutral', borderRadius: 1 }}>
                     <Typography variant="caption">{log.name}</Typography>
                     <Label variant="soft" color="info">{log.unit_amount}h</Label>
                  </Stack>
                ))}
             </Stack>
          </Stack>
        </Stack>
      </Scrollbar>

      <Box sx={{ p: 2.5, borderTop: (theme) => `solid 1px ${theme.palette.divider}` }}>
        <LoadingButton fullWidth variant="contained" size="large" loading={isSaving} onClick={handleSave}>Save Changes</LoadingButton>
      </Box>
    </Drawer>
  );
}
