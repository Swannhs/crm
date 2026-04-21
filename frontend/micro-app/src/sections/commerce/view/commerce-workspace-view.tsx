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
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { DashboardContent } from 'src/layouts/dashboard';
import { useAuthContext } from 'src/auth/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { showToast } from 'src/components/toast';
import { commerceService, type ICommerceProduct } from 'src/services/commerce-service';
import { publicCommerceService } from 'src/services/public-commerce-service';

import {
  CHECKOUT_FORM_SCHEMA,
  CATEGORY_FORM_SCHEMA,
  COUPON_FORM_SCHEMA,
  DEFAULT_SETTINGS,
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
  CommerceDashboardModules,
  CommerceOrderCard,
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
  const checkoutRouteKey = shopPath || shopId || resolvedShopKey;

  const [activeTab, setActiveTab] = useState<'general' | 'variants' | 'modifiers'>('general');
  const [currentModule, setCurrentModule] = useState<CommerceDashboardModule>(resolveInitialModule(mode));
  const [search, setSearch] = useState('');
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('all');
  const [selectedVariantId, setSelectedVariantId] = useState('');
  const [detailQuantity, setDetailQuantity] = useState(1);
  const [appliedCouponCode, setAppliedCouponCode] = useState('');
  const [cartItems, setCartItems] = useState<CartLine[]>([]);
  const [localOrders, setLocalOrders] = useState<LocalOrder[]>([]);
  const [tableLayouts, setTableLayouts] = useState<Array<{ id: string; name: string; seats: number; status: 'available' | 'occupied' | 'reserved' }>>([]);

  const categoryDialog = useBoolean();
  const couponDialog = useBoolean();
  const tableDialog = useBoolean();

  const productMethods = useForm<ProductFormValues>({
    resolver: zodResolver(PRODUCT_FORM_SCHEMA),
    defaultValues: {
      name: '',
      description: '',
      priceCents: 0,
      status: 'active',
      variants: [],
      modifierGroups: [],
    },
  });

  const categoryMethods = useForm<CategoryFormValues>({
    resolver: zodResolver(CATEGORY_FORM_SCHEMA),
    defaultValues: { name: '', description: '' },
  });

  const couponMethods = useForm<CouponFormValues>({
    resolver: zodResolver(COUPON_FORM_SCHEMA),
    defaultValues: { code: '', type: 'percent', value: 0 },
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
    setCurrentModule(resolveInitialModule(mode));
  }, [mode]);

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
    queryKey: ['commerce-categories', resolvedOrgId],
    enabled: authenticated && !isStorefrontMode,
    queryFn: () => commerceService.getCategories(),
  });

  const couponsQuery = useQuery({
    queryKey: ['commerce-coupons', resolvedOrgId],
    enabled: authenticated && !isStorefrontMode,
    queryFn: () => commerceService.getCoupons(),
  });

  const createProductMutation = useMutation({
    mutationFn: (values: ProductFormValues) =>
      commerceService.createProduct({
        name: values.name,
        description: values.description,
        price_cents: values.priceCents,
        status: values.status,
        variants: values.variants,
        modifierGroups: values.modifierGroups,
      }),
    onSuccess: async () => {
      productMethods.reset({
        name: '',
        description: '',
        priceCents: 0,
        status: 'active',
        variants: [],
        modifierGroups: [],
      });
      showToast({ message: 'Product created successfully.', severity: 'success' });
      await queryClient.invalidateQueries({ queryKey: ['commerce-products'] });
    },
  });

  const createCategoryMutation = useMutation({
    mutationFn: (values: CategoryFormValues) => commerceService.createCategory(values),
    onSuccess: async () => {
      categoryMethods.reset({ name: '', description: '' });
      categoryDialog.onFalse();
      showToast({ message: 'Category created successfully.', severity: 'success' });
      await queryClient.invalidateQueries({ queryKey: ['commerce-categories'] });
    },
  });

  const createCouponMutation = useMutation({
    mutationFn: (values: CouponFormValues) => commerceService.createCoupon(values),
    onSuccess: async () => {
      couponMethods.reset({ code: '', type: 'percent', value: 0 });
      couponDialog.onFalse();
      showToast({ message: 'Coupon created successfully.', severity: 'success' });
      await queryClient.invalidateQueries({ queryKey: ['commerce-coupons'] });
    },
  });

  const createOrderMutation = useMutation({
    mutationFn: (payload: any) => commerceService.createOrder(payload),
  });

  const products = useMemo<ICommerceProduct[]>(
    () => (Array.isArray(productsQuery.data) ? productsQuery.data : []),
    [productsQuery.data]
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
    if (!search.trim()) return products;

    const query = search.toLowerCase();
    return products.filter((product) => {
      const description = product.description?.toLowerCase() || '';
      return product.name.toLowerCase().includes(query) || description.includes(query);
    });
  }, [products, search]);

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
    const coupons = Array.isArray(couponsQuery.data) ? couponsQuery.data : [];
    return coupons.find(
      (coupon: any) =>
        coupon.code?.toLowerCase() === appliedCouponCode.trim().toLowerCase() &&
        coupon.isActive !== false
    );
  }, [appliedCouponCode, couponsQuery.data]);

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
        item.items.some((line) => line.productName.toLowerCase().includes(orderSearch.toLowerCase()));

      const matchesStatus =
        orderStatusFilter === 'all' ||
        item.status === orderStatusFilter ||
        item.paymentStatus === orderStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [mergedOrders, orderSearch, orderStatusFilter]);

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
      couponMessage={
        appliedCouponCode.trim()
          ? activeCoupon
            ? activeCoupon.type === 'percent'
              ? `${activeCoupon.value}% discount is active.`
              : `${activeCoupon.code} applies $${((activeCoupon.value || 0) / 100).toFixed(2)} off.`
            : 'Coupon not found or inactive.'
          : undefined
      }
      couponSeverity={appliedCouponCode.trim() ? (activeCoupon ? 'success' : 'warning') : undefined}
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
            <Button color="inherit" onClick={() => setCurrentModule('settings')}>
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
          onModuleChange={setCurrentModule}
          summaryCards={<CommerceSummaryCards products={products} orders={mergedOrders} cartItems={cartItems} />}
          productsTable={
            <CommerceProductsTable
              filteredProducts={filteredProducts}
              resolvedShopKey={resolvedShopKey}
              search={search}
              onSearchChange={setSearch}
            />
          }
          productForm={
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
              onSubmit={handleSubmit((values) => createProductMutation.mutate(values))}
              isPending={createProductMutation.isPending}
            />
          }
          categoriesTable={
            <CommerceCategoriesTable
              categories={Array.isArray(categoriesQuery.data) ? categoriesQuery.data : []}
              onCreate={categoryDialog.onTrue}
            />
          }
          couponsTable={
            <CommerceCouponsTable
              coupons={Array.isArray(couponsQuery.data) ? couponsQuery.data : []}
              onCreate={couponDialog.onTrue}
            />
          }
          ordersTable={
            <CommerceOrdersTable
              orders={filteredOrders}
              search={orderSearch}
              statusFilter={orderStatusFilter}
              onSearchChange={setOrderSearch}
              onStatusFilterChange={setOrderStatusFilter}
              onPay={(nextOrderId) => router.push(paths.public.orderPayment(nextOrderId))}
              onReceipt={(nextOrderId) => router.push(paths.public.onlineShopReceipt(nextOrderId, 'order'))}
              onMarkProcessing={markOrderProcessing}
              onMarkCompleted={markOrderCompleted}
            />
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
        onClose={categoryDialog.onFalse}
        methods={categoryMethods}
        onSubmit={categoryMethods.handleSubmit((values) => createCategoryMutation.mutate(values))}
        isPending={createCategoryMutation.isPending}
      />

      <CommerceCouponDialog
        open={couponDialog.value}
        onClose={couponDialog.onFalse}
        methods={couponMethods}
        onSubmit={couponMethods.handleSubmit((values) => createCouponMutation.mutate(values))}
        isPending={createCouponMutation.isPending}
      />

      <CommerceTableGuideDialog open={tableDialog.value} onClose={tableDialog.onFalse} />
    </DashboardContent>
  );
}
