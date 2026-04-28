import { Module } from '@nestjs/common';
import { BookingTypesService } from './booking-types.service.js';
import { BookingTypesController } from './booking-types.controller.js';

@Module({
  controllers: [BookingTypesController],
  providers: [BookingTypesService],
  exports: [BookingTypesService],
})
export class BookingTypesModule {}
