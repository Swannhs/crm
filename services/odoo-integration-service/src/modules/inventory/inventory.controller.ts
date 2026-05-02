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
import { InventoryService } from './inventory.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { ProductEntity } from './entities/product.entity.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Inventory')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get('products')
  @ApiOperation({ summary: 'List all products' })
  @ApiResponse({ status: 200, type: [ProductEntity] })
  async findAllProducts(@Query() paginationDto: PaginationDto) {
    return this.inventoryService.findAllProducts(paginationDto);
  }

  @Get('products/:id')
  @ApiOperation({ summary: 'Get product details' })
  @ApiResponse({ status: 200, type: ProductEntity })
  async findProduct(@Param('id') id: string) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.inventoryService.findProduct(numericId);
  }

  @Post('products')
  @ApiOperation({ summary: 'Create a new product' })
  async create(@Body() data: any) {
    return this.inventoryService.createProduct(data);
  }

  @Put('products/:id')
  @ApiOperation({ summary: 'Update a product' })
  async update(@Param('id') id: string, @Body() data: any) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.inventoryService.updateProduct(numericId, data);
  }

  @Delete('products/:id')
  @ApiOperation({ summary: 'Delete a product' })
  async remove(@Param('id') id: string) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.inventoryService.removeProduct(numericId);
  }
}
