import { Controller, Get, Post, Put, Delete, Body, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { SalesService } from './sales.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { OrderEntity } from './entities/order.entity.js';
import { CreateOrderDto } from './dto/order.dto.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Sales')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get('orders')
  @ApiOperation({ summary: 'List all sales orders' })
  @ApiResponse({ status: 200, type: [OrderEntity] })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.salesService.findAll(paginationDto);
  }

  @Get('orders/:id')
  @ApiOperation({ summary: 'Get details of a specific order' })
  @ApiResponse({ status: 200, type: OrderEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.findOne(id);
  }

  @Post('orders')
  @ApiOperation({ summary: 'Create a new sales order (quotation)' })
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.salesService.create(createOrderDto);
  }

  @Post('orders/:id/confirm')
  @ApiOperation({ summary: 'Confirm a quotation into a sales order' })
  async confirm(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.confirmOrder(id);
  }

  @Post('orders/:id/create-invoice')
  @ApiOperation({ summary: 'Generate an invoice from a sales order' })
  async createInvoice(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.createInvoice(id);
  }

  @Put('orders/:id')
  @ApiOperation({ summary: 'Update a sales order' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.salesService.update(id, data);
  }

  @Delete('orders/:id')
  @ApiOperation({ summary: 'Delete a sales order' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.remove(id);
  }
}
