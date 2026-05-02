import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';

@Injectable()
export class AnalyticsService {
  constructor(private readonly odooClient: OdooClientService) {}

  async getDashboardStats() {
    const [leads, opportunities, sales, revenue] = await Promise.all([
      // Count leads
      this.odooClient.execute('crm.lead', 'search_count', [
        [['type', '=', 'lead']],
      ]),
      // Count opportunities
      this.odooClient.execute('crm.lead', 'search_count', [
        [['type', '=', 'opportunity']],
      ]),
      // Count sales orders
      this.odooClient.execute('sale.order', 'search_count', [
        [['state', '=', 'sale']],
      ]),
      // Total revenue
      this.odooClient.searchRead(
        'sale.order',
        [['state', 'in', ['sale', 'done']]],
        ['amount_total'],
      ),
    ]);

    const totalRevenue = revenue.reduce(
      (sum, order) => sum + (order.amount_total || 0),
      0,
    );

    return {
      leads,
      opportunities,
      activeSales: sales,
      totalRevenue,
      currency: 'USD',
    };
  }

  async getRevenueStreams() {
    // In real Odoo, this would use read_group on sale.order grouping by date_order:month
    // For now, we'll return a structured response that the frontend can use.
    // If mock mode, it will return some generated data.
    return this.odooClient.execute('sale.order', 'read_group', [
      [['state', 'in', ['sale', 'done']]],
      ['amount_total:sum'],
      ['date_order:month'],
    ]);
  }

  async getOrderDistribution() {
    return this.odooClient.execute('sale.order', 'read_group', [
      [],
      ['id:count'],
      ['state'],
    ]);
  }

  async getCustomerGrowth() {
    return this.odooClient.execute('res.partner', 'read_group', [
      [['customer_rank', '>', 0]],
      ['id:count'],
      ['create_date:month'],
    ]);
  }
}
