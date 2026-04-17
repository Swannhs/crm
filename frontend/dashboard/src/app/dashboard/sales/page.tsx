'use client';

import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Target,
  ArrowUpRight,
  Filter,
  Download,
  Calendar,
  Layers,
  BarChart3
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
  LinearProgress
} from "@mui/material";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as ChartTooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const salesData = [
  { name: 'Mon', revenue: 4000, orders: 240 },
  { name: 'Tue', revenue: 3000, orders: 139 },
  { name: 'Wed', revenue: 2000, orders: 980 },
  { name: 'Thu', revenue: 2780, orders: 390 },
  { name: 'Fri', revenue: 1890, orders: 480 },
  { name: 'Sat', revenue: 2390, orders: 380 },
  { name: 'Sun', revenue: 3490, orders: 430 },
];

export default function SalesDashboardPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Sales Overview
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Monitor your revenue, conversion rates, and sales pipeline performance.
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" startIcon={<Download size={20} />} sx={{ borderRadius: 3 }}>Export Report</Button>
          <Button variant="contained" startIcon={<Filter size={20} />} sx={{ borderRadius: 3 }}>Filter Range</Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { label: "Total Revenue", value: "$45,280", trend: "+12.5%", icon: DollarSign, color: '#6366f1' },
          { label: "Total Orders", value: "842", trend: "+5.2%", icon: ShoppingCart, color: '#10b981' },
          { label: "Av. Order Value", value: "$53.80", trend: "-2.1%", icon: Target, color: '#f59e0b', down: true },
          { label: "Conversion Rate", value: "4.2%", trend: "+1.8%", icon: TrendingUp, color: '#ec4899' },
        ].map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
             <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 700, textTransform: 'uppercase' }}>{stat.label}</Typography>
                  <stat.icon size={16} color={stat.color} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
                <Typography variant="caption" sx={{ color: stat.down ? 'error.main' : 'success.main', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                   {stat.down ? <TrendingDown size={14} /> : <TrendingUp size={14} />} {stat.trend}
                </Typography>
             </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
         <Grid item xs={12} lg={8}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', mb: 4 }}>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Revenue Analysis</Typography>
                  <Stack direction="row" spacing={1}>
                     <Chip label="Revenue" size="small" sx={{ fontWeight: 700, bgcolor: 'primary.main', color: 'white' }} />
                     <Chip label="Orders" variant="outlined" size="small" sx={{ fontWeight: 700 }} />
                  </Stack>
               </Box>
               <Box sx={{ height: 350, width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={salesData}>
                        <defs>
                           <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                           </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                        <ChartTooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                     </AreaChart>
                  </ResponsiveContainer>
               </Box>
            </Paper>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
               <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Sales Pipeline Health</Typography>
               <Grid container spacing={4}>
                  {[
                    { label: "New Leads", value: 450, color: '#6366f1' },
                    { label: "Qualified", value: 280, color: '#10b981' },
                    { label: "Negotiation", value: 120, color: '#f59e0b' },
                    { label: "Closed Won", value: 85, color: '#ec4899' },
                  ].map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item.label}>
                       <Box>
                          <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>{item.label}</Typography>
                          <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{item.value}</Typography>
                          <LinearProgress variant="determinate" value={(item.value / 450) * 100} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { bgcolor: item.color, borderRadius: 3 } }} />
                       </Box>
                    </Grid>
                  ))}
               </Grid>
            </Paper>
         </Grid>

         <Grid item xs={12} lg={4}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: '1px solid', borderColor: 'divider', mb: 4 }}>
               <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>Top Channels</Typography>
               <Stack spacing={3}>
                  {[
                    { name: "Direct Search", value: "45%", color: "#6366f1" },
                    { name: "Email Marketing", value: "28%", color: "#10b981" },
                    { name: "Social Media", value: "15%", color: "#f59e0b" },
                    { name: "Affiliates", value: "12%", color: "#ec4899" },
                  ].map((channel) => (
                    <Box key={channel.name}>
                       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>{channel.name}</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 800 }}>{channel.value}</Typography>
                       </Box>
                       <LinearProgress variant="determinate" value={parseInt(channel.value)} sx={{ height: 6, borderRadius: 3, bgcolor: 'rgba(0,0,0,0.05)', '& .MuiLinearProgress-bar': { bgcolor: channel.color, borderRadius: 3 } }} />
                    </Box>
                  ))}
                  <Divider sx={{ my: 1 }} />
                  <Button variant="outlined" fullWidth startIcon={<BarChart3 size={18} />} sx={{ borderRadius: 3 }}>Full Channel Report</Button>
               </Stack>
            </Paper>

            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: 'secondary.main', color: 'white' }}>
               <Stack spacing={2} sx={{ textAlign: 'center', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', width: 48, height: 48 }}>
                     <Users size={24} />
                  </Avatar>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>Customer Lifetime Value</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>$1,420</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                     Average revenue per customer over 12 months.
                  </Typography>
                  <Button variant="contained" sx={{ bgcolor: 'white', color: 'secondary.main', borderRadius: 3, fontWeight: 800, '&:hover': { bgcolor: '#f8fafc' } }}>
                     Analyze Churn
                  </Button>
               </Stack>
            </Paper>
         </Grid>
      </Grid>
    </Box>
  );
}
