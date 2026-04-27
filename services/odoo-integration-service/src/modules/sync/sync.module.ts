import { Module } from '@nestjs/common';
import { SyncController } from './sync.controller.js';
import { SyncService } from './sync.service.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [SyncController],
  providers: [SyncService],
})
export class SyncModule {}
