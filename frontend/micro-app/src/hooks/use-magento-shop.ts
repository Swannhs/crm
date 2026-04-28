import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  commerceService,
  type ICommerceCategory,
  type ICommerceImageAsset,
  type ICommerceProduct,
} from 'src/services/commerce-service';
import type { ProductFormValues } from 'src/sections/commerce/view/commerce-workspace.types';

type UseMagentoProductsParams = {
  orgId?: string;
  enabled?: boolean;
  queryKey?: unknown[];
};

export function useMagentoProducts(params?: UseMagentoProductsParams) {
  const enabled = params?.enabled ?? true;
  return useQuery<ICommerceProduct[]>({
    queryKey: params?.queryKey ?? ['magento-products', params?.orgId || 'default'],
    enabled,
    queryFn: () => commerceService.getProducts(params?.orgId),
  });
}

export function useMagentoCategories(params?: { orgId?: string; enabled?: boolean; queryKey?: unknown[] }) {
  const enabled = params?.enabled ?? true;
  return useQuery<ICommerceCategory[]>({
    queryKey: params?.queryKey ?? ['magento-categories', params?.orgId || 'default'],
    enabled,
    queryFn: () => commerceService.getCategories(params?.orgId),
  });
}

export function useMagentoCreateProduct(opts: { orgId: string; invalidateKeys?: unknown[][] }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: ProductFormValues) => commerceService.createProduct(opts.orgId, values),
    onSuccess: async () => {
      const keys = opts.invalidateKeys ?? [
        ['magento-products', opts.orgId],
        ['magento-categories', opts.orgId],
        ['commerce-products'],
        ['pos-magento-products', opts.orgId],
      ];
      await Promise.all(keys.map((key) => queryClient.invalidateQueries({ queryKey: key })));
    },
  });
}

export function useMagentoUpdateProduct(opts: { orgId: string; sku: string; invalidateKeys?: unknown[][] }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (values: ProductFormValues) => commerceService.updateProduct(opts.orgId, opts.sku, values),
    onSuccess: async () => {
      const keys = opts.invalidateKeys ?? [
        ['magento-products', opts.orgId],
        ['magento-categories', opts.orgId],
        ['commerce-products'],
        ['pos-magento-products', opts.orgId],
      ];
      await Promise.all(keys.map((key) => queryClient.invalidateQueries({ queryKey: key })));
    },
  });
}

export function useMagentoDeleteProduct(opts: { orgId: string; invalidateKeys?: unknown[][] }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (sku: string) => commerceService.deleteProduct(opts.orgId, sku),
    onSuccess: async () => {
      const keys = opts.invalidateKeys ?? [
        ['magento-products', opts.orgId],
        ['magento-categories', opts.orgId],
        ['commerce-products'],
        ['pos-magento-products', opts.orgId],
      ];
      await Promise.all(keys.map((key) => queryClient.invalidateQueries({ queryKey: key })));
    },
  });
}

export function useMagentoUploadProductImages() {
  return useMutation<ICommerceImageAsset[], Error, File[]>({
    mutationFn: async (files: File[]) => Promise.all(files.map((file) => commerceService.uploadProductImage(file))),
  });
}
