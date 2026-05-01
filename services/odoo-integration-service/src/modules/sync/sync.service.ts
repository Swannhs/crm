import { Injectable, Logger } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PrismaService } from '../../common/prisma/prisma.service.js';
import axios from 'axios';

@Injectable()
export class SyncService {
  private readonly logger = new Logger(SyncService.name);
  private readonly magentoUrl = process.env.MAGENTO_INTEGRATION_URL;

  constructor(
    private readonly odooClient: OdooClientService,
    private readonly prisma: PrismaService,
  ) {}

  async syncMagentoCustomers(orgId: string) {
    if (!this.magentoUrl) {
      throw new Error('Missing MAGENTO_INTEGRATION_URL');
    }
    this.logger.log(`Starting Magento customer sync for org: ${orgId}`);
    try {
      const response = await axios.get(
        `${this.magentoUrl}/v1/magento/customers`,
        {
          headers: { 'x-org-id': orgId, 'x-user-id': 'system-sync' },
        },
      );

      const customers = response.data?.data?.items || [];
      let created = 0;
      let updated = 0;

      if (customers.length > 0) {
        // Bulk fetch existing partners
        const emails = customers.map((c: any) => c.email).filter(Boolean);
        const refs = customers.map((c: any) => `MAG-${c.id}`);

        const existingPartners = await this.odooClient.searchRead(
          'res.partner',
          ['|', ['email', 'in', emails], ['ref', 'in', refs]],
          ['id', 'email', 'ref'],
        );

        const partnerMap = new Map();
        for (const partner of existingPartners) {
          if (partner.email)
            partnerMap.set(`email:${partner.email}`, partner.id);
          if (partner.ref) partnerMap.set(`ref:${partner.ref}`, partner.id);
        }

        for (const customer of customers) {
          const ref = `MAG-${customer.id}`;
          const existingId =
            partnerMap.get(`ref:${ref}`) ||
            partnerMap.get(`email:${customer.email}`);

          const partnerData = {
            name: `${customer.firstname} ${customer.lastname}`,
            email: customer.email,
            ref,
            customer_rank: 1,
            comment: `Synced from Magento ID: ${customer.id}`,
          };

          let odooId: number;
          if (existingId) {
            odooId = existingId;
            await this.odooClient.execute('res.partner', 'write', [
              [odooId],
              partnerData,
            ]);
            updated++;
          } else {
            odooId = await this.odooClient.execute('res.partner', 'create', [
              partnerData,
            ]);
            partnerMap.set(`ref:${ref}`, odooId);
            if (customer.email)
              partnerMap.set(`email:${customer.email}`, odooId);
            created++;
          }

          // Ensure Prisma map exists
          if (typeof odooId === 'number') {
            await this.prisma.contactMap.upsert({
              where: { odooId },
              update: { status: 'client' },
              create: { odooId, status: 'client' },
            });
          }
        }
      }

      return { total: customers.length, created, updated };
    } catch (error) {
      this.logger.error(`Magento customer sync failed: ${error.message}`);
      throw error;
    }
  }

  async syncMagentoOrders(orgId: string) {
    if (!this.magentoUrl) {
      throw new Error('Missing MAGENTO_INTEGRATION_URL');
    }
    this.logger.log(`Starting Magento order sync for org: ${orgId}`);
    try {
      const response = await axios.get(`${this.magentoUrl}/v1/magento/orders`, {
        headers: { 'x-org-id': orgId, 'x-user-id': 'system-sync' },
      });

      const orders = response.data?.data?.items || [];
      let synced = 0;
      let skipped = 0;

      if (orders.length > 0) {
        // Bulk fetch existing orders
        const orderNames = orders.map(
          (o: any) => `MAG-${o.increment_id || o.entity_id}`,
        );
        const existingOrders = await this.odooClient.searchRead(
          'sale.order',
          [['name', 'in', orderNames]],
          ['id', 'name'],
        );
        const existingOrderNames = new Set(
          existingOrders.map((o: any) => o.name),
        );

        const ordersToProcess = orders.filter((o: any) => {
          const name = `MAG-${o.increment_id || o.entity_id}`;
          if (existingOrderNames.has(name)) {
            skipped++;
            return false;
          }
          return true;
        });

        if (ordersToProcess.length > 0) {
          // Bulk fetch partners
          const emails = ordersToProcess
            .map((o: any) => o.customer_email)
            .filter(Boolean);
          const partners = await this.odooClient.searchRead(
            'res.partner',
            [['email', 'in', emails]],
            ['id', 'email'],
          );

          const partnerMap = new Map();
          for (const partner of partners) {
            if (partner.email) partnerMap.set(partner.email, partner.id);
          }

          for (const order of ordersToProcess) {
            let partnerId = partnerMap.get(order.customer_email);

            if (!partnerId) {
              partnerId = await this.odooClient.execute(
                'res.partner',
                'create',
                [
                  {
                    name:
                      `${order.customer_firstname} ${order.customer_lastname}`.trim() ||
                      order.customer_email,
                    email: order.customer_email,
                    customer_rank: 1,
                  },
                ],
              );
              if (order.customer_email) {
                partnerMap.set(order.customer_email, partnerId);
              }
            }

            // Ensure Prisma map exists for the partner
            if (typeof partnerId === 'number') {
              await this.prisma.contactMap.upsert({
                where: { odooId: partnerId },
                update: {},
                create: { odooId: partnerId, status: 'client' },
              });
            }

            // 2. Map items to order lines
            const orderLines = (order.items || []).map((item: any) => [
              0,
              0,
              {
                name: item.name || `Product SKU: ${item.sku}`,
                product_uom_qty: item.qty_ordered || 1,
                price_unit: item.price || 0,
              },
            ]);

            // 3. Create Sale Order
            await this.odooClient.execute('sale.order', 'create', [
              {
                partner_id: partnerId,
                name: `MAG-${order.increment_id || order.entity_id}`,
                date_order: order.created_at,
                order_line: orderLines,
                note: `Magento Order ID: ${order.entity_id}. Status: ${order.status}`,
              },
            ]);

            synced++;
          }
        }
      }

      return { total: orders.length, synced, skipped };
    } catch (error) {
      this.logger.error(`Magento order sync failed: ${error.message}`);
      throw error;
    }
  }
}
