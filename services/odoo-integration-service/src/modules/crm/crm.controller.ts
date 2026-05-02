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

  @Get('stages')
  @ApiOperation({ summary: 'List all CRM stages' })
  async getStages() {
    return this.crmService.getStages();
  }
}
