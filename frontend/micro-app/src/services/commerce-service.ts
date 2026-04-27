import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type ICommerceProduct = {
  id: string;
  name: string;
  sku?: string;
  barcode?: string;
  categoryId?: string;
  categoryName?: string;
  description?: string | null;
  priceCents: number;
  compareAtPriceCents?: number;
  costCents?: number;
  lowStockThreshold?: number;
  photos?: string[];
  tags?: string[];
  status?: string;
  variants?: Array<{
    id: string;
    name: string;
    sku?: string;
    priceCents: number;
    stock: number;
    options: any;
  }>;
  attributes?: Array<{
    id: string;
    name: string;
    values: string[];
  }>;
  modifierGroups?: Array<{
    id: string;
    name: string;
    minSelected: number;
    maxSelected?: number;
    modifiers: Array<{
      id: string;
      name: string;
      priceCents: number;
    }>;
  }>;
};

export type ICommerceCategory = {
  id: string;
  name: string;
  description?: string | null;
  slug?: string | null;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type ICommerceImageAsset = {
  id: string;
  name: string;
  url: string;
  thumbnail?: string | null;
  mimeType?: string | null;
  size?: number | null;
  category?: string | null;
  tags?: string[];
  createdAt?: string;
};

export type ICommerceCoupon = {
  id: string;
  code: string;
  type: 'percent' | 'fixed';
  value: number;
  minOrderCents: number;
  maxUsage?: number | null;
  usedCount: number;
  expiresAt?: string | null;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
};

const normalizeProduct = (item: any): ICommerceProduct => ({
  id: String(item?.id || ''),
  name: String(item?.name || 'Untitled product'),
  sku: item?.sku ? String(item.sku) : undefined,
  barcode: item?.barcode ? String(item.barcode) : undefined,
  categoryId: item?.categoryId ? String(item.categoryId) : undefined,
  categoryName: item?.categoryName ? String(item.categoryName) : undefined,
  description: item?.description ? String(item.description) : null,
  priceCents: Number(item?.priceCents ?? item?.price_cents ?? 0),
  compareAtPriceCents: Number(item?.compareAtPriceCents ?? item?.compare_at_price_cents ?? 0),
  costCents: Number(item?.costCents ?? item?.cost_cents ?? 0),
  lowStockThreshold: Number(item?.lowStockThreshold ?? item?.low_stock_threshold ?? 0),
  photos: Array.isArray(item?.photos) ? item.photos.map((photo: unknown) => String(photo)) : [],
  tags: Array.isArray(item?.tags) ? item.tags.map((tag: unknown) => String(tag)) : [],
  status: item?.status ? String(item.status) : 'draft',
  variants: Array.isArray(item?.variants)
    ? item.variants.map((variant: any) => ({
        id: String(variant?.id || `${item?.id || 'product'}-variant`),
        name: String(variant?.name || 'Variant'),
        sku: variant?.sku ? String(variant.sku) : undefined,
        priceCents: Number(variant?.priceCents ?? variant?.price_cents ?? 0),
        stock: Number(variant?.stock ?? 0),
        options: variant?.options ?? {},
      }))
    : [],
  attributes: Array.isArray(item?.attributes)
    ? item.attributes.map((attribute: any) => ({
        id: String(attribute?.id || `${item?.id || 'product'}-attribute`),
        name: String(attribute?.name || ''),
        values: Array.isArray(attribute?.values)
          ? attribute.values.map((value: unknown) => String(value))
          : [],
      }))
    : [],
  modifierGroups: Array.isArray(item?.modifierGroups)
    ? item.modifierGroups.map((group: any) => ({
        id: String(group?.id || `${item?.id || 'product'}-modifier-group`),
        name: String(group?.name || ''),
        minSelected: Number(group?.minSelected ?? group?.min_selected ?? 0),
        maxSelected:
          group?.maxSelected === null || group?.maxSelected === undefined
            ? undefined
            : Number(group.maxSelected),
        modifiers: Array.isArray(group?.modifiers)
          ? group.modifiers.map((modifier: any) => ({
              id: String(modifier?.id || `${group?.id || 'group'}-modifier`),
              name: String(modifier?.name || ''),
              priceCents: Number(modifier?.priceCents ?? modifier?.price_cents ?? 0),
            }))
          : [],
      }))
    : [],
});

const normalizeCategory = (item: any): ICommerceCategory => ({
  id: String(item?.id || ''),
  name: String(item?.name || 'Untitled category'),
  description: item?.description ? String(item.description) : null,
  slug: item?.slug ? String(item.slug) : null,
  isActive: item?.isActive !== false,
  createdAt: item?.createdAt ? String(item.createdAt) : undefined,
  updatedAt: item?.updatedAt ? String(item.updatedAt) : undefined,
});

const normalizeImageAsset = (item: any): ICommerceImageAsset => ({
  id: String(item?.id || ''),
  name: String(item?.name || 'Untitled image'),
  url: String(item?.url || ''),
  thumbnail: item?.thumbnail ? String(item.thumbnail) : null,
  mimeType: item?.mimeType ? String(item.mimeType) : null,
  size: item?.size === undefined || item?.size === null ? null : Number(item.size),
  category: item?.category ? String(item.category) : null,
  tags: Array.isArray(item?.tags) ? item.tags.map((tag: unknown) => String(tag)) : [],
  createdAt: item?.createdAt ? String(item.createdAt) : undefined,
});

const normalizeCoupon = (item: any): ICommerceCoupon => ({
  id: String(item?.id || ''),
  code: String(item?.code || ''),
  type: item?.type === 'fixed' ? 'fixed' : 'percent',
  value: Number(item?.value ?? 0),
  minOrderCents: Number(item?.minOrderCents ?? item?.min_order_cents ?? 0),
  maxUsage:
    item?.maxUsage === undefined || item?.maxUsage === null ? null : Number(item.maxUsage),
  usedCount: Number(item?.usedCount ?? item?.used_count ?? 0),
  expiresAt: item?.expiresAt ? String(item.expiresAt) : null,
  isActive: item?.isActive !== false,
  createdAt: item?.createdAt ? String(item.createdAt) : undefined,
  updatedAt: item?.updatedAt ? String(item.updatedAt) : undefined,
});

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error(`Unable to read ${file.name}`));
    reader.readAsDataURL(file);
  });

const BEST_EFFORT_AXIOS_CONFIG = { skipGlobalErrorToast: true } as const;

export type ICommerceOrder = {
  id: string;
  totalAmountCents: number;
  status: string;
  paymentStatus: string;
  createdAt?: string;
  shippingAddress?: {
    customerName?: string;
    email?: string;
    phone?: string;
  };
  items?: Array<{
    id: string;
    productName: string;
    quantity: number;
    unitPriceCents: number;
  }>;
};

export const commerceService = {
  // Canonical admin commerce route is /api/magento/*.
  // This client is kept for UI compatibility while Magento is the eCommerce source of truth.
  getProducts: async (orgId?: string) => {
    try {
      const response = await axios.get('/api/magento/products', {
        ...BEST_EFFORT_AXIOS_CONFIG,
        headers: orgId ? { 'X-Org-Id': orgId } : {},
      });
      const rows = Array.isArray(response.data?.data?.items) ? response.data.data.items : [];
      return rows.map((item: any) =>
        normalizeProduct({
          id: item?.id,
          name: item?.name,
          sku: item?.sku,
          description: item?.custom_attributes?.find?.((attr: any) => attr?.attribute_code === 'description')?.value,
          priceCents: Math.round(Number(item?.price ?? 0) * 100),
          status: Number(item?.status) === 1 ? 'active' : 'disabled',
        })
      );
    } catch {
      return [];
    }
  },

  createProduct: async (orgId: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  updateProduct: async (orgId: string, id: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  deleteProduct: async (orgId: string, id: string) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  getOrders: async (orgId?: string) => {
    try {
      const response = await axios.get('/api/magento/orders', {
        ...BEST_EFFORT_AXIOS_CONFIG,
        headers: orgId ? { 'X-Org-Id': orgId } : {},
      });
      const rows = Array.isArray(response.data?.data?.items) ? response.data.data.items : [];
      return rows.map((order: any) => ({
        id: String(order?.entity_id || order?.increment_id || ''),
        totalAmountCents: Math.round(Number(order?.base_grand_total ?? order?.grand_total ?? 0) * 100),
        status: String(order?.status || 'unknown'),
        paymentStatus: String(order?.state || order?.status || 'unknown'),
        createdAt: order?.created_at ? String(order.created_at) : undefined,
        shippingAddress: {
          customerName:
            [order?.customer_firstname, order?.customer_lastname].filter(Boolean).join(' ').trim() || undefined,
          email: order?.customer_email ? String(order.customer_email) : undefined,
          phone: order?.billing_address?.telephone
            ? String(order.billing_address.telephone)
            : undefined,
        },
        items: Array.isArray(order?.items)
          ? order.items.map((item: any) => ({
            id: String(item?.item_id || ''),
            productName: String(item?.name || ''),
            quantity: Number(item?.qty_ordered ?? 0),
              unitPriceCents: Math.round(Number(item?.price ?? 0) * 100),
            }))
          : [],
      }));
    } catch {
      return [];
    }
  },

  createOrder: async (orgId: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  getCategories: async (orgId?: string) => {
    try {
      const response = await axios.post(
        '/api/magento/rest',
        {
          method: 'GET',
          path: '/rest/all/V1/categories',
        },
        {
          ...BEST_EFFORT_AXIOS_CONFIG,
          headers: orgId ? { 'X-Org-Id': orgId } : {},
        }
      );
      const root = response.data?.data ?? {};
      const rows = Array.isArray(root?.children_data) ? root.children_data : [];
      return rows.map((item: any) =>
        normalizeCategory({
          id: item?.id,
          name: item?.name,
          isActive: item?.is_active,
        })
      );
    } catch {
      return [];
    }
  },

  createCategory: async (orgId: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  updateCategory: async (orgId: string, id: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  deleteCategory: async (orgId: string, id: string) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  getCoupons: async (orgId?: string) => {
    return [];
  },

  createCoupon: async (orgId: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  updateCoupon: async (orgId: string, id: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  deleteCoupon: async (orgId: string, id: string) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  getProductImages: async () => {
    const response = await axios.get('/api/image-library');
    const rows = response.data?.data ?? response.data ?? [];
    return Array.isArray(rows)
      ? rows
          .map(normalizeImageAsset)
          .filter((item) => item.category === 'commerce-product' || item.tags?.includes('shop-product'))
      : [];
  },

  uploadProductImage: async (file: File) => {
    const dataUrl = await fileToDataUrl(file);
    const response = await axios.post('/api/image-library', {
      name: file.name,
      url: dataUrl,
      thumbnail: dataUrl,
      mimeType: file.type || 'image/*',
      size: file.size,
      category: 'commerce-product',
      tags: ['shop-product'],
    });
    return normalizeImageAsset(response.data?.data ?? response.data);
  },
};
