import { Controller, Get, Post, Body, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { FormBuilderService } from './form-builder.service.js';

@ApiTags('form-builder')
@Controller('form-builder')
export class FormBuilderController {
  constructor(private readonly service: FormBuilderService) {}

  @Get('forms')
  @ApiOperation({ summary: 'List all forms' })
  @ApiHeader({ name: 'x-org-id', required: true })
  async listForms(@Headers('x-org-id') orgId: string) {
    const data = await this.service.listForms(orgId);
    return { data };
  }

  @Get('templates')
  @ApiOperation({ summary: 'List available form templates' })
  async listTemplates() {
    const data = await this.service.listTemplates();
    return { data };
  }

  @Post('forms')
  @ApiOperation({ summary: 'Create a new form' })
  @ApiHeader({ name: 'x-org-id', required: true })
  async createForm(@Headers('x-org-id') orgId: string, @Body() data: any) {
    const form = await this.service.createForm(orgId, data);
    return { data: form };
  }
}
