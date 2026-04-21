import { db } from '../db.js';
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

export class AutomationRepository {
  async create(data: AutomationInput & { userId: string; organizationId?: string }) {
    return db.automation.create({ data });
  }

  async findById(id: string) {
    return db.automation.findUnique({ where: { id } });
  }

  async findByUserId(userId: string, organizationId: string) {
    return db.automation.findMany({
      where: { userId, organizationId, isDelete: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<AutomationInput>) {
    return db.automation.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.automation.update({ where: { id }, data: { isDelete: true } });
  }

  async changeStatus(id: string, isActive: boolean) {
    return db.automation.update({ where: { id }, data: { isActive } });
  }

  async findByIds(ids: string[]) {
    return db.automation.findMany({ where: { id: { in: ids } } });
  }

  async deleteMany(ids: string[]) {
    return db.automation.updateMany({
      where: { id: { in: ids } },
      data: { isDelete: true }
    });
  }
}

export class WorkflowRepository {
  async create(data: WorkflowInput & { userId: string; organizationId: string }) {
    return db.workflow.create({ data });
  }

  async findById(id: string) {
    return db.workflow.findUnique({ where: { id } });
  }

  async findByUserId(userId: string, organizationId: string) {
    return db.workflow.findMany({
      where: { userId, organizationId, isDeleted: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findByWorkspaceId(workspaceId: string) {
    return db.workflow.findMany({
      where: { workspaceId, isDeleted: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findActiveByOrganizationId(organizationId: string) {
    return db.workflow.findMany({
      where: {
        organizationId,
        isDeleted: false,
        status: "Active",
      },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<WorkflowInput>) {
    return db.workflow.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.workflow.update({ where: { id }, data: { isDeleted: true } });
  }

  async launch(id: string) {
    return db.workflow.update({ where: { id }, data: { status: "Active" } });
  }
}

export class WorkflowNodeRepository {
  async create(data: WorkflowNodeInput & { userId: string; organizationId: string }) {
    return db.workflowNode.create({ data });
  }

  async findById(id: string) {
    return db.workflowNode.findUnique({ where: { id } });
  }

  async findByWorkflowId(workflowId: string) {
    return db.workflowNode.findMany({
      where: { workflowId, isDeleted: false },
      orderBy: { createdAt: 'asc' }
    });
  }

  async update(id: string, data: Partial<WorkflowNodeInput>) {
    return db.workflowNode.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.workflowNode.update({ where: { id }, data: { isDeleted: true } });
  }

  async deleteByWorkflowId(workflowId: string) {
    return db.workflowNode.updateMany({
      where: { workflowId },
      data: { isDeleted: true }
    });
  }
}

export class WorkflowWorkspaceRepository {
  async create(data: WorkflowWorkspaceInput & { userId: string; organizationId: string }) {
    return db.workflowWorkspace.create({ data });
  }

  async findById(id: string) {
    return db.workflowWorkspace.findUnique({ where: { id } });
  }

  async findByUserId(userId: string, organizationId: string) {
    return db.workflowWorkspace.findMany({
      where: { userId, organizationId, isDeleted: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<WorkflowWorkspaceInput>) {
    return db.workflowWorkspace.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.workflowWorkspace.update({ where: { id }, data: { isDeleted: true } });
  }
}

export class WorkflowStartActionRepository {
  async create(data: WorkflowStartActionInput & { userId: string; organizationId: string }) {
    return db.workflowStartAction.create({ data });
  }

  async findById(id: string) {
    return db.workflowStartAction.findUnique({ where: { id } });
  }

  async findByWorkflowId(workflowId: string) {
    return db.workflowStartAction.findMany({
      where: { workflowId },
      orderBy: { createdAt: 'asc' }
    });
  }

  async update(id: string, data: Partial<WorkflowStartActionInput>) {
    return db.workflowStartAction.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.workflowStartAction.delete({ where: { id } });
  }
}

export class WorkflowActivityLogRepository {
  async create(data: any) {
    return db.workflowActivityLog.create({ data });
  }

  async findByWorkflowId(workflowId: string, limit = 50) {
    return db.workflowActivityLog.findMany({
      where: { workflowId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }

  async findByContactId(contactId: string) {
    return db.workflowActivityLog.findMany({
      where: { contactId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async countByWorkflowId(workflowId: string) {
    return db.workflowActivityLog.count({ where: { workflowId } });
  }
}

export class OmniChatbotRepository {
  async create(data: OmniChatbotInput & { organizationId: string }) {
    return db.omniChatbot.create({ data });
  }

  async findById(id: string) {
    return db.omniChatbot.findUnique({ where: { id } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.omniChatbot.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<OmniChatbotInput>) {
    return db.omniChatbot.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.omniChatbot.delete({ where: { id } });
  }
}

export class OmniKeywordTriggerRepository {
  async create(data: OmniKeywordTriggerInput & { organizationId: string }) {
    return db.omniKeywordTrigger.create({ data });
  }

  async findById(id: string) {
    return db.omniKeywordTrigger.findUnique({ where: { id } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.omniKeywordTrigger.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<OmniKeywordTriggerInput>) {
    return db.omniKeywordTrigger.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.omniKeywordTrigger.delete({ where: { id } });
  }

  async findByKeyword(keyword: string, organizationId: string) {
    return db.omniKeywordTrigger.findMany({
      where: { 
        organizationId, 
        keyword: { contains: keyword, mode: 'insensitive' },
        isActive: true 
      }
    });
  }
}

export class OmniBroadcastRepository {
  async create(data: OmniBroadcastInput & { organizationId: string; userId: string }) {
    return db.omniBroadcast.create({ data });
  }

  async findById(id: string) {
    return db.omniBroadcast.findUnique({
      where: { id },
      include: { recipients: true }
    });
  }

  async findByOrganizationId(organizationId: string) {
    return db.omniBroadcast.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<OmniBroadcastInput>) {
    return db.omniBroadcast.update({ where: { id }, data });
  }

  async addRecipients(broadcastId: string, recipients: OmniBroadcastRecipientInput[]) {
    return db.omniBroadcastRecipient.createMany({
      data: recipients.map(r => ({ ...r, broadcastId }))
    });
  }

  async updateRecipientStatus(id: string, status: string, errorMessage?: string) {
    return db.omniBroadcastRecipient.update({
      where: { id },
      data: { status, errorMessage, processedAt: new Date() }
    });
  }

  async getPendingRecipients(broadcastId: string) {
    return db.omniBroadcastRecipient.findMany({
      where: { broadcastId, status: 'pending' }
    });
  }

  async incrementSentCount(broadcastId: string) {
    return db.omniBroadcast.update({
      where: { id: broadcastId },
      data: { sentCount: { increment: 1 } }
    });
  }
}

export class OmniContactFlowStateRepository {
  async get(contactMobile: string, chatbotId: string) {
    return db.omniContactFlowState.findUnique({
      where: { 
        contactMobile_chatbotId: { contactMobile, chatbotId } 
      }
    });
  }

  async createOrUpdate(data: {
    organizationId: string;
    contactMobile: string;
    chatbotId: string;
    currentNodeId: string;
    stateData?: any;
    isCompleted?: boolean;
  }) {
    return db.omniContactFlowState.upsert({
      where: { 
        contactMobile_chatbotId: { 
          contactMobile: data.contactMobile, 
          chatbotId: data.chatbotId 
        } 
      },
      update: {
        currentNodeId: data.currentNodeId,
        stateData: data.stateData,
        isCompleted: data.isCompleted,
        lastInteraction: new Date()
      },
      create: {
        ...data,
        lastInteraction: new Date()
      }
    });
  }

  async delete(contactMobile: string, chatbotId: string) {
    return db.omniContactFlowState.delete({
      where: { 
        contactMobile_chatbotId: { contactMobile, chatbotId } 
      }
    });
  }
}

export class OmniWebhookRepository {
  async create(data: any) {
    return db.omniWebhook.create({ data });
  }

  async findByOrganizationId(organizationId: string) {
    return db.omniWebhook.findMany({
      where: { organizationId, isActive: true }
    });
  }

  async findById(id: string) {
    return db.omniWebhook.findUnique({
      where: { id }
    });
  }

  async update(id: string, data: any) {
    return db.omniWebhook.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return db.omniWebhook.delete({
      where: { id }
    });
  }

  async log(data: { webhookId: string; payload: any; headers: any; status: number; errorMessage?: string }) {
    return db.omniWebhookLog.create({
      data
    });
  }

  async getLogs(webhookId: string, limit = 100) {
    return db.omniWebhookLog.findMany({
      where: { webhookId },
      orderBy: { createdAt: 'desc' },
      take: limit
    });
  }
}
