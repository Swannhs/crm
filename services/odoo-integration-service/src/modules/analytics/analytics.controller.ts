import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Analytics')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get summary statistics for the dashboard' })
  async getDashboardStats() {
    return this.analyticsService.getDashboardStats();
  }

  @Get('revenue-streams')
  @ApiOperation({ summary: 'Get revenue streams data' })
  async getRevenueStreams() {
    return this.analyticsService.getRevenueStreams();
  }

  @Get('order-distribution')
  @ApiOperation({ summary: 'Get order distribution data' })
  async getOrderDistribution() {
    return this.analyticsService.getOrderDistribution();
  }

  @Get('customer-growth')
  @ApiOperation({ summary: 'Get customer growth data' })
  async getCustomerGrowth() {
    return this.analyticsService.getCustomerGrowth();
  }
}
