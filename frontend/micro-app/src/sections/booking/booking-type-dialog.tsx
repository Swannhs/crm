import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { LoadingButton } from '@mui/lab';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { bookingService } from 'src/services/booking-service';

import { showToast } from 'src/components/toast';

// ----------------------------------------------------------------------

const SCHEMA = zod.object({
  title: zod.string().min(1, 'Title is required'),
  description: zod.string().optional(),
  durationMinutes: zod.coerce.number().min(1),
  bufferMinutes: zod.coerce.number().min(0),
  color: zod.string().optional(),
});

type FormValues = zod.infer<typeof SCHEMA>;

interface Props {
  open: boolean;
  onClose: () => void;
  bookingType?: any;
}

export function BookingTypeDialog({ open, onClose, bookingType }: Props) {
  const queryClient = useQueryClient();

  const methods = useForm<FormValues>({
    resolver: zodResolver(SCHEMA),
    defaultValues: {
      title: bookingType?.title || '',
      description: bookingType?.description || '',
      durationMinutes: bookingType?.durationMinutes || 30,
      bufferMinutes: bookingType?.bufferMinutes || 0,
      color: bookingType?.color || '#2196f3',
    },
  });

  const { register, handleSubmit, formState: { isSubmitting, errors } } = methods;

  const mutation = useMutation({
    mutationFn: (data: FormValues) => 
      bookingType 
        ? bookingService.updateBookingType(bookingType.id, data) 
        : bookingService.createBookingType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['booking-types'] });
      showToast({ message: bookingType ? 'Booking type updated' : 'Booking type created' });
      onClose();
    },
    onError: (err: any) => {
      showToast({ message: err.message, severity: 'error' });
    }
  });

  const onSubmit = handleSubmit((data) => mutation.mutate(data));

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{bookingType ? 'Edit Booking Type' : 'New Booking Type'}</DialogTitle>
      
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 2 }}>
          <TextField
            {...register('title')}
            label="Title"
            fullWidth
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            {...register('description')}
            label="Description"
            fullWidth
            multiline
            rows={3}
          />

          <Stack direction="row" spacing={2}>
            <TextField
              {...register('durationMinutes')}
              label="Duration (mins)"
              type="number"
              fullWidth
            />
            <TextField
              {...register('bufferMinutes')}
              label="Buffer (mins)"
              type="number"
              fullWidth
            />
          </Stack>

          <TextField
            {...register('color')}
            label="Color"
            select
            fullWidth
          >
            {[
              { label: 'Blue', value: '#2196f3' },
              { label: 'Green', value: '#4caf50' },
              { label: 'Red', value: '#f44336' },
              { label: 'Orange', value: '#ff9800' },
              { label: 'Purple', value: '#9c27b0' },
            ].map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: option.value }} />
                  <Typography>{option.label}</Typography>
                </Stack>
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <LoadingButton variant="contained" loading={isSubmitting} onClick={onSubmit}>
          {bookingType ? 'Update' : 'Create'}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
