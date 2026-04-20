import { 
  AutomationRepository, 
  WorkflowRepository, 
  WorkflowNodeRepository,
  WorkflowWorkspaceRepository,
  WorkflowStartActionRepository,
  WorkflowActivityLogRepository,
  OmniChatbotRepository,
  OmniKeywordTriggerRepository,
  OmniBroadcastRepository
} from '../repositories/index.js';
import type { 
  AutomationInput, 
  WorkflowInput, 
  WorkflowNodeInput, 
  WorkflowWorkspaceInput,
  WorkflowStartActionInput,
  OmniChatbotInput,
  OmniKeywordTriggerInput,
  OmniBroadcastInput,
  OmniBroadcastRecipientInput
} from '../types/index.js';

export class AutomationService {
  private repo = new AutomationRepository();

  async create(data: AutomationInput, userId: string, organizationId?: string) {
    return this.repo.create({ ...data, userId, organizationId });
  }

  async getAll(userId: string, organizationId: string) {
    return this.repo.findByUserId(userId, organizationId);
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async update(id: string, data: Partial<AutomationInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async changeStatus(id: string, isActive: boolean) {
    return this.repo.changeStatus(id, isActive);
  }

  async getByIds(ids: string[]) {
    return this.repo.findByIds(ids);
  }

  async deleteByIds(ids: string[]) {
    return this.repo.deleteMany(ids);
  }
}

export class WorkflowService {
  private workflowRepo = new WorkflowRepository();
  private nodeRepo = new WorkflowNodeRepository();
  private logRepo = new WorkflowActivityLogRepository();

  async create(data: WorkflowInput) {
    return this.workflowRepo.create(data);
  }

  async getAll(userId: string, organizationId: string) {
    return this.workflowRepo.findByUserId(userId, organizationId);
  }

  async getActiveWorkflowsForOrganization(organizationId: string) {
    return this.workflowRepo.findActiveByOrganizationId(organizationId);
  }

  async getById(id: string) {
    return this.workflowRepo.findById(id);
  }

  async getByWorkspaceId(workspaceId: string) {
    return this.workflowRepo.findByWorkspaceId(workspaceId);
  }

  async update(id: string, data: Partial<WorkflowInput>) {
    return this.workflowRepo.update(id, data);
  }

  async delete(id: string) {
    await this.nodeRepo.deleteByWorkflowId(id);
    return this.workflowRepo.delete(id);
  }

  async launch(id: string) {
    return this.workflowRepo.launch(id);
  }

  async createNode(data: WorkflowNodeInput) {
    return this.nodeRepo.create(data);
  }

  async getNodes(workflowId: string) {
    return this.nodeRepo.findByWorkflowId(workflowId);
  }

  async updateNode(id: string, data: Partial<WorkflowNodeInput>) {
    return this.nodeRepo.update(id, data);
  }

  async deleteNode(id: string) {
    return this.nodeRepo.delete(id);
  }

  async logActivity(data: any) {
    return this.logRepo.create(data);
  }

  async getActivityLogs(workflowId: string, limit = 50) {
    return this.logRepo.findByWorkflowId(workflowId, limit);
  }

  async getActivityCount(workflowId: string) {
    return this.logRepo.countByWorkflowId(workflowId);
  }

  async getActivityByContactId(contactId: string) {
    return this.logRepo.findByContactId(contactId);
  }
}

export class WorkflowWorkspaceService {
  private repo = new WorkflowWorkspaceRepository();

  async create(data: WorkflowWorkspaceInput) {
    return this.repo.create(data);
  }

  async getAll(userId: string, organizationId: string) {
    return this.repo.findByUserId(userId, organizationId);
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async update(id: string, data: Partial<WorkflowWorkspaceInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}

export class WorkflowStartActionService {
  private repo = new WorkflowStartActionRepository();

  async create(data: WorkflowStartActionInput) {
    return this.repo.create(data);
  }

  async getAll(workflowId: string) {
    return this.repo.findByWorkflowId(workflowId);
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async update(id: string, data: Partial<WorkflowStartActionInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}

import { emitOmniMessageSend } from '../kafka/omni.producer.js';
import { OmniMessageReceivedEvent } from '../types/index.js';
import { OmniFlowExecutor } from './omni.flow.executor.js';

export class OmniChatbotService {
  private repo = new OmniChatbotRepository();
  private executor = new OmniFlowExecutor();

  async create(data: OmniChatbotInput, organizationId: string) {
    return this.repo.create({ ...data, organizationId });
  }

  async getAll(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async update(id: string, data: Partial<OmniChatbotInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async processMessage(event: OmniMessageReceivedEvent, logger: any) {
    // Basic chatbot logic: find active chatbot for this provider
    const chatbots = await this.repo.findByOrganizationId(event.organizationId);
    const activeBot = chatbots.find(b => (b.provider === event.provider || b.provider === 'all') && b.isActive);
    
    if (activeBot) {
      logger.info({ botId: activeBot.id }, "Executing chatbot flow via executor");
      await this.executor.execute(activeBot, event, logger);
    }
  }
}

export class OmniKeywordTriggerService {
  private repo = new OmniKeywordTriggerRepository();

  async create(data: OmniKeywordTriggerInput, organizationId: string) {
    return this.repo.create({ ...data, organizationId });
  }

  async getAll(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async update(id: string, data: Partial<OmniKeywordTriggerInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async findMatchingTrigger(keyword: string, organizationId: string) {
    return this.repo.findByKeyword(keyword, organizationId);
  }

  async executeTrigger(trigger: any, event: OmniMessageReceivedEvent, logger: any) {
    logger.info({ triggerId: trigger.id }, "Executing keyword trigger response");
    
    // Send the response configured in the trigger
    await emitOmniMessageSend({
      provider: event.provider,
      instanceId: event.instanceId,
      to: event.contactMobile,
      content: trigger.response,
      type: 'text',
      organizationId: event.organizationId
    }, logger);
  }
}

export class OmniBroadcastService {
  private repo = new OmniBroadcastRepository();

  async createBroadcast(data: OmniBroadcastInput, recipients: OmniBroadcastRecipientInput[], organizationId: string, userId: string) {
    const broadcast = await this.repo.create({ 
      ...data, 
      organizationId, 
      userId,
      totalCount: recipients.length,
      status: data.scheduledAt ? 'scheduled' : 'pending' 
    });

    await this.repo.addRecipients(broadcast.id, recipients);

    if (!data.scheduledAt) {
      // If not scheduled, start processing immediately (async)
      this.processBroadcast(broadcast.id).catch(console.error);
    }

    return broadcast;
  }

  async getBroadcasts(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async getBroadcastById(id: string) {
    return this.repo.findById(id);
  }

  async processBroadcast(broadcastId: string) {
    const broadcast = await this.repo.findById(broadcastId);
    if (!broadcast || broadcast.status === 'completed') return;

    await this.repo.update(broadcastId, { status: 'processing' });

    const recipients = await this.repo.getPendingRecipients(broadcastId);
    
    for (const recipient of recipients) {
      try {
        // Inject variables into content
        let content = broadcast.content;
        const vars = recipient.variables as any;
        if (vars) {
          Object.keys(vars).forEach(key => {
            content = content.replace(new RegExp(`{{${key}}}`, 'g'), vars[key]);
          });
        }

        // Emit Kafka event for delivery
        await emitOmniMessageSend({
          provider: broadcast.provider,
          instanceId: broadcast.instanceId,
          to: recipient.mobile,
          content,
          type: broadcast.type,
          metadata: { ...broadcast.metadata, recipientId: recipient.id, broadcastId: broadcast.id },
          organizationId: broadcast.organizationId
        }, console);

        await this.repo.updateRecipientStatus(recipient.id, 'sent');
        await this.repo.incrementSentCount(broadcastId);

      } catch (err) {
        await this.repo.updateRecipientStatus(recipient.id, 'failed', (err as any).message);
      }
      
      // Small delay to prevent rate limiting (should be more sophisticated in production)
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    await this.repo.update(broadcastId, { status: 'completed' });
  }
}

export class OmniWebhookService {
  private repo = new OmniWebhookRepository();
  private chatbotService = new OmniChatbotService();

  async create(data: any, organizationId: string) {
    return this.repo.create({ ...data, organizationId });
  }

  async getAll(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async getLogs(webhookId: string) {
    return this.repo.getLogs(webhookId);
  }

  async handleWebhook(webhookId: string, payload: any, headers: any, logger: any) {
    const webhook = await this.repo.findById(webhookId);
    if (!webhook || !webhook.isActive) {
      logger.warn({ webhookId }, "Received webhook but it's not found or inactive");
      return { status: 404, message: "Webhook not found or inactive" };
    }

    // Logic for triggering bot or workflow
    try {
      if (webhook.chatbotId) {
        // Trigger a chatbot flow for a specific contact if mobile is provided in payload
        const mobile = payload.mobile || payload.phone || payload.contact_mobile;
        if (mobile) {
           // Simulate an event to trigger the bot
           await this.chatbotService.processMessage({
              provider: 'all',
              instanceId: 'webhook-trigger',
              contactMobile: mobile,
              content: '/start', // Default start command
              organizationId: webhook.organizationId
           }, logger);
        }
      }

      await this.repo.log({
        webhookId,
        payload,
        headers,
        status: 200
      });

      return { status: 200, message: "Success" };
    } catch (err) {
      await this.repo.log({
        webhookId,
        payload,
        headers,
        status: 500,
        errorMessage: (err as any).message
      });
      return { status: 500, message: (err as any).message };
    }
  }
}
