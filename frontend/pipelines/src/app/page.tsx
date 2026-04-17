'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  CircularProgress,
  Stack,
  Chip,
  Card,
  CardContent,
  Tooltip
} from "@mui/material";
import { 
  Plus, 
  MoreVertical, 
  Search, 
  Filter,
  GripVertical,
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { pipelineService } from "@/services/pipeline.service";

export default function PipelinesPage() {
  const queryClient = useQueryClient();
  const [activePipelineId, setActivePipelineId] = useState<string | null>(null);

  const { data: pipelinesData, isLoading: isLoadingPipelines } = useQuery({
    queryKey: ['pipelines'],
    queryFn: () => pipelineService.getPipelines(),
  });

  const currentPipelineId = activePipelineId || (pipelinesData?.data?.[0]?.id);

  const { data: pipelineViewData, isLoading: isLoadingView } = useQuery({
    queryKey: ['pipeline-view', currentPipelineId],
    queryFn: () => pipelineService.getPipelineView(currentPipelineId!),
    enabled: !!currentPipelineId,
  });

  const moveMutation = useMutation({
    mutationFn: ({ contactId, stageId }: { contactId: string, stageId: string }) => 
      pipelineService.moveContact(contactId, stageId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pipeline-view'] });
    }
  });

  const stages = pipelineViewData?.data?.stages || [];

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    moveMutation.mutate({
      contactId: draggableId,
      stageId: destination.droppableId
    });
  };

  if (isLoadingPipelines) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <CircularProgress />
    </Box>
  );

  return (
    <Box sx={{ p: 4, height: 'calc(100vh - 64px)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Sales Pipeline
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manage your leads and track progress through stages.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>
            New Stage
          </Button>
          <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>
            Add Lead
          </Button>
        </Stack>
      </Box>

      {isLoadingView ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 10 }}>
          <CircularProgress size={30} />
        </Box>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            flexGrow: 1, 
            overflowX: 'auto', 
            pb: 2,
            '&::-webkit-scrollbar': { height: 8 },
            '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0,0,0,0.1)', borderRadius: 4 }
          }}>
            {stages.map((stage: any) => (
              <Box key={stage.id} sx={{ minWidth: 320, width: 320, display: 'flex', flexDirection: 'column' }}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 2, 
                    mb: 2, 
                    bgcolor: 'rgba(0,0,0,0.02)', 
                    borderRadius: 3, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{stage.name}</Typography>
                    <Chip label={stage.contacts?.length || 0} size="small" sx={{ height: 20, fontSize: 10, fontWeight: 800, bgcolor: 'background.paper' }} />
                  </Box>
                  <IconButton size="small"><MoreVertical size={18} /></IconButton>
                </Paper>

                <Droppable droppableId={stage.id}>
                  {(provided) => (
                    <Box 
                      {...provided.droppableProps} 
                      ref={provided.innerRef}
                      sx={{ 
                        flexGrow: 1, 
                        bgcolor: 'rgba(0,0,0,0.01)', 
                        borderRadius: 4, 
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        minHeight: 100
                      }}
                    >
                      {stage.contacts?.map((contact: any, index: number) => (
                        <Draggable key={contact.id} draggableId={contact.id} index={index}>
                          {(provided) => (
                            <Card 
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              elevation={0}
                              sx={{ 
                                borderRadius: 3, 
                                border: '1px solid', 
                                borderColor: 'divider',
                                '&:hover': { borderColor: 'primary.main', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }
                              }}
                            >
                              <CardContent sx={{ p: '16px !important' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                   <Avatar sx={{ width: 32, height: 32, fontSize: 12, bgcolor: 'primary.light', fontWeight: 800 }}>
                                      {contact.name?.[0].toUpperCase()}
                                   </Avatar>
                                   <IconButton size="small"><GripVertical size={16} color="#cbd5e1" /></IconButton>
                                </Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1 }}>{contact.name}</Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                                   Last contact: {new Date(contact.updated_at).toLocaleDateString()}
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                   <Tooltip title={contact.email}><IconButton size="small" sx={{ bgcolor: 'rgba(0,0,0,0.03)' }}><Mail size={14} /></IconButton></Tooltip>
                                   <Tooltip title="Schedule Follow-up"><IconButton size="small" sx={{ bgcolor: 'rgba(0,0,0,0.03)' }}><Calendar size={14} /></IconButton></Tooltip>
                                </Stack>
                              </CardContent>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                      <Button 
                        fullWidth 
                        variant="text" 
                        startIcon={<Plus size={16} />} 
                        sx={{ py: 1.5, borderRadius: 3, color: 'text.secondary', border: '1px dashed', borderColor: 'divider' }}
                      >
                        Add Task
                      </Button>
                    </Box>
                  )}
                </Droppable>
              </Box>
            ))}
          </Box>
        </DragDropContext>
      )}
    </Box>
  );
}
