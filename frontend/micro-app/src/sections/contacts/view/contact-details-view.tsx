'use client';

import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { contactService } from 'src/services/contact-service';
import { billingService } from 'src/services/billing-service';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';
import { DashboardContent } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

type Props = {
  id: string;
  mode?: string;
};

export function ContactDetailsView({ id, mode = 'overview' }: Props) {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(mode);
  const [editOpen, setEditOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editValues, setEditValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    status: 'active',
  });

  const { data: contact, isLoading: contactLoading, refetch: refetchContact } = useQuery({
    queryKey: ['contact', id],
    queryFn: () => contactService.getContact(id),
  });

  const { data: invoices, isLoading: invoicesLoading } = useQuery({
    queryKey: ['contact-invoices', id],
    queryFn: () => billingService.getInvoices({ contactId: id }),
    enabled: currentTab === 'invoices',
  });

  useEffect(() => {
    setCurrentTab(mode);
  }, [mode]);

  useEffect(() => {
    if (!contact) return;

    setEditValues({
      fullName: contact.fullName || '',
      email: contact.email || '',
      phone: contact.phone || '',
      status: contact.status || 'active',
    });
  }, [contact]);

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
    router.push(paths.dashboard.contactView(id, newValue));
  }, [id, router]);

  const handleEditValueChange =
    (field: 'fullName' | 'email' | 'phone' | 'status') =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditValues((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSaveContact = async () => {
    try {
      setIsSaving(true);
      await contactService.updateContact(id, editValues);
      await refetchContact();
      setEditOpen(false);
      showToast({ message: 'Contact updated successfully.', severity: 'success' });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  if (contactLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!contact) {
    return <Typography variant="h5">Contact not found</Typography>;
  }

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={() => router.push(paths.dashboard.contacts)}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4">Contact Details</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
              src={contact.photo}
              alt={contact.fullName}
              sx={{ width: 120, height: 120, mx: 'auto', mb: 3 }}
            >
              {contact.fullName.charAt(0).toUpperCase()}
            </Avatar>

            <Typography variant="h6">{contact.fullName}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {contact.email || 'No email on file'}
            </Typography>

            <Stack direction="row" justifyContent="center" spacing={1} sx={{ mb: 3 }}>
              <Label color="success" variant="soft">
                {contact.status || 'active'}
              </Label>
              <Label color="info" variant="soft">
                {contact.contactType?.[0] || 'Client'}
              </Label>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

            <Stack spacing={2} sx={{ textAlign: 'left' }}>
              <Stack direction="row" spacing={1}>
                <Iconify icon="solar:phone-bold" />
                <Typography variant="body2">{contact.phone || 'No phone on file'}</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Iconify icon="solar:calendar-bold" />
                <Typography variant="body2">
                  Joined: {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'Unknown'}
                </Typography>
              </Stack>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              startIcon={<Iconify icon="solar:pen-bold" />}
              onClick={() => setEditOpen(true)}
              sx={{ mt: 3 }}
            >
              Edit Profile
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <Tabs
              value={currentTab}
              onChange={handleChangeTab}
              sx={{
                px: 3,
                bgcolor: 'background.neutral',
              }}
            >
              <Tab label="Overview" value="overview" />
              <Tab label="Invoices" value="invoices" />
              <Tab label="Notes" value="notes" />
              <Tab label="Tasks" value="tasks" />
            </Tabs>

            <Box sx={{ p: 3 }}>
              {currentTab === 'overview' && (
                <Stack spacing={3}>
                  <Typography variant="h6">About</Typography>
                  <Typography variant="body2">
                    Detailed bio and background information from the legacy CRM would be displayed here.
                  </Typography>
                </Stack>
              )}

              {currentTab === 'invoices' && (
                <Stack spacing={2}>
                  <Typography variant="h6">Transactions</Typography>
                  {invoicesLoading ? (
                    <CircularProgress size={24} />
                  ) : (
                    invoices?.map((inv: any) => (
                      <Box
                        key={inv._id}
                        sx={{
                          p: 2,
                          borderRadius: 1,
                          border: (theme) => `solid 1px ${theme.palette.divider}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Box>
                          <Typography variant="subtitle2">
                            Invoice #{inv.no || inv.number || inv.id || 'Draft'}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            Due: {inv.dueDate ? new Date(inv.dueDate).toLocaleDateString() : 'Not scheduled'}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2">
                          ${inv.totalDue ?? inv.amount ?? 0}
                        </Typography>
                      </Box>
                    ))
                  )}
                  {invoices?.length === 0 && <Typography variant="body2">No invoices found.</Typography>}
                </Stack>
              )}

              {currentTab === 'notes' && (
                <Typography variant="body2">Note integration from contactNoteFetchAction pending.</Typography>
              )}

              {currentTab === 'tasks' && (
                <Typography variant="body2">Task management integration pending.</Typography>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Dialog fullWidth maxWidth="sm" open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Contact</DialogTitle>

        <DialogContent>
          <Stack spacing={3} sx={{ pt: 1 }}>
            <TextField
              label="Full Name"
              value={editValues.fullName}
              onChange={handleEditValueChange('fullName')}
            />
            <TextField
              label="Email"
              value={editValues.email}
              onChange={handleEditValueChange('email')}
            />
            <TextField
              label="Phone"
              value={editValues.phone}
              onChange={handleEditValueChange('phone')}
            />
            <TextField
              label="Status"
              value={editValues.status}
              onChange={handleEditValueChange('status')}
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={() => setEditOpen(false)}>
            Cancel
          </Button>
          <LoadingButton variant="contained" loading={isSaving} onClick={handleSaveContact}>
            Save changes
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </DashboardContent>
  );
}
