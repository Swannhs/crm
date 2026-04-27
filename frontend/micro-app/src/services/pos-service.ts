import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const posService = {
  getOrderById: async (id: string) => {
    const response = await axios.get(`/api/product-new/order/byId/${id}`);
    return response.data?.data ?? response.data;
  },

  approveJoinCheckRequest: async (data: { orderId: string; requesterPhone: string }) => {
    const response = await axios.post('/api/product-new/order/join-check-approve', data);
    return response.data?.data ?? response.data;
  },

  getDeliveryStatus: async (id: string) => {
    const response = await axios.get(`/api/product-new/order/deliver/${id}`);
    return response.data?.data ?? response.data;
  },

  getOrderShipping: async (orderId: string) => {
    const response = await axios.get(`/api/product-new/order/${orderId}/shipping`);
    return response.data?.data ?? response.data;
  },

  getSettings: async (shopId: string) => {
    const response = await axios.get('/api/pos/settings', { params: { shopId } });
    return response.data?.data ?? response.data;
  },

  getTipShifts: async (shopId: string) => {
    const response = await axios.get('/api/pos/settings/tip-shifts', { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
  },

  getCatalog: async (shopId: string) => {
    const response = await axios.get('/api/pos/catalog', { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
  },

  getCustomers: async (shopId: string) => {
    const response = await axios.get('/api/pos/customers', { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
  },

  upsertCustomer: async (data: any) => {
    const response = await axios.post('/api/pos/customers', data);
    return response.data?.data ?? response.data;
  },

  getKdsQueue: async (shopId: string, station?: string) => {
    const response = await axios.get('/api/pos/kds/queue', { params: { shopId, station } });
    return response.data?.data ?? response.data ?? { queue: [], totals: { queued: 0, preparing: 0, ready: 0 } };
  },

  updateKdsLineStatus: async (
    shopId: string,
    lineId: string,
    status: 'queued' | 'preparing' | 'ready' | 'served'
  ) => {
    const response = await axios.patch(`/api/pos/kds/lines/${lineId}/status`, { shopId, status });
    return response.data?.data ?? response.data;
  },

  getCfdSnapshot: async (shopId: string) => {
    const response = await axios.get('/api/pos/cfd/snapshot', { params: { shopId } });
    return response.data?.data ?? response.data ?? { aggregate: { totalOpenTickets: 0, totalDue: 0, totalInProgressItems: 0 }, activeOrders: [] };
  },

  updateNumberPad: async (data: any) => {
    const response = await axios.patch('/api/pos/settings/number-pad', data);
    return response.data?.data ?? response.data;
  },

  updateConfigureTip: async (data: any) => {
    const response = await axios.patch('/api/pos/settings/configure-tip', data);
    return response.data?.data ?? response.data;
  },

  getTables: async (shopId: string, includeAll: boolean = false) => {
    const url = includeAll ? '/api/pos/tables/all' : '/api/pos/tables';
    const response = await axios.get(url, { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
  },

  createTable: async (data: any) => {
    const response = await axios.post('/api/pos/tables', data);
    return response.data?.data ?? response.data;
  },

  updateTable: async (data: any) => {
    const response = await axios.put('/api/pos/tables', data);
    return response.data?.data ?? response.data;
  },

  deleteTable: async (id: string) => {
    const response = await axios.delete('/api/pos/tables', { data: { id } });
    return response.data?.data ?? response.data;
  },

  increaseSeat: async (id: string) => {
    const response = await axios.put('/api/pos/tables/increase-seat', { id });
    return response.data?.data ?? response.data;
  },

  decreaseSeat: async (id: string) => {
    const response = await axios.put('/api/pos/tables/decrease-seat', { id });
    return response.data?.data ?? response.data;
  },

  getTableMode: async (shopId: string) => {
    const response = await axios.get('/api/pos/table-mode', { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
  },

  updateTableState: async (shopId: string, tableNo: string, orderState: string) => {
    const response = await axios.patch(`/api/pos/table-mode/update-table-state/${tableNo}`, {
      shopId,
      tableNo,
      orderState,
    });
    return response.data?.data ?? response.data;
  },

  updateTableGuestSeats: async (shopId: string, tableNo: string, guestCount: number, seats: any[]) => {
    const response = await axios.patch(`/api/pos/table-mode/update-guest-seats/${tableNo}`, {
      shopId,
      tableNo,
      guestCount,
      seats,
    });
    return response.data?.data ?? response.data;
  },

  getTableOrders: async (shopId: string) => {
    const response = await axios.get('/api/pos/table-orders', { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
  },

  getTableOrder: async (id: string) => {
    const response = await axios.get(`/api/pos/table-orders/${id}`);
    return response.data?.data ?? response.data;
  },

  createTableOrder: async (data: any) => {
    const response = await axios.post('/api/pos/table-orders', data);
    return response.data?.data ?? response.data;
  },

  updateTableOrder: async (data: any) => {
    const response = await axios.put('/api/pos/table-orders', data);
    return response.data?.data ?? response.data;
  },

  addOrderItem: async (orderId: string, data: any) => {
    const response = await axios.post(`/api/pos/table-orders/${orderId}/items`, data);
    return response.data?.data ?? response.data;
  },

  removeOrderItem: async (orderId: string, lineId: string) => {
    const response = await axios.delete(`/api/pos/table-orders/${orderId}/items/${lineId}`);
    return response.data?.data ?? response.data;
  },

  addOrderPayment: async (orderId: string, data: any) => {
    const response = await axios.post(`/api/pos/table-orders/${orderId}/payments`, data);
    return response.data?.data ?? response.data;
  },

  assignOrderCustomer: async (orderId: string, data: any) => {
    const response = await axios.post(`/api/pos/table-orders/${orderId}/assign-customer`, data);
    return response.data?.data ?? response.data;
  },

  updateOrderFulfillment: async (orderId: string, data: any) => {
    const response = await axios.patch(`/api/pos/table-orders/${orderId}/fulfillment`, data);
    return response.data?.data ?? response.data;
  },

  refundOrder: async (orderId: string, data: any) => {
    const response = await axios.post(`/api/pos/table-orders/${orderId}/refunds`, data);
    return response.data?.data ?? response.data;
  },

  getReceipt: async (orderId: string) => {
    const response = await axios.get(`/api/pos/table-orders/${orderId}/receipt`);
    return response.data?.data ?? response.data;
  },

  deleteTableOrder: async (id: string) => {
    const response = await axios.delete('/api/pos/table-orders', { data: { id } });
    return response.data?.data ?? response.data;
  },

  openShift: async (data: { shopId: string; name?: string; openingCash?: number }) => {
    const response = await axios.post('/api/pos/shifts/open', data);
    return response.data?.data ?? response.data;
  },

  closeShift: async (data: { shopId: string; shiftId?: string; closingCash?: number }) => {
    const response = await axios.post('/api/pos/shifts/close', data);
    return response.data?.data ?? response.data;
  },

  getMaintenanceDevices: async (shopId: string) => {
    const response = await axios.get('/api/pos/maintenance/devices', { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
  },

  upsertMaintenanceDevice: async (data: any) => {
    const response = await axios.post('/api/pos/maintenance/devices', data);
    return response.data?.data ?? response.data;
  },

  getMaintenanceIncidents: async (shopId: string, status?: string) => {
    const response = await axios.get('/api/pos/maintenance/incidents', { params: { shopId, status } });
    return response.data?.data ?? response.data ?? [];
  },

  createMaintenanceIncident: async (data: any) => {
    const response = await axios.post('/api/pos/maintenance/incidents', data);
    return response.data?.data ?? response.data;
  },

  updateMaintenanceIncident: async (id: string, data: any) => {
    const response = await axios.patch(`/api/pos/maintenance/incidents/${id}`, data);
    return response.data?.data ?? response.data;
  },

  getInventory: async (shopId: string) => {
    const response = await axios.get('/api/pos/inventory', { params: { shopId } });
    return response.data?.data ?? response.data ?? { inventory: [], lowStock: [], movements: [] };
  },

  adjustInventory: async (data: any) => {
    const response = await axios.post('/api/pos/inventory/adjust', data);
    return response.data?.data ?? response.data;
  },

  getOrderAnalytics: async (shopId: string, days: number = 7) => {
    const response = await axios.get('/api/pos/analytics/orders', { params: { shopId, days } });
    return response.data?.data ?? response.data ?? {};
  },

  seedDemoEcommerceOrders: async (data: { shopId: string; count?: number }) => {
    const response = await axios.post('/api/pos/seed/ecommerce-orders', data);
    return response.data?.data ?? response.data;
  },
};
