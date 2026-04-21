import { 
  LiveChatChannelRepository, 
  LiveChatMessageRepository, 
  LiveChatContactRepository,
  LiveChatWidgetSettingRepository,
  LiveChatStatisticsRepository,
  SocketConnectionRepository,
  OmniConversationRepository,
  OmniMessageRepository,
  OmniParticipantRepository
} from '../repositories/index.js';
import type { 
  LiveChatChannelInput, 
  LiveChatMessageInput, 
  LiveChatContactInput, 
  LiveChatWidgetSettingInput,
  ChatStatisticsInput,
  OmniConversationInput,
  OmniMessageInput,
  OmniParticipantInput
} from '../types/index.js';

export class LiveChatChannelService {
  private repo = new LiveChatChannelRepository();

  async createChannel(data: LiveChatChannelInput) {
    return this.repo.create(data);
  }

  async getChannelsByAdminId(adminId: string) {
    return this.repo.findByAdminId(adminId);
  }

  async getChannelById(id: string) {
    return this.repo.findById(id);
  }

  async getChannelsByOrganization(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async deleteChannel(id: string) {
    return this.repo.delete(id);
  }

  async updateLastMessage(id: string) {
    return this.repo.updateLastMessage(id);
  }
}

export class LiveChatMessageService {
  private repo = new LiveChatMessageRepository();
  private channelRepo = new LiveChatChannelRepository();

  async addMessage(data: LiveChatMessageInput) {
    const message = await this.repo.create(data);
    await this.channelRepo.updateLastMessage(data.channelId);
    return message;
  }

  async getChatHistory(channelId: string, limit = 50) {
    return this.repo.findByChannelId(channelId, limit);
  }

  async markAsRead(channelId: string, userId: string) {
    return this.repo.markAsRead(channelId, userId);
  }

  async getUnreadCount(channelId: string, excludeUserId: string) {
    return this.repo.getUnreadCount(channelId, excludeUserId);
  }
}

export class LiveChatContactService {
  private repo = new LiveChatContactRepository();

  async createContact(data: LiveChatContactInput) {
    return this.repo.create(data);
  }

  async getContactById(id: string) {
    return this.repo.findById(id);
  }

  async getContactsByUserId(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async updateContact(id: string, data: Partial<LiveChatContactInput>) {
    return this.repo.update(id, data);
  }

  async findOrCreateByPhone(phone: string, organizationId: string, name?: string) {
    const existing = await this.repo.findByPhone(phone, organizationId);
    if (existing) return existing;

    return this.repo.create({
      phone,
      organizationId,
      name: name || `Contact ${phone.slice(-4)}`,
      userId: '00000000-0000-0000-0000-000000000000'
    });
  }
}

export class LiveChatWidgetSettingService {
  private repo = new LiveChatWidgetSettingRepository();

  async saveSetting(userId: string, organizationId: string | undefined, data: LiveChatWidgetSettingInput) {
    return this.repo.upsert(userId, organizationId, data);
  }

  async getSettingByUserId(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async getSettingByOrganization(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }
}

export class LiveChatStatisticsService {
  private repo = new LiveChatStatisticsRepository();

  async getStatistics(organizationId: string, startDate?: Date, endDate?: Date) {
    return this.repo.findByOrganizationId(organizationId, startDate, endDate);
  }

  async updateDailyStats(organizationId: string, data: ChatStatisticsInput) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.repo.updateDaily(organizationId, today, data);
  }
}

export class SocketConnectionService {
  private repo = new SocketConnectionRepository();

  async registerConnection(socketId: string, userId?: string, organizationId?: string, contactId?: string, deviceType?: string) {
    return this.repo.create({ socketId, userId, organizationId, contactId, deviceType });
  }

  async disconnect(socketId: string) {
    return this.repo.disconnect(socketId);
  }

  async getActiveConnections(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async getUserConnections(userId: string) {
    return this.repo.findByUserId(userId);
  }
}

export class OmniConversationService {
  private repo = new OmniConversationRepository();
  private participantRepo = new OmniParticipantRepository();

  async createConversation(data: OmniConversationInput) {
    const conversation = await this.repo.create(data);
    // Add contact as participant
    await this.participantRepo.create({
      conversationId: conversation.id,
      participantId: data.contactId,
      participantType: 'contact'
    });
    return conversation;
  }

  async findOrCreateByContact(contactId: string, organizationId: string, provider: string, providerRef: string) {
    const existing = await this.repo.findByOrganizationAndProviderRef(organizationId, provider, providerRef);
    if (existing) return existing;

    return this.createConversation({
      contactId,
      organizationId,
      provider,
      providerRef,
      status: 'open'
    });
  }

  async getConversationsByOrganization(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async getConversationById(id: string) {
    return this.repo.findById(id);
  }

  async assignAgent(id: string, agentId: string) {
    // Add agent as participant if not already there
    const participants = await this.participantRepo.findByConversationId(id);
    const isAgentIn = participants.some(p => p.participantId === agentId);
    
    if (!isAgentIn) {
      await this.participantRepo.create({
        conversationId: id,
        participantId: agentId,
        participantType: 'agent'
      });
    }

    return this.repo.assignAgent(id, agentId);
  }

  async updateConversation(id: string, data: Partial<OmniConversationInput>) {
    return this.repo.update(id, data);
  }
}

export class OmniMessageService {
  private repo = new OmniMessageRepository();
  private convRepo = new OmniConversationRepository();

  async addMessage(data: OmniMessageInput) {
    const message = await this.repo.create(data);
    
    // Update conversation last message
    await this.convRepo.update(data.conversationId, {
      lastMessage: data.content,
      lastMessageAt: new Date()
    });
    
    return message;
  }

  async addInboundMessage(data: { conversationId: string; senderId: string; content: string; type: string; metadata?: any }) {
    return this.addMessage({
      conversationId: data.conversationId,
      senderId: data.senderId,
      senderType: 'contact',
      content: data.content,
      type: data.type,
      direction: 'inbound',
      status: 'delivered',
      metadata: data.metadata
    });
  }

  async getConversationHistory(conversationId: string, limit = 50) {
    return this.repo.findByConversationId(conversationId, limit);
  }

  async updateMessageStatus(id: string, status: string) {
    return this.repo.updateStatus(id, status);
  }
}