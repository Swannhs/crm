'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import Alert from '@mui/material/Alert';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
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
import { commerceService } from 'src/services/commerce-service';
import { posService } from 'src/services/pos-service';
import { organizationService } from 'src/services/organization-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { PosPublicFlowView } from 'src/sections/commerce/view/pos-public-flow-view';
import { Form, RHFTextField } from 'src/components/hook-form';
import { Iconify } from 'src/components/iconify';
import { showToast } from 'src/components/toast';

// ----------------------------------------------------------------------

const SHOP_CONTEXT_STORAGE_KEY = 'pos-tables:selected-shop-id';
const POS_RETAIL_CART_STORAGE_KEY_PREFIX = 'pos-retail-cart';

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
  channel?: 'dine_in' | 'takeaway' | 'delivery' | 'ecommerce';
  source?: 'odoo_pos' | 'magento' | 'manual';
  fulfillmentStatus?: 'draft' | 'sent_to_kitchen' | 'ready_for_pickup' | 'out_for_delivery' | 'completed';
  customerId?: string | null;
  customerName?: string | null;
  customerPhone?: string | null;
  deliveryAddress?: string | null;
  orderStatus?: string | null;
  seats?: any[];
  lines?: any[];
  payments?: any[];
  ticketNo?: string;
  subtotalAmount?: number;
  taxAmount?: number;
  serviceChargeAmount?: number;
  tipAmount?: number;
  totalAmount?: number;
  paidAmount?: number;
  balanceDue?: number;
  createdAt?: string;
  updatedAt?: string;
};

type ShopOption = {
  id: string;
  name: string;
  subtitle: string;
};

type KdsQueueItem = {
  lineId: string;
  orderId: string;
  ticketNo: string;
  tableName: string;
  itemName: string;
  quantity: number;
  station: 'kitchen' | 'bar' | 'dessert';
  prepStatus: 'queued' | 'preparing' | 'ready' | 'served';
  queuedAt?: string;
  startedAt?: string | null;
  completedAt?: string | null;
  note?: string | null;
};

type PosCustomerRecord = {
  id: string;
  name: string;
  phone?: string | null;
  email?: string | null;
  loyaltyPoints?: number;
  totalSpend?: number;
  totalOrders?: number;
};

type RetailCartLine = {
  productId: string;
  sku: string;
  name: string;
  price: number;
  qty: number;
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
  channel: item?.channel || 'dine_in',
  source: item?.source || 'odoo_pos',
  fulfillmentStatus: item?.fulfillmentStatus || 'draft',
  customerId: item?.customerId || null,
  customerName: item?.customerName || null,
  customerPhone: item?.customerPhone || null,
  deliveryAddress: item?.deliveryAddress || null,
  orderStatus: item?.orderStatus ? String(item.orderStatus) : '',
  seats: Array.isArray(item?.seats) ? item.seats : [],
  lines: Array.isArray(item?.lines) ? item.lines : [],
  payments: Array.isArray(item?.payments) ? item.payments : [],
  ticketNo: item?.ticketNo ? String(item.ticketNo) : undefined,
  subtotalAmount: Number(item?.subtotalAmount ?? 0),
  taxAmount: Number(item?.taxAmount ?? 0),
  serviceChargeAmount: Number(item?.serviceChargeAmount ?? 0),
  tipAmount: Number(item?.tipAmount ?? 0),
  totalAmount: Number(item?.totalAmount ?? 0),
  paidAmount: Number(item?.paidAmount ?? 0),
  balanceDue: Number(item?.balanceDue ?? 0),
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

function openReceiptPrintWindow(order: PosTableOrderRecord | null) {
  if (!order || typeof window === 'undefined') return;

  const title = `Receipt ${order.ticketNo || order.id}`;
  const createdAt = order.createdAt ? new Date(order.createdAt).toLocaleString() : new Date().toLocaleString();
  const rows = [
    ['Order', order.ticketNo || order.id],
    ['Customer', order.customerName || 'Walk-in'],
    ['Status', order.orderStatus || 'open'],
    ['Channel', order.channel || 'ecommerce'],
    ['Total', `$${Number(order.totalAmount || 0).toFixed(2)}`],
    ['Paid', `$${Number(order.paidAmount || 0).toFixed(2)}`],
    ['Due', `$${Number(order.balanceDue || 0).toFixed(2)}`],
  ];

  const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 16px; color: #111; }
      .receipt { max-width: 320px; margin: 0 auto; }
      h1 { font-size: 18px; margin: 0 0 6px; text-align: center; }
      .meta { font-size: 12px; color: #444; text-align: center; margin-bottom: 12px; }
      table { width: 100%; border-collapse: collapse; font-size: 13px; }
      td { padding: 6px 0; vertical-align: top; }
      td:first-child { color: #555; width: 42%; }
      td:last-child { text-align: right; font-weight: 600; }
      .line { border-top: 1px dashed #999; margin: 10px 0; }
      .footer { text-align: center; font-size: 12px; color: #555; margin-top: 12px; }
      @media print {
        body { padding: 0; }
        .receipt { max-width: none; }
      }
    </style>
  </head>
  <body>
    <div class="receipt">
      <h1>POS RECEIPT</h1>
      <div class="meta">${createdAt}</div>
      <div class="line"></div>
      <table>
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td>${String(label)}</td><td>${String(value)}</td></tr>`
          )
          .join('')}
      </table>
      <div class="line"></div>
      <div class="footer">Thank you for your purchase</div>
    </div>
    <script>
      window.onload = function () {
        window.focus();
        window.print();
        setTimeout(function(){ window.close(); }, 150);
      };
    </script>
  </body>
</html>`;

  const printWindow = window.open('', '_blank', 'width=420,height=640');
  if (!printWindow) return;
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
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
  const [selectedShop, setSelectedShop] = useState<ShopOption | null>(null);
  const [tableSearch, setTableSearch] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('all');
  const [barcodeInput, setBarcodeInput] = useState('');
  const [selectedCustomerId, setSelectedCustomerId] = useState('walk-in');
  const [retailCart, setRetailCart] = useState<RetailCartLine[]>([]);
  const [lastPlacedOrderId, setLastPlacedOrderId] = useState<string | null>(null);
  const [receiptDialogOpen, setReceiptDialogOpen] = useState(false);
  const [orderDetailDialogOpen, setOrderDetailDialogOpen] = useState(false);
  const [refundDialogOpen, setRefundDialogOpen] = useState(false);
  const [selectedOrderForAction, setSelectedOrderForAction] = useState<PosTableOrderRecord | null>(null);
  const [refundAmountInput, setRefundAmountInput] = useState('');
  const [editingTableId, setEditingTableId] = useState<string | null>(null);
  const [settingsForm, setSettingsForm] = useState({
    numberPadFirstValue: '',
    numberPadSecondValue: '',
    numberPadThirdValue: '',
    taxRatePercent: '',
    serviceChargeRatePercent: '',
    tipPercentages: '10,15,20',
  });

  const tableMethods = useForm({
    resolver: zodResolver(TableSchema),
    defaultValues: { shopId: shopId || '', tableName: '', tableShape: 'square', roomId: '', tableColor: '' },
  });

  const shopsQuery = useQuery({
    queryKey: ['pos-shop-locations'],
    queryFn: () => organizationService.getLocations(),
  });

  const shopOptions = useMemo<ShopOption[]>(
    () =>
      (Array.isArray(shopsQuery.data) ? shopsQuery.data : []).map((location: any) => ({
        id: String(location?.id || ''),
        name: String(location?.name || 'Unnamed Shop'),
        subtitle: [location?.city, location?.state, location?.country].filter(Boolean).join(', ') || 'No address',
      })),
    [shopsQuery.data]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedShopId = window.localStorage.getItem(SHOP_CONTEXT_STORAGE_KEY) || '';
    const initialShopId = shopId || storedShopId || fallbackOrgId || '';

    setActiveShopId(initialShopId);
    tableMethods.reset({
      shopId: initialShopId,
      tableName: '',
      tableShape: 'square',
      roomId: '',
      tableColor: '',
    });
  }, [fallbackOrgId, shopId, tableMethods]);

  useEffect(() => {
    if (!activeShopId) {
      setSelectedShop(null);
      return;
    }

    const matched = shopOptions.find((option) => option.id === activeShopId);
    if (matched) {
      setSelectedShop(matched);
      return;
    }

    setSelectedShop({
      id: activeShopId,
      name: `Shop ${activeShopId.slice(0, 8)}`,
      subtitle: 'Current POS context',
    });
  }, [activeShopId, shopOptions]);

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

  const kdsQueueQuery = useQuery({
    queryKey: ['pos-kds-queue', activeShopId],
    queryFn: () => posService.getKdsQueue(activeShopId),
    enabled: Boolean(activeShopId) && mode === 'kds',
    refetchInterval: 10000,
  });

  const cfdSnapshotQuery = useQuery({
    queryKey: ['pos-cfd-snapshot', activeShopId],
    queryFn: () => posService.getCfdSnapshot(activeShopId),
    enabled: Boolean(activeShopId) && mode === 'cfd',
    refetchInterval: 10000,
  });

  const maintenanceDevicesQuery = useQuery({
    queryKey: ['pos-maintenance-devices', activeShopId],
    queryFn: () => posService.getMaintenanceDevices(activeShopId),
    enabled: Boolean(activeShopId) && ['kds', 'stock-manager'].includes(mode),
  });

  const maintenanceIncidentsQuery = useQuery({
    queryKey: ['pos-maintenance-incidents', activeShopId],
    queryFn: () => posService.getMaintenanceIncidents(activeShopId),
    enabled: Boolean(activeShopId) && ['kds', 'stock-manager'].includes(mode),
  });

  const customersQuery = useQuery({
    queryKey: ['pos-customers', activeShopId],
    queryFn: () => posService.getCustomers(activeShopId),
    enabled: Boolean(activeShopId) && ['orders', 'pos', 'deliver', 'table-join-approve'].includes(mode),
  });

  const inventoryQuery = useQuery({
    queryKey: ['pos-inventory', activeShopId],
    queryFn: () => posService.getInventory(activeShopId),
    enabled: Boolean(activeShopId) && ['stock-manager', 'orders'].includes(mode),
  });

  const analyticsQuery = useQuery({
    queryKey: ['pos-order-analytics', activeShopId],
    queryFn: () => posService.getOrderAnalytics(activeShopId, 30),
    enabled: Boolean(activeShopId) && ['orders', 'settings', 'pos'].includes(mode),
  });

  const magentoProductsQuery = useQuery({
    queryKey: ['pos-magento-products', activeShopId, productSearch],
    enabled: Boolean(activeShopId) && mode === 'pos',
    queryFn: () =>
      commerceService.getProductsPage(activeShopId, {
        currentPage: 1,
        pageSize: 60,
        search: productSearch.trim(),
      }),
  });

  useEffect(() => {
    const settings = settingsQuery.data;
    if (!settings) return;
    setSettingsForm({
      numberPadFirstValue: String(settings.numberPadFirstValue ?? ''),
      numberPadSecondValue: String(settings.numberPadSecondValue ?? ''),
      numberPadThirdValue: String(settings.numberPadThirdValue ?? ''),
      taxRatePercent: String(Math.round(Number(settings.taxRate ?? 0) * 10000) / 100),
      serviceChargeRatePercent: String(Math.round(Number(settings.serviceChargeRate ?? 0) * 10000) / 100),
      tipPercentages: Array.isArray(settings.tipPercentages) ? settings.tipPercentages.join(',') : '10,15,20',
    });
  }, [settingsQuery.data]);

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

  const updateNumberPadMutation = useMutation({
    mutationFn: () =>
      posService.updateNumberPad({
        shopId: activeShopId,
        numberPadFirstValue: Number(settingsForm.numberPadFirstValue || 0),
        numberPadSecondValue: Number(settingsForm.numberPadSecondValue || 0),
        numberPadThirdValue: Number(settingsForm.numberPadThirdValue || 0),
        taxRate: Number(settingsForm.taxRatePercent || 0),
        serviceChargeRate: Number(settingsForm.serviceChargeRatePercent || 0),
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['pos-settings', activeShopId] });
      showToast({ message: 'POS pricing settings updated.', severity: 'success' });
    },
  });

  const updateTipConfigMutation = useMutation({
    mutationFn: () =>
      posService.updateConfigureTip({
        shopId: activeShopId,
        tipEnabled: true,
        tipPercentages: settingsForm.tipPercentages
          .split(',')
          .map((item) => Number(item.trim()))
          .filter((value) => Number.isFinite(value)),
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['pos-settings', activeShopId] });
      showToast({ message: 'Tip configuration saved.', severity: 'success' });
    },
  });

  const openShiftMutation = useMutation({
    mutationFn: () => posService.openShift({ shopId: activeShopId, name: 'General Shift', openingCash: 200 }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['pos-settings', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-tip-shifts', activeShopId] }),
      ]);
      showToast({ message: 'Shift opened.', severity: 'success' });
    },
  });

  const closeShiftMutation = useMutation({
    mutationFn: () => posService.closeShift({ shopId: activeShopId }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['pos-settings', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-tip-shifts', activeShopId] }),
      ]);
      showToast({ message: 'Shift closed.', severity: 'success' });
    },
  });

  const addOrderItemMutation = useMutation({
    mutationFn: (targetOrderId: string) =>
      posService.addOrderItem(targetOrderId, {
        name: 'Chef Special',
        quantity: 1,
        unitPrice: 14.5,
        note: 'Added from dashboard',
      }),
    onSuccess: invalidatePosTableQueries,
  });

  const addOrderPaymentMutation = useMutation({
    mutationFn: ({ orderId: targetOrderId, amount }: { orderId: string; amount: number }) =>
      posService.addOrderPayment(targetOrderId, {
        method: 'cash',
        amount,
      }),
    onSuccess: invalidatePosTableQueries,
  });

  const assignOrderCustomerMutation = useMutation({
    mutationFn: ({ orderId: targetOrderId, customerId }: { orderId: string; customerId: string }) =>
      posService.assignOrderCustomer(targetOrderId, { customerId }),
    onSuccess: invalidatePosTableQueries,
  });

  const updateOrderFulfillmentMutation = useMutation({
    mutationFn: ({
      orderId: targetOrderId,
      fulfillmentStatus,
      orderStatus,
    }: {
      orderId: string;
      fulfillmentStatus: 'draft' | 'sent_to_kitchen' | 'ready_for_pickup' | 'out_for_delivery' | 'completed';
      orderStatus?: 'open' | 'sent' | 'paid';
    }) =>
      posService.updateOrderFulfillment(targetOrderId, { fulfillmentStatus, orderStatus }),
    onSuccess: invalidatePosTableQueries,
  });

  const refundOrderMutation = useMutation({
    mutationFn: ({ orderId: targetOrderId, amount }: { orderId: string; amount: number }) =>
      posService.refundOrder(targetOrderId, { amount, reason: 'Dashboard quick refund', restock: true }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['pos-table-orders', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-inventory', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-order-analytics', activeShopId] }),
      ]);
    },
  });

  const seedDemoOrdersMutation = useMutation({
    mutationFn: () => posService.seedDemoEcommerceOrders({ shopId: activeShopId, count: 8 }),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['pos-table-orders', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-kds-queue', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-cfd-snapshot', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-order-analytics', activeShopId] }),
      ]);
      showToast({ message: 'Demo ecommerce orders generated.', severity: 'success' });
    },
  });

  const adjustInventoryMutation = useMutation({
    mutationFn: ({ inventoryItemId, quantityDelta }: { inventoryItemId: string; quantityDelta: number }) =>
      posService.adjustInventory({
        shopId: activeShopId,
        inventoryItemId,
        quantityDelta,
        reason: quantityDelta > 0 ? 'restock' : 'waste',
        note: 'Dashboard quick adjustment',
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['pos-inventory', activeShopId] });
      showToast({ message: 'Inventory adjusted.', severity: 'success' });
    },
  });

  const updateKdsLineStatusMutation = useMutation({
    mutationFn: ({ lineId, status }: { lineId: string; status: 'queued' | 'preparing' | 'ready' | 'served' }) =>
      posService.updateKdsLineStatus(activeShopId, lineId, status),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['pos-kds-queue', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-table-orders', activeShopId] }),
        queryClient.invalidateQueries({ queryKey: ['pos-cfd-snapshot', activeShopId] }),
      ]);
    },
  });

  const createMaintenanceIncidentMutation = useMutation({
    mutationFn: () =>
      posService.createMaintenanceIncident({
        shopId: activeShopId,
        title: 'POS terminal health-check required',
        severity: 'medium',
        description: 'Generated from POS workspace maintenance quick action.',
      }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['pos-maintenance-incidents', activeShopId] });
      showToast({ message: 'Maintenance incident logged.', severity: 'success' });
    },
  });
  const posCheckoutMutation = useMutation({
    mutationFn: async () => {
      if (!activeShopId) throw new Error('Shop context is missing.');
      if (retailCart.length === 0) throw new Error('Cart is empty.');
      const selectedCustomer = customers.find((customer) => customer.id === selectedCustomerId);
      const customerName = selectedCustomer?.name || 'Walk In';
      const [firstName = 'Walk', ...restName] = customerName.split(' ');
      const lastName = restName.join(' ') || 'Customer';
      const email = selectedCustomer?.email || `walkin+${Date.now()}@local.pos`;
      const phone = selectedCustomer?.phone || '0000000000';

      return commerceService.createPosOrderFromCart(activeShopId, {
        email,
        firstname: firstName,
        lastname: lastName,
        telephone: phone,
        street: 'POS Counter',
        city: 'Local',
        region: 'N/A',
        postcode: '00000',
        countryId: 'US',
        items: retailCart.map((line) => ({ sku: line.sku, qty: line.qty })),
      });
    },
    onSuccess: (result) => {
      setRetailCart([]);
      setBarcodeInput('');
      setLastPlacedOrderId(String(result.orderId));
      setReceiptDialogOpen(true);
      showToast({ message: `Order placed successfully. Magento order #${result.orderId}`, severity: 'success' });
      queryClient.invalidateQueries({ queryKey: ['pos-table-orders', activeShopId] });
    },
  });

  const isLoading =
    settingsQuery.isLoading ||
    shiftsQuery.isLoading ||
    tablesQuery.isLoading ||
    tableModeQuery.isLoading ||
    tableOrdersQuery.isLoading ||
    kdsQueueQuery.isLoading ||
    cfdSnapshotQuery.isLoading ||
    customersQuery.isLoading ||
    inventoryQuery.isLoading ||
    analyticsQuery.isLoading;

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
  const posRecentOrders = useMemo(
    () =>
      tableOrders
        .slice()
        .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))
        .slice(0, 6),
    [tableOrders]
  );
  const selectedOrderResolved = useMemo(
    () =>
      selectedOrderForAction
        || posRecentOrders.find((item) => item.id === lastPlacedOrderId || item.ticketNo === lastPlacedOrderId)
        || null,
    [lastPlacedOrderId, posRecentOrders, selectedOrderForAction]
  );

  const customers = useMemo<PosCustomerRecord[]>(
    () =>
      (Array.isArray(customersQuery.data) ? customersQuery.data : []).map((item: any) => ({
        id: String(item?.id || ''),
        name: String(item?.name || 'Guest'),
        phone: item?.phone || null,
        email: item?.email || null,
        loyaltyPoints: Number(item?.loyaltyPoints ?? 0),
        totalSpend: Number(item?.totalSpend ?? 0),
        totalOrders: Number(item?.totalOrders ?? 0),
      })),
    [customersQuery.data]
  );

  const inventoryData = inventoryQuery.data || { inventory: [], lowStock: [], movements: [] };
  const analytics = analyticsQuery.data || {
    orderCount: 0,
    revenue: 0,
    avgTicket: 0,
    refundAmount: 0,
    byChannel: { dine_in: 0, takeaway: 0, delivery: 0, ecommerce: 0 },
    topItems: [],
  };
  const magentoProducts = useMemo(
    () => (Array.isArray(magentoProductsQuery.data?.items) ? magentoProductsQuery.data.items : []),
    [magentoProductsQuery.data?.items]
  );
  const posCategoryOptions = useMemo(() => {
    const names = Array.from(
      new Set(
        magentoProducts
          .map((product: any) => String(product?.categoryName || '').trim())
          .filter(Boolean)
      )
    );
    return names.sort((a, b) => a.localeCompare(b));
  }, [magentoProducts]);
  const filteredPosProducts = useMemo(() => {
    if (productCategoryFilter === 'all') return magentoProducts;
    return magentoProducts.filter(
      (product: any) => String(product?.categoryName || '').trim() === productCategoryFilter
    );
  }, [magentoProducts, productCategoryFilter]);

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

  const applyShopContext = (nextShopId: string) => {
    setActiveShopId(nextShopId);
    if (typeof window !== 'undefined') {
      if (nextShopId) window.localStorage.setItem(SHOP_CONTEXT_STORAGE_KEY, nextShopId);
      else window.localStorage.removeItem(SHOP_CONTEXT_STORAGE_KEY);
    }
    setEditingTableId(null);
    tableMethods.reset({ shopId: nextShopId, tableName: '', tableShape: 'square', roomId: '', tableColor: '' });
  };

  const handleSelectShop = (_event: any, option: ShopOption | null) => {
    setSelectedShop(option);
    applyShopContext(option?.id || '');
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

  const handleAddSampleLine = (order: PosTableOrderRecord) => {
    addOrderItemMutation.mutate(order.id);
  };

  const handleSettleOrder = (order: PosTableOrderRecord) => {
    const amountToPay = Number(order.balanceDue ?? order.totalAmount ?? 0);
    if (amountToPay <= 0) {
      showToast({ message: 'Order is already settled.', severity: 'info' });
      return;
    }
    addOrderPaymentMutation.mutate({ orderId: order.id, amount: amountToPay });
  };

  const handleAssignCustomer = (order: PosTableOrderRecord) => {
    if (order.customerId) {
      showToast({ message: 'Order already has a customer.', severity: 'info' });
      return;
    }
    const defaultCustomer = customers[0];
    if (!defaultCustomer?.id) {
      showToast({ message: 'No customers available for assignment.', severity: 'warning' });
      return;
    }
    assignOrderCustomerMutation.mutate({ orderId: order.id, customerId: defaultCustomer.id });
  };

  const handleAdvanceFulfillment = (order: PosTableOrderRecord) => {
    const current = order.fulfillmentStatus || 'draft';
    const next =
      current === 'draft'
        ? { fulfillmentStatus: 'sent_to_kitchen', orderStatus: 'sent' as const }
        : current === 'sent_to_kitchen'
          ? { fulfillmentStatus: 'ready_for_pickup', orderStatus: 'sent' as const }
          : current === 'ready_for_pickup'
            ? {
                fulfillmentStatus: order.channel === 'delivery' ? 'out_for_delivery' : 'completed',
                orderStatus: order.channel === 'delivery' ? 'sent' : 'paid',
              }
            : current === 'out_for_delivery'
              ? { fulfillmentStatus: 'completed', orderStatus: 'paid' as const }
              : { fulfillmentStatus: 'completed', orderStatus: 'paid' as const };
    updateOrderFulfillmentMutation.mutate({ orderId: order.id, ...next });
  };

  const handleQuickRefund = (order: PosTableOrderRecord) => {
    const refundAmount = Number(order.paidAmount || 0);
    if (refundAmount <= 0) {
      showToast({ message: 'No paid amount available to refund.', severity: 'info' });
      return;
    }
    refundOrderMutation.mutate({ orderId: order.id, amount: refundAmount });
  };

  const handleKdsAdvance = (line: KdsQueueItem) => {
    const nextStatus =
      line.prepStatus === 'queued'
        ? 'preparing'
        : line.prepStatus === 'preparing'
          ? 'ready'
          : line.prepStatus === 'ready'
            ? 'served'
            : 'served';
    updateKdsLineStatusMutation.mutate({ lineId: line.lineId, status: nextStatus });
  };

  const addToRetailCart = (product: any) => {
    const sku = String(product?.sku || product?.id || '');
    if (!sku) return;
    const price = Number(product?.priceCents ?? 0) / 100;
    setRetailCart((prev) => {
      const exists = prev.find((line) => line.sku === sku);
      if (exists) {
        return prev.map((line) => (line.sku === sku ? { ...line, qty: line.qty + 1 } : line));
      }
      return [
        ...prev,
        {
          productId: String(product?.id || sku),
          sku,
          name: String(product?.name || 'Unnamed Product'),
          price,
          qty: 1,
        },
      ];
    });
  };

  const updateRetailQty = (sku: string, qty: number) => {
    if (qty <= 0) {
      setRetailCart((prev) => prev.filter((line) => line.sku !== sku));
      return;
    }
    setRetailCart((prev) => prev.map((line) => (line.sku === sku ? { ...line, qty } : line)));
  };

  const retailSubtotal = useMemo(
    () => retailCart.reduce((sum, line) => sum + line.price * line.qty, 0),
    [retailCart]
  );
  const retailTaxRate = Number(settingsQuery.data?.taxRate ?? 0);
  const retailTaxAmount = useMemo(() => retailSubtotal * retailTaxRate, [retailSubtotal, retailTaxRate]);
  const retailTotal = useMemo(() => retailSubtotal + retailTaxAmount, [retailSubtotal, retailTaxAmount]);

  useEffect(() => {
    if (!activeShopId || typeof window === 'undefined') return;
    const key = `${POS_RETAIL_CART_STORAGE_KEY_PREFIX}:${activeShopId}`;
    const raw = window.localStorage.getItem(key);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setRetailCart(parsed);
      }
    } catch {
      // ignore malformed cache
    }
  }, [activeShopId]);

  useEffect(() => {
    if (!activeShopId || typeof window === 'undefined') return;
    const key = `${POS_RETAIL_CART_STORAGE_KEY_PREFIX}:${activeShopId}`;
    window.localStorage.setItem(key, JSON.stringify(retailCart));
  }, [activeShopId, retailCart]);

  const handleBarcodeAdd = () => {
    const sku = barcodeInput.trim();
    if (!sku) return;
    const matched = magentoProducts.find((product: any) => String(product?.sku || '').toLowerCase() === sku.toLowerCase());
    if (!matched) {
      showToast({ message: `No product found for SKU ${sku}`, severity: 'warning' });
      return;
    }
    addToRetailCart(matched);
    setBarcodeInput('');
  };

  const kdsQueue = useMemo<KdsQueueItem[]>(
    () => (Array.isArray(kdsQueueQuery.data?.queue) ? kdsQueueQuery.data.queue : []),
    [kdsQueueQuery.data]
  );

  const cfdSnapshot = cfdSnapshotQuery.data || {
    aggregate: { totalOpenTickets: 0, totalDue: 0, totalInProgressItems: 0 },
    activeOrders: [],
  };

  const nonTableContent = (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {mode === 'settings'
              ? 'POS Settings'
              : mode === 'pos'
                ? 'Retail POS'
              : mode === 'orders' || mode === 'deliver' || mode === 'table-join-approve'
                ? 'POS Orders'
                : mode === 'kds'
                  ? 'Kitchen Display Queue'
                  : mode === 'cfd'
                    ? 'Customer Facing Display'
                    : mode === 'stock-manager'
                      ? 'Store Maintenance & Devices'
                : mode === 'table-side' || mode === 'table-register'
                  ? 'Table Mode'
                  : 'POS Tables'}
          </Typography>

          <Stack spacing={2}>
            {mode === 'settings' && (
              <>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      label="Quick Cash 1"
                      value={settingsForm.numberPadFirstValue}
                      onChange={(event) =>
                        setSettingsForm((prev) => ({ ...prev, numberPadFirstValue: event.target.value }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      label="Quick Cash 2"
                      value={settingsForm.numberPadSecondValue}
                      onChange={(event) =>
                        setSettingsForm((prev) => ({ ...prev, numberPadSecondValue: event.target.value }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      label="Quick Cash 3"
                      value={settingsForm.numberPadThirdValue}
                      onChange={(event) =>
                        setSettingsForm((prev) => ({ ...prev, numberPadThirdValue: event.target.value }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      label="Tax Rate (%)"
                      value={settingsForm.taxRatePercent}
                      onChange={(event) =>
                        setSettingsForm((prev) => ({ ...prev, taxRatePercent: event.target.value }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      size="small"
                      label="Service Charge (%)"
                      value={settingsForm.serviceChargeRatePercent}
                      onChange={(event) =>
                        setSettingsForm((prev) => ({ ...prev, serviceChargeRatePercent: event.target.value }))
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      label="Tip Presets (%)"
                      helperText="Comma-separated values like 10,15,20"
                      value={settingsForm.tipPercentages}
                      onChange={(event) =>
                        setSettingsForm((prev) => ({ ...prev, tipPercentages: event.target.value }))
                      }
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                  <Button
                    variant="contained"
                    onClick={() => updateNumberPadMutation.mutate()}
                    disabled={updateNumberPadMutation.isPending}
                  >
                    Save Pricing
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => updateTipConfigMutation.mutate()}
                    disabled={updateTipConfigMutation.isPending}
                  >
                    Save Tips
                  </Button>
                  <Button
                    variant="soft"
                    color="inherit"
                    onClick={() => openShiftMutation.mutate()}
                    disabled={openShiftMutation.isPending}
                  >
                    Open Shift
                  </Button>
                  <Button
                    variant="soft"
                    color="warning"
                    onClick={() => closeShiftMutation.mutate()}
                    disabled={closeShiftMutation.isPending}
                  >
                    Close Shift
                  </Button>
                </Stack>

                <Typography variant="body2">
                  currency: {settingsQuery.data?.currency || 'USD'} | tip shifts: {(shiftsQuery.data || []).length}
                </Typography>
              </>
            )}

            {mode === 'pos' ? (
              <>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={1.25}
                  alignItems={{ xs: 'stretch', md: 'center' }}
                  sx={{
                    p: 1.25,
                    borderRadius: 2,
                    bgcolor: 'background.neutral',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <TextField
                    size="small"
                    label="Search products, SKU, category"
                    value={productSearch}
                    onChange={(event) => setProductSearch(event.target.value)}
                    fullWidth
                    placeholder="Type product name or SKU"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Iconify icon="solar:magnifer-bold-duotone" width={18} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ flex: { md: 2.2 } }}
                  />
                  <TextField
                    size="small"
                    label="SKU"
                    value={barcodeInput}
                    onChange={(event) => setBarcodeInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        handleBarcodeAdd();
                      }
                    }}
                    placeholder="Scan barcode / enter SKU"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Iconify icon="solar:barcode-bold-duotone" width={18} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ flex: { md: 1.1 }, minWidth: { md: 210 } }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleBarcodeAdd}
                    startIcon={<Iconify icon="solar:add-circle-bold-duotone" width={18} />}
                    sx={{ minWidth: { md: 120 }, height: 40, whiteSpace: 'nowrap' }}
                  >
                    Add
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => magentoProductsQuery.refetch()}
                    disabled={magentoProductsQuery.isFetching}
                    startIcon={<Iconify icon="solar:restart-bold-duotone" width={18} />}
                    sx={{ minWidth: { md: 124 }, height: 40, whiteSpace: 'nowrap' }}
                  >
                    {magentoProductsQuery.isFetching ? 'Syncing' : 'Sync'}
                  </Button>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }} useFlexGap>
                  <Chip
                    label={`All (${magentoProducts.length})`}
                    color={productCategoryFilter === 'all' ? 'primary' : 'default'}
                    variant={productCategoryFilter === 'all' ? 'filled' : 'outlined'}
                    onClick={() => setProductCategoryFilter('all')}
                  />
                  {posCategoryOptions.map((category) => {
                    const count = magentoProducts.filter((product: any) => String(product?.categoryName || '').trim() === category).length;
                    return (
                      <Chip
                        key={category}
                        label={`${category} (${count})`}
                        color={productCategoryFilter === category ? 'primary' : 'default'}
                        variant={productCategoryFilter === category ? 'filled' : 'outlined'}
                        onClick={() => setProductCategoryFilter(category)}
                      />
                    );
                  })}
                </Stack>
                <Grid container spacing={2}>
                  {filteredPosProducts.map((product: any) => {
                    const unitPrice = Number(product.priceCents || 0) / 100;
                    return (
                      <Grid item xs={12} sm={6} lg={4} key={product.id}>
                        <Card variant="outlined" sx={{ p: 2, height: '100%' }}>
                          <Stack spacing={1.5} sx={{ height: '100%' }}>
                            <Typography variant="subtitle2">{product.name}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              SKU: {product.sku || 'N/A'}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {product.categoryName || 'Uncategorized'}
                            </Typography>
                            <Typography variant="h6">${unitPrice.toFixed(2)}</Typography>
                            <Box sx={{ mt: 'auto' }}>
                              <Button fullWidth size="small" variant="contained" onClick={() => addToRetailCart(product)}>
                                Add
                              </Button>
                            </Box>
                          </Stack>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
                {magentoProductsQuery.isFetching ? <Alert severity="info">Loading Magento catalog...</Alert> : null}
                {filteredPosProducts.length === 0 && !magentoProductsQuery.isFetching ? (
                  <Alert severity="warning">No Magento products found for this shop context.</Alert>
                ) : null}
              </>
            ) : mode === 'orders' || mode === 'deliver' || mode === 'table-join-approve'
              ? (
                  <>
                    <Stack direction="row" spacing={1.5} flexWrap="wrap" useFlexGap>
                      <Button
                        variant="contained"
                        onClick={() => seedDemoOrdersMutation.mutate()}
                        disabled={seedDemoOrdersMutation.isPending}
                      >
                        Generate ecommerce day
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => queryClient.invalidateQueries({ queryKey: ['pos-table-orders', activeShopId] })}
                      >
                        Refresh orders
                      </Button>
                    </Stack>
                    {tableOrders.map((order) => (
                      <Box key={order.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                          <Box>
                            <Typography variant="subtitle2">
                              {order.ticketNo || order.id} • {order.tableName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {order.channel || 'dine_in'} • {order.source || 'odoo_pos'} • fulfillment:{' '}
                              {order.fulfillmentStatus || 'draft'}
                            </Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              Customer: {order.customerName || 'Unassigned'} {order.customerPhone ? `(${order.customerPhone})` : ''}
                            </Typography>
                          </Box>
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle2">
                              ${Number(order.totalAmount || 0).toFixed(2)}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Due ${Number(order.balanceDue || 0).toFixed(2)}
                            </Typography>
                          </Box>
                        </Stack>

                        <Stack direction="row" spacing={1} sx={{ mt: 1.5 }} flexWrap="wrap" useFlexGap>
                          <Button size="small" variant="outlined" onClick={() => handleAddSampleLine(order)}>
                            Add item
                          </Button>
                          <Button size="small" variant="outlined" onClick={() => handleAssignCustomer(order)}>
                            Assign customer
                          </Button>
                          <Button size="small" variant="outlined" onClick={() => handleAdvanceFulfillment(order)}>
                            Advance fulfillment
                          </Button>
                          <Button size="small" variant="outlined" color="success" onClick={() => handleSettleOrder(order)}>
                            Capture payment
                          </Button>
                          <Button size="small" variant="outlined" color="warning" onClick={() => handleQuickRefund(order)}>
                            Refund
                          </Button>
                          <Button size="small" variant="contained" onClick={() => handleCloseTicket(order)}>
                            Close
                          </Button>
                          <Button size="small" color="inherit" onClick={() => handleArchiveTicket(order)}>
                            Archive
                          </Button>
                        </Stack>
                      </Box>
                    ))}
                  </>
                )
              : mode === 'kds'
                ? kdsQueue.map((line) => (
                    <Box key={line.lineId} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                      <Stack direction="row" justifyContent="space-between" spacing={2}>
                        <Box>
                          <Typography variant="subtitle2">
                            {line.ticketNo} • {line.tableName}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {line.itemName} x {line.quantity} • {line.station}
                          </Typography>
                        </Box>
                        <Chip
                          size="small"
                          label={line.prepStatus.toUpperCase()}
                          color={
                            line.prepStatus === 'ready'
                              ? 'success'
                              : line.prepStatus === 'preparing'
                                ? 'warning'
                                : 'default'
                          }
                          variant="outlined"
                        />
                      </Stack>
                      <Stack direction="row" spacing={1} sx={{ mt: 1.5 }}>
                        <Button size="small" variant="contained" onClick={() => handleKdsAdvance(line)}>
                          Advance
                        </Button>
                      </Stack>
                    </Box>
                  ))
                : mode === 'cfd'
                  ? (Array.isArray(cfdSnapshot.activeOrders) ? cfdSnapshot.activeOrders : []).map((order: any) => (
                      <Box key={order.orderId} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                          <Box>
                            <Typography variant="subtitle2">
                              {order.ticketNo} • {order.tableName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              {order.itemCount} items • {order.orderStatus}
                            </Typography>
                          </Box>
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="subtitle2">${Number(order.totalAmount || 0).toFixed(2)}</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Due ${Number(order.balanceDue || 0).toFixed(2)}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
                    ))
                : mode === 'stock-manager'
                    ? (
                        <>
                          <Alert severity="info">
                            Low stock SKUs: {Array.isArray(inventoryData.lowStock) ? inventoryData.lowStock.length : 0}
                          </Alert>
                          {(Array.isArray(inventoryData.inventory) ? inventoryData.inventory : []).slice(0, 6).map((item: any) => (
                            <Box key={item.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                <Box>
                                  <Typography variant="subtitle2">{item.name}</Typography>
                                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {item.sku} • {item.category} • on hand {item.onHand} {item.unit}
                                  </Typography>
                                </Box>
                                <Stack direction="row" spacing={1}>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    color="warning"
                                    onClick={() => adjustInventoryMutation.mutate({ inventoryItemId: item.id, quantityDelta: -1 })}
                                  >
                                    -1
                                  </Button>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    color="success"
                                    onClick={() => adjustInventoryMutation.mutate({ inventoryItemId: item.id, quantityDelta: 5 })}
                                  >
                                    +5
                                  </Button>
                                </Stack>
                              </Stack>
                            </Box>
                          ))}
                          {(Array.isArray(maintenanceDevicesQuery.data) ? maintenanceDevicesQuery.data : []).map((device: any) => (
                            <Box key={device.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                              <Typography variant="subtitle2">{device.name}</Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {device.kind} • {device.location || 'No location'} • {device.status}
                              </Typography>
                            </Box>
                          ))}
                          {(Array.isArray(maintenanceIncidentsQuery.data) ? maintenanceIncidentsQuery.data : []).slice(0, 4).map((incident: any) => (
                            <Box key={incident.id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                              <Typography variant="subtitle2">{incident.title}</Typography>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {incident.severity} • {incident.status}
                              </Typography>
                            </Box>
                          ))}
                          <Button
                            variant="outlined"
                            onClick={() => createMaintenanceIncidentMutation.mutate()}
                            disabled={createMaintenanceIncidentMutation.isPending}
                          >
                            Log maintenance incident
                          </Button>
                        </>
                      )
                : (mode === 'table-side' || mode === 'table-register'
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
        {mode === 'pos' ? (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Checkout</Typography>
              <TextField
                select
                size="small"
                label="Customer"
                value={selectedCustomerId}
                onChange={(event) => setSelectedCustomerId(event.target.value)}
              >
                <MenuItem value="walk-in">Walk-in customer</MenuItem>
                {customers.map((customer) => (
                  <MenuItem key={customer.id} value={customer.id}>
                    {customer.name} {customer.phone ? `(${customer.phone})` : ''}
                  </MenuItem>
                ))}
              </TextField>
              <Divider />
              <Typography variant="subtitle2">Cart Items</Typography>
              {retailCart.length === 0 ? (
                <Alert severity="info">Cart is empty. Add products to begin checkout.</Alert>
              ) : (
                <Stack spacing={1}>
                  {retailCart.map((line) => (
                    <Stack key={line.sku} direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="body2" noWrap>{line.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {line.sku} • ${line.price.toFixed(2)}
                        </Typography>
                      </Box>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <IconButton size="small" onClick={() => updateRetailQty(line.sku, line.qty - 1)}>
                          <Iconify icon="solar:minus-circle-outline" width={16} />
                        </IconButton>
                        <Typography variant="body2">{line.qty}</Typography>
                        <IconButton size="small" onClick={() => updateRetailQty(line.sku, line.qty + 1)}>
                          <Iconify icon="solar:add-circle-outline" width={16} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              )}
              <Divider />
              <Stack spacing={0.75}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Subtotal</Typography>
                  <Typography variant="body2">${retailSubtotal.toFixed(2)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Tax</Typography>
                  <Typography variant="body2">${retailTaxAmount.toFixed(2)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle2">Total</Typography>
                  <Typography variant="subtitle2">${retailTotal.toFixed(2)}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    if (!activeShopId || typeof window === 'undefined') return;
                    window.localStorage.setItem(`${POS_RETAIL_CART_STORAGE_KEY_PREFIX}:${activeShopId}`, JSON.stringify(retailCart));
                    showToast({ message: 'Cart parked.', severity: 'success' });
                  }}
                  disabled={retailCart.length === 0}
                >
                  Park
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => {
                    if (!activeShopId || typeof window === 'undefined') return;
                    const raw = window.localStorage.getItem(`${POS_RETAIL_CART_STORAGE_KEY_PREFIX}:${activeShopId}`);
                    if (!raw) return;
                    try {
                      const parsed = JSON.parse(raw);
                      if (Array.isArray(parsed)) setRetailCart(parsed);
                    } catch {
                      // ignore invalid
                    }
                  }}
                >
                  Resume
                </Button>
                <Button fullWidth color="warning" variant="outlined" onClick={() => setRetailCart([])}>
                  Clear
                </Button>
              </Stack>
              <Button
                variant="contained"
                size="large"
                disabled={retailCart.length === 0 || !activeShopId || posCheckoutMutation.isPending}
                onClick={() => posCheckoutMutation.mutate()}
              >
                {posCheckoutMutation.isPending ? 'Placing Order...' : 'Checkout'}
              </Button>
              <Button
                variant="text"
                size="small"
                disabled={retailCart.length === 0 || !activeShopId}
                component={Link}
                href={activeShopId ? paths.public.shop(activeShopId) : '#'}
              >
                Open Storefront Checkout
              </Button>
              <Divider />
              <Typography variant="subtitle2">Recent Orders</Typography>
              {posRecentOrders.length === 0 ? (
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  No recent orders yet.
                </Typography>
              ) : (
                <Stack spacing={1}>
                  {posRecentOrders.map((order) => (
                    <Stack key={order.id} spacing={0.5} sx={{ p: 1.25, borderRadius: 1.5, bgcolor: 'background.neutral' }}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body2" noWrap>{order.ticketNo || order.id}</Typography>
                        <Typography variant="body2">${Number(order.totalAmount || 0).toFixed(2)}</Typography>
                      </Stack>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {order.customerName || 'Walk-in'} • {order.orderStatus || 'open'}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => {
                            setSelectedOrderForAction(order);
                            setOrderDetailDialogOpen(true);
                          }}
                        >
                          Details
                        </Button>
                        <Button
                          size="small"
                          color="warning"
                          variant="outlined"
                          onClick={() => {
                            const amount = Number(order.paidAmount || order.totalAmount || 0);
                            if (amount <= 0) {
                              showToast({ message: 'No paid amount available to refund.', severity: 'info' });
                              return;
                            }
                            setSelectedOrderForAction(order);
                            setRefundAmountInput(amount.toFixed(2));
                            setRefundDialogOpen(true);
                          }}
                          disabled={refundOrderMutation.isPending}
                        >
                          Refund
                        </Button>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              )}
            </Stack>
          </Card>
        ) : (
          <Card sx={{ p: 3 }}>
            <Stack spacing={2}>
              <Typography variant="h6">Operations Snapshot</Typography>
              <Typography variant="body2">
                Shop: {selectedShop?.name || (activeShopId ? `Shop ${activeShopId.slice(0, 8)}` : 'Not selected')}
              </Typography>
              <Typography variant="body2">
                Active shift: {settingsQuery.data?.activeShift?.name || 'No active shift'}
              </Typography>
              <Typography variant="body2">30d orders: {Number(analytics.orderCount || 0)}</Typography>
              <Typography variant="body2">30d revenue: ${Number(analytics.revenue || 0).toFixed(2)}</Typography>
              <Typography variant="body2">30d refunds: ${Number(analytics.refundAmount || 0).toFixed(2)}</Typography>
              <Typography variant="body2">Known customers: {customers.length}</Typography>
            </Stack>
          </Card>
        )}
      </Grid>
      <Dialog open={receiptDialogOpen} onClose={() => setReceiptDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>POS Receipt</DialogTitle>
        <DialogContent>
          {(() => {
            const order = selectedOrderResolved;
            if (!order) {
              return (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Order details are syncing. You can view the full record in Orders.
                </Typography>
              );
            }
            return (
              <Stack spacing={1.25} sx={{ mt: 1 }}>
                <Typography variant="body2">Order: <strong>{order.ticketNo || order.id}</strong></Typography>
                <Typography variant="body2">Customer: <strong>{order.customerName || 'Walk-in'}</strong></Typography>
                <Typography variant="body2">Status: <strong>{order.orderStatus || 'open'}</strong></Typography>
                <Typography variant="body2">Total: <strong>${Number(order.totalAmount || 0).toFixed(2)}</strong></Typography>
                <Typography variant="body2">Paid: <strong>${Number(order.paidAmount || 0).toFixed(2)}</strong></Typography>
                <Typography variant="body2">Due: <strong>${Number(order.balanceDue || 0).toFixed(2)}</strong></Typography>
              </Stack>
            );
          })()}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              openReceiptPrintWindow(selectedOrderResolved);
            }}
          >
            Print
          </Button>
          <Button onClick={() => setReceiptDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={orderDetailDialogOpen} onClose={() => setOrderDetailDialogOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrderResolved ? (
            <Stack spacing={1.25} sx={{ mt: 1 }}>
              <Typography variant="body2">Order: <strong>{selectedOrderResolved.ticketNo || selectedOrderResolved.id}</strong></Typography>
              <Typography variant="body2">Customer: <strong>{selectedOrderResolved.customerName || 'Walk-in'}</strong></Typography>
              <Typography variant="body2">Channel: <strong>{selectedOrderResolved.channel || 'ecommerce'}</strong></Typography>
              <Typography variant="body2">Status: <strong>{selectedOrderResolved.orderStatus || 'open'}</strong></Typography>
              <Typography variant="body2">Total: <strong>${Number(selectedOrderResolved.totalAmount || 0).toFixed(2)}</strong></Typography>
              <Typography variant="body2">Paid: <strong>${Number(selectedOrderResolved.paidAmount || 0).toFixed(2)}</strong></Typography>
              <Typography variant="body2">Due: <strong>${Number(selectedOrderResolved.balanceDue || 0).toFixed(2)}</strong></Typography>
            </Stack>
          ) : (
            <Typography variant="body2" sx={{ mt: 1 }}>No order selected.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOrderDetailDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={refundDialogOpen} onClose={() => setRefundDialogOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle>Confirm Refund</DialogTitle>
        <DialogContent>
          <Stack spacing={1.5} sx={{ mt: 1 }}>
            <Typography variant="body2">
              {selectedOrderResolved
                ? `Order ${selectedOrderResolved.ticketNo || selectedOrderResolved.id}`
                : 'Selected order'}
            </Typography>
            <TextField
              size="small"
              label="Refund Amount"
              value={refundAmountInput}
              onChange={(event) => setRefundAmountInput(event.target.value)}
              type="number"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRefundDialogOpen(false)}>Cancel</Button>
          <Button
            color="warning"
            variant="contained"
            disabled={refundOrderMutation.isPending || !selectedOrderResolved}
            onClick={() => {
              if (!selectedOrderResolved) return;
              const amount = Number(refundAmountInput || 0);
              if (!Number.isFinite(amount) || amount <= 0) {
                showToast({ message: 'Enter a valid refund amount.', severity: 'warning' });
                return;
              }
              refundOrderMutation.mutate({ orderId: selectedOrderResolved.id, amount });
              setRefundDialogOpen(false);
            }}
          >
            {refundOrderMutation.isPending ? 'Refunding...' : 'Confirm Refund'}
          </Button>
        </DialogActions>
      </Dialog>
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
            <Autocomplete
              size="small"
              options={shopOptions}
              loading={shopsQuery.isLoading}
              value={selectedShop}
              onChange={handleSelectShop}
              getOptionLabel={(option) => option?.name || ''}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              sx={{ minWidth: { sm: 360 } }}
              renderOption={(props, option) => (
                <li {...props} key={option.id}>
                  <Stack spacing={0.25}>
                    <Typography variant="subtitle2">{option.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {option.subtitle}
                    </Typography>
                  </Stack>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select Shop"
                  placeholder="Search by shop name"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {shopsQuery.isLoading ? <CircularProgress color="inherit" size={16} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
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
        {mode === 'pos' ? nonTableContent : mode === 'tables' ? tablesContent : nonTableContent}
      </DashboardContent>
    );
  }

  if (mode === 'table-join-approve' || mode === 'table-register' || mode === 'table-side' || mode === 'deliver') {
    return (
      <PosPublicFlowView
        mode={mode}
        orderId={orderId}
        roomId={roomId}
        table={table}
        type={type}
        deliveryId={deliveryId}
      />
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
