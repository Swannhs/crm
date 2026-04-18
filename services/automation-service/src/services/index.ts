import { 
  AutomationRepository, 
  WorkflowRepository, 
  WorkflowNodeRepository,
  WorkflowWorkspaceRepository,
  WorkflowStartActionRepository,
  WorkflowActivityLogRepository
} from '../repositories/index.js';
import type { 
  AutomationInput, 
  WorkflowInput, 
  WorkflowNodeInput, 
  WorkflowWorkspaceInput,
  WorkflowStartActionInput
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