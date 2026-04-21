import { paths } from 'src/routes/paths';
import type { ICommerceProduct } from 'src/services/commerce-service';

import type { CartLine, LocalOrder } from './commerce-workspace.types';

export function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function cartStorageKey(shopKey: string) {
  return `commerce-cart:${shopKey}`;
}

export function orderStorageKey(shopKey: string) {
  return `commerce-orders:${shopKey}`;
}

export function settingsStorageKey(shopKey: string) {
  return `commerce-settings:${shopKey}`;
}

export function tableStorageKey(shopKey: string) {
  return `commerce-tables:${shopKey}`;
}

export function getBasePrice(product: ICommerceProduct) {
  const variantPrices = product.variants?.map((variant) => variant.priceCents).filter(Boolean) ?? [];
  return variantPrices.length > 0 ? Math.min(...variantPrices) : product.priceCents || 0;
}

export function getInventoryTotal(product: ICommerceProduct) {
  if (product.variants?.length) {
    return product.variants.reduce((sum, variant) => sum + (variant.stock || 0), 0);
  }

  return 0;
}

export function getAvailableStock(product: ICommerceProduct, variantId?: string) {
  if (variantId && product.variants?.length) {
    return product.variants.find((variant) => variant.id === variantId)?.stock || 0;
  }

  if (product.variants?.length) {
    return product.variants.reduce((max, variant) => Math.max(max, variant.stock || 0), 0);
  }

  return 999;
}

export function isProductPurchasable(product: ICommerceProduct, variantId?: string) {
  const activeStatus = !product.status || product.status === 'active';
  return activeStatus && getAvailableStock(product, variantId) > 0;
}

export function buildCartLine(product: ICommerceProduct, quantity = 1, variantId?: string): CartLine {
  const variant = product.variants?.find((item) => item.id === variantId) || product.variants?.[0];
  const effectivePrice = variant?.priceCents ?? product.priceCents ?? 0;

  return {
    id: `${product.id}:${variant?.id || 'base'}`,
    productId: product.id,
    name: product.name,
    quantity,
    unitPriceCents: effectivePrice,
    variantId: variant?.id,
    variantName: variant?.name,
  };
}

export function normalizeOrder(order: any): LocalOrder {
  return {
    id: order.id,
    source: 'server',
    status: order.status || 'pending',
    paymentStatus: order.paymentStatus || 'unpaid',
    totalAmountCents: order.totalAmountCents || 0,
    createdAt: order.createdAt || new Date().toISOString(),
    items: (order.items || []).map((item: any) => ({
      id: item.id || `${order.id}-${item.productId || item.productName}`,
      productId: item.productId || item.product_id || 'unknown',
      productName: item.productName || item.product_name || 'Item',
      quantity: item.quantity || 1,
      unitPriceCents: item.unitPriceCents || item.unit_price_cents || 0,
    })),
    shippingAddress: order.shippingAddress || order.shipping_address || {},
  };
}

export function orderStatusColor(status: string) {
  if (status === 'paid' || status === 'completed' || status === 'delivered') return 'success';
  if (status === 'cancelled' || status === 'failed') return 'error';
  if (status === 'processing' || status === 'pending') return 'warning';
  return 'default';
}

export function inventoryStatus(total: number) {
  if (total <= 0) return { label: 'Out of stock', color: 'error' as const };
  if (total < 10) return { label: 'Low stock', color: 'warning' as const };
  return { label: 'In stock', color: 'success' as const };
}

export function getStorefrontHomeHref(shopPath?: string, shopKey?: string, contactId?: string) {
  return shopPath
    ? paths.public.shop(shopPath, contactId)
    : paths.public.onlineShop(shopKey || 'shop', contactId);
}

export function getProductHref(shopPath: string | undefined, shopKey: string, productId: string) {
  return shopPath
    ? paths.public.productDetail(shopPath, productId)
    : paths.public.onlineShopProductDetail(shopKey, productId);
}
