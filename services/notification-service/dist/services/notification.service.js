import { NotificationRepository, NotificationSettingRepository, DeviceTokenRepository, EmailMessageRepository, SmsRepository, ContactPhoneVerificationRepository, } from '../repositories/notification.repository.js';
export class NotificationService {
    repo = new NotificationRepository();
    async getNotifications(orgId, userId, filters) {
        const page = parseInt(filters.page || '1');
        const limit = parseInt(filters.limit || '30');
        const where = { org_id: orgId, user_id: userId };
        if (filters.category)
            where.category = filters.category;
        if (filters.archived === 'true') {
            where.is_archived = true;
        }
        else if (filters.archived === 'false' || !filters.archived) {
            where.is_archived = false;
        }
        if (filters.unread === 'true') {
            where.is_read = false;
        }
        return this.repo.findMany(where, (page - 1) * limit, limit);
    }
    async getUnreadTotals(orgId, userId) {
        const [all, unread, archived, grouped] = await Promise.all([
            this.repo.findMany({ org_id: orgId, user_id: userId }, 0, 200),
            this.repo.findMany({ org_id: orgId, user_id: userId, is_read: false, is_archived: false }, 0, 200),
            this.repo.findMany({ org_id: orgId, user_id: userId, is_archived: true }, 0, 200),
            this.repo.groupByCategory(orgId, userId),
        ]);
        return {
            all: all.total,
            unread: unread.total,
            archived: archived.total,
            categories: grouped,
        };
    }
    async markAsRead(orgId, userId, ids) {
        const where = { org_id: orgId, user_id: userId };
        if (ids?.length)
            where.id = { in: ids };
        return this.repo.markRead(where);
    }
    async archive(orgId, userId, ids) {
        const where = { org_id: orgId, user_id: userId };
        if (ids?.length)
            where.id = { in: ids };
        return this.repo.archive(where);
    }
    async unarchive(orgId, userId, ids) {
        const where = { org_id: orgId, user_id: userId };
        if (ids?.length)
            where.id = { in: ids };
        return this.repo.unarchive(where);
    }
    async markAsSeen(notificationId, userId) {
        return this.repo.markSeen(notificationId, userId);
    }
    async getUnseenCount(orgId, groupId, userId) {
        return this.repo.unseenCount(orgId, groupId, userId);
    }
    async createNotification(data) {
        return this.repo.create({
            org_id: data.orgId,
            user_id: data.userId,
            type: data.type || 'system',
            category: data.category || 'system',
            title: data.title || '',
            body: data.body || '',
            ref_id: data.refId || null,
            ref_type: data.refType || null,
            metadata: data.metadata || {},
        });
    }
    async createFromDomainEvent(routingKey, payload) {
        if (routingKey === 'billing.payment.recorded' && payload?.orgId) {
            const userId = String(payload.userId || payload.createdByUserId || '');
            if (!userId)
                return null;
            const amount = Number(payload.amountCents || 0) / 100;
            return this.createNotification({
                orgId: String(payload.orgId),
                userId,
                type: 'payment',
                category: 'payment',
                title: 'Payment recorded',
                body: amount > 0 ? `A payment of $${amount.toFixed(2)} was recorded.` : 'A payment was recorded.',
                refId: payload.paymentId || payload.invoiceId || null,
                refType: payload.paymentId ? 'payment' : 'invoice',
                metadata: payload,
            });
        }
        return null;
    }
}
export class NotificationSettingService {
    repo = new NotificationSettingRepository();
    async getSettings(orgId) {
        const settings = await this.repo.findByOrg(orgId);
        return settings || { org_id: orgId, email_enabled: true, sms_enabled: true, push_enabled: true, settings: {} };
    }
    async saveSettings(orgId, data) {
        return this.repo.upsert(orgId, {
            email_enabled: data.email_enabled ?? true,
            sms_enabled: data.sms_enabled ?? true,
            push_enabled: data.push_enabled ?? true,
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
    notificationRepo = new NotificationRepository();
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
        const message = await this.repo.create({
            org_id: orgId, created_by: userId, subject: data.subject, body: data.body,
            to: data.to || [], cc: data.cc || [], bcc: data.bcc || [],
            from_email: data.from_email, from_name: data.from_name, metadata: data.metadata || {}
        });
        await this.notificationRepo.create({
            org_id: orgId,
            user_id: userId,
            type: 'mail',
            category: 'communication',
            title: data.subject || 'Email drafted',
            body: data.body || '',
            ref_id: message.id,
            ref_type: 'email-message',
            metadata: {
                to: data.to || [],
                from_name: data.from_name || null,
            },
        });
        return message;
    }
    async markAsSent(id, orgId) {
        const msg = await this.repo.findUnique(id, orgId);
        if (!msg)
            throw new Error('Not found');
        return this.repo.update(id, { is_sent: true, sent_at: new Date() });
    }
    async bulkDelete(ids, orgId) {
        return this.repo.bulkUpdate(ids, orgId, { isDeleted: true });
    }
}
export class SmsService {
    repo = new SmsRepository();
    notificationRepo = new NotificationRepository();
    async getMessages(orgId, filters) {
        const page = parseInt(filters.page || '1');
        const limit = parseInt(filters.limit || '20');
        return this.repo.findMany(orgId, (page - 1) * limit, limit);
    }
    async sendSms(orgId, userId, to, body) {
        const sms = await this.repo.create({ org_id: orgId, created_by: userId, to, body });
        await this.notificationRepo.create({
            org_id: orgId,
            user_id: userId,
            type: 'chat',
            category: 'communication',
            title: 'SMS queued',
            body,
            ref_id: sms.id,
            ref_type: 'sms-message',
            metadata: { to },
        });
        return sms;
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
