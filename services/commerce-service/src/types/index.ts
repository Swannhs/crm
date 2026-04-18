export interface IProduct {
  id: string;
  orgId: string;
  name: string;
  description?: string | null;
  priceCents: number;
  photos: string[];
  status: 'draft' | 'active' | 'archived';
  metadata: any;
}

export interface IOrder {
  id: string;
  orgId: string;
  userId: string;
  contactId?: string | null;
  totalAmountCents: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'unpaid' | 'paid' | 'refunded';
  shippingAddress: any;
  items: IOrderItem[];
  metadata: any;
}

export interface IOrderItem {
  id: string;
  orderId: string;
  productId: string;
  productName: string;
  quantity: number;
  unitPriceCents: number;
}

export interface ICoupon {
  id: string;
  orgId: string;
  code: string;
  type: 'fixed' | 'percent';
  value: number;
  minOrderCents: number;
  maxUsage?: number | null;
  usedCount: number;
  expiresAt?: Date | null;
  isActive: boolean;
}
