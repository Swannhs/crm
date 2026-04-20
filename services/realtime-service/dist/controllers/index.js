import { LiveChatChannelService, LiveChatMessageService, LiveChatContactService, LiveChatWidgetSettingService, LiveChatStatisticsService } from '../services/index.js';
export class LiveChatChannelController {
    svc = new LiveChatChannelService();
    async getChannelsByAdminId(req, res) {
        try {
            const adminId = req.params.adminId;
            const channels = await this.svc.getChannelsByAdminId(adminId);
            return res.json({ success: true, data: channels });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
    async getChannelById(req, res) {
        try {
            const channelId = req.params.channelId;
            const channel = await this.svc.getChannelById(channelId);
            if (!channel)
                return res.status(404).json({ success: false, message: 'Channel not found' });
            return res.json({ success: true, data: channel });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
    async deleteChannel(req, res) {
        try {
            const { channelId, contactId } = req.params;
            await this.svc.deleteChannel(channelId);
            return res.json({ success: true, message: 'Channel deleted' });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
}
export class LiveChatMessageController {
    svc = new LiveChatMessageService();
    contactSvc = new LiveChatContactService();
    channelSvc = new LiveChatChannelService();
    async getChatHistory(req, res) {
        try {
            const channelId = req.params.channelId;
            const history = await this.svc.getChatHistory(channelId);
            return res.json({ success: true, data: history });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
    async addMessage(req, res) {
        try {
            const { channelId, senderId, senderType, content, messageType } = req.body;
            if (!channelId || !content)
                return res.status(400).json({ success: false, message: 'channelId and content required' });
            const message = await this.svc.addMessage({
                channelId,
                senderId: senderId || req.identity.userId,
                senderType,
                content,
                messageType
            });
            return res.status(201).json({ success: true, data: message });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
    async getChatsAndContacts(req, res) {
        try {
            const userId = req.identity.userId;
            const [channels, contacts] = await Promise.all([
                this.channelSvc.getChannelsByAdminId(userId),
                this.contactSvc.getContactsByUserId(userId),
            ]);
            const channelsWithMessages = await Promise.all(channels.map(async (channel) => {
                const messages = await this.svc.getChatHistory(channel.id, 1);
                return {
                    ...channel,
                    lastMessage: messages[0] || null,
                };
            }));
            const channelByContactId = new Map(channelsWithMessages
                .filter((channel) => channel.contactId)
                .map((channel) => [channel.contactId, channel]));
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
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
}
export class LiveChatContactController {
    svc = new LiveChatContactService();
    async createContact(req, res) {
        try {
            const contact = await this.svc.createContact({
                ...req.body,
                userId: req.identity.userId,
                organizationId: req.identity.orgId
            });
            return res.status(201).json({ success: true, data: contact });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
}
export class LiveChatWidgetSettingController {
    svc = new LiveChatWidgetSettingService();
    async saveSetting(req, res) {
        try {
            const setting = await this.svc.saveSetting(req.identity.userId, req.identity.orgId, req.body);
            return res.json({ success: true, data: setting });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
    async getSetting(req, res) {
        try {
            const setting = await this.svc.getSettingByUserId(req.identity.userId);
            return res.json({ success: true, data: setting });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
    async getPublicSetting(req, res) {
        try {
            const userId = req.query.userId;
            const setting = await this.svc.getSettingByUserId(userId);
            return res.json({ success: true, data: setting });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
    async sendCode(req, res) {
        return res.json({ success: true, message: 'Code sent' });
    }
}
export class LiveChatStatisticsController {
    svc = new LiveChatStatisticsService();
    async getStatistics(req, res) {
        try {
            const { startDate, endDate } = req.query;
            const stats = await this.svc.getStatistics(req.identity.orgId, startDate ? new Date(startDate) : undefined, endDate ? new Date(endDate) : undefined);
            return res.json({ success: true, data: stats });
        }
        catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
    }
}
