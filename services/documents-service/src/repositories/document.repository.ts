import { db } from '../db.js';

export class DocumentRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.document.findMany({ where, orderBy: { created_at: "desc" }, skip, take }),
      db.document.count({ where })
    ]);
    return { data, total };
  }

  async findUnique(id: string, orgId: string) {
    return db.document.findFirst({ where: { id, org_id: orgId, is_deleted: false }, include: { recipients: true } });
  }

  async create(data: any) {
    return db.document.create({ data });
  }

  async groupByStatus(orgId: string) {
    const [byStatus, total] = await Promise.all([
      db.document.groupBy({ by: ["status"], where: { org_id: orgId, is_deleted: false }, _count: true }),
      db.document.count({ where: { org_id: orgId, is_deleted: false } })
    ]);
    return { total, by_status: byStatus };
  }
}

export class DocumentRecipientRepository {
  async findByHash(hashCode: string) {
    return db.documentRecipient.findUnique({ where: { hash_code: hashCode }, include: { document: true } });
  }

  async create(data: any) {
    return db.documentRecipient.create({ data });
  }

  async update(id: string, data: any) {
    return db.documentRecipient.update({ where: { id }, data });
  }
}

export class DocumentActivityRepository {
  async findRecent(orgId: string) {
    return db.documentActivity.findMany({
      where: { org_id: orgId }, orderBy: { created_at: "desc" }, take: 20,
      include: { document: { select: { id: true, name: true } } }
    });
  }

  async create(data: any) {
    return db.documentActivity.create({ data });
  }
}
