import { db } from '../db.js';

export class NotificationRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.notification.findMany({ where, orderBy: { created_at: "desc" }, skip, take }),
      db.notification.count({ where })
    ]);
    return { data, total };
  }

  async groupByCategory(orgId: string, userId: string) {
    return db.notification.groupBy({
      by: ["category"],
      where: { org_id: orgId, user_id: userId, is_read: false },
      _count: true,
    });
  }

  async markRead(where: any) {
    return db.notification.updateMany({ where, data: { is_read: true } });
  }

  async markSeen(id: string, userId: string) {
    return db.notification.updateMany({
      where: { id, user_id: userId },
      data: { is_seen: true, seen_at: new Date() },
    });
  }

  async unseenCount(orgId: string, groupId: string, userId: string) {
    return db.notification.count({
      where: { org_id: orgId, category: groupId, user_id: userId, is_seen: false },
    });
  }
}

export class NotificationSettingRepository {
  async findByOrg(orgId: string) {
    return db.notificationSetting.findUnique({ where: { org_id: orgId } });
  }

  async upsert(orgId: string, data: any) {
    return db.notificationSetting.upsert({
      where: { org_id: orgId },
      create: { org_id: orgId, ...data },
      update: data
    });
  }
}

export class DeviceTokenRepository {
  async upsert(userId: string, token: string, orgId: string, type: string) {
    return db.deviceToken.upsert({
      where: { user_id_token: { user_id: userId, token } },
      create: { user_id: userId, org_id: orgId, type, token },
      update: { org_id: orgId }
    });
  }
}

export class EmailMessageRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.emailMessage.findMany({ where, orderBy: { created_at: "desc" }, skip, take }),
      db.emailMessage.count({ where })
    ]);
    return { data, total };
  }

  async totals(orgId: string) {
    const [total, sent] = await Promise.all([
      db.emailMessage.count({ where: { org_id: orgId, is_deleted: false } }),
      db.emailMessage.count({ where: { org_id: orgId, is_deleted: false, is_sent: true } })
    ]);
    return { total, sent, draft: total - sent };
  }

  async findUnique(id: string, orgId: string) {
    return db.emailMessage.findFirst({ where: { id, org_id: orgId } });
  }

  async create(data: any) { return db.emailMessage.create({ data }); }
  async update(id: string, data: any) { return db.emailMessage.update({ where: { id }, data }); }
  async bulkUpdate(ids: string[], orgId: string, data: any) {
    return db.emailMessage.updateMany({ where: { id: { in: ids }, org_id: orgId }, data });
  }
}

export class SmsRepository {
  async findMany(orgId: string, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.smsMessage.findMany({
        where: { org_id: orgId, is_deleted: false },
        orderBy: { created_at: "desc" },
        skip,
        take,
      }),
      db.smsMessage.count({ where: { org_id: orgId, is_deleted: false } })
    ]);
    return { data, total };
  }

  async create(data: any) { return db.smsMessage.create({ data }); }
}

export class ContactPhoneVerificationRepository {
  async create(data: any) {
    return db.contactPhoneVerification.create({ data });
  }
}
