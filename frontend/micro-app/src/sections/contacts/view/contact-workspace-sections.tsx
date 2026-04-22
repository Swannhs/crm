'use client';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export function ContactOverviewTab({ contact }: any) {
  return (
    <Stack spacing={3}>
      <Typography variant="h6">Personal Information</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">GENDER</Typography>
          <Typography variant="subtitle2">{contact.gender || 'Not specified'}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" color="text.secondary">BIRTHDAY</Typography>
          <Typography variant="subtitle2">{contact.dob || 'Not specified'}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="text.secondary">ADDRESS</Typography>
          <Typography variant="subtitle2">{contact.address || 'No address provided'}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant="h6">Membership & Engagement</Typography>
      <Stack direction="row" spacing={4}>
        <Box>
          <Typography variant="caption" color="text.secondary">TOTAL SPENT</Typography>
          <Typography variant="h5" color="primary">$1,240.00</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary">ATTENDANCE RATE</Typography>
          <Typography variant="h5" color="success">92%</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export function ContactBillingTab({ invoices, loading }: any) {
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Transactions</Typography>
        <Button variant="soft" size="small" startIcon={<Iconify icon="solar:add-circle-bold" />}>New Invoice</Button>
      </Stack>
      <Scrollbar sx={{ maxHeight: 400 }}>
        <Stack spacing={2}>
          {(invoices || [1, 2, 3]).map((inv: any) => (
            <Box key={typeof inv === 'object' ? inv.id : inv} sx={{ p: 2, borderRadius: 2, border: (theme) => `1px solid ${theme.palette.divider}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="subtitle2">Invoice #{typeof inv === 'object' ? inv.number : `100${inv}`}</Typography>
                <Typography variant="caption" color="text.secondary">Sent on {typeof inv === 'object' ? new Date(inv.createdAt).toLocaleDateString() : 'Today'}</Typography>
              </Box>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="subtitle2">${typeof inv === 'object' ? inv.totalDue : '45.00'}</Typography>
                <Label color={inv.status === 'paid' ? 'success' : 'warning'}>{typeof inv === 'object' ? inv.status : 'pending'}</Label>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Scrollbar>
    </Stack>
  );
}

export function ContactWorkHistoryTab() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Work History & Timecards</Typography>
        <Button variant="contained" size="small" color="primary">Clock In</Button>
      </Stack>
      <Stack spacing={2}>
        {[
          { id: 1, date: 'Oct 24, 2023', shift: '09:00 AM - 05:00 PM', duration: '8h 0m', status: 'Approved' },
          { id: 2, date: 'Oct 23, 2023', shift: '08:45 AM - 04:30 PM', duration: '7h 45m', status: 'Pending' },
        ].map(shift => (
          <Box key={shift.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="subtitle2">{shift.date}</Typography>
              <Typography variant="caption" color="text.secondary">{shift.shift}</Typography>
            </Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <Typography variant="subtitle2">{shift.duration}</Typography>
              <Label color={shift.status === 'Approved' ? 'success' : 'warning'}>{shift.status}</Label>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

export function ContactPetsTab() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Registered Pets</Typography>
        <Button variant="soft" size="small" startIcon={<Iconify icon="solar:add-circle-bold" />}>Add Pet</Button>
      </Stack>
      <Grid container spacing={2}>
        {[
          { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: '3 years' },
          { id: 2, name: 'Luna', breed: 'Siamese Cat', age: '2 years' },
        ].map(pet => (
          <Grid item xs={12} sm={6} key={pet.id}>
            <Card sx={{ p: 2, display: 'flex', alignItems: 'center', bgcolor: 'background.neutral', border: 0 }}>
              <Avatar sx={{ width: 48, height: 48, mr: 2 }}>{pet.name.charAt(0)}</Avatar>
              <Box>
                <Typography variant="subtitle2">{pet.name}</Typography>
                <Typography variant="caption" color="text.secondary">{pet.breed} • {pet.age}</Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export function ContactFilesTab() {
  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Shared Documents</Typography>
        <Button variant="soft" size="small" startIcon={<Iconify icon="solar:upload-bold" />}>Upload File</Button>
      </Stack>
      <Stack spacing={1}>
        {[
          { name: 'Membership Contract.pdf', size: '1.2 MB', date: 'Oct 20, 2023' },
          { name: 'Identity Verification.jpg', size: '2.4 MB', date: 'Oct 15, 2023' },
          { name: 'Medical Clearance.pdf', size: '0.8 MB', date: 'Oct 12, 2023' },
        ].map((file, index) => (
          <Box key={index} sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: (theme) => `1px solid ${theme.palette.divider}`, '&:last-child': { borderBottom: 0 } }}>
            <Iconify icon="solar:document-bold" sx={{ mr: 2, color: 'text.secondary' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2">{file.name}</Typography>
              <Typography variant="caption" color="text.secondary">{file.size} • Uploaded {file.date}</Typography>
            </Box>
            <IconButton size="small"><Iconify icon="solar:download-bold" /></IconButton>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
