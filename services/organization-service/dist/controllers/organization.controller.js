import { OrganizationService, LocationService, OnboardingService, MembershipService, UserAccessService, CrmConfigurationService, } from '../services/organization.service.js';
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
            const org = await this.svc.updateOrganization(req.identity.orgId, req.identity.userId, req.body || {});
            return res.json({ data: org });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async workspace(req, res) {
        try {
            const data = await this.svc.getWorkspace(req.identity.orgId, req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async getSettings(req, res) {
        try {
            const section = String(req.params.section || '').trim();
            const data = await this.svc.getSettingsSection(req.identity.orgId, req.identity.userId, section);
            return res.json({ data });
        }
        catch (err) {
            if (err.message === 'Unknown settings section')
                return res.status(400).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
    async updateSettings(req, res) {
        try {
            const section = String(req.params.section || '').trim();
            const data = await this.svc.updateSettingsSection(req.identity.orgId, req.identity.userId, section, req.body || {});
            return res.json({ data });
        }
        catch (err) {
            if (err.message === 'Unknown settings section')
                return res.status(400).json({ message: err.message });
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
    async update(req, res) {
        try {
            const locationId = String(req.params.locationId || '').trim();
            if (!locationId)
                return res.status(400).json({ message: 'locationId is required' });
            const location = await this.svc.updateLocation(req.identity.orgId, req.identity.userId, locationId, req.body || {});
            return res.json({ data: location });
        }
        catch (err) {
            if (err.message === 'Location not found')
                return res.status(404).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
    async remove(req, res) {
        try {
            const locationId = String(req.params.locationId || '').trim();
            if (!locationId)
                return res.status(400).json({ message: 'locationId is required' });
            const data = await this.svc.removeLocation(req.identity.orgId, req.identity.userId, locationId);
            return res.json({ data });
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
    async remove(req, res) {
        try {
            const userId = String(req.params.userId || '').trim();
            if (!userId)
                return res.status(400).json({ message: 'userId is required' });
            const data = await this.svc.removeMembership(req.identity.orgId, req.identity.userId, userId);
            return res.json({ data });
        }
        catch (err) {
            if (err.message === 'Cannot remove the last organization owner') {
                return res.status(400).json({ message: err.message });
            }
            return res.status(500).json({ message: err.message });
        }
    }
}
export class UserAccessController {
    svc = new UserAccessService();
    async catalog(req, res) {
        try {
            const data = await this.svc.getCatalog(req.identity.orgId, req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async list(req, res) {
        try {
            const search = String(req.query.search || '').trim();
            const data = await this.svc.listUsers(req.identity.orgId, req.identity.userId, search || undefined);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async keycloakUsers(req, res) {
        try {
            const search = String(req.query.search || '').trim();
            const data = await this.svc.searchKeycloakUsers(req.identity.orgId, req.identity.userId, search || undefined);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async create(req, res) {
        try {
            const data = await this.svc.createUser(req.identity.orgId, req.identity.userId, req.body || {});
            return res.status(201).json({ data });
        }
        catch (err) {
            if (err.message === 'email is required') {
                return res.status(400).json({ message: err.message });
            }
            return res.status(500).json({ message: err.message });
        }
    }
    async sync(req, res) {
        try {
            const userId = String(req.params.userId || req.body.userId || '').trim();
            if (!userId)
                return res.status(400).json({ message: 'userId is required' });
            const data = await this.svc.syncKeycloak(req.identity.orgId, req.identity.userId, userId);
            return res.json({ data });
        }
        catch (err) {
            if (err.message === 'Membership not found') {
                return res.status(404).json({ message: err.message });
            }
            return res.status(500).json({ message: err.message });
        }
    }
}
export class CrmConfigurationController {
    svc = new CrmConfigurationService();
    async listTeams(req, res) {
        try {
            const data = await this.svc.listTeams(req.identity.orgId, req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async upsertTeam(req, res) {
        try {
            const teamId = String(req.params.teamId || '').trim() || null;
            const data = await this.svc.upsertTeam(req.identity.orgId, req.identity.userId, teamId, req.body || {});
            return res.status(teamId ? 200 : 201).json({ data });
        }
        catch (err) {
            if (err.message === 'Team name is required')
                return res.status(400).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
    async deleteTeam(req, res) {
        try {
            const teamId = String(req.params.teamId || '').trim();
            if (!teamId)
                return res.status(400).json({ message: 'teamId is required' });
            const data = await this.svc.deleteTeam(req.identity.orgId, req.identity.userId, teamId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async listPipelines(req, res) {
        try {
            const data = await this.svc.listPipelines(req.identity.orgId, req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async upsertPipeline(req, res) {
        try {
            const pipelineId = String(req.params.pipelineId || '').trim() || null;
            const data = await this.svc.upsertPipeline(req.identity.orgId, req.identity.userId, pipelineId, req.body || {});
            return res.status(pipelineId ? 200 : 201).json({ data });
        }
        catch (err) {
            if (err.message === 'Pipeline name is required')
                return res.status(400).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
    async deletePipeline(req, res) {
        try {
            const pipelineId = String(req.params.pipelineId || '').trim();
            if (!pipelineId)
                return res.status(400).json({ message: 'pipelineId is required' });
            const data = await this.svc.deletePipeline(req.identity.orgId, req.identity.userId, pipelineId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async listCustomFields(req, res) {
        try {
            const data = await this.svc.listCustomFields(req.identity.orgId, req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async upsertCustomField(req, res) {
        try {
            const fieldId = String(req.params.fieldId || '').trim() || null;
            const data = await this.svc.upsertCustomField(req.identity.orgId, req.identity.userId, fieldId, req.body || {});
            return res.status(fieldId ? 200 : 201).json({ data });
        }
        catch (err) {
            if (err.message === 'Custom field name is required')
                return res.status(400).json({ message: err.message });
            return res.status(500).json({ message: err.message });
        }
    }
    async deleteCustomField(req, res) {
        try {
            const fieldId = String(req.params.fieldId || '').trim();
            if (!fieldId)
                return res.status(400).json({ message: 'fieldId is required' });
            const data = await this.svc.deleteCustomField(req.identity.orgId, req.identity.userId, fieldId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async getAutomationRules(req, res) {
        try {
            const data = await this.svc.getAutomationRules(req.identity.orgId, req.identity.userId);
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async updateAutomationRules(req, res) {
        try {
            const data = await this.svc.updateAutomationRules(req.identity.orgId, req.identity.userId, req.body || {});
            return res.json({ data });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
