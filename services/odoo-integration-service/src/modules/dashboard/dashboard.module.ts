import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller.js';
import { AnalyticsModule } from '../analytics/analytics.module.js';

@Module({
  imports: [AnalyticsModule],
  controllers: [DashboardController],
})
export class DashboardModule {}
