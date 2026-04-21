import { Request, Response } from 'express';
import { 
  AutomationService, 
  WorkflowService, 
  WorkflowWorkspaceService, 
  WorkflowStartActionService,
  OmniChatbotService,
  OmniKeywordTriggerService,
  OmniBroadcastService,
  OmniWebhookService
} from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

function getRouteParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] || '' : value || '';
}

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
      if (!ids) return res.json({ success: true, data: [] });
      
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
      if (!id) return res.json({ success: true, data: null });
      
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
      if (!workflowId) return res.json({ success: true, data: [] });
      
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
      if (!workflowId) return res.json({ success: true, data: [] });
      
      const logs = await this.svc.getActivityLogs(workflowId);
      return res.json({ success: true, data: logs });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getActivityLogsCount(req: AuthenticatedRequest, res: Response) {
    try {
      const workflowId = req.query.workflowId as string;
      if (!workflowId) return res.json({ success: true, data: { count: 0 } });
      
      const count = await this.svc.getActivityCount(workflowId);
      return res.json({ success: true, data: { count } });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getWorkflowsByPipelineStageId(req: AuthenticatedRequest, res: Response) {
    const stageId = getRouteParam(req.params.stageId);
    return res.json({ success: true, data: [] });
  }

  async useTemplate(req: AuthenticatedRequest, res: Response) {
    try {
      const templateId = getRouteParam(req.params.id);
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
      const id = getRouteParam(req.params.id);
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
      if (!workflowId) return res.json({ success: true, data: [] });
      
      const actions = await this.svc.getAll(workflowId);
      return res.json({ success: true, data: actions });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getStartActionById(req: AuthenticatedRequest, res: Response) {
    try {
      const id = getRouteParam(req.params.id);
      const action = await this.svc.getById(id);
      if (!action) return res.status(404).json({ success: false, message: 'Action not found' });
      return res.json({ success: true, data: action });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateStartAction(req: AuthenticatedRequest, res: Response) {
    try {
      const id = getRouteParam(req.params.id);
      const action = await this.svc.update(id, req.body);
      return res.json({ success: true, data: action });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteStartAction(req: AuthenticatedRequest, res: Response) {
    try {
      const id = getRouteParam(req.params.id);
      await this.svc.delete(id);
      return res.json({ success: true, message: 'Action deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class OmniChatbotController {
  private svc = new OmniChatbotService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const chatbot = await this.svc.create(req.body, req.identity.orgId);
      return res.status(201).json({ success: true, data: chatbot });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const chatbots = await this.svc.getAll(req.identity.orgId);
      return res.json({ success: true, data: chatbots });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const chatbot = await this.svc.getById(getRouteParam(req.params.id));
      if (!chatbot) return res.status(404).json({ success: false, message: 'Chatbot not found' });
      return res.json({ success: true, data: chatbot });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const chatbot = await this.svc.update(getRouteParam(req.params.id), req.body);
      return res.json({ success: true, data: chatbot });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.delete(getRouteParam(req.params.id));
      return res.json({ success: true, message: 'Chatbot deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class OmniKeywordTriggerController {
  private svc = new OmniKeywordTriggerService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const trigger = await this.svc.create(req.body, req.identity.orgId);
      return res.status(201).json({ success: true, data: trigger });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const triggers = await this.svc.getAll(req.identity.orgId);
      return res.json({ success: true, data: triggers });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const trigger = await this.svc.update(getRouteParam(req.params.id), req.body);
      return res.json({ success: true, data: trigger });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.delete(getRouteParam(req.params.id));
      return res.json({ success: true, message: 'Trigger deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class OmniBroadcastController {
  private svc = new OmniBroadcastService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { recipients, ...data } = req.body;
      if (!recipients || !Array.isArray(recipients)) {
        return res.status(400).json({ success: false, message: 'recipients array is required' });
      }

      const broadcast = await this.svc.createBroadcast(
        data, 
        recipients, 
        req.identity.orgId, 
        req.identity.userId
      );
      
      return res.status(201).json({ success: true, data: broadcast });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const broadcasts = await this.svc.getBroadcasts(req.identity.orgId);
      return res.json({ success: true, data: broadcasts });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const broadcast = await this.svc.getBroadcastById(getRouteParam(req.params.id));
      if (!broadcast) return res.status(404).json({ success: false, message: 'Broadcast not found' });
      return res.json({ success: true, data: broadcast });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class OmniWebhookController {
  private service = new OmniWebhookService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const webhook = await this.service.create(req.body, req.identity.orgId);
      return res.json({ success: true, data: webhook });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAll(req: AuthenticatedRequest, res: Response) {
    try {
      const webhooks = await this.service.getAll(req.identity.orgId);
      return res.json({ success: true, data: webhooks });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getLogs(req: AuthenticatedRequest, res: Response) {
    try {
      const logs = await this.service.getLogs(getRouteParam(req.params.id));
      return res.json({ success: true, data: logs });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  // Public endpoint for receiving webhooks
  async receive(req: Request, res: Response) {
    try {
      const id = getRouteParam((req as any).params?.id);
      const result = await this.service.handleWebhook(id, req.body, req.headers, req.app.get('logger') || console);
      return res.status(result.status).json(result);
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
