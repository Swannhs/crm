import { db } from '../db.js';

export class NotificationRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.notification.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
      db.notification.count({ where })
    ]);
    return { data, total };
  }

  async groupByCategory(orgId: string, userId: string) {
    return db.notification.groupBy({ by: ["category"], where: { orgId, userId, isRead: false }, _count: true });
  }

  async markRead(where: any) {
    return db.notification.updateMany({ where, data: { isRead: true } });
  }

  async markSeen(id: string, userId: string) {
    return db.notification.updateMany({ where: { id, userId }, data: { isSeen: true, seenAt: new Date() } });
  }

  async unseenCount(orgId: string, groupId: string, userId: string) {
    return db.notification.count({ where: { orgId, category: groupId, userId, isSeen: false } });
  }
}

export class NotificationSettingRepository {
  async findByOrg(orgId: string) {
    return db.notificationSetting.findUnique({ where: { orgId } });
  }

  async upsert(orgId: string, data: any) {
    return db.notificationSetting.upsert({
      where: { orgId },
      create: { orgId, ...data },
      update: data
    });
  }
}

export class DeviceTokenRepository {
  async upsert(userId: string, token: string, orgId: string, type: string) {
    return db.deviceToken.upsert({
      where: { userId_token: { userId, token } },
      create: { userId, orgId, type, token },
      update: { orgId }
    });
  }
}

export class EmailMessageRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.emailMessage.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
      db.emailMessage.count({ where })
    ]);
    return { data, total };
  }

  async totals(orgId: string) {
    const [total, sent] = await Promise.all([
      db.emailMessage.count({ where: { orgId, isDeleted: false } }),
      db.emailMessage.count({ where: { orgId, isDeleted: false, isSent: true } })
    ]);
    return { total, sent, draft: total - sent };
  }

  async findUnique(id: string, orgId: string) {
    return db.emailMessage.findFirst({ where: { id, orgId } });
  }

  async create(data: any) { return db.emailMessage.create({ data }); }
  async update(id: string, data: any) { return db.emailMessage.update({ where: { id }, data }); }
  async bulkUpdate(ids: string[], orgId: string, data: any) { return db.emailMessage.updateMany({ where: { id: { in: ids }, orgId }, data }); }
}

export class SmsRepository {
  async findMany(orgId: string, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.smsMessage.findMany({ where: { orgId, isDeleted: false }, orderBy: { createdAt: "desc" }, skip, take }),
      db.smsMessage.count({ where: { orgId, isDeleted: false } })
    ]);
    return { data, total };
  }

  async create(data: any) { return db.smsMessage.create({ data }); }
}
