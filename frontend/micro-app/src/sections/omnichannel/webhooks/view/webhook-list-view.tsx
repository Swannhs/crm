'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { omniAutomationService } from 'src/services/omni-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';
import { Scrollbar } from 'src/components/scrollbar';
import { showToast } from 'src/components/toast';

// ----------------------------------------------------------------------

export function WebhookListView() {
  const router = useRouter();

  const { data: webhooks, isLoading } = useQuery({
    queryKey: ['omni-webhooks'],
    queryFn: () => omniAutomationService.getWebhooks(),
  });

  const handleCopyUrl = (id: string) => {
    const url = `${window.location.origin}/api/automation/v1/public/webhook/receive/${id}`;
    navigator.clipboard.writeText(url);
    showToast({ message: 'Webhook URL copied to clipboard!', severity: 'success' });
  };

  if (isLoading) {
    return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>;
  }

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Webhook Automations</Typography>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
        >
          New Webhook
        </Button>
      </Box>

      <Card>
        <Scrollbar>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Endpoint URL</TableCell>
                <TableCell>Target Bot / Workflow</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(webhooks || []).map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Typography variant="subtitle2" noWrap>{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                         .../webhook/receive/{row.id}
                      </Typography>
                      <Tooltip title="Copy Public URL">
                         <IconButton size="small" onClick={() => handleCopyUrl(row.id)}>
                            <Iconify icon="solar:copy-bold" />
                         </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {row.chatbotId ? (
                       <Label variant="soft" color="primary">Chatbot Trigger</Label>
                    ) : (
                       <Label variant="soft" color="info">Workflow Trigger</Label>
                    )}
                  </TableCell>
                  <TableCell>
                    <Label variant="filled" color={row.isActive ? 'success' : 'default'}>
                      {row.isActive ? 'Active' : 'Inactive'}
                    </Label>
                  </TableCell>
                  <TableCell>
                    {new Date(row.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="right">
                     <Button size="small" color="primary" onClick={() => router.push(paths.dashboard.omni.webhook_logs(row.id))}>
                        View Logs
                     </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </DashboardContent>
  );
}
