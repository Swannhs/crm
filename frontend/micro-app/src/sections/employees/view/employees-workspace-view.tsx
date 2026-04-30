'use client';

import { useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';

import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';

import { Employee } from '../types';
import { employeesService } from '../services/employees-service';
import { EmployeesSummaryCards } from '../components/employees-summary-cards';
import { EmployeesDirectoryTable } from '../components/employees-directory-table';
import { EmployeesEmptyState, EmployeesErrorState, EmployeesUnavailableState } from '../components/employees-state';

const TABS = [
  'overview',
  'directory',
  'departments',
  'roles_access',
  'attendance',
  'time_off',
  'documents',
  'settings',
] as const;

type TabType = (typeof TABS)[number];

export function EmployeesWorkspaceView() {
  const [tab, setTab] = useState<TabType>('overview');
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [department, setDepartment] = useState('all');
  const [employmentType, setEmploymentType] = useState('all');
  const [openCreate, setOpenCreate] = useState(false);
  const [editEmployee, setEditEmployee] = useState<Employee | null>(null);
  const [form, setForm] = useState<any>({ firstName: '', lastName: '', email: '', phone: '', jobTitle: '', departmentId: '' });
  const [documentEmployeeId, setDocumentEmployeeId] = useState('');
  const [documentName, setDocumentName] = useState('');
  const [documentUrl, setDocumentUrl] = useState('');
  const [roleEmployeeId, setRoleEmployeeId] = useState('');
  const [selectedRoleId, setSelectedRoleId] = useState('');
  const [settingsForm, setSettingsForm] = useState({
    employmentTypes: '',
    attendanceRules: '',
    timeOffTypes: '',
    workWeek: '',
    documentTypes: '',
  });
  const [settingsFormError, setSettingsFormError] = useState('');
  const queryClient = useQueryClient();

  const employeesQuery = useQuery({
    queryKey: ['employees-directory', search, status],
    queryFn: () =>
      employeesService.getEmployees({
        page: 1,
        pageSize: 200,
        search,
        type: status === 'all' ? undefined : status,
      }),
  });

  const departmentsQuery = useQuery({
    queryKey: ['employees-departments'],
    queryFn: employeesService.getDepartments,
  });

  const summaryQuery = useQuery({
    queryKey: ['employees-summary'],
    queryFn: employeesService.getEmployeeSummary,
  });

  const attendanceQuery = useQuery({
    queryKey: ['employees-attendance'],
    queryFn: () => employeesService.getAttendance({ page: 1, pageSize: 100 }),
    enabled: tab === 'attendance' || tab === 'overview',
  });

  const timeOffQuery = useQuery({
    queryKey: ['employees-timeoff'],
    queryFn: () => employeesService.getTimeOffRequests({ page: 1, pageSize: 100 }),
    enabled: tab === 'time_off' || tab === 'overview',
  });

  const employeeDocumentsQuery = useQuery({
    queryKey: ['employee-documents', documentEmployeeId],
    queryFn: () => employeesService.getEmployeeDocuments(documentEmployeeId),
    enabled: tab === 'documents' && Boolean(documentEmployeeId),
  });

  const rolesQuery = useQuery({
    queryKey: ['employees-roles'],
    queryFn: employeesService.getRoles,
    enabled: tab === 'roles_access',
  });

  const settingsQuery = useQuery({
    queryKey: ['employees-settings'],
    queryFn: employeesService.getSettings,
    enabled: tab === 'settings',
  });

  const createMutation = useMutation({
    mutationFn: (payload: any) => employeesService.createEmployee(payload),
    onSuccess: async () => {
      setOpenCreate(false);
      setForm({ firstName: '', lastName: '', email: '', phone: '', jobTitle: '', departmentId: '' });
      await queryClient.invalidateQueries({ queryKey: ['employees-directory'] });
      await queryClient.invalidateQueries({ queryKey: ['employees-summary'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) => employeesService.updateEmployee(id, payload),
    onSuccess: async () => {
      setEditEmployee(null);
      await queryClient.invalidateQueries({ queryKey: ['employees-directory'] });
      await queryClient.invalidateQueries({ queryKey: ['employees-summary'] });
    },
  });

  const archiveMutation = useMutation({
    mutationFn: (id: string) => employeesService.archiveEmployee(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees-directory'] });
      await queryClient.invalidateQueries({ queryKey: ['employees-summary'] });
    },
  });

  const uploadDocumentMutation = useMutation({
    mutationFn: (payload: any) => employeesService.uploadEmployeeDocument(documentEmployeeId, payload),
    onSuccess: async () => {
      setDocumentName('');
      setDocumentUrl('');
      await queryClient.invalidateQueries({ queryKey: ['employee-documents', documentEmployeeId] });
    },
  });

  const deleteDocumentMutation = useMutation({
    mutationFn: (id: string) => employeesService.deleteEmployeeDocument(documentEmployeeId, id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employee-documents', documentEmployeeId] });
    },
  });

  const assignRoleMutation = useMutation({
    mutationFn: ({ employeeId, roleId }: { employeeId: string; roleId: string }) =>
      employeesService.assignRole(employeeId, roleId),
  });

  const saveSettingsMutation = useMutation({
    mutationFn: (payload: any) => employeesService.updateSettings(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['employees-settings'] });
    },
  });

  const filteredEmployees = useMemo(() => {
    const rows = employeesQuery.data?.data || [];
    return rows.filter((e) => {
      const departmentMatch = department === 'all' || e.departmentId === department;
      const employmentMatch = employmentType === 'all' || e.employmentType === employmentType;
      return departmentMatch && employmentMatch;
    });
  }, [employeesQuery.data?.data, department, employmentType]);

  const openCreateDialog = () => {
    setForm({ firstName: '', lastName: '', email: '', phone: '', jobTitle: '', departmentId: '' });
    setOpenCreate(true);
  };

  const openEditDialog = (employee: Employee) => {
    setEditEmployee(employee);
    setForm({
      firstName: employee.firstName || '',
      lastName: employee.lastName || '',
      email: employee.email || '',
      phone: employee.phone || '',
      jobTitle: employee.jobTitle || '',
      departmentId: employee.departmentId || '',
    });
  };

  const submitCreate = async () => {
    const fullName = `${form.firstName || ''} ${form.lastName || ''}`.trim();
    if (!fullName && !form.email) return;
    await createMutation.mutateAsync({
      name: fullName || form.email,
      work_email: form.email || undefined,
      work_phone: form.phone || undefined,
      job_title: form.jobTitle || undefined,
      department_id: form.departmentId ? Number(form.departmentId) : undefined,
    });
  };

  const submitEdit = async () => {
    if (!editEmployee) return;
    const fullName = `${form.firstName || ''} ${form.lastName || ''}`.trim();
    await updateMutation.mutateAsync({
      id: editEmployee.id,
      payload: {
        name: fullName || editEmployee.displayName,
        work_email: form.email || undefined,
        work_phone: form.phone || undefined,
        job_title: form.jobTitle || undefined,
        department_id: form.departmentId ? Number(form.departmentId) : undefined,
      },
    });
  };

  const unavailableBlock = (title: string, description: string) => (
    <EmployeesUnavailableState title={title} description={description} />
  );

  const parseSettingsField = (value: string, fieldName: string) => {
    const trimmed = value.trim();
    if (!trimmed) return undefined;
    try {
      return JSON.parse(trimmed);
    } catch {
      throw new Error(`${fieldName} must be valid JSON.`);
    }
  };

  return (
    <DashboardContent maxWidth="xl">
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" sx={{ mb: 3 }} spacing={2}>
        <Box>
          <Typography variant="h4" sx={{ mb: 0.5 }}>
            Employees
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Employee directory, attendance, time off, and operational HR management.
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<Iconify icon="solar:add-circle-bold" />} onClick={openCreateDialog}>
          New Employee
        </Button>
      </Stack>

      <Card sx={{ mb: 3 }}>
        <Tabs value={tab} onChange={(_, value) => setTab(value)} variant="scrollable" scrollButtons="auto">
          <Tab value="overview" label="Overview" />
          <Tab value="directory" label="Directory" />
          <Tab value="departments" label="Departments" />
          <Tab value="roles_access" label="Roles & Access" />
          <Tab value="attendance" label="Attendance" />
          <Tab value="time_off" label="Time Off" />
          <Tab value="documents" label="Documents" />
          <Tab value="settings" label="Settings" />
        </Tabs>
      </Card>

      {tab === 'overview' && (
        <Stack spacing={3}>
          {summaryQuery.isLoading ? <CircularProgress /> : <EmployeesSummaryCards summary={summaryQuery.data} />}
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2.5 }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Recently added employees</Typography>
                {(employeesQuery.data?.data || []).slice(0, 5).map((e) => (
                  <Typography key={e.id} variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    {e.displayName || `${e.firstName} ${e.lastName}`.trim() || e.email}
                  </Typography>
                ))}
                {(employeesQuery.data?.data || []).length === 0 && <Typography variant="body2" sx={{ color: 'text.secondary' }}>No employees found.</Typography>}
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2.5 }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Pending approvals</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {(timeOffQuery.data || []).filter((x) => x.status === 'pending').length} time-off request(s).
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2.5 }}>
                <Typography variant="subtitle2" sx={{ mb: 1.5 }}>Attendance exceptions</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {(attendanceQuery.data || []).filter((x) => !x.clockOut).length} open attendance session(s).
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      )}

      {tab === 'directory' && (
        <Card sx={{ p: 2.5 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 2 }}>
            <TextField size="small" label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            <FormControl size="small">
              <InputLabel>Status</InputLabel>
              <Select value={status} label="Status" onChange={(e) => setStatus(e.target.value as any)}>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small">
              <InputLabel>Department</InputLabel>
              <Select value={department} label="Department" onChange={(e) => setDepartment(String(e.target.value))}>
                <MenuItem value="all">All departments</MenuItem>
                {(departmentsQuery.data || []).map((d) => (
                  <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small">
              <InputLabel>Employment Type</InputLabel>
              <Select value={employmentType} label="Employment Type" onChange={(e) => setEmploymentType(String(e.target.value))}>
                <MenuItem value="all">All types</MenuItem>
                <MenuItem value="full_time">Full time</MenuItem>
                <MenuItem value="part_time">Part time</MenuItem>
                <MenuItem value="contractor">Contractor</MenuItem>
                <MenuItem value="intern">Intern</MenuItem>
                <MenuItem value="temporary">Temporary</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {employeesQuery.isLoading && <CircularProgress />}
          {employeesQuery.isError && (
            <EmployeesErrorState title="Directory unavailable" description="Unable to load employees right now." />
          )}
          {!employeesQuery.isLoading && !employeesQuery.isError && filteredEmployees.length === 0 && (
            <EmployeesEmptyState title="No employees found" description="Try adjusting your search or filters." />
          )}
          {!employeesQuery.isLoading && !employeesQuery.isError && filteredEmployees.length > 0 && (
            <EmployeesDirectoryTable
              rows={filteredEmployees}
              onEdit={openEditDialog}
              onArchive={(employee) => archiveMutation.mutate(employee.id)}
            />
          )}
        </Card>
      )}

      {tab === 'departments' && (
        <Card sx={{ p: 2.5 }}>
          {departmentsQuery.isLoading && <CircularProgress />}
          {departmentsQuery.isError && unavailableBlock('Departments unavailable', 'Department management endpoint is currently unavailable.')}
          {!departmentsQuery.isLoading && !departmentsQuery.isError && (departmentsQuery.data || []).length === 0 && (
            <EmployeesEmptyState title="No departments" description="Create a department to organize employees." />
          )}
          {!departmentsQuery.isLoading && !departmentsQuery.isError && (departmentsQuery.data || []).length > 0 && (
            <Stack spacing={1}>
              {departmentsQuery.data?.map((d) => (
                <Card key={d.id} variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2">{d.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Manager: {d.managerName || 'Unassigned'}
                  </Typography>
                </Card>
              ))}
            </Stack>
          )}
        </Card>
      )}

      {tab === 'roles_access' && (
        <Card sx={{ p: 2.5 }}>
          {rolesQuery.isLoading && <CircularProgress />}
          {rolesQuery.isError && unavailableBlock('Roles & access unavailable', 'Role and access management is not available yet.')}
          {!rolesQuery.isLoading && !rolesQuery.isError && (
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
                <FormControl size="small" sx={{ minWidth: 260 }}>
                  <InputLabel>Employee</InputLabel>
                  <Select value={roleEmployeeId} label="Employee" onChange={(e) => setRoleEmployeeId(String(e.target.value))}>
                    <MenuItem value="">Select employee</MenuItem>
                    {(employeesQuery.data?.data || []).map((e) => (
                      <MenuItem key={e.id} value={e.id}>
                        {e.displayName || `${e.firstName} ${e.lastName}`.trim() || e.email || e.id}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ minWidth: 260 }}>
                  <InputLabel>Role</InputLabel>
                  <Select value={selectedRoleId} label="Role" onChange={(e) => setSelectedRoleId(String(e.target.value))}>
                    <MenuItem value="">Select role</MenuItem>
                    {(rolesQuery.data || []).map((role) => (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  disabled={!roleEmployeeId || !selectedRoleId || assignRoleMutation.isPending}
                  onClick={() => assignRoleMutation.mutate({ employeeId: roleEmployeeId, roleId: selectedRoleId })}
                >
                  Assign role
                </Button>
              </Stack>

              {(rolesQuery.data || []).length === 0 && (
                <EmployeesEmptyState title="No roles available" description="No assignable roles were returned by the backend." />
              )}
            </Stack>
          )}
        </Card>
      )}

      {tab === 'attendance' && (
        <Card sx={{ p: 2.5 }}>
          {attendanceQuery.isLoading && <CircularProgress />}
          {attendanceQuery.isError && unavailableBlock('Attendance unavailable', 'Attendance service is currently unavailable.')}
          {!attendanceQuery.isLoading && !attendanceQuery.isError && (attendanceQuery.data || []).length === 0 && (
            <EmployeesEmptyState title="No attendance records" description="No attendance records were found for the selected range." />
          )}
          {!attendanceQuery.isLoading && !attendanceQuery.isError && (attendanceQuery.data || []).length > 0 && (
            <Stack spacing={1}>
              {(attendanceQuery.data || []).map((a) => (
                <Card key={a.id} variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2">{a.employeeName || 'Employee'}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    In: {a.clockIn || 'Unavailable'} | Out: {a.clockOut || 'Unavailable'} | Hours: {a.totalHours ?? 'Unavailable'}
                  </Typography>
                </Card>
              ))}
            </Stack>
          )}
        </Card>
      )}

      {tab === 'time_off' && (
        <Card sx={{ p: 2.5 }}>
          {timeOffQuery.isLoading && <CircularProgress />}
          {timeOffQuery.isError && unavailableBlock('Time off unavailable', 'Time off requests are currently unavailable.')}
          {!timeOffQuery.isLoading && !timeOffQuery.isError && (timeOffQuery.data || []).length === 0 && (
            <EmployeesEmptyState title="No time off requests" description="No pending or historical time off requests found." />
          )}
          {!timeOffQuery.isLoading && !timeOffQuery.isError && (timeOffQuery.data || []).length > 0 && (
            <Stack spacing={1}>
              {(timeOffQuery.data || []).map((t) => (
                <Card key={t.id} variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="subtitle2">{t.employeeName || 'Employee'} - {t.status}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {t.startDate} to {t.endDate}
                  </Typography>
                </Card>
              ))}
            </Stack>
          )}
        </Card>
      )}

      {tab === 'documents' && (
        <Card sx={{ p: 2.5 }}>
          <Stack spacing={2}>
            <FormControl size="small" sx={{ maxWidth: 360 }}>
              <InputLabel>Employee</InputLabel>
              <Select
                value={documentEmployeeId}
                label="Employee"
                onChange={(e) => setDocumentEmployeeId(String(e.target.value))}
              >
                <MenuItem value="">Select employee</MenuItem>
                {(employeesQuery.data?.data || []).map((e) => (
                  <MenuItem key={e.id} value={e.id}>
                    {e.displayName || `${e.firstName} ${e.lastName}`.trim() || e.email || e.id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {documentEmployeeId && (
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
                <TextField
                  size="small"
                  label="Document name"
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                />
                <TextField
                  size="small"
                  label="Document URL"
                  value={documentUrl}
                  onChange={(e) => setDocumentUrl(e.target.value)}
                  fullWidth
                />
                <Button
                  variant="contained"
                  onClick={() =>
                    uploadDocumentMutation.mutate({
                      name: documentName,
                      fileUrl: documentUrl,
                      type: 'other',
                    })
                  }
                  disabled={!documentName || !documentUrl || uploadDocumentMutation.isPending}
                >
                  Upload
                </Button>
              </Stack>
            )}

            {!documentEmployeeId && (
              <EmployeesEmptyState title="Select an employee" description="Choose an employee to manage documents." />
            )}

            {documentEmployeeId && employeeDocumentsQuery.isLoading && <CircularProgress />}
            {documentEmployeeId && employeeDocumentsQuery.isError && (
              <EmployeesErrorState title="Documents unavailable" description="Could not load employee documents." />
            )}
            {documentEmployeeId && !employeeDocumentsQuery.isLoading && !employeeDocumentsQuery.isError && (employeeDocumentsQuery.data || []).length === 0 && (
              <EmployeesEmptyState title="No documents" description="No documents are linked to this employee yet." />
            )}
            {documentEmployeeId && (employeeDocumentsQuery.data || []).length > 0 && (
              <Stack spacing={1}>
                {(employeeDocumentsQuery.data || []).map((doc: any) => (
                  <Card key={doc.id} variant="outlined" sx={{ p: 1.5 }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                      <Box>
                        <Typography variant="subtitle2">{doc.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {doc.fileUrl || 'Unavailable'}
                        </Typography>
                      </Box>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        {doc.fileUrl && (
                          <Button size="small" href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                            Open
                          </Button>
                        )}
                        <IconButton size="small" color="error" onClick={() => deleteDocumentMutation.mutate(doc.id)}>
                          <Iconify icon="solar:trash-bin-trash-bold" width={16} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            )}
          </Stack>
        </Card>
      )}
      {tab === 'settings' && (
        <Card sx={{ p: 2.5 }}>
          {settingsQuery.isLoading && <CircularProgress />}
          {settingsQuery.isError && unavailableBlock('Settings unavailable', 'Employee settings are not available yet.')}
          {!settingsQuery.isLoading && !settingsQuery.isError && (
            <Stack spacing={2}>
              <Alert severity="info">Enter JSON values for each setting. Leave blank to keep unchanged.</Alert>
              <TextField
                multiline
                minRows={2}
                label="Employment types"
                placeholder='["full_time","part_time","contractor"]'
                value={settingsForm.employmentTypes}
                onChange={(e) => setSettingsForm((prev) => ({ ...prev, employmentTypes: e.target.value }))}
              />
              <TextField
                multiline
                minRows={2}
                label="Attendance rules"
                placeholder='{"allowLateClockIn": true}'
                value={settingsForm.attendanceRules}
                onChange={(e) => setSettingsForm((prev) => ({ ...prev, attendanceRules: e.target.value }))}
              />
              <TextField
                multiline
                minRows={2}
                label="Time-off types"
                placeholder='["vacation","sick","unpaid"]'
                value={settingsForm.timeOffTypes}
                onChange={(e) => setSettingsForm((prev) => ({ ...prev, timeOffTypes: e.target.value }))}
              />
              <TextField
                multiline
                minRows={2}
                label="Work week"
                placeholder='{"days":["Mon","Tue","Wed","Thu","Fri"]}'
                value={settingsForm.workWeek}
                onChange={(e) => setSettingsForm((prev) => ({ ...prev, workWeek: e.target.value }))}
              />
              <TextField
                multiline
                minRows={2}
                label="Document types"
                placeholder='["contract","id","tax","certificate"]'
                value={settingsForm.documentTypes}
                onChange={(e) => setSettingsForm((prev) => ({ ...prev, documentTypes: e.target.value }))}
              />
              <Button
                variant="contained"
                disabled={saveSettingsMutation.isPending}
                onClick={() => {
                  try {
                    setSettingsFormError('');
                    const payload = {
                      employmentTypes: parseSettingsField(settingsForm.employmentTypes, 'Employment types'),
                      attendanceRules: parseSettingsField(settingsForm.attendanceRules, 'Attendance rules'),
                      timeOffTypes: parseSettingsField(settingsForm.timeOffTypes, 'Time-off types'),
                      workWeek: parseSettingsField(settingsForm.workWeek, 'Work week'),
                      documentTypes: parseSettingsField(settingsForm.documentTypes, 'Document types'),
                    };
                    saveSettingsMutation.mutate(payload);
                  } catch (error: any) {
                    setSettingsFormError(error?.message || 'Invalid settings payload');
                  }
                }}
              >
                Save settings
              </Button>
              {settingsFormError && <Alert severity="error">{settingsFormError}</Alert>}
            </Stack>
          )}
        </Card>
      )}

      <Dialog open={openCreate} onClose={() => setOpenCreate(false)} fullWidth maxWidth="sm">
        <DialogTitle>Create Employee</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="First name" value={form.firstName} onChange={(e) => setForm((prev: any) => ({ ...prev, firstName: e.target.value }))} />
            <TextField label="Last name" value={form.lastName} onChange={(e) => setForm((prev: any) => ({ ...prev, lastName: e.target.value }))} />
            <TextField label="Email" value={form.email} onChange={(e) => setForm((prev: any) => ({ ...prev, email: e.target.value }))} />
            <TextField label="Phone" value={form.phone} onChange={(e) => setForm((prev: any) => ({ ...prev, phone: e.target.value }))} />
            <TextField label="Job title" value={form.jobTitle} onChange={(e) => setForm((prev: any) => ({ ...prev, jobTitle: e.target.value }))} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCreate(false)}>Cancel</Button>
          <Button variant="contained" onClick={submitCreate} disabled={createMutation.isPending}>Create</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={Boolean(editEmployee)} onClose={() => setEditEmployee(null)} fullWidth maxWidth="sm">
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField label="First name" value={form.firstName} onChange={(e) => setForm((prev: any) => ({ ...prev, firstName: e.target.value }))} />
            <TextField label="Last name" value={form.lastName} onChange={(e) => setForm((prev: any) => ({ ...prev, lastName: e.target.value }))} />
            <TextField label="Email" value={form.email} onChange={(e) => setForm((prev: any) => ({ ...prev, email: e.target.value }))} />
            <TextField label="Phone" value={form.phone} onChange={(e) => setForm((prev: any) => ({ ...prev, phone: e.target.value }))} />
            <TextField label="Job title" value={form.jobTitle} onChange={(e) => setForm((prev: any) => ({ ...prev, jobTitle: e.target.value }))} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditEmployee(null)}>Cancel</Button>
          <Button variant="contained" onClick={submitEdit} disabled={updateMutation.isPending}>Save</Button>
        </DialogActions>
      </Dialog>

      {(createMutation.isError || updateMutation.isError || archiveMutation.isError) && (
        <Alert severity="error" sx={{ mt: 2 }}>
          One or more employee actions failed. Please verify required fields and try again.
        </Alert>
      )}
    </DashboardContent>
  );
}
