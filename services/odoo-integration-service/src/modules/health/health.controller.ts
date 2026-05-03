import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service.js';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  liveness() {
    return { status: 'ok', service: 'odoo-integration-service', ts: new Date().toISOString() };
  }

  @Get('readiness')
  async readiness() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { status: 'ready', checks: { db: 'ok' }, ts: new Date().toISOString() };
    } catch (error: any) {
      return { status: 'not_ready', checks: { db: error?.message || 'error' }, ts: new Date().toISOString() };
    }
  }
}
