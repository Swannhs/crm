import { NotificationRepository, NotificationSettingRepository, DeviceTokenRepository, EmailMessageRepository, SmsRepository, ContactPhoneVerificationRepository, } from '../repositories/notification.repository.js';
export class NotificationService {
    repo = new NotificationRepository();
    async getNotifications(orgId, userId, filters) {
        const page = parseInt(filters.page || '1');
        const limit = parseInt(filters.limit || '30');
        const where = { orgId, userId };
        if (filters.category)
            where.category = filters.category;
        return this.repo.findMany(where, (page - 1) * limit, limit);
    }
    async getUnreadTotals(orgId, userId) {
        return this.repo.groupByCategory(orgId, userId);
    }
    async markAsRead(orgId, userId, ids) {
        const where = { orgId, userId };
        if (ids?.length)
            where.id = { in: ids };
        return this.repo.markRead(where);
    }
    async markAsSeen(notificationId, userId) {
        return this.repo.markSeen(notificationId, userId);
    }
    async getUnseenCount(orgId, groupId, userId) {
        return this.repo.unseenCount(orgId, groupId, userId);
    }
}
export class NotificationSettingService {
    repo = new NotificationSettingRepository();
    async getSettings(orgId) {
        const settings = await this.repo.findByOrg(orgId);
        return settings || { orgId, emailEnabled: true, smsEnabled: true, pushEnabled: true, settings: {} };
    }
    async saveSettings(orgId, data) {
        return this.repo.upsert(orgId, {
            emailEnabled: data.email_enabled ?? true,
            smsEnabled: data.sms_enabled ?? true,
            pushEnabled: data.push_enabled ?? true,
            settings: data.settings || {}
        });
    }
}
export class DeviceTokenService {
    repo = new DeviceTokenRepository();
    async saveToken(userId, token, orgId, type) {
        return this.repo.upsert(userId, token, orgId, type);
    }
}
export class EmailMessageService {
    repo = new EmailMessageRepository();
    async getMessages(orgId, filters) {
        const page = parseInt(filters.page || '1');
        const limit = parseInt(filters.limit || '20');
        return this.repo.findMany({ orgId, isDeleted: false }, (page - 1) * limit, limit);
    }
    async getTotals(orgId) {
        return this.repo.totals(orgId);
    }
    async getMessage(id, orgId) {
        const msg = await this.repo.findUnique(id, orgId);
        if (!msg)
            throw new Error('Not found');
        return msg;
    }
    async createMessage(orgId, userId, data) {
        return this.repo.create({
            orgId, createdBy: userId, subject: data.subject, body: data.body,
            to: data.to || [], cc: data.cc || [], bcc: data.bcc || [],
            fromEmail: data.from_email, fromName: data.from_name, metadata: data.metadata || {}
        });
    }
    async markAsSent(id, orgId) {
        const msg = await this.repo.findUnique(id, orgId);
        if (!msg)
            throw new Error('Not found');
        return this.repo.update(id, { isSent: true, sentAt: new Date() });
    }
    async bulkDelete(ids, orgId) {
        return this.repo.bulkUpdate(ids, orgId, { isDeleted: true });
    }
}
export class SmsService {
    repo = new SmsRepository();
    async getMessages(orgId, filters) {
        const page = parseInt(filters.page || '1');
        const limit = parseInt(filters.limit || '20');
        return this.repo.findMany(orgId, (page - 1) * limit, limit);
    }
    async sendSms(orgId, userId, to, body) {
        return this.repo.create({ orgId, createdBy: userId, to, body });
    }
}
export class ContactPhoneVerificationService {
    repo = new ContactPhoneVerificationRepository();
    async generate(data) {
        const code = String(Math.floor(100000 + Math.random() * 900000));
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
        return this.repo.create({
            orgId: data.organizationId || null,
            userRef: data.userId || null,
            phoneNumber: data.phoneNumber,
            verificationCode: code,
            source: data.source || null,
            expiresAt,
            metadata: {
                backTo: data.source || null,
            },
        });
    }
}
