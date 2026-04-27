import { Module } from '@nestjs/common';
import { MagentoCompatibilityController } from './magento-compatibility.controller.js';
import { InventoryModule } from '../inventory/inventory.module.js';
import { SalesModule } from '../sales/sales.module.js';

@Module({
  imports: [InventoryModule, SalesModule],
  controllers: [MagentoCompatibilityController],
})
export class MagentoCompatibilityModule {}
