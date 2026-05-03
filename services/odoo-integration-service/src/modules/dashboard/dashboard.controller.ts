import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';
import { AnalyticsService } from '../analytics/analytics.service.js';

@ApiTags('Dashboard')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller()
export class DashboardController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard/overview')
  @ApiOperation({ summary: 'Dashboard overview metrics' })
  async getOverview(@Query('range') range = '30d') {
    const dateFrom = this.rangeToDateFrom(range);
    return this.analyticsService.getDashboardStats(dateFrom);
  }

  @Get('dashboard/graphs')
  @ApiOperation({ summary: 'Dashboard graph data by metric' })
  async getGraphs(@Query('metric') metric = 'revenue', @Query('range') range = '30d') {
    const dateFrom = this.rangeToDateFrom(range);
    if (metric === 'revenue') return this.analyticsService.getRevenueStreams(dateFrom);
    if (metric === 'pipeline') return this.analyticsService.getOrderDistribution(dateFrom);
    if (metric === 'contacts') return this.analyticsService.getCustomerGrowth(dateFrom);
    if (metric === 'bookings') return this.analyticsService.getActivityMetrics(dateFrom);
    return this.analyticsService.getRevenueStreams(dateFrom);
  }

  @Get('dashboard/activity')
  @ApiOperation({ summary: 'Recent dashboard activity' })
  async getActivity(@Query('limit') limit?: string) {
    return this.analyticsService.getActivityFeed(limit ? Number(limit) : 12);
  }

  @Get('dashboard/attention')
  @ApiOperation({ summary: 'Dashboard attention items' })
  async getAttention() {
    return this.analyticsService.getAttentionItems();
  }

  @Get('marketing/v1/campaigns')
  @ApiOperation({ summary: 'Get mock campaigns' })
  async getCampaigns() {
    return { data: [], total: 0 };
  }

  @Get('marketing/v1/automations')
  @ApiOperation({ summary: 'Get mock automations' })
  async getAutomations() {
    return { data: [], total: 0 };
  }

  @Get('calendar/v1/events')
  @ApiOperation({ summary: 'Get mock events' })
  async getEvents() {
    return { data: [], total: 0 };
  }

  // Fallbacks for non-versioned calls
  @Get('events')
  async getEventsLegacy() {
    return { data: [], total: 0 };
  }

  private rangeToDateFrom(range: string) {
    const value = Number(String(range || '30d').replace('d', ''));
    const safeDays = Number.isFinite(value) && value > 0 ? value : 30;
    const start = new Date(Date.now() - safeDays * 24 * 60 * 60 * 1000);
    return start.toISOString().slice(0, 10);
  }
}
