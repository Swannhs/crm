import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';

@Injectable()
export class AnalyticsService {
  constructor(private readonly odooClient: OdooClientService) {}

  async getDashboardStats() {
    const [leads, opportunities, sales, revenue] = await Promise.all([
      // Count leads
      this.odooClient.execute('crm.lead', 'search_count', [[['type', '=', 'lead']]]),
      // Count opportunities
      this.odooClient.execute('crm.lead', 'search_count', [[['type', '=', 'opportunity']]]),
      // Count sales orders
      this.odooClient.execute('sale.order', 'search_count', [[['state', '=', 'sale']]]),
      // Total revenue (Simplified sum via read_group or search_read)
      this.odooClient.searchRead('sale.order', [['state', 'in', ['sale', 'done']]], ['amount_total'])
    ]);

    const totalRevenue = revenue.reduce((sum, order) => sum + (order.amount_total || 0), 0);

    return {
      leads,
      opportunities,
      activeSales: sales,
      totalRevenue,
      currency: 'USD' // Odoo usually provides this, hardcoded for now
    };
  }
}
