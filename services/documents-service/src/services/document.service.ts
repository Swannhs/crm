import { DocumentRepository, ContactWaiverRepository } from '../repositories/document.repository.js';
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

export class ContactWaiverService {
  private waiverRepo = new ContactWaiverRepository();

  async getPublicWaiver(id: string) {
    const waiver = await this.waiverRepo.findPublicById(id);
    if (!waiver) throw new Error("Not found");
    return waiver;
  }

  async signPublicWaiver(id: string, data: any, signingInfo: any) {
    const waiver = await this.waiverRepo.findPublicById(id);
    if (!waiver) throw new Error("Not found");

    const currentWaivers = Array.isArray(waiver.waiver) ? [...(waiver.waiver as any[])] : [];
    const currentQuestions = Array.isArray(waiver.questions) ? [...(waiver.questions as any[])] : [];
    const members = Array.isArray(waiver.members) ? [...(waiver.members as any[])] : [];
    const guardian = waiver.guardian && typeof waiver.guardian === "object" ? { ...(waiver.guardian as any) } : {};

    if (Array.isArray(data.waiverChecks)) {
      for (let i = 0; i < currentWaivers.length; i += 1) {
        const existing = currentWaivers[i];
        currentWaivers[i] = {
          ...(typeof existing === "object" ? existing : { waiver: String(existing) }),
          checked: Boolean(data.waiverChecks[i]),
        };
      }
    }

    if (Array.isArray(data.questionAnswers)) {
      for (let i = 0; i < currentQuestions.length; i += 1) {
        const existing = currentQuestions[i];
        currentQuestions[i] = {
          ...(typeof existing === "object" ? existing : { question: `Question ${i + 1}` }),
          answer: data.questionAnswers[i] ?? "",
        };
      }
    }

    const signaturePayload = {
      signature: data.signature || null,
      signerName: data.signerName || waiver.signerName || null,
      signedAt: new Date().toISOString(),
      ...signingInfo,
    };

    if (data.isGuardian) {
      Object.assign(guardian, signaturePayload, { status: "signed" });
    } else if (data.memberId) {
      const memberIndex = members.findIndex(
        (member: any) => member?.id === data.memberId || member?._id === data.memberId || member?.contactId === data.memberId
      );
      if (memberIndex >= 0) {
        members[memberIndex] = { ...members[memberIndex], ...signaturePayload, status: "signed" };
      }
    }

    const memberStatuses = members.filter(Boolean).map((member: any) => member?.status);
    const guardianSigned = guardian?.status === "signed";
    const completedCount = memberStatuses.filter((status: string) => status === "signed").length + (guardianSigned ? 1 : 0);
    const totalCount = members.filter(Boolean).length + (guardian?.fullName ? 1 : 0);
    const status = totalCount === 0 || completedCount >= totalCount
      ? "completed"
      : completedCount > 0
        ? "partially_signed"
        : "pending";

    return this.waiverRepo.update(id, {
      signerName: data.signerName || waiver.signerName || null,
      signedAt: new Date(),
      status,
      waiver: currentWaivers,
      questions: currentQuestions,
      members,
      guardian,
      metadata: {
        ...(waiver.metadata as Record<string, unknown> || {}),
        lastSignature: data.signature || null,
        signingInfo,
      },
    });
  }
}
