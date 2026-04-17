'use client';

import { 
  Plus, 
  Mail, 
  Send, 
  BarChart3, 
  Search, 
  MoreVertical,
  MousePointer2,
  Eye,
  CheckCircle2,
  Clock,
  TrendingUp,
  Target
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  CircularProgress,
  Stack,
  LinearProgress,
  Divider
} from "@mui/material";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ChartTooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useQuery } from "@tanstack/react-query";
import { marketingService } from "@/services/marketing.service";

const performanceData = [
  { name: 'Mon', sent: 4000, open: 2400 },
  { name: 'Tue', sent: 3000, open: 1398 },
  { name: 'Wed', sent: 2000, open: 9800 },
  { name: 'Thu', sent: 2780, open: 3908 },
  { name: 'Fri', sent: 1890, open: 4800 },
  { name: 'Sat', sent: 2390, open: 3800 },
  { name: 'Sun', sent: 3490, open: 4300 },
];

export default function MarketingPage() {
  const { data: campaignsData, isLoading: isLoadingCampaigns } = useQuery({
    queryKey: ['campaigns'],
    queryFn: () => marketingService.getCampaigns(),
  });

  const campaigns = campaignsData?.data || [];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Marketing Campaigns
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Design, send, and track high-performance email and SMS campaigns.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<Plus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Create Campaign
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Total Sent", value: "24.8k", icon: Send, color: '#6366f1' },
          { label: "Open Rate", value: "42.3%", icon: Eye, color: '#10b981' },
          { label: "Click Rate", value: "12.1%", icon: MousePointer2, color: '#f59e0b' },
          { label: "Active Campaigns", value: campaigns.length, icon: Target, color: '#ec4899' },
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
                <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <TrendingUp size={12} /> +2.4% vs last month
                </Typography>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>Campaign Performance</Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Emails" size="small" sx={{ fontWeight: 700 }} />
                <Chip label="SMS" variant="outlined" size="small" sx={{ fontWeight: 700 }} />
              </Stack>
            </Box>
            <Box sx={{ height: 300, width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <ChartTooltip />
                  <Area type="monotone" dataKey="sent" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorSent)" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Paper>

          <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
            <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>Recent Campaigns</Typography>
              <TextField 
                placeholder="Search..." 
                size="small" 
                sx={{ width: 200 }}
                InputProps={{ startAdornment: <InputAdornment position="start"><Search size={16} /></InputAdornment>, sx: { borderRadius: 3 } }}
              />
            </Box>
            <TableContainer>
              {isLoadingCampaigns ? (
                <Box sx={{ p: 10, textAlign: 'center' }}><CircularProgress size={30} /></Box>
              ) : (
                <Table>
                  <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Campaign Name</TableCell>
                      <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Status</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Reach</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 10 }}>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {campaigns.map((camp: any) => (
                      <TableRow key={camp.id} hover>
                        <TableCell>
                          <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{camp.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{camp.subject}</Typography>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={camp.status} 
                            size="small" 
                            sx={{ 
                              fontWeight: 800, fontSize: 10, borderRadius: 1.5,
                              bgcolor: camp.status === 'sent' ? 'success.light' : 'warning.light',
                              color: camp.status === 'sent' ? 'success.dark' : 'warning.dark'
                            }} 
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>2,410</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="caption" color="text.secondary">
                            {new Date(camp.createdAt).toLocaleDateString()}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Audience Overview</Typography>
            <Stack spacing={3}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>Engaged Leads</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800 }}>82%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={82} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { bgcolor: 'primary.main', borderRadius: 3 } }} />
              </Box>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>Bounced</Typography>
                  <Typography variant="caption" sx={{ fontWeight: 800 }}>4.2%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={4} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { bgcolor: 'error.main', borderRadius: 3 } }} />
              </Box>
              <Divider sx={{ my: 2 }} />
              <Button variant="outlined" fullWidth startIcon={<Target size={18} />} sx={{ borderRadius: 3 }}>
                Segment Audience
              </Button>
            </Stack>
          </Paper>

          <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'primary.light', bgcolor: 'rgba(99, 102, 241, 0.02)' }}>
            <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
               <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>
                 <BarChart3 size={24} />
               </Avatar>
               <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Marketing AI</Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary', px: 2 }}>
                 Let our AI optimize your campaign subject lines for a 15% better open rate.
               </Typography>
               <Button variant="contained" sx={{ borderRadius: 3, mt: 1 }}>Generate Ideas</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
