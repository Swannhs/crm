'use client';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { omniChannelService, omniMarketingService } from 'src/services/omni-service';
import { DashboardContent } from 'src/layouts/dashboard';
import { useQuery } from '@tanstack/react-query';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function BroadcastCreateView() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const { data: instances } = useQuery({
    queryKey: ['omni-instances'],
    queryFn: () => omniChannelService.getInstances(),
  });

  const BroadcastSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    provider: Yup.string().required('Provider is required'),
    instanceId: Yup.string().required('Instance is required'),
    content: Yup.string().required('Message content is required'),
  });

  const defaultValues = {
    name: '',
    provider: 'whatsapp',
    instanceId: '',
    content: 'Hello {{name}}, this is a message from MyManager.',
  };

  const methods = useForm({
    resolver: yupResolver(BroadcastSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Mock recipients for now - in production this would come from a contact selector
      const recipients = [
        { contactId: 'mock-1', mobile: '1234567890', variables: { name: 'John Doe' } },
        { contactId: 'mock-2', mobile: '0987654321', variables: { name: 'Jane Smith' } },
      ];

      await omniMarketingService.createBroadcast({
        ...data,
        type: 'text',
        recipients,
      });

      router.push(paths.dashboard.omnichannel.broadcast_list);
    } catch (err: any) {
      setError(err.message);
    }
  });

  const handleAddVariable = (variable: string) => {
    const current = values.content;
    setValue('content', `${current}{{${variable}}}`);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 3 }}>Create New Broadcast</Typography>

      {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <TextField 
                  name="name" 
                  label="Campaign Name" 
                  fullWidth 
                  {...methods.register('name')} 
                  error={!!methods.formState.errors.name}
                  helperText={methods.formState.errors.name?.message}
                />

                <Stack direction="row" spacing={2}>
                  <TextField
                    select
                    fullWidth
                    name="provider"
                    label="Provider"
                    {...methods.register('provider')}
                  >
                    <MenuItem value="whatsapp">WhatsApp</MenuItem>
                    <MenuItem value="telegram">Telegram</MenuItem>
                  </TextField>

                  <TextField
                    select
                    fullWidth
                    name="instanceId"
                    label="Select Account/Instance"
                    {...methods.register('instanceId')}
                    error={!!methods.formState.errors.instanceId}
                    helperText={methods.formState.errors.instanceId?.message}
                  >
                    {(instances || []).filter((i: any) => i.provider === values.provider).map((instance: any) => (
                      <MenuItem key={instance.id} value={instance.id}>
                        {instance.name} ({instance.phoneNumber || 'Telegram Bot'})
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>

                <Divider />

                <Box>
                   <Typography variant="subtitle2" sx={{ mb: 1 }}>Message Content</Typography>
                   <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                      <Button size="small" variant="soft" onClick={() => handleAddVariable('name')}>+ Name</Button>
                      <Button size="small" variant="soft" onClick={() => handleAddVariable('phone')}>+ Phone</Button>
                      <Button size="small" variant="soft" onClick={() => handleAddVariable('custom')}>+ Custom Var</Button>
                   </Stack>
                   <TextField
                    multiline
                    rows={6}
                    fullWidth
                    placeholder="Type your broadcast message here... Use {{variable}} for personalization."
                    {...methods.register('content')}
                    error={!!methods.formState.errors.content}
                    helperText={methods.formState.errors.content?.message}
                  />
                </Box>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
             <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Summary</Typography>
                <Stack spacing={2}>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">Provider:</Typography>
                      <Typography variant="subtitle2" sx={{ textTransform: 'capitalize' }}>{values.provider}</Typography>
                   </Box>
                   <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" color="text.secondary">Estimated Recipients:</Typography>
                      <Typography variant="subtitle2">2 (Simulation)</Typography>
                   </Box>
                   
                   <Divider sx={{ borderStyle: 'dashed' }} />

                   <Alert severity="info">
                      Messages will be sent using the selected {values.provider} account. Ensure your account is connected and has no rate limits.
                   </Alert>

                   <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    sx={{ mt: 2 }}
                  >
                    Launch Campaign
                  </LoadingButton>
                </Stack>
             </Card>
          </Grid>
        </Grid>
      </form>
    </DashboardContent>
  );
}
