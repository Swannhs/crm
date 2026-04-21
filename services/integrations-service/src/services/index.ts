import { 
  IntegrationConnectionRepository,
  GoogleIntegrationRepository,
  ZoomIntegrationRepository,
  ZoomMeetingRepository,
  ShopifyStoreRepository,
  UberEatsConfigRepository,
  EasyPostConfigRepository,
  IntegrationActivityRepository,
  UserIntegrationSettingsRepository,
  MetaIntegrationRepository,
  VoiceIntegrationRepository,
  WhatsAppInstanceRepository,
  TelegramSessionRepository
} from '../repositories/index.js';
import type { 
  IntegrationConnectionInput, 
  GoogleIntegrationInput, 
  ZoomIntegrationInput,
  ZoomMeetingInput,
  ShopifyStoreInput,
  UberEatsConfigInput,
  EasyPostConfigInput,
  UserIntegrationSettingsInput,
  MetaIntegrationInput,
  VoiceIntegrationInput,
  WhatsAppInstanceInput,
  TelegramSessionInput,
  OmniMessageReceivedEvent
} from '../types/index.js';

export class IntegrationConnectionService {
  private repo = new IntegrationConnectionRepository();

  async connect(data: IntegrationConnectionInput, userId: string, organizationId?: string) {
    const connection = await this.repo.create({ ...data, userId, organizationId });
    await this.logActivity(userId, organizationId, data.provider, 'connect', 'success');
    return connection;
  }

  async getConnections(organizationId: string, provider?: string) {
    return this.repo.findByOrganizationId(organizationId, provider);
  }

  async getConnection(userId: string, provider: string) {
    return this.repo.findByUserAndProvider(userId, provider);
  }

  async disconnect(userId: string, provider: string) {
    await this.repo.delete(userId, provider);
    await this.logActivity(userId, undefined, provider, 'disconnect', 'success');
    return { success: true };
  }

  async updateToken(userId: string, provider: string, accessToken: string, refreshToken?: string, expiresAt?: Date) {
    const connection = await this.repo.findByUserAndProvider(userId, provider);
    if (!connection) throw new Error('Connection not found');
    return this.repo.update(connection.id, { accessToken, refreshToken, expiresAt });
  }

  private async logActivity(userId: string, organizationId: string | undefined, provider: string, action: string, status: string) {
    const activityRepo = new IntegrationActivityRepository();
    await activityRepo.create({ userId, organizationId, provider, action, status });
  }
}

export class GoogleIntegrationService {
  private repo = new GoogleIntegrationRepository();
  private connRepo = new IntegrationConnectionRepository();

  async connect(userId: string, organizationId: string | undefined, data: GoogleIntegrationInput) {
    const integration = await this.repo.upsert(userId, organizationId, { ...data, isConnected: true });
    await this.connRepo.create({
      userId,
      organizationId,
      provider: 'google',
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresAt: data.expiresAt
    });
    return integration;
  }

  async disconnect(userId: string) {
    await this.repo.disconnect(userId);
    await this.connRepo.delete(userId, 'google');
    return { success: true };
  }

  async getConnection(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async getReviews(userId: string) {
    return { reviews: [] };
  }

  async getSecret(userId: string) {
    return { clientId: '', clientSecret: '' };
  }
}

export class ZoomIntegrationService {
  private repo = new ZoomIntegrationRepository();
  private meetingRepo = new ZoomMeetingRepository();
  private connRepo = new IntegrationConnectionRepository();

  async connect(userId: string, organizationId: string | undefined, data: ZoomIntegrationInput) {
    const integration = await this.repo.upsert(userId, organizationId, { ...data, isConnected: true });
    await this.connRepo.create({
      userId,
      organizationId,
      provider: 'zoom',
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresAt: data.expiresAt,
      accountId: data.accountId
    });
    return integration;
  }

  async disconnect(userId: string) {
    await this.repo.disconnect(userId);
    await this.connRepo.delete(userId, 'zoom');
    return { success: true };
  }

  async getConnection(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async createMeeting(data: ZoomMeetingInput, userId: string, organizationId?: string) {
    return this.meetingRepo.create({ ...data, userId, organizationId });
  }

  async getMeetings(userId: string) {
    return this.meetingRepo.findByUserId(userId);
  }

  async updateMeeting(id: string, data: Partial<ZoomMeetingInput>) {
    return this.meetingRepo.update(id, data);
  }

  async deleteMeeting(id: string) {
    return this.meetingRepo.delete(id);
  }

  async getCurrentUser(accessToken: string) {
    return { id: '', email: '', name: '' };
  }

  async generateSignature(meetingId: string, role: number) {
    return { signature: '' };
  }
}

export class FacebookIntegrationService {
  private connRepo = new IntegrationConnectionRepository();

  async connect(userId: string, organizationId: string | undefined, accessToken: string, pageId?: string, pageName?: string) {
    return this.connRepo.create({
      userId,
      organizationId,
      provider: 'facebook',
      accessToken,
      accountId: pageId,
      accountName: pageName
    });
  }

  async disconnect(userId: string) {
    return this.connRepo.delete(userId, 'facebook');
  }

  async getPages(userId: string) {
    return { pages: [] };
  }

  async createPost(userId: string, message: string, mediaUrls?: string[]) {
    return { postId: '', success: true };
  }

  async getInsights(userId: string, campaignId: string) {
    return { impressions: 0, clicks: 0, spend: 0 };
  }
}

export class InstagramIntegrationService {
  private connRepo = new IntegrationConnectionRepository();

  async connect(userId: string, organizationId: string | undefined, accessToken: string, accountId?: string) {
    return this.connRepo.create({
      userId,
      organizationId,
      provider: 'instagram',
      accessToken,
      accountId
    });
  }

  async disconnect(userId: string) {
    return this.connRepo.delete(userId, 'instagram');
  }

  async createPost(userId: string, imageUrl: string, caption: string) {
    return { mediaId: '', success: true };
  }

  async getInsights(userId: string) {
    return { followers: 0, engagement: 0 };
  }
}

export class LinkedInIntegrationService {
  private connRepo = new IntegrationConnectionRepository();

  async connect(userId: string, organizationId: string | undefined, accessToken: string, companyId?: string) {
    return this.connRepo.create({
      userId,
      organizationId,
      provider: 'linkedin',
      accessToken,
      accountId: companyId
    });
  }

  async disconnect(userId: string) {
    return this.connRepo.delete(userId, 'linkedin');
  }

  async createPost(userId: string, text: string, mediaUrl?: string) {
    return { postId: '', success: true };
  }
}

export class TikTokIntegrationService {
  private connRepo = new IntegrationConnectionRepository();

  async connect(userId: string, organizationId: string | undefined, accessToken: string, openId?: string) {
    return this.connRepo.create({
      userId,
      organizationId,
      provider: 'tiktok',
      accessToken,
      accountId: openId
    });
  }

  async disconnect(userId: string) {
    return this.connRepo.delete(userId, 'tiktok');
  }

  async createVideo(userId: string, videoUrl: string, description: string) {
    return { videoId: '', success: true };
  }
}

export class ShopifyIntegrationService {
  private repo = new ShopifyStoreRepository();
  private connRepo = new IntegrationConnectionRepository();

  async connect(userId: string, organizationId: string | undefined, data: ShopifyStoreInput, accessToken: string) {
    const store = await this.repo.create({ ...data, userId, organizationId, accessToken });
    await this.connRepo.create({
      userId,
      organizationId,
      provider: 'shopify',
      accessToken,
      accountId: data.shopDomain
    });
    return store;
  }

  async disconnect(userId: string) {
    const stores = await this.repo.findByUserId(userId);
    for (const store of stores) {
      await this.repo.deactivate(store.id);
    }
    await this.connRepo.delete(userId, 'shopify');
    return { success: true };
  }

  async getStores(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async getProducts(storeId: string) {
    return { products: [] };
  }

  async createOrder(storeId: string, orderData: any) {
    return { orderId: '', success: true };
  }
}

export class UberEatsIntegrationService {
  private repo = new UberEatsConfigRepository();

  async connect(userId: string, organizationId: string | undefined, data: UberEatsConfigInput) {
    return this.repo.upsert(userId, organizationId, { ...data, isActive: true });
  }

  async disconnect(userId: string) {
    return this.repo.upsert(userId, undefined, { isActive: false });
  }

  async getConfig(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async getOrders(userId: string) {
    return { orders: [] };
  }
}

export class EasyPostIntegrationService {
  private repo = new EasyPostConfigRepository();

  async connect(userId: string, organizationId: string | undefined, apiKey: string) {
    return this.repo.upsert(userId, organizationId, { apiKey, isActive: true });
  }

  async disconnect(userId: string) {
    return this.repo.upsert(userId, undefined, { isActive: false });
  }

  async getConfig(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async createShipment(userId: string, shipmentData: any) {
    return { shipmentId: '', trackingCode: '', labelUrl: '' };
  }

  async getRates(userId: string, parcelData: any) {
    return { rates: [] };
  }
}

export class UserIntegrationSettingsService {
  private repo = new UserIntegrationSettingsRepository();

  async getSettings(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async updateSettings(userId: string, data: UserIntegrationSettingsInput) {
    return this.repo.upsert(userId, data);
  }

  async validateApiKey(apiKey: string) {
    return this.repo.findByApiKey(apiKey);
  }
}

export class MetaIntegrationService {
  private repo = new MetaIntegrationRepository();

  async getIntegration(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async updateIntegration(userId: string, organizationId: string | undefined, data: MetaIntegrationInput) {
    return this.repo.upsert(userId, organizationId, data);
  }

  async getOrganizationIntegrations(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }
}

export class VoiceIntegrationService {
  private repo = new VoiceIntegrationRepository();

  async getIntegration(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async updateIntegration(userId: string, organizationId: string | undefined, data: VoiceIntegrationInput) {
    return this.repo.upsert(userId, organizationId, data);
  }

  async getOrganizationIntegrations(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }
}

import { emitOmniMessageReceived } from '../kafka/omni.producer.js';

export class WebhookService {
  async verifyMetaWebhook(mode: string, token: string, challenge: string) {
    const verifyToken = process.env.META_WEBHOOK_VERIFY_TOKEN || 'mymanager_token';
    if (mode === 'subscribe' && token === verifyToken) {
      return challenge;
    }
    throw new Error('Verification failed');
  }

  async handleMetaWebhook(body: any, logger: any) {
    // Basic WhatsApp message extraction logic based on WACRM parity
    if (body.object === 'whatsapp_business_account') {
      for (const entry of body.entry) {
        for (const change of entry.changes) {
          if (change.value.messages) {
            for (const message of change.value.messages) {
              const contact = change.value.contacts?.[0];
              const event: OmniMessageReceivedEvent = {
                provider: 'whatsapp',
                instanceId: change.value.metadata.phone_number_id,
                contactMobile: message.from,
                contactName: contact?.profile?.name,
                content: message.text?.body || '',
                type: message.type,
                timestamp: parseInt(message.timestamp),
                organizationId: 'PENDING_LOOKUP', // Needs lookup by phone_number_id
                metadata: {
                  messageId: message.id,
                  raw: body
                }
              };
              
              // Here we would look up the organizationId by businessPhoneNumberId
              // For now, we emit with a placeholder or handle lookup in controller
              await emitOmniMessageReceived(event, logger);
            }
          }
        }
      }
    }
    return { success: true };
  }

  async handleTelegramWebhook(body: any, logger: any) {
    if (body.message) {
      const event: OmniMessageReceivedEvent = {
        provider: 'telegram',
        instanceId: 'PENDING_LOOKUP', // Lookup by bot token/id
        contactMobile: body.message.from.id.toString(),
        contactName: `${body.message.from.first_name || ''} ${body.message.from.last_name || ''}`.trim(),
        content: body.message.text || '',
        type: 'text',
        timestamp: body.message.date,
        organizationId: 'PENDING_LOOKUP',
        metadata: {
          messageId: body.message.message_id.toString(),
          raw: body
        }
      };
      await emitOmniMessageReceived(event, logger);
    }
    return { success: true };
  }
}

export class WhatsAppService {
  private repo = new WhatsAppInstanceRepository();

  async getInstances(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async createInstance(userId: string, organizationId: string | undefined, name?: string) {
    const instanceId = `wa_${Math.random().toString(36).substring(2, 15)}`;
    return this.repo.create({ userId, organizationId, name, instanceId, status: 'initial' });
  }

  async updateStatus(instanceId: string, status: string, qr?: string, phone?: string) {
    return this.repo.update(instanceId, { status, qr, phone });
  }

  async deleteInstance(instanceId: string) {
    return this.repo.delete(instanceId);
  }
}

export class TelegramService {
  private repo = new TelegramSessionRepository();

  async getSessions(userId: string) {
    return this.repo.findByUserId(userId);
  }

  async createSession(userId: string, organizationId: string | undefined, name?: string) {
    const sessionId = `tg_${Math.random().toString(36).substring(2, 15)}`;
    return this.repo.create({ userId, organizationId, name, sessionId, status: 'disconnected' });
  }

  async updateStatus(sessionId: string, status: string, phone?: string) {
    return this.repo.update(sessionId, { status, phone });
  }

  async deleteSession(sessionId: string) {
    return this.repo.delete(sessionId);
  }
}
