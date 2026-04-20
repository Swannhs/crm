import { db } from '../db.js';
import type { AutomationInput, WorkflowInput, WorkflowNodeInput, WorkflowWorkspaceInput, WorkflowStartActionInput } from '../types/index.js';

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
  async create(data: WorkflowInput) {
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
  async create(data: WorkflowNodeInput) {
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
  async create(data: WorkflowWorkspaceInput) {
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
  async create(data: WorkflowStartActionInput) {
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
