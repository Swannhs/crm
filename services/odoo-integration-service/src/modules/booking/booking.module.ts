import { Module } from '@nestjs/common';
import { OdooBookingService } from './booking.service.js';
import { OdooBookingController } from './booking.controller.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [OdooBookingController],
  providers: [OdooBookingService],
  exports: [OdooBookingService],
})
export class BookingModule {}
