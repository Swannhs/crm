import axios from 'src/utils/axios';

const API = {
  CONTEXT: '/api/pos/context',
  PRODUCTS: '/api/pos/products',
  CUSTOMERS: '/api/pos/customers',
  CART: '/api/pos/cart',
  CHECKOUT: '/api/pos/checkout',
  ORDERS: '/api/pos/orders',
};

export const posService = {
  // Context
  getContext: async () => {
    const response = await axios.get(API.CONTEXT);
    return response.data?.data ?? response.data;
  },

  // Products
  getProducts: async (query?: string) => {
    const response = await axios.get(API.PRODUCTS, { params: { query } });
    return response.data?.data ?? response.data ?? [];
  },

  // Customers
  getCustomers: async (query?: string) => {
    const response = await axios.get(API.CUSTOMERS, { params: { query } });
    return response.data?.data ?? response.data ?? [];
  },
  createCustomer: async (data: { name: string; phone?: string; email?: string }) => {
    const response = await axios.post(API.CUSTOMERS, data);
    return response.data?.data ?? response.data;
  },

  // Cart
  createCart: async () => {
    const response = await axios.post(API.CART);
    return response.data?.data ?? response.data;
  },
  addToCart: async (cartId: string, item: any) => {
    const response = await axios.post(`${API.CART}/${cartId}/items`, item);
    return response.data?.data ?? response.data;
  },
  updateCartItem: async (cartId: string, lineId: string, data: any) => {
    const response = await axios.patch(`${API.CART}/${cartId}/items/${lineId}`, data);
    return response.data?.data ?? response.data;
  },
  removeCartItem: async (cartId: string, lineId: string) => {
    const response = await axios.delete(`${API.CART}/${cartId}/items/${lineId}`);
    return response.data?.data ?? response.data;
  },

  // Checkout
  checkout: async (data: any) => {
    const response = await axios.post(API.CHECKOUT, data);
    return response.data?.data ?? response.data;
  },

  // Orders
  getOrders: async () => {
    const response = await axios.get(API.ORDERS);
    return response.data?.data ?? response.data ?? [];
  },
  getOrderById: async (id: string) => {
    const response = await axios.get(`${API.ORDERS}/${id}`);
    return response.data?.data ?? response.data;
  },
  refundOrder: async (id: string, data: { reason: string; amount: number }) => {
    const response = await axios.post(`${API.ORDERS}/${id}/refund`, data);
    return response.data?.data ?? response.data;
  },
  getReceipt: async (id: string) => {
    const response = await axios.get(`${API.ORDERS}/${id}/receipt`);
    return response.data?.data ?? response.data;
  },
};
