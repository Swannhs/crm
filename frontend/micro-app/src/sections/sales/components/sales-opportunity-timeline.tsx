import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import axios from 'src/utils/axios';
import { fDateTime } from 'src/utils/format-time';
import { getOpportunityTimeline } from 'src/services/sales-dashboard-service';

import { Iconify } from 'src/components/iconify';

export function SalesOpportunityTimeline({ opportunityId }: { opportunityId: string | number }) {
  const { data: timeline, isLoading, refetch } = useQuery({
    queryKey: ['opportunity-timeline', opportunityId],
    queryFn: () => getOpportunityTimeline(opportunityId),
  });

  const [note, setNote] = useState('');
  const createNoteMutation = useMutation({
    mutationFn: (body: string) => axios.post(`/api/sales-dashboard/opportunities/${opportunityId}/notes`, { body }),
    onSuccess: () => {
      setNote('');
      refetch();
    },
  });

  const deleteActivityMutation = useMutation({
    mutationFn: (id: string | number) => axios.delete(`/api/sales-dashboard/activities/${id}`),
    onSuccess: () => refetch(),
  });

  if (isLoading && !timeline) {
    return (
      <Stack spacing={2} sx={{ p: 2 }}>
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} variant="rectangular" height={80} sx={{ borderRadius: 1.5 }} />
        ))}
      </Stack>
    );
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {isLoading && <LinearProgress sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2 }} />}
      
      <Box sx={{ p: 2, pb: 0 }}>
        <TextField
          fullWidth
          multiline
          rows={2}
          placeholder="Write a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton 
                color="primary" 
                disabled={!note || createNoteMutation.isPending}
                onClick={() => createNoteMutation.mutate(note)}
              >
                <Iconify icon="solar:send-bold" />
              </IconButton>
            ),
          }}
        />
      </Box>

      {!timeline?.length ? (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">No interaction history yet.</Typography>
        </Box>
      ) : (
        <Timeline sx={{ p: 2, m: 0 }}>
          {timeline.map((item: any, index: number) => (
            <TimelineItem key={item.id} sx={{ '&:before': { display: 'none' } }}>
              <TimelineSeparator>
                <TimelineDot color={item.type === 'message' ? 'primary' : item.state === 'overdue' ? 'error' : 'warning'}>
                  <Iconify icon={item.type === 'message' ? 'solar:chat-round-dots-bold' : 'solar:calendar-bold'} width={16} />
                </TimelineDot>
                {index < timeline.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              
              <TimelineContent sx={{ pb: 3 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                      By {item.author}
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                      {fDateTime(item.date)}
                    </Typography>
                    {item.type === 'activity' && (
                      <IconButton 
                        size="small" 
                        color="error" 
                        disabled={deleteActivityMutation.isPending}
                        onClick={() => deleteActivityMutation.mutate(item.id)}
                      >
                        <Iconify icon="solar:trash-bin-trash-bold" width={14} />
                      </IconButton>
                    )}
                  </Stack>
                </Stack>
                
                <Box 
                  sx={{ 
                    p: 1.5, 
                    borderRadius: 1, 
                    bgcolor: 'background.neutral',
                    '& p': { m: 0, fontSize: '0.8125rem' }
                  }}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Box>
  );
}
