'use client';

import { useMemo, useState } from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import {
  useConnectMagentoMutation,
  useDisconnectMagentoMutation,
  useMagentoConnection,
  useMagentoCustomers,
  useMagentoDownstreamHealth,
  useMagentoOrders,
  useMagentoProducts,
  useMagentoStores,
  useSyncMagentoCustomersMutation,
  useSyncMagentoOrdersMutation,
} from 'src/hooks/use-magento';
import { toast } from 'src/components/snackbar';
import type {
  MagentoCustomer,
  MagentoListResponse,
  MagentoOrder,
  MagentoProduct,
  MagentoStore,
  MagentoSyncResult,
} from 'src/types/magento';

type PreviewTab = 'stores' | 'products' | 'customers' | 'orders';
type SyncAction = 'dry-customers' | 'dry-orders' | 'push-customers' | 'push-orders';

type ListPayload<T> = MagentoListResponse<T> | T[] | undefined;

function formatDate(value?: string): string {
  if (!value) return '-';
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? value : date.toLocaleString();
}

function formatCurrency(value?: number | string): string {
  if (value === undefined || value === null || value === '') return '-';
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return String(value);
  return numeric.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getListData<T>(payload: ListPayload<T>): { items: T[]; totalCount?: number } {
  if (!payload) return { items: [] };
  if (Array.isArray(payload)) return { items: payload, totalCount: payload.length };
  return {
    items: Array.isArray(payload.items) ? payload.items : [],
    totalCount: payload.total_count,
  };
}

export function MagentoIntegrationView() {
  const [previewTab, setPreviewTab] = useState<PreviewTab>('stores');
  const [syncDialogOpen, setSyncDialogOpen] = useState(false);
  const [pendingSyncAction, setPendingSyncAction] = useState<SyncAction | null>(null);
  const [latestSyncResult, setLatestSyncResult] = useState<MagentoSyncResult | null>(null);

  const [connectForm, setConnectForm] = useState({
    baseUrl: '',
    accessToken: '',
    storeCode: '',
  });

  const connectionQuery = useMagentoConnection();
  const healthQuery = useMagentoDownstreamHealth();
  const storesQuery = useMagentoStores();
  const productsQuery = useMagentoProducts({ page: 1, pageSize: 20 });
  const customersQuery = useMagentoCustomers({ page: 1, pageSize: 20 });
  const ordersQuery = useMagentoOrders({ page: 1, pageSize: 20 });

  const connectMutation = useConnectMagentoMutation();
  const disconnectMutation = useDisconnectMagentoMutation();
  const syncCustomersMutation = useSyncMagentoCustomersMutation();
  const syncOrdersMutation = useSyncMagentoOrdersMutation();

  const isConnected = Boolean(connectionQuery.data?.connected);

  const productsData = useMemo(
    () => getListData<MagentoProduct>(productsQuery.data),
    [productsQuery.data]
  );
  const customersData = useMemo(
    () => getListData<MagentoCustomer>(customersQuery.data),
    [customersQuery.data]
  );
  const ordersData = useMemo(() => getListData<MagentoOrder>(ordersQuery.data), [ordersQuery.data]);

  const currentPreviewQuery =
    previewTab === 'stores'
      ? storesQuery
      : previewTab === 'products'
        ? productsQuery
        : previewTab === 'customers'
          ? customersQuery
          : ordersQuery;

  const isSyncing = syncCustomersMutation.isPending || syncOrdersMutation.isPending;

  const handleRefreshStatus = async () => {
    await Promise.all([connectionQuery.refetch(), healthQuery.refetch()]);
  };

  const handleConnect = async () => {
    if (!connectForm.baseUrl || !connectForm.accessToken) {
      toast.error('Magento Base URL and Access Token are required.');
      return;
    }

    try {
      await connectMutation.mutateAsync({
        baseUrl: connectForm.baseUrl,
        accessToken: connectForm.accessToken,
        storeCode: connectForm.storeCode || undefined,
      });
      setConnectForm((prev) => ({ ...prev, accessToken: '' }));
      toast.success('Magento connection updated.');
    } catch (error: any) {
      toast.error(error?.message || 'Failed to connect Magento.');
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectMutation.mutateAsync();
      setLatestSyncResult(null);
      toast.success('Magento disconnected.');
    } catch (error: any) {
      toast.error(error?.message || 'Failed to disconnect Magento.');
    }
  };

  const runSyncAction = async (action: SyncAction) => {
    try {
      const result =
        action === 'dry-customers'
          ? await syncCustomersMutation.mutateAsync({ dryRun: true })
          : action === 'dry-orders'
            ? await syncOrdersMutation.mutateAsync({ dryRun: true })
            : action === 'push-customers'
              ? await syncCustomersMutation.mutateAsync({ dryRun: false, push: true })
              : await syncOrdersMutation.mutateAsync({ dryRun: false, push: true });

      setLatestSyncResult(result);
      toast.success(result.message || 'Magento sync completed.');
    } catch (error: any) {
      toast.error(error?.message || 'Sync failed.');
    }
  };

  const requestPushConfirmation = (action: SyncAction) => {
    setPendingSyncAction(action);
    setSyncDialogOpen(true);
  };

  const confirmPushAction = async () => {
    if (!pendingSyncAction) return;

    setSyncDialogOpen(false);
    await runSyncAction(pendingSyncAction);
    setPendingSyncAction(null);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4">Magento Integration</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          Admin integration routes use the canonical gateway base: /api/magento/*.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Connection
            </Typography>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Magento Base URL"
                value={connectForm.baseUrl}
                onChange={(event) => setConnectForm((prev) => ({ ...prev, baseUrl: event.target.value }))}
                placeholder="https://your-magento.example"
                inputProps={{ 'data-testid': 'magento-base-url-input' }}
              />
              <TextField
                fullWidth
                type="password"
                label="Access Token"
                value={connectForm.accessToken}
                autoComplete="new-password"
                onChange={(event) =>
                  setConnectForm((prev) => ({ ...prev, accessToken: event.target.value }))
                }
                inputProps={{ 'data-testid': 'magento-access-token-input' }}
              />
              <TextField
                fullWidth
                label="Store Code"
                value={connectForm.storeCode}
                onChange={(event) => setConnectForm((prev) => ({ ...prev, storeCode: event.target.value }))}
                inputProps={{ 'data-testid': 'magento-store-code-input' }}
              />

              <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                <Button
                  variant="contained"
                  onClick={handleConnect}
                  disabled={connectMutation.isPending}
                  data-testid="magento-connect-button"
                >
                  {connectMutation.isPending ? 'Connecting...' : 'Connect / Test connection'}
                </Button>
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={handleDisconnect}
                  disabled={disconnectMutation.isPending || !isConnected}
                >
                  {disconnectMutation.isPending ? 'Disconnecting...' : 'Disconnect'}
                </Button>
                <Button variant="soft" color="inherit" onClick={handleRefreshStatus}>
                  Refresh connection status
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Status
            </Typography>

            {connectionQuery.isLoading ? (
              <CircularProgress size={20} />
            ) : connectionQuery.isError ? (
              <Alert severity="error">{(connectionQuery.error as Error).message}</Alert>
            ) : (
              <Stack spacing={1.25}>
                <Typography variant="body2">
                  Connected: <strong>{isConnected ? 'Yes' : 'No'}</strong>
                </Typography>
                <Typography variant="body2">Base URL: {connectionQuery.data?.baseUrl || '-'}</Typography>
                <Typography variant="body2">Store code: {connectionQuery.data?.storeCode || '-'}</Typography>
                <Typography variant="body2">
                  Last checked: {formatDate(connectionQuery.data?.lastCheckedAt)}
                </Typography>
              </Stack>
            )}

            <Box sx={{ mt: 2.5 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Downstream health
              </Typography>

              {healthQuery.isLoading ? (
                <CircularProgress size={20} />
              ) : healthQuery.isError ? (
                <Alert severity="error">{(healthQuery.error as Error).message}</Alert>
              ) : (
                <Stack spacing={1}>
                  <Typography variant="body2">
                    CRM health:{' '}
                    {healthQuery.data?.crm
                      ? healthQuery.data.crm.ok
                        ? 'Healthy'
                        : healthQuery.data.crm.message || 'Unreachable'
                      : '-'}
                  </Typography>
                  <Typography variant="body2">
                    Billing health:{' '}
                    {healthQuery.data?.billing
                      ? healthQuery.data.billing.ok
                        ? 'Healthy'
                        : healthQuery.data.billing.message || 'Unreachable'
                      : '-'}
                  </Typography>
                </Stack>
              )}
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Magento Data Preview
            </Typography>

            <Tabs value={previewTab} onChange={(_, value) => setPreviewTab(value)} sx={{ mb: 2 }}>
              <Tab value="stores" label="Stores" />
              <Tab value="products" label="Products" />
              <Tab value="customers" label="Customers" />
              <Tab value="orders" label="Orders" />
            </Tabs>

            {!isConnected && previewTab !== 'stores' && (
              <Alert severity="warning" sx={{ mb: 2 }}>
                Magento is not connected.
              </Alert>
            )}

            {currentPreviewQuery.isLoading ? (
              <CircularProgress size={24} />
            ) : currentPreviewQuery.isError ? (
              <Alert severity="error">{(currentPreviewQuery.error as Error).message}</Alert>
            ) : previewTab === 'stores' ? (
              <StoresTable stores={storesQuery.data || []} />
            ) : previewTab === 'products' ? (
              <ProductsTable items={productsData.items} totalCount={productsData.totalCount} />
            ) : previewTab === 'customers' ? (
              <CustomersTable items={customersData.items} totalCount={customersData.totalCount} />
            ) : (
              <OrdersTable items={ordersData.items} totalCount={ordersData.totalCount} />
            )}
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
              Sync
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              Default sync actions run in dry-run mode.
            </Typography>

            <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
              <Button
                variant="outlined"
                onClick={() => runSyncAction('dry-customers')}
                disabled={isSyncing}
                data-testid="magento-sync-dry-customers"
              >
                Dry-run customer sync
              </Button>
              <Button
                variant="outlined"
                onClick={() => runSyncAction('dry-orders')}
                disabled={isSyncing}
                data-testid="magento-sync-dry-orders"
              >
                Dry-run order sync
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => requestPushConfirmation('push-customers')}
                disabled={isSyncing}
                data-testid="magento-sync-push-customers"
              >
                Push customers to CRM
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => requestPushConfirmation('push-orders')}
                disabled={isSyncing}
                data-testid="magento-sync-push-orders"
              >
                Push orders to Billing/CRM
              </Button>
            </Stack>

            {latestSyncResult && (
              <Card variant="outlined" sx={{ p: 2, mt: 2.5 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Latest sync result
                </Typography>
                <Stack spacing={0.75}>
                  <Typography variant="body2">entity: {latestSyncResult.entity}</Typography>
                  <Typography variant="body2">dryRun: {String(latestSyncResult.dryRun)}</Typography>
                  <Typography variant="body2">seen: {latestSyncResult.seen}</Typography>
                  <Typography variant="body2">pushed: {latestSyncResult.pushed ?? 0}</Typography>
                  <Typography variant="body2">skipped: {latestSyncResult.skipped ?? 0}</Typography>
                  <Typography variant="body2">
                    errors: {Array.isArray(latestSyncResult.errors) ? latestSyncResult.errors.length : 0}
                  </Typography>
                  <Typography variant="body2">message: {latestSyncResult.message || '-'}</Typography>
                </Stack>
              </Card>
            )}
          </Card>
        </Grid>
      </Grid>

      <Dialog open={syncDialogOpen} onClose={() => setSyncDialogOpen(false)}>
        <DialogTitle>Confirm push sync</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            This will push Magento data into CRM/Billing. Continue?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSyncDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmPushAction} variant="contained" color="warning">
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardContent>
  );
}

function StoresTable({ stores }: { stores: MagentoStore[] }) {
  if (!stores.length) {
    return <Alert severity="info">No stores found.</Alert>;
  }

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Website ID</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((store, index) => (
            <TableRow key={`${store.id || 'store'}-${index}`}>
              <TableCell>{store.code || '-'}</TableCell>
              <TableCell>{store.name || '-'}</TableCell>
              <TableCell>{store.website_id ?? '-'}</TableCell>
              <TableCell>{store.is_active === 1 || store.is_active === true ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ProductsTable({ items, totalCount }: { items: MagentoProduct[]; totalCount?: number }) {
  if (!items.length) {
    return <Alert severity="info">No products found.</Alert>;
  }

  return (
    <>
      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mb: 1 }}>
        Total: {totalCount ?? items.length}
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((product, index) => (
              <TableRow key={`${product.sku || 'product'}-${index}`}>
                <TableCell>{product.sku}</TableCell>
                <TableCell>{product.name || '-'}</TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell>{product.type_id || '-'}</TableCell>
                <TableCell>{product.status === 1 ? 'Enabled' : product.status === 2 ? 'Disabled' : '-'}</TableCell>
                <TableCell>{formatDate(product.updated_at)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function CustomersTable({ items, totalCount }: { items: MagentoCustomer[]; totalCount?: number }) {
  if (!items.length) {
    return <Alert severity="info">No customers found.</Alert>;
  }

  return (
    <>
      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mb: 1 }}>
        Total: {totalCount ?? items.length}
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{`${customer.firstname || ''} ${customer.lastname || ''}`.trim() || '-'}</TableCell>
                <TableCell>{formatDate(customer.updated_at)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function OrdersTable({ items, totalCount }: { items: MagentoOrder[]; totalCount?: number }) {
  if (!items.length) {
    return <Alert severity="info">No orders found.</Alert>;
  }

  return (
    <>
      <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mb: 1 }}>
        Total: {totalCount ?? items.length}
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Order #</TableCell>
              <TableCell>Customer Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Grand Total</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((order) => (
              <TableRow key={order.entity_id}>
                <TableCell>{order.increment_id || order.entity_id}</TableCell>
                <TableCell>{order.customer_email || '-'}</TableCell>
                <TableCell>{order.status || '-'}</TableCell>
                <TableCell>{formatCurrency(order.grand_total)}</TableCell>
                <TableCell>{order.order_currency_code || '-'}</TableCell>
                <TableCell>{formatDate(order.created_at)}</TableCell>
                <TableCell>{formatDate(order.updated_at)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
