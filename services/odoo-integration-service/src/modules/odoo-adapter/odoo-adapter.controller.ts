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
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { InventoryService } from '../inventory/inventory.service.js';
import { SalesService } from '../sales/sales.service.js';
import { CreateOrderDto } from '../sales/dto/order.dto.js';
import { MarketingService } from '../marketing/marketing.service.js';

@ApiTags('Odoo Adapter')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller()
export class OdooAdapterController {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly salesService: SalesService,
    private readonly marketingService: MarketingService,
  ) {}

  @Get('products')
  @ApiOperation({
    summary: 'Adapter: list products for frontend /api/odoo/products',
  })
  async listProducts(@Query() paginationDto: PaginationDto) {
    return this.inventoryService.findAllProducts(paginationDto);
  }

  @Get('products/:id')
  @ApiOperation({
    summary: 'Adapter: get product by id for frontend /api/odoo/products/:id',
  })
  async getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.findProduct(id);
  }

  @Post('products')
  @ApiOperation({
    summary: 'Adapter: create product for frontend /api/odoo/products',
  })
  async createProduct(@Body() data: any) {
    return this.inventoryService.createProduct(data);
  }

  @Put('products/:id')
  @ApiOperation({
    summary: 'Adapter: update product for frontend /api/odoo/products/:id',
  })
  async updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.inventoryService.updateProduct(id, data);
  }

  @Delete('products/:id')
  @ApiOperation({
    summary: 'Adapter: delete product for frontend /api/odoo/products/:id',
  })
  async deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.removeProduct(id);
  }

  @Get('categories')
  @ApiOperation({
    summary: 'Adapter: list categories for frontend /api/odoo/categories',
  })
  async listCategories(@Query() paginationDto: PaginationDto) {
    return this.inventoryService.findAllCategories(paginationDto);
  }

  @Get('categories/:id')
  @ApiOperation({
    summary:
      'Adapter: get category by id for frontend /api/odoo/categories/:id',
  })
  async getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.findCategory(id);
  }

  @Post('categories')
  @ApiOperation({
    summary: 'Adapter: create category for frontend /api/odoo/categories',
  })
  async createCategory(@Body() data: any) {
    return this.inventoryService.createCategory(data);
  }

  @Put('categories/:id')
  @ApiOperation({
    summary: 'Adapter: update category for frontend /api/odoo/categories/:id',
  })
  async updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.inventoryService.updateCategory(id, data);
  }

  @Delete('categories/:id')
  @ApiOperation({
    summary: 'Adapter: delete category for frontend /api/odoo/categories/:id',
  })
  async deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.removeCategory(id);
  }

  @Get('sales-orders')
  @ApiOperation({
    summary: 'Adapter: list sales orders for frontend /api/odoo/sales-orders',
  })
  async listSalesOrders(@Query() paginationDto: PaginationDto) {
    return this.salesService.findAll(paginationDto);
  }

  @Get('sales-orders/:id')
  @ApiOperation({
    summary:
      'Adapter: get sales order by id for frontend /api/odoo/sales-orders/:id',
  })
  async getSalesOrder(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.findOne(id);
  }

  @Post('sales-orders')
  @ApiOperation({
    summary: 'Adapter: create sales order for frontend /api/odoo/sales-orders',
  })
  async createSalesOrder(@Body() data: CreateOrderDto) {
    return this.salesService.create(data);
  }

  @Put('sales-orders/:id')
  @ApiOperation({
    summary:
      'Adapter: update sales order for frontend /api/odoo/sales-orders/:id',
  })
  async updateSalesOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.salesService.update(id, data);
  }

  @Delete('sales-orders/:id')
  @ApiOperation({
    summary:
      'Adapter: delete sales order for frontend /api/odoo/sales-orders/:id',
  })
  async deleteSalesOrder(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.remove(id);
  }

  @Get('inventory')
  @ApiOperation({
    summary: 'Adapter: list inventory quants for frontend /api/odoo/inventory',
  })
  async listInventory(@Query() paginationDto: PaginationDto) {
    return this.inventoryService.findAllInventory(paginationDto);
  }

  @Get('inventory/locations')
  @ApiOperation({
    summary:
      'Adapter: list stock locations for frontend /api/odoo/inventory/locations',
  })
  async listInventoryLocations(@Query() paginationDto: PaginationDto) {
    return this.inventoryService.findAllLocations(paginationDto);
  }

  @Get('inventory/:id')
  @ApiOperation({
    summary:
      'Adapter: get inventory quant for frontend /api/odoo/inventory/:id',
  })
  async getInventory(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.findInventory(id);
  }

  @Post('inventory')
  @ApiOperation({
    summary: 'Adapter: create inventory quant for frontend /api/odoo/inventory',
  })
  async createInventory(@Body() data: any) {
    return this.inventoryService.createInventory(data);
  }

  @Put('inventory/:id')
  @ApiOperation({
    summary:
      'Adapter: update inventory quant for frontend /api/odoo/inventory/:id',
  })
  async updateInventory(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.inventoryService.updateInventory(id, data);
  }

  @Delete('inventory/:id')
  @ApiOperation({
    summary:
      'Adapter: delete inventory quant for frontend /api/odoo/inventory/:id',
  })
  async deleteInventory(@Param('id', ParseIntPipe) id: number) {
    return this.inventoryService.removeInventory(id);
  }

  @Get('marketing/campaigns')
  @ApiOperation({
    summary:
      'Adapter: list marketing campaigns for frontend /api/odoo/marketing/campaigns',
  })
  async listMarketingCampaigns(@Query() paginationDto: PaginationDto) {
    return this.marketingService.listCampaigns(paginationDto);
  }

  @Post('marketing/campaigns')
  @ApiOperation({
    summary:
      'Adapter: create marketing campaign for frontend /api/odoo/marketing/campaigns',
  })
  async createMarketingCampaign(@Body() data: any) {
    return this.marketingService.createCampaign(data);
  }

  @Put('marketing/campaigns/:id')
  @ApiOperation({
    summary:
      'Adapter: update marketing campaign for frontend /api/odoo/marketing/campaigns/:id',
  })
  async updateMarketingCampaign(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.marketingService.updateCampaign(id, data);
  }

  @Delete('marketing/campaigns/:id')
  @ApiOperation({
    summary:
      'Adapter: delete marketing campaign for frontend /api/odoo/marketing/campaigns/:id',
  })
  async deleteMarketingCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.removeCampaign(id);
  }

  @Post('marketing/campaigns/:id/launch')
  @ApiOperation({
    summary:
      'Adapter: launch campaign for frontend /api/odoo/marketing/campaigns/:id/launch',
  })
  async launchMarketingCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.setCampaignStatus(id, 'launch');
  }

  @Post('marketing/campaigns/:id/pause')
  @ApiOperation({
    summary:
      'Adapter: pause campaign for frontend /api/odoo/marketing/campaigns/:id/pause',
  })
  async pauseMarketingCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.setCampaignStatus(id, 'pause');
  }

  @Post('marketing/campaigns/:id/archive')
  @ApiOperation({
    summary:
      'Adapter: archive campaign for frontend /api/odoo/marketing/campaigns/:id/archive',
  })
  async archiveMarketingCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.setCampaignStatus(id, 'archive');
  }

  @Get('marketing/sources')
  @ApiOperation({
    summary:
      'Adapter: list marketing sources for frontend /api/odoo/marketing/sources',
  })
  async listMarketingSources(@Query() paginationDto: PaginationDto) {
    return this.marketingService.listSources(paginationDto);
  }

  @Post('marketing/sources')
  @ApiOperation({
    summary:
      'Adapter: create marketing source for frontend /api/odoo/marketing/sources',
  })
  async createMarketingSource(@Body() data: any) {
    return this.marketingService.createSource(data);
  }

  @Put('marketing/sources/:id')
  @ApiOperation({
    summary:
      'Adapter: update marketing source for frontend /api/odoo/marketing/sources/:id',
  })
  async updateMarketingSource(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.marketingService.updateSource(id, data);
  }

  @Delete('marketing/sources/:id')
  @ApiOperation({
    summary:
      'Adapter: delete marketing source for frontend /api/odoo/marketing/sources/:id',
  })
  async deleteMarketingSource(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.removeSource(id);
  }

  @Get('marketing/mediums')
  @ApiOperation({
    summary:
      'Adapter: list marketing mediums for frontend /api/odoo/marketing/mediums',
  })
  async listMarketingMediums(@Query() paginationDto: PaginationDto) {
    return this.marketingService.listMediums(paginationDto);
  }

  @Post('marketing/mediums')
  @ApiOperation({
    summary:
      'Adapter: create marketing medium for frontend /api/odoo/marketing/mediums',
  })
  async createMarketingMedium(@Body() data: any) {
    return this.marketingService.createMedium(data);
  }

  @Put('marketing/mediums/:id')
  @ApiOperation({
    summary:
      'Adapter: update marketing medium for frontend /api/odoo/marketing/mediums/:id',
  })
  async updateMarketingMedium(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.marketingService.updateMedium(id, data);
  }

  @Delete('marketing/mediums/:id')
  @ApiOperation({
    summary:
      'Adapter: delete marketing medium for frontend /api/odoo/marketing/mediums/:id',
  })
  async deleteMarketingMedium(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.removeMedium(id);
  }

  @Get('marketing/analytics')
  @ApiOperation({
    summary:
      'Adapter: marketing analytics for frontend /api/odoo/marketing/analytics',
  })
  async getMarketingAnalytics(
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
  ) {
    return this.marketingService.analytics({ dateFrom, dateTo });
  }

  @Get('marketing/campaigns/:id/insights')
  @ApiOperation({
    summary:
      'Adapter: campaign lead/order insights for frontend /api/odoo/marketing/campaigns/:id/insights',
  })
  async getMarketingCampaignInsights(
    @Param('id', ParseIntPipe) id: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.marketingService.campaignInsights(id, paginationDto);
  }
}
