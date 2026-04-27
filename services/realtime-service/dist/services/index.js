import { LiveChatChannelRepository, LiveChatMessageRepository, LiveChatContactRepository, LiveChatWidgetSettingRepository, LiveChatStatisticsRepository, SocketConnectionRepository } from '../repositories/index.js';
export class LiveChatChannelService {
    repo = new LiveChatChannelRepository();
    async createChannel(data) {
        return this.repo.create(data);
    }
    async getChannelsByAdminId(adminId) {
        return this.repo.findByAdminId(adminId);
    }
    async getChannelById(id) {
        return this.repo.findById(id);
    }
    async getChannelsByOrganization(organizationId) {
        return this.repo.findByOrganizationId(organizationId);
    }
    async deleteChannel(id) {
        return this.repo.delete(id);
    }
    async updateLastMessage(id) {
        return this.repo.updateLastMessage(id);
    }
}
export class LiveChatMessageService {
    repo = new LiveChatMessageRepository();
    channelRepo = new LiveChatChannelRepository();
    async addMessage(data) {
        const message = await this.repo.create(data);
        await this.channelRepo.updateLastMessage(data.channelId);
        return message;
    }
    async getChatHistory(channelId, limit = 50) {
        return this.repo.findByChannelId(channelId, limit);
    }
    async markAsRead(channelId, userId) {
        return this.repo.markAsRead(channelId, userId);
    }
    async getUnreadCount(channelId, excludeUserId) {
        return this.repo.getUnreadCount(channelId, excludeUserId);
    }
}
export class LiveChatContactService {
    repo = new LiveChatContactRepository();
    async createContact(data) {
        return this.repo.create(data);
    }
    async getContactById(id) {
        return this.repo.findById(id);
    }
    async getContactsByUserId(userId) {
        return this.repo.findByUserId(userId);
    }
    async updateContact(id, data) {
        return this.repo.update(id, data);
    }
}
export class LiveChatWidgetSettingService {
    repo = new LiveChatWidgetSettingRepository();
    async saveSetting(userId, organizationId, data) {
        return this.repo.upsert(userId, organizationId, data);
    }
    async getSettingByUserId(userId) {
        return this.repo.findByUserId(userId);
    }
    async getSettingByOrganization(organizationId) {
        return this.repo.findByOrganizationId(organizationId);
    }
}
export class LiveChatStatisticsService {
    repo = new LiveChatStatisticsRepository();
    async getStatistics(organizationId, startDate, endDate) {
        return this.repo.findByOrganizationId(organizationId, startDate, endDate);
    }
    async updateDailyStats(organizationId, data) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return this.repo.updateDaily(organizationId, today, data);
    }
}
export class SocketConnectionService {
    repo = new SocketConnectionRepository();
    async registerConnection(socketId, userId, organizationId, contactId, deviceType) {
        return this.repo.create({ socketId, userId, organizationId, contactId, deviceType });
    }
    async disconnect(socketId) {
        return this.repo.disconnect(socketId);
    }
    async getActiveConnections(organizationId) {
        return this.repo.findByOrganizationId(organizationId);
    }
    async getUserConnections(userId) {
        return this.repo.findByUserId(userId);
    }
}
