import axios from 'axios';

// API Endpoints Mapping
const API = {
  CONTEXT: '/api/pos/context',
  PRODUCTS: '/api/pos/products',
  CUSTOMERS: '/api/pos/customers',
  CART: '/api/pos/cart',
  CHECKOUT: '/api/pos/checkout',
  ORDERS: '/api/pos/orders',
};

// Feature Support Flags (Based on backend analysis)
export const SUPPORTED_FEATURES = {
  CONTEXT: false,
  PRODUCTS: false,
  CUSTOMERS: true,
  CART: false,
  CHECKOUT: false,
  ORDERS: false,
};

export const posService = {
  // Context
  getContext: async () => {
    if (!SUPPORTED_FEATURES.CONTEXT) throw new Error('API Endpoint Not Supported');
    const response = await axios.get(API.CONTEXT);
    return response.data;
  },

  // Products
  getProducts: async () => {
    if (!SUPPORTED_FEATURES.PRODUCTS) throw new Error('API Endpoint Not Supported');
    const response = await axios.get(API.PRODUCTS);
    return response.data;
  },

  // Customers
  getCustomers: async (query?: string) => {
    if (!SUPPORTED_FEATURES.CUSTOMERS) throw new Error('API Endpoint Not Supported');
    const response = await axios.get(API.CUSTOMERS, { params: { query } });
    return response.data;
  },
  createCustomer: async (data: { name: string; phone?: string; email?: string }) => {
    if (!SUPPORTED_FEATURES.CUSTOMERS) throw new Error('API Endpoint Not Supported');
    const response = await axios.post(API.CUSTOMERS, data);
    return response.data;
  },

  // Cart
  createCart: async () => {
    if (!SUPPORTED_FEATURES.CART) throw new Error('API Endpoint Not Supported');
    const response = await axios.post(API.CART);
    return response.data;
  },
  addToCart: async (cartId: string, item: any) => {
    if (!SUPPORTED_FEATURES.CART) throw new Error('API Endpoint Not Supported');
    const response = await axios.post(`${API.CART}/${cartId}/items`, item);
    return response.data;
  },
  updateCartItem: async (cartId: string, lineId: string, data: any) => {
    if (!SUPPORTED_FEATURES.CART) throw new Error('API Endpoint Not Supported');
    const response = await axios.patch(`${API.CART}/${cartId}/items/${lineId}`, data);
    return response.data;
  },
  removeCartItem: async (cartId: string, lineId: string) => {
    if (!SUPPORTED_FEATURES.CART) throw new Error('API Endpoint Not Supported');
    const response = await axios.delete(`${API.CART}/${cartId}/items/${lineId}`);
    return response.data;
  },

  // Checkout
  checkout: async (data: any) => {
    if (!SUPPORTED_FEATURES.CHECKOUT) throw new Error('API Endpoint Not Supported');
    const response = await axios.post(API.CHECKOUT, data);
    return response.data;
  },

  // Orders
  getOrders: async () => {
    if (!SUPPORTED_FEATURES.ORDERS) throw new Error('API Endpoint Not Supported');
    const response = await axios.get(API.ORDERS);
    return response.data;
  },
  getOrderById: async (id: string) => {
    if (!SUPPORTED_FEATURES.ORDERS) throw new Error('API Endpoint Not Supported');
    const response = await axios.get(`${API.ORDERS}/${id}`);
    return response.data;
  },
  refundOrder: async (id: string, data: { reason: string; amount: number }) => {
    if (!SUPPORTED_FEATURES.ORDERS) throw new Error('API Endpoint Not Supported');
    const response = await axios.post(`${API.ORDERS}/${id}/refund`, data);
    return response.data;
  },
  getReceipt: async (id: string) => {
    if (!SUPPORTED_FEATURES.ORDERS) throw new Error('API Endpoint Not Supported');
    const response = await axios.get(`${API.ORDERS}/${id}/receipt`);
    return response.data;
  },
};
