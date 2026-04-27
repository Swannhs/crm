import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller.js';
import { SalesService } from './sales.service.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
