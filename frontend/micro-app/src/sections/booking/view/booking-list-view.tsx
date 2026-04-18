'use client';

import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { bookingService } from 'src/services/booking-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function BookingListView() {
  const { data: bookingTypes, isLoading } = useQuery({
    queryKey: ['booking-types'],
    queryFn: () => bookingService.getBookingTypes(),
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Bookings & Appointments</Typography>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New Booking Type
        </Button>
      </Box>

      <Grid container spacing={3}>
        {(bookingTypes || []).map((type: any) => (
          <Grid item xs={12} sm={6} md={4} key={type.id}>
            <Card sx={{ p: 3 }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ width: 12, height: 40, borderRadius: 1, bgcolor: type.color || 'primary.main' }} />
                <Box>
                  <Typography variant="subtitle1">{type.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {type.duration_minutes} mins • {type.meeting_type}
                  </Typography>
                </Box>
              </Stack>
              
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                {type.description || 'No description provided.'}
              </Typography>

              <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

              <Stack direction="row" spacing={1} justifyContent="flex-end">
                <Button variant="soft" color="info" size="small" startIcon={<Iconify icon="eva:link-2-fill" />}>
                  Copy Link
                </Button>
                <Button variant="soft" size="small" startIcon={<Iconify icon="eva:edit-fill" />}>
                  Edit
                </Button>
              </Stack>
            </Card>
          </Grid>
        ))}

        {bookingTypes?.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10, width: '100%' }}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              No booking types found.
            </Typography>
          </Box>
        )}
      </Grid>
    </DashboardContent>
  );
}
