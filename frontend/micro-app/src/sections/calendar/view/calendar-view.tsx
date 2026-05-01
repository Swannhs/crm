'use client';

import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { calendarService, CalendarUnavailableError } from 'src/services/calendar-service';

import { CalendarEmptyState, CalendarErrorState, CalendarUnavailableState } from '../components/calendar-states';

const TABS = ['calendar', 'agenda', 'team', 'availability', 'booking_links', 'reminders', 'settings'] as const;
type TabType = (typeof TABS)[number];

const formatDateTime = (value?: string) => {
  if (!value) return 'Unavailable';
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? 'Unavailable' : d.toLocaleString();
};

export function CalendarView() {
  const [tab, setTab] = useState<TabType>('calendar');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    startAt: '',
    endAt: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    type: 'meeting',
    location: '',
  });
  const queryClient = useQueryClient();

  const summaryQuery = useQuery({ queryKey: ['calendar-summary'], queryFn: () => calendarService.getCalendarSummary() });
  const eventsQuery = useQuery({ queryKey: ['calendar-events'], queryFn: () => calendarService.getEvents({ page: 1, pageSize: 300 }) });
  const bookingLinksQuery = useQuery({ queryKey: ['calendar-booking-links'], queryFn: () => calendarService.getBookingLinks(), enabled: tab === 'booking_links' });
  const availabilityQuery = useQuery({ queryKey: ['calendar-availability'], queryFn: () => calendarService.getAvailability(), enabled: tab === 'availability' });
  const remindersQuery = useQuery({ queryKey: ['calendar-reminders'], queryFn: () => calendarService.getReminders(), enabled: tab === 'reminders' });
  const settingsQuery = useQuery({ queryKey: ['calendar-settings'], queryFn: () => calendarService.getCalendarSettings(), enabled: tab === 'settings' });

  const createEventMutation = useMutation({
    mutationFn: (payload: any) => calendarService.createEvent(payload),
    onSuccess: async () => {
      setOpenDialog(false);
      setEventForm({ title: '', description: '', startAt: '', endAt: '', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '', type: 'meeting', location: '' });
      await queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
      await queryClient.invalidateQueries({ queryKey: ['calendar-summary'] });
    },
  });

  const updateEventMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) => calendarService.updateEvent(id, payload),
    onSuccess: async () => {
      setOpenDialog(false);
      setEditingEventId(null);
      await queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
    },
  });

  const deleteEventMutation = useMutation({
    mutationFn: (id: string) => calendarService.deleteEvent(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
      await queryClient.invalidateQueries({ queryKey: ['calendar-summary'] });
    },
  });

  const cancelEventMutation = useMutation({
    mutationFn: (id: string) => calendarService.cancelEvent(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
      await queryClient.invalidateQueries({ queryKey: ['calendar-summary'] });
    },
  });

  const completeEventMutation = useMutation({
    mutationFn: (id: string) => calendarService.completeEvent(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['calendar-events'] });
      await queryClient.invalidateQueries({ queryKey: ['calendar-summary'] });
    },
  });

  const rows = useMemo(() => eventsQuery.data?.data || [], [eventsQuery.data]);
  const now = Date.now();
  const todayRows = rows.filter((event) => {
    const start = new Date(event.startAt).getTime();
    if (!Number.isFinite(start)) return false;
    const day = new Date(start);
    const today = new Date();
    return day.toDateString() === today.toDateString();
  });
  const weekRows = rows.filter((event) => {
    const start = new Date(event.startAt).getTime();
    return Number.isFinite(start) && start >= now && start <= now + 7 * 24 * 60 * 60 * 1000;
  });

  const unavailable = (title: string, description: string) => (
    <CalendarUnavailableState title={title} description={description} />
  );

  const openCreate = () => {
    setEditingEventId(null);
    setEventForm({ title: '', description: '', startAt: '', endAt: '', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '', type: 'meeting', location: '' });
    setOpenDialog(true);
  };

  const openEdit = (event: any) => {
    setEditingEventId(event.id);
    setEventForm({
      title: event.title || '',
      description: event.description || '',
      startAt: event.startAt ? event.startAt.slice(0, 16) : '',
      endAt: event.endAt ? event.endAt.slice(0, 16) : '',
      timezone: event.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      type: event.type || 'meeting',
      location: event.location || '',
    });
    setOpenDialog(true);
  };

  const submitEvent = async () => {
    if (!eventForm.title.trim() || !eventForm.startAt || !eventForm.endAt || !eventForm.timezone) return;
    const payload = {
      title: eventForm.title.trim(),
      description: eventForm.description || undefined,
      startAt: new Date(eventForm.startAt).toISOString(),
      endAt: new Date(eventForm.endAt).toISOString(),
      timezone: eventForm.timezone,
      type: eventForm.type,
      location: eventForm.location || undefined,
    };
    if (editingEventId) {
      await updateEventMutation.mutateAsync({ id: editingEventId, payload });
      return;
    }
    await createEventMutation.mutateAsync(payload);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" spacing={1.5} sx={{ mb: 2.5 }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 0.5 }}>Calendar</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Business scheduling, availability, booking links, and reminders.
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          onClick={openCreate}
          sx={{ px: 1.75, py: 0.625, alignSelf: { xs: 'flex-start', md: 'center' }, minHeight: 34 }}
        >
          New Event
        </Button>
      </Stack>

      <Card sx={{ mb: 2, p: 1.5 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
          <Chip size="small" variant="outlined" label={`Total: ${summaryQuery.data?.totalEvents ?? 'Unavailable'}`} />
          <Chip size="small" variant="outlined" label={`Upcoming: ${summaryQuery.data?.upcomingEvents ?? 'Unavailable'}`} />
          <Chip size="small" variant="outlined" label={`Cancelled: ${summaryQuery.data?.cancelledEvents ?? 'Unavailable'}`} />
        </Stack>
      </Card>

      <Card sx={{ mb: 3 }}>
        <Tabs value={tab} onChange={(_, value) => setTab(value)} variant="scrollable" scrollButtons="auto">
          <Tab value="calendar" label="Calendar" />
          <Tab value="agenda" label="Agenda" />
          <Tab value="team" label="Team" />
          <Tab value="availability" label="Availability" />
          <Tab value="booking_links" label="Booking Links" />
          <Tab value="reminders" label="Reminders" />
          <Tab value="settings" label="Settings" />
        </Tabs>
      </Card>

      {tab === 'calendar' && (
        <Card sx={{ p: 2.5 }}>
          {eventsQuery.isLoading && <CircularProgress />}
          {eventsQuery.isError && <CalendarErrorState title="Calendar unavailable" description="Unable to load events." />}
          {!eventsQuery.isLoading && !eventsQuery.isError && rows.length === 0 && (
            <CalendarEmptyState title="No events yet" description="Create your first event to populate this calendar." />
          )}
          {!eventsQuery.isLoading && !eventsQuery.isError && rows.length > 0 && (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Start</TableCell>
                  <TableCell>End</TableCell>
                  <TableCell>Owner</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((event: any) => (
                  <TableRow key={event.id} hover>
                    <TableCell>{event.title || 'Untitled event'}</TableCell>
                    <TableCell>{event.type || 'other'}</TableCell>
                    <TableCell>
                      <Chip label={event.status || 'scheduled'} size="small" variant="outlined" />
                    </TableCell>
                    <TableCell>{formatDateTime(event.startAt)}</TableCell>
                    <TableCell>{formatDateTime(event.endAt)}</TableCell>
                    <TableCell>{event.ownerName || 'Unavailable'}</TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                        <Button size="small" onClick={() => openEdit(event)}>Edit</Button>
                        <Button size="small" color="warning" onClick={() => cancelEventMutation.mutate(event.id)}>Cancel</Button>
                        <Button size="small" color="success" onClick={() => completeEventMutation.mutate(event.id)}>Complete</Button>
                        <Button size="small" color="error" onClick={() => deleteEventMutation.mutate(event.id)}>Delete</Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Card>
      )}

      {tab === 'agenda' && (
        <Stack spacing={2}>
          <Card sx={{ p: 2.5 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>Today</Typography>
            {todayRows.length === 0 ? (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>No events today.</Typography>
            ) : (
              todayRows.map((event: any) => (
                <Box key={event.id} sx={{ py: 1 }}>
                  <Typography variant="subtitle2">{event.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{formatDateTime(event.startAt)}</Typography>
                </Box>
              ))
            )}
          </Card>
          <Card sx={{ p: 2.5 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>This week</Typography>
            {weekRows.length === 0 ? (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>No upcoming events in the next 7 days.</Typography>
            ) : (
              weekRows.map((event: any) => (
                <Box key={event.id} sx={{ py: 1 }}>
                  <Typography variant="subtitle2">{event.title}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>{formatDateTime(event.startAt)}</Typography>
                </Box>
              ))
            )}
          </Card>
        </Stack>
      )}

      {tab === 'team' && unavailable('Team calendar is not available yet.', 'Team-level scheduling requires employee/user calendar aggregation endpoints.')}

      {tab === 'availability' && (
        <Card sx={{ p: 2.5 }}>
          {availabilityQuery.isLoading && <CircularProgress />}
          {availabilityQuery.isError && (availabilityQuery.error instanceof CalendarUnavailableError
            ? unavailable('Availability is not available yet.', 'Create/update availability endpoints are not implemented for this workspace yet.')
            : <CalendarErrorState title="Availability unavailable" description="Unable to load availability rules." />)}
          {!availabilityQuery.isLoading && !availabilityQuery.isError && (
            <CalendarEmptyState title="No availability rules" description="No availability rules were returned." />
          )}
        </Card>
      )}

      {tab === 'booking_links' && (
        <Card sx={{ p: 2.5 }}>
          {bookingLinksQuery.isLoading && <CircularProgress />}
          {bookingLinksQuery.isError && (bookingLinksQuery.error instanceof CalendarUnavailableError
            ? unavailable('Booking links are not available yet.', 'Booking link APIs are not fully available in this environment.')
            : <CalendarErrorState title="Booking links unavailable" description="Unable to load booking links." />)}
          {!bookingLinksQuery.isLoading && !bookingLinksQuery.isError && (bookingLinksQuery.data || []).length === 0 && (
            <CalendarEmptyState title="No booking links" description="No booking links were returned." />
          )}
          {!bookingLinksQuery.isLoading && !bookingLinksQuery.isError && (bookingLinksQuery.data || []).length > 0 && (
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Duration</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Timezone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(bookingLinksQuery.data || []).map((link: any) => (
                  <TableRow key={link.id} hover>
                    <TableCell>{link.name}</TableCell>
                    <TableCell>{link.durationMinutes || 'Unavailable'} min</TableCell>
                    <TableCell><Chip size="small" label={link.active ? 'active' : 'inactive'} /></TableCell>
                    <TableCell>{link.timezone || 'Unavailable'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Card>
      )}

      {tab === 'reminders' && (
        <Card sx={{ p: 2.5 }}>
          {remindersQuery.isLoading && <CircularProgress />}
          {remindersQuery.isError && (remindersQuery.error instanceof CalendarUnavailableError
            ? unavailable('Reminders are not available yet.', 'Reminder delivery APIs are not implemented yet.')
            : <CalendarErrorState title="Reminders unavailable" description="Unable to load reminders." />)}
          {!remindersQuery.isLoading && !remindersQuery.isError && (
            <CalendarEmptyState title="No reminders" description="No reminder records were returned." />
          )}
        </Card>
      )}

      {tab === 'settings' && (
        <Card sx={{ p: 2.5 }}>
          {settingsQuery.isLoading && <CircularProgress />}
          {settingsQuery.isError && (settingsQuery.error instanceof CalendarUnavailableError
            ? unavailable('Settings are not available yet.', 'Calendar settings APIs are not implemented yet.')
            : <CalendarErrorState title="Settings unavailable" description="Unable to load calendar settings." />)}
          {!settingsQuery.isLoading && !settingsQuery.isError && (
            <CalendarEmptyState title="No settings data" description="Settings endpoint returned no editable configuration." />
          )}
        </Card>
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>{editingEventId ? 'Edit Event' : 'Create Event'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="Title" value={eventForm.title} onChange={(e) => setEventForm((p) => ({ ...p, title: e.target.value }))} required />
            <TextField label="Description" value={eventForm.description} onChange={(e) => setEventForm((p) => ({ ...p, description: e.target.value }))} multiline minRows={2} />
            <TextField label="Start" type="datetime-local" InputLabelProps={{ shrink: true }} value={eventForm.startAt} onChange={(e) => setEventForm((p) => ({ ...p, startAt: e.target.value }))} required />
            <TextField label="End" type="datetime-local" InputLabelProps={{ shrink: true }} value={eventForm.endAt} onChange={(e) => setEventForm((p) => ({ ...p, endAt: e.target.value }))} required />
            <FormControl>
              <InputLabel>Type</InputLabel>
              <Select value={eventForm.type} label="Type" onChange={(e) => setEventForm((p) => ({ ...p, type: String(e.target.value) }))}>
                <MenuItem value="meeting">meeting</MenuItem>
                <MenuItem value="call">call</MenuItem>
                <MenuItem value="task">task</MenuItem>
                <MenuItem value="follow_up">follow_up</MenuItem>
                <MenuItem value="booking">booking</MenuItem>
                <MenuItem value="internal">internal</MenuItem>
                <MenuItem value="deadline">deadline</MenuItem>
                <MenuItem value="personal">personal</MenuItem>
                <MenuItem value="other">other</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Location" value={eventForm.location} onChange={(e) => setEventForm((p) => ({ ...p, location: e.target.value }))} />
            <TextField label="Timezone" value={eventForm.timezone} onChange={(e) => setEventForm((p) => ({ ...p, timezone: e.target.value }))} required />
            <Divider />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Invitations, recurrence, reminders, and compliance checks are currently backend-dependent and will appear when corresponding APIs are available.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={submitEvent} disabled={createEventMutation.isPending || updateEventMutation.isPending}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {(createEventMutation.isError || updateEventMutation.isError || deleteEventMutation.isError || cancelEventMutation.isError || completeEventMutation.isError) && (
        <Alert severity="error" sx={{ mt: 2 }}>One or more event actions failed. Please check event data and try again.</Alert>
      )}
    </DashboardContent>
  );
}
