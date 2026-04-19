import { 
  IncomeRepository, ExpenseRepository, DepositRepository, 
  PaymentPaypalRepository, PaymentValorRepository, 
  FinanceCategoryRepository, TaxSalesRepository,
  FinanceStatementRepository, SuperAdminFinanceRepository
} from '../repositories/index.js';

export class IncomeService {
  private repo = new IncomeRepository();
  async create(data: any, userId: string, orgId?: string) { return this.repo.create({ ...data, userId, organizationId: orgId }); }
  async getAll(userId: string, orgId: string) { return this.repo.findByOrganizationId(orgId); }
  async getById(id: string) { return this.repo.findById(id); }
  async update(id: string, data: any) { return this.repo.update(id, data); }
  async delete(id: string) { return this.repo.delete(id); }
  async getByDateRange(orgId: string, start: Date, end: Date) { return this.repo.getByDateRange(orgId, start, end); }
  async getPLStatistics(orgId: string, year: number) { return { totalIncome: 0, totalExpense: 0, netProfit: 0 }; }
  async getPLStatements(orgId: string) { return this.repo.findByOrganizationId(orgId); }
}

export class ExpenseService {
  private repo = new ExpenseRepository();
  async create(data: any, userId: string, orgId?: string) { return this.repo.create({ ...data, userId, organizationId: orgId }); }
  async getAll(orgId: string) { return this.repo.findByOrganizationId(orgId); }
}

export class DepositService {
  private repo = new DepositRepository();
  async create(data: any, userId: string, orgId?: string) { return this.repo.create({ ...data, userId, organizationId: orgId }); }
  async getHistory(userId: string, orgId: string) { return this.repo.findByOrganizationId(orgId); }
  async getCreditBalance(userId: string) { return this.repo.getCreditBalance(userId); }
}

export class PaymentPaypalService {
  private repo = new PaymentPaypalRepository();
  async createPayout(data: any, userId: string, orgId?: string) { return this.repo.create({ ...data, userId, organizationId: orgId, status: 'pending' }); }
  async getAll(userId: string) { return this.repo.findByUserId(userId); }
}

export class PaymentValorService {
  private repo = new PaymentValorRepository();
  async createPayment(data: any, userId: string, orgId?: string) { return this.repo.create({ ...data, userId, organizationId: orgId }); }
  async getAll(userId: string) { return this.repo.findByUserId(userId); }
}

export class FinanceCategoryService {
  private repo = new FinanceCategoryRepository();
  async create(data: any, userId: string, orgId?: string) { return this.repo.create({ ...data, userId, organizationId: orgId }); }
  async getAll(userId: string, orgId: string) { return this.repo.findByOrganizationId(orgId); }
}

export class TaxSalesService {
  private repo = new TaxSalesRepository();
  async create(data: any, userId: string, orgId?: string) { return this.repo.create({ ...data, userId, organizationId: orgId }); }
  async getAll(orgId: string) { return this.repo.findByOrganizationId(orgId); }
  async update(id: string, data: any) { return this.repo.update(id, data); }
  async delete(id: string) { return this.repo.delete(id); }
}

export class SuperAdminFinanceService {
  private repo = new SuperAdminFinanceRepository();
  async getAll() { return this.repo.findAll(); }
  async getStats(period: string) { return this.repo.findByPeriod(period); }
}