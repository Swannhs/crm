import { Controller, Get, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { ReputationService } from './reputation.service.js';

@ApiTags('reputation')
@Controller('reputation')
export class ReputationController {
  constructor(private readonly service: ReputationService) {}

  @Get('dashboard-stats')
  @ApiOperation({ summary: 'Get reputation dashboard stats' })
  @ApiHeader({ name: 'x-org-id', required: true })
  async getStats(@Headers('x-org-id') orgId: string) {
    const data = await this.service.getStats(orgId);
    return { data };
  }
}
