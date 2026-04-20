'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { projectService } from 'src/services/project-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { Scrollbar } from 'src/components/scrollbar';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

interface Props {
  id: string;
}

export function ProjectDetailsView({ id }: Props) {
  const queryClient = useQueryClient();

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

  if (projectLoading || boardsLoading || columnsLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const columns = columnsData || [];
  const cards = cardsData || [];

  const addColumnMutation = useMutation({
    mutationFn: (name: string) => projectService.createColumn(activeBoard?.id, { name }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['board-columns', activeBoard?.id] }),
  });

  const addCardMutation = useMutation({
    mutationFn: ({ columnId, title }: { columnId: string; title: string }) => 
      projectService.createCard(activeBoard?.id, { columnId, title }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['board-cards', activeBoard?.id] }),
  });

  const handleAddColumn = async () => {
    const name = window.prompt('Enter column name:');
    if (name) {
      await addColumnMutation.mutateAsync(name);
    }
  };

  const handleAddTask = async (columnId: string) => {
    const title = window.prompt('Enter task title:');
    if (title) {
      await addCardMutation.mutateAsync({ columnId, title });
    }
  };

  return (
    <DashboardContent maxWidth={false}>
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h4">{project?.name || project?.title || 'Project Details'}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {project?.description || 'Manage your tasks and workflow efficiently.'}
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleAddColumn}
          disabled={addColumnMutation.isPending}
        >
           {addColumnMutation.isPending ? 'Adding...' : 'New Column'}
        </Button>
      </Box>

      <Scrollbar sx={{ pb: 3 }}>
        <Stack direction="row" spacing={3} sx={{ minHeight: '70vh', alignItems: 'flex-start' }}>
          {columns.map((column: any) => (
            <Box key={column.id} sx={{ width: 320, flexShrink: 0 }}>
              <Stack
                direction="row"
                alignItems="center"
                sx={{ mb: 2, p: 1.5, borderRadius: 1.5, bgcolor: 'background.neutral' }}
              >
                <Typography variant="subtitle1" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                  {column.name || column.title}
                </Typography>
                <Typography variant="caption" sx={{ px: 1, py: 0.5, borderRadius: 1, bgcolor: 'action.selected' }}>
                  {cards.filter((c: any) => c.columnId === column.id).length}
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {cards
                  .filter((c: any) => c.columnId === column.id)
                  .map((card: any) => (
                    <Card key={card.id} sx={{ p: 2, cursor: 'pointer', '&:hover': { boxShadow: (theme) => theme.customShadows.z12 } }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>{card.title}</Typography>
                      {card.description && (
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                          {card.description}
                        </Typography>
                      )}
                      <Stack direction="row" alignItems="center" justifyContent="space-between">
                         <Iconify icon="solar:chat-round-line-bold" sx={{ color: 'text.disabled', width: 16 }} />
                         <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                             {new Date(card.createdAt).toLocaleDateString()}
                         </Typography>
                      </Stack>
                    </Card>
                  ))}
                
                <Button 
                  fullWidth 
                  variant="soft" 
                  color="inherit" 
                  startIcon={<Iconify icon="mingcute:add-line" />}
                  onClick={() => handleAddTask(column.id)}
                  disabled={addCardMutation.isPending}
                >
                   Add Task
                </Button>
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
    </DashboardContent>
  );
}
