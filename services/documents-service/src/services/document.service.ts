import { DocumentRepository } from '../repositories/document.repository.js';
import { randomUUID } from "node:crypto";

export class DocumentService {
  private docRepo = new DocumentRepository();

  async getDocuments(orgId: string, filters: any) {
    const page = Math.max(1, parseInt(filters.page || '1'));
    const limit = Math.min(parseInt(filters.limit || '20'), 200);
    const where: any = { org_id: orgId, is_deleted: false };
    if (filters.type) where.type = filters.type;
    if (filters.status) where.status = filters.status;
    const result = await this.docRepo.findMany(where, (page - 1) * limit, limit);
    return { ...result, pagination: { total: result.total, page, limit, pages: Math.ceil(result.total / limit) } };
  }

  async getDocument(id: string, orgId: string) {
    const doc = await this.docRepo.findUnique(id, orgId);
    if (!doc) throw new Error('Not found');
    return doc;
  }

  async uploadDocument(orgId: string, userId: string, data: any) {
    return this.docRepo.create({
      id: randomUUID(),
      org_id: orgId,
      created_by_user_id: userId,
      name: data.name,
      cloud_url: data.cloud_url,
      type: data.type,
      metadata: { creator_type: data.creator_type }
    });
  }

  async getStatusCounts(orgId: string) {
    return this.docRepo.groupByStatus(orgId);
  }
}
