'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { DashboardContent } from 'src/layouts/dashboard';
import { useAuthContext } from 'src/auth/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { showToast } from 'src/components/toast';
import {
  commerceService,
  type ICommerceCategory,
  type ICommerceCoupon,
  type ICommerceImageAsset,
  type ICommerceProduct,
} from 'src/services/commerce-service';
import { publicCommerceService } from 'src/services/public-commerce-service';

import {
  COMMERCE_DASHBOARD_MODULES,
  CHECKOUT_FORM_SCHEMA,
  CATEGORY_FORM_SCHEMA,
  COUPON_FORM_SCHEMA,
  DEFAULT_SETTINGS,
  DEFAULT_PRODUCT_FORM_VALUES,
  PRODUCT_FORM_SCHEMA,
  SETTINGS_FORM_SCHEMA,
  resolveInitialModule,
  type CartLine,
  type CategoryFormValues,
  type CheckoutFormValues,
  type CommerceDashboardModule,
  type CommerceWorkspaceProps,
  type CouponFormValues,
  type LocalOrder,
  type ProductFormValues,
  type SettingsFormValues,
} from './commerce-workspace.types';
import {
  buildCartLine,
  cartStorageKey,
  getAvailableStock,
  getBasePrice,
  isProductPurchasable,
  normalizeOrder,
  orderStorageKey,
  readStorage,
  settingsStorageKey,
  tableStorageKey,
  writeStorage,
} from './commerce-workspace.utils';
import {
  CommerceCartSummary,
  CommerceCategoryDialog,
  CommerceCategoriesTable,
  CommerceCheckoutPanel,
  CommerceCouponDialog,
  CommerceCouponsTable,
  CommerceCustomersTable,
  CommerceDashboardModules,
  CommerceOrderCard,
  CommerceProductDetailDialog,
  CommerceOrderDetailDialog,
  CommerceOrdersTable,
  CommerceProductDetail,
  CommerceProductFormCard,
  CommerceProductsTable,
  CommerceSettingsPanel,
  CommerceStorefrontGrid,
  CommerceSummaryCards,
  CommerceTableGuideDialog,
  CommerceTablesPanel,
} from './commerce-workspace-sections';

export function CommerceWorkspaceView({
  mode = 'dashboard-shop',
  shopPath,
  shopId,
  contactId,
  productId,
  cartId,
  orderId,
  receiptId,
  section,
  type,
}: CommerceWorkspaceProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user, authenticated } = useAuthContext();

  const isStorefrontMode =
    mode === 'public-shop' ||
    mode === 'online-shop' ||
    mode === 'product-detail' ||
    mode === 'online-product' ||
    mode === 'checkout' ||
    mode === 'order-payment' ||
    mode === 'receipt' ||
    mode === 'public-products' ||
    mode === 'public-memberships' ||
    mode === 'public-courses' ||
    mode === 'online-orders';

  const resolvedOrgId =
    (user as any)?.org_id || (user as any)?.orgId || (user as any)?.organizationId || '';
  const resolvedShopKey = shopId || shopPath || resolvedOrgId || 'shop';
  const posRouteShopId = shopId || resolvedOrgId || resolvedShopKey || 'shop';
  const checkoutRouteKey = shopPath || shopId || resolvedShopKey;
  const isKnownSection = section
    ? COMMERCE_DASHBOARD_MODULES.some((module) => module.value === section)
    : false;
  const currentModule: CommerceDashboardModule =
    isKnownSection
      ? (section as CommerceDashboardModule)
      : resolveInitialModule(mode);

  const [activeTab, setActiveTab] = useState<'general' | 'variants' | 'modifiers'>('general');
  const [search, setSearch] = useState('');
  const [productCategoryFilter, setProductCategoryFilter] = useState('all');
  const [categorySearch, setCategorySearch] = useState('');
  const [couponSearch, setCouponSearch] = useState('');
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');
  const [selectedVariantId, setSelectedVariantId] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingCouponId, setEditingCouponId] = useState<string | null>(null);
  const [detailQuantity, setDetailQuantity] = useState(1);
  const [appliedCouponCode, setAppliedCouponCode] = useState('');
  const [cartItems, setCartItems] = useState<CartLine[]>([]);
  const [localOrders, setLocalOrders] = useState<LocalOrder[]>([]);
  const [tableLayouts, setTableLayouts] = useState<Array<{ id: string; name: string; seats: number; status: 'available' | 'occupied' | 'reserved' }>>([]);

  const productQueryKey = ['commerce-products', mode, resolvedShopKey];
  const categoryQueryKey = ['commerce-categories', resolvedShopKey];
  const couponQueryKey = ['commerce-coupons', resolvedShopKey];

  const categoryDialog = useBoolean();
  const couponDialog = useBoolean();
  const tableDialog = useBoolean();
  const orderDialog = useBoolean();
  const productDialog = useBoolean();

  const handleModuleChange = (newModule: CommerceDashboardModule) => {
    router.push(paths.dashboard.shopSection(newModule));
  };

  const productMethods = useForm<ProductFormValues>({
    resolver: zodResolver(PRODUCT_FORM_SCHEMA),
    defaultValues: DEFAULT_PRODUCT_FORM_VALUES,
  });

  const categoryMethods = useForm<CategoryFormValues>({
    resolver: zodResolver(CATEGORY_FORM_SCHEMA),
    defaultValues: { name: '', description: '', isActive: true },
  });

  const couponMethods = useForm<CouponFormValues>({
    resolver: zodResolver(COUPON_FORM_SCHEMA),
    defaultValues: { code: '', type: 'percent', value: 0, minOrderCents: 0, maxUsage: '', expiresAt: '', isActive: true },
  });

  const settingsMethods = useForm<SettingsFormValues>({
    resolver: zodResolver(SETTINGS_FORM_SCHEMA),
    defaultValues: DEFAULT_SETTINGS,
  });

  const checkoutMethods = useForm<CheckoutFormValues>({
    resolver: zodResolver(CHECKOUT_FORM_SCHEMA),
    defaultValues: {
      customerName: '',
      email: '',
      phone: '',
      line1: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
    },
  });

  const { control, handleSubmit } = productMethods;

  const { fields: variantFields, append: appendVariant, remove: removeVariant } = useFieldArray({
    control,
    name: 'variants',
  });

  const {
    fields: modifierGroupFields,
    append: appendModifierGroup,
    remove: removeModifierGroup,
  } = useFieldArray({
    control,
    name: 'modifierGroups',
  });

  useEffect(() => {
    setCartItems(readStorage<CartLine[]>(cartStorageKey(resolvedShopKey), []));
    setLocalOrders(readStorage<LocalOrder[]>(orderStorageKey(resolvedShopKey), []));
    settingsMethods.reset(readStorage<SettingsFormValues>(settingsStorageKey(resolvedShopKey), DEFAULT_SETTINGS));
    setTableLayouts(
      readStorage<Array<{ id: string; name: string; seats: number; status?: 'available' | 'occupied' | 'reserved' }>>(
        tableStorageKey(resolvedShopKey),
        []
      ).map((tableItem) => ({
        ...tableItem,
        status: tableItem.status || 'available',
      }))
    );
  }, [resolvedShopKey, settingsMethods]);

  const productsQuery = useQuery({
    queryKey: ['commerce-products', mode, resolvedShopKey],
    enabled: Boolean(resolvedShopKey),
    queryFn: async () => {
      if (isStorefrontMode) {
        return publicCommerceService.getProducts(shopId || shopPath || resolvedOrgId || resolvedShopKey);
      }

      return commerceService.getProducts();
    },
  });

  const ordersQuery = useQuery({
    queryKey: ['commerce-orders', resolvedOrgId],
    enabled: authenticated && !isStorefrontMode,
    queryFn: () => commerceService.getOrders(),
  });

  const categoriesQuery = useQuery({
    queryKey: categoryQueryKey,
    enabled: authenticated && !isStorefrontMode,
    queryFn: () => commerceService.getCategories(),
  });

  const couponsQuery = useQuery({
    queryKey: couponQueryKey,
    enabled: authenticated && !isStorefrontMode,
    queryFn: () => commerceService.getCoupons(),
  });

  const createProductMutation = useMutation({
    mutationFn: (values: ProductFormValues) => commerceService.createProduct(resolvedShopKey, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productQueryKey });
      productMethods.reset(DEFAULT_PRODUCT_FORM_VALUES);
      setEditingId(null);
      productDialog.onFalse();
      showToast({ message: 'Product created successfully.', severity: 'success' });
    },
    onError: (err) => showToast({ message: `Error: ${err.message}`, severity: 'error' }),
  });

  const updateProductMutation = useMutation({
    mutationFn: (values: ProductFormValues) => commerceService.updateProduct(resolvedShopKey, editingId!, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productQueryKey });
      setEditingId(null);
      productMethods.reset(DEFAULT_PRODUCT_FORM_VALUES);
      productDialog.onFalse();
      showToast({ message: 'Product updated.', severity: 'success' });
    },
    onError: (err) => showToast({ message: `Error: ${err.message}`, severity: 'error' }),
  });

  const deleteProductMutation = useMutation({
    mutationFn: (id: string) => commerceService.deleteProduct(resolvedShopKey, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productQueryKey });
      showToast({ message: 'Product deleted.', severity: 'success' });
    },
  });

  const createCategoryMutation = useMutation({
    mutationFn: (values: CategoryFormValues) => commerceService.createCategory(resolvedShopKey, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryQueryKey });
      categoryDialog.onFalse();
      categoryMethods.reset({ name: '', description: '', isActive: true });
      showToast({ message: 'Category added.', severity: 'success' });
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: (values: CategoryFormValues) =>
      commerceService.updateCategory(resolvedShopKey, editingCategoryId!, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryQueryKey });
      queryClient.invalidateQueries({ queryKey: productQueryKey });
      setEditingCategoryId(null);
      categoryDialog.onFalse();
      categoryMethods.reset({ name: '', description: '', isActive: true });
      showToast({ message: 'Category updated.', severity: 'success' });
    },
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: (id: string) => commerceService.deleteCategory(resolvedShopKey, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: categoryQueryKey });
      showToast({ message: 'Category removed.', severity: 'success' });
    },
  });

  const createCouponMutation = useMutation({
    mutationFn: (values: CouponFormValues) => commerceService.createCoupon(resolvedShopKey, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: couponQueryKey });
      setEditingCouponId(null);
      couponDialog.onFalse();
      couponMethods.reset({ code: '', type: 'percent', value: 0, minOrderCents: 0, maxUsage: '', expiresAt: '', isActive: true });
      showToast({ message: 'Coupon created.', severity: 'success' });
    },
  });

  const updateCouponMutation = useMutation({
    mutationFn: (values: CouponFormValues) => commerceService.updateCoupon(resolvedShopKey, editingCouponId!, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: couponQueryKey });
      setEditingCouponId(null);
      couponDialog.onFalse();
      couponMethods.reset({ code: '', type: 'percent', value: 0, minOrderCents: 0, maxUsage: '', expiresAt: '', isActive: true });
      showToast({ message: 'Coupon updated.', severity: 'success' });
    },
  });

  const deleteCouponMutation = useMutation({
    mutationFn: (id: string) => commerceService.deleteCoupon(resolvedShopKey, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: couponQueryKey });
      showToast({ message: 'Coupon deleted.', severity: 'success' });
    },
  });

  const createOrderMutation = useMutation({
    mutationFn: (payload: any) => commerceService.createOrder(resolvedShopKey, payload),
  });

  const uploadProductImageMutation = useMutation({
    mutationFn: async (files: File[]) => Promise.all(files.map((file) => commerceService.uploadProductImage(file))),
    onSuccess: (uploadedImages: ICommerceImageAsset[]) => {
      const currentImages = productMethods.getValues('photos') || [];
      const nextUrls = [...new Set([...currentImages, ...uploadedImages.map((item) => item.url).filter(Boolean)])];
      productMethods.setValue('photos', nextUrls, { shouldDirty: true, shouldTouch: true });
      showToast({
        message:
          uploadedImages.length === 1
            ? 'Product image uploaded.'
            : `${uploadedImages.length} product images uploaded.`,
        severity: 'success',
      });
    },
  });

  const products = useMemo<ICommerceProduct[]>(
    () => (Array.isArray(productsQuery.data) ? productsQuery.data : []),
    [productsQuery.data]
  );

  const categories = useMemo<ICommerceCategory[]>(
    () => (Array.isArray(categoriesQuery.data) ? categoriesQuery.data : []),
    [categoriesQuery.data]
  );

  const catalogCategories = useMemo(
    () =>
      categories.map((category) => {
        const matchingProducts = products.filter((product) => {
          if (product.categoryId) return product.categoryId === category.id;
          return product.categoryName?.toLowerCase() === category.name.toLowerCase();
        });

        return {
          ...category,
          productCount: matchingProducts.length,
          activeProductCount: matchingProducts.filter((product) => product.status === 'active').length,
        };
      }),
    [categories, products]
  );

  const orders = useMemo<LocalOrder[]>(
    () => (Array.isArray(ordersQuery.data) ? ordersQuery.data.map(normalizeOrder) : []),
    [ordersQuery.data]
  );

  const mergedOrders = useMemo(() => {
    const map = new Map<string, LocalOrder>();
    [...orders, ...localOrders].forEach((item) => map.set(item.id, item));
    return Array.from(map.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }, [localOrders, orders]);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const description = product.description?.toLowerCase() || '';
      const sku = product.sku?.toLowerCase() || '';
      const categoryName = product.categoryName?.toLowerCase() || '';
      const tags = product.tags?.join(' ').toLowerCase() || '';
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        description.includes(query) ||
        sku.includes(query) ||
        categoryName.includes(query) ||
        tags.includes(query);

      const matchesCategory =
        productCategoryFilter === 'all' ||
        product.categoryId === productCategoryFilter ||
        (!product.categoryId &&
          catalogCategories.find((category) => category.id === productCategoryFilter)?.name.toLowerCase() ===
            categoryName);

      return matchesQuery && matchesCategory;
    });
  }, [catalogCategories, productCategoryFilter, products, search]);

  const filteredCategories = useMemo(() => {
    const query = categorySearch.trim().toLowerCase();
    if (!query) return catalogCategories;

    return catalogCategories.filter((category) => {
      const description = category.description?.toLowerCase() || '';
      return category.name.toLowerCase().includes(query) || description.includes(query);
    });
  }, [catalogCategories, categorySearch]);

  const filteredCoupons = useMemo(() => {
    const coupons = Array.isArray(couponsQuery.data) ? (couponsQuery.data as ICommerceCoupon[]) : [];
    const query = couponSearch.trim().toLowerCase();
    if (!query) return coupons;

    return coupons.filter((coupon) => {
      const status = coupon.isActive ? 'active' : 'inactive';
      return (
        coupon.code.toLowerCase().includes(query) ||
        coupon.type.toLowerCase().includes(query) ||
        status.includes(query)
      );
    });
  }, [couponSearch, couponsQuery.data]);

  const selectedProduct = useMemo(
    () =>
      filteredProducts.find((product) => product.id === productId) ||
      products.find((product) => product.id === productId),
    [filteredProducts, productId, products]
  );

  useEffect(() => {
    if (selectedProduct?.variants?.length) {
      setSelectedVariantId(selectedProduct.variants[0]?.id || '');
    } else {
      setSelectedVariantId('');
    }
    setDetailQuantity(1);
  }, [selectedProduct]);

  const cartSubtotalCents = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.unitPriceCents * item.quantity, 0),
    [cartItems]
  );

  const activeCoupon = useMemo(() => {
    const coupons = Array.isArray(couponsQuery.data) ? (couponsQuery.data as ICommerceCoupon[]) : [];
    const coupon = coupons.find((item) => item.code?.toLowerCase() === appliedCouponCode.trim().toLowerCase());

    if (!coupon || !coupon.isActive) return null;
    if (coupon.expiresAt && new Date(coupon.expiresAt).getTime() < Date.now()) return null;
    if (coupon.minOrderCents > cartSubtotalCents) return null;
    if (typeof coupon.maxUsage === 'number' && coupon.usedCount >= coupon.maxUsage) return null;

    return coupon;
  }, [appliedCouponCode, cartSubtotalCents, couponsQuery.data]);

  const couponFeedback = useMemo(() => {
    if (!appliedCouponCode.trim()) return undefined;

    const coupons = Array.isArray(couponsQuery.data) ? (couponsQuery.data as ICommerceCoupon[]) : [];
    const coupon = coupons.find((item) => item.code?.toLowerCase() === appliedCouponCode.trim().toLowerCase());

    if (!coupon) return { severity: 'warning' as const, message: 'Coupon not found.' };
    if (!coupon.isActive) return { severity: 'warning' as const, message: `${coupon.code} is currently inactive.` };
    if (coupon.expiresAt && new Date(coupon.expiresAt).getTime() < Date.now()) {
      return { severity: 'warning' as const, message: `${coupon.code} has expired.` };
    }
    if (coupon.minOrderCents > cartSubtotalCents) {
      return {
        severity: 'info' as const,
        message: `${coupon.code} requires a minimum order of $${(coupon.minOrderCents / 100).toFixed(2)}.`,
      };
    }
    if (typeof coupon.maxUsage === 'number' && coupon.usedCount >= coupon.maxUsage) {
      return { severity: 'warning' as const, message: `${coupon.code} has reached its usage limit.` };
    }
    return {
      severity: 'success' as const,
      message:
        coupon.type === 'percent'
          ? `${coupon.value}% discount is active.`
          : `${coupon.code} applies $${((coupon.value || 0) / 100).toFixed(2)} off.`,
    };
  }, [appliedCouponCode, cartSubtotalCents, couponsQuery.data]);

  const discountCents = useMemo(() => {
    if (!activeCoupon) return 0;
    if (activeCoupon.type === 'percent') {
      return Math.round(cartSubtotalCents * ((activeCoupon.value || 0) / 100));
    }
    return Math.min(cartSubtotalCents, activeCoupon.value || 0);
  }, [activeCoupon, cartSubtotalCents]);

  const taxRate = settingsMethods.watch('taxRate') || DEFAULT_SETTINGS.taxRate;
  const cartTotalCents = Math.max(
    0,
    cartSubtotalCents - discountCents + Math.round((cartSubtotalCents - discountCents) * (taxRate / 100))
  );
  const taxAmountCents = Math.round((cartSubtotalCents - discountCents) * (taxRate / 100));

  const selectedOrder = useMemo(
    () => mergedOrders.find((item) => item.id === orderId || item.id === receiptId),
    [mergedOrders, orderId, receiptId]
  );

  const filteredOrders = useMemo(() => {
    return mergedOrders.filter((item) => {
      const matchesSearch =
        !orderSearch.trim() ||
        item.id.toLowerCase().includes(orderSearch.toLowerCase()) ||
        item.items.some((line) => line.productName.toLowerCase().includes(orderSearch.toLowerCase())) ||
        (item.shippingAddress as any)?.customerName?.toLowerCase().includes(orderSearch.toLowerCase());

      const matchesStatus =
        orderStatusFilter === 'all' ||
        item.status === orderStatusFilter ||
        item.paymentStatus === orderStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [mergedOrders, orderSearch, orderStatusFilter]);

  const customers = useMemo(() => {
    const customerMap = new Map<string, any>();
    
    mergedOrders.forEach((order) => {
      const email = (order.shippingAddress as any)?.email;
      if (!email) return;

      const existing = customerMap.get(email);
      if (existing) {
        existing.orderCount += 1;
        existing.totalSpentCents += order.totalAmountCents;
        if (order.createdAt > existing.lastOrderAt) {
          existing.lastOrderAt = order.createdAt;
        }
      } else {
        customerMap.set(email, {
          id: order.id, // using first order id as surrogate
          name: (order.shippingAddress as any)?.customerName || 'Anonymous',
          email,
          phone: (order.shippingAddress as any)?.phone,
          orderCount: 1,
          totalSpentCents: order.totalAmountCents,
          lastOrderAt: order.createdAt,
        });
      }
    });

    return Array.from(customerMap.values()).sort((a, b) => b.totalSpentCents - a.totalSpentCents);
  }, [mergedOrders]);

  const topProducts = useMemo(() => {
    const statsMap = new Map<string, { name: string; quantity: number; revenue: number }>();
    
    mergedOrders.forEach((order) => {
      if (order.status === 'cancelled') return;
      
      order.items.forEach((item) => {
        const existing = statsMap.get(item.productId);
        if (existing) {
          existing.quantity += item.quantity;
          existing.revenue += item.unitPriceCents * item.quantity;
        } else {
          statsMap.set(item.productId, {
            name: item.productName,
            quantity: item.quantity,
            revenue: item.unitPriceCents * item.quantity,
          });
        }
      });
    });

    return Array.from(statsMap.values()).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  }, [mergedOrders]);

  const storefrontCheckoutHref = paths.public.shopCheckout(checkoutRouteKey, cartId || 'active');
  const selectedVariantPriceCents =
    selectedProduct?.variants?.find((variant) => variant.id === selectedVariantId)?.priceCents ??
    (selectedProduct ? getBasePrice(selectedProduct) : 0);
  const selectedVariantStock = selectedProduct ? getAvailableStock(selectedProduct, selectedVariantId) : 0;

  const persistCart = (nextValue: CartLine[]) => {
    setCartItems(nextValue);
    writeStorage(cartStorageKey(resolvedShopKey), nextValue);
  };

  const persistOrders = (nextValue: LocalOrder[]) => {
    setLocalOrders(nextValue);
    writeStorage(orderStorageKey(resolvedShopKey), nextValue);
  };

  const persistTables = (nextValue: Array<{ id: string; name: string; seats: number; status: 'available' | 'occupied' | 'reserved' }>) => {
    setTableLayouts(nextValue);
    writeStorage(tableStorageKey(resolvedShopKey), nextValue);
  };

  const addProductToCart = (product: ICommerceProduct, quantity = 1, variantId?: string) => {
    if (!isProductPurchasable(product, variantId)) {
      showToast({ message: `${product.name} is currently unavailable.`, severity: 'warning' });
      return;
    }

    const line = buildCartLine(product, quantity, variantId);
    const existing = cartItems.find((item) => item.id === line.id);
    const availableStock = getAvailableStock(product, variantId);
    const nextQuantity = (existing?.quantity || 0) + quantity;

    if (availableStock > 0 && nextQuantity > availableStock) {
      showToast({
        message: `Only ${availableStock} units are available for ${product.name}.`,
        severity: 'warning',
      });
      return;
    }

    if (existing) {
      persistCart(
        cartItems.map((item) => (item.id === line.id ? { ...item, quantity: item.quantity + quantity } : item))
      );
    } else {
      persistCart([...cartItems, line]);
    }

    showToast({ message: `${product.name} added to cart.`, severity: 'success' });
  };

  const updateCartQuantity = (lineId: string, quantity: number) => {
    if (quantity <= 0) {
      persistCart(cartItems.filter((item) => item.id !== lineId));
      return;
    }

    const currentLine = cartItems.find((item) => item.id === lineId);
    const product = products.find((item) => item.id === currentLine?.productId);
    const availableStock = product ? getAvailableStock(product, currentLine?.variantId) : 0;

    if (availableStock > 0 && quantity > availableStock) {
      quantity = availableStock;
      showToast({
        message: `Quantity adjusted to available stock (${availableStock}).`,
        severity: 'warning',
      });
    }

    persistCart(cartItems.map((item) => (item.id === lineId ? { ...item, quantity } : item)));
  };

  const handleProductEdit = (product: ICommerceProduct) => {
    const matchedCategoryId =
      product.categoryId ||
      categories.find((category) => category.name.toLowerCase() === (product.categoryName || '').toLowerCase())?.id ||
      '';

    setEditingId(product.id);
    productMethods.reset({
      name: product.name,
      sku: product.sku || '',
      barcode: product.barcode || '',
      categoryId: matchedCategoryId,
      categoryName: product.categoryName || '',
      description: product.description || '',
      priceCents: getBasePrice(product),
      compareAtPriceCents: product.compareAtPriceCents || 0,
      costCents: product.costCents || 0,
      lowStockThreshold: product.lowStockThreshold || 5,
      tagsText: product.tags?.join(', ') || '',
      photos: product.photos || [],
      status: (product.status as any) || 'active',
      variants: product.variants?.map(v => ({ name: v.name, sku: v.sku || '', priceCents: v.priceCents, stock: v.stock })) || [],
      modifierGroups: product.modifierGroups?.map(g => ({
        name: g.name,
        minSelected: g.minSelected,
        maxSelected: g.maxSelected,
        modifiers: g.modifiers.map(m => ({ name: m.name, priceCents: m.priceCents }))
      })) || [],
    });
    setActiveTab('general');
    productDialog.onTrue();
  };

  const openCreateProductDialog = () => {
    setEditingId(null);
    productMethods.reset(DEFAULT_PRODUCT_FORM_VALUES);
    setActiveTab('general');
    productDialog.onTrue();
  };

  const closeProductDialog = () => {
    setEditingId(null);
    productMethods.reset(DEFAULT_PRODUCT_FORM_VALUES);
    setActiveTab('general');
    productDialog.onFalse();
  };

  const handleCreateCategory = () => {
    setEditingCategoryId(null);
    categoryMethods.reset({ name: '', description: '', isActive: true });
    categoryDialog.onTrue();
  };

  const handleCreateCoupon = () => {
    setEditingCouponId(null);
    couponMethods.reset({ code: '', type: 'percent', value: 0, minOrderCents: 0, maxUsage: '', expiresAt: '', isActive: true });
    couponDialog.onTrue();
  };

  const handleCouponEdit = (coupon: ICommerceCoupon) => {
    setEditingCouponId(coupon.id);
    couponMethods.reset({
      code: coupon.code,
      type: coupon.type,
      value: coupon.value,
      minOrderCents: coupon.minOrderCents || 0,
      maxUsage: coupon.maxUsage ?? '',
      expiresAt: coupon.expiresAt ? new Date(coupon.expiresAt).toISOString().slice(0, 16) : '',
      isActive: coupon.isActive,
    });
    couponDialog.onTrue();
  };

  const handleCouponToggle = (coupon: ICommerceCoupon) => {
    updateCouponMutation.mutate({
      code: coupon.code,
      type: coupon.type,
      value: coupon.value,
      minOrderCents: coupon.minOrderCents || 0,
      maxUsage: coupon.maxUsage ?? '',
      expiresAt: coupon.expiresAt ? new Date(coupon.expiresAt).toISOString().slice(0, 16) : '',
      isActive: !coupon.isActive,
    });
  };

  const handleCategoryEdit = (category: ICommerceCategory) => {
    setEditingCategoryId(category.id);
    categoryMethods.reset({
      name: category.name,
      description: category.description || '',
      isActive: category.isActive !== false,
    });
    categoryDialog.onTrue();
  };

  const handleCategoryDelete = (categoryId: string) => {
    const category = catalogCategories.find((item) => item.id === categoryId);

    if (category?.productCount) {
      showToast({
        message: `${category.name} is assigned to ${category.productCount} product${category.productCount > 1 ? 's' : ''}. Reassign those products before deleting it.`,
        severity: 'warning',
      });
      return;
    }

    deleteCategoryMutation.mutate(categoryId);
  };

  const clearCart = () => persistCart([]);

  const saveSettings = (values: SettingsFormValues) => {
    writeStorage(settingsStorageKey(resolvedShopKey), values);
    showToast({ message: 'Shop settings saved locally.', severity: 'success' });
  };

  const addTableLayout = () => {
    persistTables([
      ...tableLayouts,
      {
        id: crypto.randomUUID(),
        name: `Table ${tableLayouts.length + 1}`,
        seats: 4,
        status: 'available',
      },
    ]);
  };

  const updateTable = (tableId: string, changes: Partial<{ name: string; seats: number; status: 'available' | 'occupied' | 'reserved' }>) => {
    persistTables(tableLayouts.map(t => t.id === tableId ? { ...t, ...changes } : t));
  };

  const removeCartLine = (lineId: string) => {
    persistCart(cartItems.filter((item) => item.id !== lineId));
  };

  const removeTableLayout = (tableId: string) => {
    persistTables(tableLayouts.filter((item) => item.id !== tableId));
  };

  const updateOrderState = (targetId: string, changes: Partial<LocalOrder>) => {
    const existing = mergedOrders.find((item) => item.id === targetId);
    if (!existing) return;

    persistOrders([
      ...localOrders.filter((item) => item.id !== targetId),
      {
        ...existing,
        ...changes,
      },
    ]);
  };

  const markOrderProcessing = (targetId: string) => {
    updateOrderState(targetId, { status: 'processing', paymentStatus: 'paid' });
    showToast({ message: 'Order moved to processing.', severity: 'success' });
  };

  const markOrderCompleted = (targetId: string) => {
    updateOrderState(targetId, { status: 'completed', paymentStatus: 'paid' });
    showToast({ message: 'Order marked completed.', severity: 'success' });
  };

  const openOrderDetail = (id: string) => {
    setSelectedOrderId(id);
    orderDialog.onTrue();
  };

  const handleCheckout = async (values: CheckoutFormValues) => {
    if (cartItems.length === 0) {
      showToast({ message: 'Add products to the cart before checking out.', severity: 'warning' });
      return;
    }

    const localOrder: LocalOrder = {
      id: crypto.randomUUID(),
      source: authenticated ? 'server' : 'local',
      status: 'pending',
      paymentStatus: 'unpaid',
      totalAmountCents: cartTotalCents,
      createdAt: new Date().toISOString(),
      shippingAddress: {
        customerName: values.customerName,
        email: values.email,
        phone: values.phone,
        line1: values.line1,
        city: values.city,
        state: values.state,
        postalCode: values.postalCode,
        country: values.country,
      },
      items: cartItems.map((item) => ({
        id: item.id,
        productId: item.productId,
        productName: item.variantName ? `${item.name} (${item.variantName})` : item.name,
        quantity: item.quantity,
        unitPriceCents: item.unitPriceCents,
      })),
    };

    if (authenticated) {
      try {
        const createdOrder = await createOrderMutation.mutateAsync({
          contact_id: contactId,
          coupon_code: activeCoupon?.code || null,
          discount_cents: discountCents,
          items: cartItems.map((item) => ({
            product_id: item.productId,
            product_name: item.variantName ? `${item.name} (${item.variantName})` : item.name,
            quantity: item.quantity,
            unit_price_cents: item.unitPriceCents,
          })),
          shipping_address: localOrder.shippingAddress,
        });

        const normalized = normalizeOrder(createdOrder);
        persistOrders([...localOrders.filter((item) => item.id !== normalized.id), normalized]);
        clearCart();
        showToast({ message: 'Order created successfully.', severity: 'success' });
        router.push(paths.public.orderPayment(normalized.id));
        return;
      } catch {
        // Fall through to local draft order.
      }
    }

    persistOrders([...localOrders, localOrder]);
    clearCart();
    showToast({
      message: authenticated
        ? 'Order was saved locally because the backend checkout failed.'
        : 'Draft order saved locally. Complete payment to finish the flow.',
      severity: authenticated ? 'warning' : 'success',
    });
    router.push(paths.public.orderPayment(localOrder.id));
  };

  const handleCompletePayment = () => {
    if (!selectedOrder) return;

    updateOrderState(selectedOrder.id, {
      paymentStatus: 'paid',
      status: selectedOrder.status === 'pending' ? 'processing' : selectedOrder.status,
    });

    showToast({ message: 'Payment marked as completed.', severity: 'success' });
    router.push(paths.public.onlineShopReceipt(selectedOrder.id, type || 'order'));
  };

  const pageTitle = useMemo(() => {
    if (mode === 'checkout') return 'Shop Checkout';
    if (mode === 'order-payment') return 'Order Payment';
    if (mode === 'receipt') return 'Receipt';
    if (mode === 'product-detail' || mode === 'online-product') return 'Product Detail';
    if (isStorefrontMode) return 'Storefront';
    return 'Commerce Workspace';
  }, [isStorefrontMode, mode]);

  const pageDescription = useMemo(() => {
    if (mode === 'checkout') return 'Review the cart and place the order.';
    if (mode === 'order-payment') return 'Complete payment for the current order.';
    if (mode === 'receipt') return 'Review the receipt details for a completed order.';
    if (mode === 'product-detail' || mode === 'online-product') return 'Review a single product and add it to the cart.';
    if (isStorefrontMode) return 'Browse the live shop catalog.';
    return 'Manage products, categories, coupons, orders, and storefront settings.';
  }, [isStorefrontMode, mode]);

  const isLoading =
    productsQuery.isLoading ||
    (!isStorefrontMode &&
      (ordersQuery.isLoading || categoriesQuery.isLoading || couponsQuery.isLoading));

  const cartSummary = (
    <CommerceCartSummary
      cartItems={cartItems}
      appliedCouponCode={appliedCouponCode}
      onCouponChange={setAppliedCouponCode}
      activeCouponCode={activeCoupon?.code}
      couponMessage={couponFeedback?.message}
      couponSeverity={couponFeedback?.severity}
      cartSubtotalCents={cartSubtotalCents}
      discountCents={discountCents}
      taxAmountCents={taxAmountCents}
      cartTotalCents={cartTotalCents}
      storefrontCheckoutHref={storefrontCheckoutHref}
      isCheckoutMode={mode === 'checkout'}
      checkoutDisabled={cartItems.length === 0}
      checkoutLabel={cartItems.length === 0 ? 'Add items to checkout' : 'Checkout'}
      onClear={clearCart}
      onUpdateQuantity={updateCartQuantity}
      onRemoveLine={removeCartLine}
    />
  );

  return (
    <DashboardContent maxWidth="xl">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography variant="h3">{pageTitle}</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 0.5 }}>
            {pageDescription}
          </Typography>
        </Box>

        {!isStorefrontMode && (
          <Stack direction="row" spacing={1.5}>
            <Button color="inherit" onClick={() => handleModuleChange('settings')}>
              Settings
            </Button>
            <Button component={Link} href={paths.public.onlineShop(resolvedShopKey, contactId)} variant="contained">
              View storefront
            </Button>
          </Stack>
        )}
      </Stack>

      {productsQuery.isError && (
        <Alert severity="warning" sx={{ mb: 3 }}>
          Product data could not be loaded for this shop. Verify the shop identifier or backend mapping.
        </Alert>
      )}

      {isLoading ? (
        <Box sx={{ py: 8, textAlign: 'center' }}>
          <CircularProgress />
        </Box>
      ) : mode === 'checkout' ? (
        <CommerceCheckoutPanel
          checkoutMethods={checkoutMethods}
          onSubmit={checkoutMethods.handleSubmit(handleCheckout)}
          isPending={createOrderMutation.isPending}
          cartItemsLength={cartItems.length}
          cartTotalCents={cartTotalCents}
          authenticated={authenticated}
          cartSummary={cartSummary}
        />
      ) : mode === 'order-payment' ? (
        <CommerceOrderCard
          selectedOrder={selectedOrder}
          mode="payment"
          onPrimaryAction={handleCompletePayment}
          primaryDisabled={selectedOrder?.paymentStatus === 'paid'}
          primaryLabel={selectedOrder?.paymentStatus === 'paid' ? 'Already paid' : 'Mark payment as complete'}
          onSecondaryAction={() => selectedOrder && router.push(paths.public.onlineShopReceipt(selectedOrder.id, 'order'))}
          secondaryLabel="View receipt"
          resolvedShopKey={resolvedShopKey}
        />
      ) : mode === 'receipt' ? (
        <CommerceOrderCard
          selectedOrder={selectedOrder}
          mode="receipt"
          shopPath={shopPath}
          resolvedShopKey={resolvedShopKey}
          contactId={contactId}
        />
      ) : mode === 'product-detail' || mode === 'online-product' ? (
        <CommerceProductDetail
          selectedProduct={selectedProduct}
          selectedVariantId={selectedVariantId}
          onVariantChange={setSelectedVariantId}
          detailQuantity={detailQuantity}
          detailPriceCents={selectedVariantPriceCents}
          availableStock={selectedVariantStock}
          onQuantityChange={(value) =>
            setDetailQuantity(Math.min(Math.max(1, value), Math.max(1, selectedVariantStock || 1)))
          }
          onAddToCart={() => selectedProduct && addProductToCart(selectedProduct, detailQuantity, selectedVariantId)}
          shopPath={shopPath}
          resolvedShopKey={resolvedShopKey}
          contactId={contactId}
          cartSummary={cartSummary}
        />
      ) : isStorefrontMode ? (
        <CommerceStorefrontGrid
          shopName={settingsMethods.watch('shopName') || DEFAULT_SETTINGS.shopName}
          search={search}
          onSearchChange={setSearch}
          products={filteredProducts}
          shopPath={shopPath}
          resolvedShopKey={resolvedShopKey}
          onAddToCart={addProductToCart}
          cartSummary={cartSummary}
        />
      ) : (
        <CommerceDashboardModules
          currentModule={currentModule}
          onModuleChange={handleModuleChange}
          summaryCards={
            <CommerceSummaryCards
              products={products}
              orders={mergedOrders}
              cartItems={cartItems}
              topProducts={topProducts}
            />
          }
          productsTable={
            <CommerceProductsTable
              filteredProducts={filteredProducts}
              categories={catalogCategories}
              resolvedShopKey={resolvedShopKey}
              search={search}
              categoryFilter={productCategoryFilter}
              onCreate={openCreateProductDialog}
              onSearchChange={setSearch}
              onCategoryFilterChange={setProductCategoryFilter}
              onEdit={handleProductEdit}
              onDelete={(id) => deleteProductMutation.mutate(id)}
            />
          }
          productForm={null}
          categoriesTable={
            <CommerceCategoriesTable
              categories={filteredCategories}
              search={categorySearch}
              onSearchChange={setCategorySearch}
              onCreate={handleCreateCategory}
              onEdit={handleCategoryEdit}
              onDelete={handleCategoryDelete}
            />
          }
          couponsTable={
            <CommerceCouponsTable
              coupons={filteredCoupons}
              search={couponSearch}
              onCreate={handleCreateCoupon}
              onSearchChange={setCouponSearch}
              onEdit={handleCouponEdit}
              onToggleActive={handleCouponToggle}
              onDelete={(id) => deleteCouponMutation.mutate(id)}
            />
          }
          ordersTable={
            <CommerceOrdersTable
              orders={filteredOrders}
              search={orderSearch}
              statusFilter={orderStatusFilter}
              onSearchChange={setOrderSearch}
              onStatusFilterChange={setOrderStatusFilter}
              onView={(id) => { setSelectedOrderId(id); orderDialog.onTrue(); }}
              onPay={(nextOrderId) => router.push(paths.public.orderPayment(nextOrderId))}
              onReceipt={(nextOrderId) => router.push(paths.public.onlineShopReceipt(nextOrderId, 'order'))}
              onMarkProcessing={markOrderProcessing}
              onMarkCompleted={markOrderCompleted}
            />
          }
          customersTable={<CommerceCustomersTable customers={customers} />}
          membershipsTable={
            <Card sx={{ p: 3 }}>
              <Typography variant="h5">Memberships</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                Membership analytics are being consolidated into Magento-backed customer segments.
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                Use the Customers tab for active buyer insights while membership sync is finalized.
              </Alert>
            </Card>
          }
          posPanel={
            <Card sx={{ p: 3 }}>
              <Typography variant="h5">POS Operations</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                Launch the POS surfaces for this shop context.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: 2 }}>
                <Button variant="contained" href={paths.dashboard.pos(posRouteShopId)}>
                  Open POS
                </Button>
                <Button color="inherit" variant="outlined" href={paths.dashboard.posOrders(posRouteShopId)}>
                  Orders
                </Button>
                <Button color="inherit" variant="outlined" href={paths.dashboard.posSettings(posRouteShopId)}>
                  Settings
                </Button>
              </Stack>
            </Card>
          }
          kdsPanel={
            <Card sx={{ p: 3 }}>
              <Typography variant="h5">Kitchen Display System</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, mb: 2 }}>
                Open the KDS view for live kitchen ticket handling.
              </Typography>
              <Button variant="contained" href={paths.dashboard.posKds(posRouteShopId)}>
                Open KDS
              </Button>
            </Card>
          }
          cfdPanel={
            <Card sx={{ p: 3 }}>
              <Typography variant="h5">Customer-Facing Display</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, mb: 2 }}>
                Launch the customer display surface for checkout visibility.
              </Typography>
              <Button variant="contained" href={paths.dashboard.posCfd(posRouteShopId)}>
                Open CFD
              </Button>
            </Card>
          }
          kioskPanel={
            <Card sx={{ p: 3 }}>
              <Typography variant="h5">Kiosk Mode</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, mb: 2 }}>
                Launch self-service kiosk ordering for this shop.
              </Typography>
              <Button variant="contained" href={paths.dashboard.posKiosk(posRouteShopId)}>
                Open Kiosk
              </Button>
            </Card>
          }
          inventoryPanel={
            <CommerceProductsTable
              filteredProducts={filteredProducts}
              categories={catalogCategories}
              resolvedShopKey={resolvedShopKey}
              search={search}
              categoryFilter={productCategoryFilter}
              onCreate={openCreateProductDialog}
              onSearchChange={setSearch}
              onCategoryFilterChange={setProductCategoryFilter}
              onEdit={handleProductEdit}
              onDelete={(id) => deleteProductMutation.mutate(id)}
            />
          }
          designerPanel={
            <Card sx={{ p: 3 }}>
              <Typography variant="h5">Designer</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                POS layout designer tools are queued for the next parity iteration.
              </Typography>
              <Alert severity="info" sx={{ mt: 2 }}>
                Use Tables for operational floor setup today.
              </Alert>
            </Card>
          }
          tablesPanel={
            <CommerceTablesPanel
              tables={tableLayouts}
              onAdd={addTableLayout}
              onUpdate={updateTable}
              onRemove={removeTableLayout}
              onOpenGuide={tableDialog.onTrue}
            />
          }
          settingsPanel={
            <CommerceSettingsPanel
              settingsMethods={settingsMethods}
              resolvedShopKey={resolvedShopKey}
              checkoutRouteKey={checkoutRouteKey}
              contactId={contactId}
              storefrontCheckoutHref={storefrontCheckoutHref}
              onSubmit={settingsMethods.handleSubmit(saveSettings)}
            />
          }
        />
      )}

      <CommerceCategoryDialog
        open={categoryDialog.value}
        onClose={() => {
          setEditingCategoryId(null);
          categoryMethods.reset({ name: '', description: '', isActive: true });
          categoryDialog.onFalse();
        }}
        methods={categoryMethods}
        editingId={editingCategoryId}
        onSubmit={categoryMethods.handleSubmit((values) =>
          editingCategoryId ? updateCategoryMutation.mutate(values) : createCategoryMutation.mutate(values)
        )}
        isPending={createCategoryMutation.isPending || updateCategoryMutation.isPending}
      />

      {(currentModule === 'products' || currentModule === 'inventory') && (
        <CommerceProductDetailDialog
          open={productDialog.value}
          onClose={closeProductDialog}
          title={editingId ? 'Edit product' : 'Create product'}
          content={
            <CommerceProductFormCard
              activeTab={activeTab}
              onTabChange={setActiveTab}
              productMethods={productMethods}
              variantFields={variantFields}
              appendVariant={appendVariant}
              removeVariant={removeVariant}
              modifierGroupFields={modifierGroupFields}
              appendModifierGroup={appendModifierGroup}
              removeModifierGroup={removeModifierGroup}
              categories={catalogCategories}
              editingId={editingId}
              onCreateCategory={handleCreateCategory}
              onUploadImages={(files) => uploadProductImageMutation.mutate(files)}
              isUploadingImages={uploadProductImageMutation.isPending}
              onCancelEdit={closeProductDialog}
              modal
              onSubmit={productMethods.handleSubmit((values) =>
                editingId ? updateProductMutation.mutate(values) : createProductMutation.mutate(values)
              )}
              isPending={createProductMutation.isPending || updateProductMutation.isPending}
            />
          }
        />
      )}

      <CommerceCouponDialog
        open={couponDialog.value}
        onClose={() => {
          setEditingCouponId(null);
          couponMethods.reset({ code: '', type: 'percent', value: 0, minOrderCents: 0, maxUsage: '', expiresAt: '', isActive: true });
          couponDialog.onFalse();
        }}
        methods={couponMethods}
        editingId={editingCouponId}
        onSubmit={couponMethods.handleSubmit((values) =>
          editingCouponId ? updateCouponMutation.mutate(values) : createCouponMutation.mutate(values)
        )}
        isPending={createCouponMutation.isPending || updateCouponMutation.isPending}
      />

      <CommerceTableGuideDialog open={tableDialog.value} onClose={tableDialog.onFalse} />

      <CommerceOrderDetailDialog
        open={orderDialog.value}
        onClose={orderDialog.onFalse}
        order={mergedOrders.find((o) => o.id === selectedOrderId)}
        onStatusUpdate={(id, status, pStatus) => {
          updateOrderState(id, { status, paymentStatus: pStatus || 'paid' });
          showToast({ message: 'Order status updated.', severity: 'success' });
        }}
        onReceipt={(id) => router.push(paths.public.onlineShopReceipt(id, 'order'))}
      />
    </DashboardContent>
  );
}
