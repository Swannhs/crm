import api from '../lib/api';

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  participantName: string;
  participantAvatar?: string;
  lastMessage: string;
  lastTimestamp: string;
  unreadCountCount: number;
}

export const messageService = {
  getConversations: async () => {
    const response = await api.get<{ data: Conversation[] }>(`/v1/conversations`);
    return response.data;
  },
  
  getMessages: async (conversationId: string) => {
    const response = await api.get<{ data: ChatMessage[] }>(`/v1/conversations/${conversationId}/messages`);
    return response.data;
  },
  
  sendMessage: async (conversationId: string, content: string) => {
    const response = await api.post<{ data: ChatMessage }>(`/v1/conversations/${conversationId}/messages`, { content });
    return response.data;
  }
};
