import { NotificationService, NotificationSettingService, EmailMessageService, SmsService, ContactPhoneVerificationService, } from '../services/notification.service.js';
export class NotificationController {
    svc = new NotificationService();
    async list(req, res) {
        try {
            const { orgId, userId } = req.identity;
            const result = await this.svc.getNotifications(orgId, userId, req.query);
            return res.json({ data: result.data, total: result.total });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async totals(req, res) {
        try {
            const { orgId, userId } = req.identity;
            const data = await this.svc.getUnreadTotals(orgId, userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async markRead(req, res) {
        try {
            const { orgId, userId } = req.identity;
            await this.svc.markAsRead(orgId, userId, req.body.ids);
            return res.json({ message: 'Marked as read' });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async archive(req, res) {
        try {
            const { orgId, userId } = req.identity;
            await this.svc.archive(orgId, userId, req.body.ids);
            return res.json({ message: 'Archived notifications' });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async unarchive(req, res) {
        try {
            const { orgId, userId } = req.identity;
            await this.svc.unarchive(orgId, userId, req.body.ids);
            return res.json({ message: 'Unarchived notifications' });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async markSeen(req, res) {
        try {
            await this.svc.markAsSeen(String(req.params.notificationId), String(req.params.userId));
            return res.json({ message: 'Marked as seen' });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async unseenCount(req, res) {
        try {
            const count = await this.svc.getUnseenCount(req.identity.orgId, String(req.params.groupId), String(req.params.userId));
            return res.json({ data: { count } });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async handleDomainEvent(routingKey, payload) {
        return this.svc.createFromDomainEvent(routingKey, payload);
    }
}
export class NotificationSettingController {
    svc = new NotificationSettingService();
    async get(req, res) {
        try {
            const data = await this.svc.getSettings(req.identity.orgId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async save(req, res) {
        try {
            const data = await this.svc.saveSettings(req.identity.orgId, req.body);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
export class EmailMessageController {
    svc = new EmailMessageService();
    async list(req, res) {
        try {
            const result = await this.svc.getMessages(req.identity.orgId, req.query);
            return res.json({ data: result.data, total: result.total });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async totals(req, res) {
        try {
            const data = await this.svc.getTotals(req.identity.orgId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async create(req, res) {
        try {
            const { orgId, userId } = req.identity;
            const msg = await this.svc.createMessage(orgId, userId, req.body);
            return res.status(201).json({ data: msg });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async markSent(req, res) {
        try {
            await this.svc.markAsSent(String(req.params.id), req.identity.orgId);
            return res.json({ message: 'Marked as sent' });
        }
        catch (err) {
            if (err.message === 'Not found')
                return res.status(404).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
}
export class SmsController {
    svc = new SmsService();
    async list(req, res) {
        try {
            const result = await this.svc.getMessages(req.identity.orgId, req.query);
            return res.json({ data: result.data, total: result.total });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async send(req, res) {
        try {
            const { orgId, userId } = req.identity;
            if (!req.body.to || !req.body.body)
                return res.status(400).json({ message: 'to and body required' });
            const msg = await this.svc.sendSms(orgId, userId, req.body.to, req.body.body);
            return res.status(201).json({ data: msg });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
export class ContactPhoneVerificationController {
    svc = new ContactPhoneVerificationService();
    async generate(req, res) {
        try {
            if (!req.body.phoneNumber) {
                return res.status(400).json({ message: "phoneNumber is required" });
            }
            const verification = await this.svc.generate(req.body);
            return res.status(201).json({
                data: {
                    id: verification.id,
                    phoneNumber: verification.phoneNumber,
                    verificationCode: verification.verificationCode,
                    expiresAt: verification.expiresAt,
                },
            });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
