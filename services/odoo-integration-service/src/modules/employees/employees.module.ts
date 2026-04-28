import { Module } from '@nestjs/common';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';
import { EmployeesController } from './employees.controller.js';
import { EmployeesService } from './employees.service.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}

