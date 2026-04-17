'use client';

import { 
  Plus, 
  Play, 
  Pause, 
  Zap, 
  Clock, 
  Users, 
  Mail, 
  Settings,
  MoreVertical,
  ChevronRight,
  RefreshCw,
  GitBranch,
  MousePointer2,
  Search,
  Filter
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  IconButton, 
  Button, 
  TextField, 
  InputAdornment,
  Stack,
  Chip,
  Card,
  CardContent,
  Switch,
  Divider,
  Tooltip,
  LinearProgress
} from "@mui/material";

const automations = [
  { 
    id: 1, 
    name: "New Lead Welcome Sequence", 
    trigger: "Contact Created", 
    status: "active", 
    steps: 5, 
    enrolled: 1240, 
    completed: 980,
    type: "Email" 
  },
  { 
    id: 2, 
    name: "Abandoned Cart Recovery", 
    trigger: "Cart Abandoned", 
    status: "active", 
    steps: 3, 
    enrolled: 450, 
    completed: 120,
    type: "Multi-channel" 
  },
  { 
    id: 3, 
    name: "Re-engagement Campaign", 
    trigger: "Inactivity (30 days)", 
    status: "paused", 
    steps: 4, 
    enrolled: 3200, 
    completed: 2100,
    type: "SMS" 
  },
];

export default function AutomationsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Marketing Automations
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Build intelligent workflows that engage your customers while you sleep.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Create Workflow
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Active Workflows", value: "12", icon: Zap, color: '#6366f1' },
          { label: "Total Enrolled", value: "8.4k", icon: Users, color: '#10b981' },
          { label: "Completion Rate", value: "76%", icon: RefreshCw, color: '#f59e0b' },
          { label: "AI Suggestions", value: "3", icon: GitBranch, color: '#ec4899' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>
                    {stat.label}
                  </Typography>
                  <stat.icon size={16} color={stat.color} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {stat.value}
                </Typography>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <Stack direction="row" spacing={2}>
            <TextField 
              placeholder="Search automations..." 
              size="small" 
              sx={{ width: 300 }}
              InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'background.paper' } }}
            />
            <Button variant="outlined" startIcon={<Filter size={18} />} sx={{ borderRadius: 3 }}>Filter</Button>
         </Stack>
      </Box>

      <Grid container spacing={3}>
        {automations.map((auto) => (
          <Grid item xs={12} key={auto.id}>
            <Card elevation={0} sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', transition: 'all 0.2s', '&:hover': { borderColor: 'primary.main' } }}>
              <CardContent sx={{ p: '24px !important' }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={4}>
                     <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ p: 1.5, borderRadius: 3, bgcolor: auto.status === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(0,0,0,0.05)', color: auto.status === 'active' ? 'success.main' : 'text.disabled' }}>
                           <Zap size={24} fill="currentColor" />
                        </Box>
                        <Box>
                           <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{auto.name}</Typography>
                           <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              Trigger: <Chip label={auto.trigger} size="small" sx={{ height: 18, fontSize: 10, fontWeight: 700, borderRadius: 1 }} />
                           </Typography>
                        </Box>
                     </Stack>
                  </Grid>

                  <Grid item xs={12} md={2}>
                     <Stack spacing={0.5}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>STEPS</Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                           <GitBranch size={16} color="#6366f1" />
                           <Typography variant="body2" sx={{ fontWeight: 800 }}>{auto.steps} Stages</Typography>
                        </Stack>
                     </Stack>
                  </Grid>

                  <Grid item xs={12} md={3}>
                      <Stack spacing={0.5}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                           <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>PERFORMANCE</Typography>
                           <Typography variant="caption" sx={{ fontWeight: 800 }}>{Math.round((auto.completed / auto.enrolled) * 100)}% Success</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={(auto.completed / auto.enrolled) * 100} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { borderRadius: 3 } }} />
                        <Typography variant="caption" color="text.secondary">{auto.enrolled.toLocaleString()} enrolled</Typography>
                      </Stack>
                  </Grid>

                  <Grid item xs={12} md={3}>
                     <Stack direction="row" spacing={2} justifyContent="flex-end" alignItems="center">
                        <Box sx={{ textAlign: 'right' }}>
                           <Typography variant="caption" sx={{ fontWeight: 700, color: auto.status === 'active' ? 'success.main' : 'warning.main', display: 'block' }}>
                             {auto.status.toUpperCase()}
                           </Typography>
                           <Switch checked={auto.status === 'active'} size="small" />
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <IconButton size="small"><Settings size={18} /></IconButton>
                        <Button variant="outlined" size="small" endIcon={<ChevronRight size={16} />} sx={{ borderRadius: 2, fontWeight: 700 }}>
                           Review
                        </Button>
                     </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Paper 
        elevation={0} 
        sx={{ 
          mt: 4, 
          p: 4, 
          borderRadius: 4, 
          border: '1px solid', 
          borderColor: 'primary.light', 
          bgcolor: 'rgba(99, 102, 241, 0.02)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center">
           <Box sx={{ p: 2, borderRadius: '50%', bgcolor: 'primary.main', color: 'white' }}>
              <Zap size={24} />
           </Box>
           <Box>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>Try Automation Templates</Typography>
              <Typography variant="body2" color="text.secondary">Kickstart your growth with pre-built workflows for membership, sales, and support.</Typography>
           </Box>
        </Stack>
        <Button variant="contained" sx={{ borderRadius: 3 }}>Browse Library</Button>
      </Paper>
    </Box>
  );
}
