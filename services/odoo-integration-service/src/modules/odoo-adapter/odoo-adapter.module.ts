import { Module } from '@nestjs/common';
import { OdooAdapterController } from './odoo-adapter.controller.js';
import { InventoryModule } from '../inventory/inventory.module.js';
import { SalesModule } from '../sales/sales.module.js';
import { MarketingModule } from '../marketing/marketing.module.js';

@Module({
  imports: [InventoryModule, SalesModule, MarketingModule],
  controllers: [OdooAdapterController],
})
export class OdooAdapterModule {}
