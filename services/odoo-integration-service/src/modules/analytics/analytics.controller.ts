import { Controller, Get, Query, UseGuards } from '@nestjs/common';
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
  async getDashboardStats(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getDashboardStats(dateFrom, dateTo);
  }

  @Get('revenue-summary')
  @ApiOperation({ summary: 'Get revenue summary' })
  async getRevenueSummary(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getRevenueSummary(dateFrom, dateTo);
  }

  @Get('revenue-streams')
  @ApiOperation({ summary: 'Get revenue streams data' })
  async getRevenueStreams(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getRevenueStreams(dateFrom, dateTo);
  }

  @Get('order-distribution')
  @ApiOperation({ summary: 'Get order distribution data' })
  async getOrderDistribution(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getOrderDistribution(dateFrom, dateTo);
  }

  @Get('customer-growth')
  @ApiOperation({ summary: 'Get customer growth data' })
  async getCustomerGrowth(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getCustomerGrowth(dateFrom, dateTo);
  }

  @Get('pipeline-velocity')
  async getPipelineVelocity(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getPipelineVelocity(dateFrom, dateTo);
  }

  @Get('sales-rep-performance')
  async getSalesRepPerformance(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getSalesRepPerformance(dateFrom, dateTo);
  }

  @Get('activity-metrics')
  async getActivityMetrics(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getActivityMetrics(dateFrom, dateTo);
  }

  @Get('invoice-aging')
  async getInvoiceAging(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getInvoiceAging(dateFrom, dateTo);
  }

  @Get('conversion-rate')
  async getConversionRate(@Query('dateFrom') dateFrom?: string, @Query('dateTo') dateTo?: string) {
    return this.analyticsService.getConversionRate(dateFrom, dateTo);
  }

  @Get('export')
  async exportReport(
    @Query('metric') metric = 'dashboard',
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
  ) {
    return this.analyticsService.exportReport(metric, dateFrom, dateTo);
  }
}
