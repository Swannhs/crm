export const publicCommerceService = {
  // Deprecated: public storefront commerce should call Magento storefront/GraphQL APIs
  // directly (or a dedicated storefront BFF), not CRM gateway shop endpoints.
  getProducts: async (_orgId: string) => {
    throw new Error('Deprecated client. Use Magento storefront APIs for public product listing.');
  },

  getProduct: async (_orgId: string, _productId: string) => {
    throw new Error('Deprecated client. Use Magento storefront APIs for public product detail.');
  },

  signup: async (_orgId: string, _data: any) => {
    throw new Error('Deprecated client. Use Magento customer account APIs for signup.');
  },

  login: async (_orgId: string, _data: any) => {
    throw new Error('Deprecated client. Use Magento customer account APIs for login.');
  },
};
