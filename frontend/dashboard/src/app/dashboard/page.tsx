'use client';

import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Package,
  Calendar
} from "lucide-react";
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Avatar, 
  IconButton, 
  Stack, 
  Divider,
  Card,
  CardContent
} from "@mui/material";
import { formatCurrency } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { contactService } from "@/services/contact.service";
import { billingService } from "@/services/billing.service";
import { employeeService } from "@/services/employee.service";
import { useAuthStore } from "@/stores/auth.store";

export default function DashboardPage() {
  const { user } = useAuthStore();

  const { data: billingStats } = useQuery({
    queryKey: ['billing-stats'],
    queryFn: () => billingService.getStats(),
  });

  const { data: contactsResponse } = useQuery({
    queryKey: ['contacts-count'],
    queryFn: () => contactService.getContacts(),
  });

  const { data: employeesResponse } = useQuery({
    queryKey: ['employees-count'],
    queryFn: () => employeeService.getEmployees(),
  });

  const revenue = (billingStats?.data?.total_amount || 0) / 100;
  const contactsCount = contactsResponse?.data?.length || 0;
  const employeesCount = employeesResponse?.data?.length || 0;

  const stats = [
    { label: "Total Revenue", value: formatCurrency(revenue), change: "+12.5%", trending: "up", icon: DollarSign, color: '#6366f1' },
    { label: "Active Contacts", value: contactsCount, change: "+3.2%", trending: "up", icon: Users, color: '#ec4899' },
    { label: "Team Members", value: employeesCount, change: "Live", trending: "up", icon: Activity, color: '#10b981' },
    { label: "Bookings", value: "24", change: "New", trending: "up", icon: Calendar, color: '#f59e0b' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
          Good morning, {user?.name || 'Admin'}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Here's what's happening with your business today.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                borderRadius: 4, 
                border: '1px solid', 
                borderColor: 'divider',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(99, 102, 241, 0.02)' }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Avatar sx={{ bgcolor: `${stat.color}15`, color: stat.color, borderRadius: 2 }}>
                  <stat.icon size={24} />
                </Avatar>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  px: 1, 
                  py: 0.5, 
                  borderRadius: 2, 
                  bgcolor: stat.trending === 'up' ? 'success.light' : 'error.light',
                  color: stat.trending === 'up' ? 'success.dark' : 'error.dark',
                }}>
                  {stat.trending === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  <Typography variant="caption" sx={{ fontWeight: 700, ml: 0.5 }}>{stat.change}</Typography>
                </Box>
              </Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{stat.label}</Typography>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>{stat.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 5, border: '1px solid', borderColor: 'divider', height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper' }}>
             <Stack spacing={2} alignItems="center" sx={{ opacity: 0.5 }}>
                <TrendingUp size={48} color="#cbd5e1" />
                <Typography variant="h6" color="text.secondary">Revenue Analytics Chart</Typography>
                <Typography variant="caption" sx={{ maxWidth: 200, textAlign: 'center' }}>Dynamic chart integration pending data aggregation microservice.</Typography>
             </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} sx={{ p: 4, borderRadius: 5, border: '1px solid', borderColor: 'divider', height: 400, bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>Recent Activity</Typography>
            <Stack spacing={3}>
              {[1, 2, 3].map((i) => (
                <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                  <Avatar sx={{ width: 40, height: 40, bgcolor: 'primary.light', borderRadius: 2 }}>
                    <Activity size={20} />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>New Contact Added</Typography>
                    <Typography variant="caption" color="text.secondary">Jane Cooper joined your CRM • 2m ago</Typography>
                  </Box>
                </Box>
              ))}
              <Divider sx={{ my: 1 }} />
              <Button variant="text" size="small" endIcon={<ArrowUpRight size={16} />} sx={{ alignSelf: 'flex-start' }}>
                View all activity
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}


