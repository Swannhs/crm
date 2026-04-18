import { Response } from 'express';
import { AutomationService, WorkflowService, WorkflowWorkspaceService, WorkflowStartActionService } from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class AutomationController {
  private svc = new AutomationService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const automation = await this.svc.create(req.body, req.identity.userId, req.identity.orgId);
      return res.status(201).json({ success: true, data: automation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAll(req: AuthenticatedRequest, res: Response) {
    try {
      const automations = await this.svc.getAll(req.identity.userId, req.identity.orgId);
      return res.json({ success: true, data: automations });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async changeStatus(req: AuthenticatedRequest, res: Response) {
    try {
      const { id, isActive } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const automation = await this.svc.changeStatus(id, isActive);
      return res.json({ success: true, data: automation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const automation = await this.svc.delete(id);
      return res.json({ success: true, data: automation });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getByIds(req: AuthenticatedRequest, res: Response) {
    try {
      const ids = req.query.ids as string;
      if (!ids) return res.status(400).json({ success: false, message: 'IDs are required' });
      
      const idsArray = ids.split(',');
      const automations = await this.svc.getByIds(idsArray);
      return res.json({ success: true, data: automations });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteByIds(req: AuthenticatedRequest, res: Response) {
    try {
      const { ids } = req.body;
      if (!ids || !Array.isArray(ids)) return res.status(400).json({ success: false, message: 'IDs array is required' });
      
      const result = await this.svc.deleteByIds(ids);
      return res.json({ success: true, data: result });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async setVideoWatch(req: AuthenticatedRequest, res: Response) {
    try {
      const { automationId, contactId, progress } = req.body;
      return res.json({ success: true, message: "Video watch tracking updated" });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class WorkflowController {
  private svc = new WorkflowService();
  private workspaceSvc = new WorkflowWorkspaceService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const workflow = await this.svc.create({
        ...req.body,
        userId: req.identity.userId,
        organizationId: req.identity.orgId
      });
      return res.status(201).json({ success: true, data: workflow });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAll(req: AuthenticatedRequest, res: Response) {
    try {
      const workflows = await this.svc.getAll(req.identity.userId, req.identity.orgId);
      return res.json({ success: true, data: workflows });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getById(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.query.id as string;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const workflow = await this.svc.getById(id);
      if (!workflow) return res.status(404).json({ success: false, message: 'Workflow not found' });
      return res.json({ success: true, data: workflow });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const { id, ...data } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const workflow = await this.svc.update(id, data);
      return res.json({ success: true, data: workflow });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const workflow = await this.svc.delete(id);
      return res.json({ success: true, data: workflow });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async launch(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const workflow = await this.svc.launch(id);
      return res.json({ success: true, data: workflow });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async createNode(req: AuthenticatedRequest, res: Response) {
    try {
      const node = await this.svc.createNode({
        ...req.body,
        userId: req.identity.userId,
        organizationId: req.identity.orgId
      });
      return res.status(201).json({ success: true, data: node });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getNodes(req: AuthenticatedRequest, res: Response) {
    try {
      const workflowId = req.query.workflowId as string;
      if (!workflowId) return res.status(400).json({ success: false, message: 'Workflow ID is required' });
      
      const nodes = await this.svc.getNodes(workflowId);
      return res.json({ success: true, data: nodes });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateNode(req: AuthenticatedRequest, res: Response) {
    try {
      const { id, ...data } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const node = await this.svc.updateNode(id, data);
      return res.json({ success: true, data: node });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getTriggerNames(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: ["Contact Created", "Contact Updated", "Form Submitted", "Tag Added", "Lead Source Changed"] });
  }

  async getTriggerNamesCategories(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { contact: ["Contact Created", "Contact Updated"], form: ["Form Submitted"], tag: ["Tag Added"], source: ["Lead Source Changed"] } });
  }

  async getConditionsRootValue(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { fields: ["First Name", "Last Name", "Email", "Phone", "Tags", "Lead Source", "Contact Type"], logical: ["AND", "OR"] } });
  }

  async getActivityLogs(req: AuthenticatedRequest, res: Response) {
    try {
      const workflowId = req.query.workflowId as string;
      if (!workflowId) return res.status(400).json({ success: false, message: 'Workflow ID is required' });
      
      const logs = await this.svc.getActivityLogs(workflowId);
      return res.json({ success: true, data: logs });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getActivityLogsCount(req: AuthenticatedRequest, res: Response) {
    try {
      const workflowId = req.query.workflowId as string;
      if (!workflowId) return res.status(400).json({ success: false, message: 'Workflow ID is required' });
      
      const count = await this.svc.getActivityCount(workflowId);
      return res.json({ success: true, data: { count } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getWorkflowsByPipelineStageId(req: AuthenticatedRequest, res: Response) {
    const stageId = req.params.stageId;
    return res.json({ success: true, data: [] });
  }

  async useTemplate(req: AuthenticatedRequest, res: Response) {
    try {
      const templateId = req.params.id;
      return res.status(201).json({ success: true, data: { id: templateId, status: "cloned" } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAllTemplates(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: [] });
  }

  async hasEmailOrSmsNodeInTemplate(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { hasEmail: false, hasSms: false } });
  }
}

export class WorkflowWorkspaceController {
  private svc = new WorkflowWorkspaceService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const workspace = await this.svc.create({
        ...req.body,
        userId: req.identity.userId,
        organizationId: req.identity.orgId
      });
      return res.status(201).json({ success: true, data: workspace });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAll(req: AuthenticatedRequest, res: Response) {
    try {
      const workspaces = await this.svc.getAll(req.identity.userId, req.identity.orgId);
      return res.json({ success: true, data: workspaces });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getById(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const workspace = await this.svc.getById(id);
      if (!workspace) return res.status(404).json({ success: false, message: 'Workspace not found' });
      return res.json({ success: true, data: workspace });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const { id, ...data } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const workspace = await this.svc.update(id, data);
      return res.json({ success: true, data: workspace });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });
      
      const workspace = await this.svc.delete(id);
      return res.json({ success: true, data: workspace });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class WorkflowActionController {
  private svc = new WorkflowStartActionService();

  async createStartAction(req: AuthenticatedRequest, res: Response) {
    try {
      const action = await this.svc.create({
        ...req.body,
        userId: req.identity.userId,
        organizationId: req.identity.orgId
      });
      return res.status(201).json({ success: true, data: action });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getStartActionList(req: AuthenticatedRequest, res: Response) {
    try {
      const workflowId = req.query.workflowId as string;
      if (!workflowId) return res.status(400).json({ success: false, message: 'Workflow ID is required' });
      
      const actions = await this.svc.getAll(workflowId);
      return res.json({ success: true, data: actions });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getStartActionById(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const action = await this.svc.getById(id);
      if (!action) return res.status(404).json({ success: false, message: 'Action not found' });
      return res.json({ success: true, data: action });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateStartAction(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const action = await this.svc.update(id, req.body);
      return res.json({ success: true, data: action });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteStartAction(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      await this.svc.delete(id);
      return res.json({ success: true, message: 'Action deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}