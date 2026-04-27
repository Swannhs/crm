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
}
