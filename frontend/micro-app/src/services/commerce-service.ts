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

export type ICommerceProductPage = {
  items: ICommerceProduct[];
  total: number;
  currentPage: number;
  pageSize: number;
};

export type ICommerceInventoryItem = {
  id: string;
  productId?: string;
  productName: string;
  locationId?: string;
  locationName: string;
  quantity: number;
  reservedQuantity: number;
  availableQuantity: number;
  sourceCode: string;
  updatedAt?: string;
};

export type ICommerceInventoryPage = {
  items: ICommerceInventoryItem[];
  total: number;
  currentPage: number;
  pageSize: number;
};

export type ICommerceInventoryLocation = {
  id: string;
  name: string;
  fullName: string;
  usage?: string;
  active?: boolean;
};

export type IPosCheckoutInput = {
  email: string;
  firstname: string;
  lastname: string;
  telephone: string;
  street: string;
  city: string;
  region: string;
  postcode: string;
  countryId: string;
  items: Array<{ sku: string; qty: number }>;
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

const parseCategoryIds = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map((v) => String(v));
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((v) => v.trim())
      .filter(Boolean);
  }
  return [];
};

const pickPrimaryStock = (data: any): number => {
  if (Array.isArray(data?.variants) && data.variants.length > 0) {
    const stock = Number(data.variants[0]?.stock ?? 0);
    if (Number.isFinite(stock)) return Math.max(0, stock);
  }
  const threshold = Number(data?.lowStockThreshold ?? 0);
  return Number.isFinite(threshold) ? Math.max(0, threshold) : 0;
};

const pickInventorySourceCode = (data: any): string => {
  const code = String(data?.inventorySourceCode ?? 'default').trim();
  return code || 'default';
};

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error(`Unable to read ${file.name}`));
    reader.readAsDataURL(file);
  });

const dataUrlToBase64 = (dataUrl: string): string => {
  const commaIndex = dataUrl.indexOf(',');
  if (commaIndex === -1) return dataUrl;
  return dataUrl.slice(commaIndex + 1);
};

const isDataUrl = (value: string): boolean => /^data:[^;]+;base64,/.test(value);

const detectMimeFromDataUrl = (value: string): string => {
  const match = value.match(/^data:([^;]+);base64,/);
  return match?.[1] || 'image/jpeg';
};

const buildMediaEntriesFromPhotos = (photos: unknown): any[] => {
  if (!Array.isArray(photos)) return [];
  return photos
    .map((raw, index) => String(raw || ''))
    .filter((url) => isDataUrl(url))
    .map((url, index) => ({
      media_type: 'image',
      label: `Image ${index + 1}`,
      position: index + 1,
      disabled: false,
      types: index === 0 ? ['image', 'small_image', 'thumbnail'] : [],
      content: {
        base64_encoded_data: dataUrlToBase64(url),
        type: detectMimeFromDataUrl(url),
        name: `product-${Date.now()}-${index + 1}.jpg`,
      },
    }));
};

const flattenMagentoCategories = (nodes: any[]): ICommerceCategory[] => {
  const out: ICommerceCategory[] = [];
  const walk = (list: any[]) => {
    list.forEach((node) => {
      out.push(
        normalizeCategory({
          id: node?.id,
          name: node?.name,
          isActive: node?.is_active,
        })
      );
      if (Array.isArray(node?.children_data) && node.children_data.length > 0) {
        walk(node.children_data);
      }
    });
  };
  walk(nodes);
  return out;
};

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
  // Canonical admin commerce route is /api/odoo/*.
  // This client is kept for UI compatibility while Odoo is the source of truth.
  getProductsPage: async (orgId?: string, params?: { currentPage?: number; pageSize?: number; search?: string }): Promise<ICommerceProductPage> => {
    const response = await axios.get('/api/odoo/products', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
      params: {
        page: params?.currentPage ?? 1,
        pageSize: params?.pageSize ?? 20,
        search: params?.search ?? '',
      },
    });
    const rows = Array.isArray(response.data?.data) ? response.data.data : [];

    const items = rows.map((item: any) => {
      const sku = String(item?.default_code || '');
      const id = String(item?.id || sku);
      const priceCents = Math.round(Number(item?.list_price ?? 0) * 100);
      const stock = Number(item?.qty_available ?? 0);
      return normalizeProduct({
        id,
        name: item?.name,
        sku,
        barcode: item?.barcode,
        priceCents,
        costCents: Math.round(Number(item?.standard_price ?? 0) * 100),
        status: 'active',
        variants: [
          {
            id: `${id}-default`,
            name: 'Default',
            sku,
            priceCents,
            stock,
            options: {},
          },
        ],
      });
    });
    return {
      items,
      total: Number(response.data?.total ?? items.length),
      currentPage: Number(params?.currentPage ?? 1),
      pageSize: Number(params?.pageSize ?? 20),
    };
  },

  getProducts: async (orgId?: string) => {
    const page = await commerceService.getProductsPage(orgId, { currentPage: 1, pageSize: 200 });
    return page.items;
  },

  createProduct: async (orgId: string, data: any) => {
    const payload = {
      name: String(data?.name || '').trim(),
      default_code: String(data?.sku || '').trim() || undefined,
      list_price: Number(data?.priceCents ?? 0) / 100,
      standard_price: Number(data?.costCents ?? 0) / 100,
      barcode: data?.barcode ? String(data.barcode).trim() : undefined,
      type: 'product',
    };

    const response = await axios.post('/api/odoo/products', payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  updateProduct: async (orgId: string, id: string, data: any) => {
    const productId = Number(id);
    if (!Number.isFinite(productId)) {
      throw new Error('Odoo product id is required to update a product.');
    }
    const payload = {
      name: String(data?.name || '').trim(),
      default_code: String(data?.sku || '').trim() || undefined,
      list_price: Number(data?.priceCents ?? 0) / 100,
      standard_price: Number(data?.costCents ?? 0) / 100,
      barcode: data?.barcode ? String(data.barcode).trim() : undefined,
    };

    const response = await axios.put(`/api/odoo/products/${productId}`, payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  deleteProduct: async (orgId: string, id: string) => {
    const productId = Number(id);
    if (!Number.isFinite(productId)) {
      throw new Error('Odoo product id is required to delete a product.');
    }

    const response = await axios.delete(`/api/odoo/products/${productId}`, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  bulkUpdateProductStatus: async (orgId: string, ids: string[], status: 'active' | 'archived' | 'draft') => {
    // Odoo adapter does not expose a dedicated status field; preserve call compatibility.
    return { success: true, count: ids.length, status };
  },

  updateProductInventory: async (orgId: string, sku: string, quantity: number, sourceCode = 'default') => {
    const qty = Number.isFinite(quantity) ? Math.max(0, quantity) : 0;
    const lookup = await axios.get('/api/odoo/products', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
      params: { page: 1, pageSize: 1, search: sku },
    });
    const rows = Array.isArray(lookup.data?.data) ? lookup.data.data : [];
    const product = rows.find((item: any) => String(item?.default_code || '').toLowerCase() === String(sku).toLowerCase()) || rows[0];
    const productId = Number(product?.id);
    if (!Number.isFinite(productId)) {
      throw new Error(`Unable to find Odoo product for SKU "${sku}".`);
    }
    await axios.put(`/api/odoo/products/${productId}`, { qty_available: qty }, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return { success: true };
  },

  getInventoryPage: async (
    orgId?: string,
    params?: { currentPage?: number; pageSize?: number; search?: string }
  ): Promise<ICommerceInventoryPage> => {
    const response = await axios.get('/api/odoo/inventory', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
      params: {
        page: params?.currentPage ?? 1,
        pageSize: params?.pageSize ?? 20,
        search: params?.search ?? '',
      },
    });
    const rows = Array.isArray(response.data?.data) ? response.data.data : [];
    const items = rows.map((item: any) => {
      const productId = Array.isArray(item?.product_id) ? String(item.product_id?.[0] || '') : '';
      const productName = Array.isArray(item?.product_id) ? String(item.product_id?.[1] || 'Unknown product') : 'Unknown product';
      const locationId = Array.isArray(item?.location_id) ? String(item.location_id?.[0] || '') : '';
      const locationName = Array.isArray(item?.location_id) ? String(item.location_id?.[1] || 'Unknown location') : 'Unknown location';
      const quantity = Number(item?.quantity ?? 0);
      const reservedQuantity = Number(item?.reserved_quantity ?? 0);
      const availableQuantity = Number(
        item?.available_quantity ?? quantity - reservedQuantity
      );
      return {
        id: String(item?.id || ''),
        productId,
        productName,
        locationId,
        locationName,
        quantity,
        reservedQuantity,
        availableQuantity,
        sourceCode: locationName.toLowerCase().replace(/\s+/g, '_') || 'default',
        updatedAt: item?.write_date ? String(item.write_date) : undefined,
      } as ICommerceInventoryItem;
    });
    return {
      items,
      total: Number(response.data?.total ?? items.length),
      currentPage: Number(params?.currentPage ?? 1),
      pageSize: Number(params?.pageSize ?? 20),
    };
  },

  getInventoryLocations: async (
    orgId?: string,
    params?: { currentPage?: number; pageSize?: number; search?: string }
  ): Promise<ICommerceInventoryLocation[]> => {
    const response = await axios.get('/api/odoo/inventory/locations', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
      params: {
        page: params?.currentPage ?? 1,
        pageSize: params?.pageSize ?? 200,
        search: params?.search ?? '',
      },
    });
    const rows = Array.isArray(response.data?.data) ? response.data.data : [];
    return rows.map((item: any) => ({
      id: String(item?.id || ''),
      name: String(item?.name || 'Unknown'),
      fullName: String(item?.complete_name || item?.name || 'Unknown'),
      usage: item?.usage ? String(item.usage) : undefined,
      active: item?.active !== false,
    }));
  },

  updateInventory: async (orgId: string, id: string, data: { quantity: number }) => {
    const inventoryId = Number(id);
    if (!Number.isFinite(inventoryId)) {
      throw new Error('Odoo inventory id is required to update inventory.');
    }
    const payload = {
      quantity: Number.isFinite(data?.quantity) ? Math.max(0, Number(data.quantity)) : 0,
    };
    const response = await axios.put(`/api/odoo/inventory/${inventoryId}`, payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  createInventory: async (
    orgId: string,
    data: { productId: number; locationId: number; quantity: number; reservedQuantity?: number }
  ) => {
    const payload = {
      product_id: Number(data?.productId),
      location_id: Number(data?.locationId),
      quantity: Number.isFinite(data?.quantity) ? Math.max(0, Number(data.quantity)) : 0,
      reserved_quantity: Number.isFinite(data?.reservedQuantity)
        ? Math.max(0, Number(data.reservedQuantity))
        : 0,
    };
    if (!Number.isFinite(payload.product_id) || !Number.isFinite(payload.location_id)) {
      throw new Error('productId and locationId are required to create inventory.');
    }
    const response = await axios.post('/api/odoo/inventory', payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  deleteInventory: async (orgId: string, id: string) => {
    const inventoryId = Number(id);
    if (!Number.isFinite(inventoryId)) {
      throw new Error('Odoo inventory id is required to delete inventory.');
    }
    const response = await axios.delete(`/api/odoo/inventory/${inventoryId}`, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  getOrders: async (orgId?: string) => {
    const response = await axios.get('/api/odoo/sales-orders', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    const rows = Array.isArray(response.data?.data) ? response.data.data : [];
    return rows.map((order: any) => ({
      id: String(order?.id || ''),
      totalAmountCents: Math.round(Number(order?.amount_total ?? 0) * 100),
      status: String(order?.state || 'unknown'),
      paymentStatus: String(order?.invoice_status || order?.state || 'unknown'),
      createdAt: order?.date_order ? String(order.date_order) : undefined,
      shippingAddress: {
        customerName: Array.isArray(order?.partner_id) ? String(order.partner_id?.[1] || '') : undefined,
      },
      items: Array.isArray(order?.order_line)
        ? order.order_line.map((item: any) => ({
          id: String(item?.item_id || ''),
          productName: Array.isArray(item?.product_id) ? String(item.product_id?.[1] || '') : String(item?.name || ''),
          quantity: Number(item?.product_uom_qty ?? 0),
          unitPriceCents: Math.round(Number(item?.price_unit ?? 0) * 100),
          }))
        : [],
    }));
  },

  createOrder: async (orgId: string, data: any) => {
    const partnerId = Number(data?.partner_id ?? data?.partnerId);
    const orderLine = Array.isArray(data?.order_line) ? data.order_line : Array.isArray(data?.orderLine) ? data.orderLine : [];
    if (!Number.isFinite(partnerId)) {
      throw new Error('partner_id is required to create Odoo sales order.');
    }
    if (orderLine.length === 0) {
      throw new Error('order_line is required to create Odoo sales order.');
    }
    const payload = {
      partner_id: partnerId,
      order_line: orderLine.map((line: any) => ({
        product_id: Number(line?.product_id ?? line?.productId),
        product_uom_qty: Math.max(1, Math.round(Number(line?.product_uom_qty ?? line?.qty ?? 1))),
        price_unit: Math.round(Number(line?.price_unit ?? line?.unitPrice ?? 0)),
      })),
    };
    const response = await axios.post('/api/odoo/sales-orders', payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    const orderId = String(response.data?.data ?? response.data ?? '').trim();
    return { orderId };
  },

  updateOrder: async (orgId: string, id: string, data: { status?: string; paymentStatus?: string }) => {
    const orderId = Number(id);
    if (!Number.isFinite(orderId)) {
      throw new Error('Odoo sales order id is required to update an order.');
    }
    const payload: Record<string, any> = {};
    if (data?.status) payload.state = data.status;
    if (data?.paymentStatus) payload.invoice_status = data.paymentStatus;
    const response = await axios.put(`/api/odoo/sales-orders/${orderId}`, payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  createPosOrderFromCart: async (orgId: string, input: IPosCheckoutInput) => {
    const headers = orgId ? { 'X-Org-Id': orgId } : {};
    const fullName = `${input.firstname || ''} ${input.lastname || ''}`.trim() || input.email || 'Walk-in Customer';

    const contactsRes = await axios.get('/api/odoo/contacts', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers,
      params: { page: 1, pageSize: 20, search: input.email || fullName },
    });
    const contactRows = Array.isArray(contactsRes.data?.data)
      ? contactsRes.data.data
      : Array.isArray(contactsRes.data)
        ? contactsRes.data
        : [];
    let partnerId = Number(
      contactRows.find((c: any) => input.email && String(c?.email || '').toLowerCase() === String(input.email).toLowerCase())?.id
      || contactRows[0]?.id
    );

    if (!Number.isFinite(partnerId)) {
      const createContactRes = await axios.post(
        '/api/odoo/contacts',
        {
          name: fullName,
          email: input.email,
          phone: input.telephone,
          street: input.street,
          city: input.city,
          zip: input.postcode,
          country: input.countryId,
        },
        { ...BEST_EFFORT_AXIOS_CONFIG, headers }
      );
      partnerId = Number(createContactRes.data?.data ?? createContactRes.data);
    }

    if (!Number.isFinite(partnerId)) {
      throw new Error('Unable to resolve Odoo customer for checkout.');
    }

    const validItems = (Array.isArray(input.items) ? input.items : []).filter(
      (line) => Boolean(line?.sku) && Number(line?.qty) > 0
    );
    if (validItems.length === 0) {
      throw new Error('No valid line items provided for checkout.');
    }

    const orderLines = await Promise.all(
      validItems.map(async (line) => {
        const productRes = await axios.get('/api/odoo/products', {
          ...BEST_EFFORT_AXIOS_CONFIG,
          headers,
          params: { page: 1, pageSize: 20, search: line.sku },
        });
        const productRows = Array.isArray(productRes.data?.data) ? productRes.data.data : [];
        const product =
          productRows.find((p: any) => String(p?.default_code || '').toLowerCase() === String(line.sku).toLowerCase())
          || productRows[0];
        const productId = Number(product?.id);
        if (!Number.isFinite(productId)) {
          throw new Error(`Unable to find Odoo product for SKU "${line.sku}".`);
        }
        return {
          product_id: productId,
          product_uom_qty: Math.max(1, Math.round(Number(line.qty))),
          price_unit: Math.round(Number(product?.list_price ?? 0)),
        };
      })
    );

    const createOrderRes = await axios.post(
      '/api/odoo/sales-orders',
      {
        partner_id: partnerId,
        order_line: orderLines,
      },
      { ...BEST_EFFORT_AXIOS_CONFIG, headers }
    );
    const orderId = String(createOrderRes.data?.data ?? createOrderRes.data ?? '').trim();
    if (!orderId) {
      throw new Error('Odoo order creation failed.');
    }
    return { orderId };
  },

  getCategories: async (orgId?: string) => {
    const response = await axios.get('/api/odoo/categories', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
      params: { page: 1, pageSize: 200 },
    });
    const rows = Array.isArray(response.data?.data) ? response.data.data : [];
    return rows.map((item: any) =>
      normalizeCategory({
        id: String(item?.id || ''),
        name: String(item?.name || item?.complete_name || 'Untitled category'),
        description: item?.complete_name ? String(item.complete_name) : null,
        isActive: true,
        updatedAt: item?.write_date ? String(item.write_date) : undefined,
      })
    );
  },

  createCategory: async (orgId: string, data: any) => {
    const payload = {
      name: String(data?.name || '').trim(),
    };
    const response = await axios.post('/api/odoo/categories', payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  updateCategory: async (orgId: string, id: string, data: any) => {
    const categoryId = Number(id);
    if (!Number.isFinite(categoryId)) {
      throw new Error('Odoo category id is required to update a category.');
    }
    const payload = {
      name: String(data?.name || '').trim(),
    };
    const response = await axios.put(`/api/odoo/categories/${categoryId}`, payload, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  deleteCategory: async (orgId: string, id: string) => {
    const categoryId = Number(id);
    if (!Number.isFinite(categoryId)) {
      throw new Error('Odoo category id is required to delete a category.');
    }
    const response = await axios.delete(`/api/odoo/categories/${categoryId}`, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  getCoupons: async (orgId?: string) => [],

  createCoupon: async (orgId: string, data: any) => {
    throw new Error('Coupon endpoints are not implemented for Odoo shop yet.');
  },

  updateCoupon: async (orgId: string, id: string, data: any) => {
    throw new Error('Coupon endpoints are not implemented for Odoo shop yet.');
  },

  deleteCoupon: async (orgId: string, id: string) => {
    throw new Error('Coupon endpoints are not implemented for Odoo shop yet.');
  },

  getProductImages: async () => {
    try {
      const response = await axios.get('/api/image-library?category=commerce-product&limit=200', {
        ...BEST_EFFORT_AXIOS_CONFIG,
      } as any);
      const rows = response.data?.data ?? response.data ?? [];
      return Array.isArray(rows)
        ? rows
            .map(normalizeImageAsset)
            .filter((item) => item.category === 'commerce-product' || item.tags?.includes('shop-product'))
        : [];
    } catch {
      return [];
    }
  },

  uploadProductImage: async (file: File, opts?: { sku?: string; orgId?: string }) => {
    const dataUrl = await fileToDataUrl(file);

    try {
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
    } catch {
      return normalizeImageAsset({
        id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: file.name,
        url: dataUrl,
        thumbnail: dataUrl,
        mimeType: file.type || 'image/*',
        size: file.size,
        category: 'commerce-product',
        tags: ['shop-product', 'local-fallback'],
        createdAt: new Date().toISOString(),
      });
    }
  },
};
