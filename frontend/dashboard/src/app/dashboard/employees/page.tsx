'use client';

import { 
  Users, 
  UserPlus, 
  Search, 
  MoreVertical, 
  Mail, 
  ShieldCheck,
  Activity,
  Calendar
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
            <Avatar sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: 'primary.main', width: 56, height: 56, borderRadius: 2 }}>
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
            <Avatar sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', color: 'success.main', width: 56, height: 56, borderRadius: 2 }}>
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
            <Avatar sx={{ bgcolor: 'rgba(100, 116, 139, 0.1)', color: 'secondary.main', width: 56, height: 56, borderRadius: 2 }}>
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
          ) : employees.length === 0 ? (
            <Box sx={{ p: 10, textAlign: 'center' }}>
              <Typography color="text.secondary">No team members found.</Typography>
            </Box>
          ) : (
            <Table>
              <TableHead sx={{ bgcolor: 'rgba(0,0,0,0.02)' }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Member</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Job Title</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Department</TableCell>
                  <TableCell sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Status</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 11, letterSpacing: 1 }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar 
                          sx={{ 
                            width: 40, height: 40, borderRadius: '12px',
                            bgcolor: 'primary.light', fontWeight: 700, fontSize: 14
                          }}
                        >
                          {employee.firstName ? employee.firstName[0] : 'E'}
                          {employee.lastName ? employee.lastName[0] : ''}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                            {employee.firstName} {employee.lastName}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Mail size={12} /> {employee.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>{employee.jobTitle}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">{employee.department}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={employee.status} 
                        size="small"
                        sx={{ 
                          fontWeight: 700, textTransform: 'uppercase', fontSize: 10,
                          borderRadius: 1.5,
                          bgcolor: employee.status === 'active' ? 'success.light' : 'action.selected',
                          color: employee.status === 'active' ? 'success.dark' : 'text.secondary',
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small">
                        <MoreVertical size={20} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </Paper>
    </Box>
  );
}
