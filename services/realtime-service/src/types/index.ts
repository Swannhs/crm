export interface LiveChatChannelInput {
  adminId: string;
  organizationId?: string;
  contactId?: string;
  name?: string;
  type?: string;
}

export interface LiveChatMessageInput {
  channelId: string;
  senderId: string;
  senderType?: string;
  content: string;
  messageType?: string;
  metadata?: any;
}

export interface LiveChatContactInput {
  userId: string;
  organizationId?: string;
  name?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  metadata?: any;
}

export interface LiveChatWidgetSettingInput {
  widgetName?: string;
  primaryColor?: string;
  headerTitle?: string;
  greetingMessage?: string;
  offlineMessage?: string;
  position?: string;
  showPowerBy?: boolean;
  enabled?: boolean;
}

export interface SocketConnectionInput {
  socketId: string;
  userId?: string;
  organizationId?: string;
  contactId?: string;
  deviceType?: string;
  metadata?: any;
}

export interface ChatStatisticsInput {
  organizationId?: string;
  totalChats?: number;
  activeChats?: number;
  resolvedChats?: number;
  missedChats?: number;
  avgResponseTime?: number;
  date: Date;
}