'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import { useTheme, alpha } from '@mui/material/styles';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

export function DocumentContractsTab() {
  const [folder, setFolder] = useState('sent');
  const [status, setStatus] = useState('all');

  return (
    <Box sx={{ display: 'flex', gap: 3, height: 'calc(100vh - 280px)' }}>
      {/* Sidebar */}
      <DocumentFolderSidebar 
        currentFolder={folder} 
        onSelectFolder={(f) => setFolder(f)} 
      />

      <Stack spacing={3} sx={{ flexGrow: 1, minWidth: 0 }}>
        {/* Status Filters */}
        <DocumentStatusFilters 
          activeStatus={status} 
          onSelectStatus={(s) => setStatus(s)} 
        />

        {/* Document List */}
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>{folder} Documents</Typography>
            <Stack direction="row" spacing={1}>
               <Button variant="soft" size="small" startIcon={<Iconify icon="solar:magnifer-bold" />}>Search</Button>
               <Button variant="soft" size="small" startIcon={<Iconify icon="solar:printer-bold" />}>Export</Button>
            </Stack>
          </Box>
          <Divider />
          <Scrollbar>
            <Table sx={{ minWidth: 800 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Document Name</TableCell>
                  <TableCell>Recipient</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Last Activity</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { name: 'Membership Agreement - John Doe', recipient: 'john.doe@example.com', status: 'Waiting', time: '2h ago' },
                  { name: 'Personal Training Waiver', recipient: 'sarah.smith@example.com', status: 'Completed', time: '5h ago' },
                  { name: 'Facility Lease Contract', recipient: 'michael.brown@example.com', status: 'Viewed', time: '1d ago' },
                ].map((doc) => (
                  <TableRow key={doc.name}>
                    <TableCell>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Iconify icon="solar:file-text-bold" sx={{ color: 'primary.main' }} />
                        <Typography variant="subtitle2">{doc.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{doc.recipient}</TableCell>
                    <TableCell>
                       <Label 
                        color={
                          doc.status === 'Completed' ? 'success' : 
                          doc.status === 'Waiting' ? 'warning' : 'info'
                        }
                        variant="soft"
                       >
                         {doc.status}
                       </Label>
                    </TableCell>
                    <TableCell>{doc.time}</TableCell>
                    <TableCell align="right">
                       <Button size="small" color="inherit">Preview</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Scrollbar>
        </Card>
      </Stack>
    </Box>
  );
}

export function DocumentWaiversTab() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Waiver Management</Typography>
      {/* Existing waiver logic from previous session */}
      <Stack spacing={2}>
        <Typography variant="body2" color="text.secondary">Administer legal waivers and track guest signatures.</Typography>
        <Button variant="contained" color="primary" startIcon={<Iconify icon="solar:add-circle-bold" />}>Create Waiver Template</Button>
      </Stack>
    </Card>
  );
}

// --- Internal Components ---

function DocumentFolderSidebar({ currentFolder, onSelectFolder }: any) {
  const folders = [
    { key: 'inbox', label: 'Inbox', icon: 'solar:incoming-call-bold' },
    { key: 'sent', label: 'Sent', icon: 'solar:outgoing-call-bold' },
    { key: 'draft', label: 'Drafts', icon: 'solar:pen-new-square-bold' },
    { key: 'template', label: 'Templates', icon: 'solar:file-text-bold' },
    { key: 'voided', label: 'Voided', icon: 'solar:trash-bin-trash-bold' },
  ];

  return (
    <Card sx={{ width: 220, p: 2, flexShrink: 0 }}>
      <Typography variant="overline" sx={{ px: 1, mb: 1, color: 'text.disabled' }}>Folders</Typography>
      <Stack spacing={0.5}>
        {folders.map((f) => {
          const isActive = currentFolder === f.key;
          return (
            <Button
              key={f.key}
              fullWidth
              variant={isActive ? 'soft' : 'text'}
              color={isActive ? 'primary' : 'inherit'}
              startIcon={<Iconify icon={f.icon} />}
              onClick={() => onSelectFolder(f.key)}
              sx={{ justifyContent: 'flex-start', px: 1.5 }}
            >
              {f.label}
            </Button>
          );
        })}
      </Stack>
    </Card>
  );
}

function DocumentStatusFilters({ activeStatus, onSelectStatus }: any) {
  const statuses = [
    { key: 'all', label: 'All', color: 'default' },
    { key: 'viewed', label: 'Viewed', color: 'info' },
    { key: 'waiting', label: 'Waiting', color: 'warning' },
    { key: 'completed', label: 'Completed', color: 'success' },
    { key: 'voided', label: 'Voided', color: 'error' },
  ];

  return (
    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
      {statuses.map((s) => {
        const isActive = activeStatus === s.key;
        return (
          <Button
            key={s.key}
            size="small"
            variant={isActive ? 'contained' : 'soft'}
            color={s.color as any}
            onClick={() => onSelectStatus(s.key)}
            sx={{ borderRadius: 10 }}
          >
            {s.label}
          </Button>
        );
      })}
    </Stack>
  );
}

function Label({ label, color, variant }: any) {
  return (
     <Box sx={{ 
        px: 1, 
        py: 0.5, 
        borderRadius: 1, 
        fontSize: 11, 
        fontWeight: 700,
        bgcolor: variant === 'soft' ? (theme) => alpha(theme.palette[color].main, 0.16) : `${color}.main`, 
        color: variant === 'soft' ? (theme) => theme.palette[color].dark : 'common.white',
        display: 'inline-flex',
        textTransform: 'uppercase'
     }}>
        {label}
     </Box>
  );
}
