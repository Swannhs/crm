'use client';

import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';
import TablePagination from '@mui/material/TablePagination';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter, usePathname, useSearchParams } from 'src/routes/hooks';

import { useBoolean } from 'src/hooks/use-boolean';

import { DashboardContent } from 'src/layouts/dashboard';
import { contactService } from 'src/services/contact-service';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';
import { Scrollbar } from 'src/components/scrollbar';
import { Form, RHFSwitch, RHFTextField } from 'src/components/hook-form';

import { ContactGraph } from '../components/contact-graph';
import { ContactKanban } from '../components/contact-kanban';
import ContactImportDialog from '../components/contact-import-dialog';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'fullName', label: 'Name' },
  { id: 'contactType', label: 'Type' },
  { id: 'phone', label: 'Phone' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action', align: 'right' as const },
];

export const NewContactSchema = zod.object({
  fullName: zod.string().min(1, { message: 'Full name is required!' }),
  email: zod.string().min(1, { message: 'Email is required!' }).email({ message: 'Email must be a valid email address!' }),
  phone: zod.string().min(1, { message: 'Phone number is required!' }),
  mobile: zod.string().optional(),
  isCompany: zod.boolean().default(false),
  street: zod.string().optional(),
  city: zod.string().optional(),
  vat: zod.string().optional(),
});

// ----------------------------------------------------------------------

export function ContactListView() {
  const [search, setSearch] = useState('');
  const [currentTab, setCurrentTab] = useState('all');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedContact, setSelectedContact] = useState<any>(null);
  
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const viewMode = searchParams.get('view') === 'kanban'
    ? 'kanban'
    : searchParams.get('view') === 'graph'
      ? 'graph'
      : 'list';

  const quickEdit = useBoolean();
  const deleteConfirm = useBoolean();
  const importDialog = useBoolean();

  const backendFilterType = currentTab === 'all'
    ? undefined
    : currentTab;

  const { data: contactsPageData, isLoading, refetch } = useQuery({
    queryKey: ['contacts', search, currentTab, page, rowsPerPage],
    queryFn: () =>
      contactService.getContactsPaginated({
        search,
        type: backendFilterType,
        page: page + 1,
        pageSize: rowsPerPage,
      }),
  });

  useEffect(() => {
    setPage(0);
  }, [search, currentTab]);

  const contacts = useMemo(() => contactsPageData?.data || [], [contactsPageData]);
  const totalContactsFiltered = contactsPageData?.total ?? 0;

  const { data: graphAnalyticsData, isLoading: isGraphLoading, refetch: refetchGraph } = useQuery({
    queryKey: ['contacts-graph', search, currentTab],
    queryFn: () =>
      contactService.getContactsAnalytics({
        search,
        type: backendFilterType,
      }),
  });

  const { data: summaryContactsData, refetch: refetchSummary } = useQuery({
    queryKey: ['contacts-summary'],
    queryFn: () =>
      contactService.getContacts({
        search: '',
        type: undefined,
        page: 1,
        pageSize: 200,
      }),
  });
  const summaryContacts = useMemo(() => summaryContactsData || [], [summaryContactsData]);

  // Summary stats (global, not tab-dependent)
  const totalContacts = summaryContacts.length;
  const leadCount = summaryContacts.filter((c: any) => String(c.contactType?.[0] || '').toLowerCase() === 'lead' || c.status === 'lead').length;
  const memberCount = summaryContacts.filter((c: any) => String(c.contactType?.[0] || '').toLowerCase() === 'member' || c.status === 'member').length;
  const employeeCount = summaryContacts.filter((c: any) => String(c.contactType?.[0] || '').toLowerCase() === 'employee' || c.status === 'employee').length;

  const methods = useForm({
    resolver: zodResolver(NewContactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      mobile: '',
      isCompany: false,
      street: '',
      city: '',
      vat: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
    watch,
    setValue,
  } = methods;

  const isCompany = watch('isCompany');

  useEffect(() => {
    const handleRefetch = () => {
      refetch();
      refetchGraph();
      refetchSummary();
    };
    window.addEventListener('REFETCH_CONTACTS', handleRefetch);
    return () => {
      window.removeEventListener('REFETCH_CONTACTS', handleRefetch);
    };
  }, [refetch, refetchGraph, refetchSummary]);

  useEffect(() => {
    setPage(0);
  }, [search, currentTab, rowsPerPage]);

  const onChangeView = useCallback((newView: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newView === 'kanban' || newView === 'graph') {
      params.set('view', newView);
    } else {
      params.delete('view');
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (selectedContact) {
        // We'll need updateContact in contactService
        await contactService.updateContact(selectedContact.id || selectedContact._id, data);
        showToast({ message: 'Contact updated successfully.', severity: 'success' });
      } else {
        await contactService.createContact(data);
        showToast({ message: 'Contact created successfully.', severity: 'success' });
      }
      reset();
      quickEdit.onFalse();
      setSelectedContact(null);
      await refetch();
      await refetchGraph();
      await refetchSummary();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to save contact';
      showToast({ message, severity: 'warning' });
    }
  });

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, contact: any) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedContact(contact);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleOpenContact = (mode: string = 'overview') => {
    if (!selectedContact) return;
    router.push(paths.dashboard.contactView(selectedContact._id || selectedContact.id, mode));
    handleCloseMenu();
  };

  const handleEditContact = () => {
    if (!selectedContact) return;
    setValue('fullName', selectedContact.name || selectedContact.fullName);
    setValue('email', selectedContact.email);
    setValue('phone', selectedContact.phone);
    setValue('mobile', selectedContact.mobile || '');
    setValue('isCompany', selectedContact.is_company || selectedContact.isCompany || false);
    setValue('street', selectedContact.street || '');
    setValue('city', selectedContact.city || '');
    setValue('vat', selectedContact.vat || '');
    quickEdit.onTrue();
    handleCloseMenu();
  };

  const handleDeleteContact = async () => {
    try {
      await contactService.deleteContact(selectedContact.id || selectedContact._id);
      showToast({ message: 'Contact deleted successfully.', severity: 'success' });
      deleteConfirm.onFalse();
      setSelectedContact(null);
      await refetch();
      await refetchGraph();
      await refetchSummary();
    } catch (error) {
      showToast({ message: 'Failed to delete contact', severity: 'warning' });
    }
  };

  const handleAddContact = useCallback(() => {
    setSelectedContact(null);
    reset();
    quickEdit.onTrue();
  }, [reset, quickEdit]);

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Contact Manager</Typography>
        <Stack direction="row" spacing={1.5}>
           <ToggleButtonGroup
             size="small"
             value={viewMode}
             exclusive
             onChange={(e, val) => val && onChangeView(val)}
             sx={{ mr: 1 }}
           >
             <ToggleButton value="list">
               <Iconify icon="solar:list-bold" />
             </ToggleButton>
             <ToggleButton value="kanban">
               <Iconify icon="solar:clapperboard-edit-bold" />
             </ToggleButton>
             <ToggleButton value="graph">
               <Iconify icon="solar:chart-2-bold" />
             </ToggleButton>
           </ToggleButtonGroup>
           
           <Button
             variant="soft"
             color="inherit"
             startIcon={<Iconify icon="solar:import-bold" />}
             onClick={importDialog.onTrue}
           >
             Import
           </Button>
           <Button
             variant="contained"
             startIcon={<Iconify icon="solar:add-circle-bold" />}
             onClick={handleAddContact}
           >
             New Contact
           </Button>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard title="Total Contacts" count={totalContacts} icon="solar:users-group-rounded-bold" color="primary" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard title="Active Leads" count={leadCount} icon="solar:user-plus-bold" color="warning" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard title="Members" count={memberCount} icon="solar:medal-star-bold" color="info" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard title="Employees" count={employeeCount} icon="solar:history-bold" color="success" />
        </Grid>
      </Grid>

      {viewMode !== 'kanban' && (
        <Tabs
          value={currentTab}
          onChange={(e, val) => setCurrentTab(val)}
          sx={{ mb: 3 }}
        >
          <Tab label="All" value="all" />
          <Tab label="Leads" value="lead" />
          <Tab label="Members" value="member" />
          <Tab label="Clients" value="client" />
          <Tab label="Vendors" value="vendor" />
          <Tab label="Employees" value="employee" />
        </Tabs>
      )}

      {viewMode === 'kanban' ? (
        <ContactKanban 
          contacts={contacts} 
          isLoading={isLoading} 
          onAddContact={handleAddContact}
          onEditContact={(contact) => {
            setSelectedContact(contact);
            handleEditContact();
          }}
          onDeleteContact={(contact) => {
            setSelectedContact(contact);
            deleteConfirm.onTrue();
          }}
          onViewContact={(contact) => {
            setSelectedContact(contact);
            handleOpenContact('overview');
          }}
        />
      ) : viewMode === 'graph' ? (
        <ContactGraph analytics={graphAnalyticsData} isLoading={isGraphLoading} />
      ) : (
        <Card>
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search leads, members, or clients..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="solar:magnifer-bold" sx={{ color: 'text.disabled' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <Scrollbar>
              <Table sx={{ minWidth: 800 }}>
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
                    [...Array(5)].map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Skeleton variant="circular" width={40} height={40} />
                            <Box sx={{ width: 1 }}>
                              <Skeleton variant="text" width="60%" />
                              <Skeleton variant="text" width="40%" />
                            </Box>
                          </Stack>
                        </TableCell>
                        <TableCell><Skeleton variant="text" width={60} /></TableCell>
                        <TableCell><Skeleton variant="text" width={100} /></TableCell>
                        <TableCell><Skeleton variant="text" width={60} /></TableCell>
                        <TableCell align="right"><Skeleton variant="circular" width={32} height={32} /></TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <>
                      {contacts.map((row: any) => (
                        <TableRow key={row._id || row.id} hover>
                          <TableCell onClick={() => router.push(paths.dashboard.contactView(row._id || row.id, 'overview'))} sx={{ cursor: 'pointer' }}>
                             <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar src={row.photo} alt={row.fullName}>
                                   {row.fullName?.charAt(0).toUpperCase()}
                                </Avatar>
                                <Box>
                                   <Typography variant="subtitle2" sx={{ '&:hover': { textDecoration: 'underline' } }}>
                                      {row.fullName}
                                   </Typography>
                                   <Typography variant="caption" sx={{ color: 'text.secondary' }}>{row.email}</Typography>
                                </Box>
                             </Stack>
                          </TableCell>
                          <TableCell>
                             <Label variant="soft" color="info">
                                {row.contactType?.[0] || 'Member'}
                             </Label>
                          </TableCell>
                          <TableCell>{row.phone}</TableCell>
                          <TableCell>
                             <Label variant="soft" color={row.status === 'active' ? 'success' : 'warning'}>
                                {row.status || 'active'}
                             </Label>
                          </TableCell>
                          <TableCell align="right">
                            <IconButton onClick={(event) => handleOpenMenu(event, row)}>
                              <Iconify icon="solar:menu-dots-bold" />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}

                      {contacts.length === 0 && !isLoading && (
                        <TableRow>
                          <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                            <Box sx={{ textAlign: 'center' }}>
                              <Iconify icon="solar:users-group-rounded-bold" width={64} sx={{ color: 'text.disabled', mb: 2 }} />
                              <Typography variant="h6" sx={{ color: 'text.secondary' }}>No contacts found</Typography>
                              <Typography variant="body2" sx={{ color: 'text.disabled' }}>Try adjusting your search or filters</Typography>
                            </Box>
                          </TableCell>
                        </TableRow>
                      )}
                    </>
                  )}
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
          <TablePagination
            component="div"
            count={totalContactsFiltered}
            page={page}
            onPageChange={(_event, newPage) => setPage(newPage)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
            }}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </Card>
      )}

      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => handleOpenContact('overview')}>
           <Iconify icon="solar:eye-bold" sx={{ mr: 1 }} /> View details
        </MenuItem>
        <MenuItem onClick={handleEditContact}>
           <Iconify icon="solar:pen-bold" sx={{ mr: 1 }} /> Edit contact
        </MenuItem>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem onClick={() => { deleteConfirm.onTrue(); handleCloseMenu(); }} sx={{ color: 'error.main' }}>
           <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 1 }} /> Delete contact
        </MenuItem>
      </Menu>

      <Dialog fullWidth maxWidth="sm" open={quickEdit.value} onClose={() => { quickEdit.onFalse(); setSelectedContact(null); }}>
        <Form methods={methods} onSubmit={onSubmit}>
          <DialogTitle>{selectedContact ? 'Edit Contact' : 'New Contact'}</DialogTitle>

          <DialogContent>
            <Stack spacing={3} sx={{ p: 3 }}>
              <Box
                display="grid"
                rowGap={3}
                columnGap={2}
                gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}
              >
                <RHFTextField name="fullName" label={isCompany ? "Company Name" : "Full Name"} />
                <RHFTextField name="email" label="Email Address" />
                <RHFTextField name="phone" label="Phone" />
                <RHFTextField name="mobile" label="Mobile" />
              </Box>

              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2">Individual</Typography>
                <RHFSwitch name="isCompany" label="" sx={{ m: 0 }} />
                <Typography variant="body2">Company</Typography>
              </Stack>

              <Box
                display="grid"
                rowGap={3}
                columnGap={2}
                gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}
              >
                <RHFTextField name="street" label="Street" />
                <RHFTextField name="city" label="City" />
                <RHFTextField name="vat" label="Tax ID (VAT)" />
              </Box>
            </Stack>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={() => { quickEdit.onFalse(); setSelectedContact(null); }}>
              Cancel
            </Button>

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              {selectedContact ? 'Update Contact' : 'Create Contact'}
            </LoadingButton>
          </DialogActions>
        </Form>
      </Dialog>

      <Dialog open={deleteConfirm.value} onClose={deleteConfirm.onFalse}>
        <DialogTitle>Delete Contact?</DialogTitle>
        <DialogContent>
          Are you sure you want to permanently delete <b>{selectedContact?.fullName}</b>? 
          This action will remove all associated data including invoices and activities.
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteConfirm.onFalse}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleDeleteContact}>Delete Permanently</Button>
        </DialogActions>
      </Dialog>

      <ContactImportDialog 
        open={importDialog.value} 
        onClose={importDialog.onFalse} 
        onRefresh={refetch} 
      />
    </DashboardContent>
  );
}

function SummaryCard({ title, count, icon, color }: any) {
  return (
    <Card sx={{ p: 3, display: 'flex', alignItems: 'center', bgcolor: `${color}.lighter`, color: `${color}.darker` }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>{title}</Typography>
        <Typography variant="h3">{count}</Typography>
      </Box>
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: `${color}.main`,
          color: 'common.white',
          boxShadow: (theme) => `0 8px 16px 0 ${theme.palette[color as 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error'].main}24`,
        }}
      >
        <Iconify icon={icon} width={32} />
      </Box>
    </Card>
  );
}
