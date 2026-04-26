import { Controller, Get, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
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
  async findProduct(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.findProduct(id);
  }
}
