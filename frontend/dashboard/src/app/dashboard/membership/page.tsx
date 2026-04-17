'use client';

import { 
  Plus, 
  Search, 
  MoreVertical, 
  Users, 
  CreditCard, 
  ShieldCheck, 
  TrendingUp,
  UserPlus,
  Star,
  Settings,
  Mail,
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
  TextField, 
  InputAdornment,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Card,
  CardContent,
  Divider
} from "@mui/material";

const membershipTiers = [
  { name: "Free Tier", members: 1240, growth: "+12%", color: "#94a3b8" },
  { name: "Pro Plan", members: 450, growth: "+24%", color: "#6366f1" },
  { name: "Business", members: 180, growth: "+8%", color: "#f59e0b" },
  { name: "Enterprise", members: 42, growth: "+5%", color: "#ec4899" },
];

const recentMembers = [
  { id: 1, name: "Alex Johnson", tier: "Pro Plan", status: "Active", joined: "2 days ago", revenue: "$29.00/mo" },
  { id: 2, name: "Maria Garcia", tier: "Business", status: "Active", joined: "Yesterday", revenue: "$99.00/mo" },
  { id: 3, name: "David Kim", tier: "Enterprise", status: "Pending", joined: "Today", revenue: "$499.00/mo" },
  { id: 4, name: "Sarah Smith", tier: "Pro Plan", status: "Cancelled", joined: "1 week ago", revenue: "$0.00" },
];

export default function MembershipPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Membership & Tiers
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manage subscription plans, recurring revenue, and member access.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Settings size={20} />} sx={{ borderRadius: 3 }}>Tier Settings</Button>
          <Button variant="contained" startIcon={<Plus size={20} />} sx={{ borderRadius: 3 }}>Create Tier</Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {membershipTiers.map((tier) => (
          <Grid item xs={12} sm={6} md={3} key={tier.name}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', bgcolor: tier.color }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>{tier.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mt: 1 }}>
                   <Typography variant="h4" sx={{ fontWeight: 800 }}>{tier.members}</Typography>
                   <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 800 }}>{tier.growth}</Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(tier.members / 2000) * 100} 
                  sx={{ mt: 2, height: 4, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { bgcolor: tier.color } }} 
                />
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
         <Grid item xs={12} lg={8}>
            <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
               <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Recent Subscriptions</Typography>
                  <TextField 
                    placeholder="Search members..." 
                    size="small" 
                    sx={{ width: 250 }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' } }}
                  />
               </Box>
               <TableContainer>
                  <Table>
                     <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                        <TableRow>
                           <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Member</TableCell>
                           <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Tier</TableCell>
                           <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Status</TableCell>
                           <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Revenue</TableCell>
                           <TableCell align="right"></TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {recentMembers.map((member) => (
                           <TableRow key={member.id} hover>
                              <TableCell>
                                 <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ bgcolor: 'primary.light', width: 32, height: 32, fontSize: 14 }}>{member.name[0]}</Avatar>
                                    <Box>
                                       <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{member.name}</Typography>
                                       <Typography variant="caption" color="text.secondary">Joined {member.joined}</Typography>
                                    </Box>
                                 </Stack>
                              </TableCell>
                              <TableCell>
                                 <Chip label={member.tier} size="small" variant="outlined" sx={{ fontWeight: 700, fontSize: 10 }} />
                              </TableCell>
                              <TableCell>
                                 <Chip 
                                   label={member.status} 
                                   size="small" 
                                   sx={{ 
                                     fontWeight: 800, fontSize: 10, borderRadius: 1,
                                     bgcolor: member.status === 'Active' ? 'success.light' : member.status === 'Pending' ? 'warning.light' : 'error.light',
                                     color: member.status === 'Active' ? 'success.dark' : member.status === 'Pending' ? 'warning.dark' : 'error.dark'
                                   }} 
                                 />
                              </TableCell>
                              <TableCell align="right">
                                 <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{member.revenue}</Typography>
                              </TableCell>
                              <TableCell align="right">
                                 <IconButton size="small"><MoreVertical size={18} /></IconButton>
                              </TableCell>
                           </TableRow>
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
            </Paper>
         </Grid>

         <Grid item xs={12} lg={4}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', mb: 4 }}>
               <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Revenue Insights</Typography>
               <Stack spacing={4}>
                  <Box>
                     <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>MONTHLY RECURRING REVENUE (MRR)</Typography>
                     <Typography variant="h4" sx={{ fontWeight: 800 }}>$12,480</Typography>
                     <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TrendingUp size={14} /> +12.5% vs last month
                     </Typography>
                  </Box>
                  <Divider />
                  <Box>
                     <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700 }}>CHURN RATE</Typography>
                     <Typography variant="h4" sx={{ fontWeight: 800 }}>2.4%</Typography>
                     <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 800 }}>-0.5% decrease</Typography>
                  </Box>
                  <Button variant="contained" fullWidth sx={{ borderRadius: 3, py: 1.5 }}>View Full Report</Button>
               </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: 'primary.main', color: 'white' }}>
               <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                     <ShieldCheck size={24} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Access Control</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                     Configure which tiers have access to specific pages and tools.
                  </Typography>
                  <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', borderRadius: 3, '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                     Manage Permissions
                  </Button>
               </Stack>
            </Paper>
         </Grid>
      </Grid>
    </Box>
  );
}
