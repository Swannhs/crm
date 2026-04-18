import { db } from '../db.js';
import type { PosSettingInput, PosTableInput, PosTableModeInput, PosTableOrderInput } from '../types/index.js';

export class PosSettingRepository {
  async findByShopId(shopId: string) {
    return db.posSetting.findFirst({ where: { shopId } });
  }

  async findByOrganizationId(organizationId: string) {
    return db.posSetting.findFirst({ 
      where: { organizationId, shopId: null },
      orderBy: { createdAt: 'desc' }
    });
  }

  async upsert(shopId: string, data: PosSettingInput) {
    const existing = await this.findByShopId(shopId);
    if (existing) {
      return db.posSetting.update({
        where: { id: existing.id },
        data: {
          ...data,
          shopId: data.shopId || shopId
        }
      });
    }
    return db.posSetting.create({
      data: {
        ...data,
        shopId
      }
    });
  }

  async update(shopId: string, data: Partial<PosSettingInput>) {
    const existing = await this.findByShopId(shopId);
    if (!existing) {
      return db.posSetting.create({
        data: { ...data, shopId }
      });
    }
    return db.posSetting.update({
      where: { id: existing.id },
      data
    });
  }
}

export class PosTableRepository {
  async create(data: PosTableInput) {
    return db.posTable.create({ data });
  }

  async findById(id: string) {
    return db.posTable.findUnique({ where: { id } });
  }

  async findByShopId(shopId: string) {
    return db.posTable.findMany({ 
      where: { shopId, isDeleted: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<PosTableInput>) {
    return db.posTable.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.posTable.update({ where: { id }, data: { isDeleted: true } });
  }

  async incrementSeat(id: string) {
    const table = await this.findById(id);
    if (!table) return null;
    const seats = (table.seats as any[]) || [];
    const newSeatCount = seats.length + 1;
    return db.posTable.update({
      where: { id },
      data: { seats: Array.from({ length: newSeatCount }, (_, i) => ({ seatNo: i + 1 })) }
    });
  }

  async decrementSeat(id: string) {
    const table = await this.findById(id);
    if (!table) return null;
    const seats = (table.seats as any[]) || [];
    if (seats.length <= 1) return table;
    return db.posTable.update({
      where: { id },
      data: { seats: seats.slice(0, -1) }
    });
  }
}

export class PosTableModeRepository {
  async findByTableNo(shopId: string, tableNo: string) {
    return db.posTableMode.findFirst({ where: { shopId, tableNo } });
  }

  async findByShopId(shopId: string) {
    return db.posTableMode.findMany({ where: { shopId } });
  }

  async upsert(shopId: string, tableNo: string, data: Partial<PosTableModeInput>) {
    const existing = await this.findByTableNo(shopId, tableNo);
    if (existing) {
      return db.posTableMode.update({ where: { id: existing.id }, data });
    }
    return db.posTableMode.create({ data: { ...data, shopId, tableNo } });
  }

  async update(shopId: string, tableNo: string, data: Partial<PosTableModeInput>) {
    const existing = await this.findByTableNo(shopId, tableNo);
    if (!existing) {
      return db.posTableMode.create({ data: { ...data, shopId, tableNo } });
    }
    return db.posTableMode.update({ where: { id: existing.id }, data });
  }
}

export class PosTableOrderRepository {
  async create(data: PosTableOrderInput) {
    return db.posTableOrder.create({ data });
  }

  async findById(id: string) {
    return db.posTableOrder.findUnique({ where: { id } });
  }

  async findByTableId(tableId: string) {
    return db.posTableOrder.findMany({ 
      where: { tableId, isDelete: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findByShopId(shopId: string) {
    return db.posTableOrder.findMany({ 
      where: { shopId, isDelete: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<PosTableOrderInput>) {
    return db.posTableOrder.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.posTableOrder.update({ where: { id }, data: { isDelete: true } });
  }
}