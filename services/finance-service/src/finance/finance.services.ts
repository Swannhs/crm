import { Injectable } from "@nestjs/common";
import {
  DepositRepository,
  ExpenseRepository,
  FinanceCategoryRepository,
  FinanceDashboardRepository,
  FinanceKanbanRepository,
  IncomeRepository,
  PaymentPaypalRepository,
  PaymentValorRepository,
  SuperAdminExpenseRepository,
  SuperAdminFinanceRepository,
  TaxSalesRepository,
} from "./finance.repositories.js";

function asObject(data: unknown): Record<string, unknown> {
  if (!data || typeof data !== "object" || Array.isArray(data)) return {};
  return data as Record<string, unknown>;
}

function toInt(value: unknown, fallback: number): number {
  if (typeof value === "number") return Number.isFinite(value) ? Math.trunc(value) : fallback;
  if (typeof value === "string") {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  return fallback;
}

@Injectable()
export class IncomeService {
  constructor(
    private readonly repo: IncomeRepository,
    private readonly dashboardRepo: FinanceDashboardRepository,
  ) {}

  async create(data: unknown, userId: string, orgId: string) {
    return this.repo.create({ ...asObject(data), userId, organizationId: orgId });
  }

  async getAll(_userId: string, orgId: string) {
    return this.repo.findByOrganizationId(orgId);
  }

  async update(id: string, orgId: string, data: unknown) {
    return this.repo.update(id, orgId, asObject(data));
  }

  async delete(id: string, orgId: string) {
    return this.repo.delete(id, orgId);
  }

  async getPLStatistics(orgId: string, year: number) {
    return this.dashboardRepo.getPLStatistics(orgId, year);
  }
}

@Injectable()
export class ExpenseService {
  constructor(private readonly repo: ExpenseRepository) {}

  async create(data: unknown, userId: string, orgId: string) {
    return this.repo.create({ ...asObject(data), userId, organizationId: orgId });
  }

  async getAll(orgId: string) {
    return this.repo.findByOrganizationId(orgId);
  }
}

@Injectable()
export class DepositService {
  constructor(private readonly repo: DepositRepository) {}

  async create(data: unknown, userId: string, orgId: string) {
    return this.repo.create({ ...asObject(data), userId, organizationId: orgId });
  }

  async getHistory(userId: string, orgId: string) {
    return this.repo.findByUserAndOrganization(userId, orgId);
  }

  async getCreditBalance(userId: string, orgId: string) {
    return this.repo.getCreditBalance(userId, orgId);
  }
}

@Injectable()
export class PaymentPaypalService {
  constructor(private readonly repo: PaymentPaypalRepository) {}

  async createPayout(data: unknown, userId: string, orgId: string) {
    return this.repo.create({ ...asObject(data), userId, organizationId: orgId, status: "pending" });
  }

  async getAll(userId: string, orgId: string) {
    return this.repo.findByUserId(userId, orgId);
  }
}

@Injectable()
export class PaymentValorService {
  constructor(private readonly repo: PaymentValorRepository) {}

  async createPayment(data: unknown, userId: string, orgId: string) {
    return this.repo.create({ ...asObject(data), userId, organizationId: orgId });
  }
}

@Injectable()
export class FinanceCategoryService {
  constructor(
    private readonly repo: FinanceCategoryRepository,
    private readonly dashboardRepo: FinanceDashboardRepository,
  ) {}

  async create(data: unknown, userId: string, orgId: string) {
    return this.repo.create({ ...asObject(data), userId, organizationId: orgId });
  }

  async getAll(_userId: string, orgId: string) {
    return this.repo.findByOrganizationId(orgId);
  }

  async update(id: string, orgId: string, data: unknown) {
    return this.repo.update(id, orgId, asObject(data));
  }

  async delete(id: string, orgId: string) {
    return this.repo.delete(id, orgId);
  }

  async getYearlyNetIncome(orgId: string, year: number) {
    return this.dashboardRepo.getPLStatistics(orgId, year);
  }
}

@Injectable()
export class TaxSalesService {
  constructor(private readonly repo: TaxSalesRepository) {}

  async create(data: unknown, userId: string, orgId: string) {
    return this.repo.create({ ...asObject(data), userId, organizationId: orgId });
  }

  async getAll(orgId: string) {
    return this.repo.findByOrganizationId(orgId);
  }

  async update(id: string, orgId: string, data: unknown) {
    return this.repo.update(id, orgId, asObject(data));
  }

  async delete(id: string, orgId: string) {
    return this.repo.delete(id, orgId);
  }
}

@Injectable()
export class FinanceDashboardService {
  constructor(private readonly repo: FinanceDashboardRepository) {}

  async getExpenseStat(orgId: string, year: number) {
    return this.repo.getExpenseStats(orgId, year);
  }

  async getTransactionList(orgId: string, limit: number) {
    return this.repo.getTransactionList(orgId, limit);
  }
}

@Injectable()
export class FinanceKanbanService {
  constructor(private readonly repo: FinanceKanbanRepository) {}

  async createBoard(data: unknown, userId: string, orgId: string) {
    return this.repo.createBoard({ ...asObject(data), userId, organizationId: orgId });
  }

  async updateBoard(id: string, orgId: string, data: unknown) {
    return this.repo.updateBoard(id, orgId, asObject(data));
  }

  async deleteBoard(id: string, orgId: string) {
    return this.repo.deleteBoard(id, orgId);
  }

  async listBoards(orgId: string) {
    return this.repo.listBoards(orgId);
  }

  async listColumns(orgId: string, boardId?: string) {
    return this.repo.listColumns(orgId, boardId);
  }

  async createColumn(data: unknown, orgId: string) {
    const payload = asObject(data);
    return this.repo.createColumn({
      ...payload,
      boardOrganizationId: orgId,
      position: toInt(payload.position, 0),
    });
  }

  async updateColumn(id: string, orgId: string, data: unknown) {
    const payload = asObject(data);
    if (typeof payload.position === "string" || typeof payload.position === "number") {
      payload.position = toInt(payload.position, 0);
    }
    return this.repo.updateColumn(id, orgId, payload);
  }

  async deleteColumn(id: string, orgId: string) {
    return this.repo.deleteColumn(id, orgId);
  }

  async createCard(data: unknown, userId: string, orgId: string) {
    return this.repo.createCard({ ...asObject(data), userId, boardOrganizationId: orgId });
  }

  async createCards(data: unknown, userId: string, orgId: string) {
    if (!Array.isArray(data)) return { count: 0 };
    const payload = data
      .filter((item) => item && typeof item === "object" && !Array.isArray(item))
      .map((item) => ({ ...(item as Record<string, unknown>), userId, boardOrganizationId: orgId }));
    return this.repo.createCards(payload);
  }

  async updateCard(id: string, orgId: string, data: unknown) {
    return this.repo.updateCard(id, orgId, asObject(data));
  }

  async deleteCard(id: string, orgId: string) {
    return this.repo.deleteCard(id, orgId);
  }

  async getCardTotal(orgId: string) {
    return this.repo.getCardTotal(orgId);
  }

  async getSourceCardDetails(orgId: string, sourceType: string, limit: number) {
    return this.repo.getCardDetailsBySource(orgId, sourceType, limit);
  }
}

@Injectable()
export class SuperAdminFinanceService {
  constructor(
    private readonly repo: SuperAdminFinanceRepository,
    private readonly expenseRepo: SuperAdminExpenseRepository,
  ) {}

  async getAll() {
    return this.repo.findAll();
  }

  async getStats(period: string) {
    return this.repo.findByPeriod(period);
  }

  async syncStripe(period: string) {
    const organizationIds = await this.repo.getOrganizationIds();
    const snapshots = await Promise.all(
      organizationIds.map(async (organizationId) => {
        const summary = await this.repo.getRevenueAndExpenseByOrganization(organizationId);
        return this.repo.createSummarySnapshot({ organizationId, ...summary, period });
      }),
    );
    return { synced: snapshots.length, period };
  }

  async triggerSync(period: string) {
    return this.syncStripe(period);
  }

  async getSummary(period: string) {
    return this.repo.getSummary(period);
  }

  async getAppSubscribers() {
    const rows = await this.repo.getAppSubscribers();
    return rows.map((row) => ({
      id: row.id,
      userId: row.userId,
      organizationId: row.organizationId,
      amount: row.amount,
      status: row.status,
      transactionId: row.transactionId,
      createdAt: row.createdAt,
    }));
  }

  async getAppSubscribersChart() {
    const rows = await this.repo.getAppSubscribers();
    const byDay = new Map<string, number>();
    for (const row of rows) {
      const key = row.createdAt.toISOString().slice(0, 10);
      byDay.set(key, (byDay.get(key) || 0) + 1);
    }
    return Array.from(byDay.entries()).map(([date, count]) => ({ date, count }));
  }

  async getAppSubscriberInvoices(subscriptionId: string) {
    const rows = await this.repo.getAppSubscribers();
    return rows.filter((row) => row.id === subscriptionId || row.transactionId === subscriptionId);
  }

  async getSmsSubscribers() {
    const rows = await this.repo.getSmsDeposits();
    return rows.map((row) => ({
      id: row.id,
      userId: row.userId,
      organizationId: row.organizationId,
      amount: row.amount,
      status: row.status,
      createdAt: row.createdAt,
    }));
  }

  async getSmsChart() {
    const rows = await this.repo.getSmsDeposits();
    const byDay = new Map<string, number>();
    for (const row of rows) {
      const key = row.createdAt.toISOString().slice(0, 10);
      byDay.set(key, (byDay.get(key) || 0) + Number(String(row.amount)));
    }
    return Array.from(byDay.entries()).map(([date, amount]) => ({ date, amount }));
  }

  async getSmsDeposits() {
    return this.repo.getSmsDeposits();
  }

  async getSmsDepositsChart() {
    return this.getSmsChart();
  }

  async getProcessingFees(period: string) {
    return this.repo.getProcessingFees(period);
  }

  async getProcessingFeeOrgOverview(period: string) {
    const fees = await this.repo.getProcessingFees(period);
    const total = fees.reduce((sum, row) => sum + row.fee, 0);
    return {
      period,
      total,
      organizations: fees.length,
      average: fees.length > 0 ? total / fees.length : 0,
    };
  }

  async getProcessingFeeOrgChart(period: string) {
    const fees = await this.repo.getProcessingFees(period);
    return fees.map((fee) => ({ organizationId: fee.organizationId, fee: fee.fee }));
  }

  async deleteAccount(organizationId: string) {
    return this.repo.deleteAccount(organizationId);
  }

  async createExpense(data: unknown, userId: string, orgId: string) {
    return this.expenseRepo.create({ ...asObject(data), userId, organizationId: orgId });
  }

  async getExpenses() {
    return this.expenseRepo.list();
  }

  async updateExpense(id: string, data: unknown) {
    return this.expenseRepo.update(id, asObject(data));
  }

  async deleteExpense(id: string) {
    return this.expenseRepo.softDelete(id);
  }
}
