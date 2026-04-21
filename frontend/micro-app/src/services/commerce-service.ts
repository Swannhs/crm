import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type ICommerceProduct = {
  id: string;
  name: string;
  description?: string | null;
  priceCents: number;
  photos?: string[];
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

export type ICommerceOrder = {
  id: string;
  totalAmountCents: number;
  status: string;
  paymentStatus: string;
  items?: Array<{
    id: string;
    productName: string;
    quantity: number;
    unitPriceCents: number;
  }>;
};

export const commerceService = {
  getProducts: async () => {
    const response = await axios.get('/api/shop/products');
    return response.data?.data ?? response.data ?? [];
  },

  createProduct: async (data: any) => {
    const payload = {
      ...data,
      price_cents: data.price_cents ?? data.priceCents ?? 0,
      variants: data.variants ?? [],
      attributes: data.attributes ?? [],
      modifierGroups: data.modifierGroups ?? [],
      status: data.status ?? 'active',
    };

    delete payload.priceCents;

    const response = await axios.post('/api/shop/products', payload);
    return response.data?.data ?? response.data;
  },

  getOrders: async () => {
    const response = await axios.get('/api/shop/orders');
    return response.data?.data ?? response.data ?? [];
  },

  createOrder: async (data: any) => {
    const response = await axios.post('/api/shop/orders', data);
    return response.data?.data ?? response.data;
  },

  getCategories: async () => {
    const response = await axios.get('/api/shop/categories');
    return response.data?.data ?? response.data ?? [];
  },

  createCategory: async (data: any) => {
    const response = await axios.post('/api/shop/categories', data);
    return response.data?.data ?? response.data;
  },

  getCoupons: async () => {
    const response = await axios.get('/api/shop/coupons');
    return response.data?.data ?? response.data ?? [];
  },

  createCoupon: async (data: any) => {
    const response = await axios.post('/api/shop/coupons', data);
    return response.data?.data ?? response.data;
  },
};
