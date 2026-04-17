'use client';

import { 
  Plus, 
  Search, 
  MoreVertical, 
  Users, 
  DollarSign, 
  Link as LinkIcon, 
  ChevronRight,
  UserPlus,
  RefreshCw,
  TrendingUp,
  Settings,
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
  Divider,
  Card,
  CardContent
} from "@mui/material";

const affiliates = [
  { id: 1, name: "Jessica Bloom", referrals: 154, earnings: "$1,240.00", status: "Active", joined: "Oct 2023" },
  { id: 2, name: "Mark Peterson", referrals: 89, earnings: "$850.00", status: "Active", joined: "Nov 2023" },
  { id: 3, name: "Creative Agency", referrals: 320, earnings: "$4,500.00", status: "Gold", joined: "Sep 2023" },
  { id: 4, name: "John Doe", referrals: 12, earnings: "$120.00", status: "Pending", joined: "Dec 2023" },
];

export default function AffiliatePage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Affiliate Center
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manage your partner network, track referrals, and handle commissions.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Settings size={20} />} sx={{ borderRadius: 3 }}>Program Settings</Button>
          <Button variant="contained" startIcon={<UserPlus size={20} />} sx={{ borderRadius: 3 }}>Add Affiliate</Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Total Affiliates", value: "852", icon: Users, color: '#6366f1' },
          { label: "Active Referrals", value: "3,420", icon: LinkIcon, color: '#10b981' },
          { label: "Paid Commissions", value: "$12,400", icon: DollarSign, color: '#f59e0b' },
          { label: "Pending Payouts", value: "$1,840", icon: RefreshCw, color: '#ec4899' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>{stat.label}</Typography>
                  <stat.icon size={16} color={stat.color} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
         <Grid item xs={12} lg={8}>
            <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
               <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Top Performing Partners</Typography>
                  <TextField 
                    placeholder="Search affiliates..." 
                    size="small" 
                    sx={{ width: 250 }}
                    InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' } }}
                  />
               </Box>
               <TableContainer>
                  <Table>
                     <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                        <TableRow>
                           <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Affiliate</TableCell>
                           <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Referrals</TableCell>
                           <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Earnings</TableCell>
                           <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Status</TableCell>
                           <TableCell align="right"></TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {affiliates.map((aff) => (
                           <TableRow key={aff.id} hover>
                              <TableCell>
                                 <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ bgcolor: 'primary.light', width: 32, height: 32, fontSize: 14 }}>{aff.name[0]}</Avatar>
                                    <Box>
                                       <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{aff.name}</Typography>
                                       <Typography variant="caption" color="text.secondary">Joined {aff.joined}</Typography>
                                    </Box>
                                 </Stack>
                              </TableCell>
                              <TableCell>
                                 <Typography variant="body2" sx={{ fontWeight: 700 }}>{aff.referrals}</Typography>
                              </TableCell>
                              <TableCell>
                                 <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{aff.earnings}</Typography>
                              </TableCell>
                              <TableCell>
                                 <Chip 
                                   label={aff.status} 
                                   size="small" 
                                   sx={{ 
                                     fontWeight: 800, fontSize: 10, borderRadius: 1.5,
                                     bgcolor: aff.status === 'Gold' ? 'primary.light' : aff.status === 'Active' ? 'success.light' : 'action.selected',
                                     color: aff.status === 'Gold' ? 'primary.dark' : aff.status === 'Active' ? 'success.dark' : 'text.secondary'
                                   }} 
                                 />
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
            <Card elevation={0} sx={{ borderRadius: 4, border: '1px solid', borderColor: 'divider', mb: 3 }}>
               <CardContent sx={{ p: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>Affiliate Link Builder</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Generate custom trackable links for your partners.</Typography>
                  <Stack spacing={2}>
                     <TextField fullWidth placeholder="Destination URL" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                     <TextField fullWidth placeholder="Affiliate ID" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }} />
                     <Button variant="contained" fullWidth sx={{ borderRadius: 3, py: 1.5 }}>Generate Link</Button>
                  </Stack>
               </CardContent>
            </Card>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: 'rgba(99, 102, 241, 0.05)', border: '1px dashed', borderColor: 'primary.main' }}>
               <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                     <TrendingUp size={24} />
                  </Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Growth Strategy</Typography>
                  <Typography variant="body2" color="text.secondary">
                     Our automated commission tiers can increase referral volume by up to 25%.
                  </Typography>
                  <Button variant="contained" sx={{ borderRadius: 3 }}>Optimize Tiers</Button>
               </Stack>
            </Paper>
         </Grid>
      </Grid>
    </Box>
  );
}
