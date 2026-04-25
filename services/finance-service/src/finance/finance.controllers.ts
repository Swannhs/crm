import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, Req, UseGuards } from "@nestjs/common";
import type { Request } from "express";
import { requireIdentity, requireSuperAdmin } from "../common/identity.js";
import { IdentityGuard } from "../common/guards/identity.guard.js";
import { SuperAdminGuard } from "../common/guards/super-admin.guard.js";
import { DeleteAccountDto, LimitQueryDto, PeriodQueryDto, YearQueryDto } from "./dto/finance.dto.js";
import {
  DepositService,
  ExpenseService,
  FinanceCategoryService,
  FinanceDashboardService,
  FinanceKanbanService,
  IncomeService,
  PaymentPaypalService,
  PaymentValorService,
  SuperAdminFinanceService,
  TaxSalesService,
} from "./finance.services.js";

function readYear(value: number | undefined): number {
  const year = value ?? new Date().getUTCFullYear();
  return Number.isFinite(year) ? year : new Date().getUTCFullYear();
}

function readLimit(value: number | undefined, fallback = 100): number {
  const limit = value ?? fallback;
  if (!Number.isFinite(limit)) return fallback;
  if (limit < 1) return 1;
  return Math.min(limit, 500);
}

@Controller("v1/incomes")
@UseGuards(IdentityGuard)
export class IncomeController {
  constructor(private readonly svc: IncomeService) {}

  @Post()
  async create(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.create(body, userId, orgId);
    return { success: true, data };
  }

  @Get()
  async getAll(@Req() req: Request) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.getAll(userId, orgId);
    return { success: true, data };
  }

  @Patch(":id")
  async update(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.update(id, orgId, body);
    return { success: true, data };
  }

  @Delete(":id")
  async delete(@Req() req: Request, @Param("id") id: string) {
    const { orgId } = requireIdentity(req);
    await this.svc.delete(id, orgId);
    return { success: true, message: "Deleted" };
  }

  @Get("pl-statistics")
  async getPLStatistics(@Req() req: Request, @Query() query: YearQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getPLStatistics(orgId, readYear(query.year));
    return { success: true, data };
  }
}

@Controller("v1/expenses")
@UseGuards(IdentityGuard)
export class ExpenseController {
  constructor(private readonly svc: ExpenseService) {}

  @Post()
  async create(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.create(body, userId, orgId);
    return { success: true, data };
  }

  @Get()
  async getAll(@Req() req: Request) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getAll(orgId);
    return { success: true, data };
  }
}

@Controller("v1/deposits")
@UseGuards(IdentityGuard)
export class DepositController {
  constructor(private readonly svc: DepositService) {}

  @Post()
  async create(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.create(body, userId, orgId);
    return { success: true, data };
  }

  @Get("history")
  async getHistory(@Req() req: Request) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.getHistory(userId, orgId);
    return { success: true, data };
  }

  @Get("credit-balance")
  async getCreditBalance(@Req() req: Request) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.getCreditBalance(userId, orgId);
    return { success: true, data: { balance: data } };
  }
}

@Controller("v1/payments/paypal")
@UseGuards(IdentityGuard)
export class PaymentPaypalController {
  constructor(private readonly svc: PaymentPaypalService) {}

  @Post("payouts")
  async createPayout(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.createPayout(body, userId, orgId);
    return { success: true, data };
  }

  @Get("payouts")
  async getPayouts(@Req() req: Request) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.getAll(userId, orgId);
    return { success: true, data };
  }
}

@Controller("v1/payments/valor")
@UseGuards(IdentityGuard)
export class PaymentValorController {
  constructor(private readonly svc: PaymentValorService) {}

  @Post()
  async createPayment(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.createPayment(body, userId, orgId);
    return { success: true, data };
  }
}

@Controller("v1/finance-categories")
@UseGuards(IdentityGuard)
export class FinanceCategoryController {
  constructor(private readonly svc: FinanceCategoryService) {}

  @Post()
  async create(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.create(body, userId, orgId);
    return { success: true, data };
  }

  @Get()
  async getAll(@Req() req: Request) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.getAll(userId, orgId);
    return { success: true, data };
  }
}

@Controller("v1/tax-sales")
@UseGuards(IdentityGuard)
export class TaxSalesController {
  constructor(private readonly svc: TaxSalesService) {}

  @Post()
  async create(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.create(body, userId, orgId);
    return { success: true, data };
  }

  @Get()
  async getAll(@Req() req: Request) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getAll(orgId);
    return { success: true, data };
  }

  @Patch(":id")
  async update(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.update(id, orgId, body);
    return { success: true, data };
  }

  @Delete(":id")
  async delete(@Req() req: Request, @Param("id") id: string) {
    const { orgId } = requireIdentity(req);
    await this.svc.delete(id, orgId);
    return { success: true, message: "Deleted" };
  }
}

@Controller("v1/super-admin/finances")
@UseGuards(SuperAdminGuard)
export class SuperAdminFinanceController {
  constructor(private readonly svc: SuperAdminFinanceService) {}

  @Get()
  async getAll() {
    const data = await this.svc.getAll();
    return { success: true, data };
  }

  @Get("stats")
  async getStats(@Query() query: PeriodQueryDto) {
    const period = query.period || "monthly";
    const data = await this.svc.getStats(period);
    return { success: true, data };
  }
}

@Controller("api/finance-category")
@UseGuards(IdentityGuard)
export class LegacyFinanceCategoryController {
  constructor(private readonly svc: FinanceCategoryService) {}

  @Post()
  async create(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.create(body, userId, orgId);
    return { success: true, data };
  }

  @Get()
  async getAll(@Req() req: Request) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.getAll(userId, orgId);
    return { success: true, data };
  }

  @Put(":id")
  async update(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.update(id, orgId, body);
    return { success: true, data };
  }

  @Delete(":id")
  async delete(@Req() req: Request, @Param("id") id: string) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.delete(id, orgId);
    return { success: true, data };
  }

  @Get("yearly-netincome")
  async yearlyNetIncome(@Req() req: Request, @Query() query: YearQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getYearlyNetIncome(orgId, readYear(query.year));
    return { success: true, data };
  }
}

@Controller("api/finance-dashboard")
@UseGuards(IdentityGuard)
export class LegacyFinanceDashboardController {
  constructor(private readonly svc: FinanceDashboardService) {}

  @Get("get-expense-stat")
  async getExpenseStat(@Req() req: Request, @Query() query: YearQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getExpenseStat(orgId, readYear(query.year));
    return { success: true, data };
  }

  @Get("get-transaction-list")
  async getTransactionList(@Req() req: Request, @Query() query: LimitQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getTransactionList(orgId, readLimit(query.limit));
    return { success: true, data };
  }
}

@Controller("api/finance-kanban")
@UseGuards(IdentityGuard)
export class LegacyFinanceKanbanController {
  constructor(private readonly svc: FinanceKanbanService) {}

  @Post("board")
  async createBoard(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.createBoard(body, userId, orgId);
    return { success: true, data };
  }

  @Put("board/:id")
  async updateBoard(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.updateBoard(id, orgId, body);
    return { success: true, data };
  }

  @Delete("board/:id")
  async deleteBoard(@Req() req: Request, @Param("id") id: string) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.deleteBoard(id, orgId);
    return { success: true, data };
  }

  @Get("board")
  async getBoards(@Req() req: Request) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.listBoards(orgId);
    return { success: true, data };
  }

  @Get("column")
  async getColumns(@Req() req: Request, @Query("boardId") boardId?: string) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.listColumns(orgId, boardId);
    return { success: true, data };
  }

  @Post("column")
  async createColumn(@Req() req: Request, @Body() body: unknown) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.createColumn(body, orgId);
    return { success: true, data };
  }

  @Put("column/:id")
  async updateColumn(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.updateColumn(id, orgId, body);
    return { success: true, data };
  }

  @Delete("column/:id")
  async deleteColumn(@Req() req: Request, @Param("id") id: string) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.deleteColumn(id, orgId);
    return { success: true, data };
  }

  @Post("card")
  async createCard(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.createCard(body, userId, orgId);
    return { success: true, data };
  }

  @Post("card-bulk")
  async createCardBulk(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireIdentity(req);
    const data = await this.svc.createCards(body, userId, orgId);
    return { success: true, data };
  }

  @Put("card/:id")
  async updateCard(@Req() req: Request, @Param("id") id: string, @Body() body: unknown) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.updateCard(id, orgId, body);
    return { success: true, data };
  }

  @Delete("card/:id")
  async deleteCard(@Req() req: Request, @Param("id") id: string) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.deleteCard(id, orgId);
    return { success: true, data };
  }

  @Get("card-total")
  async cardTotal(@Req() req: Request) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getCardTotal(orgId);
    return { success: true, data };
  }

  @Get("pipeline-card-details")
  async pipelineCardDetails(@Req() req: Request, @Query() query: LimitQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getSourceCardDetails(orgId, "pipeline", readLimit(query.limit));
    return { success: true, data };
  }

  @Get("event-card-details")
  async eventCardDetails(@Req() req: Request, @Query() query: LimitQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getSourceCardDetails(orgId, "event", readLimit(query.limit));
    return { success: true, data };
  }

  @Get("shop-course-card-details")
  async shopCourseCardDetails(@Req() req: Request, @Query() query: LimitQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getSourceCardDetails(orgId, "shop-course", readLimit(query.limit));
    return { success: true, data };
  }

  @Get("shop-product-card-details")
  async shopProductCardDetails(@Req() req: Request, @Query() query: LimitQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getSourceCardDetails(orgId, "shop-product", readLimit(query.limit));
    return { success: true, data };
  }

  @Get("recurring-card-details")
  async recurringCardDetails(@Req() req: Request, @Query() query: LimitQueryDto) {
    const { orgId } = requireIdentity(req);
    const data = await this.svc.getSourceCardDetails(orgId, "recurring", readLimit(query.limit));
    return { success: true, data };
  }
}

@Controller("api/super-admin-finance")
@UseGuards(SuperAdminGuard)
export class LegacySuperAdminFinanceController {
  constructor(private readonly svc: SuperAdminFinanceService) {}

  @Post("sync-stripe")
  async syncStripe(@Query() query: PeriodQueryDto) {
    const period = query.period || "monthly";
    const data = await this.svc.syncStripe(period);
    return { success: true, data };
  }

  @Post("trigger-sync")
  async triggerSync(@Query() query: PeriodQueryDto) {
    const period = query.period || "monthly";
    const data = await this.svc.triggerSync(period);
    return { success: true, data };
  }

  @Get("summary")
  async getSummary(@Query() query: PeriodQueryDto) {
    const period = query.period || "monthly";
    const data = await this.svc.getSummary(period);
    return { success: true, data };
  }

  @Get("app-subscribers")
  async getAppSubscribers() {
    const data = await this.svc.getAppSubscribers();
    return { success: true, data };
  }

  @Get("app-subscribers-chart")
  async getAppSubscribersChart() {
    const data = await this.svc.getAppSubscribersChart();
    return { success: true, data };
  }

  @Get("app-subscriber-invoices/:subscriptionId")
  async getAppSubscriberInvoices(@Param("subscriptionId") subscriptionId: string) {
    const data = await this.svc.getAppSubscriberInvoices(subscriptionId);
    return { success: true, data };
  }

  @Get("sms-subscribers")
  async getSmsSubscribers() {
    const data = await this.svc.getSmsSubscribers();
    return { success: true, data };
  }

  @Get("sms-chart")
  async getSmsChart() {
    const data = await this.svc.getSmsChart();
    return { success: true, data };
  }

  @Get("sms-deposits")
  async getSmsDeposits() {
    const data = await this.svc.getSmsDeposits();
    return { success: true, data };
  }

  @Get("sms-deposits-chart")
  async getSmsDepositsChart() {
    const data = await this.svc.getSmsDepositsChart();
    return { success: true, data };
  }

  @Get("processing-fees")
  async getProcessingFees(@Query() query: PeriodQueryDto) {
    const period = query.period || "monthly";
    const data = await this.svc.getProcessingFees(period);
    return { success: true, data };
  }

  @Get("processing-fee-org-overview")
  async getProcessingFeeOrgOverview(@Query() query: PeriodQueryDto) {
    const period = query.period || "monthly";
    const data = await this.svc.getProcessingFeeOrgOverview(period);
    return { success: true, data };
  }

  @Get("processing-fee-org-chart")
  async getProcessingFeeOrgChart(@Query() query: PeriodQueryDto) {
    const period = query.period || "monthly";
    const data = await this.svc.getProcessingFeeOrgChart(period);
    return { success: true, data };
  }

  @Post("delete-account")
  async deleteAccount(@Body() body: DeleteAccountDto) {
    const data = await this.svc.deleteAccount(body.organizationId);
    return { success: true, data };
  }

  @Post("expense")
  async createExpense(@Req() req: Request, @Body() body: unknown) {
    const { userId, orgId } = requireSuperAdmin(req);
    const data = await this.svc.createExpense(body, userId, orgId);
    return { success: true, data };
  }

  @Get("expenses")
  async getExpenses() {
    const data = await this.svc.getExpenses();
    return { success: true, data };
  }

  @Put("expense/:id")
  async updateExpense(@Param("id") id: string, @Body() body: unknown) {
    const data = await this.svc.updateExpense(id, body);
    return { success: true, data };
  }

  @Delete("expense/:id")
  async deleteExpense(@Param("id") id: string) {
    const data = await this.svc.deleteExpense(id);
    return { success: true, data };
  }
}
