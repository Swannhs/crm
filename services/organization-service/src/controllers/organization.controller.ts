import { Response } from 'express';
import { OrganizationService, LocationService } from '../services/organization.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class OrganizationController {
  private svc = new OrganizationService();

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const org = await this.svc.getOrganization(req.identity.orgId);
      return res.json({ data: org });
    } catch (err: any) {
      if (err.message === 'Organization not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'Name is required' });
      const org = await this.svc.updateOrganization(req.identity.orgId, req.body.name);
      return res.json({ data: org });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}

export class LocationController {
  private svc = new LocationService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const locations = await this.svc.getLocations(req.identity.orgId);
      return res.json({ data: locations });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'Name is required' });
      const location = await this.svc.createLocation(req.identity.orgId, req.body);
      return res.status(201).json({ data: location });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}
