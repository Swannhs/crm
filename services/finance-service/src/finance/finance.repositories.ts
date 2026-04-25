import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service.js";

const ACTIVE_STATUSES = ["completed", "paid", "success"] as const;

function monthBuckets() {
  return Array.from({ length: 12 }, (_, idx) => ({ month: idx + 1, income: 0, expense: 0, net: 0 }));
}

function toNumber(value: unknown): number {
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value);
  if (value && typeof value === "object" && "toString" in value) {
    return Number(String(value));
  }
  return 0;
}

@Injectable()
export class IncomeRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.income.create({ data });
  }

  async findById(id: string) {
    return this.db.income.findUnique({ where: { id } });
  }

  async findByOrganizationId(orgId: string) {
    return this.db.income.findMany({ where: { organizationId: orgId }, orderBy: { date: "desc" } });
  }

  async findByOrganizationIdAndYear(orgId: string, year: number) {
    const start = new Date(Date.UTC(year, 0, 1));
    const end = new Date(Date.UTC(year + 1, 0, 1));
    return this.db.income.findMany({
      where: { organizationId: orgId, date: { gte: start, lt: end } },
      orderBy: { date: "asc" },
    });
  }

  async update(id: string, orgId: string, data: Record<string, unknown>) {
    await this.db.income.updateMany({ where: { id, organizationId: orgId }, data });
    return this.findById(id);
  }

  async delete(id: string, orgId: string) {
    const record = await this.db.income.findFirst({ where: { id, organizationId: orgId } });
    if (!record) return null;
    return this.db.income.delete({ where: { id } });
  }
}

@Injectable()
export class ExpenseRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.expense.create({ data });
  }

  async findByOrganizationId(orgId: string) {
    return this.db.expense.findMany({ where: { organizationId: orgId }, orderBy: { date: "desc" } });
  }

  async findByOrganizationIdAndYear(orgId: string, year: number) {
    const start = new Date(Date.UTC(year, 0, 1));
    const end = new Date(Date.UTC(year + 1, 0, 1));
    return this.db.expense.findMany({
      where: { organizationId: orgId, date: { gte: start, lt: end } },
      orderBy: { date: "asc" },
    });
  }
}

@Injectable()
export class DepositRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.deposit.create({ data });
  }

  async findByOrganizationId(orgId: string) {
    return this.db.deposit.findMany({ where: { organizationId: orgId }, orderBy: { createdAt: "desc" } });
  }

  async findByUserAndOrganization(userId: string, orgId: string) {
    return this.db.deposit.findMany({ where: { userId, organizationId: orgId }, orderBy: { createdAt: "desc" } });
  }

  async getCreditBalance(userId: string, orgId: string) {
    const deposits = await this.db.deposit.findMany({ where: { userId, organizationId: orgId, status: "completed" } });
    return deposits.reduce((sum, d) => sum + toNumber(d.amount), 0);
  }
}

@Injectable()
export class PaymentPaypalRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.paymentPaypal.create({ data });
  }

  async findByUserId(userId: string, orgId: string) {
    return this.db.paymentPaypal.findMany({ where: { userId, organizationId: orgId }, orderBy: { createdAt: "desc" } });
  }
}

@Injectable()
export class PaymentValorRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.paymentValor.create({ data });
  }
}

@Injectable()
export class FinanceCategoryRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.financeCategory.create({ data });
  }

  async findByOrganizationId(orgId: string) {
    return this.db.financeCategory.findMany({ where: { organizationId: orgId }, orderBy: { createdAt: "desc" } });
  }

  async update(id: string, orgId: string, data: Record<string, unknown>) {
    await this.db.financeCategory.updateMany({ where: { id, organizationId: orgId }, data });
    return this.db.financeCategory.findUnique({ where: { id } });
  }

  async delete(id: string, orgId: string) {
    const record = await this.db.financeCategory.findFirst({ where: { id, organizationId: orgId } });
    if (!record) return null;
    return this.db.financeCategory.delete({ where: { id } });
  }
}

@Injectable()
export class TaxSalesRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.taxSales.create({ data });
  }

  async findByOrganizationId(orgId: string) {
    return this.db.taxSales.findMany({ where: { organizationId: orgId, isActive: true } });
  }

  async update(id: string, orgId: string, data: Record<string, unknown>) {
    await this.db.taxSales.updateMany({ where: { id, organizationId: orgId }, data });
    return this.db.taxSales.findUnique({ where: { id } });
  }

  async delete(id: string, orgId: string) {
    await this.db.taxSales.updateMany({ where: { id, organizationId: orgId }, data: { isActive: false } });
    return this.db.taxSales.findUnique({ where: { id } });
  }
}

@Injectable()
export class FinanceDashboardRepository {
  constructor(
    private readonly incomes: IncomeRepository,
    private readonly expenses: ExpenseRepository,
    private readonly deposits: DepositRepository,
    private readonly db: PrismaService,
  ) {}

  async getExpenseStats(orgId: string, year: number) {
    const expenses = await this.expenses.findByOrganizationIdAndYear(orgId, year);
    const buckets = monthBuckets();
    const byCategory = new Map<string, number>();

    for (const item of expenses) {
      const month = item.date.getUTCMonth();
      const amount = toNumber(item.amount);
      buckets[month].expense += amount;
      const category = item.category || "Uncategorized";
      byCategory.set(category, (byCategory.get(category) || 0) + amount);
    }

    const totalExpense = buckets.reduce((sum, item) => sum + item.expense, 0);
    return {
      year,
      totalExpense,
      monthly: buckets,
      byCategory: Array.from(byCategory.entries()).map(([category, amount]) => ({ category, amount })),
    };
  }

  async getTransactionList(orgId: string, limit = 100) {
    const [income, expense, deposits, payouts, cardPayments] = await Promise.all([
      this.db.income.findMany({ where: { organizationId: orgId }, orderBy: { date: "desc" }, take: limit }),
      this.db.expense.findMany({ where: { organizationId: orgId }, orderBy: { date: "desc" }, take: limit }),
      this.deposits.findByOrganizationId(orgId),
      this.db.paymentPaypal.findMany({ where: { organizationId: orgId }, orderBy: { createdAt: "desc" }, take: limit }),
      this.db.paymentValor.findMany({ where: { organizationId: orgId }, orderBy: { createdAt: "desc" }, take: limit }),
    ]);

    const tx = [
      ...income.map((item) => ({
        id: item.id,
        type: "income",
        amount: toNumber(item.amount),
        category: item.category,
        description: item.description,
        occurredAt: item.date,
        raw: item,
      })),
      ...expense.map((item) => ({
        id: item.id,
        type: "expense",
        amount: toNumber(item.amount),
        category: item.category,
        description: item.description,
        occurredAt: item.date,
        raw: item,
      })),
      ...deposits.map((item) => ({
        id: item.id,
        type: "deposit",
        amount: toNumber(item.amount),
        category: item.paymentMethod,
        description: item.description,
        occurredAt: item.createdAt,
        raw: item,
      })),
      ...payouts.map((item) => ({
        id: item.id,
        type: "paypal-payout",
        amount: toNumber(item.amount),
        category: item.currency,
        description: item.recipientEmail,
        occurredAt: item.createdAt,
        raw: item,
      })),
      ...cardPayments.map((item) => ({
        id: item.id,
        type: "valor-payment",
        amount: toNumber(item.amount),
        category: item.currency,
        description: item.transactionId,
        occurredAt: item.createdAt,
        raw: item,
      })),
    ];

    tx.sort((a, b) => b.occurredAt.getTime() - a.occurredAt.getTime());
    return tx.slice(0, limit);
  }

  async getPLStatistics(orgId: string, year: number) {
    const [incomes, expenses] = await Promise.all([
      this.incomes.findByOrganizationIdAndYear(orgId, year),
      this.expenses.findByOrganizationIdAndYear(orgId, year),
    ]);

    const buckets = monthBuckets();
    let totalIncome = 0;
    let totalExpense = 0;

    for (const item of incomes) {
      const amount = toNumber(item.amount);
      totalIncome += amount;
      buckets[item.date.getUTCMonth()].income += amount;
    }
    for (const item of expenses) {
      const amount = toNumber(item.amount);
      totalExpense += amount;
      buckets[item.date.getUTCMonth()].expense += amount;
    }
    for (const item of buckets) {
      item.net = item.income - item.expense;
    }

    return {
      year,
      totalIncome,
      totalExpense,
      netProfit: totalIncome - totalExpense,
      monthly: buckets,
    };
  }
}

@Injectable()
export class FinanceKanbanRepository {
  constructor(private readonly db: PrismaService) {}

  async createBoard(data: Record<string, unknown>) {
    return this.db.financeBoard.create({ data });
  }

  async listBoards(orgId: string) {
    return this.db.financeBoard.findMany({
      where: { organizationId: orgId },
      orderBy: { createdAt: "desc" },
      include: {
        columns: {
          orderBy: { position: "asc" },
          include: { cards: { orderBy: { createdAt: "desc" } } },
        },
      },
    });
  }

  async updateBoard(id: string, orgId: string, data: Record<string, unknown>) {
    await this.db.financeBoard.updateMany({ where: { id, organizationId: orgId }, data });
    return this.db.financeBoard.findUnique({ where: { id } });
  }

  async deleteBoard(id: string, orgId: string) {
    const board = await this.db.financeBoard.findFirst({ where: { id, organizationId: orgId } });
    if (!board) return null;
    return this.db.financeBoard.delete({ where: { id } });
  }

  async createColumn(data: Record<string, unknown>) {
    return this.db.financeColumn.create({ data });
  }

  async listColumns(orgId: string, boardId?: string) {
    return this.db.financeColumn.findMany({
      where: { board: { is: { organizationId: orgId } }, boardId },
      orderBy: { position: "asc" },
      include: { cards: { orderBy: { createdAt: "desc" } } },
    });
  }

  async updateColumn(id: string, orgId: string, data: Record<string, unknown>) {
    await this.db.financeColumn.updateMany({
      where: { id, board: { is: { organizationId: orgId } } },
      data,
    });
    return this.db.financeColumn.findUnique({ where: { id } });
  }

  async deleteColumn(id: string, orgId: string) {
    const column = await this.db.financeColumn.findFirst({ where: { id, board: { is: { organizationId: orgId } } } });
    if (!column) return null;
    return this.db.financeColumn.delete({ where: { id } });
  }

  async createCard(data: Record<string, unknown>) {
    return this.db.financeCard.create({ data });
  }

  async createCards(data: Record<string, unknown>[]) {
    if (data.length === 0) return { count: 0 };
    return this.db.financeCard.createMany({ data });
  }

  async updateCard(id: string, orgId: string, data: Record<string, unknown>) {
    await this.db.financeCard.updateMany({ where: { id, boardOrganizationId: orgId }, data });
    return this.db.financeCard.findUnique({ where: { id } });
  }

  async deleteCard(id: string, orgId: string) {
    const card = await this.db.financeCard.findFirst({ where: { id, boardOrganizationId: orgId } });
    if (!card) return null;
    return this.db.financeCard.delete({ where: { id } });
  }

  async getCardTotal(orgId: string) {
    const cards = await this.db.financeCard.findMany({ where: { boardOrganizationId: orgId } });
    return cards.reduce((sum, card) => sum + toNumber(card.amount), 0);
  }

  async getCardDetailsBySource(orgId: string, sourceType: string, limit = 100) {
    return this.db.financeCard.findMany({
      where: { boardOrganizationId: orgId, sourceType },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  }
}

@Injectable()
export class SuperAdminFinanceRepository {
  constructor(private readonly db: PrismaService) {}

  async findAll() {
    return this.db.superAdminFinance.findMany({ orderBy: { createdAt: "desc" } });
  }

  async findByPeriod(period: string) {
    return this.db.superAdminFinance.findMany({ where: { period } });
  }

  async createSummarySnapshot(data: { organizationId: string; revenue: number; expenses: number; period: string }) {
    const revenue = data.revenue;
    const expenses = data.expenses;
    return this.db.superAdminFinance.create({
      data: {
        organizationId: data.organizationId,
        revenue,
        expenses,
        profit: revenue - expenses,
        period: data.period,
      },
    });
  }

  async getSummary(period: string) {
    const rows = await this.findByPeriod(period);
    const totals = rows.reduce(
      (acc, item) => {
        acc.revenue += toNumber(item.revenue);
        acc.expenses += toNumber(item.expenses);
        acc.profit += toNumber(item.profit);
        return acc;
      },
      { revenue: 0, expenses: 0, profit: 0 },
    );

    return {
      period,
      organizationCount: rows.length,
      ...totals,
    };
  }

  async getProcessingFees(period: string) {
    const rows = await this.findByPeriod(period);
    return rows.map((row) => ({
      id: row.id,
      organizationId: row.organizationId,
      period: row.period,
      fee: Math.max(toNumber(row.revenue) * 0.029 + 0.3, 0),
    }));
  }

  async deleteAccount(organizationId: string) {
    await this.db.superAdminFinance.deleteMany({ where: { organizationId } });
    await this.db.superAdminExpense.deleteMany({ where: { organizationId } });
    return { organizationId, deleted: true };
  }

  async getOrganizationIds() {
    const [incomeOrgs, expenseOrgs] = await Promise.all([
      this.db.income.findMany({ select: { organizationId: true }, distinct: ["organizationId"] }),
      this.db.expense.findMany({ select: { organizationId: true }, distinct: ["organizationId"] }),
    ]);

    const ids = new Set<string>();
    for (const row of incomeOrgs) if (row.organizationId) ids.add(row.organizationId);
    for (const row of expenseOrgs) if (row.organizationId) ids.add(row.organizationId);
    return Array.from(ids);
  }

  async getRevenueAndExpenseByOrganization(organizationId: string) {
    const [income, expense] = await Promise.all([
      this.db.income.findMany({ where: { organizationId }, select: { amount: true } }),
      this.db.expense.findMany({ where: { organizationId }, select: { amount: true } }),
    ]);

    return {
      revenue: income.reduce((sum, item) => sum + toNumber(item.amount), 0),
      expenses: expense.reduce((sum, item) => sum + toNumber(item.amount), 0),
    };
  }

  async getAppSubscribers(limit = 200) {
    return this.db.paymentValor.findMany({
      where: { status: { in: ACTIVE_STATUSES as unknown as string[] } },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  }

  async getSmsDeposits(limit = 200) {
    return this.db.deposit.findMany({
      where: { status: { in: ACTIVE_STATUSES as unknown as string[] } },
      orderBy: { createdAt: "desc" },
      take: limit,
    });
  }
}

@Injectable()
export class SuperAdminExpenseRepository {
  constructor(private readonly db: PrismaService) {}

  async create(data: Record<string, unknown>) {
    return this.db.superAdminExpense.create({ data });
  }

  async list() {
    return this.db.superAdminExpense.findMany({ where: { isActive: true }, orderBy: { createdAt: "desc" } });
  }

  async update(id: string, data: Record<string, unknown>) {
    return this.db.superAdminExpense.update({ where: { id }, data });
  }

  async softDelete(id: string) {
    return this.db.superAdminExpense.update({ where: { id }, data: { isActive: false } });
  }
}
