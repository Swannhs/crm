import { OrganizationService, LocationService, OnboardingService, MembershipService, } from '../services/organization.service.js';
export class OrganizationController {
    svc = new OrganizationService();
    async get(req, res) {
        try {
            const org = await this.svc.getOrganization(req.identity.orgId, req.identity.userId);
            return res.json({ data: org });
        }
        catch (err) {
            if (err.message === 'Organization not found')
                return res.status(404).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
    async update(req, res) {
        try {
            if (!req.body.name)
                return res.status(400).json({ message: 'Name is required' });
            const org = await this.svc.updateOrganization(req.identity.orgId, req.identity.userId, req.body.name);
            return res.json({ data: org });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
export class LocationController {
    svc = new LocationService();
    async list(req, res) {
        try {
            const locations = await this.svc.getLocations(req.identity.orgId, req.identity.userId);
            return res.json({ data: locations });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async create(req, res) {
        try {
            if (!req.body.name)
                return res.status(400).json({ message: 'Name is required' });
            const location = await this.svc.createLocation(req.identity.orgId, req.identity.userId, req.body);
            return res.status(201).json({ data: location });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
export class OnboardingController {
    svc = new OnboardingService();
    async list(req, res) {
        try {
            const data = await this.svc.getStatuses(req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async create(req, res) {
        try {
            const data = await this.svc.createStatus(req.identity.userId, req.body);
            return res.status(201).json({ data });
        }
        catch (err) {
            if (err.message === 'tourStepId is required')
                return res.status(400).json({ message: err.message });
            if (err.message === 'Tour already visited')
                return res.status(409).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
}
export class MembershipController {
    svc = new MembershipService();
    async resolve(req, res) {
        try {
            const data = await this.svc.resolveMembership(req.identity.orgId, req.identity.userId);
            if (!data)
                return res.status(404).json({ message: 'Membership not found' });
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async list(req, res) {
        try {
            const data = await this.svc.listMemberships(req.identity.orgId, req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async upsert(req, res) {
        try {
            const userId = String(req.params.userId || req.body.userId || '').trim();
            if (!userId)
                return res.status(400).json({ message: 'userId is required' });
            const data = await this.svc.upsertMembership(req.identity.orgId, req.identity.userId, userId, req.body);
            return res.json({ data });
        }
        catch (err) {
            if (err.message === 'Invalid organization role') {
                return res.status(400).json({ message: err.message });
            }
            return res.status(500).json({ message: err.message });
        }
    }
}
