import { NotificationRepository, NotificationSettingRepository, DeviceTokenRepository, EmailMessageRepository, SmsRepository } from '../repositories/notification.repository.js';

export class NotificationService {
  private repo = new NotificationRepository();

  async getNotifications(orgId: string, userId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '30');
    const where: any = { orgId, userId };
    if (filters.category) where.category = filters.category;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }

  async getUnreadTotals(orgId: string, userId: string) {
    return this.repo.groupByCategory(orgId, userId);
  }

  async markAsRead(orgId: string, userId: string, ids?: string[]) {
    const where: any = { orgId, userId };
    if (ids?.length) where.id = { in: ids };
    return this.repo.markRead(where);
  }

  async markAsSeen(notificationId: string, userId: string) {
    return this.repo.markSeen(notificationId, userId);
  }

  async getUnseenCount(orgId: string, groupId: string, userId: string) {
    return this.repo.unseenCount(orgId, groupId, userId);
  }
}

export class NotificationSettingService {
  private repo = new NotificationSettingRepository();

  async getSettings(orgId: string) {
    const settings = await this.repo.findByOrg(orgId);
    return settings || { orgId, emailEnabled: true, smsEnabled: true, pushEnabled: true, settings: {} };
  }

  async saveSettings(orgId: string, data: any) {
    return this.repo.upsert(orgId, {
      emailEnabled: data.email_enabled ?? true,
      smsEnabled: data.sms_enabled ?? true,
      pushEnabled: data.push_enabled ?? true,
      settings: data.settings || {}
    });
  }
}

export class DeviceTokenService {
  private repo = new DeviceTokenRepository();

  async saveToken(userId: string, token: string, orgId: string, type: string) {
    return this.repo.upsert(userId, token, orgId, type);
  }
}

export class EmailMessageService {
  private repo = new EmailMessageRepository();

  async getMessages(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    return this.repo.findMany({ orgId, isDeleted: false }, (page - 1) * limit, limit);
  }

  async getTotals(orgId: string) {
    return this.repo.totals(orgId);
  }

  async getMessage(id: string, orgId: string) {
    const msg = await this.repo.findUnique(id, orgId);
    if (!msg) throw new Error('Not found');
    return msg;
  }

  async createMessage(orgId: string, userId: string, data: any) {
    return this.repo.create({
      orgId, createdBy: userId, subject: data.subject, body: data.body,
      to: data.to || [], cc: data.cc || [], bcc: data.bcc || [],
      fromEmail: data.from_email, fromName: data.from_name, metadata: data.metadata || {}
    });
  }

  async markAsSent(id: string, orgId: string) {
    const msg = await this.repo.findUnique(id, orgId);
    if (!msg) throw new Error('Not found');
    return this.repo.update(id, { isSent: true, sentAt: new Date() });
  }

  async bulkDelete(ids: string[], orgId: string) {
    return this.repo.bulkUpdate(ids, orgId, { isDeleted: true });
  }
}

export class SmsService {
  private repo = new SmsRepository();

  async getMessages(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    return this.repo.findMany(orgId, (page - 1) * limit, limit);
  }

  async sendSms(orgId: string, userId: string, to: string, body: string) {
    return this.repo.create({ orgId, createdBy: userId, to, body });
  }
}
