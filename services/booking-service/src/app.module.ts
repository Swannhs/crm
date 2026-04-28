import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookingTypesModule } from './modules/booking-types/booking-types.module.js';
import { AppointmentsModule } from './modules/appointments/appointments.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    BookingTypesModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
