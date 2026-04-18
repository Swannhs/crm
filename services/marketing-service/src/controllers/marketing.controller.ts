import { Response } from 'express';
import { CampaignService, AutomationService, SubscriberService, OptinFormService } from '../services/marketing.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class CampaignController {
  private svc = new CampaignService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const result = await this.svc.getCampaigns(req.identity.orgId, req.query);
      return res.json({ data: result.data, total: result.total });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const campaign = await this.svc.getCampaign(req.params.id, req.identity.orgId);
      return res.json({ data: campaign });
    } catch (err: any) {
      if (err.message === 'Not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      if (!req.body.name) return res.status(400).json({ message: 'name required' });
      const campaign = await this.svc.createCampaign(orgId, userId, req.body);
      return res.status(201).json({ data: campaign });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateCampaign(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteCampaign(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async send(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.sendCampaign(req.params.id, req.identity.orgId);
      return res.json({ message: 'Campaign marked as sent' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}

export class AutomationController {
  private svc = new AutomationService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const result = await this.svc.getAutomations(req.identity.orgId, req.query);
      return res.json({ data: result.data, total: result.total });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      if (!req.body.name || !req.body.trigger) return res.status(400).json({ message: 'name and trigger required' });
      const automation = await this.svc.createAutomation(orgId, userId, req.body);
      return res.status(201).json({ data: automation });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateAutomation(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteAutomation(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}

export class SubscriberController {
  private svc = new SubscriberService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const result = await this.svc.getSubscribers(req.identity.orgId, req.query);
      return res.json({ data: result.data, total: result.total });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async add(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      if (!req.body.email) return res.status(400).json({ message: 'email required' });
      const subscriber = await this.svc.addSubscriber(orgId, req.body.email, req.body);
      return res.status(201).json({ data: subscriber });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async unsubscribe(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.unsubscribe(req.params.id);
      return res.json({ message: 'Unsubscribed' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}

export class OptinFormController {
  private svc = new OptinFormService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const forms = await this.svc.getForms(req.identity.orgId);
      return res.json({ data: forms });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      if (!req.body.name) return res.status(400).json({ message: 'name required' });
      const form = await this.svc.createForm(orgId, userId, req.body);
      return res.status(201).json({ data: form });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.updateForm(req.params.id, req.identity.orgId, req.body);
      return res.json({ message: 'Updated' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.svc.deleteForm(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}
