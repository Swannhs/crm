import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { InventoryService } from '../inventory/inventory.service.js';
import { SalesService } from '../sales/sales.service.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@Controller('magento')
@UseGuards(IdentityGuard)
export class MagentoCompatibilityController {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly salesService: SalesService,
  ) {}

  @Get('products')
  async getProducts() {
    const { data } = await this.inventoryService.findAllProducts({ page: 1, pageSize: 100 });
    return {
      success: true,
      data: {
        items: data.map(item => ({
          id: item.id,
          name: item.name,
          sku: item.default_code,
          price: item.list_price,
          status: 1,
          custom_attributes: [
            { attribute_code: 'description', value: item.description || '' }
          ]
        }))
      }
    };
  }

  @Get('orders')
  async getOrders() {
    const { data } = await this.salesService.findAll({ page: 1, pageSize: 100 });
    return {
      success: true,
      data: {
        items: data.map(order => ({
          entity_id: order.id,
          increment_id: order.name,
          base_grand_total: order.amount_total,
          status: order.state,
          items: order.order_line?.map((line: any) => ({
            item_id: line.id,
            name: line.name,
            qty_ordered: line.qty_ordered || 1,
            price: line.price || 0
          })) || []
        }))
      }
    };
  }

  @Get('coupons')
  async getCoupons() {
    return {
      success: true,
      data: {
        items: [
          { id: '1', code: 'WELCOME10', type: 'percent', value: 10, isActive: true, used_count: 45 },
          { id: '2', code: 'SPRING24', type: 'fixed', value: 2000, isActive: true, used_count: 12 },
          { id: '3', code: 'FREESHIP', type: 'percent', value: 0, isActive: false, used_count: 89 },
        ]
      }
    };
  }

  @Post('rest')
  async handleRest(@Body() body: any) {
    if (body.path?.includes('categories')) {
      return {
        success: true,
        data: {
          children_data: [
            { id: 1, name: 'Electronics', is_active: true, position: 1, level: 2 },
            { id: 2, name: 'Home & Garden', is_active: true, position: 2, level: 2 },
            { id: 3, name: 'Apparel', is_active: true, position: 3, level: 2 },
            { id: 4, name: 'Fitness & Outdoors', is_active: true, position: 4, level: 2 },
            { id: 5, name: 'Beauty & Health', is_active: true, position: 5, level: 2 },
          ]
        }
      };
    }
    return { success: true, data: {} };
  }
}
