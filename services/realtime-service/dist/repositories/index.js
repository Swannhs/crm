import { db } from '../db.js';
export class LiveChatChannelRepository {
    async create(data) {
        return db.liveChatChannel.create({ data });
    }
    async findById(id) {
        return db.liveChatChannel.findUnique({ where: { id } });
    }
    async findByAdminId(adminId) {
        return db.liveChatChannel.findMany({
            where: { adminId, isActive: true },
            orderBy: { updatedAt: 'desc' }
        });
    }
    async findByOrganizationId(organizationId) {
        return db.liveChatChannel.findMany({
            where: { organizationId, isActive: true },
            orderBy: { updatedAt: 'desc' }
        });
    }
    async findByContactId(contactId) {
        return db.liveChatChannel.findMany({
            where: { contactId, isActive: true },
            orderBy: { updatedAt: 'desc' }
        });
    }
    async update(id, data) {
        return db.liveChatChannel.update({ where: { id }, data });
    }
    async delete(id) {
        return db.liveChatChannel.update({ where: { id }, data: { isActive: false } });
    }
    async updateLastMessage(id) {
        return db.liveChatChannel.update({
            where: { id },
            data: { lastMessageAt: new Date() }
        });
    }
}
export class LiveChatMessageRepository {
    async create(data) {
        return db.liveChatMessage.create({ data });
    }
    async findByChannelId(channelId, limit = 50) {
        return db.liveChatMessage.findMany({
            where: { channelId },
            orderBy: { createdAt: 'desc' },
            take: limit
        });
    }
    async markAsRead(channelId, senderId) {
        return db.liveChatMessage.updateMany({
            where: { channelId, senderId: { not: senderId } },
            data: { isRead: true }
        });
    }
    async getUnreadCount(channelId, excludeSenderId) {
        return db.liveChatMessage.count({
            where: { channelId, isRead: false, senderId: { not: excludeSenderId } }
        });
    }
}
export class LiveChatContactRepository {
    async create(data) {
        return db.liveChatContact.create({ data });
    }
    async findById(id) {
        return db.liveChatContact.findUnique({ where: { id } });
    }
    async findByUserId(userId) {
        return db.liveChatContact.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
    }
    async update(id, data) {
        return db.liveChatContact.update({ where: { id }, data });
    }
}
export class LiveChatWidgetSettingRepository {
    async upsert(userId, organizationId, data) {
        const existing = await db.liveChatWidgetSetting.findFirst({ where: { userId } });
        if (existing) {
            return db.liveChatWidgetSetting.update({ where: { id: existing.id }, data });
        }
        return db.liveChatWidgetSetting.create({ data: { ...data, userId, organizationId } });
    }
    async findByUserId(userId) {
        return db.liveChatWidgetSetting.findFirst({ where: { userId } });
    }
    async findByOrganizationId(organizationId) {
        return db.liveChatWidgetSetting.findFirst({ where: { organizationId } });
    }
}
export class LiveChatStatisticsRepository {
    async create(data) {
        return db.liveChatStatistics.create({ data });
    }
    async findByOrganizationId(organizationId, startDate, endDate) {
        return db.liveChatStatistics.findMany({
            where: {
                organizationId,
                ...(startDate && endDate ? { date: { gte: startDate, lte: endDate } } : {})
            },
            orderBy: { date: 'desc' }
        });
    }
    async updateDaily(organizationId, date, data) {
        const existing = await db.liveChatStatistics.findFirst({
            where: { organizationId, date }
        });
        if (existing) {
            return db.liveChatStatistics.update({ where: { id: existing.id }, data });
        }
        return this.create({ ...data, organizationId, date });
    }
}
export class SocketConnectionRepository {
    async create(data) {
        return db.socketConnection.create({ data });
    }
    async findBySocketId(socketId) {
        return db.socketConnection.findUnique({ where: { socketId } });
    }
    async findByUserId(userId) {
        return db.socketConnection.findMany({ where: { userId } });
    }
    async findByOrganizationId(organizationId) {
        return db.socketConnection.findMany({ where: { organizationId, disconnectedAt: null } });
    }
    async disconnect(socketId) {
        return db.socketConnection.update({
            where: { socketId },
            data: { disconnectedAt: new Date() }
        });
    }
}
