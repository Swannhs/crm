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
  Res,
} from '@nestjs/common';
import type { Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { AccountingService } from './accounting.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { ContactsService } from '../contacts/contacts.service.js';
import { InvoiceEntity } from './entities/invoice.entity.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Accounting')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller()
export class AccountingController {
  constructor(
    private readonly accountingService: AccountingService,
    private readonly contactsService: ContactsService,
  ) {}

  @Get('invoices')
  @ApiOperation({ summary: 'List all invoices' })
  @ApiResponse({ status: 200, type: [InvoiceEntity] })
  async findAllInvoices(
    @Query() paginationDto: PaginationDto,
    @Query('contactId') contactId?: string,
    @Query('state') state?: string,
    @Query('paymentState') paymentState?: string,
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
  ) {
    const pageSize = Math.max(1, Math.min(100, Number(paginationDto.pageSize || 10)));
    const page = Math.max(1, Number(paginationDto.page || 1));

    if (dateFrom && dateTo && new Date(dateFrom) > new Date(dateTo)) {
      throw new Error('dateFrom cannot be later than dateTo');
    }

    let odooId: number | undefined;
    if (contactId) {
      odooId = /^\d+$/.test(contactId)
        ? Number(contactId)
        : (await this.contactsService.resolveUuid(contactId)) || undefined;
    }
    const filters = { state, paymentState, dateFrom, dateTo };
    return this.accountingService.findAllInvoices({ ...paginationDto, pageSize, page }, odooId, filters);
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

  @Get('invoices/:id/download')
  @ApiOperation({ summary: 'Download invoice PDF' })
  async download(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const base64 = await this.accountingService.downloadInvoice(id);
    const buffer = Buffer.from(base64, 'base64');

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename=invoice_${id}.pdf`,
      'Content-Length': buffer.length,
    });

    res.end(buffer);
  }

  @Get('billing/summary')
  @ApiOperation({ summary: 'Get billing summary' })
  async getSummary() {
    return this.accountingService.getSummary();
  }

  @Get('billing/graph')
  @ApiOperation({ summary: 'Get billing revenue graph' })
  async getGraph(@Query('months') months?: string) {
    const count = Math.max(1, Math.min(24, months ? parseInt(months, 10) : 6));
    return this.accountingService.getGraph(count);
  }
}
