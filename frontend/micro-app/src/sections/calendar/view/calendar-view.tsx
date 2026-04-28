'use client';

import { useState } from 'react';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import { useQuery } from '@tanstack/react-query';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { calendarService } from 'src/services/calendar-service';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function CalendarView() {
  const [selectedFilters, setSelectedFilters] = useState(['Events', 'Appointments', 'Bookings']);

  const { data: events, isLoading } = useQuery({
    queryKey: ['calendar-events'],
    queryFn: () => calendarService.getEvents(),
  });

  if (isLoading) {
    return (
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  // Format events for FullCalendar
  const calendarEvents = (events || []).map((event: any) => ({
    id: event._id,
    title: event.title,
    start: event.start,
    end: event.end,
    color: event.color || '#00A76F',
    extendedProps: event.extendedProps,
  }));

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Calendar</Typography>
      </Box>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
        {/* Sidebar Filters */}
        <Box sx={{ width: { xs: '100%', md: 240 }, flexShrink: 0 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Filters</Typography>
            {['Events', 'Appointments', 'Bookings'].map((filter) => (
              <Stack
                key={filter}
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 1, cursor: 'pointer', opacity: selectedFilters.includes(filter) ? 1 : 0.5 }}
                onClick={() => {
                  setSelectedFilters(prev => 
                    prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
                  );
                }}
              >
                <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'primary.main' }} />
                <Typography variant="body2">{filter}</Typography>
              </Stack>
            ))}
          </Card>
        </Box>

        {/* Calendar Body */}
        <Card sx={{ flexGrow: 1, p: 2 }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={calendarEvents}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            }}
            height="auto"
          />
        </Card>
      </Stack>
    </DashboardContent>
  );
}
