'use client';

import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { useBoolean } from 'src/hooks/use-boolean';
import { projectService } from 'src/services/project-service';
import { DashboardContent } from 'src/layouts/dashboard';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';

import { TaskDetailDrawer } from '../components/task-detail-drawer';
import { ProjectDashboardView } from './project-dashboard-view';
import { Tab, Tabs } from '@mui/material';

// ----------------------------------------------------------------------

interface Props {
  id: string;
}

export function ProjectDetailsView({ id }: Props) {
  const queryClient = useQueryClient();
  const columnDialog = useBoolean();
  const taskDrawer = useBoolean();
  const confirmDeleteColumn = useBoolean();
  const confirmDeleteCard = useBoolean();
  
  const [columnName, setColumnName] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('0');
  
  const [activeColumnId, setActiveColumnId] = useState('');
  const [selectedColumn, setSelectedColumn] = useState<any>(null);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [menuType, setMenuType] = useState<'column' | 'card'>('column');
  const [menuData, setMenuData] = useState<any>(null);

  const [dragOverColumnId, setDragOverColumnId] = useState<string | null>(null);
  const [quickAddTaskColumnId, setQuickAddTaskColumnId] = useState<string | null>(null);
  const [quickAddTaskTitle, setQuickAddTaskTitle] = useState('');
  const [editingColumnId, setEditingColumnId] = useState<string | null>(null);
  const [editingColumnName, setEditingColumnName] = useState('');
  const [currentTab, setCurrentTab] = useState('board');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const { data: project, isLoading: projectLoading } = useQuery({
    queryKey: ['project', id],
    queryFn: () => projectService.getProject(id),
  });

  const { data: boards, isLoading: boardsLoading } = useQuery({
    queryKey: ['project-boards', id],
    queryFn: () => projectService.getProjectBoards(id),
  });

  const activeBoard = boards?.[0]; // Default to first board for simplicity

  const { data: columnsData, isLoading: columnsLoading } = useQuery({
    queryKey: ['board-columns', activeBoard?.id],
    queryFn: () => projectService.getColumns(activeBoard?.id),
    enabled: !!activeBoard?.id,
  });

  const { data: cardsData, isLoading: cardsLoading } = useQuery({
    queryKey: ['board-cards', activeBoard?.id],
    queryFn: () => projectService.getCards(activeBoard?.id),
    enabled: !!activeBoard?.id,
  });

  const addColumnMutation = useMutation({
    mutationFn: (name: string) => projectService.createColumn(activeBoard?.id, { name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board-columns', activeBoard?.id] });
      columnDialog.onFalse();
      setColumnName('');
      setSelectedColumn(null);
    },
  });

  const updateColumnMutation = useMutation({
    mutationFn: ({ id, name }: { id: string; name: string }) => projectService.updateColumn(id, { name }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board-columns', activeBoard?.id] });
      columnDialog.onFalse();
      setColumnName('');
      setSelectedColumn(null);
    },
  });

  const deleteColumnMutation = useMutation({
    mutationFn: (id: string) => projectService.deleteColumn(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board-columns', activeBoard?.id] });
      confirmDeleteColumn.onFalse();
    },
  });

  const addCardMutation = useMutation({
    mutationFn: ({ columnId, title }: { columnId: string; title: string }) => 
      projectService.createCard(activeBoard?.id, { columnId, title }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board-cards', activeBoard?.id] });
      taskDialog.onFalse();
      setTaskTitle('');
      setTaskDescription('');
      setSelectedCard(null);
    },
  });

  const updateCardMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => projectService.updateCard(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board-cards', activeBoard?.id] });
      taskDrawer.onFalse();
      setTaskTitle('');
      setTaskDescription('');
      setSelectedCard(null);
    },
  });

  const deleteCardMutation = useMutation({
    mutationFn: (id: string) => projectService.deleteCard(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['board-cards', activeBoard?.id] });
      confirmDeleteCard.onFalse();
    },
  });

  if (projectLoading || boardsLoading || columnsLoading) {
    return <ProjectSkeleton />;
  }

  const columns = columnsData || [];
  const cards = cardsData || [];

  const handleAddColumn = async () => {
    if (columnName.trim()) {
      if (selectedColumn) {
        await updateColumnMutation.mutateAsync({ id: selectedColumn.id, name: columnName });
      } else {
        await addColumnMutation.mutateAsync(columnName);
      }
    }
  };

  const handleQuickAddTask = async (columnId: string) => {
    if (quickAddTaskTitle.trim()) {
      await addCardMutation.mutateAsync({ columnId, title: quickAddTaskTitle });
      setQuickAddTaskTitle('');
      setQuickAddTaskColumnId(null);
    }
  };

  const handleRenameColumn = async (columnId: string) => {
    if (editingColumnName.trim()) {
      await updateColumnMutation.mutateAsync({ id: columnId, name: editingColumnName });
      setEditingColumnId(null);
    }
  };

  const handleAddTask = async () => {
    if (taskTitle.trim()) {
      if (selectedCard) {
        await updateCardMutation.mutateAsync({ 
          id: selectedCard.id, 
          data: { title: taskTitle, description: taskDescription, columnId: activeColumnId, priority: taskPriority } 
        });
      } else if (activeColumnId) {
        await addCardMutation.mutateAsync({ columnId: activeColumnId, title: taskTitle, priority: taskPriority });
      }
    }
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, type: 'column' | 'card', data: any) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuType(type);
    setMenuData(data);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleEditColumn = () => {
    setSelectedColumn(menuData);
    setColumnName(menuData.name || menuData.title);
    columnDialog.onTrue();
    handleCloseMenu();
  };

  const handleDeleteColumn = () => {
    confirmDeleteColumn.onTrue();
    handleCloseMenu();
  };

  const handleEditCard = (card: any) => {
    setSelectedCard(card);
    setTaskTitle(card.title || card.name);
    setTaskDescription(card.description || '');
    setTaskPriority(card.priority || '0');
    setActiveColumnId(card.columnId);
    taskDrawer.onTrue();
  };

  const handleDeleteCard = () => {
    confirmDeleteCard.onTrue();
    handleCloseMenu();
  };

  const handleMoveCard = async (cardId: string, newColumnId: string) => {
    const card = cards.find((c: any) => c.id === cardId);
    if (card && card.columnId !== newColumnId) {
      await updateCardMutation.mutateAsync({ 
        id: cardId, 
        data: { ...card, columnId: newColumnId } 
      });
    }
  };

  const onDragStart = (e: React.DragEvent, cardId: string) => {
    e.dataTransfer.setData('cardId', cardId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverColumnId(columnId);
  };

  const onDragLeave = () => {
    setDragOverColumnId(null);
  };

  const onDrop = (e: React.DragEvent, newColumnId: string) => {
    e.preventDefault();
    setDragOverColumnId(null);
    const cardId = e.dataTransfer.getData('cardId');
    if (cardId) {
      handleMoveCard(cardId, newColumnId);
    }
  };

  return (
    <DashboardContent maxWidth={false}>
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>{project?.name || project?.title || 'Project Details'}</Typography>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Iconify icon="solar:clipboard-list-bold" sx={{ color: 'primary.main' }} />
              <Typography variant="subtitle2">{columns.length} Columns</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Iconify icon="solar:checklist-minimalistic-bold" sx={{ color: 'success.main' }} />
              <Typography variant="subtitle2">{cards.length} Tasks</Typography>
            </Stack>
          </Stack>
        </Box>
        
        <Stack direction="row" spacing={1}>
           {currentTab === 'board' && (
             <Button 
               variant="contained" 
               startIcon={<Iconify icon="mingcute:add-line" />}
               onClick={columnDialog.onTrue}
               disabled={addColumnMutation.isPending}
             >
                New Column
             </Button>
           )}
        </Stack>
      </Box>

      <Tabs
        value={currentTab}
        onChange={handleChangeTab}
        sx={{
          mb: 3,
          '& .MuiTab-root': { typography: 'subtitle2', textTransform: 'none' }
        }}
      >
        <Tab 
          value="board" 
          label="Board" 
          icon={<Iconify icon="solar:bill-list-bold" width={20} />} 
          iconPosition="start" 
        />
        <Tab 
          value="dashboard" 
          label="Dashboard" 
          icon={<Iconify icon="solar:chart-square-bold" width={20} />} 
          iconPosition="start" 
        />
      </Tabs>

      {currentTab === 'dashboard' ? (
        <ProjectDashboardView id={id} />
      ) : (
        <Scrollbar sx={{ pb: 3 }}>
        <Stack direction="row" spacing={3} sx={{ minHeight: '70vh', alignItems: 'flex-start' }}>
          {columns.map((column: any) => (
            <Box 
              key={column.id} 
              sx={{ 
                width: 320, 
                flexShrink: 0,
                borderRadius: 2,
                transition: (theme) => theme.transitions.create(['background-color']),
                ...(dragOverColumnId === column.id && {
                  bgcolor: 'action.hover',
                })
              }}
              onDragOver={(e) => onDragOver(e, column.id)}
              onDragLeave={onDragLeave}
              onDrop={(e) => onDrop(e, column.id)}
            >
              <Stack
                direction="row"
                alignItems="center"
                sx={{ mb: 2, p: 1.5, borderRadius: 1.5, bgcolor: 'background.neutral' }}
              >
                {editingColumnId === column.id ? (
                  <TextField
                    autoFocus
                    size="small"
                    value={editingColumnName}
                    onChange={(e) => setEditingColumnName(e.target.value)}
                    onBlur={() => handleRenameColumn(column.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleRenameColumn(column.id);
                      if (e.key === 'Escape') setEditingColumnId(null);
                    }}
                    sx={{ flexGrow: 1 }}
                  />
                ) : (
                  <Typography 
                    variant="subtitle1" 
                    onClick={() => {
                      setEditingColumnId(column.id);
                      setEditingColumnName(column.name || column.title);
                    }}
                    sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
                  >
                    {column.name || column.title}
                  </Typography>
                )}
                <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 1, bgcolor: 'action.selected', mr: 1 }}>
                  {cards.filter((c: any) => c.columnId === column.id).length}
                </Typography>
                <IconButton size="small" onClick={(e) => handleOpenMenu(e, 'column', column)}>
                   <Iconify icon="eva:more-vertical-fill" />
                </IconButton>
              </Stack>

              <Stack spacing={2}>
                {cards
                  .filter((c: any) => c.columnId === column.id)
                  .map((card: any) => (
                    <Card 
                      key={card.id} 
                      draggable
                      onDragStart={(e) => onDragStart(e, card.id)}
                      onClick={() => handleEditCard(card)}
                      sx={{ 
                        p: 2, 
                        cursor: 'grab', 
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        boxShadow: (theme) => theme.customShadows.z1,
                        transition: (theme) => theme.transitions.create(['box-shadow', 'transform', 'border-color']),
                        '&:active': { cursor: 'grabbing', transform: 'rotate(2deg) scale(1.02)' },
                        '&:hover': { 
                          boxShadow: (theme) => theme.customShadows.z16,
                          borderColor: 'primary.main'
                        } 
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                        <Label
                          variant="soft"
                          color={
                            (card.priority === '1' && 'error') ||
                            (card.kanban_state === 'done' && 'success') ||
                            (card.kanban_state === 'blocked' && 'warning') ||
                            'default'
                          }
                        >
                          {card.priority === '1' ? 'High' : 'Normal'}
                        </Label>
                        {card.kanban_state === 'blocked' && (
                          <Label variant="filled" color="error">Blocked</Label>
                        )}
                      </Stack>

                      <Typography variant="subtitle2" sx={{ mb: 1 }}>{card.name || card.title}</Typography>

                      {card.description && (
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: 'text.secondary', 
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            mb: 2 
                          }}
                        >
                          {card.description}
                        </Typography>
                      )}

                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                         <Stack direction="row" spacing={-0.75}>
                            <Avatar 
                              src="/assets/images/avatar/avatar_1.jpg" 
                              sx={{ width: 24, height: 24, border: (theme) => `solid 2px ${theme.palette.background.paper}` }} 
                            />
                         </Stack>

                         <Stack direction="row" alignItems="center" spacing={1.5} sx={{ color: 'text.disabled' }}>
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                               <Iconify icon="solar:calendar-date-bold" width={16} />
                               <Typography variant="caption">
                                 {card.createdAt ? new Date(card.createdAt).toLocaleDateString() : 'N/A'}
                               </Typography>
                            </Stack>
                         </Stack>
                      </Stack>
                    </Card>
                  ))}
                
                {dragOverColumnId === column.id && (
                  <Box 
                    sx={{ 
                      height: 80, 
                      borderRadius: 2, 
                      border: '2px dashed', 
                      borderColor: 'primary.main',
                      bgcolor: (theme) => theme.palette.primary.lighter,
                      opacity: 0.5,
                      mb: 2 
                    }} 
                  />
                )}

                {quickAddTaskColumnId === column.id ? (
                  <Card sx={{ p: 1.5, mb: 2 }}>
                    <TextField
                      autoFocus
                      fullWidth
                      multiline
                      placeholder="Enter task title..."
                      value={quickAddTaskTitle}
                      onChange={(e) => setQuickAddTaskTitle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleQuickAddTask(column.id);
                        }
                        if (e.key === 'Escape') setQuickAddTaskColumnId(null);
                      }}
                      sx={{ 
                        mb: 1.5,
                        '& .MuiInputBase-root': {
                          p: 0,
                          typography: 'subtitle2'
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none'
                        }
                      }}
                    />
                    <Stack direction="row" justifyContent="flex-end" spacing={1}>
                      <Button size="small" color="inherit" onClick={() => setQuickAddTaskColumnId(null)}>Cancel</Button>
                      <Button size="small" variant="contained" onClick={() => handleQuickAddTask(column.id)}>Add</Button>
                    </Stack>
                  </Card>
                ) : (
                  <Button 
                    fullWidth 
                    variant="soft" 
                    color="inherit" 
                    startIcon={<Iconify icon="mingcute:add-line" />}
                    onClick={() => setQuickAddTaskColumnId(column.id)}
                    disabled={addCardMutation.isPending}
                  >
                    Add Task
                  </Button>
                )}
              </Stack>
            </Box>
          ))}

          {columns.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 10, width: '100%', bgcolor: 'background.neutral', borderRadius: 2 }}>
               <Typography variant="h6" color="text.secondary">No columns yet. Start by adding one!</Typography>
            </Box>
          )}
        </Stack>
      </Scrollbar>
      )}

      {/* Shared Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={menuType === 'column' ? handleEditColumn : () => handleEditCard(menuData)}>
          <Iconify icon="solar:pen-bold" sx={{ mr: 1 }} />
          Edit {menuType === 'column' ? 'Column' : 'Task'}
        </MenuItem>

        {menuType === 'card' && (
          <MenuItem disabled>
            <Iconify icon="solar:reorder-bold" sx={{ mr: 1 }} />
            Move to...
          </MenuItem>
        )}
        {menuType === 'card' && columns.map((col: any) => (
          <MenuItem 
            key={col.id} 
            onClick={() => {
              handleMoveCard(menuData.id, col.id);
              handleCloseMenu();
            }}
            selected={menuData?.columnId === col.id}
            sx={{ pl: 4, typography: 'caption' }}
          >
            {col.name || col.title}
          </MenuItem>
        ))}

        <MenuItem onClick={menuType === 'column' ? handleDeleteColumn : handleDeleteCard} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 1 }} />
          Delete {menuType === 'column' ? 'Column' : 'Task'}
        </MenuItem>
      </Menu>

      {/* Confirm Delete Column */}
      <ConfirmDialog
        open={confirmDeleteColumn.value}
        onClose={confirmDeleteColumn.onFalse}
        title="Delete Column"
        content="Are you sure you want to delete this column and all its tasks? This action cannot be undone."
        action={
          <Button 
            variant="contained" 
            color="error" 
            onClick={() => deleteColumnMutation.mutate(menuData.id)}
            disabled={deleteColumnMutation.isPending}
          >
            Delete
          </Button>
        }
      />

      {/* Confirm Delete Card */}
      <ConfirmDialog
        open={confirmDeleteCard.value}
        onClose={confirmDeleteCard.onFalse}
        title="Delete Task"
        content="Are you sure you want to delete this task?"
        action={
          <Button 
            variant="contained" 
            color="error" 
            onClick={() => deleteCardMutation.mutate(menuData.id)}
            disabled={deleteCardMutation.isPending}
          >
            Delete
          </Button>
        }
      />

      {/* Column Dialog */}
      <Dialog open={columnDialog.value} onClose={columnDialog.onFalse} fullWidth maxWidth="xs">
        <DialogTitle>{selectedColumn ? 'Edit Column' : 'New Column'}</DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <TextField
            autoFocus
            fullWidth
            label="Column Name"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="inherit" onClick={columnDialog.onFalse}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={handleAddColumn} 
            disabled={!columnName.trim() || addColumnMutation.isPending || updateColumnMutation.isPending}
          >
             {addColumnMutation.isPending || updateColumnMutation.isPending ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Task Detail Drawer */}
      <TaskDetailDrawer
        open={taskDrawer.value}
        onClose={taskDrawer.onFalse}
        task={selectedCard}
        columns={columns}
        onUpdate={async (data) => {
          await updateCardMutation.mutateAsync({ id: selectedCard.id, data });
        }}
        onDelete={() => {
          confirmDeleteCard.onTrue();
          taskDrawer.onFalse();
        }}
      />
    </DashboardContent>
  );
}

function ProjectSkeleton() {
  return (
    <DashboardContent maxWidth={false}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
        <Box><Skeleton variant="text" width={300} height={40} /><Skeleton variant="text" width={200} /></Box>
        <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: 1 }} />
      </Stack>
      <Skeleton variant="rectangular" height={48} sx={{ mb: 3 }} />
      <Stack direction="row" spacing={3} sx={{ minHeight: '70vh' }}>
        {[...Array(4)].map((_, i) => (
          <Box key={i} sx={{ width: 320, flexShrink: 0 }}>
            <Skeleton variant="rectangular" height={50} sx={{ borderRadius: 1.5, mb: 2 }} />
            <Stack spacing={2}>
              {[...Array(3)].map((_, j) => (
                <Skeleton key={j} variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </DashboardContent>
  );
}
