import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Dashboard')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller()
export class DashboardController {

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

  @Get('projects/v1/projects')
  @ApiOperation({ summary: 'Get mock projects' })
  async getProjects() {
    return { data: [], total: 0 };
  }

  @Get('projects/v1/tasks')
  @ApiOperation({ summary: 'Get mock tasks' })
  async getTasks() {
    return { data: [], total: 0 };
  }

  @Get('calendar/v1/events')
  @ApiOperation({ summary: 'Get mock events' })
  async getEvents() {
    return { data: [], total: 0 };
  }

  // Fallbacks for non-versioned calls
  @Get('projects')
  async getProjectsLegacy() {
    return { data: [], total: 0 };
  }

  @Get('events')
  async getEventsLegacy() {
    return { data: [], total: 0 };
  }
}
