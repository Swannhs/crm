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

export interface OmniConversationInput {
  organizationId: string;
  contactId: string;
  provider: string;
  providerRef?: string;
  status?: string;
  subject?: string;
  lastMessage?: string;
  lastMessageAt?: Date;
  metadata?: any;
  assignedAgentId?: string;
}

export interface OmniMessageInput {
  conversationId: string;
  senderId: string;
  senderType: string;
  content?: string;
  type?: string;
  status?: string;
  direction?: string;
  metadata?: any;
}

export interface OmniParticipantInput {
  conversationId: string;
  participantId: string;
  participantType: string;
  role?: string;
}

export interface OmniAgentInput {
  organizationId: string;
  userId: string;
  displayName?: string;
  email?: string;
  status?: string;
  isActive?: boolean;
  metadata?: any;
}

export interface OmniAgentTaskInput {
  organizationId: string;
  agentId: string;
  conversationId?: string;
  title: string;
  description?: string;
  status?: string;
  priority?: string;
  dueAt?: Date;
  metadata?: any;
}

export interface OmniMessageReceivedEvent {
  provider: 'whatsapp' | 'telegram';
  instanceId: string;
  contactMobile: string;
  contactName?: string;
  content: string;
  type: string;
  timestamp: number;
  metadata?: any;
  organizationId: string;
}
