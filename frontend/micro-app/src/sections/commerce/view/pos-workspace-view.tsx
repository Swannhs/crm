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
import { posService } from 'src/services/pos-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { Form, RHFTextField } from 'src/components/hook-form';

// ----------------------------------------------------------------------

const TableSchema = zod.object({
  shopId: zod.string().min(1, 'Shop id is required'),
  tableName: zod.string().min(1, 'Table name is required'),
  tableShape: zod.string().min(1, 'Table shape is required'),
});

type Props = {
  shopId?: string;
  mode?:
    | 'pos'
    | 'settings'
    | 'orders'
    | 'kds'
    | 'cfd'
    | 'kiosk'
    | 'stock-manager'
    | 'tables'
    | 'table-join-approve'
    | 'table-register'
    | 'table-side'
    | 'deliver';
  orderId?: string;
  roomId?: string;
  table?: string;
  type?: string;
  deliveryId?: string;
};

export function PosWorkspaceView({
  shopId = '',
  mode = 'pos',
  orderId,
  roomId,
  table,
  type,
  deliveryId,
}: Props) {
  const queryClient = useQueryClient();
  const tableMethods = useForm({
    resolver: zodResolver(TableSchema),
    defaultValues: { shopId, tableName: '', tableShape: 'square' },
  });

  const settingsQuery = useQuery({
    queryKey: ['pos-settings', shopId],
    queryFn: () => posService.getSettings(shopId),
    enabled: Boolean(shopId),
  });

  const shiftsQuery = useQuery({
    queryKey: ['pos-tip-shifts', shopId],
    queryFn: () => posService.getTipShifts(shopId),
    enabled: Boolean(shopId) && mode === 'settings',
  });

  const tablesQuery = useQuery({
    queryKey: ['pos-tables', shopId, mode],
    queryFn: () => posService.getTables(shopId, mode === 'tables'),
    enabled: Boolean(shopId) && ['pos', 'tables', 'kds', 'cfd', 'kiosk', 'stock-manager'].includes(mode),
  });

  const tableModeQuery = useQuery({
    queryKey: ['pos-table-mode', shopId],
    queryFn: () => posService.getTableMode(shopId),
    enabled: Boolean(shopId) && ['pos', 'table-side', 'table-join-approve', 'table-register'].includes(mode),
  });

  const tableOrdersQuery = useQuery({
    queryKey: ['pos-table-orders', shopId],
    queryFn: () => posService.getTableOrders(shopId),
    enabled: Boolean(shopId) && ['orders', 'pos', 'deliver', 'table-join-approve'].includes(mode),
  });

  const createTableMutation = useMutation({
    mutationFn: (values: any) => posService.createTable(values),
    onSuccess: async () => {
      tableMethods.reset({ shopId, tableName: '', tableShape: 'square' });
      await queryClient.invalidateQueries({ queryKey: ['pos-tables', shopId] });
    },
  });

  if (
    settingsQuery.isLoading ||
    shiftsQuery.isLoading ||
    tablesQuery.isLoading ||
    tableModeQuery.isLoading ||
    tableOrdersQuery.isLoading
  ) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const content = (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {mode === 'settings'
              ? 'POS Settings'
              : mode === 'orders' || mode === 'deliver' || mode === 'table-join-approve'
                ? 'POS Orders'
                : mode === 'table-side' || mode === 'table-register'
                  ? 'Table Mode'
                  : 'POS Tables'}
          </Typography>

          <Stack spacing={2}>
            {mode === 'settings' && (
              <>
                <Typography variant="body2">number pad 1: {settingsQuery.data?.numberPadFirstValue ?? 'n/a'}</Typography>
                <Typography variant="body2">number pad 2: {settingsQuery.data?.numberPadSecondValue ?? 'n/a'}</Typography>
                <Typography variant="body2">number pad 3: {settingsQuery.data?.numberPadThirdValue ?? 'n/a'}</Typography>
                <Typography variant="body2">tip shifts: {(shiftsQuery.data || []).length}</Typography>
              </>
            )}

            {(mode === 'orders' || mode === 'deliver' || mode === 'table-join-approve'
              ? tableOrdersQuery.data || []
              : mode === 'table-side' || mode === 'table-register'
                ? tableModeQuery.data || []
                : tablesQuery.data || []
            ).map((item: any) => (
              <Box key={item.id || item._id || item.tableNo} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Typography variant="subtitle2">
                  {item.tableName || item.tableNo || item.id || item._id}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.orderStatus || item.orderState || item.tableShape || 'Active'}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">Route Context</Typography>
            <Typography variant="body2">shopId: {shopId || 'n/a'}</Typography>
            <Typography variant="body2">orderId: {orderId || 'n/a'}</Typography>
            <Typography variant="body2">roomId: {roomId || 'n/a'}</Typography>
            <Typography variant="body2">table: {table || 'n/a'}</Typography>
            <Typography variant="body2">type: {type || 'n/a'}</Typography>
            <Typography variant="body2">deliveryId: {deliveryId || 'n/a'}</Typography>
            {['kds', 'cfd', 'kiosk', 'stock-manager'].includes(mode) && (
              <Alert severity="info">
                This route is live in the new app and backed by POS data where available. Specialized KDS/CFD/kiosk UI parity still needs a deeper dedicated implementation pass.
              </Alert>
            )}
          </Stack>
        </Card>
      </Grid>

      {mode === 'tables' && (
        <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Add Table
            </Typography>
            <Form methods={tableMethods} onSubmit={tableMethods.handleSubmit((values) => createTableMutation.mutate(values))}>
              <Stack spacing={2}>
                <RHFTextField name="shopId" label="Shop ID" />
                <RHFTextField name="tableName" label="Table Name" />
                <RHFTextField name="tableShape" label="Table Shape" />
                <Button type="submit" variant="contained" disabled={createTableMutation.isPending}>
                  Create Table
                </Button>
              </Stack>
            </Form>
          </Card>
        </Grid>
      )}
    </Grid>
  );

  if (mode === 'pos' || mode === 'settings' || mode === 'orders' || mode === 'kds' || mode === 'cfd' || mode === 'kiosk' || mode === 'stock-manager' || mode === 'tables') {
    return (
      <DashboardContent maxWidth="xl">
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">POS</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {shopId && (
              <>
                <Button component={Link} href={paths.dashboard.pos(shopId)} variant="soft" color="inherit">POS</Button>
                <Button component={Link} href={paths.dashboard.posSettings(shopId)} variant="soft" color="inherit">Settings</Button>
                <Button component={Link} href={paths.dashboard.posOrders(shopId)} variant="soft" color="inherit">Orders</Button>
                <Button component={Link} href={paths.dashboard.posKds(shopId)} variant="soft" color="inherit">KDS</Button>
                <Button component={Link} href={paths.dashboard.posCfd(shopId)} variant="soft" color="inherit">CFD</Button>
              </>
            )}
            <Button component={Link} href={paths.dashboard.posTables} variant="soft" color="inherit">Tables</Button>
          </Stack>
        </Box>
        {content}
      </DashboardContent>
    );
  }

  return (
    <FeatureRouteShell
      title="POS Public Flow"
      description="Legacy POS public and operational routes mapped into the micro-app."
      links={[
        { href: paths.dashboard.posTables, label: 'Dashboard Tables' },
        ...(shopId ? [{ href: paths.dashboard.pos(shopId), label: 'Dashboard POS' }] : []),
      ]}
    >
      {content}
    </FeatureRouteShell>
  );
}
