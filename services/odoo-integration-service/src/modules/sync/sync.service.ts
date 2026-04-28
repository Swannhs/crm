import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import axios from 'axios';

@Injectable()
export class SyncService {
  private readonly magentoUrl = process.env.MAGENTO_INTEGRATION_URL || 'http://ms-magento-inegration-service:7210/api';

  constructor(private readonly odooClient: OdooClientService) {}

  async syncMagentoCustomers(orgId: string) {
    // 1. Fetch from Magento
    const response = await axios.get(`${this.magentoUrl}/v1/magento/customers`, {
      headers: { 'x-org-id': orgId, 'x-user-id': 'system-sync' }
    });
    
    const customers = response.data.data.items;

    // 2. Push to Odoo (Simplified mapping)
    for (const customer of customers) {
      await this.odooClient.execute('res.partner', 'create', [{
        name: `${customer.firstname} ${customer.lastname}`,
        email: customer.email,
        ref: `MAG-${customer.id}`,
        customer_rank: 1,
      }]);
    }

    return { synced: customers.length };
  }

  async syncMagentoOrders(orgId: string) {
    const response = await axios.get(`${this.magentoUrl}/v1/magento/orders`, {
      headers: { 'x-org-id': orgId, 'x-user-id': 'system-sync' }
    });
    
    const orders = response.data.data.items;

    // Mapping logic would go here
    return { synced: orders.length };
  }
}
