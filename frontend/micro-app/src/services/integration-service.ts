import axios from 'src/utils/axios';
import {
  connectMagento,
  disconnectMagento,
  getMagentoConnection,
  getMagentoCustomers,
  getMagentoOrders,
  getMagentoProducts,
  getMagentoStores,
  syncMagentoCustomers,
  syncMagentoOrders,
} from 'src/services/magento-service';

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
    if (!payload.accessToken) {
      throw new Error('Access token is required to connect Magento.');
    }

    return connectMagento({
      baseUrl: payload.baseUrl,
      accessToken: payload.accessToken,
      storeCode: payload.storeCode,
    });
  },

  getMagentoConnection: async () => {
    return getMagentoConnection();
  },

  disconnectMagento: async () => {
    return disconnectMagento();
  },

  getMagentoStores: async () => {
    return getMagentoStores();
  },

  getMagentoProducts: async (params?: { pageSize?: number; currentPage?: number; search?: string }) => {
    return getMagentoProducts({
      page: params?.currentPage,
      pageSize: params?.pageSize,
      search: params?.search,
    });
  },

  getMagentoOrders: async (params?: { pageSize?: number; currentPage?: number; status?: string; search?: string }) => {
    return getMagentoOrders({
      page: params?.currentPage,
      pageSize: params?.pageSize,
      status: params?.status,
      search: params?.search,
    });
  },

  getMagentoCustomers: async (params?: { pageSize?: number; currentPage?: number; search?: string }) => {
    return getMagentoCustomers({
      page: params?.currentPage,
      pageSize: params?.pageSize,
      search: params?.search,
    });
  },

  syncMagentoCustomers: async (payload?: {
    pageSize?: number;
    currentPage?: number;
    dryRun?: boolean;
    since?: string;
    push?: boolean;
  }) => {
    return syncMagentoCustomers({
      dryRun: payload?.dryRun,
      limit: payload?.pageSize,
      since: payload?.since,
      push: payload?.push,
    });
  },

  syncMagentoOrders: async (payload?: {
    pageSize?: number;
    currentPage?: number;
    dryRun?: boolean;
    since?: string;
    push?: boolean;
  }) => {
    return syncMagentoOrders({
      dryRun: payload?.dryRun,
      limit: payload?.pageSize,
      since: payload?.since,
      push: payload?.push,
    });
  },
};
