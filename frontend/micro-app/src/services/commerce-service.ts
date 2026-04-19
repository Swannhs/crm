import axios from 'src/utils/axios';

// ----------------------------------------------------------------------

export type ICommerceProduct = {
  id: string;
  name: string;
  description?: string | null;
  priceCents: number;
  photos?: string[];
  status?: string;
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
    const response = await axios.post('/api/shop/products', data);
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
};
