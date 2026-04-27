'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { paths } from 'src/routes/paths';
import { projectService } from 'src/services/project-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

type Props = {
  boardId?: string;
  workspaceId?: string;
  mode?: 'tasks' | 'share-board';
};

export function ProjectWorkspaceView({ boardId, workspaceId, mode = 'tasks' }: Props) {
  const tasksQuery = useQuery({
    queryKey: ['project-tasks'],
    queryFn: () => projectService.getTasks(),
    enabled: mode === 'tasks',
  });

  const boardQuery = useQuery({
    queryKey: ['shared-board', boardId],
    queryFn: () => projectService.getBoard(boardId!),
    enabled: Boolean(boardId),
  });

  const columnsQuery = useQuery({
    queryKey: ['shared-board-columns', boardId],
    queryFn: () => projectService.getColumns(boardId!),
    enabled: Boolean(boardId),
  });

  const cardsQuery = useQuery({
    queryKey: ['shared-board-cards', boardId],
    queryFn: () => projectService.getCards(boardId!),
    enabled: Boolean(boardId),
  });

  if (tasksQuery.isLoading || boardQuery.isLoading || columnsQuery.isLoading || cardsQuery.isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <FeatureRouteShell
      title={mode === 'share-board' ? 'Shared Board' : 'Project Tasks'}
      description="Legacy project task and shared board routes mapped into the micro-app with real board/task data."
      links={[
        { href: paths.dashboard.projects, label: 'Projects' },
        { href: paths.dashboard.projectTasks, label: 'Tasks' },
      ]}
    >
      <Card sx={{ p: 3 }}>
        <Stack spacing={2}>
          {mode === 'share-board' ? (
            <>
              <Typography variant="h6">
                {boardQuery.data?.name || boardQuery.data?.title || `Board ${boardId}`}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Workspace: {workspaceId}
              </Typography>
              {(columnsQuery.data || []).map((column: any) => (
                <Box key={column.id || column._id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                  <Typography variant="subtitle2">{column.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {(cardsQuery.data || []).filter((card: any) => card.columnId === (column.id || column._id)).length} cards
                  </Typography>
                </Box>
              ))}
            </>
          ) : (
            (tasksQuery.data || []).map((task: any) => (
              <Box key={task.id || task._id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Typography variant="subtitle2">{task.title || task.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {task.status || 'Open'}
                </Typography>
              </Box>
            ))
          )}
        </Stack>
      </Card>
    </FeatureRouteShell>
  );
}
