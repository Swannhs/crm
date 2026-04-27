import { Controller, Get, Post, Put, Delete, Body, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { AccountingService } from './accounting.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { InvoiceEntity } from './entities/invoice.entity.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Accounting')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller()
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  @Get('invoices')
  @ApiOperation({ summary: 'List all invoices' })
  @ApiResponse({ status: 200, type: [InvoiceEntity] })
  async findAllInvoices(@Query() paginationDto: PaginationDto) {
    return this.accountingService.findAllInvoices(paginationDto);
  }

  @Get('invoices/:id')
  @ApiOperation({ summary: 'Get invoice details' })
  @ApiResponse({ status: 200, type: InvoiceEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.accountingService.findOne(id);
  }

  @Post('invoices')
  @ApiOperation({ summary: 'Create a new invoice' })
  async create(@Body() data: any) {
    return this.accountingService.create(data);
  }

  @Put('invoices/:id')
  @ApiOperation({ summary: 'Update an invoice' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.accountingService.update(id, data);
  }

  @Delete('invoices/:id')
  @ApiOperation({ summary: 'Delete an invoice' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.accountingService.remove(id);
  }

  @Post('invoices/:id/post')
  @ApiOperation({ summary: 'Post (validate) an invoice' })
  async post(@Param('id', ParseIntPipe) id: number) {
    return this.accountingService.post(id);
  }
}
