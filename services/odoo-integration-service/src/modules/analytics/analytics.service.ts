import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';

@Injectable()
export class AnalyticsService {
  constructor(private readonly odooClient: OdooClientService) {}

  private normalizeDateRange(dateFrom?: string, dateTo?: string) {
    const now = new Date();
    const fallbackFrom = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const start = dateFrom ? new Date(dateFrom) : fallbackFrom;
    const end = dateTo ? new Date(dateTo) : now;

    return {
      from: Number.isNaN(start.getTime())
        ? fallbackFrom.toISOString().slice(0, 10)
        : start.toISOString().slice(0, 10),
      to: Number.isNaN(end.getTime())
        ? now.toISOString().slice(0, 10)
        : end.toISOString().slice(0, 10),
    };
  }

  private invoiceDomain(dateFrom?: string, dateTo?: string): any[] {
    const { from, to } = this.normalizeDateRange(dateFrom, dateTo);
    return [
      ['move_type', 'in', ['out_invoice', 'out_refund']],
      ['state', '!=', 'cancel'],
      ['invoice_date', '>=', from],
      ['invoice_date', '<=', to],
    ];
  }

  private opportunityDomain(dateFrom?: string, dateTo?: string): any[] {
    const { from, to } = this.normalizeDateRange(dateFrom, dateTo);
    return [
      ['type', '=', 'opportunity'],
      ['create_date', '>=', from],
      ['create_date', '<=', to],
    ];
  }

  private activityDomain(dateFrom?: string, dateTo?: string): any[] {
    const { from, to } = this.normalizeDateRange(dateFrom, dateTo);
    return [
      ['create_date', '>=', from],
      ['create_date', '<=', to],
    ];
  }

  private contactDomain(dateFrom?: string, dateTo?: string): any[] {
    const { from, to } = this.normalizeDateRange(dateFrom, dateTo);
    return [
      ['customer_rank', '>', 0],
      ['create_date', '>=', from],
      ['create_date', '<=', to],
    ];
  }

  private getMonthKey(dateLike?: string) {
    if (!dateLike) return '';
    return String(dateLike).slice(0, 7);
  }

  async getDashboardStats(dateFrom?: string, dateTo?: string) {
    const [revenueSummary, customerGrowth, conversionRate, activityMetrics] =
      await Promise.all([
        this.getRevenueSummary(dateFrom, dateTo),
        this.getCustomerGrowth(dateFrom, dateTo),
        this.getConversionRate(dateFrom, dateTo),
        this.getActivityMetrics(dateFrom, dateTo),
      ]);

    return {
      revenue: revenueSummary.totalRevenue,
      outstanding: revenueSummary.totalOutstanding,
      customerNetGrowth: customerGrowth.netGrowth,
      conversionRate: conversionRate.conversionRate,
      completedActivities: activityMetrics.completedActivities,
      totalActivities: activityMetrics.totalActivities,
      range: this.normalizeDateRange(dateFrom, dateTo),
      currency: 'USD',
    };
  }

  async getRevenueSummary(dateFrom?: string, dateTo?: string) {
    const invoices = await this.odooClient.searchRead(
      'account.move',
      this.invoiceDomain(dateFrom, dateTo),
      ['amount_total', 'amount_residual', 'invoice_date'],
    );

    const byMonth: Record<string, number> = {};
    let totalRevenue = 0;
    let totalOutstanding = 0;

    for (const invoice of invoices) {
      const amount = Number(invoice.amount_total || 0);
      totalRevenue += amount;
      totalOutstanding += Number(invoice.amount_residual || 0);
      const key = this.getMonthKey(invoice.invoice_date);
      if (key) byMonth[key] = (byMonth[key] || 0) + amount;
    }

    return {
      totalRevenue,
      totalOutstanding,
      totalPaid: totalRevenue - totalOutstanding,
      invoiceCount: invoices.length,
      trend: Object.entries(byMonth)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([month, value]) => ({ month, value })),
    };
  }

  async getCustomerGrowth(dateFrom?: string, dateTo?: string) {
    const contacts = await this.odooClient.searchRead(
      'res.partner',
      this.contactDomain(dateFrom, dateTo),
      ['create_date', 'active'],
    );

    const growthByMonth: Record<string, number> = {};
    let netGrowth = 0;

    for (const contact of contacts) {
      const key = this.getMonthKey(contact.create_date);
      const growthDelta = contact.active === false ? -1 : 1;
      netGrowth += growthDelta;
      if (key) growthByMonth[key] = (growthByMonth[key] || 0) + growthDelta;
    }

    return {
      totalCustomers: contacts.length,
      netGrowth,
      trend: Object.entries(growthByMonth)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([month, value]) => ({ month, value })),
    };
  }

  async getPipelineVelocity(dateFrom?: string, dateTo?: string) {
    const opportunities = await this.odooClient.searchRead(
      'crm.lead',
      this.opportunityDomain(dateFrom, dateTo),
      ['create_date', 'write_date', 'is_won', 'active', 'expected_revenue'],
    );

    const closedWon = opportunities.filter((opp: any) => opp.is_won === true);
    const velocityDays = closedWon
      .map((opp: any) => {
        const created = new Date(opp.create_date).getTime();
        const updated = new Date(opp.write_date).getTime();
        if (Number.isNaN(created) || Number.isNaN(updated) || updated < created) {
          return null;
        }
        return (updated - created) / (24 * 60 * 60 * 1000);
      })
      .filter((value): value is number => value !== null);

    const avgDaysToClose =
      velocityDays.length > 0
        ? velocityDays.reduce((sum, value) => sum + value, 0) / velocityDays.length
        : 0;

    return {
      openCount: opportunities.filter((opp: any) => opp.active !== false && !opp.is_won).length,
      wonCount: closedWon.length,
      avgDaysToClose,
    };
  }

  async getSalesRepPerformance(dateFrom?: string, dateTo?: string) {
    const opportunities = await this.odooClient.searchRead(
      'crm.lead',
      this.opportunityDomain(dateFrom, dateTo),
      ['user_id', 'is_won', 'expected_revenue'],
    );

    const byRep: Record<string, { repId: number; repName: string; opportunities: number; won: number; revenue: number }> = {};
    for (const opp of opportunities) {
      const repId = Array.isArray(opp.user_id) ? Number(opp.user_id[0]) : 0;
      const repName = Array.isArray(opp.user_id) ? String(opp.user_id[1]) : 'Unassigned';
      const key = `${repId}:${repName}`;
      if (!byRep[key]) {
        byRep[key] = { repId, repName, opportunities: 0, won: 0, revenue: 0 };
      }
      byRep[key].opportunities += 1;
      if (opp.is_won) {
        byRep[key].won += 1;
        byRep[key].revenue += Number(opp.expected_revenue || 0);
      }
    }

    return Object.values(byRep).map((item) => ({
      ...item,
      winRate: item.opportunities > 0 ? (item.won / item.opportunities) * 100 : 0,
    }));
  }

  async getActivityMetrics(dateFrom?: string, dateTo?: string) {
    const activities = await this.odooClient.searchRead(
      'mail.activity',
      this.activityDomain(dateFrom, dateTo),
      ['state', 'activity_type_id'],
    );

    const byType: Record<string, number> = {};
    let completedActivities = 0;
    for (const activity of activities) {
      const typeName = Array.isArray(activity.activity_type_id)
        ? String(activity.activity_type_id[1]).toLowerCase()
        : 'other';
      byType[typeName] = (byType[typeName] || 0) + 1;
      if (activity.state === 'done') completedActivities += 1;
    }

    return {
      totalActivities: activities.length,
      completedActivities,
      completionRate: activities.length > 0 ? (completedActivities / activities.length) * 100 : 0,
      byType,
    };
  }

  async getInvoiceAging(dateFrom?: string, dateTo?: string) {
    const invoices = await this.odooClient.searchRead(
      'account.move',
      this.invoiceDomain(dateFrom, dateTo),
      ['invoice_date_due', 'amount_residual', 'state', 'payment_state'],
    );

    const today = new Date();
    const buckets = { current: 0, days1to30: 0, days31to60: 0, days61plus: 0 };
    let overdueCount = 0;

    for (const invoice of invoices) {
      if (invoice.state !== 'posted' || invoice.payment_state === 'paid') continue;
      const residual = Number(invoice.amount_residual || 0);
      if (residual <= 0 || !invoice.invoice_date_due) continue;

      const dueDate = new Date(invoice.invoice_date_due);
      const daysOverdue = Math.floor((today.getTime() - dueDate.getTime()) / (24 * 60 * 60 * 1000));
      if (daysOverdue <= 0) {
        buckets.current += residual;
      } else if (daysOverdue <= 30) {
        buckets.days1to30 += residual;
        overdueCount += 1;
      } else if (daysOverdue <= 60) {
        buckets.days31to60 += residual;
        overdueCount += 1;
      } else {
        buckets.days61plus += residual;
        overdueCount += 1;
      }
    }

    return { overdueCount, buckets };
  }

  async getConversionRate(dateFrom?: string, dateTo?: string) {
    const [leads, opportunities] = await Promise.all([
      this.odooClient.execute('crm.lead', 'search_count', [[
        ['type', '=', 'lead'],
        ['create_date', '>=', this.normalizeDateRange(dateFrom, dateTo).from],
        ['create_date', '<=', this.normalizeDateRange(dateFrom, dateTo).to],
      ]]),
      this.odooClient.execute('crm.lead', 'search_count', [[
        ['type', '=', 'opportunity'],
        ['create_date', '>=', this.normalizeDateRange(dateFrom, dateTo).from],
        ['create_date', '<=', this.normalizeDateRange(dateFrom, dateTo).to],
      ]]),
    ]);

    return {
      leads,
      opportunities,
      conversionRate: leads > 0 ? (opportunities / leads) * 100 : 0,
    };
  }

  async getRevenueStreams(dateFrom?: string, dateTo?: string) {
    const summary = await this.getRevenueSummary(dateFrom, dateTo);
    return summary.trend;
  }

  async getOrderDistribution(dateFrom?: string, dateTo?: string) {
    const opportunities = await this.odooClient.searchRead(
      'crm.lead',
      this.opportunityDomain(dateFrom, dateTo),
      ['stage_id'],
    );

    const grouped: Record<string, number> = {};
    for (const opp of opportunities) {
      const stage = Array.isArray(opp.stage_id) ? String(opp.stage_id[1]) : 'Unknown';
      grouped[stage] = (grouped[stage] || 0) + 1;
    }

    return Object.entries(grouped).map(([stage, count]) => ({ stage, count }));
  }

  async getActivityFeed(limit = 12) {
    const rows = await this.odooClient.searchRead(
      'mail.activity',
      [],
      ['id', 'summary', 'state', 'date_deadline', 'create_date', 'res_name'],
      { order: 'create_date desc', limit: Math.max(1, Math.min(limit, 100)) },
    );

    return rows.map((row: any) => ({
      id: row.id,
      title: row.summary || 'Activity',
      entity: row.res_name || 'Record',
      state: row.state || 'planned',
      dueDate: row.date_deadline,
      createdAt: row.create_date,
    }));
  }

  async getAttentionItems() {
    const aging = await this.getInvoiceAging();
    return [
      {
        id: 'overdue-invoices',
        label: 'Overdue invoices',
        value: aging.overdueCount,
        severity: aging.overdueCount > 0 ? 'high' : 'normal',
      },
    ];
  }

  async exportReport(metric: string, dateFrom?: string, dateTo?: string) {
    switch (metric) {
      case 'revenue-summary':
        return this.getRevenueSummary(dateFrom, dateTo);
      case 'customer-growth':
        return this.getCustomerGrowth(dateFrom, dateTo);
      case 'pipeline-velocity':
        return this.getPipelineVelocity(dateFrom, dateTo);
      case 'sales-rep-performance':
        return this.getSalesRepPerformance(dateFrom, dateTo);
      case 'activity-metrics':
        return this.getActivityMetrics(dateFrom, dateTo);
      case 'invoice-aging':
        return this.getInvoiceAging(dateFrom, dateTo);
      case 'conversion-rate':
        return this.getConversionRate(dateFrom, dateTo);
      default:
        return this.getDashboardStats(dateFrom, dateTo);
    }
  }
}
