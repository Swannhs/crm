import { OrganizationRepository, LocationRepository, OnboardingRepository } from '../repositories/organization.repository.js';

export class OrganizationService {
  private orgRepo = new OrganizationRepository();

  async getOrganization(orgId: string) {
    const org = await this.orgRepo.findById(orgId);
    if (org) return org;

    // Compatibility behavior: legacy flows often assume an org shell exists
    // once an authenticated org_id is present, even if the microservice DB
    // has not been explicitly seeded for that tenant yet.
    return this.orgRepo.create({
      id: orgId,
      name: 'Organization',
      slug: null,
      metadata: {},
    });
  }

  async updateOrganization(orgId: string, name: string) {
    await this.getOrganization(orgId);
    return this.orgRepo.update(orgId, { name });
  }
}

export class LocationService {
  private locationRepo = new LocationRepository();

  async getLocations(orgId: string) {
    return this.locationRepo.findMany(orgId);
  }

  async createLocation(orgId: string, data: any) {
    return this.locationRepo.create({
      organizationId: orgId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zip_code,
      country: data.country
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
