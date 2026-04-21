import axiosInstance from 'src/utils/axios';

// ----------------------------------------------------------------------

// Channels & Instances
export const omniChannelService = {
  getInstances: async () => {
    const [whatsAppResponse, telegramResponse] = await Promise.all([
      axiosInstance.get('/api/integrations/v1/whatsapp/instances'),
      axiosInstance.get('/api/integrations/v1/telegram/sessions'),
    ]);

    const whatsAppInstances = (whatsAppResponse.data?.data || []).map((instance: any) => ({
      ...instance,
      provider: 'whatsapp',
    }));
    const telegramSessions = (telegramResponse.data?.data || []).map((session: any) => ({
      ...session,
      provider: 'telegram',
      instanceId: session.sessionId,
    }));

    return [...whatsAppInstances, ...telegramSessions];
  },
  
  createInstance: async (data: { provider: 'whatsapp' | 'telegram', name: string }) => {
    const endpoint =
      data.provider === 'whatsapp'
        ? '/api/integrations/v1/whatsapp/instances'
        : '/api/integrations/v1/telegram/sessions';
    const response = await axiosInstance.post(endpoint, data);
    return response.data?.data;
  },

  getWhatsAppQR: async (instanceId: string) => {
    const response = await axiosInstance.get(`/api/integrations/v1/whatsapp/qr/${instanceId}`);
    return response.data?.data; // { qr: 'base64...' }
  },

  getInstanceStatus: async (instanceId: string) => {
    const response = await axiosInstance.get(`/api/integrations/v1/whatsapp/status/${instanceId}`);
    return response.data?.data;
  },

  deleteInstance: async (instanceId: string) => {
    const response = await axiosInstance.delete(`/api/integrations/v1/whatsapp/instances/${instanceId}`);
    return response.data;
  },

  deleteTelegramSession: async (sessionId: string) => {
    const response = await axiosInstance.delete(`/api/integrations/v1/telegram/sessions/${sessionId}`);
    return response.data;
  }
};

// Messaging & Inbox
export const omniChatService = {
  getConversations: async () => {
    const response = await axiosInstance.get('/api/realtime/v1/omni/conversations');
    return response.data?.data || [];
  },

  getConversationById: async (conversationId: string) => {
    const response = await axiosInstance.get(`/api/realtime/v1/omni/conversations/${conversationId}`);
    return response.data?.data || null;
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

  updateConversation: async (conversationId: string, data: { status?: string; subject?: string; assignedAgentId?: string }) => {
    const response = await axiosInstance.patch(`/api/realtime/v1/omni/conversations/${conversationId}`, data);
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
  },

  // Webhooks
  getWebhooks: async () => {
    const response = await axiosInstance.get('/api/automation/v1/omni/webhooks');
    return response.data?.data || [];
  },

  getWebhookLogs: async (id: string) => {
    const response = await axiosInstance.get(`/api/automation/v1/omni/webhooks/${id}/logs`);
    return response.data?.data || [];
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
    scheduledAt?: string,
    metadata?: any,
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
