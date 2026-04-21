'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useAuthContext } from 'src/auth/hooks';
import { DashboardContent } from 'src/layouts/dashboard';
import { posService } from 'src/services/pos-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { Form, RHFTextField } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

// ----------------------------------------------------------------------

const SHOP_CONTEXT_STORAGE_KEY = 'pos-tables:selected-shop-id';

const TableSchema = zod.object({
  shopId: zod.string().min(1, 'Shop id is required'),
  tableName: zod.string().min(1, 'Table name is required'),
  tableShape: zod.string().min(1, 'Table shape is required'),
  roomId: zod.string().optional(),
  tableColor: zod.string().optional(),
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

type PosTableRecord = {
  id: string;
  shopId?: string;
  roomId?: string | null;
  serverId?: string | null;
  tableName: string;
  tableShape?: string | null;
  tableColor?: string | null;
  tableDimension?: { width?: number; length?: number; scale?: string } | null;
  seats?: Array<{ seatNo: number }>;
  createdAt?: string;
};

type PosTableModeRecord = {
  id?: string;
  tableNo: string;
  guestCount?: number;
  orderState?: string;
  seats?: any[];
  sendTime?: string;
};

type PosTableOrderRecord = {
  id: string;
  tableId: string;
  tableName: string;
  orderStatus?: string | null;
  seats?: any[];
  createdAt?: string;
  updatedAt?: string;
};

const getSeatCount = (table: PosTableRecord) => (Array.isArray(table.seats) && table.seats.length ? table.seats.length : 1);

const buildSeatLayout = (count: number) =>
  Array.from({ length: Math.max(1, count) }, (_value, index) => ({ seatNo: index + 1 }));

const toTableRecord = (item: any): PosTableRecord => ({
  id: String(item?.id || ''),
  shopId: item?.shopId ? String(item.shopId) : undefined,
  roomId: item?.roomId ? String(item.roomId) : null,
  serverId: item?.serverId ? String(item.serverId) : null,
  tableName: String(item?.tableName || item?.tableNo || 'Unnamed table'),
  tableShape: item?.tableShape ? String(item.tableShape) : 'square',
  tableColor: item?.tableColor ? String(item.tableColor) : null,
  tableDimension: item?.tableDimension || null,
  seats: Array.isArray(item?.seats) ? item.seats : [],
  createdAt: item?.createdAt ? String(item.createdAt) : undefined,
});

const toTableModeRecord = (item: any): PosTableModeRecord => ({
  id: item?.id ? String(item.id) : undefined,
  tableNo: String(item?.tableNo || ''),
  guestCount: Number(item?.guestCount ?? 0),
  orderState: item?.orderState ? String(item.orderState) : '',
  seats: Array.isArray(item?.seats) ? item.seats : [],
  sendTime: item?.sendTime ? String(item.sendTime) : undefined,
});

const toTableOrderRecord = (item: any): PosTableOrderRecord => ({
  id: String(item?.id || ''),
  tableId: String(item?.tableId || ''),
  tableName: String(item?.tableName || ''),
  orderStatus: item?.orderStatus ? String(item.orderStatus) : '',
  seats: Array.isArray(item?.seats) ? item.seats : [],
  createdAt: item?.createdAt ? String(item.createdAt) : undefined,
  updatedAt: item?.updatedAt ? String(item.updatedAt) : undefined,
});

function getOperationalState(order?: PosTableOrderRecord, tableMode?: PosTableModeRecord) {
  const status = String(order?.orderStatus || tableMode?.orderState || '').toLowerCase();

  if (status.includes('paid') || status.includes('closed') || status.includes('completed')) {
    return { label: 'Closed', color: 'success' as const };
  }
  if (status.includes('send') || status.includes('fired')) {
    return { label: 'Sent', color: 'warning' as const };
  }
  if (status.includes('stay') || status.includes('open')) {
    return { label: 'Occupied', color: 'error' as const };
  }
  if (status.includes('hold')) {
    return { label: 'On Hold', color: 'info' as const };
  }
  if ((tableMode?.guestCount || 0) > 0) {
    return { label: 'Seated', color: 'warning' as const };
  }

  return { label: 'Available', color: 'default' as const };
}

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
  const { user } = useAuthContext();
  const fallbackOrgId =
    (user as any)?.org_id || (user as any)?.orgId || (user as any)?.organizationId || '';

  const [activeShopId, setActiveShopId] = useState(shopId || '');
  const [shopIdInput, setShopIdInput] = useState(shopId || '');
  const [tableSearch, setTableSearch] = useState('');
  const [editingTableId, setEditingTableId] = useState<string | null>(null);

  const tableMethods = useForm({
    resolver: zodResolver(TableSchema),
    defaultValues: { shopId: shopId || '', tableName: '', tableShape: 'square', roomId: '', tableColor: '' },
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedShopId = window.localStorage.getItem(SHOP_CONTEXT_STORAGE_KEY) || '';
    const initialShopId = shopId || storedShopId || fallbackOrgId || '';

    setActiveShopId(initialShopId);
    setShopIdInput(initialShopId);
    tableMethods.reset({
      shopId: initialShopId,
      tableName: '',
      tableShape: 'square',
      roomId: '',
      tableColor: '',
    });
  }, [fallbackOrgId, shopId, tableMethods]);

  const settingsQuery = useQuery({
    queryKey: ['pos-settings', activeShopId],
    queryFn: () => posService.getSettings(activeShopId),
    enabled: Boolean(activeShopId),
  });

  const shiftsQuery = useQuery({
    queryKey: ['pos-tip-shifts', activeShopId],
    queryFn: () => posService.getTipShifts(activeShopId),
    enabled: Boolean(activeShopId) && mode === 'settings',
  });

  const tablesQuery = useQuery({
    queryKey: ['pos-tables', activeShopId, mode],
    queryFn: () => posService.getTables(activeShopId, mode === 'tables'),
    enabled: Boolean(activeShopId) && ['pos', 'tables', 'kds', 'cfd', 'kiosk', 'stock-manager'].includes(mode),
  });

  const tableModeQuery = useQuery({
    queryKey: ['pos-table-mode', activeShopId],
    queryFn: () => posService.getTableMode(activeShopId),
    enabled: Boolean(activeShopId) && ['pos', 'tables', 'table-side', 'table-join-approve', 'table-register'].includes(mode),
  });

  const tableOrdersQuery = useQuery({
    queryKey: ['pos-table-orders', activeShopId],
    queryFn: () => posService.getTableOrders(activeShopId),
    enabled: Boolean(activeShopId) && ['orders', 'pos', 'tables', 'deliver', 'table-join-approve'].includes(mode),
  });

  const invalidatePosTableQueries = async () => {
    await Promise.all([
      queryClient.invalidateQueries({ queryKey: ['pos-tables', activeShopId] }),
      queryClient.invalidateQueries({ queryKey: ['pos-table-mode', activeShopId] }),
      queryClient.invalidateQueries({ queryKey: ['pos-table-orders', activeShopId] }),
    ]);
  };

  const createTableMutation = useMutation({
    mutationFn: (values: any) => posService.createTable(values),
    onSuccess: async () => {
      tableMethods.reset({ shopId: activeShopId, tableName: '', tableShape: 'square', roomId: '', tableColor: '' });
      setEditingTableId(null);
      await invalidatePosTableQueries();
      showToast({ message: 'Table created.', severity: 'success' });
    },
  });

  const updateTableMutation = useMutation({
    mutationFn: (values: any) => posService.updateTable(values),
    onSuccess: async () => {
      tableMethods.reset({ shopId: activeShopId, tableName: '', tableShape: 'square', roomId: '', tableColor: '' });
      setEditingTableId(null);
      await invalidatePosTableQueries();
      showToast({ message: 'Table updated.', severity: 'success' });
    },
  });

  const deleteTableMutation = useMutation({
    mutationFn: (id: string) => posService.deleteTable(id),
    onSuccess: async () => {
      await invalidatePosTableQueries();
      showToast({ message: 'Table removed.', severity: 'success' });
    },
  });

  const increaseSeatMutation = useMutation({
    mutationFn: (id: string) => posService.increaseSeat(id),
    onSuccess: invalidatePosTableQueries,
  });

  const decreaseSeatMutation = useMutation({
    mutationFn: (id: string) => posService.decreaseSeat(id),
    onSuccess: invalidatePosTableQueries,
  });

  const updateTableStateMutation = useMutation({
    mutationFn: ({ tableNo, orderState }: { tableNo: string; orderState: string }) =>
      posService.updateTableState(activeShopId, tableNo, orderState),
    onSuccess: async () => {
      await invalidatePosTableQueries();
    },
  });

  const updateGuestCountMutation = useMutation({
    mutationFn: ({ tableNo, guestCount, seats }: { tableNo: string; guestCount: number; seats: any[] }) =>
      posService.updateTableGuestSeats(activeShopId, tableNo, guestCount, seats),
    onSuccess: async () => {
      await invalidatePosTableQueries();
    },
  });

  const createTableOrderMutation = useMutation({
    mutationFn: (payload: any) => posService.createTableOrder(payload),
    onSuccess: async () => {
      await invalidatePosTableQueries();
      showToast({ message: 'Table ticket opened.', severity: 'success' });
    },
  });

  const updateTableOrderMutation = useMutation({
    mutationFn: (payload: any) => posService.updateTableOrder(payload),
    onSuccess: async () => {
      await invalidatePosTableQueries();
      showToast({ message: 'Table ticket updated.', severity: 'success' });
    },
  });

  const deleteTableOrderMutation = useMutation({
    mutationFn: (id: string) => posService.deleteTableOrder(id),
    onSuccess: async () => {
      await invalidatePosTableQueries();
      showToast({ message: 'Table ticket archived.', severity: 'success' });
    },
  });

  const isLoading =
    settingsQuery.isLoading ||
    shiftsQuery.isLoading ||
    tablesQuery.isLoading ||
    tableModeQuery.isLoading ||
    tableOrdersQuery.isLoading;

  const tables = useMemo<PosTableRecord[]>(
    () => (Array.isArray(tablesQuery.data) ? tablesQuery.data.map(toTableRecord) : []),
    [tablesQuery.data]
  );

  const tableModes = useMemo<PosTableModeRecord[]>(
    () => (Array.isArray(tableModeQuery.data) ? tableModeQuery.data.map(toTableModeRecord) : []),
    [tableModeQuery.data]
  );

  const tableOrders = useMemo<PosTableOrderRecord[]>(
    () => (Array.isArray(tableOrdersQuery.data) ? tableOrdersQuery.data.map(toTableOrderRecord) : []),
    [tableOrdersQuery.data]
  );

  const tableModeLookup = useMemo(
    () => new Map(tableModes.map((item) => [item.tableNo.toLowerCase(), item])),
    [tableModes]
  );

  const tableOrderLookup = useMemo(() => {
    const entries = tableOrders
      .slice()
      .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
    return new Map(entries.map((item) => [item.tableId, item]));
  }, [tableOrders]);

  const filteredTables = useMemo(() => {
    const query = tableSearch.trim().toLowerCase();
    if (!query) return tables;

    return tables.filter((item) => {
      const tableMode = tableModeLookup.get(item.tableName.toLowerCase());
      const activeOrder = tableOrderLookup.get(item.id);
      const operationalState = getOperationalState(activeOrder, tableMode).label.toLowerCase();

      return (
        item.tableName.toLowerCase().includes(query) ||
        String(item.tableShape || '').toLowerCase().includes(query) ||
        String(item.roomId || '').toLowerCase().includes(query) ||
        operationalState.includes(query)
      );
    });
  }, [tableModeLookup, tableOrderLookup, tableSearch, tables]);

  const tableMetrics = useMemo(() => {
    const totalTables = tables.length;
    const totalSeats = tables.reduce((sum, item) => sum + getSeatCount(item), 0);
    const openTickets = tables.filter((item) => {
      const order = tableOrderLookup.get(item.id);
      return order && !String(order.orderStatus || '').toLowerCase().includes('closed') && !String(order.orderStatus || '').toLowerCase().includes('paid');
    }).length;
    const occupiedTables = tables.filter((item) => {
      const operational = getOperationalState(tableOrderLookup.get(item.id), tableModeLookup.get(item.tableName.toLowerCase()));
      return operational.label !== 'Available' && operational.label !== 'Closed';
    }).length;

    return { totalTables, totalSeats, openTickets, occupiedTables };
  }, [tableModeLookup, tableOrderLookup, tables]);

  const handleApplyShopContext = () => {
    const nextShopId = shopIdInput.trim();
    setActiveShopId(nextShopId);
    if (typeof window !== 'undefined') {
      if (nextShopId) window.localStorage.setItem(SHOP_CONTEXT_STORAGE_KEY, nextShopId);
      else window.localStorage.removeItem(SHOP_CONTEXT_STORAGE_KEY);
    }
    setEditingTableId(null);
    tableMethods.reset({ shopId: nextShopId, tableName: '', tableShape: 'square', roomId: '', tableColor: '' });
  };

  const handleEditTable = (tableRecord: PosTableRecord) => {
    setEditingTableId(tableRecord.id);
    tableMethods.reset({
      shopId: activeShopId,
      tableName: tableRecord.tableName,
      tableShape: tableRecord.tableShape || 'square',
      roomId: tableRecord.roomId || '',
      tableColor: tableRecord.tableColor || '',
    });
  };

  const handleCancelEdit = () => {
    setEditingTableId(null);
    tableMethods.reset({ shopId: activeShopId, tableName: '', tableShape: 'square', roomId: '', tableColor: '' });
  };

  const handleSubmitTable = (values: any) => {
    if (editingTableId) {
      updateTableMutation.mutate({
        id: editingTableId,
        shopId: values.shopId,
        tableName: values.tableName,
        tableShape: values.tableShape,
        roomId: values.roomId || null,
        tableColor: values.tableColor || null,
      });
      return;
    }

    createTableMutation.mutate({
      shopId: values.shopId,
      tableName: values.tableName,
      tableShape: values.tableShape,
      roomId: values.roomId || null,
      tableColor: values.tableColor || null,
      seats: buildSeatLayout(4),
    });
  };

  const handleOpenTicket = (tableRecord: PosTableRecord) => {
    const existingOrder = tableOrderLookup.get(tableRecord.id);
    if (existingOrder) {
      showToast({ message: `Table ${tableRecord.tableName} already has an active ticket.`, severity: 'info' });
      return;
    }

    createTableOrderMutation.mutate({
      tableId: tableRecord.id,
      shopId: activeShopId,
      roomId: tableRecord.roomId,
      tableName: tableRecord.tableName,
      seats: tableRecord.seats || buildSeatLayout(getSeatCount(tableRecord)),
    });
  };

  const handleCloseTicket = (order: PosTableOrderRecord) => {
    updateTableOrderMutation.mutate({
      id: order.id,
      tableName: order.tableName,
      seats: order.seats || [],
      orderStatus: 'closed',
    });
  };

  const handleArchiveTicket = (order: PosTableOrderRecord) => {
    deleteTableOrderMutation.mutate(order.id);
  };

  const nonTableContent = (
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
            <Typography variant="body2">shopId: {activeShopId || 'n/a'}</Typography>
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
    </Grid>
  );

  const tablesContent = (
    <Stack spacing={3}>
      <Card sx={{ p: 3 }}>
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'stretch', lg: 'center' }}
        >
          <Box>
            <Typography variant="h4">Dining Room Tables</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              Manage floor tables, guest counts, and live tickets from one operational view.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <TextField
              size="small"
              label="Shop ID"
              value={shopIdInput}
              onChange={(event) => setShopIdInput(event.target.value)}
              sx={{ minWidth: { sm: 280 } }}
            />
            <Button variant="contained" onClick={handleApplyShopContext}>
              Load shop
            </Button>
          </Stack>
        </Stack>
      </Card>

      {!activeShopId ? (
        <Alert severity="info">
          Enter a shop ID to load the POS floor, tables, and active table tickets.
        </Alert>
      ) : isLoading ? (
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {[
              { label: 'Tables', value: tableMetrics.totalTables, helper: 'Configured floor tables' },
              { label: 'Open tickets', value: tableMetrics.openTickets, helper: 'Current table tabs' },
              { label: 'Occupied tables', value: tableMetrics.occupiedTables, helper: 'Tables needing attention' },
              { label: 'Total seats', value: tableMetrics.totalSeats, helper: 'Capacity across this shop' },
            ].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.label}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                    {item.label}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1 }}>
                    {item.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                    {item.helper}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {editingTableId ? 'Edit Table' : 'Add Table'}
                </Typography>
                <Form methods={tableMethods} onSubmit={tableMethods.handleSubmit(handleSubmitTable)}>
                  <Stack spacing={2.5}>
                    <RHFTextField name="shopId" label="Shop ID" />
                    <RHFTextField name="tableName" label="Table Name" placeholder="Table 12" />
                    <RHFTextField name="tableShape" label="Table Shape" select>
                      <MenuItem value="square">Square</MenuItem>
                      <MenuItem value="rectangle">Rectangle</MenuItem>
                      <MenuItem value="round">Round</MenuItem>
                      <MenuItem value="booth">Booth</MenuItem>
                    </RHFTextField>
                    <RHFTextField name="roomId" label="Room / Zone" placeholder="Patio or Main Floor" />
                    <RHFTextField name="tableColor" label="Table Color" placeholder="#0ea5e9" />

                    <Stack direction="row" spacing={1.5}>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={createTableMutation.isPending || updateTableMutation.isPending}
                      >
                        {editingTableId ? 'Save table' : 'Create table'}
                      </Button>
                      {editingTableId ? (
                        <Button color="inherit" onClick={handleCancelEdit}>
                          Cancel
                        </Button>
                      ) : null}
                    </Stack>
                  </Stack>
                </Form>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={2}
                  justifyContent="space-between"
                  alignItems={{ xs: 'stretch', md: 'center' }}
                  sx={{ mb: 3 }}
                >
                  <Box>
                    <Typography variant="h6">Floor Overview</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Search tables and act on occupancy, guests, and tickets in real time.
                    </Typography>
                  </Box>
                  <TextField
                    size="small"
                    placeholder="Search table, zone, shape, or status"
                    value={tableSearch}
                    onChange={(event) => setTableSearch(event.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Iconify icon="solar:magnifer-bold-duotone" width={18} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ minWidth: { md: 320 } }}
                  />
                </Stack>

                <Grid container spacing={2}>
                  {filteredTables.map((tableRecord) => {
                    const tableMode = tableModeLookup.get(tableRecord.tableName.toLowerCase());
                    const activeOrder = tableOrderLookup.get(tableRecord.id);
                    const seatCount = getSeatCount(tableRecord);
                    const guestCount = tableMode?.guestCount || 0;
                    const operationalState = getOperationalState(activeOrder, tableMode);
                    const orderItemCount = Array.isArray(activeOrder?.seats) ? activeOrder!.seats!.length : 0;

                    return (
                      <Grid item xs={12} sm={6} key={tableRecord.id}>
                        <Card variant="outlined" sx={{ p: 2.5, height: '100%' }}>
                          <Stack spacing={2}>
                            <Stack direction="row" justifyContent="space-between" spacing={2}>
                              <Box>
                                <Typography variant="h6">{tableRecord.tableName}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                  {tableRecord.roomId || 'No zone assigned'}
                                </Typography>
                              </Box>
                              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent="flex-end">
                                <Chip size="small" label={operationalState.label} color={operationalState.color} variant="outlined" />
                                <Chip size="small" label={String(tableRecord.tableShape || 'square').toUpperCase()} variant="outlined" color="default" />
                              </Stack>
                            </Stack>

                            <Grid container spacing={1.5}>
                              <Grid item xs={6}>
                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
                                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                                    Seats
                                  </Typography>
                                  <Typography variant="h5">{seatCount}</Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
                                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                                    Guests
                                  </Typography>
                                  <Typography variant="h5">{guestCount}</Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
                                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                                    Ticket
                                  </Typography>
                                  <Typography variant="subtitle2">
                                    {activeOrder ? activeOrder.orderStatus || 'Open' : 'No active tab'}
                                  </Typography>
                                </Box>
                              </Grid>
                              <Grid item xs={6}>
                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'background.neutral' }}>
                                  <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                                    Items
                                  </Typography>
                                  <Typography variant="h5">{orderItemCount}</Typography>
                                </Box>
                              </Grid>
                            </Grid>

                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              <Button size="small" variant="outlined" onClick={() => increaseSeatMutation.mutate(tableRecord.id)}>
                                Seat +
                              </Button>
                              <Button size="small" variant="outlined" onClick={() => decreaseSeatMutation.mutate(tableRecord.id)}>
                                Seat -
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={() =>
                                  updateGuestCountMutation.mutate({
                                    tableNo: tableRecord.tableName,
                                    guestCount: Math.max(0, guestCount + 1),
                                    seats: tableMode?.seats || tableRecord.seats || buildSeatLayout(seatCount),
                                  })
                                }
                              >
                                Guest +
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                onClick={() =>
                                  updateGuestCountMutation.mutate({
                                    tableNo: tableRecord.tableName,
                                    guestCount: Math.max(0, guestCount - 1),
                                    seats: tableMode?.seats || tableRecord.seats || buildSeatLayout(seatCount),
                                  })
                                }
                              >
                                Guest -
                              </Button>
                            </Stack>

                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              {activeOrder ? (
                                <>
                                  <Button size="small" variant="contained" onClick={() => handleCloseTicket(activeOrder)}>
                                    Close ticket
                                  </Button>
                                  <Button size="small" color="inherit" onClick={() => handleArchiveTicket(activeOrder)}>
                                    Archive ticket
                                  </Button>
                                </>
                              ) : (
                                <Button size="small" variant="contained" onClick={() => handleOpenTicket(tableRecord)}>
                                  Open ticket
                                </Button>
                              )}
                              <Button size="small" color="inherit" onClick={() => handleEditTable(tableRecord)}>
                                Edit
                              </Button>
                              <Button size="small" color="error" onClick={() => deleteTableMutation.mutate(tableRecord.id)}>
                                Delete
                              </Button>
                            </Stack>

                            <Divider />

                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              {[
                                { label: 'Hold', value: 'hold' },
                                { label: 'Stay', value: 'stay' },
                                { label: 'Send', value: 'send' },
                                { label: 'Clear', value: '' },
                              ].map((stateOption) => (
                                <Button
                                  key={stateOption.label}
                                  size="small"
                                  variant={String(tableMode?.orderState || '') === stateOption.value ? 'contained' : 'outlined'}
                                  color={stateOption.value === 'send' ? 'warning' : 'inherit'}
                                  onClick={() =>
                                    updateTableStateMutation.mutate({
                                      tableNo: tableRecord.tableName,
                                      orderState: stateOption.value,
                                    })
                                  }
                                >
                                  {stateOption.label}
                                </Button>
                              ))}
                            </Stack>
                          </Stack>
                        </Card>
                      </Grid>
                    );
                  })}

                  {filteredTables.length === 0 ? (
                    <Grid item xs={12}>
                      <Card sx={{ py: 10, textAlign: 'center', border: '2px dashed', borderColor: 'divider', bgcolor: 'transparent' }}>
                        <Iconify icon="solar:tuning-square-2-bold-duotone" width={64} sx={{ color: 'text.disabled', mb: 2 }} />
                        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                          No tables found for this shop
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                          Create a table or adjust the shop and search context.
                        </Typography>
                      </Card>
                    </Grid>
                  ) : null}
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </>
      )}
    </Stack>
  );

  if (mode === 'tables') {
    return (
      <DashboardContent maxWidth="xl">
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">POS Tables</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {activeShopId ? (
              <>
                <Button component={Link} href={paths.dashboard.pos(activeShopId)} variant="soft" color="inherit">
                  POS
                </Button>
                <Button component={Link} href={paths.dashboard.posSettings(activeShopId)} variant="soft" color="inherit">
                  Settings
                </Button>
                <Button component={Link} href={paths.dashboard.posOrders(activeShopId)} variant="soft" color="inherit">
                  Orders
                </Button>
                <Button component={Link} href={paths.dashboard.posKds(activeShopId)} variant="soft" color="inherit">
                  KDS
                </Button>
                <Button component={Link} href={paths.dashboard.posCfd(activeShopId)} variant="soft" color="inherit">
                  CFD
                </Button>
              </>
            ) : null}
          </Stack>
        </Box>
        {tablesContent}
      </DashboardContent>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (mode === 'pos' || mode === 'settings' || mode === 'orders' || mode === 'kds' || mode === 'cfd' || mode === 'kiosk' || mode === 'stock-manager') {
    return (
      <DashboardContent maxWidth="xl">
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">POS</Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {activeShopId ? (
              <>
                <Button component={Link} href={paths.dashboard.pos(activeShopId)} variant="soft" color="inherit">POS</Button>
                <Button component={Link} href={paths.dashboard.posSettings(activeShopId)} variant="soft" color="inherit">Settings</Button>
                <Button component={Link} href={paths.dashboard.posOrders(activeShopId)} variant="soft" color="inherit">Orders</Button>
                <Button component={Link} href={paths.dashboard.posKds(activeShopId)} variant="soft" color="inherit">KDS</Button>
                <Button component={Link} href={paths.dashboard.posCfd(activeShopId)} variant="soft" color="inherit">CFD</Button>
              </>
            ) : null}
            <Button component={Link} href={paths.dashboard.posTables} variant="soft" color="inherit">Tables</Button>
          </Stack>
        </Box>
        {nonTableContent}
      </DashboardContent>
    );
  }

  return (
    <FeatureRouteShell
      title="POS Public Flow"
      description="Legacy POS public and operational routes mapped into the micro-app."
      links={[
        { href: paths.dashboard.posTables, label: 'Dashboard Tables' },
        ...(activeShopId ? [{ href: paths.dashboard.pos(activeShopId), label: 'Dashboard POS' }] : []),
      ]}
    >
      {nonTableContent}
    </FeatureRouteShell>
  );
}
