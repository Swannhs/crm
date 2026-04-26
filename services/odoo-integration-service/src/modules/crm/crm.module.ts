import { Module } from '@nestjs/common';
import { CrmController } from './crm.controller.js';
import { CrmService } from './crm.service.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [CrmController],
  providers: [CrmService],
})
export class CrmModule {}
