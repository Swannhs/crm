import { 
  LiveChatChannelRepository, 
  LiveChatMessageRepository, 
  LiveChatContactRepository,
  LiveChatWidgetSettingRepository,
  LiveChatStatisticsRepository,
  SocketConnectionRepository
} from '../repositories/index.js';
import type { 
  LiveChatChannelInput, 
  LiveChatMessageInput, 
  LiveChatContactInput, 
  LiveChatWidgetSettingInput,
  ChatStatisticsInput
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