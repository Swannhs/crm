import { Module } from '@nestjs/common';
import { AccountingController } from './accounting.controller.js';
import { AccountingService } from './accounting.service.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [AccountingController],
  providers: [AccountingService],
})
export class AccountingModule {}
