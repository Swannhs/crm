import { db } from '../db.js';
import type {
  LiveChatChannelInput,
  LiveChatMessageInput,
  LiveChatContactInput,
  LiveChatWidgetSettingInput,
  SocketConnectionInput,
  ChatStatisticsInput,
  OmniConversationInput,
  OmniMessageInput,
  OmniParticipantInput,
  OmniAgentInput,
  OmniAgentTaskInput
} from '../types/index.js';

export class LiveChatChannelRepository {
  async create(data: LiveChatChannelInput) {
    return db.liveChatChannel.create({ data });
  }

  async findById(id: string) {
    return db.liveChatChannel.findUnique({ where: { id } });
  }

  async findByAdminId(adminId: string) {
    return db.liveChatChannel.findMany({
      where: { adminId, isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
  }

  async findByOrganizationId(organizationId: string) {
    return db.liveChatChannel.findMany({
      where: { organizationId, isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
  }

  async findByContactId(contactId: string) {
    return db.liveChatChannel.findMany({
      where: { contactId, isActive: true },
      orderBy: { updatedAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<LiveChatChannelInput>) {
    return db.liveChatChannel.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.liveChatChannel.update({ where: { id }, data: { isActive: false } });
  }

  async updateLastMessage(id: string) {
    return db.liveChatChannel.update({
      where: { id },
      data: { lastMessageAt: new Date() }
    });
  }
}

export class LiveChatMessageRepository {
  async create(data: LiveChatMessageInput) {
    return db.liveChatMessage.create({ data });
  }

  async findByChannelId(channelId: string, limit = 50) {
    return db.liveChatMessage.findMany({
      where: { channelId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  async markAsRead(channelId: string, senderId: string) {
    return db.liveChatMessage.updateMany({
      where: { channelId, senderId: { not: senderId } },
      data: { isRead: true }
    });
  }

  async getUnreadCount(channelId: string, excludeSenderId: string) {
    return db.liveChatMessage.count({
      where: { channelId, isRead: false, senderId: { not: excludeSenderId } }
    });
  }
}

export class LiveChatContactRepository {
  async create(data: LiveChatContactInput) {
    return db.liveChatContact.create({ data });
  }

  async findById(id: string) {
    return db.liveChatContact.findUnique({ where: { id } });
  }

  async findByUserId(userId: string) {
    return db.liveChatContact.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<LiveChatContactInput>) {
    return db.liveChatContact.update({ where: { id }, data });
  }

  async findByPhone(phone: string, organizationId: string) {
    return db.liveChatContact.findFirst({
      where: { phone, organizationId }
    });
  }
}

export class LiveChatWidgetSettingRepository {
  async upsert(userId: string, organizationId: string | undefined, data: LiveChatWidgetSettingInput) {
    const existing = await db.liveChatWidgetSetting.findFirst({ where: { userId } });
    if (existing) {
      return db.liveChatWidgetSetting.update({ where: { id: existing.id }, data });
    }
    return db.liveChatWidgetSetting.create({ data: { ...data, userId, organizationId } });
  }

  async findByUserId(userId: string) {
    return db.liveChatWidgetSetting.findFirst({ where: { userId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.liveChatWidgetSetting.findFirst({ where: { organizationId } });
  }
}

export class LiveChatStatisticsRepository {
  async create(data: ChatStatisticsInput) {
    return db.liveChatStatistics.create({ data });
  }

  async findByOrganizationId(organizationId: string, startDate?: Date, endDate?: Date) {
    return db.liveChatStatistics.findMany({
      where: {
        organizationId,
        ...(startDate && endDate ? { date: { gte: startDate, lte: endDate } } : {})
      },
      orderBy: { date: 'desc' }
    });
  }

  async updateDaily(organizationId: string, date: Date, data: Partial<ChatStatisticsInput>) {
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
  async create(data: SocketConnectionInput) {
    return db.socketConnection.create({ data });
  }

  async findBySocketId(socketId: string) {
    return db.socketConnection.findUnique({ where: { socketId } });
  }

  async findByUserId(userId: string) {
    return db.socketConnection.findMany({ where: { userId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.socketConnection.findMany({ where: { organizationId, disconnectedAt: null } });
  }

  async disconnect(socketId: string) {
    return db.socketConnection.update({
      where: { socketId },
      data: { disconnectedAt: new Date() }
    });
  }
}

export class OmniConversationRepository {
  async create(data: OmniConversationInput) {
    return db.omniConversation.create({ data });
  }

  async findById(id: string) {
    return db.omniConversation.findUnique({
      where: { id },
      include: { participants: true }
    });
  }

  async findByOrganizationId(organizationId: string) {
    return db.omniConversation.findMany({
      where: { organizationId },
      orderBy: { updatedAt: 'desc' },
      include: { participants: true }
    });
  }

  async findByOrganizationIdAndAssignedAgent(organizationId: string, assignedAgentId: string) {
    return db.omniConversation.findMany({
      where: { organizationId, assignedAgentId },
      orderBy: { updatedAt: 'desc' },
      include: { participants: true }
    });
  }

  async findByOrganizationAndProviderRef(organizationId: string, provider: string, providerRef: string) {
    return db.omniConversation.findFirst({
      where: { organizationId, provider, providerRef }
    });
  }

  async findByContactId(contactId: string) {
    return db.omniConversation.findMany({
      where: { contactId },
      orderBy: { updatedAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<OmniConversationInput>) {
    return db.omniConversation.update({ where: { id }, data });
  }

  async assignAgent(id: string, agentId: string) {
    return db.omniConversation.update({
      where: { id },
      data: { assignedAgentId: agentId }
    });
  }
}

export class OmniMessageRepository {
  async create(data: OmniMessageInput) {
    return db.omniMessage.create({ data });
  }

  async findByConversationId(conversationId: string, limit = 50) {
    return db.omniMessage.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  async updateStatus(id: string, status: string) {
    return db.omniMessage.update({ where: { id }, data: { status } });
  }
}

export class OmniParticipantRepository {
  async create(data: OmniParticipantInput) {
    return db.omniParticipant.create({ data });
  }

  async findByConversationId(conversationId: string) {
    return db.omniParticipant.findMany({ where: { conversationId } });
  }

  async delete(id: string) {
    return db.omniParticipant.delete({ where: { id } });
  }
}

export class OmniAgentRepository {
  async upsertByOrgAndUser(organizationId: string, userId: string, data: Partial<OmniAgentInput>) {
    const existing = await db.omniAgent.findFirst({ where: { organizationId, userId } });
    if (existing) {
      return db.omniAgent.update({
        where: { id: existing.id },
        data
      });
    }

    return db.omniAgent.create({
      data: {
        organizationId,
        userId,
        ...data
      }
    });
  }
}

export class OmniAgentTaskRepository {
  async findByAgentId(agentId: string, organizationId: string) {
    return db.omniAgentTask.findMany({
      where: { agentId, organizationId },
      orderBy: [{ status: 'asc' }, { createdAt: 'desc' }]
    });
  }

  async create(data: OmniAgentTaskInput) {
    return db.omniAgentTask.create({ data });
  }

  async updateById(id: string, organizationId: string, agentId: string, data: Partial<OmniAgentTaskInput>) {
    return db.omniAgentTask.updateMany({
      where: { id, organizationId, agentId },
      data
    });
  }

  async deleteById(id: string, organizationId: string, agentId: string) {
    return db.omniAgentTask.deleteMany({
      where: { id, organizationId, agentId }
    });
  }
}
