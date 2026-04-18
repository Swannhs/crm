import { 
  DeviceRepository, 
  HardwareProductRepository, 
  HardwareBundleRepository,
  HardwareCategoryRepository,
  SunmiConfigRepository,
  UnifiConnectionRepository,
  DeviceAssignmentRepository
} from '../repositories/index.js';
import type { 
  DeviceInput, 
  HardwareProductInput, 
  HardwareBundleInput, 
  HardwareCategoryInput,
  SunmiConfigInput,
  UnifiConnectionInput,
  DeviceAssignmentInput
} from '../types/index.js';

export class DeviceService {
  private repo = new DeviceRepository();

  async create(data: DeviceInput, userId: string, organizationId?: string) {
    return this.repo.create({ ...data, userId, organizationId });
  }

  async getAll(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async update(id: string, data: Partial<DeviceInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async authenticateByCode(code: string) {
    return this.repo.authenticateByCode(code);
  }
}

export class HardwareProductService {
  private repo = new HardwareProductRepository();

  async create(data: HardwareProductInput) {
    return this.repo.create(data);
  }

  async getAll() {
    return this.repo.findAll();
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async getByCategoryId(categoryId: string) {
    return this.repo.findByCategoryId(categoryId);
  }

  async update(id: string, data: Partial<HardwareProductInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async importMany(products: HardwareProductInput[]) {
    return this.repo.importMany(products);
  }
}

export class HardwareBundleService {
  private repo = new HardwareBundleRepository();

  async create(data: HardwareBundleInput) {
    return this.repo.create(data);
  }

  async getAll() {
    return this.repo.findAll();
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async update(id: string, data: Partial<HardwareBundleInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}

export class HardwareCategoryService {
  private repo = new HardwareCategoryRepository();

  async create(data: HardwareCategoryInput) {
    return this.repo.create(data);
  }

  async getAll() {
    return this.repo.findAll();
  }

  async getById(id: string) {
    return this.repo.findById(id);
  }

  async getChildren(parentId: string | null) {
    return this.repo.findByParentId(parentId);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}

export class SunmiService {
  private repo = new SunmiConfigRepository();

  async getConfig(organizationId: string) {
    return this.repo.findByOrganizationId(organizationId);
  }

  async upsertConfig(organizationId: string, data: SunmiConfigInput) {
    return this.repo.upsert(organizationId, data);
  }

  async testConnection(organizationId: string) {
    return { success: true, message: "Connection test placeholder" };
  }
}

export class UnifiService {
  private connRepo = new UnifiConnectionRepository();
  private assignRepo = new DeviceAssignmentRepository();

  async createConnection(data: UnifiConnectionInput) {
    return this.connRepo.create(data);
  }

  async getConnections(organizationId: string) {
    return this.connRepo.findByOrganizationId(organizationId);
  }

  async getConnection(id: string) {
    return this.connRepo.findById(id);
  }

  async updateConnection(id: string, data: Partial<UnifiConnectionInput>) {
    return this.connRepo.update(id, data);
  }

  async deleteConnection(id: string) {
    return this.connRepo.delete(id);
  }

  async assignDevice(data: DeviceAssignmentInput) {
    return this.assignRepo.create(data);
  }

  async unassignDevice(deviceId: string) {
    return this.assignRepo.delete(deviceId);
  }

  async getAssignments(organizationId: string) {
    return this.assignRepo.findByOrganizationId(organizationId);
  }

  async testConnection(host: string, port: number, apiKey: string) {
    return { success: true, message: "Connection test placeholder" };
  }

  async discoverHosts() {
    return { hosts: [] };
  }

  async getCloudDevices(connectionId: string) {
    return { devices: [] };
  }

  async getCameras(connectionId: string) {
    return { cameras: [] };
  }

  async getCameraSnapshot(cameraId: string) {
    return { snapshot: "" };
  }
}