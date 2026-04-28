'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';
import TablePagination from '@mui/material/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';

import { DashboardContent } from 'src/layouts/dashboard';
import { employeeService } from 'src/services/employee-service';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Employee' },
  { id: 'email', label: 'Email' },
  { id: 'shifts', label: 'Total Shifts' },
  { id: 'categories', label: 'Categories' },
  { id: 'action', label: 'Action', align: 'right' as const },
];

// ----------------------------------------------------------------------

export function EmployeeListView() {
  const [viewTab, setViewTab] = useState<'employees' | 'attendance' | 'leave' | 'shifts'>('employees');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [statusTab, setStatusTab] = useState<'all' | 'active' | 'inactive'>('all');
  
  const { data: response, isLoading, error } = useQuery({
    queryKey: ['employees', search, page, rowsPerPage, statusTab],
    queryFn: () => employeeService.getEmployees({
        page: page + 1,
        pageSize: rowsPerPage,
        search,
        type: statusTab === 'all' ? undefined : statusTab,
    }),
    enabled: viewTab === 'employees',
  });

  const { data: attendanceResponse, isLoading: isAttendanceLoading } = useQuery({
    queryKey: ['employee-attendance', search],
    queryFn: () => employeeService.getAttendance({ page: 1, pageSize: 20, search }),
    enabled: viewTab === 'attendance',
  });

  const { data: leaveResponse, isLoading: isLeaveLoading } = useQuery({
    queryKey: ['employee-leaves'],
    queryFn: () => employeeService.getLeaveRequests({ page: 1, pageSize: 20 }),
    enabled: viewTab === 'leave',
  });

  const { data: shiftsResponse, isLoading: isShiftsLoading } = useQuery({
    queryKey: ['employee-shifts'],
    queryFn: () => employeeService.getShifts({ page: 1, pageSize: 20 }),
    enabled: viewTab === 'shifts',
  });

  const employees = response?.data || [];
  const total = response?.total || 0;
  const attendance = attendanceResponse?.data || [];
  const leaves = leaveResponse?.data || [];
  const shifts = shiftsResponse?.data || [];

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Employees</Typography>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New Schedule
        </Button>
      </Box>

      <Card>
        <Box sx={{ p: 2 }}>
          <Tabs
            value={viewTab}
            onChange={(_, value) => {
              setViewTab(value);
              setPage(0);
            }}
            sx={{ mb: 2 }}
          >
            <Tab value="employees" label="Employees" />
            <Tab value="attendance" label="Attendance" />
            <Tab value="leave" label="Leave Requests" />
            <Tab value="shifts" label="Shifts" />
          </Tabs>

          {viewTab === 'employees' ? (
            <Tabs
              value={statusTab}
              onChange={(_, value) => {
                setStatusTab(value);
                setPage(0);
              }}
              sx={{ mb: 2 }}
            >
              <Tab value="all" label="All" />
              <Tab value="active" label="Active" />
              <Tab value="inactive" label="Inactive" />
            </Tabs>
          ) : null}

          <TextField
            fullWidth
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            placeholder="Search employees..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <Scrollbar>
            <Table sx={{ minWidth: 800 }}>
              {viewTab === 'employees' ? (
                <>
                  <TableHead>
                    <TableRow>
                      {TABLE_HEAD.map((headCell) => (
                        <TableCell key={headCell.id} align={headCell.align}>
                          {headCell.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                          <CircularProgress />
                        </TableCell>
                      </TableRow>
                    ) : (
                      <>
                        {employees.map((row: any) => (
                          <TableRow key={row._id} hover>
                            <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                              <Avatar alt={row.fullName} src={row.photo} sx={{ mr: 2 }} />
                              {row.fullName}
                            </TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>{row.totalShifts}</TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                                {row.categories?.map((cat: any) => (
                                  <Chip key={cat._id} label={cat.name} size="small" variant="outlined" />
                                ))}
                              </Box>
                            </TableCell>
                            <TableCell align="right">
                              <IconButton>
                                <Iconify icon="eva:more-vertical-fill" />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                        {employees.length === 0 && !isLoading && (
                          <TableRow>
                            <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                              <Typography variant="h6">No data found</Typography>
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    )}
                  </TableBody>
                </>
              ) : null}

              {viewTab === 'attendance' ? (
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Check In</TableCell>
                      <TableCell>Check Out</TableCell>
                      <TableCell>Worked Hours</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isAttendanceLoading ? (
                      <TableRow>
                        <TableCell colSpan={4} align="center" sx={{ py: 10 }}>
                          <CircularProgress />
                        </TableCell>
                      </TableRow>
                    ) : attendance.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={4} align="center" sx={{ py: 10 }}>
                          <Typography variant="h6">No attendance records</Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      attendance.map((row: any) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.employee_id?.[1] || '-'}</TableCell>
                          <TableCell>{row.check_in || '-'}</TableCell>
                          <TableCell>{row.check_out || '-'}</TableCell>
                          <TableCell>{row.worked_hours ?? 0}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </>
              ) : null}

              {viewTab === 'leave' ? (
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>From</TableCell>
                      <TableCell>To</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isLeaveLoading ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                          <CircularProgress />
                        </TableCell>
                      </TableRow>
                    ) : leaves.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                          <Typography variant="h6">No leave requests</Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      leaves.map((row: any) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.employee_id?.[1] || '-'}</TableCell>
                          <TableCell>{row.holiday_status_id?.[1] || '-'}</TableCell>
                          <TableCell>{row.request_date_from || '-'}</TableCell>
                          <TableCell>{row.request_date_to || '-'}</TableCell>
                          <TableCell>{row.state || '-'}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </>
              ) : null}

              {viewTab === 'shifts' ? (
                <>
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Start</TableCell>
                      <TableCell>End</TableCell>
                      <TableCell>Hours</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isShiftsLoading ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                          <CircularProgress />
                        </TableCell>
                      </TableRow>
                    ) : shifts.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                          <Typography variant="h6">No shifts found</Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      shifts.map((row: any) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.employee_id?.[1] || '-'}</TableCell>
                          <TableCell>{row.name || '-'}</TableCell>
                          <TableCell>{row.start_datetime || '-'}</TableCell>
                          <TableCell>{row.end_datetime || '-'}</TableCell>
                          <TableCell>{row.allocated_hours ?? 0}</TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </>
              ) : null}
            </Table>
          </Scrollbar>
        </TableContainer>

        {error ? (
          <Box sx={{ px: 2, pb: 2 }}>
            <Alert severity="error">Failed to load employees. Please refresh.</Alert>
          </Box>
        ) : null}

        {viewTab === 'employees' ? (
          <TablePagination
            component="div"
            count={total}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
            rowsPerPageOptions={[10, 20, 50]}
          />
        ) : null}
      </Card>
    </DashboardContent>
  );
}
