import { db } from '../db.js';

export class IncomeRepository {
  async create(data: any) { return db.income.create({ data }); }
  async findById(id: string) { return db.income.findUnique({ where: { id } }); }
  async findByUserId(userId: string) { return db.income.findMany({ where: { userId }, orderBy: { date: 'desc' } }); }
  async findByOrganizationId(orgId: string) { return db.income.findMany({ where: { organizationId: orgId }, orderBy: { date: 'desc' } }); }
  async update(id: string, data: any) { return db.income.update({ where: { id }, data }); }
  async delete(id: string) { return db.income.delete({ where: { id } }); }
  async getByDateRange(orgId: string, start: Date, end: Date) { return db.income.findMany({ where: { organizationId: orgId, date: { gte: start, lte: end } } }); }
}

export class ExpenseRepository {
  async create(data: any) { return db.expense.create({ data }); }
  async findByOrganizationId(orgId: string) { return db.expense.findMany({ where: { organizationId: orgId }, orderBy: { date: 'desc' } }); }
}

export class DepositRepository {
  async create(data: any) { return db.deposit.create({ data }); }
  async findByUserId(userId: string) { return db.deposit.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } }); }
  async findByOrganizationId(orgId: string) { return db.deposit.findMany({ where: { organizationId: orgId }, orderBy: { createdAt: 'desc' } }); }
  async getCreditBalance(userId: string) { const deposits = await db.deposit.findMany({ where: { userId, status: 'completed' } }); return deposits.reduce((sum, d) => sum + Number(d.amount), 0); }
}

export class PaymentPaypalRepository {
  async create(data: any) { return db.paymentPaypal.create({ data }); }
  async findByUserId(userId: string) { return db.paymentPaypal.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } }); }
  async update(id: string, data: any) { return db.paymentPaypal.update({ where: { id }, data }); }
}

export class PaymentValorRepository {
  async create(data: any) { return db.paymentValor.create({ data }); }
  async findByUserId(userId: string) { return db.paymentValor.findMany({ where: { userId } }); }
}

export class FinanceCategoryRepository {
  async create(data: any) { return db.financeCategory.create({ data }); }
  async findByUserId(userId: string) { return db.financeCategory.findMany({ where: { userId } }); }
  async findByOrganizationId(orgId: string) { return db.financeCategory.findMany({ where: { organizationId: orgId } }); }
}

export class TaxSalesRepository {
  async create(data: any) { return db.taxSales.create({ data }); }
  async findByOrganizationId(orgId: string) { return db.taxSales.findMany({ where: { organizationId: orgId, isActive: true } }); }
  async update(id: string, data: any) { return db.taxSales.update({ where: { id }, data }); }
  async delete(id: string) { return db.taxSales.update({ where: { id }, data: { isActive: false } }); }
}

export class FinanceStatementRepository {
  async create(data: any) { return db.financeStatement.create({ data }); }
  async findByOrganizationId(orgId: string) { return db.financeStatement.findMany({ where: { organizationId: orgId }, orderBy: { startDate: 'desc' } }); }
}

export class SuperAdminFinanceRepository {
  async create(data: any) { return db.superAdminFinance.create({ data }); }
  async findAll() { return db.superAdminFinance.findMany({ orderBy: { createdAt: 'desc' } }); }
  async findByPeriod(period: string) { return db.superAdminFinance.findMany({ where: { period } }); }
}