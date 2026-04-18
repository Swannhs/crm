'use client';

import { 
  Plus, 
  MoreVertical, 
  Folder, 
  CheckCircle2, 
  Clock, 
  Users,
  Search,
  LayoutGrid,
  List as ListIcon,
  Calendar,
  AlertCircle
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Button, 
  TextField, 
  InputAdornment,
  Stack,
  Chip,
  LinearProgress,
  AvatarGroup,
  Card,
  CardContent,
  Tooltip
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { projectsService } from "@/services/projects.service";

export default function ProjectsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: () => projectsService.getProjects(),
  });

  const projects = (data?.data || []).map((project) => ({
    id: project.id,
    name: project.name,
    status: project.status === 'completed' ? 'Completed' : project.status === 'archived' ? 'Archived' : 'Active',
    progress: project.status === 'completed' ? 100 : project.status === 'archived' ? 0 : 50,
    tasks: 0,
    completed: project.status === 'completed' ? 0 : 0,
    team: [],
    category: 'Project',
    priority: 'Medium',
  }));

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Project Manager
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Plan, execute, and track collaborative team projects.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Folder size={20} />} sx={{ borderRadius: 3 }}>
            Archive
          </Button>
          <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>
            New Project
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Active Projects", value: "8", icon: LayoutGrid, color: '#6366f1' },
          { label: "Tasks Completed", value: "142", icon: CheckCircle2, color: '#10b981' },
          { label: "Pending Review", value: "3", icon: AlertCircle, color: '#f59e0b' },
          { label: "Hours Tracked", value: "480h", icon: Clock, color: '#ec4899' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: `${stat.color}15`, color: stat.color, borderRadius: 2 }}>
                    <stat.icon size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>
                      {stat.label}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {stat.value}
                    </Typography>
                  </Box>
                </Box>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <Stack direction="row" spacing={1}>
            <Button size="small" variant="text" sx={{ fontWeight: 800, borderBottom: '2px solid', borderColor: 'primary.main', borderRadius: 0 }}>Active</Button>
            <Button size="small" variant="text" color="inherit" sx={{ fontWeight: 600, color: 'text.secondary' }}>Completed</Button>
            <Button size="small" variant="text" color="inherit" sx={{ fontWeight: 600, color: 'text.secondary' }}>All</Button>
         </Stack>
         <TextField
            placeholder="Search projects..."
            size="small"
            sx={{ width: 300 }}
            InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'background.paper' } }}
         />
      </Box>

      <Grid container spacing={4}>
        {isLoading ? (
          <Grid item xs={12}>
            <Typography color="text.secondary">Loading projects...</Typography>
          </Grid>
        ) : error ? (
          <Grid item xs={12}>
            <Typography color="error.main">Failed to load projects.</Typography>
          </Grid>
        ) : projects.length === 0 ? (
          <Grid item xs={12}>
            <Typography color="text.secondary">No projects found.</Typography>
          </Grid>
        ) : projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <Card elevation={0} sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', transition: 'all 0.2s', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                   <Chip 
                     label={project.category} 
                     size="small" 
                     sx={{ fontWeight: 800, fontSize: 10, borderRadius: 1.5, bgcolor: 'rgba(99, 102, 241, 0.05)', color: 'primary.main' }} 
                   />
                   <IconButton size="small"><MoreVertical size={18} /></IconButton>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{project.name}</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3 }}>
                  Objective: Deliver high-quality {project.category.toLowerCase()} assets by end of quarter.
                </Typography>

                <Box sx={{ mb: 3 }}>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="caption" sx={{ fontWeight: 700 }}>Progress</Typography>
                      <Typography variant="caption" sx={{ fontWeight: 800 }}>{project.progress}%</Typography>
                   </Box>
                   <LinearProgress variant="determinate" value={project.progress} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { bgcolor: project.progress === 100 ? 'success.main' : 'primary.main', borderRadius: 3 } }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 28, height: 28, fontSize: 10, fontWeight: 700 } }}>
                     {(project.team.length ? project.team : ['PR']).map((initials) => (
                      <Avatar key={initials} sx={{ bgcolor: 'secondary.main' }}>{initials}</Avatar>
                     ))}
                   </AvatarGroup>
                   <Stack direction="row" spacing={1} alignItems="center" color="text.secondary">
                      <CheckCircle2 size={14} />
                      <Typography variant="caption" sx={{ fontWeight: 800 }}>{project.completed}/{project.tasks}</Typography>
                   </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
