'use client';

import { 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  Video,
  ChevronLeft,
  ChevronRight,
  Settings,
  MoreVertical
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  Chip, 
  Stack, 
  Divider,
  Card,
  CardContent,
  Tooltip
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { bookingService } from "@/services/booking.service";

export default function BookingPage() {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const { data, isLoading, error } = useQuery({
    queryKey: ['appointments'],
    queryFn: () => bookingService.getAppointments(),
  });
  const appointments = (data?.data || []).map((appointment) => {
    const start = new Date(appointment.startTime);
    const end = new Date(appointment.endTime);
    const durationMinutes = Math.max(0, Math.round((end.getTime() - start.getTime()) / 60000));
    return {
      id: appointment.id,
      time: start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      client: appointment.contactId || appointment.employeeId || 'Unknown',
      service: appointment.title || 'Booked Appointment',
      type: appointment.status === 'confirmed' ? 'Confirmed' : appointment.status,
      duration: `${durationMinutes} min`,
    };
  });

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Booking & Scheduling
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Coordinate appointments and manage your availability calendar.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button 
            variant="outlined" 
            startIcon={<Settings size={20} />}
            sx={{ py: 1.5, px: 3, borderRadius: 3 }}
          >
            Settings
          </Button>
          <Button 
            variant="contained" 
            startIcon={<Plus size={20} />}
            sx={{ py: 1.5, px: 3, borderRadius: 3 }}
          >
            Book Now
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Today's Schedule</Typography>
                <Chip label={today} size="small" sx={{ fontWeight: 700, bgcolor: 'primary.light', color: 'primary.contrastText' }} />
              </Stack>
              <Stack direction="row" spacing={1}>
                <IconButton size="small"><ChevronLeft size={20} /></IconButton>
                <IconButton size="small"><ChevronRight size={20} /></IconButton>
              </Stack>
            </Box>

            <Stack spacing={2}>
              {isLoading ? (
                <Typography color="text.secondary">Loading appointments...</Typography>
              ) : error ? (
                <Typography color="error.main">Failed to load appointments.</Typography>
              ) : appointments.length === 0 ? (
                <Typography color="text.secondary">No appointments scheduled.</Typography>
              ) : (
              {appointments.map((apt, index) => (
                <Card 
                  key={apt.id || index} 
                  elevation={0} 
                  sx={{ 
                    borderRadius: 3, 
                    border: '1px solid', 
                    borderColor: 'divider', 
                    transition: 'all 0.2s',
                    '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(99, 102, 241, 0.02)' }
                  }}
                >
                  <CardContent sx={{ p: '24px !important' }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={2} sx={{ textAlign: 'center', borderRight: '1px solid', borderColor: 'divider' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main' }}>{apt.time}</Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>{apt.duration}</Typography>
                      </Grid>
                      <Grid item xs={7} sx={{ pl: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 16 }}>{apt.service}</Typography>
                        <Stack direction="row" spacing={2} alignItems="center" sx={{ color: 'text.secondary', mt: 0.5 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <User size={14} />
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>{apt.client}</Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            {apt.type === "Video" ? <Video size={14} color="#6366f1" /> : <MapPin size={14} color="#10b981" />}
                            <Typography variant="caption" sx={{ fontWeight: 600 }}>{apt.type}</Typography>
                          </Box>
                        </Stack>
                      </Grid>
                      <Grid item xs={3} sx={{ textAlign: 'right' }}>
                        <Button variant="outlined" size="small" sx={{ borderRadius: 2, fontWeight: 700 }}>Confirm</Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
              )}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Stack spacing={4}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 3 }}>Monthly Overview</Typography>
              <Grid container spacing={1}>
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                  <Grid xs={1.7} key={day} sx={{ textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary' }}>{day}</Typography>
                  </Grid>
                ))}
                {Array.from({ length: 31 }).map((_, i) => (
                  <Grid xs={1.7} key={i}>
                    <Box 
                      sx={{ 
                        aspectRatio: '1/1', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: 12, 
                        fontWeight: 700, 
                        borderRadius: 2, 
                        cursor: 'pointer',
                        bgcolor: i + 1 === 17 ? 'primary.main' : 'transparent',
                        color: i + 1 === 17 ? 'white' : 'text.primary',
                        '&:hover': { bgcolor: i + 1 === 17 ? 'primary.dark' : 'rgba(0,0,0,0.05)' }
                      }}
                    >
                      {i + 1}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'primary.light', bgcolor: 'rgba(99, 102, 241, 0.05)' }}>
              <Typography variant="caption" sx={{ fontWeight: 800, color: 'primary.main', textTransform: 'uppercase', mb: 1, display: 'block' }}>
                Availability Note
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.6 }}>
                You have 3 video consultations remaining this week. Sync your Google Calendar to avoid overbooking.
              </Typography>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
