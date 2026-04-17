'use client';

import { 
  Plus, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  Users, 
  Video, 
  MapPin,
  MoreVertical,
  Filter,
  Search,
  List,
  Grid as GridIcon,
  Tag
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  Stack, 
  Chip,
  Divider,
  List as MuiList,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge
} from "@mui/material";

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = Array.from({ length: 35 }, (_, i) => ({ day: i - 3, active: i > 3 && i < 33, event: i === 12 || i === 15 || i === 24 }));

const upcomingEvents = [
  { time: "10:00 AM", title: "Product Launch Strategy", category: "Meeting", color: "#6366f1" },
  { time: "01:30 PM", title: "Client Onboarding: Alex", category: "Call", color: "#10b981" },
  { time: "04:00 PM", title: "Internal Design Review", category: "Workshop", color: "#f59e0b" },
];

export default function CalendarPage() {
  return (
    <Box sx={{ p: 4, height: 'calc(100vh - 64px)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Calendar & Events
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Schedule meetings, track deadlines, and manage your team's availability.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Stack direction="row" sx={{ bgcolor: 'rgba(0,0,0,0.05)', p: 0.5, borderRadius: 3 }}>
             <IconButton size="small" sx={{ bgcolor: 'background.paper', borderRadius: 2.5, boxShadow: 1 }}><GridIcon size={18} /></IconButton>
             <IconButton size="small"><List size={18} /></IconButton>
          </Stack>
          <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>Create Event</Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ flexGrow: 1, height: 'calc(100% - 100px)' }}>
         {/* Sidebar: Filters & Small Calendar */}
         <Grid item xs={12} md={3} sx={{ height: '100%', overflowY: 'auto' }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', mb: 3 }}>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>December 2023</Typography>
                  <Stack direction="row">
                     <IconButton size="small"><ChevronLeft size={16} /></IconButton>
                     <IconButton size="small"><ChevronRight size={16} /></IconButton>
                  </Stack>
               </Box>
               <Grid container spacing={1}>
                  {days.map(d => <Grid item xs={1.7} key={d} sx={{ textAlign: 'center' }}><Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>{d[0]}</Typography></Grid>)}
                  {dates.slice(0, 31).map((d, i) => (
                    <Grid item xs={1.7} key={i} sx={{ textAlign: 'center' }}>
                       <Box sx={{ 
                         p: 0.5, 
                         borderRadius: 2, 
                         cursor: 'pointer',
                         bgcolor: d.day === 12 ? 'primary.main' : 'transparent',
                         color: d.day === 12 ? 'white' : d.active ? 'text.primary' : 'text.disabled',
                         '&:hover': { bgcolor: d.day === 12 ? 'primary.dark' : 'rgba(0,0,0,0.03)' }
                       }}>
                          <Typography variant="caption" sx={{ fontWeight: d.day === 12 ? 800 : 500 }}>{d.day > 0 ? d.day : 31 + d.day}</Typography>
                       </Box>
                    </Grid>
                  ))}
               </Grid>
            </Paper>

            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, px: 1 }}>Categories</Typography>
            <Stack spacing={1} sx={{ mb: 4 }}>
               {['Meetings', 'Events', 'Deadlines', 'Personal'].map((cat, i) => (
                 <Box key={cat} sx={{ px: 2, py: 1, borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', '&:hover': { bgcolor: 'rgba(0,0,0,0.02)' } }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                       <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ['#6366f1', '#10b981', '#f59e0b', '#ec4899'][i] }} />
                       <Typography variant="body2" sx={{ fontWeight: 600 }}>{cat}</Typography>
                    </Stack>
                    <Typography variant="caption" color="text.secondary">12</Typography>
                 </Box>
               ))}
            </Stack>

            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, px: 1 }}>Upcoming Today</Typography>
            <Stack spacing={2}>
               {upcomingEvents.map((evt, i) => (
                 <Paper key={i} elevation={0} sx={{ p: 2, borderRadius: 3, border: '1px solid', borderColor: 'divider', position: 'relative', overflow: 'hidden' }}>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', bgcolor: evt.color }} />
                    <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', display: 'block', mb: 0.5 }}>{evt.time}</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>{evt.title}</Typography>
                    <Chip label={evt.category} size="small" sx={{ height: 18, fontSize: 10, fontWeight: 700, borderRadius: 1 }} />
                 </Paper>
               ))}
            </Stack>
         </Grid>

         {/* Main: Full Calendar Grid */}
         <Grid item xs={12} md={9} sx={{ height: '100%' }}>
            <Paper elevation={0} sx={{ height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
               <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>December 2023</Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                     <TextField size="small" placeholder="Search events..." InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)', width: 200 } }} />
                     <Stack direction="row" sx={{ bgcolor: 'rgba(0,0,0,0.05)', p: 0.5, borderRadius: 2 }}>
                        {['Day', 'Week', 'Month'].map(v => <Button key={v} size="small" sx={{ minWidth: 60, height: 28, borderRadius: 1.5, textTransform: 'none', fontWeight: 700, bgcolor: v === 'Month' ? 'background.paper' : 'transparent', color: v === 'Month' ? 'text.primary' : 'text.secondary', boxShadow: v === 'Month' ? 1 : 0 }}>{v}</Button>)}
                     </Stack>
                  </Stack>
               </Box>
               
               <Grid container sx={{ flexGrow: 1 }}>
                  {days.map(d => (
                    <Grid item xs={1.71} key={d} sx={{ p: 1.5, textAlign: 'center', borderBottom: '1px solid', borderColor: 'divider' }}>
                       <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', textTransform: 'uppercase' }}>{d}</Typography>
                    </Grid>
                  ))}
                  {dates.map((d, i) => (
                    <Grid item xs={1.71} key={i} sx={{ 
                      height: '20%', 
                      p: 1, 
                      borderRight: (i + 1) % 7 === 0 ? 'none' : '1px solid', 
                      borderBottom: i >= 28 ? 'none' : '1px solid', 
                      borderColor: 'divider',
                      bgcolor: d.active ? 'transparent' : 'rgba(0,0,0,0.01)',
                    }}>
                       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="caption" sx={{ fontWeight: d.day === 12 ? 800 : 600, color: d.active ? 'text.primary' : 'text.disabled', bgcolor: d.day === 12 ? 'primary.main' : 'transparent', color: d.day === 12 ? 'white' : 'inherit', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                            {d.day > 0 ? d.day : 31 + d.day}
                          </Typography>
                       </Box>
                       {d.event && (
                         <Box sx={{ p: 0.5, mb: 0.5, borderRadius: 1, bgcolor: 'rgba(99, 102, 241, 0.1)', border: '1px solid', borderColor: 'primary.light', cursor: 'pointer' }}>
                            <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main', display: 'block', truncate: true }}>10a Project Launch...</Typography>
                         </Box>
                       )}
                    </Grid>
                  ))}
               </Grid>
            </Paper>
         </Grid>
      </Grid>
    </Box>
  );
}
