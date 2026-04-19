import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const deviceService = {
  getDevices: async () => {
    const response = await axios.get('/api/devices');
    return response.data?.data ?? response.data ?? [];
  },

  createDevice: async (data: any) => {
    const response = await axios.post('/api/devices', data);
    return response.data?.data ?? response.data;
  },

  getHardwareProducts: async () => {
    const response = await axios.get('/api/hardware/products');
    return response.data?.data ?? response.data ?? [];
  },

  getHardwareBundles: async () => {
    const response = await axios.get('/api/hardware/bundles');
    return response.data?.data ?? response.data ?? [];
  },

  getHardwareCategories: async () => {
    const response = await axios.get('/api/hardware/categories');
    return response.data?.data ?? response.data ?? [];
  },

  getHardwareRecommendation: async () => {
    const response = await axios.get('/api/hardware/recommendation');
    return response.data?.data ?? response.data;
  },

  getSunmiConfig: async () => {
    const response = await axios.get('/api/sunmi/config');
    return response.data?.data ?? response.data;
  },

  saveSunmiConfig: async (data: any) => {
    const response = await axios.post('/api/sunmi/config', data);
    return response.data?.data ?? response.data;
  },

  getUnifiConnection: async () => {
    const response = await axios.get('/api/unifi/connection');
    return response.data?.data ?? response.data;
  },

  getUnifiConnections: async () => {
    const response = await axios.get('/api/unifi/connections');
    return response.data?.data ?? response.data ?? [];
  },

  saveUnifiConnection: async (data: any) => {
    const response = await axios.post('/api/unifi/connection', data);
    return response.data?.data ?? response.data;
  },

  getUnifiCameras: async () => {
    const response = await axios.get('/api/unifi/cameras');
    return response.data?.data ?? response.data ?? [];
  },
};
