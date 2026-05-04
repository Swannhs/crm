import dayjs from 'dayjs';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z as zod } from 'zod';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { Iconify } from 'src/components/iconify';

import { fTimestamp } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export const EventSchema = zod.object({
  title: zod.string().min(1, 'Title is required'),
  description: zod.string().optional(),
  start: zod.any(),
  end: zod.any(),
  color: zod.string().optional(),
});

type Props = {
  event?: any;
  onClose: () => void;
  onDelete?: (id: string) => void;
  onCreate: (data: any) => void;
  onUpdate: (id: string, data: any) => void;
};

export default function CalendarForm({ event, onClose, onDelete, onCreate, onUpdate }: Props) {
  const defaultValues = {
    title: event?.title || '',
    description: event?.description || '',
    start: dayjs(event?.start || new Date()),
    end: dayjs(event?.end || new Date()),
    color: event?.color || '#00A76F',
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(EventSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const payload = {
        ...data,
        start: new Date(data.start).toISOString(),
        end: new Date(data.end).toISOString(),
      };

      if (event?.id) {
        onUpdate(event.id, payload);
      } else {
        onCreate(payload);
      }
      onClose();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <DialogTitle>{event?.id ? 'Edit Event' : 'Add Event'}</DialogTitle>

      <DialogContent sx={{ py: 3 }}>
        <Stack spacing={3}>
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                label="Title"
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                rows={3}
                label="Description"
              />
            )}
          />

          <Controller
            name="start"
            control={control}
            render={({ field }) => (
              <MobileDateTimePicker
                {...field}
                label="Start date"
                format="DD/MM/YYYY hh:mm a"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <Iconify icon="solar:calendar-bold" />
                        </InputAdornment>
                      ),
                    },
                  },
                  layout: {
                    sx: {
                      '& .MuiDateCalendar-root': {
                        width: 360,
                        height: 360,
                      },
                      '& .MuiPickersLayout-root': {
                        minWidth: 360,
                      },
                    },
                  },
                }}
              />
            )}
          />

          <Controller
            name="end"
            control={control}
            render={({ field }) => (
              <MobileDateTimePicker
                {...field}
                label="End date"
                format="dd/MM/yyyy hh:mm a"
                slotProps={{
                  textField: {
                    fullWidth: true,
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <Iconify icon="solar:calendar-bold" />
                        </InputAdornment>
                      ),
                    },
                  },
                  layout: {
                    sx: {
                      '& .MuiDateCalendar-root': {
                        width: 360,
                        height: 360,
                      },
                      '& .MuiPickersLayout-root': {
                        minWidth: 360,
                      },
                    },
                  },
                }}
              />
            )}
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        {event?.id && (
          <Button variant="outlined" color="error" onClick={() => onDelete?.(event.id)}>
            Delete
          </Button>
        )}

        <Box sx={{ flexGrow: 1 }} />

        <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button>

        <LoadingButton variant="contained" onClick={onSubmit} loading={isSubmitting}>
          {event?.id ? 'Update' : 'Add'}
        </LoadingButton>
      </DialogActions>
    </>
  );
}
