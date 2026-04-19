import { Response } from 'express';
import { 
  IncomeService, ExpenseService, DepositService, 
  PaymentPaypalService, PaymentValorService,
  FinanceCategoryService, TaxSalesService, SuperAdminFinanceService 
} from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class IncomeController {
  private svc = new IncomeService();
  async create(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.create(req.body, req.identity.userId, req.identity.orgId);
    return res.status(201).json({ success: true, data });
  }
  async getAll(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getAll(req.identity.userId, req.identity.orgId);
    return res.json({ success: true, data });
  }
  async update(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.update(req.params.id, req.body);
    return res.json({ success: true, data });
  }
  async delete(req: AuthenticatedRequest, res: Response) {
    await this.svc.delete(req.params.id);
    return res.json({ success: true, message: 'Deleted' });
  }
  async getPLStatistics(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getPLStatistics(req.identity.orgId, new Date().getFullYear());
    return res.json({ success: true, data });
  }
}

export class ExpenseController {
  private svc = new ExpenseService();
  async create(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.create(req.body, req.identity.userId, req.identity.orgId);
    return res.status(201).json({ success: true, data });
  }
  async getAll(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getAll(req.identity.orgId);
    return res.json({ success: true, data });
  }
}

export class DepositController {
  private svc = new DepositService();
  async create(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.create(req.body, req.identity.userId, req.identity.orgId);
    return res.status(201).json({ success: true, data });
  }
  async getHistory(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getHistory(req.identity.userId, req.identity.orgId);
    return res.json({ success: true, data });
  }
  async getCreditBalance(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getCreditBalance(req.identity.userId);
    return res.json({ success: true, data: { balance: data } });
  }
}

export class PaymentPaypalController {
  private svc = new PaymentPaypalService();
  async createPayout(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.createPayout(req.body, req.identity.userId, req.identity.orgId);
    return res.status(201).json({ success: true, data });
  }
  async getPayouts(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getAll(req.identity.userId);
    return res.json({ success: true, data });
  }
}

export class PaymentValorController {
  private svc = new PaymentValorService();
  async createPayment(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.createPayment(req.body, req.identity.userId, req.identity.orgId);
    return res.status(201).json({ success: true, data });
  }
}

export class FinanceCategoryController {
  private svc = new FinanceCategoryService();
  async create(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.create(req.body, req.identity.userId, req.identity.orgId);
    return res.status(201).json({ success: true, data });
  }
  async getAll(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getAll(req.identity.userId, req.identity.orgId);
    return res.json({ success: true, data });
  }
}

export class TaxSalesController {
  private svc = new TaxSalesService();
  async create(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.create(req.body, req.identity.userId, req.identity.orgId);
    return res.status(201).json({ success: true, data });
  }
  async getAll(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getAll(req.identity.orgId);
    return res.json({ success: true, data });
  }
  async update(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.update(req.params.id, req.body);
    return res.json({ success: true, data });
  }
  async delete(req: AuthenticatedRequest, res: Response) {
    await this.svc.delete(req.params.id);
    return res.json({ success: true, message: 'Deleted' });
  }
}

export class SuperAdminFinanceController {
  private svc = new SuperAdminFinanceService();
  async getAll(req: AuthenticatedRequest, res: Response) {
    const data = await this.svc.getAll();
    return res.json({ success: true, data });
  }
  async getStats(req: AuthenticatedRequest, res: Response) {
    const period = req.query.period as string || 'monthly';
    const data = await this.svc.getStats(period);
    return res.json({ success: true, data });
  }
}