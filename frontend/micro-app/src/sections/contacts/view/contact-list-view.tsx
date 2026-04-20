'use client';

import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Menu from '@mui/material/Menu';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
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
import CircularProgress from '@mui/material/CircularProgress';

import { useBoolean } from 'src/hooks/use-boolean';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { DashboardContent } from 'src/layouts/dashboard';
import { contactService } from 'src/services/contact-service';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { Form, RHFTextField } from 'src/components/hook-form';
import { showToast } from 'src/components/toast';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'fullName', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'phone', label: 'Phone' },
  { id: 'status', label: 'Status' },
  { id: 'action', label: 'Action', align: 'right' as const },
];

export const NewContactSchema = zod.object({
  fullName: zod.string().min(1, { message: 'Full name is required!' }),
  email: zod.string().min(1, { message: 'Email is required!' }).email({ message: 'Email must be a valid email address!' }),
  phone: zod.string().min(1, { message: 'Phone number is required!' }),
});

// ----------------------------------------------------------------------

export function ContactListView() {
  const [search, setSearch] = useState('');
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const router = useRouter();
  const quickEdit = useBoolean();

  const { data: contactsData, isLoading, refetch } = useQuery({
    queryKey: ['contacts', search],
    queryFn: () => contactService.getContacts({ search }),
  });

  const contacts = contactsData || [];

  const methods = useForm({
    resolver: zodResolver(NewContactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const created = await contactService.createContact(data);
      const createdId = created?._id ?? created?.id;
      reset();
      quickEdit.onFalse();
      await refetch();
      showToast({ message: 'Contact created successfully.', severity: 'success' });

      if (createdId) {
        router.push(paths.dashboard.contactView(createdId, 'overview'));
      }
    } catch (error) {
      console.error(error);
    }
  });

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, contactId: string) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedContactId(contactId);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
    setSelectedContactId(null);
  };

  const handleOpenContact = (mode: string = 'overview') => {
    if (!selectedContactId) return;
    router.push(paths.dashboard.contactView(selectedContactId, mode));
    handleCloseMenu();
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Contacts</Typography>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={quickEdit.onTrue}
        >
          New Contact
        </Button>
      </Box>

      <Card>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search contacts..."
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
                    {contacts.map((row: any) => (
                      <TableRow key={row._id} hover>
                        <TableCell>
                          <Typography
                            variant="subtitle2"
                            onClick={() => router.push(paths.dashboard.contactView(row._id, 'overview'))}
                            sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                          >
                            {row.fullName}
                          </Typography>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phone}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell align="right">
                          <IconButton onClick={(event) => handleOpenMenu(event, row._id)}>
                            <Iconify icon="solar:menu-dots-bold" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}

                    {contacts.length === 0 && !isLoading && (
                      <TableRow>
                        <TableCell colSpan={5} align="center" sx={{ py: 10 }}>
                          <Typography variant="h6">No data found</Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </>
                )}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
      </Card>

      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => handleOpenContact('overview')}>View details</MenuItem>
        <MenuItem onClick={() => handleOpenContact('invoices')}>View invoices</MenuItem>
        <MenuItem onClick={() => handleOpenContact('notes')}>View notes</MenuItem>
        <MenuItem onClick={() => handleOpenContact('tasks')}>View tasks</MenuItem>
      </Menu>

      <Dialog fullWidth maxWidth="sm" open={quickEdit.value} onClose={quickEdit.onFalse}>
        <Form methods={methods} onSubmit={onSubmit}>
          <DialogTitle>New Contact</DialogTitle>

          <DialogContent>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, 1fr)' }}
              sx={{ p: 3 }}
            >
              <RHFTextField name="fullName" label="Full Name" />
              <RHFTextField name="email" label="Email Address" />
              <RHFTextField name="phone" label="Phone Number" />
            </Box>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" onClick={quickEdit.onFalse}>
              Cancel
            </Button>

            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Create
            </LoadingButton>
          </DialogActions>
        </Form>
      </Dialog>
    </DashboardContent>
  );
}
