import { db } from '../db.js';
import type { 
  IntegrationConnectionInput, 
  GoogleIntegrationInput, 
  ZoomIntegrationInput,
  ZoomMeetingInput,
  ShopifyStoreInput,
  UberEatsConfigInput,
  EasyPostConfigInput,
  IntegrationActivityInput,
  UserIntegrationSettingsInput,
  MetaIntegrationInput,
  VoiceIntegrationInput,
  WhatsAppInstanceInput,
  TelegramSessionInput
} from '../types/index.js';

export class IntegrationConnectionRepository {
  async create(data: IntegrationConnectionInput & { userId: string; organizationId?: string }) {
    return db.integrationConnection.create({ data });
  }

  async findByUserAndProvider(userId: string, provider: string) {
    return db.integrationConnection.findUnique({
      where: { userId_provider: { userId, provider } }
    });
  }

  async findByOrganizationId(organizationId: string, provider?: string) {
    if (provider) {
      return db.integrationConnection.findMany({
        where: { organizationId, provider, isActive: true }
      });
    }
    return db.integrationConnection.findMany({
      where: { organizationId, isActive: true }
    });
  }

  async update(id: string, data: Partial<IntegrationConnectionInput>) {
    return db.integrationConnection.update({ where: { id }, data });
  }

  async deactivate(userId: string, provider: string) {
    return db.integrationConnection.updateMany({
      where: { userId, provider },
      data: { isActive: false }
    });
  }

  async delete(userId: string, provider: string) {
    return db.integrationConnection.deleteMany({
      where: { userId, provider }
    });
  }
}

export class GoogleIntegrationRepository {
  async upsert(userId: string, organizationId: string | undefined, data: GoogleIntegrationInput) {
    const existing = await db.googleIntegration.findFirst({ where: { userId } });
    if (existing) {
      return db.googleIntegration.update({ where: { id: existing.id }, data });
    }
    return db.googleIntegration.create({ data: { ...data, userId, organizationId } });
  }

  async findByUserId(userId: string) {
    return db.googleIntegration.findFirst({ where: { userId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.googleIntegration.findMany({ where: { organizationId } });
  }

  async disconnect(userId: string) {
    return db.googleIntegration.updateMany({
      where: { userId },
      data: { isConnected: false }
    });
  }
}

export class ZoomIntegrationRepository {
  async upsert(userId: string, organizationId: string | undefined, data: ZoomIntegrationInput) {
    const existing = await db.zoomIntegration.findFirst({ where: { userId } });
    if (existing) {
      return db.zoomIntegration.update({ where: { id: existing.id }, data });
    }
    return db.zoomIntegration.create({ data: { ...data, userId, organizationId } });
  }

  async findByUserId(userId: string) {
    return db.zoomIntegration.findFirst({ where: { userId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.zoomIntegration.findMany({ where: { organizationId } });
  }

  async disconnect(userId: string) {
    return db.zoomIntegration.updateMany({
      where: { userId },
      data: { isConnected: false }
    });
  }
}

export class ZoomMeetingRepository {
  async create(data: ZoomMeetingInput & { userId: string; organizationId?: string }) {
    return db.zoomMeeting.create({ data });
  }

  async findByZoomId(zoomId: string) {
    return db.zoomMeeting.findUnique({ where: { zoomId } });
  }

  async findByUserId(userId: string) {
    return db.zoomMeeting.findMany({
      where: { userId },
      orderBy: { startTime: 'desc' }
    });
  }

  async update(id: string, data: Partial<ZoomMeetingInput>) {
    return db.zoomMeeting.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.zoomMeeting.delete({ where: { id } });
  }
}

export class ShopifyStoreRepository {
  async create(data: ShopifyStoreInput & { userId: string; organizationId?: string }) {
    return db.shopifyStore.create({ data });
  }

  async findByShopDomain(shopDomain: string) {
    return db.shopifyStore.findUnique({ where: { shopDomain } });
  }

  async findByUserId(userId: string) {
    return db.shopifyStore.findMany({ where: { userId, isActive: true } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.shopifyStore.findMany({ where: { organizationId, isActive: true } });
  }

  async update(id: string, data: Partial<ShopifyStoreInput>) {
    return db.shopifyStore.update({ where: { id }, data });
  }

  async deactivate(id: string) {
    return db.shopifyStore.update({ where: { id }, data: { isActive: false } });
  }
}

export class UberEatsConfigRepository {
  async upsert(userId: string, organizationId: string | undefined, data: UberEatsConfigInput) {
    const existing = await db.uberEatsConfig.findFirst({ where: { userId } });
    if (existing) {
      return db.uberEatsConfig.update({ where: { id: existing.id }, data });
    }
    return db.uberEatsConfig.create({ data: { ...data, userId, organizationId } });
  }

  async findByUserId(userId: string) {
    return db.uberEatsConfig.findFirst({ where: { userId, isActive: true } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.uberEatsConfig.findMany({ where: { organizationId, isActive: true } });
  }
}

export class EasyPostConfigRepository {
  async upsert(userId: string, organizationId: string | undefined, data: EasyPostConfigInput) {
    const existing = await db.easyPostConfig.findFirst({ where: { userId } });
    if (existing) {
      return db.easyPostConfig.update({ where: { id: existing.id }, data });
    }
    return db.easyPostConfig.create({ data: { ...data, userId, organizationId } });
  }

  async findByUserId(userId: string) {
    return db.easyPostConfig.findFirst({ where: { userId, isActive: true } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.easyPostConfig.findMany({ where: { organizationId, isActive: true } });
  }
}

export class IntegrationActivityRepository {
  async create(data: IntegrationActivityInput & { userId: string; organizationId?: string }) {
    return db.integrationActivity.create({ data });
  }

  async findByUserId(userId: string, limit = 50) {
    return db.integrationActivity.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  async findByProvider(provider: string, limit = 50) {
    return db.integrationActivity.findMany({
      where: { provider },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }
}

export class UserIntegrationSettingsRepository {
  async findByUserId(userId: string) {
    return db.userIntegrationSettings.findUnique({ where: { userId } });
  }

  async upsert(userId: string, data: UserIntegrationSettingsInput) {
    const existing = await this.findByUserId(userId);
    if (existing) {
      return db.userIntegrationSettings.update({ where: { id: existing.id }, data });
    }
    return db.userIntegrationSettings.create({ data: { ...data, userId } });
  }

  async findByApiKey(apiKey: string) {
    return db.userIntegrationSettings.findUnique({ where: { apiKey } });
  }
}

export class MetaIntegrationRepository {
  async findByUserId(userId: string) {
    return db.metaIntegration.findUnique({ where: { userId } });
  }

  async upsert(userId: string, organizationId: string | undefined, data: MetaIntegrationInput) {
    const existing = await this.findByUserId(userId);
    if (existing) {
      return db.metaIntegration.update({ where: { id: existing.id }, data });
    }
    return db.metaIntegration.create({ data: { ...data, userId, organizationId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.metaIntegration.findMany({ where: { organizationId } });
  }
}

export class VoiceIntegrationRepository {
  async findByUserId(userId: string) {
    return db.voiceIntegration.findUnique({ where: { userId } });
  }

  async upsert(userId: string, organizationId: string | undefined, data: VoiceIntegrationInput) {
    const existing = await this.findByUserId(userId);
    if (existing) {
      return db.voiceIntegration.update({ where: { id: existing.id }, data });
    }
    return db.voiceIntegration.create({ data: { ...data, userId, organizationId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.voiceIntegration.findMany({ where: { organizationId } });
  }
}

export class WhatsAppInstanceRepository {
  async create(data: WhatsAppInstanceInput & { userId: string; organizationId?: string }) {
    return db.whatsAppInstance.create({ data });
  }

  async findByInstanceId(instanceId: string) {
    return db.whatsAppInstance.findUnique({ where: { instanceId } });
  }

  async findByUserId(userId: string) {
    return db.whatsAppInstance.findMany({ where: { userId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.whatsAppInstance.findMany({ where: { organizationId } });
  }

  async update(instanceId: string, data: Partial<WhatsAppInstanceInput>) {
    return db.whatsAppInstance.update({ where: { instanceId }, data });
  }

  async delete(instanceId: string) {
    return db.whatsAppInstance.delete({ where: { instanceId } });
  }
}

export class TelegramSessionRepository {
  async create(data: TelegramSessionInput & { userId: string; organizationId?: string }) {
    return db.telegramSession.create({ data });
  }

  async findBySessionId(sessionId: string) {
    return db.telegramSession.findUnique({ where: { sessionId } });
  }

  async findByUserId(userId: string) {
    return db.telegramSession.findMany({ where: { userId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.telegramSession.findMany({ where: { organizationId } });
  }

  async update(sessionId: string, data: Partial<TelegramSessionInput>) {
    return db.telegramSession.update({ where: { sessionId }, data });
  }

  async delete(sessionId: string) {
    return db.telegramSession.delete({ where: { sessionId } });
  }
}
