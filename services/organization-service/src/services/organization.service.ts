import { OrganizationRepository, LocationRepository } from '../repositories/organization.repository.js';

export class OrganizationService {
  private orgRepo = new OrganizationRepository();

  async getOrganization(orgId: string) {
    const org = await this.orgRepo.findById(orgId);
    if (!org) throw new Error('Organization not found');
    return org;
  }

  async updateOrganization(orgId: string, name: string) {
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
