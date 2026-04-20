import { db } from '../db.js';
export class NotificationRepository {
    async findMany(where, skip, take) {
        const [data, total] = await Promise.all([
            db.notification.findMany({ where, orderBy: { created_at: "desc" }, skip, take }),
            db.notification.count({ where })
        ]);
        return { data, total };
    }
    async groupByCategory(orgId, userId) {
        return db.notification.groupBy({
            by: ["category"],
            where: { org_id: orgId, user_id: userId, is_read: false },
            _count: true,
        });
    }
    async markRead(where) {
        return db.notification.updateMany({ where, data: { is_read: true, is_seen: true, seen_at: new Date() } });
    }
    async markSeen(id, userId) {
        return db.notification.updateMany({
            where: { id, user_id: userId },
            data: { is_seen: true, seen_at: new Date() },
        });
    }
    async unseenCount(orgId, groupId, userId) {
        return db.notification.count({
            where: { org_id: orgId, category: groupId, user_id: userId, is_seen: false, is_archived: false },
        });
    }
    async archive(where) {
        return db.notification.updateMany({
            where,
            data: { is_archived: true, archived_at: new Date() },
        });
    }
    async unarchive(where) {
        return db.notification.updateMany({
            where,
            data: { is_archived: false, archived_at: null },
        });
    }
    async create(data) {
        return db.notification.create({ data });
    }
    async createMany(data) {
        if (!data.length)
            return { count: 0 };
        return db.notification.createMany({ data, skipDuplicates: true });
    }
}
export class NotificationSettingRepository {
    async findByOrg(orgId) {
        return db.notificationSetting.findUnique({ where: { org_id: orgId } });
    }
    async upsert(orgId, data) {
        return db.notificationSetting.upsert({
            where: { org_id: orgId },
            create: { org_id: orgId, ...data },
            update: data
        });
    }
}
export class DeviceTokenRepository {
    async upsert(userId, token, orgId, type) {
        return db.deviceToken.upsert({
            where: { user_id_token: { user_id: userId, token } },
            create: { user_id: userId, org_id: orgId, type, token },
            update: { org_id: orgId }
        });
    }
}
export class EmailMessageRepository {
    async findMany(where, skip, take) {
        const [data, total] = await Promise.all([
            db.emailMessage.findMany({ where, orderBy: { created_at: "desc" }, skip, take }),
            db.emailMessage.count({ where })
        ]);
        return { data, total };
    }
    async totals(orgId) {
        const [total, sent] = await Promise.all([
            db.emailMessage.count({ where: { org_id: orgId, is_deleted: false } }),
            db.emailMessage.count({ where: { org_id: orgId, is_deleted: false, is_sent: true } })
        ]);
        return { total, sent, draft: total - sent };
    }
    async findUnique(id, orgId) {
        return db.emailMessage.findFirst({ where: { id, org_id: orgId } });
    }
    async create(data) { return db.emailMessage.create({ data }); }
    async update(id, data) { return db.emailMessage.update({ where: { id }, data }); }
    async bulkUpdate(ids, orgId, data) {
        return db.emailMessage.updateMany({ where: { id: { in: ids }, org_id: orgId }, data });
    }
}
export class SmsRepository {
    async findMany(orgId, skip, take) {
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
    async create(data) { return db.smsMessage.create({ data }); }
}
export class ContactPhoneVerificationRepository {
    async create(data) {
        return db.contactPhoneVerification.create({ data });
    }
}
