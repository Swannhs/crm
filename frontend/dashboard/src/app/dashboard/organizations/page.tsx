'use client';

import { 
  Plus, 
  Search, 
  MoreVertical, 
  ShieldCheck, 
  Users, 
  Building2, 
  Globe,
  Mail,
  Phone,
  Settings,
  UserPlus,
  ArrowRight,
  ChevronRight,
  Filter
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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
  Card,
  CardContent
} from "@mui/material";

const organizations = [
  { id: 1, name: "Acme Corp", type: "Main Entity", teams: 12, members: 85, status: "Active" },
  { id: 2, name: "Global Logistics", type: "Subsidiary", teams: 4, members: 22, status: "Active" },
  { id: 3, name: "Alpha Research", type: "Project Team", teams: 1, members: 8, status: "Review" },
];

const teamMembers = [
  { id: 1, name: "Alex Jones", role: "Super Admin", email: "alex@acme.com", status: "Online" },
  { id: 2, name: "Samantha Reed", role: "Editor", email: "sam@acme.com", status: "Offline" },
  { id: 3, name: "Michael Vance", role: "Viewer", email: "mike@acme.com", status: "Online" },
];

export default function OrganizationsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Team & Organizations
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manage your corporate structure, team deployments, and access control.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
           <Button variant="outlined" startIcon={<UserPlus size={20} />} sx={{ borderRadius: 3 }}>Invite User</Button>
           <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>Create Organization</Button>
        </Stack>
      </Box>

      <Grid container spacing={4}>
         <Grid item xs={12} lg={7}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>My Organizations</Typography>
            <Stack spacing={2}>
               {organizations.map((org) => (
                 <Paper key={org.id} elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', transition: 'all 0.2s', '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(99, 102, 241, 0.01)' } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <Stack direction="row" spacing={3} alignItems="center">
                          <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: 'primary.main', width: 48, height: 48, borderRadius: 3 }}>
                             <Building2 size={24} />
                          </Avatar>
                          <Box>
                             <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{org.name}</Typography>
                             <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{org.type}</Typography>
                          </Box>
                       </Stack>
                       <Stack direction="row" spacing={4} alignItems="center">
                          <Box sx={{ textAlign: 'center' }}>
                             <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{org.teams}</Typography>
                             <Typography variant="caption" color="text.secondary">Teams</Typography>
                          </Box>
                          <Box sx={{ textAlign: 'center' }}>
                             <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{org.members}</Typography>
                             <Typography variant="caption" color="text.secondary">Members</Typography>
                          </Box>
                          <Chip label={org.status} size="small" sx={{ fontWeight: 800, fontSize: 10, bgcolor: org.status === 'Active' ? 'success.light' : 'warning.light', color: org.status === 'Active' ? 'success.dark' : 'warning.dark' }} />
                          <IconButton size="small"><ChevronRight size={20} /></IconButton>
                       </Stack>
                    </Box>
                 </Paper>
               ))}
            </Stack>

            <Box sx={{ mt: 6 }}>
               <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Permission Registry</Typography>
               <Grid container spacing={2}>
                  {[
                    { role: "Global Admin", rights: "Full Access", users: 2 },
                    { role: "Department Manager", rights: "Dept Only", users: 12 },
                    { role: "Standard User", rights: "Basic Access", users: 156 },
                  ].map((role) => (
                    <Grid item xs={12} sm={4} key={role.role}>
                       <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'rgba(0,0,0,0.01)' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{role.role}</Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>Scope: {role.rights}</Typography>
                          <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>{role.users} Active Users</Typography>
                       </Paper>
                    </Grid>
                  ))}
               </Grid>
            </Box>
         </Grid>

         <Grid item xs={12} lg={5}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Acme Corp Members</Typography>
                  <IconButton size="small"><Filter size={18} /></IconButton>
               </Box>
               <List disablePadding>
                  {teamMembers.map((member) => (
                    <ListItem key={member.id} disablePadding sx={{ mb: 3 }}>
                       <ListItemAvatar>
                          <Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" color={member.status === 'Online' ? 'success' : 'default'}>
                             <Avatar sx={{ bgcolor: 'primary.light', fontSize: 14 }}>{member.name[0]}</Avatar>
                          </Badge>
                       </ListItemAvatar>
                       <ListItemText 
                         primary={<Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{member.name}</Typography>}
                         secondary={<Typography variant="caption" color="text.secondary">{member.role} • {member.email}</Typography>}
                       />
                       <IconButton size="small"><MoreVertical size={18} /></IconButton>
                    </ListItem>
                  ))}
               </List>
               <Divider sx={{ my: 2, opacity: 0.5 }} />
               <Button variant="text" fullWidth sx={{ fontWeight: 800 }}>Manage All 85 Members <ArrowRight size={16} /></Button>
            </Paper>

            <Card elevation={0} sx={{ mt: 4, borderRadius: 4, bgcolor: 'primary.main', color: 'white' }}>
               <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <ShieldCheck size={40} style={{ marginBottom: 16 }} />
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Security Compliance</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>Your organization is compliant with SOC2 and GDPR requirements.</Typography>
                  <Button variant="contained" sx={{ bgcolor: 'white', color: 'primary.main', borderRadius: 3, fontWeight: 800, '&:hover': { bgcolor: '#f8fafc' } }}>View Audit Log</Button>
               </CardContent>
            </Card>
         </Grid>
      </Grid>
    </Box>
  );
}
