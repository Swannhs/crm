import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const posService = {
  getSettings: async (shopId: string) => {
    const response = await axios.get('/api/pos/settings', { params: { shopId } });
    return response.data?.data ?? response.data;
  },

  getTipShifts: async (shopId: string) => {
    const response = await axios.get('/api/pos/settings/tip-shifts', { params: { shopId } });
    return response.data?.data ?? response.data ?? [];
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

  createTableOrder: async (data: any) => {
    const response = await axios.post('/api/pos/table-orders', data);
    return response.data?.data ?? response.data;
  },

  updateTableOrder: async (data: any) => {
    const response = await axios.put('/api/pos/table-orders', data);
    return response.data?.data ?? response.data;
  },

  deleteTableOrder: async (id: string) => {
    const response = await axios.delete('/api/pos/table-orders', { data: { id } });
    return response.data?.data ?? response.data;
  },
};
