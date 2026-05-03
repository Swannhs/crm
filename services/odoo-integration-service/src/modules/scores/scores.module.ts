import { Module } from '@nestjs/common';
import { ScoresController } from './scores.controller.js';
import { ScoresService } from './scores.service.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';
import { ContactsModule } from '../contacts/contacts.module.js';

@Module({
  imports: [OdooBaseModule, ContactsModule],
  controllers: [ScoresController],
  providers: [ScoresService],
  exports: [ScoresService],
})
export class ScoresModule {}
