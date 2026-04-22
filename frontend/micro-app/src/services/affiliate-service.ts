import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export const affiliateService = {
  getReferral: async () => {
    const response = await axios.get('/api/affiliate/referral');
    return response.data?.data ?? response.data;
  },

  getAffiliates: async () => {
    const response = await axios.get('/api/affiliate/list');
    return response.data?.data ?? response.data;
  },

  getEarnings: async () => {
    const response = await axios.get('/api/affiliate/earnings');
    return response.data?.data ?? response.data;
  },

  getWeeklyEarnings: async () => {
    const response = await axios.get('/api/affiliate/weekly-earnings');
    return response.data?.data ?? response.data;
  },

  getPaymentReceipts: async () => {
    const response = await axios.get('/api/affiliate/payment-receipts');
    return response.data?.data ?? response.data;
  },

  sendInvitation: async (email: string) => {
    const response = await axios.post('/api/affiliate/invite', { email });
    return response.data?.data ?? response.data;
  },

  updateBadgeStatus: async (showBadge: boolean) => {
    const response = await axios.post('/api/affiliate/badge', { showBadge });
    return response.data?.data ?? response.data;
  },

  joinReferral: async (referralCode: string) => {
    const response = await axios.post('/api/affiliate/join', { referralCode });
    return response.data?.data ?? response.data;
  },
};
