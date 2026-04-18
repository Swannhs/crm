import { db } from '../db.js';
import type { DeviceInput, HardwareProductInput, HardwareBundleInput, HardwareCategoryInput, SunmiConfigInput, UnifiConnectionInput, DeviceAssignmentInput } from '../types/index.js';

export class DeviceRepository {
  async create(data: DeviceInput & { userId: string; organizationId?: string }) {
    return db.device.create({ data });
  }

  async findById(id: string) {
    return db.device.findUnique({ where: { id } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.device.findMany({ where: { organizationId, isActive: true } });
  }

  async update(id: string, data: Partial<DeviceInput>) {
    return db.device.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.device.update({ where: { id }, data: { isActive: false } });
  }

  async authenticateByCode(code: string) {
    return db.device.findFirst({ where: { metadata: { contains: code } } });
  }
}

export class HardwareProductRepository {
  async create(data: HardwareProductInput) {
    return db.hardwareProduct.create({ data });
  }

  async findById(id: string) {
    return db.hardwareProduct.findUnique({ where: { id } });
  }

  async findAll() {
    return db.hardwareProduct.findMany({ where: { isActive: true } });
  }

  async findByCategoryId(categoryId: string) {
    return db.hardwareProduct.findMany({ where: { categoryId, isActive: true } });
  }

  async findBySku(sku: string) {
    return db.hardwareProduct.findUnique({ where: { sku } });
  }

  async update(id: string, data: Partial<HardwareProductInput>) {
    return db.hardwareProduct.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.hardwareProduct.update({ where: { id }, data: { isActive: false } });
  }

  async importMany(products: HardwareProductInput[]) {
    return db.hardwareProduct.createMany({ data: products, skipDuplicates: true });
  }
}

export class HardwareBundleRepository {
  async create(data: HardwareBundleInput) {
    return db.hardwareBundle.create({ data });
  }

  async findById(id: string) {
    return db.hardwareBundle.findUnique({ where: { id } });
  }

  async findAll() {
    return db.hardwareBundle.findMany({ where: { isActive: true } });
  }

  async update(id: string, data: Partial<HardwareBundleInput>) {
    return db.hardwareBundle.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.hardwareBundle.update({ where: { id }, data: { isActive: false } });
  }
}

export class HardwareCategoryRepository {
  async create(data: HardwareCategoryInput) {
    return db.hardwareCategory.create({ data });
  }

  async findById(id: string) {
    return db.hardwareCategory.findUnique({ where: { id } });
  }

  async findAll() {
    return db.hardwareCategory.findMany({ where: { isActive: true } });
  }

  async findByParentId(parentId: string | null) {
    return db.hardwareCategory.findMany({ where: { parentId, isActive: true } });
  }

  async delete(id: string) {
    return db.hardwareCategory.update({ where: { id }, data: { isActive: false } });
  }
}

export class SunmiConfigRepository {
  async upsert(organizationId: string, data: SunmiConfigInput) {
    const existing = await db.sunmiConfig.findFirst({ where: { organizationId } });
    if (existing) {
      return db.sunmiConfig.update({ where: { id: existing.id }, data });
    }
    return db.sunmiConfig.create({ data: { ...data, organizationId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.sunmiConfig.findFirst({ where: { organizationId, isActive: true } });
  }

  async findAll() {
    return db.sunmiConfig.findMany({ where: { isActive: true } });
  }
}

export class UnifiConnectionRepository {
  async create(data: UnifiConnectionInput) {
    return db.unifiConnection.create({ data });
  }

  async findById(id: string) {
    return db.unifiConnection.findUnique({ where: { id } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.unifiConnection.findMany({ where: { organizationId } });
  }

  async findByLocationId(locationId: string) {
    return db.unifiConnection.findMany({ where: { locationId } });
  }

  async update(id: string, data: Partial<UnifiConnectionInput>) {
    return db.unifiConnection.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.unifiConnection.delete({ where: { id } });
  }
}

export class DeviceAssignmentRepository {
  async create(data: DeviceAssignmentInput) {
    return db.deviceAssignment.create({ data });
  }

  async findByDeviceId(deviceId: string) {
    return db.deviceAssignment.findMany({ where: { deviceId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.deviceAssignment.findMany({ where: { organizationId } });
  }

  async findByLocationId(locationId: string) {
    return db.deviceAssignment.findMany({ where: { locationId } });
  }

  async delete(deviceId: string) {
    return db.deviceAssignment.deleteMany({ where: { deviceId } });
  }
}