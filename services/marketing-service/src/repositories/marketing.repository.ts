import { db } from '../db.js';

export class CampaignRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.campaign.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
      db.campaign.count({ where })
    ]);
    return { data, total };
  }

  async findUnique(id: string, orgId: string) {
    return db.campaign.findFirst({ where: { id, orgId, isDeleted: false }, include: { emails: true } });
  }

  async create(data: any) {
    return db.campaign.create({ data });
  }

  async update(id: string, orgId: string, data: any) {
    return db.campaign.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.campaign.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}

export class AutomationRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.automation.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
      db.automation.count({ where })
    ]);
    return { data, total };
  }

  async create(data: any) {
    return db.automation.create({ data });
  }

  async update(id: string, orgId: string, data: any) {
    return db.automation.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.automation.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}

export class SubscriberRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.subscriber.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
      db.subscriber.count({ where })
    ]);
    return { data, total };
  }

  async upsert(orgId: string, email: string, data: any) {
    return db.subscriber.upsert({
      where: { orgId_email: { orgId, email } },
      create: { orgId, email, firstName: data.firstName, lastName: data.lastName, phone: data.phone, source: data.source, tags: data.tags || [] },
      update: { firstName: data.firstName, lastName: data.lastName, phone: data.phone, source: data.source }
    });
  }

  async unsubscribe(id: string) {
    return db.subscriber.update({ where: { id }, data: { status: "unsubscribed" } });
  }
}

export class OptinFormRepository {
  async findMany(orgId: string) {
    return db.optinForm.findMany({ where: { orgId, isDeleted: false }, orderBy: { createdAt: "desc" } });
  }

  async findBySlug(slug: string) {
    return db.optinForm.findUnique({ where: { slug } });
  }

  async create(data: any) {
    return db.optinForm.create({ data });
  }

  async update(id: string, orgId: string, data: any) {
    return db.optinForm.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.optinForm.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}
