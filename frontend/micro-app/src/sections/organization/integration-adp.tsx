'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { integrationService } from 'src/services/integration-service';

import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function IntegrationAdp() {
  const queryClient = useQueryClient();

  const { data: status, isLoading } = useQuery({
    queryKey: ['adp-status'],
    queryFn: () => integrationService.getAdpStatus(),
  });

  const connectMutation = useMutation({
    mutationFn: () => integrationService.generateAdpToken(),
    onSuccess: (data) => {
      if (data) {
        window.location.href = data;
      }
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to connect to ADP');
    },
  });

  const disconnectMutation = useMutation({
    mutationFn: () => integrationService.disconnectAdp(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adp-status'] });
      toast.success('Disconnected from ADP');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to disconnect');
    },
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  const isConnected = status?.isConnected;

  return (
    <Card sx={{ p: 3, border: (theme) => `1px solid ${theme.palette.divider}` }}>
      <Stack direction="row" alignItems="center" spacing={3} sx={{ mb: 3 }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.neutral',
          }}
        >
          <Iconify icon="simple-icons:adp" width={48} sx={{ color: '#AD0000' }} />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">ADP Marketplace</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Sync your payroll, HR, and employee data seamlessly with ADP.
          </Typography>
        </Box>

        {isConnected ? (
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'success.main', typography: 'subtitle2' }}>
            <Iconify icon="eva:checkmark-circle-2-fill" width={20} sx={{ mr: 0.5 }} />
            Connected
          </Box>
        ) : (
          <Box sx={{ color: 'text.disabled', typography: 'subtitle2' }}>Not Connected</Box>
        )}
      </Stack>

      <Divider sx={{ borderStyle: 'dashed', my: 3 }} />

      <Stack spacing={2}>
        <Typography variant="subtitle2">Permissions & Data Sync</Typography>
        <Stack spacing={1}>
          {[
            'Employee profiles and payroll data',
            'Time and attendance records',
            'Organizational structure sync',
          ].map((item) => (
            <Stack key={item} direction="row" alignItems="center" spacing={1}>
              <Iconify icon="eva:checkmark-fill" width={16} sx={{ color: 'text.disabled' }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        {isConnected ? (
          <Button
            variant="outlined"
            color="error"
            onClick={() => disconnectMutation.mutate()}
            disabled={disconnectMutation.isPending}
          >
            {disconnectMutation.isPending ? 'Disconnecting...' : 'Disconnect ADP'}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => connectMutation.mutate()}
            disabled={connectMutation.isPending}
            startIcon={connectMutation.isPending ? <CircularProgress size={20} color="inherit" /> : <Iconify icon="eva:external-link-fill" />}
          >
            Connect with ADP
          </Button>
        )}
      </Box>
    </Card>
  );
}
