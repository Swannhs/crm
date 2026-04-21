'use client';

import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';

import { omniChannelService } from 'src/services/omni-service';
import { Iconify } from 'src/components/iconify';
import { Label } from 'src/components/label';

// ----------------------------------------------------------------------

export function OmniIntegrationView() {
  const queryClient = useQueryClient();
  const [openAdd, setOpenAdd] = useState(false);
  const [newInstance, setNewInstance] = useState<{ name: string; provider: 'whatsapp' | 'telegram' }>({
    name: '',
    provider: 'whatsapp',
  });
  
  const [openQR, setOpenQR] = useState(false);
  const [selectedInstanceId, setSelectedInstanceId] = useState<string | null>(null);

  const { data: instances, isLoading } = useQuery({
    queryKey: ['omni-instances'],
    queryFn: () => omniChannelService.getInstances(),
  });

  const { data: qrData, isLoading: qrLoading } = useQuery({
    queryKey: ['omni-qr', selectedInstanceId],
    queryFn: () => omniChannelService.getWhatsAppQR(selectedInstanceId!),
    enabled: !!selectedInstanceId && openQR,
    refetchInterval: 20000, // Refresh QR every 20s
  });

  const createMutation = useMutation({
    mutationFn: omniChannelService.createInstance,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['omni-instances'] });
      setOpenAdd(false);
    },
  });

  const handleOpenQR = (id: string) => {
    setSelectedInstanceId(id);
    setOpenQR(true);
  };

  const handleCloseQR = () => {
    setOpenQR(false);
    setSelectedInstanceId(null);
  };

  if (isLoading) {
    return <Box sx={{ p: 5, textAlign: 'center' }}><CircularProgress /></Box>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Box>
          <Typography variant="h5">Omnichannel Integrations</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Manage your WhatsApp and Telegram messaging instances.
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={() => setOpenAdd(true)}
        >
          Add Instance
        </Button>
      </Stack>

      <Grid container spacing={3}>
        {instances.map((instance: any) => (
          <Grid item xs={12} md={6} lg={4} key={instance.id}>
            <Card sx={{ p: 3 }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                <Box sx={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.neutral', borderRadius: 1.5 }}>
                  <Iconify 
                    icon={instance.provider === 'whatsapp' ? 'logos:whatsapp-icon' : 'logos:telegram'} 
                    width={32} 
                  />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">{instance.name}</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                    {instance.provider.toUpperCase()}
                  </Typography>
                </Box>
                <Label color={instance.status === 'CONNECTED' ? 'success' : 'warning'}>
                  {instance.status}
                </Label>
              </Stack>

              <Stack direction="row" spacing={1}>
                {instance.provider === 'whatsapp' && instance.status !== 'CONNECTED' && (
                  <Button 
                    fullWidth 
                    variant="soft" 
                    color="primary"
                    startIcon={<Iconify icon="lucide:qr-code" />}
                    onClick={() => handleOpenQR(instance.instanceId)}
                  >
                    Scan QR
                  </Button>
                )}
                <Button fullWidth variant="soft" color="error">Delete</Button>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add Instance Dialog */}
      <Dialog open={openAdd} onClose={() => setOpenAdd(false)} fullWidth maxWidth="xs">
        <DialogTitle>Add New Messaging Instance</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <TextField 
              fullWidth 
              label="Instance Name" 
              placeholder="e.g. Sales WhatsApp"
              value={newInstance.name}
              onChange={(e) => setNewInstance({ ...newInstance, name: e.target.value })}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>Provider</Typography>
              <Stack direction="row" spacing={2}>
                <Button 
                  variant={newInstance.provider === 'whatsapp' ? 'contained' : 'outlined'}
                  onClick={() => setNewInstance({ ...newInstance, provider: 'whatsapp' })}
                  startIcon={<Iconify icon="logos:whatsapp-icon" />}
                  fullWidth
                >
                  WhatsApp
                </Button>
                <Button 
                  variant={newInstance.provider === 'telegram' ? 'contained' : 'outlined'}
                  onClick={() => setNewInstance({ ...newInstance, provider: 'telegram' })}
                  startIcon={<Iconify icon="logos:telegram" />}
                  fullWidth
                >
                  Telegram
                </Button>
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            disabled={!newInstance.name || createMutation.isPending}
            onClick={() => createMutation.mutate(newInstance)}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>

      {/* QR Code Dialog */}
      <Dialog open={openQR} onClose={handleCloseQR} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: 'center' }}>Scan QR Code</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
          {qrLoading ? (
            <CircularProgress />
          ) : qrData?.qr ? (
            <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 1 }}>
               <img src={qrData.qr} alt="WhatsApp QR" style={{ width: 240, height: 240 }} />
            </Box>
          ) : (
            <Typography variant="body2" color="error">Failed to generate QR. Please try again.</Typography>
          )}
          <Typography variant="body2" sx={{ mt: 3, textAlign: 'center', color: 'text.secondary' }}>
            Open WhatsApp on your phone, go to Settings {'>'} Linked Devices, and scan this code to connect.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseQR} fullWidth>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
