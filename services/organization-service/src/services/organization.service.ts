import {
  OrganizationRepository,
  LocationRepository,
  OnboardingRepository,
  MembershipRepository,
} from '../repositories/organization.repository.js';
import { KeycloakAdminService } from './keycloak-admin.service.js';
import {
  VALID_ORG_ROLES,
  DEFAULT_ROLE_PERMISSIONS,
  normalizeIntegrationRoles,
  buildEffectivePermissions,
  getRbacCatalog,
  getRoleProfile,
  IntegrationRoles,
} from './rbac-catalog.js';

export class OrganizationService {
  private orgRepo = new OrganizationRepository();

  async getOrganization(orgId: string, userId?: string) {
    const org = await this.orgRepo.findById(orgId);
    if (org) {
      if (userId) {
        const membershipSvc = new MembershipService();
        await membershipSvc.resolveMembership(orgId, userId);
      }
      return org;
    }

    const created = await this.orgRepo.create({
      id: orgId,
      name: 'Organization',
      slug: null,
      metadata: {},
    });

    if (userId) {
      const membershipSvc = new MembershipService();
      await membershipSvc.resolveMembership(orgId, userId);
    }

    return created;
  }

  async updateOrganization(orgId: string, userId: string, name: string) {
    await this.getOrganization(orgId, userId);
    return this.orgRepo.update(orgId, { name });
  }
}

export class LocationService {
  private locationRepo = new LocationRepository();
  private orgSvc = new OrganizationService();

  async getLocations(orgId: string, userId: string) {
    await this.orgSvc.getOrganization(orgId, userId);
    return this.locationRepo.findMany(orgId);
  }

  async createLocation(orgId: string, userId: string, data: any) {
    await this.orgSvc.getOrganization(orgId, userId);
    return this.locationRepo.create({
      organizationId: orgId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zip_code,
      country: data.country,
    });
  }
}

export class OnboardingService {
  private onboardingRepo = new OnboardingRepository();

  async getStatuses(userId: string) {
    return this.onboardingRepo.findManyByUser(userId);
  }

  async createStatus(userId: string, data: any) {
    if (!data.tourStepId) {
      throw new Error('tourStepId is required');
    }

    const existing = await this.onboardingRepo.findUnique(userId, String(data.tourStepId));
    if (existing) {
      throw new Error('Tour already visited');
    }

    return this.onboardingRepo.create({
      userId,
      tourStepId: String(data.tourStepId),
      tourCompleted: Boolean(data.tourCompleted),
    });
  }
}

export class MembershipService {
  private membershipRepo = new MembershipRepository();
  private orgRepo = new OrganizationRepository();
  private keycloakAdmin = new KeycloakAdminService();

  async resolveMembership(orgId: string, userId: string) {
    const org = await this.orgRepo.findById(orgId);
    if (!org) {
      await this.orgRepo.create({
        id: orgId,
        name: 'Organization',
        slug: null,
        metadata: {},
      });
    }

    const existing = await this.membershipRepo.findByUser(orgId, userId);
    if (existing) {
      return existing;
    }

    const membershipCount = await this.orgRepo.countMemberships(orgId);
    if (membershipCount === 0) {
      return this.membershipRepo.create({
        organizationId: orgId,
        userId,
        role: 'org_owner',
        permissions: DEFAULT_ROLE_PERMISSIONS.org_owner,
        metadata: { bootstrapped: true },
      });
    }

    return null;
  }

  getCatalog() {
    return getRbacCatalog();
  }

  async listMemberships(orgId: string, requesterUserId: string) {
    await this.resolveMembership(orgId, requesterUserId);
    return this.membershipRepo.findMany(orgId);
  }

  async listAccessUsers(orgId: string, requesterUserId: string, search?: string) {
    await this.resolveMembership(orgId, requesterUserId);
    const memberships = await this.membershipRepo.findMany(orgId);

    let keycloakUsersById: Record<string, any> = {};
    try {
      const users = search
        ? await this.keycloakAdmin.findUsers(search)
        : await this.keycloakAdmin.getUsersByIds(memberships.map((m: any) => m.userId));
      keycloakUsersById = users.reduce((acc: Record<string, any>, user: any) => {
        if (user?.id) acc[user.id] = user;
        return acc;
      }, {});
    } catch (error) {
      // Keep endpoint functional even when Keycloak admin API is unavailable.
    }

    return memberships
      .map((membership: any) => {
        const integrationRoles: IntegrationRoles = normalizeIntegrationRoles(
          membership?.metadata?.integrationRoles,
          membership.role
        );
        const profile = keycloakUsersById[membership.userId] || null;
        return {
          ...membership,
          integrationRoles,
          roleProfile: getRoleProfile(membership.role),
          profile: profile
            ? {
                id: profile.id,
                username: profile.username,
                email: profile.email,
                firstName: profile.firstName,
                lastName: profile.lastName,
                enabled: profile.enabled,
              }
            : null,
        };
      })
      .filter((item: any) => {
        if (!search) return true;
        const q = String(search).toLowerCase();
        const name = `${item?.profile?.firstName || ''} ${item?.profile?.lastName || ''}`.trim().toLowerCase();
        return (
          String(item?.userId || '').toLowerCase().includes(q) ||
          String(item?.profile?.email || '').toLowerCase().includes(q) ||
          String(item?.profile?.username || '').toLowerCase().includes(q) ||
          name.includes(q)
        );
      });
  }

  async findKeycloakUsers(orgId: string, requesterUserId: string, search?: string) {
    await this.resolveMembership(orgId, requesterUserId);
    return this.keycloakAdmin.findUsers(search);
  }

  async createUserAndAssign(orgId: string, requesterUserId: string, data: any) {
    await this.resolveMembership(orgId, requesterUserId);

    if (!data?.email) {
      throw new Error('email is required');
    }

    const created = await this.keycloakAdmin.createUser({
      email: String(data.email).trim(),
      username: data.username ? String(data.username).trim() : undefined,
      firstName: data.firstName ? String(data.firstName).trim() : undefined,
      lastName: data.lastName ? String(data.lastName).trim() : undefined,
      temporaryPassword: data.temporaryPassword ? String(data.temporaryPassword) : undefined,
    });

    const assigned = await this.upsertMembership(orgId, requesterUserId, created.id, {
      role: data.role || 'org_staff',
      permissions: data.permissions,
      metadata: {
        ...(data.metadata || {}),
        integrationRoles: data?.metadata?.integrationRoles,
      },
      syncKeycloak: true,
    });

    return { user: created, membership: assigned };
  }

  async syncMembershipToKeycloak(orgId: string, requesterUserId: string, userId: string) {
    await this.resolveMembership(orgId, requesterUserId);
    const membership = await this.membershipRepo.findByUser(orgId, userId);
    if (!membership) {
      throw new Error('Membership not found');
    }

    const membershipMetadata =
      membership?.metadata && typeof membership.metadata === 'object' && !Array.isArray(membership.metadata)
        ? (membership.metadata as Record<string, any>)
        : {};
    const membershipPermissions = Array.isArray(membership.permissions)
      ? membership.permissions.filter((item: unknown): item is string => typeof item === 'string')
      : undefined;

    const integrationRoles = normalizeIntegrationRoles(membershipMetadata.integrationRoles, membership.role);
    const permissions = buildEffectivePermissions(
      membership.role,
      integrationRoles,
      membershipPermissions
    );

    await this.keycloakAdmin.syncUserAccess(userId, {
      organizationId: orgId,
      orgRole: membership.role,
      permissions,
      keycloakRole: getRoleProfile(membership.role)?.keycloakRole || membership.role,
      integrationRoles,
    });

    return { userId, synced: true };
  }

  async upsertMembership(orgId: string, requesterUserId: string, userId: string, data: any) {
    await this.resolveMembership(orgId, requesterUserId);

    const role = String(data.role || '').trim();
    if (!VALID_ORG_ROLES.includes(role as any)) {
      throw new Error('Invalid organization role');
    }

    const integrationRoles = normalizeIntegrationRoles(data?.metadata?.integrationRoles, role);
    const roleProfile = getRoleProfile(role);
    const permissions = buildEffectivePermissions(
      role,
      integrationRoles,
      Array.isArray(data.permissions) && data.permissions.length > 0 ? data.permissions : undefined
    );

    const membership = await this.membershipRepo.upsert(orgId, userId, {
      role,
      permissions,
      metadata: {
        ...(data.metadata ?? {}),
        integrationRoles,
      },
    });

    const syncKeycloak = data?.syncKeycloak !== false;
    if (syncKeycloak) {
      try {
        await this.keycloakAdmin.syncUserAccess(userId, {
          organizationId: orgId,
          orgRole: role,
          permissions,
          keycloakRole: roleProfile?.keycloakRole || role,
          integrationRoles,
        });
      } catch (error) {
        // Keep membership saved even if Keycloak sync fails.
      }
    }

    return membership;
  }

  async removeMembership(orgId: string, requesterUserId: string, userId: string) {
    await this.resolveMembership(orgId, requesterUserId);
    const membership = await this.membershipRepo.findByUser(orgId, userId);
    if (!membership) return { deleted: false };

    if (membership.role === 'org_owner') {
      const memberships = await this.membershipRepo.findMany(orgId);
      const ownerCount = memberships.filter((item: any) => item.role === 'org_owner').length;
      if (ownerCount <= 1) {
        throw new Error('Cannot remove the last organization owner');
      }
    }

    await this.membershipRepo.delete(orgId, userId);
    return { deleted: true };
  }
}

export class UserAccessService {
  private membershipSvc = new MembershipService();

  async getCatalog(orgId: string, requesterUserId: string) {
    await this.membershipSvc.resolveMembership(orgId, requesterUserId);
    return this.membershipSvc.getCatalog();
  }

  async listUsers(orgId: string, requesterUserId: string, search?: string) {
    return this.membershipSvc.listAccessUsers(orgId, requesterUserId, search);
  }

  async searchKeycloakUsers(orgId: string, requesterUserId: string, search?: string) {
    return this.membershipSvc.findKeycloakUsers(orgId, requesterUserId, search);
  }

  async createUser(orgId: string, requesterUserId: string, data: any) {
    return this.membershipSvc.createUserAndAssign(orgId, requesterUserId, data);
  }

  async syncKeycloak(orgId: string, requesterUserId: string, userId: string) {
    return this.membershipSvc.syncMembershipToKeycloak(orgId, requesterUserId, userId);
  }

  async removeUserMembership(orgId: string, requesterUserId: string, userId: string) {
    return this.membershipSvc.removeMembership(orgId, requesterUserId, userId);
  }
}
