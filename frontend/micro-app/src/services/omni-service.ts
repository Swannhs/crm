import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

// Channels & Instances
export const omniChannelService = {
  getInstances: async () => {
    const response = await axiosInstance.get('/api/integrations/v1/voice/integrations');
    return response.data?.data || [];
  },
  
  createInstance: async (data: { provider: 'whatsapp' | 'telegram', name: string }) => {
    const response = await axiosInstance.post('/api/integrations/v1/voice/integrations', data);
    return response.data?.data;
  },

  getWhatsAppQR: async (instanceId: string) => {
    const response = await axiosInstance.get(`/api/integrations/v1/whatsapp/qr/${instanceId}`);
    return response.data?.data; // { qr: 'base64...' }
  },

  getInstanceStatus: async (instanceId: string) => {
    const response = await axiosInstance.get(`/api/integrations/v1/whatsapp/status/${instanceId}`);
    return response.data?.data;
  }
};

// Messaging & Inbox
export const omniChatService = {
  getConversations: async () => {
    const response = await axiosInstance.get('/api/realtime/v1/omni/conversations');
    return response.data?.data || [];
  },

  getMessages: async (conversationId: string) => {
    const response = await axiosInstance.get(`/api/realtime/v1/omni/conversations/${conversationId}/history`);
    return response.data?.data || [];
  },

  sendMessage: async (data: { conversationId: string, content: string, type: string }) => {
    const response = await axiosInstance.post('/api/realtime/v1/omni/messages', data);
    return response.data?.data;
  },

  assignAgent: async (conversationId: string, agentId: string) => {
    const response = await axiosInstance.post(`/api/realtime/v1/omni/conversations/${conversationId}/assign`, { agentId });
    return response.data?.data;
  },

  translateText: async (text: string, targetLang: string) => {
    const response = await axiosInstance.post('/api/realtime/v1/omni/ai/translate', { text, targetLang });
    return response.data?.data;
  },

  suggestReply: async (conversationId: string) => {
    const response = await axiosInstance.post('/api/realtime/v1/omni/ai/suggest-reply', { conversationId });
    return response.data?.data;
  }
};

// Automation & Chatbots
export const omniAutomationService = {
  getChatbots: async () => {
    const response = await axiosInstance.get('/api/automation/v1/omni/chatbots');
    return response.data?.data || [];
  },

  createChatbot: async (data: any) => {
    const response = await axiosInstance.post('/api/automation/v1/omni/chatbots', data);
    return response.data?.data;
  },

  getChatbotById: async (id: string) => {
    const response = await axiosInstance.get(`/api/automation/v1/omni/chatbots/${id}`);
    return response.data?.data;
  },

  updateChatbot: async (id: string, data: any) => {
    const response = await axiosInstance.patch(`/api/automation/v1/omni/chatbots/${id}`, data);
    return response.data?.data;
  },

  getTriggers: async () => {
    const response = await axiosInstance.get('/api/automation/v1/omni/triggers');
    return response.data?.data || [];
  },

  createTrigger: async (data: any) => {
    const response = await axiosInstance.post('/api/automation/v1/omni/triggers', data);
    return response.data?.data;
  }
};

// Broadcasts
export const omniMarketingService = {
  getBroadcasts: async () => {
    const response = await axiosInstance.get('/api/automation/v1/omni/broadcast');
    return response.data?.data || [];
  },

  createBroadcast: async (data: { 
    name: string, 
    provider: string, 
    instanceId: string, 
    content: string, 
    type: string, 
    recipients: Array<{ contactId: string, mobile: string, variables?: any }> 
  }) => {
    const response = await axiosInstance.post('/api/automation/v1/omni/broadcast', data);
    return response.data?.data;
  },

  getBroadcastDetails: async (id: string) => {
    const response = await axiosInstance.get(`/api/automation/v1/omni/broadcast/${id}`);
    return response.data?.data;
  }
};
