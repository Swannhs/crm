import { Response } from 'express';
import { PosSettingService, PosTableService, PosTableModeService, PosTableOrderService } from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class PosSettingController {
  private svc = new PosSettingService();

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const shopId = req.query.shopId as string;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });
      
      const setting = await this.svc.getPosSetting(shopId);
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateNumberPad(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, numberPadFirstValue, numberPadSecondValue, numberPadThirdValue } = req.body;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });
      if (numberPadFirstValue === undefined || numberPadSecondValue === undefined || numberPadThirdValue === undefined) {
        return res.status(400).json({ success: false, message: 'Number pad values are required' });
      }

      const setting = await this.svc.updateNumberPad(shopId, {
        numberPadFirstValue,
        numberPadSecondValue,
        numberPadThirdValue,
        organizationId: req.identity.orgId
      });
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateConfigureTip(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, configureTipFirstPercentage, configureTipSecondPercentage, configureTipThirdPercentage, configureTipFourthPercentage } = req.body;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });
      if (configureTipFirstPercentage === undefined || configureTipSecondPercentage === undefined || configureTipThirdPercentage === undefined || configureTipFourthPercentage === undefined) {
        return res.status(400).json({ success: false, message: 'Configure tip values are required' });
      }

      const setting = await this.svc.updateConfigureTip(shopId, {
        configureTipFirstPercentage,
        configureTipSecondPercentage,
        configureTipThirdPercentage,
        configureTipFourthPercentage,
        organizationId: req.identity.orgId
      });
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async saveVoidReasons(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, voidReasons } = req.body;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });

      const setting = await this.svc.saveVoidReasons(shopId, voidReasons, req.identity.orgId);
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message.replace(/"/g, '') });
    }
  }

  async saveCFD(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, cfd, showShopLogo } = req.body;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });

      const setting = await this.svc.saveCFD(shopId, Boolean(cfd), Boolean(showShopLogo), req.identity.orgId);
      return res.json({ success: true, data: setting });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message.replace(/"/g, '') });
    }
  }

  async getTipShifts(req: AuthenticatedRequest, res: Response) {
    try {
      const shopId = req.query.shopId as string;
      if (!shopId) return res.status(400).json({ success: false, message: 'shopId is required' });

      const result = await this.svc.getTipShifts(shopId);
      return res.json({ success: true, ...result });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message.replace(/"/g, '') });
    }
  }

  async updateTipShifts(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tipShifts } = req.body;
      if (!shopId) return res.status(400).json({ success: false, message: 'shopId is required' });
      if (!Array.isArray(tipShifts)) {
        return res.status(400).json({ success: false, message: 'tipShifts must be an array' });
      }

      for (const shift of tipShifts) {
        if (!shift.name || !shift.startTime || !shift.endTime) {
          return res.status(400).json({ success: false, message: 'Each shift must have a name, startTime, and endTime' });
        }
      }

      const shifts = await this.svc.updateTipShifts(shopId, tipShifts, req.identity.orgId);
      return res.json({ success: true, data: shifts });
    } catch (err: any) {
      return res.status(400).json({ success: false, message: err.message.replace(/"/g, '') });
    }
  }
}

export class PosTableController {
  private svc = new PosTableService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableName, tableShape, tableLink, tableColor, tableDimension, roomId } = req.body;
      if (!tableName || !tableShape) {
        return res.status(400).json({ success: false, message: 'tableName and tableShape are required' });
      }

      const table = await this.svc.create({
        userId: req.identity.userId,
        organizationId: req.identity.orgId,
        shopId,
        roomId,
        tableName,
        tableShape,
        tableLink,
        tableColor,
        tableDimension
      });
      return res.status(201).json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const shopId = req.query.shopId as string;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });

      const table = await this.svc.get(shopId);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAll(req: AuthenticatedRequest, res: Response) {
    try {
      const shopId = req.query.shopId as string;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });

      const tables = await this.svc.getAll(shopId);
      return res.json({ success: true, data: tables });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const { id, tableName, tableShape, tableLink, tableColor, tableDimension, roomId, serverId } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });

      const table = await this.svc.update(id, { tableName, tableShape, tableLink, tableColor, tableDimension, roomId, serverId });
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });

      const table = await this.svc.delete(id);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async increaseSeat(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });

      const table = await this.svc.incrementSeat(id);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async decreaseSeat(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });

      const table = await this.svc.decrementSeat(id);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class PosTableModeController {
  private svc = new PosTableModeService();

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const shopId = req.query.shopId as string;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });

      const tables = await this.svc.get(shopId);
      return res.json({ success: true, data: tables });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async insert(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.insert(shopId, tableNo);
      return res.status(201).json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async addItem(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo, seats } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.addItem(shopId, tableNo, seats);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async addSeatItem(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo, seats } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.addSeatItem(shopId, tableNo, seats);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateQuantity(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo, seats } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.updateQuantity(shopId, tableNo, seats);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateModifiers(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo, seats } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.updateModifiers(shopId, tableNo, seats);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateGuestAndSeats(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo, guestCount, seats } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.updateGuestAndSeats(shopId, tableNo, guestCount, seats);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateState(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo, orderState } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.updateState(shopId, tableNo, orderState);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async addGuestAndSeats(req: AuthenticatedRequest, res: Response) {
    try {
      const { shopId, tableNo, guestCount, seats } = req.body;
      if (!shopId || !tableNo) return res.status(400).json({ success: false, message: 'ShopId and tableNo are required' });

      const table = await this.svc.addGuestAndSeats(shopId, tableNo, guestCount, seats);
      return res.json({ success: true, data: table });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class PosTableOrderController {
  private svc = new PosTableOrderService();

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { tableId, shopId, tableName, seats, roomId } = req.body;
      if (!tableId || !tableName) {
        return res.status(400).json({ success: false, message: 'tableId and tableName are required' });
      }

      const order = await this.svc.create({
        tableId,
        userId: req.identity.userId,
        organizationId: req.identity.orgId,
        shopId,
        roomId,
        tableName,
        seats
      });
      return res.status(201).json({ success: true, data: order });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAll(req: AuthenticatedRequest, res: Response) {
    try {
      const shopId = req.query.shopId as string;
      if (!shopId) return res.status(400).json({ success: false, message: 'ShopId is required' });

      const orders = await this.svc.getAll(shopId);
      return res.json({ success: true, data: orders });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const { id, tableName, seats, orderStatus } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });

      const order = await this.svc.update(id, { tableName, seats, orderStatus });
      return res.json({ success: true, data: order });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.body;
      if (!id) return res.status(400).json({ success: false, message: 'ID is required' });

      const order = await this.svc.delete(id);
      return res.json({ success: true, data: order });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}