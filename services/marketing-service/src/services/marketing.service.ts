import { CampaignRepository, AutomationRepository, SubscriberRepository, OptinFormRepository, OmniBroadcastRepository, OmniBroadcastLogRepository } from '../repositories/marketing.repository.js';
import { randomUUID } from "node:crypto";
import type { OmniBroadcastInput, OmniBroadcastLogInput } from '../types/index.js';

export class CampaignService {
  private repo = new CampaignRepository();

  async getCampaigns(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    const where: any = { orgId, isDeleted: false };
    if (filters.type) where.type = filters.type;
    if (filters.status) where.status = filters.status;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }

  async getCampaign(id: string, orgId: string) {
    const campaign = await this.repo.findUnique(id, orgId);
    if (!campaign) throw new Error('Not found');
    return campaign;
  }

  async createCampaign(orgId: string, userId: string, data: any) {
    return this.repo.create({
      orgId, createdBy: userId,
      name: data.name, type: data.type || "email",
      subject: data.subject, body: data.body,
      scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : null
    });
  }

  async updateCampaign(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, {
      name: data.name, type: data.type,
      subject: data.subject, body: data.body, status: data.status,
      scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : undefined
    });
  }

  async deleteCampaign(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }

  async sendCampaign(id: string, orgId: string) {
    return this.repo.update(id, orgId, { status: "sent", sentAt: new Date() });
  }
}

export class AutomationService {
  private repo = new AutomationRepository();

  async getAutomations(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    const where: any = { orgId, isDeleted: false };
    if (filters.status) where.status = filters.status;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }

  async createAutomation(orgId: string, userId: string, data: any) {
    return this.repo.create({
      orgId, createdBy: userId,
      name: data.name, trigger: data.trigger,
      conditions: data.conditions || [], actions: data.actions || []
    });
  }

  async updateAutomation(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, {
      name: data.name, trigger: data.trigger,
      conditions: data.conditions, actions: data.actions, status: data.status
    });
  }

  async deleteAutomation(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }
}

export class SubscriberService {
  private repo = new SubscriberRepository();

  async getSubscribers(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '30');
    const where: any = { orgId };
    if (filters.status) where.status = filters.status;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }

  async addSubscriber(orgId: string, email: string, data: any) {
    return this.repo.upsert(orgId, email, data);
  }

  async unsubscribe(id: string) {
    return this.repo.unsubscribe(id);
  }
}

export class OptinFormService {
  private repo = new OptinFormRepository();

  async getForms(orgId: string) {
    return this.repo.findMany(orgId);
  }

  async getPublicForm(slug: string) {
    const form = await this.repo.findBySlug(slug);
    if (!form || !(form as any).isPublished) throw new Error('Not found');
    return form;
  }

  async createForm(orgId: string, userId: string, data: any) {
    const slug = `${data.name.toLowerCase().replace(/\s+/g, "-")}-${randomUUID().substring(0, 8)}`;
    return this.repo.create({
      orgId, createdBy: userId, name: data.name,
      slug, fields: data.fields || [], settings: data.settings || {}
    });
  }

  async updateForm(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, {
      name: data.name, fields: data.fields,
      settings: data.settings, isPublished: data.isPublished
    });
  }

  async deleteForm(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }
}

export class OmniBroadcastService {
  private repo = new OmniBroadcastRepository();
  private logRepo = new OmniBroadcastLogRepository();

  async getBroadcasts(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    const where: any = { orgId };
    if (filters.provider) where.provider = filters.provider;
    if (filters.status) where.status = filters.status;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }

  async getBroadcast(id: string, orgId: string) {
    return this.repo.findUnique(id, orgId);
  }

  async createBroadcast(orgId: string, userId: string, data: OmniBroadcastInput) {
    return this.repo.create({
      ...data,
      orgId,
      createdBy: userId,
      status: 'pending'
    });
  }

  async getLogs(broadcastId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '50');
    return this.logRepo.findByBroadcastId(broadcastId, (page - 1) * limit, limit);
  }
}
