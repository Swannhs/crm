'use client';

import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { bookingService } from 'src/services/booking-service';
import { calendarService } from 'src/services/calendar-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';

// ----------------------------------------------------------------------

type Props = {
  tab?: string;
  eventId?: string;
  bookingLink?: string;
  publicMode?: 'booking' | 'landing';
};

export function CalendarWorkspaceView({ tab, eventId, bookingLink, publicMode }: Props) {
  const eventsQuery = useQuery({
    queryKey: ['calendar-events'],
    queryFn: () => calendarService.getEvents(),
    enabled: !bookingLink,
  });

  const bookingTypesQuery = useQuery({
    queryKey: ['booking-types'],
    queryFn: () => bookingService.getBookingTypes(),
  });

  const bookingTypeQuery = useQuery({
    queryKey: ['booking-type', bookingLink],
    queryFn: () => bookingService.getBookingTypeByLink(bookingLink!),
    enabled: Boolean(bookingLink),
  });

  const title = publicMode
    ? publicMode === 'booking'
      ? 'Public Booking Preview'
      : 'Booking Landing Page'
    : eventId
      ? 'Event Workflow'
      : 'Calendar and Booking';

  const links = [
    { href: paths.dashboard.calendar, label: 'Calendar' },
    { href: paths.dashboard.calendarTab('checkin'), label: 'Check-In' },
    { href: paths.dashboard.events, label: 'Events' },
    { href: paths.public.booking(bookingLink || 'demo-link'), label: 'Public Booking' },
  ];

  if (eventsQuery.isLoading && !bookingLink) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <FeatureRouteShell
      title={title}
      description="Legacy calendar, events, booking preview, landing, and check-in flows mapped into the new route tree."
      links={links}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={bookingLink ? 12 : 7}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {bookingLink ? 'Booking Type Detail' : eventId ? 'Event Detail' : `Calendar ${tab || 'overview'}`}
            </Typography>

            {bookingLink ? (
              <Stack spacing={2}>
                <Typography variant="subtitle2">
                  {bookingTypeQuery.data?.title || bookingTypeQuery.data?.name || bookingLink}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {bookingTypeQuery.data?.description || 'This public booking route now resolves through the micro-app and booking service client.'}
                </Typography>
              </Stack>
            ) : (
              <Stack spacing={2}>
                {(eventsQuery.data?.data || eventsQuery.data || []).map((event: any) => (
                  <Box key={event.id || event._id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                    <Typography variant="subtitle2">{event.title || event.name || 'Untitled event'}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {event.start ? new Date(event.start).toLocaleString() : 'Schedule unavailable'}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            )}
          </Card>
        </Grid>

        {!bookingLink && (
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Booking Types
              </Typography>
              <Stack spacing={2}>
                {(bookingTypesQuery.data || []).map((bookingType: any) => (
                  <Box key={bookingType.id || bookingType._id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                    <Typography variant="subtitle2">{bookingType.title || bookingType.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Link: {bookingType.link || bookingType.slug || 'n/a'}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
        )}
      </Grid>
    </FeatureRouteShell>
  );
}
