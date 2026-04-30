'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';
import { showToast } from 'src/components/toast';

import { useMarketingSegments, useCreateSegment, useDeleteSegment, useUpdateSegment } from '../hooks/use-marketing';
import { MarketingSegmentForm } from '../components/marketing-segment-form';
import { MarketingSegment } from '../types';

// ----------------------------------------------------------------------

export function MarketingSegmentsView() {
  const { data, isLoading } = useMarketingSegments();
  const createSegment = useCreateSegment();
  const updateSegment = useUpdateSegment();
  const deleteSegment = useDeleteSegment();
  
  const [open, setOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<MarketingSegment | undefined>();

  const segments = Array.isArray(data) ? data : [];

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedSegment(undefined);
  };

  const onSubmit = async (formData: any) => {
    try {
      if (selectedSegment) {
        await (updateSegment as any).mutateAsync({ id: selectedSegment.id, data: formData });
        showToast({ severity: 'success', message: 'Segment updated successfully' });
      } else {
        await createSegment.mutateAsync(formData);
        showToast({ severity: 'success', message: 'Segment created successfully' });
      }
      handleClose();
    } catch (error) {
      showToast({ severity: 'error', message: `Failed to ${selectedSegment ? 'update' : 'create'} segment` });
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this segment?')) return;
    try {
      await deleteSegment.mutateAsync(id);
      showToast({ severity: 'success', message: 'Segment deleted successfully' });
    } catch (error) {
      showToast({ severity: 'error', message: 'Failed to delete segment' });
    }
  };

  return (
    <DashboardContent maxWidth="xl">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Segments
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Define targeted audiences based on filters and behaviors.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleOpen}
        >
          Create Segment
        </Button>
      </Stack>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Segment Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Contacts</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {segments.map((segment) => (
                <TableRow key={segment.id} hover>
                  <TableCell>
                    <Typography variant="subtitle2">{segment.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {segment.description || 'No description'}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Label variant="soft" color={segment.type === 'dynamic' ? 'info' : 'default'}>
                      {segment.type}
                    </Label>
                  </TableCell>

                  <TableCell>{segment.contactCount}</TableCell>

                  <TableCell align="right">
                    <IconButton onClick={() => { setSelectedSegment(segment); setOpen(true); }}>
                      <Iconify icon="solar:pen-bold" />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(segment.id)}>
                      <Iconify icon="solar:trash-bin-trash-bold" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {segments.length === 0 && !isLoading && (
                <TableRow>
                  <TableCell colSpan={4} sx={{ textAlign: 'center', py: 10 }}>
                    <Typography variant="h6" gutterBottom>
                      No segments found
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Start by creating a segment to target your audience.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ pb: 2 }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'primary.soft',
                color: 'primary.main',
              }}
            >
              <Iconify icon="solar:users-group-rounded-bold-duotone" width={24} />
            </Box>
            <Box>
              <Typography variant="h6">{selectedSegment ? 'Edit Segment' : 'Create New Segment'}</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {selectedSegment ? 'Modify your existing audience group.' : 'Define a new audience for your campaigns.'}
              </Typography>
            </Box>
          </Stack>
        </DialogTitle>
        
        <DialogContent sx={{ pb: 3 }}>
          <MarketingSegmentForm 
            segment={selectedSegment} 
            onSubmit={onSubmit} 
            onCancel={handleClose} 
          />
        </DialogContent>
      </Dialog>
    </DashboardContent>
  );
}
