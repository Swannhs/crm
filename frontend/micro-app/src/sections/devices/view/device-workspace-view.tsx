'use client';

import Link from 'next/link';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { DashboardContent } from 'src/layouts/dashboard';
import { deviceService } from 'src/services/device-service';
import { Form, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const DeviceSchema = zod.object({
  name: zod.string().min(1, 'Device name is required'),
  type: zod.string().optional(),
  status: zod.string().optional(),
  locationId: zod.string().optional(),
});

type Props = {
  mode?: 'devices' | 'sunmi' | 'unifi';
};

export function DeviceWorkspaceView({ mode = 'devices' }: Props) {
  const queryClient = useQueryClient();
  const methods = useForm({
    resolver: zodResolver(DeviceSchema),
    defaultValues: { name: '', type: '', status: 'active', locationId: '' },
  });

  const devicesQuery = useQuery({
    queryKey: ['devices'],
    queryFn: () => deviceService.getDevices(),
  });

  const hardwareProductsQuery = useQuery({
    queryKey: ['hardware-products'],
    queryFn: () => deviceService.getHardwareProducts(),
  });

  const hardwareBundlesQuery = useQuery({
    queryKey: ['hardware-bundles'],
    queryFn: () => deviceService.getHardwareBundles(),
  });

  const hardwareCategoriesQuery = useQuery({
    queryKey: ['hardware-categories'],
    queryFn: () => deviceService.getHardwareCategories(),
  });

  const recommendationQuery = useQuery({
    queryKey: ['hardware-recommendation'],
    queryFn: () => deviceService.getHardwareRecommendation(),
  });

  const sunmiQuery = useQuery({
    queryKey: ['sunmi-config'],
    queryFn: () => deviceService.getSunmiConfig(),
  });

  const unifiConnectionsQuery = useQuery({
    queryKey: ['unifi-connections'],
    queryFn: () => deviceService.getUnifiConnections(),
  });

  const unifiCamerasQuery = useQuery({
    queryKey: ['unifi-cameras'],
    queryFn: () => deviceService.getUnifiCameras(),
  });

  const createDeviceMutation = useMutation({
    mutationFn: (values: any) => deviceService.createDevice(values),
    onSuccess: async () => {
      methods.reset({ name: '', type: '', status: 'active', locationId: '' });
      await queryClient.invalidateQueries({ queryKey: ['devices'] });
    },
  });

  if (
    devicesQuery.isLoading ||
    hardwareProductsQuery.isLoading ||
    hardwareBundlesQuery.isLoading ||
    hardwareCategoriesQuery.isLoading ||
    recommendationQuery.isLoading ||
    sunmiQuery.isLoading ||
    unifiConnectionsQuery.isLoading ||
    unifiCamerasQuery.isLoading
  ) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4">Devices</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Button component={Link} href={paths.dashboard.devices} variant="soft" color="inherit">
            Devices
          </Button>
          <Button component={Link} href={paths.dashboard.whiteLabel} variant="soft" color="inherit">
            White Label
          </Button>
          <Button component={Link} href={paths.dashboard.domain} variant="soft" color="inherit">
            Domain
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">
                {mode === 'sunmi' ? 'Sunmi' : mode === 'unifi' ? 'UniFi' : 'Device Inventory'}
              </Typography>

              {mode === 'sunmi' ? (
                <>
                  <Typography variant="body2">Configured: {sunmiQuery.data ? 'yes' : 'no'}</Typography>
                  <Typography variant="body2">apiUrl: {sunmiQuery.data?.apiUrl || 'n/a'}</Typography>
                </>
              ) : mode === 'unifi' ? (
                <>
                  {(unifiConnectionsQuery.data || []).map((connection: any) => (
                    <Box key={connection.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                      <Typography variant="subtitle2">{connection.name || connection.host}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Cameras: {(unifiCamerasQuery.data || []).length}
                      </Typography>
                    </Box>
                  ))}
                </>
              ) : (
                <>
                  {(devicesQuery.data || []).map((device: any) => (
                    <Box key={device.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                      <Typography variant="subtitle2">{device.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {device.type || 'device'} • {device.status || 'active'}
                      </Typography>
                    </Box>
                  ))}
                  <Alert severity="info">
                    Hardware products: {(hardwareProductsQuery.data || []).length}, bundles: {(hardwareBundlesQuery.data || []).length}, categories: {(hardwareCategoriesQuery.data || []).length}
                  </Alert>
                </>
              )}
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Summary</Typography>
              <Typography variant="body2">Devices: {(devicesQuery.data || []).length}</Typography>
              <Typography variant="body2">Hardware products: {(hardwareProductsQuery.data || []).length}</Typography>
              <Typography variant="body2">Recommendation: {JSON.stringify(recommendationQuery.data || {})}</Typography>
            </Stack>
          </Card>
        </Grid>

        {mode === 'devices' && (
          <Grid item xs={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Add Device
              </Typography>
              <Form methods={methods} onSubmit={methods.handleSubmit((values) => createDeviceMutation.mutate(values))}>
                <Stack spacing={2}>
                  <RHFTextField name="name" label="Device Name" />
                  <RHFTextField name="type" label="Type" />
                  <RHFTextField name="status" label="Status" />
                  <RHFTextField name="locationId" label="Location ID" />
                  <Button type="submit" variant="contained" disabled={createDeviceMutation.isPending}>
                    Create Device
                  </Button>
                </Stack>
              </Form>
            </Card>
          </Grid>
        )}
      </Grid>
    </DashboardContent>
  );
}
