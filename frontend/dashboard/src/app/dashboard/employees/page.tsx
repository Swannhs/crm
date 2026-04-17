'use client';

import { 
  Users, 
  UserPlus, 
  Search, 
  MoreVertical, 
  Mail, 
  ShieldCheck,
  Activity
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
  CircularProgress
} from "@mui/material";
import { employeeService } from "@/services/employee.service";
import { useQuery } from "@tanstack/react-query";

export default function EmployeesPage() {
  const { data: employeesResponse, isLoading, error } = useQuery({
    queryKey: ['employees'],
    queryFn: () => employeeService.getEmployees(),
  });

  const employees = employeesResponse?.data || [];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: -1 }}>
            Team Directory
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            Manage your workforce, roles, and organizational structure.
          </Typography>
        </Box>
        <Button 
          variant="contained" 
          startIcon={<UserPlus size={20} />}
          sx={{ py: 1.5, px: 3, borderRadius: 3 }}
        >
          Add Employee
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar sx={{ bgcolor: 'primary.light', width: 56, height: 56, borderRadius: 2 }}>
              <Users size={32} />
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>{employees.length}</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>Total Staff</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar sx={{ bgcolor: 'success.light', color: 'success.dark', width: 56, height: 56, borderRadius: 2 }}>
              <ShieldCheck size={32} />
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>{employees.filter(e => e.status === 'active').length}</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>Active Now</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar sx={{ bgcolor: 'secondary.light', color: 'secondary.dark', width: 56, height: 56, borderRadius: 2 }}>
              <Activity size={32} />
            </Avatar>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>98%</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase' }}>Retention Rate</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Paper 
        elevation={0} 
        sx={{ 
          borderRadius: 4, 
          overflow: 'hidden', 
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
             variant="outlined"
             placeholder="Search team members..."
             size="small"
             sx={{ maxWidth: 400, flexGrow: 1 }}
             InputProps={{
               startAdornment: (
                 <InputAdornment position="start">
                   <Search size={18} />
                 </InputAdornment>
               ),
               sx: { borderRadius: 3, bgcolor: 'rgba(0,0,0,0.02)' }
             }}
          />
        </Box>

        <TableContainer>
          {isLoading ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <CircularProgress size={30} sx={{ mb: 2 }} />
              <Typography color="text.secondary">Fetching team data...</Typography>
            </Box>
          ) : error ? (
            <Box sx={{ p: 10, textAlign: 'center', color: 'error.main' }}>
              <Typography>Error syncing with Employee microservice.</Typography>
            </Box>
          ) : (
            employees.map((emp) => (
              <div key={emp.id} className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10 flex items-center justify-center font-bold text-primary">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-primary transition-colors">Employee {emp.id.substring(0, 8)}</h4>
                    <div className="flex items-center gap-3 mt-0.5">
                      <span className="flex items-center gap-1 text-xs text-slate-500 font-medium lowercase">
                        <Briefcase className="w-3 h-3" /> {emp.jobTitle || 'No Title'}
                      </span>
                      <span className="text-slate-700">•</span>
                      <span className="text-xs text-slate-500 font-medium uppercase">{emp.department || 'No Dept'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-12">
                  <div className="text-center">
                    <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest mb-1">Status</p>
                    <p className={cn(
                      "font-bold capitalize",
                      emp.status === 'active' ? "text-emerald-400" : "text-slate-500"
                    )}>{emp.status}</p>
                  </div>
                  <button className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-primary hover:text-white transition-all">
                    <Calendar className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

