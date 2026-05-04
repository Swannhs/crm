import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { WebbuilderService } from './webbuilder.service.js';

@ApiTags('webbuilder')
@Controller('webbuilder')
export class WebbuilderController {
  constructor(private readonly service: WebbuilderService) {}

  @Get()
  @ApiOperation({ summary: 'List all websites' })
  @ApiHeader({ name: 'x-org-id', required: true })
  async listWebsites(@Headers('x-org-id') orgId: string) {
    const data = await this.service.listWebsites(orgId);
    return { data };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new website' })
  @ApiHeader({ name: 'x-org-id', required: true })
  async createWebsite(@Headers('x-org-id') orgId: string, @Body() data: any) {
    const website = await this.service.createWebsite(orgId, data);
    return { data: website };
  }
}
