import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';

type PosSeat = { seatNo: number };

type PosSettings = {
  shopId: string;
  currency: string;
  taxRate: number;
  serviceChargeRate: number;
  numberPadFirstValue: number;
  numberPadSecondValue: number;
  numberPadThirdValue: number;
  tipPercentages: number[];
  tipEnabled: boolean;
  updatedAt: string;
};

type PosShift = {
  id: string;
  shopId: string;
  name: string;
  state: 'open' | 'closed';
  openedAt: string;
  closedAt: string | null;
  openingCash: number;
  closingCash: number | null;
  expectedCash: number;
};

type PosTable = {
  id: string;
  shopId: string;
  roomId: string | null;
  serverId: string | null;
  tableName: string;
  tableShape: string;
  tableColor: string | null;
  tableDimension: { width: number; length: number; scale: string } | null;
  seats: PosSeat[];
  createdAt: string;
  updatedAt: string;
};

type PosTableMode = {
  id: string;
  shopId: string;
  tableNo: string;
  guestCount: number;
  orderState: string;
  seats: PosSeat[];
  sendTime: string | null;
};

type PosMenuItem = {
  id: string;
  sku: string;
  name: string;
  category: string;
  unitPrice: number;
  taxRate?: number;
  active: boolean;
};

type PosOrderLine = {
  id: string;
  menuItemId: string | null;
  name: string;
  station: 'kitchen' | 'bar' | 'dessert';
  quantity: number;
  unitPrice: number;
  taxRate: number;
  discountAmount: number;
  lineSubtotal: number;
  lineTax: number;
  lineTotal: number;
  prepStatus: 'queued' | 'preparing' | 'ready' | 'served';
  queuedAt: string;
  startedAt: string | null;
  completedAt: string | null;
  note: string | null;
};

type PosOrderPayment = {
  id: string;
  method: 'cash' | 'card' | 'wallet' | 'other';
  amount: number;
  tipAmount: number;
  reference: string | null;
  paidAt: string;
};

type PosTableOrder = {
  id: string;
  shopId: string;
  roomId: string | null;
  tableId: string;
  tableName: string;
  channel: 'dine_in' | 'takeaway' | 'delivery' | 'ecommerce';
  source: 'odoo_pos' | 'magento' | 'manual';
  fulfillmentStatus:
    | 'draft'
    | 'sent_to_kitchen'
    | 'ready_for_pickup'
    | 'out_for_delivery'
    | 'completed';
  customerId: string | null;
  customerName: string | null;
  customerPhone: string | null;
  deliveryAddress: string | null;
  orderStatus: 'open' | 'hold' | 'sent' | 'closed' | 'cancelled' | 'paid';
  seats: PosSeat[];
  lines: PosOrderLine[];
  payments: PosOrderPayment[];
  discountAmount: number;
  tipAmount: number;
  subtotalAmount: number;
  taxAmount: number;
  serviceChargeAmount: number;
  totalAmount: number;
  paidAmount: number;
  balanceDue: number;
  ticketNo: string;
  createdAt: string;
  updatedAt: string;
};

type PosCustomer = {
  id: string;
  shopId: string;
  name: string;
  email: string | null;
  phone: string | null;
  loyaltyPoints: number;
  totalSpend: number;
  totalOrders: number;
  lastOrderAt: string | null;
  createdAt: string;
  updatedAt: string;
};

type PosInventoryItem = {
  id: string;
  shopId: string;
  sku: string;
  name: string;
  category: string;
  unit: string;
  onHand: number;
  reserved: number;
  reorderPoint: number;
  costPerUnit: number;
  updatedAt: string;
};

type PosInventoryMovement = {
  id: string;
  shopId: string;
  inventoryItemId: string;
  sku: string;
  reason: 'sale' | 'refund' | 'waste' | 'manual_adjustment' | 'restock';
  quantityDelta: number;
  orderId: string | null;
  note: string | null;
  createdAt: string;
};

type PosRefund = {
  id: string;
  shopId: string;
  orderId: string;
  amount: number;
  reason: string;
  restocked: boolean;
  createdAt: string;
};

type PosDevice = {
  id: string;
  shopId: string;
  name: string;
  kind:
    | 'pos-terminal'
    | 'kds-screen'
    | 'cfd-screen'
    | 'printer'
    | 'scanner'
    | 'network';
  location: string | null;
  status: 'online' | 'offline' | 'maintenance';
  lastHeartbeatAt: string;
  notes: string | null;
};

type PosMaintenanceIncident = {
  id: string;
  shopId: string;
  deviceId: string | null;
  title: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  description: string | null;
  createdAt: string;
  resolvedAt: string | null;
};

@Injectable()
export class PosService {
  private readonly settingsByShop = new Map<string, PosSettings>();
  private readonly shiftsByShop = new Map<string, PosShift[]>();
  private readonly tablesByShop = new Map<string, PosTable[]>();
  private readonly tableModesByShop = new Map<string, PosTableMode[]>();
  private readonly tableOrdersByShop = new Map<string, PosTableOrder[]>();
  private readonly catalogByShop = new Map<string, PosMenuItem[]>();
  private readonly ticketCounterByShop = new Map<string, number>();
  private readonly devicesByShop = new Map<string, PosDevice[]>();
  private readonly incidentsByShop = new Map<
    string,
    PosMaintenanceIncident[]
  >();
  private readonly customersByShop = new Map<string, PosCustomer[]>();
  private readonly inventoryByShop = new Map<string, PosInventoryItem[]>();
  private readonly inventoryMovementsByShop = new Map<
    string,
    PosInventoryMovement[]
  >();
  private readonly refundsByShop = new Map<string, PosRefund[]>();

  getSettings(shopId: string) {
    this.ensureShop(shopId);
    const settings = this.settingsByShop.get(shopId)!;
    const activeShift = this.getOpenShift(shopId);
    return {
      ...settings,
      activeShift,
      hasOpenShift: Boolean(activeShift),
    };
  }

  getTipShifts(shopId: string) {
    this.ensureShop(shopId);
    return this.shiftsByShop.get(shopId)!;
  }

  getCatalog(shopId: string) {
    this.ensureShop(shopId);
    return this.catalogByShop.get(shopId)!.filter((item) => item.active);
  }

  getCustomers(shopId: string) {
    this.ensureShop(shopId);
    return this.customersByShop.get(shopId)!;
  }

  upsertCustomer(
    input: Partial<PosCustomer> & { shopId?: string; name?: string },
  ) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);

    const customers = this.customersByShop.get(shopId)!;
    if (input.id) {
      const existing = customers.find((customer) => customer.id === input.id);
      if (!existing) throw new NotFoundException('Customer not found');
      if (typeof input.name === 'string' && input.name.trim())
        existing.name = input.name.trim();
      if (typeof input.email === 'string' || input.email === null)
        existing.email = input.email ?? null;
      if (typeof input.phone === 'string' || input.phone === null)
        existing.phone = input.phone ?? null;
      existing.updatedAt = new Date().toISOString();
      return existing;
    }

    if (!input.name?.trim()) throw new BadRequestException('name is required');
    const customer: PosCustomer = {
      id: randomUUID(),
      shopId,
      name: input.name.trim(),
      email: input.email ?? null,
      phone: input.phone ?? null,
      loyaltyPoints: 0,
      totalSpend: 0,
      totalOrders: 0,
      lastOrderAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    customers.unshift(customer);
    return customer;
  }

  assignOrderCustomer(
    orderId: string,
    input: {
      customerId?: string;
      customerName?: string;
      customerPhone?: string;
    },
  ) {
    const { order, shopId } = this.findOrderById(orderId);
    this.ensureShop(shopId);

    if (input.customerId) {
      const customer = this.customersByShop
        .get(shopId)!
        .find((item) => item.id === input.customerId);
      if (!customer) throw new NotFoundException('Customer not found');
      order.customerId = customer.id;
      order.customerName = customer.name;
      order.customerPhone = customer.phone;
    } else {
      order.customerId = null;
      order.customerName = input.customerName?.trim() || null;
      order.customerPhone = input.customerPhone?.trim() || null;
    }

    order.updatedAt = new Date().toISOString();
    return this.withReceipt(order);
  }

  updateOrderFulfillment(
    orderId: string,
    input: {
      fulfillmentStatus?: PosTableOrder['fulfillmentStatus'];
      orderStatus?: PosTableOrder['orderStatus'];
      channel?: PosTableOrder['channel'];
      deliveryAddress?: string | null;
    },
  ) {
    const { order } = this.findOrderById(orderId);

    if (input.fulfillmentStatus)
      order.fulfillmentStatus = this.normalizeFulfillmentStatus(
        input.fulfillmentStatus,
      );
    if (input.orderStatus)
      order.orderStatus = this.normalizeOrderStatus(input.orderStatus);
    if (input.channel) order.channel = this.normalizeChannel(input.channel);
    if (
      typeof input.deliveryAddress === 'string' ||
      input.deliveryAddress === null
    ) {
      order.deliveryAddress = input.deliveryAddress ?? null;
    }
    order.updatedAt = new Date().toISOString();
    return this.withReceipt(order);
  }

  refundOrder(
    orderId: string,
    input: { amount?: number; reason?: string; restock?: boolean },
  ) {
    const { order, shopId } = this.findOrderById(orderId);
    const maxRefundable = this.roundMoney(order.paidAmount);
    if (maxRefundable <= 0)
      throw new BadRequestException('Order has no captured payment to refund');

    const amount = this.roundMoney(Number(input.amount ?? maxRefundable));
    if (!Number.isFinite(amount) || amount <= 0)
      throw new BadRequestException('Refund amount must be greater than zero');
    if (amount > maxRefundable)
      throw new BadRequestException('Refund amount exceeds paid amount');

    const refund: PosRefund = {
      id: randomUUID(),
      shopId,
      orderId,
      amount,
      reason: (input.reason || 'Customer requested refund').trim(),
      restocked: Boolean(input.restock),
      createdAt: new Date().toISOString(),
    };
    this.refundsByShop.get(shopId)!.unshift(refund);

    order.payments.push({
      id: randomUUID(),
      method: 'other',
      amount: this.roundMoney(-amount),
      tipAmount: 0,
      reference: `refund:${refund.id}`,
      paidAt: refund.createdAt,
    });
    if (input.restock) {
      this.restockInventoryFromOrder(shopId, order);
    }
    order.updatedAt = refund.createdAt;
    this.recalculateOrder(shopId, order);
    order.orderStatus = order.balanceDue > 0 ? 'open' : order.orderStatus;
    return { refund, order: this.withReceipt(order) };
  }

  getInventory(shopId: string) {
    this.ensureShop(shopId);
    const inventory = this.inventoryByShop.get(shopId)!;
    const movements = this.inventoryMovementsByShop.get(shopId)!;
    const lowStock = inventory.filter(
      (item) => item.onHand <= item.reorderPoint,
    );
    return { inventory, lowStock, movements: movements.slice(0, 50) };
  }

  adjustInventory(input: {
    shopId?: string;
    inventoryItemId?: string;
    quantityDelta?: number;
    reason?: PosInventoryMovement['reason'];
    note?: string;
    orderId?: string | null;
  }) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);
    if (!input.inventoryItemId)
      throw new BadRequestException('inventoryItemId is required');
    const quantityDelta = Number(input.quantityDelta ?? 0);
    if (!Number.isFinite(quantityDelta) || quantityDelta === 0) {
      throw new BadRequestException('quantityDelta must be non-zero');
    }

    const item = this.inventoryByShop
      .get(shopId)!
      .find((inv) => inv.id === input.inventoryItemId);
    if (!item) throw new NotFoundException('Inventory item not found');

    item.onHand = Math.max(0, this.roundMoney(item.onHand + quantityDelta));
    item.updatedAt = new Date().toISOString();
    const movement: PosInventoryMovement = {
      id: randomUUID(),
      shopId,
      inventoryItemId: item.id,
      sku: item.sku,
      reason: input.reason || 'manual_adjustment',
      quantityDelta: this.roundMoney(quantityDelta),
      orderId: input.orderId ?? null,
      note: input.note || null,
      createdAt: new Date().toISOString(),
    };
    this.inventoryMovementsByShop.get(shopId)!.unshift(movement);
    return { item, movement };
  }

  getOrderAnalytics(shopId: string, days = 7) {
    this.ensureShop(shopId);
    const orders = this.tableOrdersByShop.get(shopId)!;
    const lookbackDays = Math.max(1, Math.min(90, Number(days) || 7));
    const fromTs = Date.now() - lookbackDays * 24 * 60 * 60 * 1000;
    const scoped = orders.filter(
      (order) => new Date(order.createdAt).getTime() >= fromTs,
    );
    const revenue = this.roundMoney(
      scoped.reduce((sum, order) => sum + order.totalAmount, 0),
    );
    const avgTicket = this.roundMoney(
      scoped.length ? revenue / scoped.length : 0,
    );
    const refunds = (this.refundsByShop.get(shopId) || []).filter(
      (refund) => new Date(refund.createdAt).getTime() >= fromTs,
    );

    const byChannel = scoped.reduce(
      (acc, order) => {
        acc[order.channel] = this.roundMoney(
          (acc[order.channel] || 0) + order.totalAmount,
        );
        return acc;
      },
      { dine_in: 0, takeaway: 0, delivery: 0, ecommerce: 0 },
    );

    const topItems = new Map<
      string,
      { name: string; quantity: number; revenue: number }
    >();
    scoped.forEach((order) => {
      order.lines.forEach((line) => {
        const existing = topItems.get(line.name) || {
          name: line.name,
          quantity: 0,
          revenue: 0,
        };
        existing.quantity += line.quantity;
        existing.revenue = this.roundMoney(existing.revenue + line.lineTotal);
        topItems.set(line.name, existing);
      });
    });

    return {
      periodDays: lookbackDays,
      orderCount: scoped.length,
      revenue,
      avgTicket,
      refundAmount: this.roundMoney(
        refunds.reduce((sum, refund) => sum + refund.amount, 0),
      ),
      refundCount: refunds.length,
      byChannel,
      topItems: Array.from(topItems.values())
        .sort((a, b) => b.revenue - a.revenue)
        .slice(0, 5),
    };
  }

  seedDemoEcommerceOrders(input: { shopId?: string; count?: number }) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);
    const tables = this.tablesByShop.get(shopId)!;
    const catalog = this.catalogByShop.get(shopId)!;
    const count = Math.max(1, Math.min(20, Number(input.count) || 5));
    const created: any[] = [];

    for (let i = 0; i < count; i += 1) {
      const baseTable = tables[i % tables.length];
      const itemA = catalog[i % catalog.length];
      const itemB = catalog[(i + 1) % catalog.length];
      const isDelivery = i % 2 === 0;
      const order = this.createTableOrder({
        shopId,
        tableId: baseTable.id,
        tableName: baseTable.tableName,
        channel: isDelivery ? 'delivery' : 'ecommerce',
        source: isDelivery ? 'odoo_pos' : 'magento',
        orderStatus: i % 3 === 0 ? 'sent' : 'open',
        fulfillmentStatus: i % 3 === 0 ? 'ready_for_pickup' : 'sent_to_kitchen',
        customerName: `Walk-in ${i + 1}`,
        customerPhone: `+1-555-010${i}`,
        deliveryAddress: isDelivery ? `${100 + i} Commerce Ave` : null,
        seats: [{ seatNo: 1 }],
        lines: [
          {
            name: itemA?.name || 'Chef Special',
            quantity: 1 + (i % 2),
            unitPrice: itemA?.unitPrice || 12.5,
          },
          {
            name: itemB?.name || 'House Drink',
            quantity: 1,
            unitPrice: itemB?.unitPrice || 5.5,
          },
        ],
      });
      if (i % 4 === 0) {
        this.addPayment(order.id, {
          method: 'card',
          amount: order.totalAmount,
        });
      }
      created.push(order);
    }

    return { createdCount: created.length, orders: created };
  }

  getKdsQueue(shopId: string, station?: string) {
    this.ensureShop(shopId);
    const normalizedStation = station?.trim().toLowerCase();

    const queue = this.tableOrdersByShop
      .get(shopId)!
      .filter((order) => ['open', 'hold', 'sent'].includes(order.orderStatus))
      .flatMap((order) =>
        order.lines.map((line) => ({
          lineId: line.id,
          orderId: order.id,
          ticketNo: order.ticketNo,
          tableName: order.tableName,
          itemName: line.name,
          quantity: line.quantity,
          station: line.station,
          prepStatus: line.prepStatus,
          queuedAt: line.queuedAt,
          startedAt: line.startedAt,
          completedAt: line.completedAt,
          note: line.note,
        })),
      )
      .filter((ticket) =>
        normalizedStation ? ticket.station === normalizedStation : true,
      )
      .sort((a, b) => String(a.queuedAt).localeCompare(String(b.queuedAt)));

    return {
      queue,
      totals: {
        queued: queue.filter((item) => item.prepStatus === 'queued').length,
        preparing: queue.filter((item) => item.prepStatus === 'preparing')
          .length,
        ready: queue.filter((item) => item.prepStatus === 'ready').length,
      },
    };
  }

  updateKdsLineStatus(
    shopId: string,
    lineId: string,
    status: 'queued' | 'preparing' | 'ready' | 'served',
  ) {
    this.ensureShop(shopId);
    const { order, line } = this.findLineById(shopId, lineId);
    const nextStatus = status || 'queued';
    const now = new Date().toISOString();

    line.prepStatus = nextStatus;
    if (nextStatus === 'preparing' && !line.startedAt) line.startedAt = now;
    if (
      (nextStatus === 'ready' || nextStatus === 'served') &&
      !line.completedAt
    )
      line.completedAt = now;
    if (nextStatus === 'queued') {
      line.startedAt = null;
      line.completedAt = null;
    }

    order.updatedAt = now;
    if (nextStatus === 'ready' || nextStatus === 'served') {
      const allReady = order.lines.every(
        (item) => item.prepStatus === 'ready' || item.prepStatus === 'served',
      );
      if (allReady && order.orderStatus === 'open') {
        order.orderStatus = 'sent';
      }
    }

    return this.withReceipt(order);
  }

  getCfdSnapshot(shopId: string) {
    this.ensureShop(shopId);
    const activeOrders = this.tableOrdersByShop
      .get(shopId)!
      .filter(
        (order) => !['cancelled', 'paid', 'closed'].includes(order.orderStatus),
      )
      .map((order) => ({
        orderId: order.id,
        ticketNo: order.ticketNo,
        tableName: order.tableName,
        orderStatus: order.orderStatus,
        itemCount: order.lines.reduce((sum, line) => sum + line.quantity, 0),
        totalAmount: order.totalAmount,
        paidAmount: order.paidAmount,
        balanceDue: order.balanceDue,
        progress:
          order.lines.length === 0
            ? 0
            : Math.round(
                (order.lines.filter(
                  (line) =>
                    line.prepStatus === 'ready' || line.prepStatus === 'served',
                ).length /
                  order.lines.length) *
                  100,
              ),
      }));

    const aggregate = activeOrders.reduce(
      (acc, order) => {
        acc.totalOpenTickets += 1;
        acc.totalDue = this.roundMoney(acc.totalDue + order.balanceDue);
        acc.totalInProgressItems += order.itemCount;
        return acc;
      },
      { totalOpenTickets: 0, totalDue: 0, totalInProgressItems: 0 },
    );

    return {
      now: new Date().toISOString(),
      currency: this.settingsByShop.get(shopId)!.currency,
      aggregate,
      activeOrders,
    };
  }

  getMaintenanceDevices(shopId: string) {
    this.ensureShop(shopId);
    return this.devicesByShop.get(shopId)!;
  }

  upsertMaintenanceDevice(
    input: Partial<PosDevice> & {
      shopId?: string;
      name?: string;
      kind?: PosDevice['kind'];
    },
  ) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);

    const devices = this.devicesByShop.get(shopId)!;
    if (input.id) {
      const existing = devices.find((device) => device.id === input.id);
      if (!existing) throw new NotFoundException('Device not found');
      if (input.name) existing.name = input.name;
      if (input.kind) existing.kind = input.kind;
      if (typeof input.location === 'string' || input.location === null)
        existing.location = input.location ?? null;
      if (input.status) existing.status = input.status;
      if (typeof input.notes === 'string' || input.notes === null)
        existing.notes = input.notes ?? null;
      existing.lastHeartbeatAt = new Date().toISOString();
      return existing;
    }

    if (!input.name?.trim()) throw new BadRequestException('name is required');
    const device: PosDevice = {
      id: randomUUID(),
      shopId,
      name: input.name.trim(),
      kind: input.kind || 'pos-terminal',
      location: input.location ?? null,
      status: input.status || 'online',
      lastHeartbeatAt: new Date().toISOString(),
      notes: input.notes ?? null,
    };
    devices.push(device);
    return device;
  }

  getMaintenanceIncidents(shopId: string, status?: string) {
    this.ensureShop(shopId);
    const incidents = this.incidentsByShop.get(shopId)!;
    if (!status) return incidents;
    const normalized = status.toLowerCase();
    return incidents.filter(
      (incident) => incident.status.toLowerCase() === normalized,
    );
  }

  createMaintenanceIncident(input: {
    shopId?: string;
    deviceId?: string | null;
    title?: string;
    severity?: PosMaintenanceIncident['severity'];
    description?: string;
  }) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);
    if (!input.title?.trim())
      throw new BadRequestException('title is required');

    const incident: PosMaintenanceIncident = {
      id: randomUUID(),
      shopId,
      deviceId: input.deviceId || null,
      title: input.title.trim(),
      severity: input.severity || 'medium',
      status: 'open',
      description: input.description || null,
      createdAt: new Date().toISOString(),
      resolvedAt: null,
    };
    this.incidentsByShop.get(shopId)!.unshift(incident);
    return incident;
  }

  updateMaintenanceIncident(
    id: string,
    input: Partial<PosMaintenanceIncident>,
  ) {
    for (const incidents of this.incidentsByShop.values()) {
      const incident = incidents.find((item) => item.id === id);
      if (!incident) continue;
      if (input.title) incident.title = input.title;
      if (input.severity) incident.severity = input.severity;
      if (input.status) incident.status = input.status;
      if (typeof input.description === 'string' || input.description === null) {
        incident.description = input.description ?? null;
      }
      if (incident.status === 'resolved' || incident.status === 'closed') {
        incident.resolvedAt = incident.resolvedAt || new Date().toISOString();
      }
      return incident;
    }
    throw new NotFoundException('Incident not found');
  }

  updateNumberPad(input: {
    shopId?: string;
    numberPadFirstValue?: number;
    numberPadSecondValue?: number;
    numberPadThirdValue?: number;
    taxRate?: number;
    serviceChargeRate?: number;
  }) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);
    const settings = this.settingsByShop.get(shopId)!;

    if (typeof input.numberPadFirstValue === 'number')
      settings.numberPadFirstValue = Math.max(
        0,
        Math.round(input.numberPadFirstValue),
      );
    if (typeof input.numberPadSecondValue === 'number')
      settings.numberPadSecondValue = Math.max(
        0,
        Math.round(input.numberPadSecondValue),
      );
    if (typeof input.numberPadThirdValue === 'number')
      settings.numberPadThirdValue = Math.max(
        0,
        Math.round(input.numberPadThirdValue),
      );
    if (typeof input.taxRate === 'number')
      settings.taxRate = this.normalizeRate(input.taxRate);
    if (typeof input.serviceChargeRate === 'number')
      settings.serviceChargeRate = this.normalizeRate(input.serviceChargeRate);
    settings.updatedAt = new Date().toISOString();

    this.repriceOrders(shopId);
    return settings;
  }

  updateConfigureTip(input: {
    shopId?: string;
    tipEnabled?: boolean;
    tipPercentages?: number[];
  }) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);
    const settings = this.settingsByShop.get(shopId)!;

    if (typeof input.tipEnabled === 'boolean')
      settings.tipEnabled = input.tipEnabled;
    if (Array.isArray(input.tipPercentages) && input.tipPercentages.length) {
      settings.tipPercentages = input.tipPercentages
        .map((value) => Number(value))
        .filter((value) => Number.isFinite(value) && value >= 0 && value <= 100)
        .slice(0, 5);
    }
    settings.updatedAt = new Date().toISOString();
    return settings;
  }

  getTables(shopId: string) {
    this.ensureShop(shopId);
    return this.tablesByShop.get(shopId)!;
  }

  createTable(
    input: Partial<PosTable> & { shopId?: string; tableName?: string },
  ) {
    const shopId = this.resolveShopId(input.shopId);
    if (!input.tableName?.trim()) {
      throw new BadRequestException('tableName is required');
    }
    this.ensureShop(shopId);

    const now = new Date().toISOString();
    const table: PosTable = {
      id: randomUUID(),
      shopId,
      roomId: input.roomId ?? null,
      serverId: input.serverId ?? null,
      tableName: input.tableName.trim(),
      tableShape: input.tableShape || 'square',
      tableColor: input.tableColor ?? null,
      tableDimension: input.tableDimension ?? {
        width: 1,
        length: 1,
        scale: 'm',
      },
      seats: this.normalizeSeats(input.seats, 4),
      createdAt: now,
      updatedAt: now,
    };

    const tables = this.tablesByShop.get(shopId)!;
    tables.push(table);
    this.tableModesByShop.get(shopId)!.push({
      id: randomUUID(),
      shopId,
      tableNo: table.tableName,
      guestCount: 0,
      orderState: '',
      seats: table.seats,
      sendTime: null,
    });

    return table;
  }

  updateTable(input: Partial<PosTable> & { id?: string }) {
    if (!input.id) throw new BadRequestException('id is required');
    const { table, shopId } = this.findTableById(input.id);
    const previousTableName = table.tableName;

    if (typeof input.tableName === 'string' && input.tableName.trim())
      table.tableName = input.tableName.trim();
    if (typeof input.tableShape === 'string' && input.tableShape.trim())
      table.tableShape = input.tableShape.trim();
    if (typeof input.tableColor === 'string')
      table.tableColor = input.tableColor;
    if (typeof input.roomId === 'string' || input.roomId === null)
      table.roomId = input.roomId ?? null;
    if (Array.isArray(input.seats))
      table.seats = this.normalizeSeats(input.seats, table.seats.length || 4);
    table.updatedAt = new Date().toISOString();

    const mode = this.findModeByTableNo(shopId, previousTableName);
    mode.tableNo = table.tableName;
    mode.seats = table.seats;

    const orders = this.tableOrdersByShop.get(shopId)!;
    orders.forEach((order) => {
      if (order.tableId === table.id) {
        order.tableName = table.tableName;
        order.seats = table.seats;
        order.updatedAt = new Date().toISOString();
      }
    });

    return table;
  }

  deleteTable(id: string) {
    const { shopId } = this.findTableById(id);
    const tables = this.tablesByShop.get(shopId)!;
    const nextTables = tables.filter((item) => item.id !== id);
    this.tablesByShop.set(shopId, nextTables);

    const nextModes = this.tableModesByShop.get(shopId)!.filter((item) => {
      const table = nextTables.find(
        (t) => t.tableName.toLowerCase() === item.tableNo.toLowerCase(),
      );
      return Boolean(table);
    });
    this.tableModesByShop.set(shopId, nextModes);

    const nextOrders = this.tableOrdersByShop
      .get(shopId)!
      .filter((item) => item.tableId !== id);
    this.tableOrdersByShop.set(shopId, nextOrders);

    return { deleted: true, id };
  }

  increaseSeat(id: string) {
    const { table } = this.findTableById(id);
    const nextSeatNo = (table.seats[table.seats.length - 1]?.seatNo || 0) + 1;
    table.seats = [...table.seats, { seatNo: nextSeatNo }];
    table.updatedAt = new Date().toISOString();
    this.syncModeSeats(table.shopId, table.tableName, table.seats);
    return table;
  }

  decreaseSeat(id: string) {
    const { table } = this.findTableById(id);
    if (table.seats.length > 1)
      table.seats = table.seats.slice(0, table.seats.length - 1);
    table.updatedAt = new Date().toISOString();
    this.syncModeSeats(table.shopId, table.tableName, table.seats);
    return table;
  }

  getTableMode(shopId: string) {
    this.ensureShop(shopId);
    return this.tableModesByShop.get(shopId)!;
  }

  updateTableState(shopId: string, tableNo: string, orderState: string) {
    this.ensureShop(shopId);
    const mode = this.findModeByTableNo(shopId, tableNo);
    mode.orderState = orderState || '';
    mode.sendTime = mode.orderState ? new Date().toISOString() : null;
    return mode;
  }

  updateGuestSeats(
    shopId: string,
    tableNo: string,
    guestCount: number,
    seats: PosSeat[],
  ) {
    this.ensureShop(shopId);
    const mode = this.findModeByTableNo(shopId, tableNo);
    mode.guestCount = Math.max(0, Number(guestCount) || 0);
    mode.seats = this.normalizeSeats(
      seats,
      mode.guestCount || mode.seats.length || 1,
    );
    return mode;
  }

  getTableOrders(shopId: string) {
    this.ensureShop(shopId);
    return this.tableOrdersByShop
      .get(shopId)!
      .map((order) => this.withReceipt(order));
  }

  getTableOrder(orderId: string) {
    const { order } = this.findOrderById(orderId);
    return this.withReceipt(order);
  }

  createTableOrder(
    input: Partial<Omit<PosTableOrder, 'lines'>> & {
      shopId?: string;
      tableId?: string;
      tableName?: string;
      lines?: any[];
      customerName?: string | null;
      customerPhone?: string | null;
    },
  ) {
    const shopId = this.resolveShopId(input.shopId);
    if (!input.tableId) throw new BadRequestException('tableId is required');
    this.ensureShop(shopId);

    const table = this.tablesByShop
      .get(shopId)!
      .find((item) => item.id === input.tableId);
    if (!table) throw new NotFoundException('Table not found');

    const now = new Date().toISOString();
    const ticketNo = this.nextTicketNo(shopId);
    const lines = this.normalizeIncomingLines(shopId, input.lines || []);

    const order: PosTableOrder = {
      id: randomUUID(),
      shopId,
      roomId: input.roomId ?? table.roomId ?? null,
      tableId: input.tableId,
      tableName: input.tableName || table.tableName,
      channel: this.normalizeChannel(input.channel),
      source: this.normalizeSource(input.source),
      fulfillmentStatus: this.normalizeFulfillmentStatus(
        input.fulfillmentStatus,
      ),
      customerId: input.customerId || null,
      customerName: input.customerName?.trim() || null,
      customerPhone: input.customerPhone?.trim() || null,
      deliveryAddress: input.deliveryAddress || null,
      orderStatus: this.normalizeOrderStatus(input.orderStatus),
      seats: this.normalizeSeats(input.seats, table.seats.length || 1),
      lines,
      payments: [],
      discountAmount: Number(input.discountAmount || 0),
      tipAmount: Number(input.tipAmount || 0),
      subtotalAmount: 0,
      taxAmount: 0,
      serviceChargeAmount: 0,
      totalAmount: 0,
      paidAmount: 0,
      balanceDue: 0,
      ticketNo,
      createdAt: now,
      updatedAt: now,
    };

    this.recalculateOrder(shopId, order);
    this.tableOrdersByShop.get(shopId)!.push(order);
    return this.withReceipt(order);
  }

  updateTableOrder(
    input: Partial<PosTableOrder> & { id?: string; lines?: any[] },
  ) {
    if (!input.id) throw new BadRequestException('id is required');
    const { order, shopId } = this.findOrderById(input.id);

    if (typeof input.tableName === 'string' && input.tableName.trim())
      order.tableName = input.tableName.trim();
    if (typeof input.orderStatus === 'string')
      order.orderStatus = this.normalizeOrderStatus(input.orderStatus);
    if (typeof input.channel === 'string')
      order.channel = this.normalizeChannel(input.channel);
    if (typeof input.source === 'string')
      order.source = this.normalizeSource(input.source);
    if (typeof input.fulfillmentStatus === 'string') {
      order.fulfillmentStatus = this.normalizeFulfillmentStatus(
        input.fulfillmentStatus,
      );
    }
    if (typeof input.customerName === 'string' || input.customerName === null) {
      order.customerName = input.customerName?.trim() || null;
    }
    if (
      typeof input.customerPhone === 'string' ||
      input.customerPhone === null
    ) {
      order.customerPhone = input.customerPhone?.trim() || null;
    }
    if (
      typeof input.deliveryAddress === 'string' ||
      input.deliveryAddress === null
    ) {
      order.deliveryAddress = input.deliveryAddress?.trim() || null;
    }
    if (Array.isArray(input.seats))
      order.seats = this.normalizeSeats(input.seats, order.seats.length || 1);
    if (Array.isArray(input.lines))
      order.lines = this.normalizeIncomingLines(shopId, input.lines);
    if (typeof input.discountAmount === 'number')
      order.discountAmount = Math.max(0, Number(input.discountAmount) || 0);
    if (typeof input.tipAmount === 'number')
      order.tipAmount = Math.max(0, Number(input.tipAmount) || 0);
    order.updatedAt = new Date().toISOString();

    this.recalculateOrder(shopId, order);
    return this.withReceipt(order);
  }

  addOrderItem(
    orderId: string,
    payload: {
      menuItemId?: string;
      name?: string;
      quantity?: number;
      unitPrice?: number;
      taxRate?: number;
      note?: string;
      discountAmount?: number;
    },
  ) {
    const { order, shopId } = this.findOrderById(orderId);
    const settings = this.settingsByShop.get(shopId)!;
    const quantity = Math.max(1, Number(payload.quantity) || 1);
    const discountAmount = Math.max(0, Number(payload.discountAmount) || 0);
    const menuItem = payload.menuItemId
      ? this.catalogByShop
          .get(shopId)!
          .find((item) => item.id === payload.menuItemId)
      : undefined;

    const itemName = payload.name || menuItem?.name;
    if (!itemName)
      throw new BadRequestException('name or menuItemId is required');

    const unitPrice = Number(payload.unitPrice ?? menuItem?.unitPrice ?? 0);
    if (!Number.isFinite(unitPrice) || unitPrice < 0) {
      throw new BadRequestException('unitPrice must be a non-negative number');
    }

    const taxRate = this.normalizeRate(
      payload.taxRate ?? menuItem?.taxRate ?? settings.taxRate,
    );
    const lineSubtotal = this.roundMoney(unitPrice * quantity);
    const lineTax = this.roundMoney((lineSubtotal - discountAmount) * taxRate);
    const lineTotal = this.roundMoney(lineSubtotal - discountAmount + lineTax);

    const line: PosOrderLine = {
      id: randomUUID(),
      menuItemId: menuItem?.id || null,
      name: itemName,
      station: this.deriveStation(itemName),
      quantity,
      unitPrice: this.roundMoney(unitPrice),
      taxRate,
      discountAmount: this.roundMoney(discountAmount),
      lineSubtotal,
      lineTax,
      lineTotal,
      prepStatus: 'queued',
      queuedAt: new Date().toISOString(),
      startedAt: null,
      completedAt: null,
      note: payload.note || null,
    };

    order.lines.push(line);
    order.updatedAt = new Date().toISOString();
    this.recalculateOrder(shopId, order);
    return this.withReceipt(order);
  }

  removeOrderItem(orderId: string, lineId: string) {
    const { order, shopId } = this.findOrderById(orderId);
    const nextLines = order.lines.filter((line) => line.id !== lineId);
    if (nextLines.length === order.lines.length) {
      throw new NotFoundException('Order line not found');
    }
    order.lines = nextLines;
    order.updatedAt = new Date().toISOString();
    this.recalculateOrder(shopId, order);
    return this.withReceipt(order);
  }

  addPayment(
    orderId: string,
    payload: {
      method?: 'cash' | 'card' | 'wallet' | 'other';
      amount?: number;
      tipAmount?: number;
      reference?: string;
    },
  ) {
    const { order, shopId } = this.findOrderById(orderId);
    const amount = Number(payload.amount ?? 0);
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new BadRequestException('Payment amount must be greater than zero');
    }

    const method = payload.method || 'cash';
    const tipAmount = Math.max(0, Number(payload.tipAmount || 0));
    const payment: PosOrderPayment = {
      id: randomUUID(),
      method,
      amount: this.roundMoney(amount),
      tipAmount: this.roundMoney(tipAmount),
      reference: payload.reference || null,
      paidAt: new Date().toISOString(),
    };

    order.payments.push(payment);
    order.tipAmount = this.roundMoney(order.tipAmount + tipAmount);
    order.updatedAt = new Date().toISOString();
    this.recalculateOrder(shopId, order);

    if (order.balanceDue <= 0 && order.orderStatus !== 'cancelled') {
      const wasCompleted = order.fulfillmentStatus === 'completed';
      order.orderStatus = 'paid';
      order.fulfillmentStatus = 'completed';
      order.lines = order.lines.map((line) => ({
        ...line,
        prepStatus: 'served',
        completedAt: line.completedAt || new Date().toISOString(),
      }));
      this.syncTableStateByOrder(order, 'paid');
      if (!wasCompleted) this.consumeInventoryFromOrder(shopId, order, 'sale');
    }

    this.updateCustomerStatsFromOrder(order);
    return this.withReceipt(order);
  }

  deleteTableOrder(id: string) {
    const { shopId } = this.findOrderById(id);
    const nextOrders = this.tableOrdersByShop
      .get(shopId)!
      .filter((item) => item.id !== id);
    this.tableOrdersByShop.set(shopId, nextOrders);
    return { deleted: true, id };
  }

  openShift(input: { shopId?: string; name?: string; openingCash?: number }) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);
    const openShift = this.getOpenShift(shopId);
    if (openShift) return openShift;

    const shift: PosShift = {
      id: randomUUID(),
      shopId,
      name: input.name?.trim() || 'General Shift',
      state: 'open',
      openedAt: new Date().toISOString(),
      closedAt: null,
      openingCash: this.roundMoney(Number(input.openingCash || 0)),
      closingCash: null,
      expectedCash: 0,
    };
    this.shiftsByShop.get(shopId)!.unshift(shift);
    return shift;
  }

  closeShift(input: {
    shopId?: string;
    shiftId?: string;
    closingCash?: number;
  }) {
    const shopId = this.resolveShopId(input.shopId);
    this.ensureShop(shopId);

    const shifts = this.shiftsByShop.get(shopId)!;
    const shift = input.shiftId
      ? shifts.find((item) => item.id === input.shiftId)
      : this.getOpenShift(shopId);
    if (!shift) {
      throw new NotFoundException('Open shift not found');
    }
    if (shift.state === 'closed') {
      return shift;
    }

    const cashPayments = this.tableOrdersByShop
      .get(shopId)!
      .flatMap((order) => order.payments)
      .filter((payment) => payment.method === 'cash')
      .reduce((sum, payment) => sum + payment.amount, 0);

    shift.expectedCash = this.roundMoney(shift.openingCash + cashPayments);
    shift.closingCash = this.roundMoney(
      Number(input.closingCash ?? shift.expectedCash),
    );
    shift.closedAt = new Date().toISOString();
    shift.state = 'closed';

    return shift;
  }

  getReceipt(orderId: string) {
    const { order } = this.findOrderById(orderId);
    const enriched = this.withReceipt(order);
    return enriched.receipt;
  }

  private ensureShop(shopId: string) {
    if (this.settingsByShop.has(shopId)) return;

    const now = new Date().toISOString();
    this.settingsByShop.set(shopId, {
      shopId,
      currency: 'USD',
      taxRate: 0.0825,
      serviceChargeRate: 0,
      numberPadFirstValue: 10,
      numberPadSecondValue: 20,
      numberPadThirdValue: 50,
      tipPercentages: [10, 15, 20],
      tipEnabled: true,
      updatedAt: now,
    });

    this.shiftsByShop.set(shopId, [
      {
        id: randomUUID(),
        shopId,
        name: 'Default Shift',
        state: 'open',
        openedAt: now,
        closedAt: null,
        openingCash: 200,
        closingCash: null,
        expectedCash: 200,
      },
    ]);

    const tables: PosTable[] = [
      this.makeSeedTable(shopId, 'Table 1', 'Main Floor', '#22c55e'),
      this.makeSeedTable(shopId, 'Table 2', 'Main Floor', '#14b8a6'),
      this.makeSeedTable(shopId, 'Table 3', 'Patio', '#f59e0b'),
      this.makeSeedTable(shopId, 'Bar 1', 'Bar', '#6366f1'),
    ];
    this.tablesByShop.set(shopId, tables);

    this.tableModesByShop.set(
      shopId,
      tables.map((table) => ({
        id: randomUUID(),
        shopId,
        tableNo: table.tableName,
        guestCount: 0,
        orderState: '',
        seats: table.seats,
        sendTime: null,
      })),
    );

    this.catalogByShop.set(shopId, [
      {
        id: randomUUID(),
        sku: 'APP-BRUS-001',
        name: 'Bruschetta',
        category: 'Appetizer',
        unitPrice: 9.5,
        taxRate: 0.0825,
        active: true,
      },
      {
        id: randomUUID(),
        sku: 'MAIN-SALM-010',
        name: 'Grilled Salmon',
        category: 'Main',
        unitPrice: 24.0,
        taxRate: 0.0825,
        active: true,
      },
      {
        id: randomUUID(),
        sku: 'MAIN-PAST-011',
        name: 'Truffle Pasta',
        category: 'Main',
        unitPrice: 21.0,
        taxRate: 0.0825,
        active: true,
      },
      {
        id: randomUUID(),
        sku: 'BVG-LATT-021',
        name: 'Iced Latte',
        category: 'Beverage',
        unitPrice: 6.0,
        taxRate: 0.0825,
        active: true,
      },
      {
        id: randomUUID(),
        sku: 'DSRT-CAKE-031',
        name: 'Cheesecake Slice',
        category: 'Dessert',
        unitPrice: 8.0,
        taxRate: 0.0825,
        active: true,
      },
    ]);

    this.ticketCounterByShop.set(shopId, 1000);

    const nowIso = new Date().toISOString();
    const makeLine = (
      name: string,
      quantity: number,
      unitPrice: number,
      prepStatus: 'queued' | 'preparing' | 'ready' | 'served',
      station: 'kitchen' | 'bar' | 'dessert',
      minutesAgo: number,
    ): PosOrderLine => {
      const queuedAt = new Date(Date.now() - minutesAgo * 60_000).toISOString();
      const lineSubtotal = this.roundMoney(quantity * unitPrice);
      const lineTax = this.roundMoney(lineSubtotal * 0.0825);
      const lineTotal = this.roundMoney(lineSubtotal + lineTax);
      return {
        id: randomUUID(),
        menuItemId: null,
        name,
        station,
        quantity,
        unitPrice,
        taxRate: 0.0825,
        discountAmount: 0,
        lineSubtotal,
        lineTax,
        lineTotal,
        prepStatus,
        queuedAt,
        startedAt:
          prepStatus === 'preparing' ||
          prepStatus === 'ready' ||
          prepStatus === 'served'
            ? queuedAt
            : null,
        completedAt:
          prepStatus === 'ready' || prepStatus === 'served' ? queuedAt : null,
        note: null,
      };
    };

    const seedOrders: PosTableOrder[] = [
      {
        id: randomUUID(),
        shopId,
        roomId: tables[0]?.roomId ?? null,
        tableId: tables[0]?.id ?? randomUUID(),
        tableName: tables[0]?.tableName ?? 'Table 1',
        channel: 'dine_in',
        source: 'odoo_pos',
        fulfillmentStatus: 'sent_to_kitchen',
        customerId: null,
        customerName: 'Alex Carter',
        customerPhone: '+1-555-0101',
        deliveryAddress: null,
        orderStatus: 'open',
        seats: [{ seatNo: 1 }, { seatNo: 2 }],
        lines: [
          makeLine('Grilled Salmon', 2, 24, 'preparing', 'kitchen', 14),
          makeLine('Truffle Pasta', 1, 21, 'queued', 'kitchen', 8),
        ],
        payments: [],
        discountAmount: 0,
        tipAmount: 0,
        subtotalAmount: 0,
        taxAmount: 0,
        serviceChargeAmount: 0,
        totalAmount: 0,
        paidAmount: 0,
        balanceDue: 0,
        ticketNo: this.nextTicketNo(shopId),
        createdAt: nowIso,
        updatedAt: nowIso,
      },
      {
        id: randomUUID(),
        shopId,
        roomId: tables[1]?.roomId ?? null,
        tableId: tables[1]?.id ?? randomUUID(),
        tableName: tables[1]?.tableName ?? 'Table 2',
        channel: 'takeaway',
        source: 'odoo_pos',
        fulfillmentStatus: 'ready_for_pickup',
        customerId: null,
        customerName: 'Taylor Nguyen',
        customerPhone: '+1-555-0102',
        deliveryAddress: null,
        orderStatus: 'sent',
        seats: [{ seatNo: 1 }],
        lines: [
          makeLine('Bruschetta', 1, 9.5, 'ready', 'kitchen', 22),
          makeLine('Iced Latte', 2, 6, 'ready', 'bar', 18),
        ],
        payments: [],
        discountAmount: 0,
        tipAmount: 0,
        subtotalAmount: 0,
        taxAmount: 0,
        serviceChargeAmount: 0,
        totalAmount: 0,
        paidAmount: 0,
        balanceDue: 0,
        ticketNo: this.nextTicketNo(shopId),
        createdAt: nowIso,
        updatedAt: nowIso,
      },
      {
        id: randomUUID(),
        shopId,
        roomId: tables[3]?.roomId ?? null,
        tableId: tables[3]?.id ?? randomUUID(),
        tableName: tables[3]?.tableName ?? 'Bar 1',
        channel: 'ecommerce',
        source: 'magento',
        fulfillmentStatus: 'completed',
        customerId: null,
        customerName: 'Jordan Lee',
        customerPhone: '+1-555-0103',
        deliveryAddress: null,
        orderStatus: 'paid',
        seats: [{ seatNo: 1 }],
        lines: [makeLine('Cheesecake Slice', 1, 8, 'served', 'dessert', 30)],
        payments: [],
        discountAmount: 0,
        tipAmount: 2,
        subtotalAmount: 0,
        taxAmount: 0,
        serviceChargeAmount: 0,
        totalAmount: 0,
        paidAmount: 0,
        balanceDue: 0,
        ticketNo: this.nextTicketNo(shopId),
        createdAt: nowIso,
        updatedAt: nowIso,
      },
    ];

    seedOrders.forEach((order) => this.recalculateOrder(shopId, order));

    seedOrders[2].payments = [
      {
        id: randomUUID(),
        method: 'card',
        amount: seedOrders[2].totalAmount,
        tipAmount: seedOrders[2].tipAmount,
        reference: 'seed-payment',
        paidAt: nowIso,
      },
    ];
    this.recalculateOrder(shopId, seedOrders[2]);

    this.tableOrdersByShop.set(shopId, seedOrders);

    this.customersByShop.set(shopId, [
      {
        id: randomUUID(),
        shopId,
        name: 'Alex Carter',
        email: 'alex.carter@example.com',
        phone: '+1-555-0101',
        loyaltyPoints: 180,
        totalSpend: 450.2,
        totalOrders: 14,
        lastOrderAt: nowIso,
        createdAt: nowIso,
        updatedAt: nowIso,
      },
      {
        id: randomUUID(),
        shopId,
        name: 'Taylor Nguyen',
        email: 'taylor.nguyen@example.com',
        phone: '+1-555-0102',
        loyaltyPoints: 90,
        totalSpend: 205.75,
        totalOrders: 7,
        lastOrderAt: nowIso,
        createdAt: nowIso,
        updatedAt: nowIso,
      },
    ]);

    this.inventoryByShop.set(shopId, [
      {
        id: randomUUID(),
        shopId,
        sku: 'RAW-SALMON-001',
        name: 'Fresh Salmon Portion',
        category: 'Protein',
        unit: 'pcs',
        onHand: 36,
        reserved: 0,
        reorderPoint: 12,
        costPerUnit: 7.2,
        updatedAt: nowIso,
      },
      {
        id: randomUUID(),
        shopId,
        sku: 'RAW-PASTA-010',
        name: 'Fresh Pasta Pack',
        category: 'Pantry',
        unit: 'pack',
        onHand: 28,
        reserved: 0,
        reorderPoint: 10,
        costPerUnit: 2.9,
        updatedAt: nowIso,
      },
      {
        id: randomUUID(),
        shopId,
        sku: 'RAW-COFFEE-021',
        name: 'Coffee Beans 1kg',
        category: 'Beverage',
        unit: 'bag',
        onHand: 5,
        reserved: 0,
        reorderPoint: 6,
        costPerUnit: 14,
        updatedAt: nowIso,
      },
      {
        id: randomUUID(),
        shopId,
        sku: 'RAW-CAKE-031',
        name: 'Cheesecake Base',
        category: 'Dessert',
        unit: 'tray',
        onHand: 8,
        reserved: 0,
        reorderPoint: 4,
        costPerUnit: 9.5,
        updatedAt: nowIso,
      },
    ]);
    this.inventoryMovementsByShop.set(shopId, []);
    this.refundsByShop.set(shopId, []);

    const modes = this.tableModesByShop.get(shopId)!;
    const table1Mode = modes.find(
      (item) =>
        item.tableNo.toLowerCase() ===
        (tables[0]?.tableName || '').toLowerCase(),
    );
    if (table1Mode) {
      table1Mode.guestCount = 2;
      table1Mode.orderState = 'stay';
      table1Mode.sendTime = nowIso;
    }
    const table2Mode = modes.find(
      (item) =>
        item.tableNo.toLowerCase() ===
        (tables[1]?.tableName || '').toLowerCase(),
    );
    if (table2Mode) {
      table2Mode.guestCount = 1;
      table2Mode.orderState = 'send';
      table2Mode.sendTime = nowIso;
    }
    this.devicesByShop.set(shopId, [
      {
        id: randomUUID(),
        shopId,
        name: 'Front POS Terminal',
        kind: 'pos-terminal',
        location: 'Front Counter',
        status: 'online',
        lastHeartbeatAt: now,
        notes: null,
      },
      {
        id: randomUUID(),
        shopId,
        name: 'Kitchen Screen 1',
        kind: 'kds-screen',
        location: 'Hot Kitchen',
        status: 'online',
        lastHeartbeatAt: now,
        notes: null,
      },
    ]);
    this.incidentsByShop.set(shopId, []);
  }

  private makeSeedTable(
    shopId: string,
    tableName: string,
    roomId: string,
    color: string,
  ): PosTable {
    const now = new Date().toISOString();
    return {
      id: randomUUID(),
      shopId,
      roomId,
      serverId: null,
      tableName,
      tableShape: 'square',
      tableColor: color,
      tableDimension: { width: 1, length: 1, scale: 'm' },
      seats: this.normalizeSeats([], 4),
      createdAt: now,
      updatedAt: now,
    };
  }

  private resolveShopId(shopId?: string) {
    if (!shopId || !shopId.trim()) {
      throw new BadRequestException('shopId is required');
    }
    return shopId.trim();
  }

  private normalizeSeats(input: any, fallbackSize = 1): PosSeat[] {
    if (Array.isArray(input) && input.length) {
      return input.map((seat, index) => ({
        seatNo: Number(seat?.seatNo) || index + 1,
      }));
    }
    return Array.from(
      { length: Math.max(1, fallbackSize) },
      (_value, index) => ({ seatNo: index + 1 }),
    );
  }

  private normalizeRate(value: number) {
    const normalized = Number(value);
    if (!Number.isFinite(normalized)) return 0;
    if (normalized > 1) return Math.min(1, normalized / 100);
    return Math.max(0, normalized);
  }

  private normalizeIncomingLines(shopId: string, lines: any[]) {
    return lines.map((line) => {
      const quantity = Math.max(1, Number(line?.quantity) || 1);
      const unitPrice = Math.max(0, Number(line?.unitPrice) || 0);
      const discountAmount = Math.max(0, Number(line?.discountAmount) || 0);
      const settings = this.settingsByShop.get(shopId)!;
      const taxRate = this.normalizeRate(line?.taxRate ?? settings.taxRate);
      const lineSubtotal = this.roundMoney(unitPrice * quantity);
      const lineTax = this.roundMoney(
        (lineSubtotal - discountAmount) * taxRate,
      );
      const lineTotal = this.roundMoney(
        lineSubtotal - discountAmount + lineTax,
      );

      return {
        id: line?.id || randomUUID(),
        menuItemId: line?.menuItemId || null,
        name: String(line?.name || 'Custom Item'),
        station:
          line?.station ||
          this.deriveStation(String(line?.name || 'Custom Item')),
        quantity,
        unitPrice: this.roundMoney(unitPrice),
        taxRate,
        discountAmount: this.roundMoney(discountAmount),
        lineSubtotal,
        lineTax,
        lineTotal,
        prepStatus: line?.prepStatus || 'queued',
        queuedAt: line?.queuedAt || new Date().toISOString(),
        startedAt: line?.startedAt || null,
        completedAt: line?.completedAt || null,
        note: line?.note ? String(line.note) : null,
      } satisfies PosOrderLine;
    });
  }

  private deriveStation(itemName: string): PosOrderLine['station'] {
    const normalized = itemName.toLowerCase();
    if (
      normalized.includes('latte') ||
      normalized.includes('coffee') ||
      normalized.includes('tea') ||
      normalized.includes('cocktail')
    ) {
      return 'bar';
    }
    if (
      normalized.includes('cake') ||
      normalized.includes('dessert') ||
      normalized.includes('ice cream')
    ) {
      return 'dessert';
    }
    return 'kitchen';
  }

  private roundMoney(value: number) {
    return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
  }

  private nextTicketNo(shopId: string) {
    const current = this.ticketCounterByShop.get(shopId) || 1000;
    const next = current + 1;
    this.ticketCounterByShop.set(shopId, next);
    return `T-${next}`;
  }

  private recalculateOrder(shopId: string, order: PosTableOrder) {
    const settings = this.settingsByShop.get(shopId)!;
    const subtotalAmount = this.roundMoney(
      order.lines.reduce((sum, line) => sum + line.lineSubtotal, 0),
    );
    const linesDiscount = this.roundMoney(
      order.lines.reduce((sum, line) => sum + line.discountAmount, 0),
    );
    const orderDiscount = this.roundMoney(order.discountAmount || 0);
    const discountAmount = this.roundMoney(linesDiscount + orderDiscount);
    const taxableBase = this.roundMoney(
      Math.max(0, subtotalAmount - discountAmount),
    );
    const taxAmount = this.roundMoney(
      order.lines.reduce((sum, line) => sum + line.lineTax, 0),
    );
    const serviceChargeAmount = this.roundMoney(
      taxableBase * settings.serviceChargeRate,
    );
    const tipAmount = this.roundMoney(order.tipAmount || 0);
    const totalAmount = this.roundMoney(
      taxableBase + taxAmount + serviceChargeAmount + tipAmount,
    );
    const paidAmount = this.roundMoney(
      order.payments.reduce((sum, payment) => sum + payment.amount, 0),
    );
    const balanceDue = this.roundMoney(Math.max(0, totalAmount - paidAmount));

    order.subtotalAmount = subtotalAmount;
    order.discountAmount = discountAmount;
    order.taxAmount = taxAmount;
    order.serviceChargeAmount = serviceChargeAmount;
    order.tipAmount = tipAmount;
    order.totalAmount = totalAmount;
    order.paidAmount = paidAmount;
    order.balanceDue = balanceDue;
  }

  private withReceipt(order: PosTableOrder) {
    const settings = this.settingsByShop.get(order.shopId)!;
    const receipt = {
      ticketNo: order.ticketNo,
      tableName: order.tableName,
      currency: settings.currency,
      createdAt: order.createdAt,
      closedAt:
        order.orderStatus === 'paid' || order.orderStatus === 'closed'
          ? order.updatedAt
          : null,
      lines: order.lines.map((line) => ({
        name: line.name,
        quantity: line.quantity,
        unitPrice: line.unitPrice,
        total: line.lineTotal,
      })),
      summary: {
        subtotalAmount: order.subtotalAmount,
        discountAmount: order.discountAmount,
        taxAmount: order.taxAmount,
        serviceChargeAmount: order.serviceChargeAmount,
        tipAmount: order.tipAmount,
        totalAmount: order.totalAmount,
        paidAmount: order.paidAmount,
        balanceDue: order.balanceDue,
      },
      payments: order.payments,
    };

    return {
      ...order,
      receipt,
    };
  }

  private repriceOrders(shopId: string) {
    const orders = this.tableOrdersByShop.get(shopId) || [];
    orders.forEach((order) => this.recalculateOrder(shopId, order));
  }

  private normalizeChannel(channel: unknown): PosTableOrder['channel'] {
    const normalized = String(channel || 'dine_in')
      .toLowerCase()
      .trim();
    if (normalized === 'takeaway' || normalized === 'take_away')
      return 'takeaway';
    if (normalized === 'delivery') return 'delivery';
    if (normalized === 'ecommerce' || normalized === 'online')
      return 'ecommerce';
    return 'dine_in';
  }

  private normalizeSource(source: unknown): PosTableOrder['source'] {
    const normalized = String(source || 'odoo_pos')
      .toLowerCase()
      .trim();
    if (normalized === 'magento') return 'magento';
    if (normalized === 'manual') return 'manual';
    return 'odoo_pos';
  }

  private normalizeFulfillmentStatus(
    status: unknown,
  ): PosTableOrder['fulfillmentStatus'] {
    const normalized = String(status || 'draft')
      .toLowerCase()
      .trim();
    if (normalized === 'sent_to_kitchen' || normalized === 'in_kitchen')
      return 'sent_to_kitchen';
    if (normalized === 'ready_for_pickup' || normalized === 'ready')
      return 'ready_for_pickup';
    if (normalized === 'out_for_delivery' || normalized === 'delivery')
      return 'out_for_delivery';
    if (normalized === 'completed' || normalized === 'done') return 'completed';
    return 'draft';
  }

  private updateCustomerStatsFromOrder(order: PosTableOrder) {
    const customers = this.customersByShop.get(order.shopId) || [];
    const customer =
      (order.customerId
        ? customers.find((item) => item.id === order.customerId)
        : null) ||
      (order.customerPhone
        ? customers.find((item) => item.phone === order.customerPhone)
        : null) ||
      null;
    if (!customer) return;
    customer.totalOrders += 1;
    customer.totalSpend = this.roundMoney(
      customer.totalSpend + order.totalAmount,
    );
    customer.loyaltyPoints += Math.max(1, Math.floor(order.totalAmount / 5));
    customer.lastOrderAt = new Date().toISOString();
    customer.updatedAt = customer.lastOrderAt;
  }

  private consumeInventoryFromOrder(
    shopId: string,
    order: PosTableOrder,
    reason: PosInventoryMovement['reason'],
  ) {
    const inventory = this.inventoryByShop.get(shopId) || [];
    const movementLog = this.inventoryMovementsByShop.get(shopId) || [];

    order.lines.forEach((line) => {
      const matchedItem = this.findInventoryItemForLine(inventory, line.name);
      if (!matchedItem) return;
      matchedItem.onHand = Math.max(
        0,
        this.roundMoney(matchedItem.onHand - line.quantity),
      );
      matchedItem.updatedAt = new Date().toISOString();
      movementLog.unshift({
        id: randomUUID(),
        shopId,
        inventoryItemId: matchedItem.id,
        sku: matchedItem.sku,
        reason,
        quantityDelta: this.roundMoney(-line.quantity),
        orderId: order.id,
        note: `Auto-consume for ${line.name}`,
        createdAt: new Date().toISOString(),
      });
    });
  }

  private restockInventoryFromOrder(shopId: string, order: PosTableOrder) {
    const inventory = this.inventoryByShop.get(shopId) || [];
    const movementLog = this.inventoryMovementsByShop.get(shopId) || [];

    order.lines.forEach((line) => {
      const matchedItem = this.findInventoryItemForLine(inventory, line.name);
      if (!matchedItem) return;
      matchedItem.onHand = this.roundMoney(matchedItem.onHand + line.quantity);
      matchedItem.updatedAt = new Date().toISOString();
      movementLog.unshift({
        id: randomUUID(),
        shopId,
        inventoryItemId: matchedItem.id,
        sku: matchedItem.sku,
        reason: 'refund',
        quantityDelta: this.roundMoney(line.quantity),
        orderId: order.id,
        note: `Auto-restock for ${line.name}`,
        createdAt: new Date().toISOString(),
      });
    });
  }

  private findInventoryItemForLine(
    inventory: PosInventoryItem[],
    lineName: string,
  ) {
    const normalizedLine = lineName.toLowerCase();
    return (
      inventory.find((item) =>
        normalizedLine.includes(item.name.toLowerCase().split(' ')[0]),
      ) ||
      inventory.find((item) =>
        normalizedLine.includes(item.category.toLowerCase()),
      )
    );
  }

  private normalizeOrderStatus(status: unknown): PosTableOrder['orderStatus'] {
    const normalized = String(status || 'open').toLowerCase();
    if (normalized === 'hold') return 'hold';
    if (normalized === 'sent') return 'sent';
    if (normalized === 'closed') return 'closed';
    if (normalized === 'cancelled' || normalized === 'canceled')
      return 'cancelled';
    if (normalized === 'paid') return 'paid';
    return 'open';
  }

  private syncTableStateByOrder(order: PosTableOrder, orderState: string) {
    const mode = this.findModeByTableNo(order.shopId, order.tableName);
    mode.orderState = orderState;
    mode.sendTime = new Date().toISOString();
  }

  private getOpenShift(shopId: string) {
    const shifts = this.shiftsByShop.get(shopId) || [];
    return shifts.find((item) => item.state === 'open') || null;
  }

  private findTableById(id: string): { shopId: string; table: PosTable } {
    for (const [shopId, tables] of this.tablesByShop.entries()) {
      const table = tables.find((item) => item.id === id);
      if (table) return { shopId, table };
    }
    throw new NotFoundException('Table not found');
  }

  private findOrderById(id: string): { shopId: string; order: PosTableOrder } {
    for (const [shopId, orders] of this.tableOrdersByShop.entries()) {
      const order = orders.find((item) => item.id === id);
      if (order) return { shopId, order };
    }
    throw new NotFoundException('Table order not found');
  }

  private findModeByTableNo(shopId: string, tableNo: string): PosTableMode {
    const normalizedTableNo = tableNo.toLowerCase().trim();
    const mode = this.tableModesByShop
      .get(shopId)!
      .find((item) => item.tableNo.toLowerCase() === normalizedTableNo);
    if (!mode) throw new NotFoundException('Table mode not found');
    return mode;
  }

  private syncModeSeats(shopId: string, tableNo: string, seats: PosSeat[]) {
    const modes = this.tableModesByShop.get(shopId) || [];
    const mode = modes.find(
      (item) => item.tableNo.toLowerCase() === tableNo.toLowerCase(),
    );
    if (mode) mode.seats = seats;
  }

  private findLineById(
    shopId: string,
    lineId: string,
  ): { order: PosTableOrder; line: PosOrderLine } {
    const orders = this.tableOrdersByShop.get(shopId) || [];
    for (const order of orders) {
      const line = order.lines.find((item) => item.id === lineId);
      if (line) return { order, line };
    }
    throw new NotFoundException('KDS line not found');
  }
}
