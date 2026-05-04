import { Response } from 'express';
import { 
  LiveChatChannelService, 
  LiveChatMessageService, 
  LiveChatContactService,
  LiveChatWidgetSettingService,
  LiveChatStatisticsService,
  SocketConnectionService,
  OmniConversationService,
  OmniMessageService,
  OmniAgentService
} from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';
function getRouteParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] || '' : value || '';
}

export class LiveChatChannelController {
  private svc = new LiveChatChannelService();

  async getChannelsByAdminId(req: AuthenticatedRequest, res: Response) {
    try {
      const adminId = getRouteParam(req.params.adminId);
      const channels = await this.svc.getChannelsByAdminId(adminId);
      return res.json({ success: true, data: channels });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getChannelById(req: AuthenticatedRequest, res: Response) {
    try {
      const channelId = getRouteParam(req.params.channelId);
      const channel = await this.svc.getChannelById(channelId);
      if (!channel) return res.status(404).json({ success: false, message: 'Channel not found' });
      return res.json({ success: true, data: channel });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteChannel(req: AuthenticatedRequest, res: Response) {
    try {
      const channelId = getRouteParam(req.params.channelId);
      await this.svc.deleteChannel(channelId);
      return res.json({ success: true, message: 'Channel deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class LiveChatMessageController {
  private svc = new LiveChatMessageService();
  private contactSvc = new LiveChatContactService();
  private channelSvc = new LiveChatChannelService();

  async getChatHistory(req: AuthenticatedRequest, res: Response) {
    try {
      const channelId = getRouteParam(req.params.channelId);
      const history = await this.svc.getChatHistory(channelId);
      return res.json({ success: true, data: history });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async addMessage(req: AuthenticatedRequest, res: Response) {
    try {
      const { channelId, senderId, senderType, content, messageType } = req.body;
      if (!channelId || !content) return res.status(400).json({ success: false, message: 'channelId and content required' });

      const message = await this.svc.addMessage({
        channelId,
        senderId: senderId || req.identity.userId,
        senderType,
        content,
        messageType
      });
      return res.status(201).json({ success: true, data: message });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getChatsAndContacts(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.identity.userId;
      const [channels, contacts] = await Promise.all([
        this.channelSvc.getChannelsByAdminId(userId),
        this.contactSvc.getContactsByUserId(userId),
      ]);

      const channelsWithMessages = await Promise.all(
        channels.map(async (channel) => {
          const messages = await this.svc.getChatHistory(channel.id, 1);
          return {
            ...channel,
            lastMessage: messages[0] || null,
          };
        })
      );

      const channelByContactId = new Map(
        channelsWithMessages
          .filter((channel) => channel.contactId)
          .map((channel) => [channel.contactId as string, channel])
      );

      const normalizedContacts = contacts.map((contact) => {
        const channel = channelByContactId.get(contact.id);
        return {
          id: contact.id,
          channelId: channel?.id || null,
          fullName: contact.name || contact.email || contact.phone || 'Unknown contact',
          name: contact.name || null,
          email: contact.email || null,
          phone: contact.phone || null,
          avatar: contact.avatar || null,
          lastMessage: channel?.lastMessage?.content || null,
          lastMessageAt: channel?.lastMessage?.createdAt || channel?.updatedAt || contact.updatedAt,
        };
      });

      return res.json({
        success: true,
        data: {
          chats: channelsWithMessages,
          contacts: normalizedContacts,
        },
      });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class LiveChatContactController {
  private svc = new LiveChatContactService();

  async createContact(req: AuthenticatedRequest, res: Response) {
    try {
      const contact = await this.svc.createContact({
        ...req.body,
        userId: req.identity.userId,
        organizationId: req.identity.orgId
      });
      return res.status(201).json({ success: true, data: contact });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // Internal use
  async findOrCreateByPhone(phone: string, organizationId: string, name?: string) {
    return this.svc.findOrCreateByPhone(phone, organizationId, name);
  }
}

export class LiveChatWidgetSettingController {
  private svc = new LiveChatWidgetSettingService();

  async saveSetting(req: AuthenticatedRequest, res: Response) {
    try {
      const setting = await this.svc.saveSetting(req.identity.userId, req.identity.orgId, req.body);
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getSetting(req: AuthenticatedRequest, res: Response) {
    try {
      const setting = await this.svc.getSettingByUserId(req.identity.userId);
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getPublicSetting(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = req.query.userId as string;
      const setting = await this.svc.getSettingByUserId(userId);
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async sendCode(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, message: 'Code sent' });
  }
}

export class LiveChatStatisticsController {
  private svc = new LiveChatStatisticsService();

  async getStatistics(req: AuthenticatedRequest, res: Response) {
    try {
      const { startDate, endDate } = req.query;
      const stats = await this.svc.getStatistics(
        req.identity.orgId,
        startDate ? new Date(startDate as string) : undefined,
        endDate ? new Date(endDate as string) : undefined
      );
      return res.json({ success: true, data: stats });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class OmniConversationController {
  private svc = new OmniConversationService();

  async getConversations(req: AuthenticatedRequest, res: Response) {
    try {
      const conversations = await this.svc.getConversationsByOrganization(req.identity.orgId);
      return res.json({ success: true, data: conversations });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getConversationById(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = getRouteParam(req.params.conversationId);
      const conversation = await this.svc.getConversationById(conversationId);
      if (!conversation) return res.status(404).json({ success: false, message: 'Conversation not found' });
      return res.json({ success: true, data: conversation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async assignAgent(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = getRouteParam(req.params.conversationId);
      const { agentId } = req.body;
      const conversation = await this.svc.assignAgent(conversationId, agentId || req.identity.userId);
      return res.json({ success: true, data: conversation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateConversation(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = getRouteParam(req.params.conversationId);
      const conversation = await this.svc.updateConversation(conversationId, req.body);
      return res.json({ success: true, data: conversation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // Internal use
  async findOrCreateByContact(contactId: string, organizationId: string, provider: string, providerRef: string) {
    return this.svc.findOrCreateByContact(contactId, organizationId, provider, providerRef);
  }
}

export class OmniMessageController {
  private svc = new OmniMessageService();

  async getHistory(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = getRouteParam(req.params.conversationId);
      const history = await this.svc.getConversationHistory(conversationId);
      return res.json({ success: true, data: history });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async addMessage(req: AuthenticatedRequest, res: Response) {
    try {
      const { conversationId, content, type, metadata } = req.body;
      const conversation = await this.svc.getConversationById(conversationId);
      if (!conversation) return res.status(404).json({ success: false, message: 'Conversation not found' });

      const message = await this.svc.addMessage({
        conversationId,
        senderId: req.identity.userId,
        senderType: 'agent',
        content,
        type,
        metadata,
        direction: 'outbound'
      });

      // Emit Kafka event for outbound delivery
      await emitOmniMessageSend({
        provider: conversation.provider,
        instanceId: conversation.providerRef, // Or correct instance mapping
        to: conversation.providerRef, // For WhatsApp this is the number
        content: message.content,
        type: message.type,
        metadata: message.metadata,
        organizationId: req.identity.orgId
      });

      return res.status(201).json({ success: true, data: message });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // Internal use
  async addInboundMessage(data: { conversationId: string; senderId: string; content: string; type: string; metadata?: any }) {
    return this.svc.addInboundMessage(data);
  }
}

import { emitOmniMessageSend } from '../kafka/omni.producer.js';

export class OmniAIController {
  async translate(req: AuthenticatedRequest, res: Response) {
    try {
      const { text, targetLang } = req.body;
      if (!text || !targetLang) return res.status(400).json({ success: false, message: 'text and targetLang required' });
      
      const translatedText = `[Translated to ${targetLang}]: ${text}`;
      return res.json({ success: true, data: { translatedText } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async suggestReply(req: AuthenticatedRequest, res: Response) {
    try {
      const { conversationId, lastMessages } = req.body;
      if (!conversationId) return res.status(400).json({ success: false, message: 'conversationId required' });

      const suggestion = "Thank you for reaching out! How can I help you today?";
      return res.json({ success: true, data: { suggestion } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class OmniAgentController {
  private svc = new OmniAgentService();

  async addAgent(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = String(req.body?.userId || req.identity.userId || '').trim();
      if (!userId) return res.status(400).json({ success: false, message: 'userId is required' });

      const displayName = typeof req.body?.displayName === 'string' ? req.body.displayName : undefined;
      const email = typeof req.body?.email === 'string' ? req.body.email : undefined;
      const status = typeof req.body?.status === 'string' ? req.body.status : undefined;
      const metadata = req.body?.metadata;

      const data = await this.svc.addAgent(req.identity.orgId, userId, { displayName, email, status, metadata });
      return res.status(201).json({ success: true, data });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateAgentInChat(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = String(req.body?.conversationId || req.body?.chatId || '').trim();
      const agentId = String(req.body?.agentId || req.identity.userId || '').trim();
      if (!conversationId) return res.status(400).json({ success: false, message: 'conversationId is required' });
      if (!agentId) return res.status(400).json({ success: false, message: 'agentId is required' });

      const data = await this.svc.assignAgentToChat(conversationId, agentId);
      return res.json({ success: true, data });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getMyAssignedChats(req: AuthenticatedRequest, res: Response) {
    try {
      const chats = await this.svc.getAssignedChats(req.identity.orgId, req.identity.userId);
      return res.json({ success: true, data: chats });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getMyTask(req: AuthenticatedRequest, res: Response) {
    try {
      const tasks = await this.svc.getMyTasks(req.identity.orgId, req.identity.userId);
      return res.json({ success: true, data: tasks });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async createMyTask(req: AuthenticatedRequest, res: Response) {
    try {
      const title = String(req.body?.title || '').trim();
      if (!title) return res.status(400).json({ success: false, message: 'title is required' });

      const dueAtRaw = req.body?.dueAt;
      const dueAt = dueAtRaw ? new Date(dueAtRaw) : undefined;
      if (dueAtRaw && Number.isNaN(dueAt?.getTime())) {
        return res.status(400).json({ success: false, message: 'dueAt must be a valid date' });
      }

      const task = await this.svc.createTask({
        organizationId: req.identity.orgId,
        agentId: req.identity.userId,
        conversationId: req.body?.conversationId ? String(req.body.conversationId) : undefined,
        title,
        description: req.body?.description ? String(req.body.description) : undefined,
        status: req.body?.status ? String(req.body.status) : undefined,
        priority: req.body?.priority ? String(req.body.priority) : undefined,
        dueAt,
        metadata: req.body?.metadata
      });

      return res.status(201).json({ success: true, data: task });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateMyTask(req: AuthenticatedRequest, res: Response) {
    try {
      const taskId = String(req.body?.taskId || req.params?.taskId || '').trim();
      if (!taskId) return res.status(400).json({ success: false, message: 'taskId is required' });

      const patch: any = {};
      if (req.body?.title !== undefined) patch.title = String(req.body.title);
      if (req.body?.description !== undefined) patch.description = String(req.body.description);
      if (req.body?.status !== undefined) patch.status = String(req.body.status);
      if (req.body?.priority !== undefined) patch.priority = String(req.body.priority);
      if (req.body?.metadata !== undefined) patch.metadata = req.body.metadata;
      if (req.body?.dueAt !== undefined) {
        const d = new Date(req.body.dueAt);
        if (Number.isNaN(d.getTime())) return res.status(400).json({ success: false, message: 'dueAt must be a valid date' });
        patch.dueAt = d;
      }

      const updated = await this.svc.updateTask(req.identity.orgId, req.identity.userId, taskId, patch);
      if (!updated.count) return res.status(404).json({ success: false, message: 'Task not found' });

      return res.json({ success: true, data: { updated: updated.count } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async completeMyTask(req: AuthenticatedRequest, res: Response) {
    req.body = { ...req.body, status: 'done' };
    return this.updateMyTask(req, res);
  }

  async deleteMyTask(req: AuthenticatedRequest, res: Response) {
    try {
      const taskId = String(req.body?.taskId || req.params?.taskId || '').trim();
      if (!taskId) return res.status(400).json({ success: false, message: 'taskId is required' });

      const deleted = await this.svc.deleteTask(req.identity.orgId, req.identity.userId, taskId);
      if (!deleted.count) return res.status(404).json({ success: false, message: 'Task not found' });
      return res.json({ success: true, data: { deleted: deleted.count } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class InboxCompatController {
  private convSvc = new OmniConversationService();
  private msgSvc = new OmniMessageService();
  private contactSvc = new LiveChatContactService();

  async getChats(req: AuthenticatedRequest, res: Response) {
    try {
      const chats = await this.convSvc.getConversationsByOrganization(req.identity.orgId);
      return res.json({ success: true, data: chats });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getConvo(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = String(req.body?.conversationId || req.body?.chatId || req.query?.conversationId || '').trim();
      if (!conversationId) return res.status(400).json({ success: false, message: 'conversationId is required' });
      const history = await this.msgSvc.getConversationHistory(conversationId);
      return res.json({ success: true, data: history });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async sendText(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = String(req.body?.conversationId || req.body?.chatId || '').trim();
      const content = String(req.body?.content || req.body?.text || '').trim();
      if (!conversationId || !content) {
        return res.status(400).json({ success: false, message: 'conversationId and content are required' });
      }

      const message = await this.msgSvc.addMessage({
        conversationId,
        senderId: req.identity.userId,
        senderType: 'agent',
        content,
        type: 'text',
        direction: 'outbound'
      });

      return res.status(201).json({ success: true, data: message });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async sendImage(req: AuthenticatedRequest, res: Response) {
    try {
      const conversationId = String(req.body?.conversationId || req.body?.chatId || '').trim();
      const imageUrl = String(req.body?.imageUrl || req.body?.url || '').trim();
      const caption = req.body?.caption ? String(req.body.caption) : '';
      if (!conversationId || !imageUrl) {
        return res.status(400).json({ success: false, message: 'conversationId and imageUrl are required' });
      }

      const message = await this.msgSvc.addMessage({
        conversationId,
        senderId: req.identity.userId,
        senderType: 'agent',
        content: caption || imageUrl,
        type: 'image',
        direction: 'outbound',
        metadata: { imageUrl, ...(req.body?.metadata || {}) }
      });

      return res.status(201).json({ success: true, data: message });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async webhook(req: any, res: Response) {
    try {
      const uid = getRouteParam(req.params.uid);
      const organizationId = String(req.body?.organizationId || req.query?.organizationId || '').trim();
      const contactMobile = String(req.body?.contactMobile || req.body?.from || req.body?.phone || '').trim();
      const content = String(req.body?.content || req.body?.text || '').trim();
      const provider = String(req.body?.provider || 'whatsapp').trim();
      const type = String(req.body?.type || 'text').trim();
      const contactName = req.body?.contactName ? String(req.body.contactName) : undefined;

      if (!organizationId || !contactMobile || !content) {
        return res.status(400).json({ success: false, message: 'organizationId, contactMobile, and content are required' });
      }

      const contact = await this.contactSvc.findOrCreateByPhone(contactMobile, organizationId, contactName);
      const conversation = await this.convSvc.findOrCreateByContact(contact.id, organizationId, provider, contactMobile);
      const message = await this.msgSvc.addInboundMessage({
        conversationId: conversation.id,
        senderId: contact.id,
        content,
        type,
        metadata: { uid, ...(req.body?.metadata || {}) }
      });

      return res.status(201).json({ success: true, data: { uid, conversationId: conversation.id, messageId: message.id } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
