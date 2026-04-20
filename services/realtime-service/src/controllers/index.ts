import { Response } from 'express';
import { 
  LiveChatChannelService, 
  LiveChatMessageService, 
  LiveChatContactService,
  LiveChatWidgetSettingService,
  LiveChatStatisticsService,
  SocketConnectionService,
  OmniConversationService,
  OmniMessageService
} from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class LiveChatChannelController {
  private svc = new LiveChatChannelService();

  async getChannelsByAdminId(req: AuthenticatedRequest, res: Response) {
    try {
      const adminId = req.params.adminId;
      const channels = await this.svc.getChannelsByAdminId(adminId);
      return res.json({ success: true, data: channels });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getChannelById(req: AuthenticatedRequest, res: Response) {
    try {
      const channelId = req.params.channelId;
      const channel = await this.svc.getChannelById(channelId);
      if (!channel) return res.status(404).json({ success: false, message: 'Channel not found' });
      return res.json({ success: true, data: channel });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteChannel(req: AuthenticatedRequest, res: Response) {
    try {
      const { channelId, contactId } = req.params;
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
      const channelId = req.params.channelId;
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
      const { conversationId } = req.params;
      const conversation = await this.svc.getConversationById(conversationId);
      if (!conversation) return res.status(404).json({ success: false, message: 'Conversation not found' });
      return res.json({ success: true, data: conversation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async assignAgent(req: AuthenticatedRequest, res: Response) {
    try {
      const { conversationId } = req.params;
      const { agentId } = req.body;
      const conversation = await this.svc.assignAgent(conversationId, agentId || req.identity.userId);
      return res.json({ success: true, data: conversation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateConversation(req: AuthenticatedRequest, res: Response) {
    try {
      const { conversationId } = req.params;
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
      const { conversationId } = req.params;
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
      }, req.logger);

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
