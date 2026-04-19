'use client';

import Link from 'next/link';
import { z as zod } from 'zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { paths } from 'src/routes/paths';
import { DashboardContent } from 'src/layouts/dashboard';
import { commerceService } from 'src/services/commerce-service';
import { FeatureRouteShell } from 'src/sections/parity/feature-route-shell';
import { Form, RHFTextField } from 'src/components/hook-form';
import { fCurrency } from 'src/utils/format-number';

// ----------------------------------------------------------------------

const ProductSchema = zod.object({
  name: zod.string().min(1, 'Product name is required'),
  description: zod.string().optional(),
  price_cents: zod.coerce.number().min(0, 'Price must be non-negative'),
});

type Props = {
  mode?:
    | 'dashboard-shop'
    | 'dashboard-products'
    | 'dashboard-orders'
    | 'public-shop'
    | 'public-products'
    | 'public-memberships'
    | 'public-courses'
    | 'product-detail'
    | 'checkout'
    | 'order-payment'
    | 'shipping-payment'
    | 'receipt'
    | 'online-shop'
    | 'online-product'
    | 'online-orders';
  shopPath?: string;
  shopId?: string;
  contactId?: string;
  productId?: string;
  cartId?: string;
  orderId?: string;
  incomeId?: string;
  receiptId?: string;
};

export function CommerceWorkspaceView({
  mode = 'dashboard-shop',
  shopPath,
  shopId,
  contactId,
  productId,
  cartId,
  orderId,
  incomeId,
  receiptId,
}: Props) {
  const queryClient = useQueryClient();
  const productMethods = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: { name: '', description: '', price_cents: 0 },
  });

  const productsQuery = useQuery({
    queryKey: ['commerce-products'],
    queryFn: () => commerceService.getProducts(),
  });

  const ordersQuery = useQuery({
    queryKey: ['commerce-orders'],
    queryFn: () => commerceService.getOrders(),
  });

  const createProductMutation = useMutation({
    mutationFn: (values: any) => commerceService.createProduct(values),
    onSuccess: async () => {
      productMethods.reset();
      await queryClient.invalidateQueries({ queryKey: ['commerce-products'] });
    },
  });

  const title = useMemo(() => {
    switch (mode) {
      case 'dashboard-products':
        return 'Products';
      case 'dashboard-orders':
        return 'Orders';
      case 'public-shop':
        return 'Public Shop';
      case 'public-products':
        return 'Products Catalog';
      case 'public-memberships':
        return 'Memberships Catalog';
      case 'public-courses':
        return 'Courses Catalog';
      case 'product-detail':
        return 'Product Detail';
      case 'checkout':
        return 'Checkout';
      case 'order-payment':
        return 'Order Payment';
      case 'shipping-payment':
        return 'Shipping Payment';
      case 'receipt':
        return 'Online Shop Receipt';
      case 'online-shop':
        return 'Online Shop';
      case 'online-product':
        return 'Online Product Detail';
      case 'online-orders':
        return 'Customer Orders';
      default:
        return 'Shop';
    }
  }, [mode]);

  if (productsQuery.isLoading || ordersQuery.isLoading) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  const products = productsQuery.data || [];
  const orders = ordersQuery.data || [];
  const highlightedProduct =
    products.find((product: any) => product.id === productId || product._id === productId) || products[0];

  const shellContent = (
    <Grid container spacing={3}>
      <Grid item xs={12} md={mode === 'dashboard-products' ? 7 : 8}>
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {mode.includes('order') || mode === 'receipt' ? 'Orders' : 'Products'}
          </Typography>
          <Stack spacing={2}>
            {(mode.includes('order') || mode === 'receipt' ? orders : products).map((item: any) => (
              <Box key={item.id || item._id} sx={{ p: 2, borderRadius: 2, bgcolor: 'background.neutral' }}>
                <Typography variant="subtitle2">
                  {item.name || item.productName || item.id || item._id}
                </Typography>
                {'priceCents' in item || 'price_cents' in item ? (
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fCurrency((item.priceCents ?? item.price_cents ?? 0) / 100)}
                  </Typography>
                ) : (
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {fCurrency((item.totalAmountCents ?? 0) / 100)} • {item.status || item.paymentStatus}
                  </Typography>
                )}
              </Box>
            ))}

            {(mode.includes('order') || mode === 'receipt' ? orders : products).length === 0 && (
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                No commerce records are available yet for this tenant.
              </Typography>
            )}
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">Route Context</Typography>
            <Typography variant="body2">shopPath: {shopPath || 'n/a'}</Typography>
            <Typography variant="body2">shopId: {shopId || 'n/a'}</Typography>
            <Typography variant="body2">contactId: {contactId || 'n/a'}</Typography>
            <Typography variant="body2">productId: {productId || 'n/a'}</Typography>
            <Typography variant="body2">cartId: {cartId || 'n/a'}</Typography>
            <Typography variant="body2">orderId: {orderId || 'n/a'}</Typography>
            <Typography variant="body2">incomeId: {incomeId || 'n/a'}</Typography>
            <Typography variant="body2">receiptId: {receiptId || 'n/a'}</Typography>
            {(mode === 'product-detail' || mode === 'online-product') && highlightedProduct && (
              <>
                <Divider />
                <Typography variant="subtitle2">{highlightedProduct.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {highlightedProduct.description || 'No description'}
                </Typography>
              </>
            )}
            {mode === 'checkout' && (
              <Alert severity="info">
                Checkout route is present in the new app, but full cart and payment-processor parity still depends on broader commerce backend work.
              </Alert>
            )}
          </Stack>
        </Card>
      </Grid>

      {mode === 'dashboard-products' && (
        <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Add Product
            </Typography>
            <Form
              methods={productMethods}
              onSubmit={productMethods.handleSubmit((values) => createProductMutation.mutate(values))}
            >
              <Stack spacing={2}>
                <RHFTextField name="name" label="Product Name" />
                <RHFTextField name="description" label="Description" />
                <RHFTextField name="price_cents" label="Price (cents)" type="number" />
                <Button type="submit" variant="contained" disabled={createProductMutation.isPending}>
                  Create Product
                </Button>
              </Stack>
            </Form>
          </Card>
        </Grid>
      )}
    </Grid>
  );

  if (mode.startsWith('dashboard')) {
    return (
      <DashboardContent maxWidth="xl">
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4">{title}</Typography>
          <Stack direction="row" spacing={1}>
            <Button component={Link} href={paths.dashboard.shop} variant="soft" color="inherit">
              Shop
            </Button>
            <Button component={Link} href={paths.dashboard.products} variant="soft" color="inherit">
              Products
            </Button>
            <Button component={Link} href={paths.dashboard.orders} variant="soft" color="inherit">
              Orders
            </Button>
          </Stack>
        </Box>
        {shellContent}
      </DashboardContent>
    );
  }

  return (
    <FeatureRouteShell
      title={title}
      description="Legacy commerce storefront, checkout, receipt, and order-payment routes mapped into the micro-app."
      links={[
        { href: paths.dashboard.shop, label: 'Dashboard Shop' },
        { href: paths.dashboard.products, label: 'Dashboard Products' },
        { href: paths.dashboard.orders, label: 'Dashboard Orders' },
      ]}
    >
      {shellContent}
    </FeatureRouteShell>
  );
}
