import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const businessService = {
  getRetentionStats: async () => {
    const response = await axios.get('/api/business/retention');
    return response.data?.data ?? response.data;
  },

  getBirthdayStats: async () => {
    const response = await axios.get('/api/business/birthday');
    return response.data?.data ?? response.data;
  },

  getExpiredStats: async () => {
    const response = await axios.get('/api/business/expired');
    return response.data?.data ?? response.data;
  },

  getProgressionStats: async () => {
    const response = await axios.get('/api/business/progression');
    return response.data?.data ?? response.data;
  },

  getIncomeReport: async () => {
    const response = await axios.get('/api/business/income-report');
    return response.data?.data ?? response.data;
  },

  getTaxReport: async () => {
    const response = await axios.get('/api/business/tax-report');
    return response.data?.data ?? response.data;
  },
};
