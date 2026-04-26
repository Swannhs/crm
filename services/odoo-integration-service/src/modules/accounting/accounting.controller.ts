import { Controller, Get, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
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
}
