import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';
import { PosService } from './pos.service.js';

@ApiTags('POS')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}
  private readonly defaultShopId = 'default-shop';

  private resolveShopId(shopId?: string) {
    return shopId || this.defaultShopId;
  }

  @Get('settings')
  @ApiOperation({ summary: 'Get POS settings' })
  getSettings(@Query('shopId') shopId: string) {
    return this.posService.getSettings(shopId);
  }

  @Get('context')
  @ApiOperation({ summary: 'Compatibility: Get POS register context' })
  getContext(@Query('shopId') shopId?: string) {
    const resolvedShopId = this.resolveShopId(shopId);
    const settings = this.posService.getSettings(resolvedShopId);
    return {
      shopId: resolvedShopId,
      currency: settings.currency,
      taxRate: settings.taxRate,
      serviceChargeRate: settings.serviceChargeRate,
      paymentMethods: [
        { value: 'cash', label: 'Cash' },
        { value: 'card', label: 'Card' },
        { value: 'wallet', label: 'Wallet' },
        { value: 'other', label: 'Other' },
      ],
      checkoutRules: {
        requirePaymentMethod: true,
        requireCartId: true,
      },
    };
  }

  @Get('settings/tip-shifts')
  @ApiOperation({ summary: 'Get POS tip shifts' })
  getTipShifts(@Query('shopId') shopId: string) {
    return this.posService.getTipShifts(shopId);
  }

  @Get('catalog')
  @ApiOperation({ summary: 'Get POS catalog' })
  getCatalog(@Query('shopId') shopId: string) {
    return this.posService.getCatalog(shopId);
  }

  @Get('products')
  @ApiOperation({ summary: 'Compatibility: Get POS products' })
  getProducts(@Query('shopId') shopId?: string) {
    return this.posService.getCatalog(this.resolveShopId(shopId));
  }

  @Post('cart')
  @ApiOperation({ summary: 'Compatibility: Create POS cart' })
  createCart(@Body() body: { shopId?: string } = {}) {
    const resolvedShopId = this.resolveShopId(body?.shopId);
    const tables = this.posService.getTables(resolvedShopId);
    const table =
      tables[0] ??
      this.posService.createTable({
        shopId: resolvedShopId,
        tableName: 'Takeout',
      });

    return this.posService.createTableOrder({
      shopId: resolvedShopId,
      tableId: table.id,
      tableName: table.tableName,
      channel: 'takeaway',
      source: 'odoo_pos',
      fulfillmentStatus: 'draft',
      orderStatus: 'open',
      lines: [],
    });
  }

  @Post('cart/:cartId/items')
  @ApiOperation({ summary: 'Compatibility: Add item to POS cart' })
  addCartItem(
    @Param('cartId') cartId: string,
    @Body() body: { productId?: string; qty?: number; note?: string },
  ) {
    const order = this.posService.getTableOrder(cartId);
    const product = body?.productId
      ? this.posService
          .getCatalog(order.shopId)
          .find(
            (item) => item.id === body.productId || item.sku === body.productId,
          )
      : undefined;

    const result = this.posService.addOrderItem(cartId, {
      menuItemId: product?.id,
      name: product?.name || body?.productId || 'Item',
      quantity: Number(body?.qty || 1),
      unitPrice: Number(product?.unitPrice || 0),
      taxRate: Number(product?.taxRate || 0),
      note: body?.note,
    });

    const createdLine = result.lines[result.lines.length - 1];
    return { ...result, lineId: createdLine?.id };
  }

  @Patch('cart/:cartId/items/:lineId')
  @ApiOperation({ summary: 'Compatibility: Update POS cart item' })
  updateCartItem(
    @Param('cartId') cartId: string,
    @Param('lineId') lineId: string,
    @Body() body: { qty?: number },
  ) {
    const order = this.posService.getTableOrder(cartId);
    const qty = Math.max(1, Number(body?.qty || 1));
    const lines = order.lines.map((line) =>
      line.id === lineId ? { ...line, quantity: qty } : line,
    );
    return this.posService.updateTableOrder({ id: cartId, lines });
  }

  @Delete('cart/:cartId/items/:lineId')
  @ApiOperation({ summary: 'Compatibility: Remove POS cart item' })
  removeCartItem(
    @Param('cartId') cartId: string,
    @Param('lineId') lineId: string,
  ) {
    return this.posService.removeOrderItem(cartId, lineId);
  }

  @Get('customers')
  @ApiOperation({ summary: 'List POS customers' })
  getCustomers(@Query('shopId') shopId: string) {
    return this.posService.getCustomers(shopId);
  }

  @Post('customers')
  @ApiOperation({ summary: 'Create or update POS customer' })
  upsertCustomer(@Body() body: any) {
    return this.posService.upsertCustomer(body || {});
  }

  @Get('kds/queue')
  @ApiOperation({ summary: 'Get KDS queue' })
  getKdsQueue(
    @Query('shopId') shopId: string,
    @Query('station') station?: string,
  ) {
    return this.posService.getKdsQueue(shopId, station);
  }

  @Patch('kds/lines/:lineId/status')
  @ApiOperation({ summary: 'Update KDS line status' })
  updateKdsLineStatus(
    @Param('lineId') lineId: string,
    @Body()
    body: {
      shopId: string;
      status: 'queued' | 'preparing' | 'ready' | 'served';
    },
  ) {
    return this.posService.updateKdsLineStatus(
      body?.shopId,
      lineId,
      body?.status || 'queued',
    );
  }

  @Get('cfd/snapshot')
  @ApiOperation({ summary: 'Get CFD snapshot' })
  getCfdSnapshot(@Query('shopId') shopId: string) {
    return this.posService.getCfdSnapshot(shopId);
  }

  @Patch('settings/number-pad')
  @ApiOperation({ summary: 'Update POS number pad configuration' })
  updateNumberPad(@Body() body: any) {
    return this.posService.updateNumberPad(body || {});
  }

  @Patch('settings/configure-tip')
  @ApiOperation({ summary: 'Update POS tip configuration' })
  updateConfigureTip(@Body() body: any) {
    return this.posService.updateConfigureTip(body || {});
  }

  @Get('tables')
  @ApiOperation({ summary: 'List POS tables' })
  getTables(@Query('shopId') shopId: string) {
    return this.posService.getTables(shopId);
  }

  @Get('tables/all')
  @ApiOperation({ summary: 'List all POS tables' })
  getAllTables(@Query('shopId') shopId: string) {
    return this.posService.getTables(shopId);
  }

  @Post('tables')
  @ApiOperation({ summary: 'Create a POS table' })
  createTable(@Body() body: any) {
    return this.posService.createTable(body || {});
  }

  @Put('tables')
  @ApiOperation({ summary: 'Update a POS table' })
  updateTable(@Body() body: any) {
    return this.posService.updateTable(body || {});
  }

  @Delete('tables')
  @ApiOperation({ summary: 'Delete a POS table' })
  deleteTable(@Body('id') id: string) {
    return this.posService.deleteTable(id);
  }

  @Put('tables/increase-seat')
  @ApiOperation({ summary: 'Increase table seat count' })
  increaseSeat(@Body('id') id: string) {
    return this.posService.increaseSeat(id);
  }

  @Put('tables/decrease-seat')
  @ApiOperation({ summary: 'Decrease table seat count' })
  decreaseSeat(@Body('id') id: string) {
    return this.posService.decreaseSeat(id);
  }

  @Get('table-mode')
  @ApiOperation({ summary: 'Get POS table mode records' })
  getTableMode(@Query('shopId') shopId: string) {
    return this.posService.getTableMode(shopId);
  }

  @Patch('table-mode/update-table-state/:tableNo')
  @ApiOperation({ summary: 'Update table state' })
  updateTableState(
    @Param('tableNo') tableNo: string,
    @Body() body: { shopId: string; orderState: string },
  ) {
    return this.posService.updateTableState(
      body?.shopId,
      tableNo,
      body?.orderState || '',
    );
  }

  @Patch('table-mode/update-guest-seats/:tableNo')
  @ApiOperation({ summary: 'Update guest count and seat layout' })
  updateGuestSeats(
    @Param('tableNo') tableNo: string,
    @Body() body: { shopId: string; guestCount: number; seats: any[] },
  ) {
    return this.posService.updateGuestSeats(
      body?.shopId,
      tableNo,
      body?.guestCount ?? 0,
      body?.seats || [],
    );
  }

  @Get('table-orders')
  @ApiOperation({ summary: 'List table orders' })
  getTableOrders(@Query('shopId') shopId: string) {
    return this.posService.getTableOrders(shopId);
  }

  @Get('orders')
  @ApiOperation({ summary: 'Compatibility: List POS orders' })
  getOrders(@Query('shopId') shopId?: string) {
    return this.posService.getTableOrders(this.resolveShopId(shopId));
  }

  @Get('table-orders/:id')
  @ApiOperation({ summary: 'Get table order details' })
  getTableOrder(@Param('id') id: string) {
    return this.posService.getTableOrder(id);
  }

  @Get('orders/:id')
  @ApiOperation({ summary: 'Compatibility: Get POS order details' })
  getOrder(@Param('id') id: string) {
    return this.posService.getTableOrder(id);
  }

  @Post('table-orders')
  @ApiOperation({ summary: 'Create a table order' })
  createTableOrder(@Body() body: any) {
    return this.posService.createTableOrder(body || {});
  }

  @Put('table-orders')
  @ApiOperation({ summary: 'Update a table order' })
  updateTableOrder(@Body() body: any) {
    return this.posService.updateTableOrder(body || {});
  }

  @Post('table-orders/:id/items')
  @ApiOperation({ summary: 'Add item to table order' })
  addOrderItem(@Param('id') id: string, @Body() body: any) {
    return this.posService.addOrderItem(id, body || {});
  }

  @Delete('table-orders/:id/items/:lineId')
  @ApiOperation({ summary: 'Remove item from table order' })
  removeOrderItem(@Param('id') id: string, @Param('lineId') lineId: string) {
    return this.posService.removeOrderItem(id, lineId);
  }

  @Post('table-orders/:id/payments')
  @ApiOperation({ summary: 'Add payment to table order' })
  addPayment(@Param('id') id: string, @Body() body: any) {
    return this.posService.addPayment(id, body || {});
  }

  @Post('table-orders/:id/assign-customer')
  @ApiOperation({ summary: 'Assign customer to table order' })
  assignOrderCustomer(@Param('id') id: string, @Body() body: any) {
    return this.posService.assignOrderCustomer(id, body || {});
  }

  @Patch('table-orders/:id/fulfillment')
  @ApiOperation({ summary: 'Update order fulfillment status and channel' })
  updateOrderFulfillment(@Param('id') id: string, @Body() body: any) {
    return this.posService.updateOrderFulfillment(id, body || {});
  }

  @Post('table-orders/:id/refunds')
  @ApiOperation({ summary: 'Create order refund' })
  refundOrder(@Param('id') id: string, @Body() body: any) {
    return this.posService.refundOrder(id, body || {});
  }

  @Post('orders/:id/refund')
  @ApiOperation({ summary: 'Compatibility: Create POS order refund' })
  refundOrderCompat(@Param('id') id: string, @Body() body: any) {
    return this.posService.refundOrder(id, body || {});
  }

  @Get('table-orders/:id/receipt')
  @ApiOperation({ summary: 'Get order receipt' })
  getReceipt(@Param('id') id: string) {
    return this.posService.getReceipt(id);
  }

  @Get('orders/:id/receipt')
  @ApiOperation({ summary: 'Compatibility: Get POS receipt' })
  getReceiptCompat(@Param('id') id: string) {
    return this.posService.getReceipt(id);
  }

  @Delete('table-orders')
  @ApiOperation({ summary: 'Delete a table order' })
  deleteTableOrder(@Body('id') id: string) {
    return this.posService.deleteTableOrder(id);
  }

  @Post('shifts/open')
  @ApiOperation({ summary: 'Open POS shift' })
  openShift(@Body() body: any) {
    return this.posService.openShift(body || {});
  }

  @Post('shifts/close')
  @ApiOperation({ summary: 'Close POS shift' })
  closeShift(@Body() body: any) {
    return this.posService.closeShift(body || {});
  }

  @Get('maintenance/devices')
  @ApiOperation({ summary: 'Get POS devices' })
  getMaintenanceDevices(@Query('shopId') shopId: string) {
    return this.posService.getMaintenanceDevices(shopId);
  }

  @Post('maintenance/devices')
  @ApiOperation({ summary: 'Create or update POS device' })
  upsertMaintenanceDevice(@Body() body: any) {
    return this.posService.upsertMaintenanceDevice(body || {});
  }

  @Get('maintenance/incidents')
  @ApiOperation({ summary: 'Get maintenance incidents' })
  getMaintenanceIncidents(
    @Query('shopId') shopId: string,
    @Query('status') status?: string,
  ) {
    return this.posService.getMaintenanceIncidents(shopId, status);
  }

  @Post('maintenance/incidents')
  @ApiOperation({ summary: 'Create maintenance incident' })
  createMaintenanceIncident(@Body() body: any) {
    return this.posService.createMaintenanceIncident(body || {});
  }

  @Patch('maintenance/incidents/:id')
  @ApiOperation({ summary: 'Update maintenance incident' })
  updateMaintenanceIncident(@Param('id') id: string, @Body() body: any) {
    return this.posService.updateMaintenanceIncident(id, body || {});
  }

  @Get('inventory')
  @ApiOperation({ summary: 'Get POS inventory and movements' })
  getInventory(@Query('shopId') shopId: string) {
    return this.posService.getInventory(shopId);
  }

  @Post('inventory/adjust')
  @ApiOperation({ summary: 'Adjust POS inventory quantity' })
  adjustInventory(@Body() body: any) {
    return this.posService.adjustInventory(body || {});
  }

  @Get('analytics/orders')
  @ApiOperation({ summary: 'Get POS order analytics' })
  getOrderAnalytics(
    @Query('shopId') shopId: string,
    @Query('days') days?: string,
  ) {
    return this.posService.getOrderAnalytics(shopId, Number(days || 7));
  }

  @Post('seed/ecommerce-orders')
  @ApiOperation({ summary: 'Seed demo ecommerce orders' })
  seedDemoEcommerceOrders(@Body() body: any) {
    return this.posService.seedDemoEcommerceOrders(body || {});
  }
}
