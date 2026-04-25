import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const integrationService = {
  generateAdpToken: async () => {
    const response = await axios.post('/api/adp/generate-token');
    return response.data?.data ?? response.data;
  },

  getAdpStatus: async () => {
    const response = await axios.get('/api/adp/status');
    return response.data?.data ?? response.data;
  },

  disconnectAdp: async () => {
    const response = await axios.post('/api/adp/disconnect');
    return response.data?.data ?? response.data;
  },

  connectMagento: async (payload: {
    baseUrl: string;
    accessToken?: string;
    username?: string;
    password?: string;
    storeCode?: string;
  }) => {
    const response = await axios.post('/api/magento/connect', payload);
    return response.data?.data ?? response.data;
  },

  getMagentoConnection: async () => {
    const response = await axios.get('/api/magento/connection');
    return response.data?.data ?? response.data;
  },

  disconnectMagento: async () => {
    const response = await axios.post('/api/magento/disconnect');
    return response.data?.data ?? response.data;
  },

  getMagentoStores: async () => {
    const response = await axios.get('/api/magento/stores');
    return response.data?.data ?? response.data;
  },

  getMagentoProducts: async (params?: { pageSize?: number; currentPage?: number; search?: string }) => {
    const response = await axios.get('/api/magento/products', { params });
    return response.data?.data ?? response.data;
  },

  getMagentoOrders: async (params?: { pageSize?: number; currentPage?: number }) => {
    const response = await axios.get('/api/magento/orders', { params });
    return response.data?.data ?? response.data;
  },

  getMagentoCustomers: async (params?: { pageSize?: number; currentPage?: number }) => {
    const response = await axios.get('/api/magento/customers', { params });
    return response.data?.data ?? response.data;
  },

  syncMagentoCustomers: async (payload?: { pageSize?: number; currentPage?: number; dryRun?: boolean }) => {
    const response = await axios.post('/api/magento/sync/customers', payload ?? {});
    return response.data?.data ?? response.data;
  },

  syncMagentoOrders: async (payload?: { pageSize?: number; currentPage?: number; dryRun?: boolean }) => {
    const response = await axios.post('/api/magento/sync/orders', payload ?? {});
    return response.data?.data ?? response.data;
  },
};
