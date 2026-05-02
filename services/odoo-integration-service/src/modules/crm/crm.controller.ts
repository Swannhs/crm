import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Query,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { CrmService } from './crm.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { LeadEntity } from './entities/lead.entity.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('CRM')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('crm')
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  @Get('stages')
  @ApiOperation({ summary: 'List all CRM stages' })
  async getStages() {
    return this.crmService.getStages();
  }

  @Get('activities')
  @ApiOperation({ summary: 'List all CRM activities' })
  async getActivities(@Query() paginationDto: PaginationDto) {
    return this.crmService.getActivities(paginationDto);
  }

  @Get('summary')
  @ApiOperation({ summary: 'Get CRM pipeline summary' })
  async getSummary() {
    return this.crmService.getPipelineSummary();
  }

  @Get('dashboard')
  @ApiOperation({ summary: 'Get CRM dashboard data' })
  async getDashboard() {
    return this.crmService.getDashboard();
  }

  @Get()
  @ApiOperation({ summary: 'List all leads and opportunities' })
  @ApiResponse({ status: 200, type: [LeadEntity] })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.crmService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get details of a lead/opportunity' })
  @ApiResponse({ status: 200, type: LeadEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.crmService.findOne(id);
  }

  @Get(':id/timeline')
  @ApiOperation({ summary: 'Get timeline of a lead/opportunity' })
  async getTimeline(@Param('id', ParseIntPipe) id: number) {
    return this.crmService.getTimeline(id);
  }

  @Post(':id/notes')
  @ApiOperation({ summary: 'Create a note for an opportunity' })
  async createNote(@Param('id', ParseIntPipe) id: number, @Body('body') body: string) {
    return this.crmService.createNote(id, body);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new lead' })
  async create(@Body() data: any) {
    return this.crmService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a lead' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.crmService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a lead' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.crmService.remove(id);
  }

  @Post('activities')
  @ApiOperation({ summary: 'Create a new CRM activity' })
  async createActivity(@Body() data: any) {
    return this.crmService.createActivity(data);
  }

  @Put('activities/:id')
  @ApiOperation({ summary: 'Update a CRM activity' })
  async updateActivity(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.crmService.updateActivity(id, data);
  }

  @Post('activities/:id/complete')
  @ApiOperation({ summary: 'Complete a CRM activity' })
  async completeActivity(@Param('id', ParseIntPipe) id: number) {
    return this.crmService.completeActivity(id);
  }

  @Delete('activities/:id')
  @ApiOperation({ summary: 'Delete a CRM activity' })
  async removeActivity(@Param('id', ParseIntPipe) id: number) {
    return this.crmService.removeActivity(id);
  }
}
