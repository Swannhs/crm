import { Module } from '@nestjs/common';
import { OdooClientService } from './odoo-client.service.js';

@Module({
  providers: [OdooClientService],
  exports: [OdooClientService],
})
export class OdooBaseModule {}
