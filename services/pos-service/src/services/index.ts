import { 
  PosSettingRepository, 
  PosTableRepository, 
  PosTableModeRepository,
  PosTableOrderRepository 
} from '../repositories/index.js';
import type { 
  PosSettingInput, 
  PosTableInput, 
  PosTableModeInput, 
  PosTableOrderInput 
} from '../types/index.js';

export class PosSettingService {
  private repo = new PosSettingRepository();

  async getPosSetting(shopId: string) {
    return this.repo.findByShopId(shopId);
  }

  async updateNumberPad(shopId: string, data: { 
    numberPadFirstValue: number; 
    numberPadSecondValue: number; 
    numberPadThirdValue: number;
    organizationId?: string;
  }) {
    return this.repo.update(shopId, {
      numberPadFirstValue: data.numberPadFirstValue,
      numberPadSecondValue: data.numberPadSecondValue,
      numberPadThirdValue: data.numberPadThirdValue,
      organizationId: data.organizationId
    });
  }

  async updateConfigureTip(shopId: string, data: {
    configureTipFirstPercentage: number;
    configureTipSecondPercentage: number;
    configureTipThirdPercentage: number;
    configureTipFourthPercentage: number;
    organizationId?: string;
  }) {
    return this.repo.update(shopId, {
      configureTipFirstPercentage: data.configureTipFirstPercentage,
      configureTipSecondPercentage: data.configureTipSecondPercentage,
      configureTipThirdPercentage: data.configureTipThirdPercentage,
      configureTipFourthPercentage: data.configureTipFourthPercentage,
      organizationId: data.organizationId
    });
  }

  async saveVoidReasons(shopId: string, voidReasons: any[], organizationId?: string) {
    const existing = await this.repo.findByShopId(shopId);
    if (existing) {
      return this.repo.update(shopId, { voidReasons, organizationId });
    }
    return this.repo.upsert(shopId, { voidReasons, organizationId });
  }

  async saveCFD(shopId: string, cfd: boolean, showShopLogo: boolean, organizationId?: string) {
    return this.repo.update(shopId, {
      cfd,
      cfdSettings: { showShopLogo },
      organizationId
    });
  }

  async getTipShifts(shopId: string) {
    const shopSetting = await this.repo.findByShopId(shopId);
    if (shopSetting?.tipShifts) {
      const shifts = shopSetting.tipShifts as any[];
      return { data: shifts.filter((s) => s.isActive !== false) };
    }
    if (shopSetting?.organizationId) {
      const orgSetting = await this.repo.findByOrganizationId(shopSetting.organizationId);
      if (orgSetting?.tipShifts) {
        const shifts = orgSetting.tipShifts as any[];
        return { data: shifts.filter((s) => s.isActive !== false), isOrgDefault: true };
      }
    }
    return { data: [] };
  }

  async updateTipShifts(shopId: string, tipShifts: any[], organizationId?: string) {
    return this.repo.update(shopId, { tipShifts, organizationId });
  }
}

export class PosTableService {
  private repo = new PosTableRepository();

  async create(data: PosTableInput) {
    return this.repo.create(data);
  }

  async get(shopId: string) {
    return this.repo.findByShopId(shopId);
  }

  async getAll(shopId: string) {
    return this.repo.findByShopId(shopId);
  }

  async update(id: string, data: Partial<PosTableInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async incrementSeat(id: string) {
    return this.repo.incrementSeat(id);
  }

  async decrementSeat(id: string) {
    return this.repo.decrementSeat(id);
  }
}

export class PosTableModeService {
  private repo = new PosTableModeRepository();

  async get(shopId: string) {
    return this.repo.findByShopId(shopId);
  }

  async insert(shopId: string, tableNo: string) {
    return this.repo.upsert(shopId, tableNo, { tableNo });
  }

  async addItem(shopId: string, tableNo: string, seats: any[]) {
    return this.repo.update(shopId, tableNo, { seats });
  }

  async addSeatItem(shopId: string, tableNo: string, seats: any[]) {
    return this.repo.update(shopId, tableNo, { seats });
  }

  async updateQuantity(shopId: string, tableNo: string, seats: any[]) {
    return this.repo.update(shopId, tableNo, { seats });
  }

  async updateModifiers(shopId: string, tableNo: string, seats: any[]) {
    return this.repo.update(shopId, tableNo, { seats });
  }

  async updateGuestAndSeats(shopId: string, tableNo: string, guestCount: number, seats: any[]) {
    return this.repo.update(shopId, tableNo, { guestCount, seats });
  }

  async updateState(shopId: string, tableNo: string, orderState: string) {
    return this.repo.update(shopId, tableNo, { orderState });
  }

  async addGuestAndSeats(shopId: string, tableNo: string, guestCount: number, seats: any[]) {
    return this.repo.update(shopId, tableNo, { guestCount, seats });
  }
}

export class PosTableOrderService {
  private repo = new PosTableOrderRepository();

  async create(data: PosTableOrderInput) {
    return this.repo.create(data);
  }

  async getAll(shopId: string) {
    return this.repo.findByShopId(shopId);
  }

  async update(id: string, data: Partial<PosTableOrderInput>) {
    return this.repo.update(id, data);
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }
}