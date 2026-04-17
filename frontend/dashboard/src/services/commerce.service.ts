import api from '../lib/api';

export interface Product {
  id: string;
  name: string;
  description?: string;
  priceCents: number;
  stockQuantity: number;
  status: 'active' | 'inactive';
  createdAt: string;
}

export const commerceService = {
  getProducts: async () => {
    const response = await api.get<{ data: Product[] }>(`/api/shop/products`);
    return response.data;
  }
};
