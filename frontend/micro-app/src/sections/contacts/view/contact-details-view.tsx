'use client';

import { useState, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

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

import {
  ContactOverviewTab,
  ContactBillingTab,
  ContactWorkHistoryTab,
  ContactPetsTab,
  ContactFilesTab,
} from './contact-workspace-sections';

// ----------------------------------------------------------------------

type Props = {
  id: string;
  mode?: string;
};

export function ContactDetailsView({ id, mode = 'overview' }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

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
    enabled: currentTab === 'billing' || currentTab === 'invoices',
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

  const renderTabContent = () => {
    switch (currentTab) {
      case 'overview':
        return <ContactOverviewTab contact={contact} />;
      case 'billing':
      case 'invoices':
        return <ContactBillingTab invoices={invoices} loading={invoicesLoading} />;
      case 'work-history':
        return <ContactWorkHistoryTab />;
      case 'pets':
        return <ContactPetsTab />;
      case 'files':
        return <ContactFilesTab />;
      case 'notes':
        return <NotesTab />;
      case 'tasks':
        return <TasksTab />;
      default:
        return <ContactOverviewTab contact={contact} />;
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

  const isEmployee = contact?.contactType?.includes('Employee');
  const isClient = contact?.contactType?.includes('Client');

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center' }}>
        <Button
          onClick={() => router.push(paths.dashboard.contacts)}
          startIcon={<Iconify icon="solar:arrow-left-bold" />}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
        <Typography variant="h4">{isEmployee ? 'Employee' : 'Contact'} Profile: {contact.fullName}</Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Avatar
              src={contact.photo}
              alt={contact.fullName}
              sx={{ width: 120, height: 120, mx: 'auto', mb: 3, border: (theme) => `4px solid ${theme.palette.background.neutral}` }}
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
              <ProfileInfoItem icon="solar:phone-bold" text={contact.phone || 'No phone'} />
              <ProfileInfoItem icon="solar:map-point-bold" text="Location Specified" />
              <ProfileInfoItem icon="solar:calendar-bold" text={`Joined ${new Date(contact.createdAt).toLocaleDateString()}`} />
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
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                px: 3,
                bgcolor: 'background.neutral',
              }}
            >
              <Tab label="Overview" value="overview" />
              <Tab label="Billing" value="billing" />
              {isEmployee && <Tab label="Work History" value="work-history" />}
              {isClient && <Tab label="Pets" value="pets" />}
              <Tab label="Files" value="files" />
              <Tab label="Notes" value="notes" />
              <Tab label="Tasks" value="tasks" />
            </Tabs>

            <Box sx={{ p: 3 }}>
               {renderTabContent()}
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Dialog fullWidth maxWidth="sm" open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ pt: 1 }}>
            <TextField label="Full Name" value={editValues.fullName} onChange={handleEditValueChange('fullName')} />
            <TextField label="Email" value={editValues.email} onChange={handleEditValueChange('email')} />
            <TextField label="Phone" value={editValues.phone} onChange={handleEditValueChange('phone')} />
            <TextField label="Status" value={editValues.status} onChange={handleEditValueChange('status')} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setEditOpen(false)}>Cancel</Button>
          <LoadingButton variant="contained" loading={isSaving} onClick={handleSaveContact}>Save changes</LoadingButton>
        </DialogActions>
      </Dialog>
    </DashboardContent>
  );
}

function ProfileInfoItem({ icon, text }: any) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Iconify icon={icon} width={20} sx={{ color: 'text.secondary' }} />
      <Typography variant="body2">{text}</Typography>
    </Stack>
  );
}

function NotesTab() {
  return (
    <Stack spacing={3}>
       <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Contact Notes</Typography>
          <Button variant="soft" size="small" startIcon={<Iconify icon="solar:pen-new-square-bold" />}>Add Note</Button>
       </Stack>
       <Stack spacing={2}>
          {[
             { id: 1, text: 'Customer is interested in the premium membership plan.', author: 'John Smith', date: '2 days ago' },
             { id: 2, text: 'Followed up regarding the expiring contract.', author: 'Admin', date: '5 days ago' },
          ].map(note => (
             <Box key={note.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Typography variant="body2" sx={{ mb: 1 }}>{note.text}</Typography>
                <Typography variant="caption" color="text.secondary">{note.author} • {note.date}</Typography>
             </Box>
          ))}
       </Stack>
    </Stack>
  );
}

function TasksTab() {
  return (
    <Stack spacing={3}>
       <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Assigned Tasks</Typography>
          <Button variant="soft" size="small" startIcon={<Iconify icon="solar:add-circle-bold" />}>New Task</Button>
       </Stack>
       <Stack spacing={2}>
          {[
             { id: 1, title: 'Send contract renewal', dueDate: 'Tomorrow', priority: 'High' },
             { id: 2, title: 'Birthday follow-up call', dueDate: 'Next Week', priority: 'Medium' },
          ].map(task => (
             <Box key={task.id} sx={{ p: 2, borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack direction="row" spacing={2} alignItems="center">
                   <Iconify icon="solar:check-square-bold" sx={{ color: 'text.secondary' }} />
                   <Box>
                      <Typography variant="subtitle2">{task.title}</Typography>
                      <Typography variant="caption" color="text.secondary">Due {task.dueDate}</Typography>
                   </Box>
                </Stack>
                <Label color={task.priority === 'High' ? 'error' : 'warning'}>{task.priority}</Label>
             </Box>
          ))}
       </Stack>
    </Stack>
  );
}
