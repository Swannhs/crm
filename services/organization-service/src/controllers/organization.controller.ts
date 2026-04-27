import { Response } from 'express';
import {
  OrganizationService,
  LocationService,
  OnboardingService,
  MembershipService,
  UserAccessService,
} from '../services/organization.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class OrganizationController {
  private svc = new OrganizationService();

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const org = await this.svc.getOrganization(req.identity.orgId, req.identity.userId);
      return res.json({ data: org });
    } catch (err: any) {
      if (err.message === 'Organization not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'Name is required' });
      const org = await this.svc.updateOrganization(req.identity.orgId, req.identity.userId, req.body.name);
      return res.json({ data: org });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}

export class LocationController {
  private svc = new LocationService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const locations = await this.svc.getLocations(req.identity.orgId, req.identity.userId);
      return res.json({ data: locations });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      if (!req.body.name) return res.status(400).json({ message: 'Name is required' });
      const location = await this.svc.createLocation(req.identity.orgId, req.identity.userId, req.body);
      return res.status(201).json({ data: location });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}

export class OnboardingController {
  private svc = new OnboardingService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.svc.getStatuses(req.identity.userId);
      return res.json({ data });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.svc.createStatus(req.identity.userId, req.body);
      return res.status(201).json({ data });
    } catch (err: any) {
      if (err.message === 'tourStepId is required') return res.status(400).json({ message: err.message });
      if (err.message === 'Tour already visited') return res.status(409).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }
}

export class MembershipController {
  private svc = new MembershipService();

  async resolve(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.svc.resolveMembership(req.identity.orgId, req.identity.userId);
      if (!data) return res.status(404).json({ message: 'Membership not found' });
      return res.json({ data });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.svc.listMemberships(req.identity.orgId, req.identity.userId);
      return res.json({ data });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async upsert(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = String(req.params.userId || req.body.userId || '').trim();
      if (!userId) return res.status(400).json({ message: 'userId is required' });

      const data = await this.svc.upsertMembership(
        req.identity.orgId,
        req.identity.userId,
        userId,
        req.body
      );

      return res.json({ data });
    } catch (err: any) {
      if (err.message === 'Invalid organization role') {
        return res.status(400).json({ message: err.message });
      }
      return res.status(500).json({ message: err.message });
    }
  }

  async remove(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = String(req.params.userId || '').trim();
      if (!userId) return res.status(400).json({ message: 'userId is required' });
      const data = await this.svc.removeMembership(req.identity.orgId, req.identity.userId, userId);
      return res.json({ data });
    } catch (err: any) {
      if (err.message === 'Cannot remove the last organization owner') {
        return res.status(400).json({ message: err.message });
      }
      return res.status(500).json({ message: err.message });
    }
  }
}

export class UserAccessController {
  private svc = new UserAccessService();

  async catalog(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.svc.getCatalog(req.identity.orgId, req.identity.userId);
      return res.json({ data });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const search = String(req.query.search || '').trim();
      const data = await this.svc.listUsers(req.identity.orgId, req.identity.userId, search || undefined);
      return res.json({ data });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async keycloakUsers(req: AuthenticatedRequest, res: Response) {
    try {
      const search = String(req.query.search || '').trim();
      const data = await this.svc.searchKeycloakUsers(req.identity.orgId, req.identity.userId, search || undefined);
      return res.json({ data });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.svc.createUser(req.identity.orgId, req.identity.userId, req.body || {});
      return res.status(201).json({ data });
    } catch (err: any) {
      if (err.message === 'email is required') {
        return res.status(400).json({ message: err.message });
      }
      return res.status(500).json({ message: err.message });
    }
  }

  async sync(req: AuthenticatedRequest, res: Response) {
    try {
      const userId = String(req.params.userId || req.body.userId || '').trim();
      if (!userId) return res.status(400).json({ message: 'userId is required' });
      const data = await this.svc.syncKeycloak(req.identity.orgId, req.identity.userId, userId);
      return res.json({ data });
    } catch (err: any) {
      if (err.message === 'Membership not found') {
        return res.status(404).json({ message: err.message });
      }
      return res.status(500).json({ message: err.message });
    }
  }
}
