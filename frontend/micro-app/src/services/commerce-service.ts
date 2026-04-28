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
  // Canonical admin commerce route is /api/magento/*.
  // This client is kept for UI compatibility while Magento is the eCommerce source of truth.
  getProductsPage: async (orgId?: string, params?: { currentPage?: number; pageSize?: number; search?: string }): Promise<ICommerceProductPage> => {
    const categories = await commerceService.getCategories(orgId);
    const categoryMap = new Map(categories.map((cat) => [String(cat.id), cat.name]));
    const response = await axios.get('/api/magento/products', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
      params: {
        currentPage: params?.currentPage ?? 1,
        pageSize: params?.pageSize ?? 20,
        search: params?.search ?? '',
      },
    });
    const rows = Array.isArray(response.data?.data?.items) ? response.data.data.items : [];
    const readCustomAttr = (item: any, code: string) =>
      item?.custom_attributes?.find?.((attr: any) => attr?.attribute_code === code)?.value;

    const items = rows.map((item: any) => {
      const categoryAttr = item?.custom_attributes?.find?.((attr: any) => attr?.attribute_code === 'category_ids')?.value;
      const categoryIds = parseCategoryIds(categoryAttr);
      const firstCategoryId = categoryIds[0];
      return normalizeProduct({
        id: item?.sku || item?.id,
        name: item?.name,
        sku: item?.sku,
        description: readCustomAttr(item, 'description'),
        categoryId: firstCategoryId,
        categoryName: firstCategoryId ? categoryMap.get(String(firstCategoryId)) : undefined,
        priceCents: Math.round(Number(item?.price ?? 0) * 100),
        status: Number(item?.status) === 1 ? 'active' : 'archived',
        variants: [
          {
            id: `${item?.sku || item?.id}-default`,
            name: 'Default',
            sku: item?.sku,
            priceCents: Math.round(Number(item?.price ?? 0) * 100),
            stock: Number(item?.extension_attributes?.stock_item?.qty ?? 0),
            options: {},
          },
        ],
      });
    });
    return {
      items,
      total: Number(response.data?.data?.total_count ?? items.length),
      currentPage: Number(params?.currentPage ?? 1),
      pageSize: Number(params?.pageSize ?? 20),
    };
  },

  getProducts: async (orgId?: string) => {
    const page = await commerceService.getProductsPage(orgId, { currentPage: 1, pageSize: 200 });
    return page.items;
  },

  createProduct: async (orgId: string, data: any) => {
    const sku = String(data?.sku || '').trim();
    if (!sku) {
      throw new Error('SKU is required to create a Magento product.');
    }

    const categoryIds = parseCategoryIds(data?.categoryId);
    const qty = pickPrimaryStock(data);
    const sourceCode = pickInventorySourceCode(data);
    const payload = {
      product: {
        sku,
        name: String(data?.name || sku),
        attribute_set_id: 4,
        price: Number(data?.priceCents ?? 0) / 100,
        status: data?.status === 'active' ? 1 : 2,
        visibility: 4,
        type_id: 'simple',
        weight: 1,
        extension_attributes: {
          stock_item: {
            qty,
            is_in_stock: qty > 0,
          },
        },
        custom_attributes: [
          { attribute_code: 'description', value: String(data?.description || '') },
          { attribute_code: 'category_ids', value: categoryIds },
        ],
        media_gallery_entries: buildMediaEntriesFromPhotos(data?.photos),
      },
    };

    const response = await axios.post('/api/magento/rest/all/V1/products', { payload }, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });

    // Best effort MSI source-level stock initialization.
    try {
      await axios.post(
        '/api/magento/rest/all/V1/inventory/source-items',
        {
          payload: {
            sourceItems: [
              {
                sku,
                source_code: sourceCode,
                quantity: qty,
                status: qty > 0 ? 1 : 0,
              },
            ],
          },
        },
        {
          ...BEST_EFFORT_AXIOS_CONFIG,
          headers: orgId ? { 'X-Org-Id': orgId } : {},
        }
      );
    } catch {
      // fallback stock item was already set; ignore MSI sync errors
    }

    return response.data?.data ?? response.data;
  },

  updateProduct: async (orgId: string, id: string, data: any) => {
    const sku = String(data?.sku || id || '').trim();
    if (!sku) {
      throw new Error('SKU is required to update a Magento product.');
    }

    const categoryIds = parseCategoryIds(data?.categoryId);
    const qty = pickPrimaryStock(data);
    const sourceCode = pickInventorySourceCode(data);
    const payload = {
      product: {
        sku,
        name: String(data?.name || sku),
        price: Number(data?.priceCents ?? 0) / 100,
        status: data?.status === 'active' ? 1 : 2,
        visibility: 4,
        type_id: 'simple',
        custom_attributes: [
          { attribute_code: 'description', value: String(data?.description || '') },
          { attribute_code: 'category_ids', value: categoryIds },
        ],
        media_gallery_entries: buildMediaEntriesFromPhotos(data?.photos),
      },
      saveOptions: true,
    };

    const response = await axios.put(`/api/magento/rest/all/V1/products/${encodeURIComponent(sku)}`, { payload }, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });

    // Keep stock changes persistent on the default stock item.
    await axios.put(
      `/api/magento/rest/all/V1/products/${encodeURIComponent(sku)}/stockItems/1`,
      {
        payload: {
          stockItem: {
            qty,
            is_in_stock: qty > 0,
          },
        },
      },
      {
        ...BEST_EFFORT_AXIOS_CONFIG,
        headers: orgId ? { 'X-Org-Id': orgId } : {},
      }
    );

    // Magento MSI source-level stock update (best effort).
    try {
      await axios.post(
        '/api/magento/rest/all/V1/inventory/source-items',
        {
          payload: {
            sourceItems: [
              {
                sku,
                source_code: sourceCode,
                quantity: qty,
                status: qty > 0 ? 1 : 0,
              },
            ],
          },
        },
        {
          ...BEST_EFFORT_AXIOS_CONFIG,
          headers: orgId ? { 'X-Org-Id': orgId } : {},
        }
      );
    } catch {
      // stock item endpoint already updated; ignore MSI sync errors
    }

    return response.data?.data ?? response.data;
  },

  deleteProduct: async (orgId: string, id: string) => {
    const sku = String(id || '').trim();
    if (!sku) {
      throw new Error('SKU is required to delete a Magento product.');
    }

    const response = await axios.delete(`/api/magento/rest/all/V1/products/${encodeURIComponent(sku)}`, {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    return response.data?.data ?? response.data;
  },

  bulkUpdateProductStatus: async (orgId: string, skus: string[], status: 'active' | 'archived' | 'draft') => {
    const targetStatus = status === 'active' ? 1 : 2;
    await Promise.all(
      skus.map((sku) =>
        axios.put(
          `/api/magento/rest/all/V1/products/${encodeURIComponent(sku)}`,
          {
            payload: {
              product: {
                sku,
                status: targetStatus,
              },
              saveOptions: true,
            },
          },
          {
            ...BEST_EFFORT_AXIOS_CONFIG,
            headers: orgId ? { 'X-Org-Id': orgId } : {},
          }
        )
      )
    );
    return { success: true, count: skus.length };
  },

  updateProductInventory: async (orgId: string, sku: string, quantity: number, sourceCode = 'default') => {
    const qty = Number.isFinite(quantity) ? Math.max(0, quantity) : 0;
    await axios.put(
      `/api/magento/rest/all/V1/products/${encodeURIComponent(sku)}/stockItems/1`,
      {
        payload: {
          stockItem: {
            qty,
            is_in_stock: qty > 0,
          },
        },
      },
      {
        ...BEST_EFFORT_AXIOS_CONFIG,
        headers: orgId ? { 'X-Org-Id': orgId } : {},
      }
    );

    await axios.post(
      '/api/magento/rest/all/V1/inventory/source-items',
      {
        payload: {
          sourceItems: [
            {
              sku,
              source_code: sourceCode,
              quantity: qty,
              status: qty > 0 ? 1 : 0,
            },
          ],
        },
      },
      {
        ...BEST_EFFORT_AXIOS_CONFIG,
        headers: orgId ? { 'X-Org-Id': orgId } : {},
      }
    );
    return { success: true };
  },

  getOrders: async (orgId?: string) => {
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
  },

  createOrder: async (orgId: string, data: any) => {
    throw new Error('Magento now owns eCommerce. Manage catalog, checkout, payments, and inventory in Magento.');
  },

  createPosOrderFromCart: async (orgId: string, input: IPosCheckoutInput) => {
    const headers = orgId ? { 'X-Org-Id': orgId } : {};

    const guestCartRes = await axios.post(
      '/api/magento/rest/all/V1/guest-carts',
      { payload: {} },
      { ...BEST_EFFORT_AXIOS_CONFIG, headers }
    );
    const cartId = String(guestCartRes.data?.data ?? guestCartRes.data ?? '').trim();
    if (!cartId) throw new Error('Unable to create Magento guest cart.');

    const validItems = (Array.isArray(input.items) ? input.items : []).filter(
      (line) => Boolean(line?.sku) && Number(line?.qty) > 0
    );
    await Promise.all(
      validItems.map((line) =>
        axios.post(
          `/api/magento/rest/all/V1/guest-carts/${encodeURIComponent(cartId)}/items`,
          {
            payload: {
              cartItem: {
                quote_id: cartId,
                sku: line.sku,
                qty: Number(line.qty),
              },
            },
          },
          { ...BEST_EFFORT_AXIOS_CONFIG, headers }
        )
      )
    );

    const address = {
      email: input.email,
      firstname: input.firstname,
      lastname: input.lastname,
      telephone: input.telephone,
      street: [input.street],
      city: input.city,
      region: input.region,
      postcode: input.postcode,
      country_id: String(input.countryId || '').trim(),
    };
    if (!address.country_id) {
      throw new Error('countryId is required for POS checkout.');
    }

    const estimateRes = await axios.post(
      `/api/magento/rest/all/V1/guest-carts/${encodeURIComponent(cartId)}/estimate-shipping-methods`,
      { payload: { address } },
      { ...BEST_EFFORT_AXIOS_CONFIG, headers }
    );
    const methods = Array.isArray(estimateRes.data?.data)
      ? estimateRes.data.data
      : Array.isArray(estimateRes.data)
        ? estimateRes.data
        : [];
    if (methods.length === 0 || !methods[0]?.carrier_code || !methods[0]?.method_code) {
      throw new Error('No Magento shipping method available for the provided address.');
    }
    const shippingMethod = {
      carrier_code: String(methods[0].carrier_code),
      method_code: String(methods[0].method_code),
    };

    await axios.post(
      `/api/magento/rest/all/V1/guest-carts/${encodeURIComponent(cartId)}/shipping-information`,
      {
        payload: {
          addressInformation: {
            shipping_address: address,
            billing_address: address,
            shipping_carrier_code: shippingMethod.carrier_code,
            shipping_method_code: shippingMethod.method_code,
          },
        },
      },
      { ...BEST_EFFORT_AXIOS_CONFIG, headers }
    );

    const paymentRes = await axios.get(
      `/api/magento/rest/all/V1/guest-carts/${encodeURIComponent(cartId)}/payment-methods`,
      { ...BEST_EFFORT_AXIOS_CONFIG, headers }
    );
    const paymentMethods = Array.isArray(paymentRes.data?.data)
      ? paymentRes.data.data
      : Array.isArray(paymentRes.data)
        ? paymentRes.data
        : [];
    if (paymentMethods.length === 0 || !paymentMethods[0]?.code) {
      throw new Error('No Magento payment method available for checkout.');
    }
    const paymentMethod = String(paymentMethods[0].code);

    const placeOrderRes = await axios.post(
      `/api/magento/rest/all/V1/guest-carts/${encodeURIComponent(cartId)}/payment-information`,
      {
        payload: {
          email: input.email,
          paymentMethod: { method: paymentMethod },
          billing_address: address,
        },
      },
      { ...BEST_EFFORT_AXIOS_CONFIG, headers }
    );
    const orderId = String(placeOrderRes.data?.data ?? placeOrderRes.data ?? '').trim();
    if (!orderId) throw new Error('Magento order placement failed.');
    return { orderId };
  },

  getCategories: async (orgId?: string) => {
    const response = await axios.get('/api/magento/rest/all/V1/categories', {
      ...BEST_EFFORT_AXIOS_CONFIG,
      headers: orgId ? { 'X-Org-Id': orgId } : {},
    });
    const root = response.data?.data ?? {};
    const rows = Array.isArray(root?.children_data) ? root.children_data : [];
    return flattenMagentoCategories(rows);
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

  getCoupons: async (orgId?: string) => [],

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
    try {
      const response = await axios.get('/api/image-library?category=commerce-product&limit=200', BEST_EFFORT_AXIOS_CONFIG);
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
    const base64 = dataUrlToBase64(dataUrl);

    if (opts?.sku) {
      const payload = {
        entry: {
          media_type: 'image',
          label: file.name,
          position: 1,
          disabled: false,
          types: ['image', 'small_image', 'thumbnail'],
          content: {
            base64_encoded_data: base64,
            type: file.type || 'image/jpeg',
            name: file.name,
          },
        },
      };

      const response = await axios.post(
        `/api/magento/rest/all/V1/products/${encodeURIComponent(opts.sku)}/media`,
        { payload },
        {
          ...BEST_EFFORT_AXIOS_CONFIG,
          headers: opts.orgId ? { 'X-Org-Id': opts.orgId } : {},
        }
      );

      const mediaId = response.data?.data ?? response.data;
      return normalizeImageAsset({
        id: String(mediaId || `magento-media-${Date.now()}`),
        name: file.name,
        url: dataUrl,
        thumbnail: dataUrl,
        mimeType: file.type || 'image/*',
        size: file.size,
        category: 'commerce-product',
        tags: ['shop-product', 'magento-media'],
        createdAt: new Date().toISOString(),
      });
    }

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
