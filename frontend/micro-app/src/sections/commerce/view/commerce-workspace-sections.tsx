import Link from 'next/link';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LinearProgress from '@mui/material/LinearProgress';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { Form, RHFTextField } from 'src/components/hook-form';
import { fCurrency } from 'src/utils/format-number';
import { Iconify } from 'src/components/iconify';

import type { ICommerceProduct } from 'src/services/commerce-service';

import type { CartLine, CommerceDashboardModule, LocalOrder, ProductFormValues } from './commerce-workspace.types';
import {
  getAvailableStock,
  getBasePrice,
  getInventoryTotal,
  getProductHref,
  getStorefrontHomeHref,
  inventoryStatus,
  isProductPurchasable,
  orderStatusColor,
} from './commerce-workspace.utils';

type SummaryCardsProps = {
  products: ICommerceProduct[];
  orders: LocalOrder[];
  cartItems: CartLine[];
};

export function CommerceSummaryCards({ products, orders, cartItems }: SummaryCardsProps) {
  return (
    <Grid container spacing={3}>
      {[
        {
          label: 'Products',
          value: products.length,
          icon: 'solar:box-bold-duotone',
          helper: `${products.filter((product) => product.status === 'active').length} active listings`,
        },
        {
          label: 'Orders',
          value: orders.length,
          icon: 'solar:cart-large-bold-duotone',
          helper: `${orders.filter((item) => item.paymentStatus === 'paid').length} paid`,
        },
        {
          label: 'Revenue',
          value: fCurrency(orders.reduce((sum, item) => sum + (item.totalAmountCents || 0), 0) / 100),
          icon: 'solar:wad-of-money-bold-duotone',
          helper: `${cartItems.length} items currently in cart`,
        },
      ].map((item) => (
        <Grid item xs={12} md={4} key={item.label}>
          <Card sx={{ p: 3 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  bgcolor: 'background.neutral',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Iconify icon={item.icon} width={28} />
              </Box>
              <Box>
                <Typography variant="overline" sx={{ color: 'text.secondary' }}>
                  {item.label}
                </Typography>
                <Typography variant="h4">{item.value}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {item.helper}
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

type ProductsTableProps = {
  filteredProducts: ICommerceProduct[];
  resolvedShopKey: string;
  search: string;
  onSearchChange: (value: string) => void;
};

export function CommerceProductsTable({
  filteredProducts,
  resolvedShopKey,
  search,
  onSearchChange,
}: ProductsTableProps) {
  return (
    <Card sx={{ overflow: 'hidden' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'stretch', md: 'center' }}
        justifyContent="space-between"
        sx={{ p: 3 }}
      >
        <Box>
          <Typography variant="h5">Catalog</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Create and review the products sold through your shop.
          </Typography>
        </Box>
        <TextField
          size="small"
          placeholder="Search products"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="solar:magnifer-bold-duotone" width={18} />
              </InputAdornment>
            ),
          }}
          sx={{ minWidth: { md: 280 } }}
        />
      </Stack>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Inventory</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((product) => {
              const hasTrackedInventory = Boolean(product.variants?.length);
              const inventory = hasTrackedInventory ? getInventoryTotal(product) : 0;
              const inventoryState = hasTrackedInventory
                ? inventoryStatus(inventory)
                : { label: 'Available', color: 'success' as const };

              return (
                <TableRow key={product.id} hover>
                  <TableCell>
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle2">{product.name}</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {product.description || 'No description provided yet.'}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={product.status || 'draft'}
                      color={orderStatusColor(product.status || 'draft')}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{fCurrency(getBasePrice(product) / 100)}</TableCell>
                  <TableCell>
                    <Stack spacing={1}>
                      <Chip
                        size="small"
                        label={`${inventoryState.label}${hasTrackedInventory && inventory ? ` (${inventory})` : ''}`}
                        color={inventoryState.color}
                        variant="outlined"
                      />
                      {hasTrackedInventory && (
                        <LinearProgress
                          variant="determinate"
                          value={inventory > 0 ? Math.min(100, inventory * 5) : 0}
                        />
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      color="inherit"
                      component={Link}
                      href={paths.public.onlineShopProductDetail(resolvedShopKey, product.id)}
                    >
                      Preview
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
            {filteredProducts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ py: 8, textAlign: 'center' }}>
                  <Typography variant="subtitle1">No products found.</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Create your first product or adjust the search query.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

type ProductFormCardProps = {
  activeTab: 'general' | 'variants' | 'modifiers';
  onTabChange: (value: 'general' | 'variants' | 'modifiers') => void;
  productMethods: any;
  variantFields: Array<{ id: string }>;
  appendVariant: (value: ProductFormValues['variants'][number]) => void;
  removeVariant: (index: number) => void;
  modifierGroupFields: Array<{ id: string }>;
  appendModifierGroup: (value: ProductFormValues['modifierGroups'][number]) => void;
  removeModifierGroup: (index: number) => void;
  onSubmit: () => void;
  isPending: boolean;
};

export function CommerceProductFormCard({
  activeTab,
  onTabChange,
  productMethods,
  variantFields,
  appendVariant,
  removeVariant,
  modifierGroupFields,
  appendModifierGroup,
  removeModifierGroup,
  onSubmit,
  isPending,
}: ProductFormCardProps) {
  return (
    <Card sx={{ position: 'sticky', top: 88 }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Create Product</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Products created here immediately show up in the storefront list.
        </Typography>
      </Box>
      <Divider />
      <Form methods={productMethods} onSubmit={onSubmit}>
        <Stack spacing={3} sx={{ p: 3 }}>
          <Tabs value={activeTab} onChange={(_event, value) => onTabChange(value)}>
            <Tab value="general" label="General" />
            <Tab value="variants" label="Variants" />
            <Tab value="modifiers" label="Modifiers" />
          </Tabs>

          {activeTab === 'general' && (
            <Stack spacing={2}>
              <RHFTextField name="name" label="Product name" />
              <RHFTextField name="description" label="Description" multiline rows={4} />
              <RHFTextField
                name="priceCents"
                label="Base price (cents)"
                type="number"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
              <RHFTextField name="status" label="Status" select>
                <MenuItem value="draft">Draft</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="archived">Archived</MenuItem>
              </RHFTextField>
            </Stack>
          )}

          {activeTab === 'variants' && (
            <Stack spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Iconify icon="mingcute:add-line" />}
                onClick={() => appendVariant({ name: '', priceCents: 0, stock: 0 })}
              >
                Add variant
              </Button>
              {variantFields.map((field, index) => (
                <Card key={field.id} variant="outlined" sx={{ p: 2 }}>
                  <Stack spacing={2}>
                    <RHFTextField name={`variants.${index}.name`} label="Variant name" />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <RHFTextField name={`variants.${index}.priceCents`} label="Price (cents)" type="number" />
                      <RHFTextField name={`variants.${index}.stock`} label="Stock" type="number" />
                    </Stack>
                    <Button color="error" onClick={() => removeVariant(index)}>
                      Remove variant
                    </Button>
                  </Stack>
                </Card>
              ))}
              {variantFields.length === 0 && (
                <Alert severity="info">Add variants if the product has different sizes or options.</Alert>
              )}
            </Stack>
          )}

          {activeTab === 'modifiers' && (
            <Stack spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Iconify icon="mingcute:add-line" />}
                onClick={() =>
                  appendModifierGroup({
                    name: '',
                    minSelected: 0,
                    maxSelected: 1,
                    modifiers: [{ name: '', priceCents: 0 }],
                  })
                }
              >
                Add modifier group
              </Button>

              {modifierGroupFields.map((group, groupIndex) => {
                const modifiers = productMethods.watch(`modifierGroups.${groupIndex}.modifiers`) || [];

                return (
                  <Card key={group.id} variant="outlined" sx={{ p: 2 }}>
                    <Stack spacing={2}>
                      <RHFTextField name={`modifierGroups.${groupIndex}.name`} label="Group name" />
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <RHFTextField
                          name={`modifierGroups.${groupIndex}.minSelected`}
                          label="Minimum selected"
                          type="number"
                        />
                        <RHFTextField
                          name={`modifierGroups.${groupIndex}.maxSelected`}
                          label="Maximum selected"
                          type="number"
                        />
                      </Stack>
                      {modifiers.map((_: unknown, modifierIndex: number) => (
                        <Stack
                          key={`${group.id}-${modifierIndex}`}
                          direction={{ xs: 'column', sm: 'row' }}
                          spacing={2}
                        >
                          <RHFTextField
                            name={`modifierGroups.${groupIndex}.modifiers.${modifierIndex}.name`}
                            label="Modifier name"
                          />
                          <RHFTextField
                            name={`modifierGroups.${groupIndex}.modifiers.${modifierIndex}.priceCents`}
                            label="Extra price (cents)"
                            type="number"
                          />
                        </Stack>
                      ))}
                      <Stack direction="row" spacing={1}>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            const current = productMethods.getValues(`modifierGroups.${groupIndex}.modifiers`);
                            productMethods.setValue(`modifierGroups.${groupIndex}.modifiers`, [
                              ...(current || []),
                              { name: '', priceCents: 0 },
                            ]);
                          }}
                        >
                          Add modifier
                        </Button>
                        <Button color="error" onClick={() => removeModifierGroup(groupIndex)}>
                          Remove group
                        </Button>
                      </Stack>
                    </Stack>
                  </Card>
                );
              })}

              {modifierGroupFields.length === 0 && (
                <Alert severity="info">
                  Add modifier groups if customers can customize the product at checkout.
                </Alert>
              )}
            </Stack>
          )}

          <Button type="submit" variant="contained" disabled={isPending}>
            {isPending ? <CircularProgress size={20} color="inherit" /> : 'Save product'}
          </Button>
        </Stack>
      </Form>
    </Card>
  );
}

type OrdersTableProps = {
  orders: LocalOrder[];
  search: string;
  statusFilter: string;
  onSearchChange: (value: string) => void;
  onStatusFilterChange: (value: string) => void;
  onPay: (orderId: string) => void;
  onReceipt: (orderId: string) => void;
  onMarkProcessing: (orderId: string) => void;
  onMarkCompleted: (orderId: string) => void;
};

export function CommerceOrdersTable({
  orders,
  search,
  statusFilter,
  onSearchChange,
  onStatusFilterChange,
  onPay,
  onReceipt,
  onMarkProcessing,
  onMarkCompleted,
}: OrdersTableProps) {
  return (
    <Card sx={{ overflow: 'hidden' }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        alignItems={{ xs: 'stretch', md: 'center' }}
        justifyContent="space-between"
        sx={{ p: 3 }}
      >
        <Box>
          <Typography variant="h5">Orders</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Review paid and pending orders created through the shop.
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
          <TextField
            size="small"
            placeholder="Search order or item"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="solar:magnifer-bold-duotone" width={18} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            size="small"
            select
            label="Status"
            value={statusFilter}
            onChange={(event) => onStatusFilterChange(event.target.value)}
            sx={{ minWidth: 160 }}
          >
            <MenuItem value="all">All orders</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="processing">Processing</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="paid">Paid</MenuItem>
            <MenuItem value="unpaid">Unpaid</MenuItem>
          </TextField>
        </Stack>
      </Stack>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment</TableCell>
              <TableCell>Total</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((item) => (
              <TableRow key={item.id} hover>
                <TableCell>
                  <Stack spacing={0.5}>
                    <Typography variant="subtitle2">{item.id.slice(0, 8)}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {new Date(item.createdAt).toLocaleString()}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip size="small" label={item.status} color={orderStatusColor(item.status)} variant="outlined" />
                </TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={item.paymentStatus}
                    color={orderStatusColor(item.paymentStatus)}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{fCurrency(item.totalAmountCents / 100)}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    {item.paymentStatus !== 'paid' ? (
                      <Button size="small" onClick={() => onPay(item.id)}>
                        Pay
                      </Button>
                    ) : item.status === 'processing' ? (
                      <Button size="small" color="success" onClick={() => onMarkCompleted(item.id)}>
                        Complete
                      </Button>
                    ) : item.status !== 'completed' ? (
                      <Button size="small" color="inherit" onClick={() => onMarkProcessing(item.id)}>
                        Process
                      </Button>
                    ) : null}
                    <Button size="small" color="inherit" onClick={() => onReceipt(item.id)}>
                      Receipt
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            {orders.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} sx={{ py: 8, textAlign: 'center' }}>
                  <Typography variant="subtitle1">No orders yet.</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Orders created through checkout will appear here.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export function CommerceCategoriesTable({
  categories,
  onCreate,
}: {
  categories: any[];
  onCreate: () => void;
}) {
  return (
    <Card sx={{ overflow: 'hidden' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 3 }}>
        <Box>
          <Typography variant="h5">Categories</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Organize products into clear storefront sections.
          </Typography>
        </Box>
        <Button variant="contained" onClick={onCreate}>
          New category
        </Button>
      </Stack>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category: any) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description || 'No description'}</TableCell>
                <TableCell>
                  <Chip
                    size="small"
                    label={category.isActive === false ? 'Inactive' : 'Active'}
                    color={category.isActive === false ? 'default' : 'success'}
                    variant="outlined"
                  />
                </TableCell>
              </TableRow>
            ))}
            {categories.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} sx={{ py: 8, textAlign: 'center' }}>
                  <Typography variant="subtitle1">No categories yet.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export function CommerceCouponsTable({
  coupons,
  onCreate,
}: {
  coupons: any[];
  onCreate: () => void;
}) {
  return (
    <Card sx={{ overflow: 'hidden' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 3 }}>
        <Box>
          <Typography variant="h5">Coupons</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Create promotions that shoppers can apply during checkout.
          </Typography>
        </Box>
        <Button variant="contained" onClick={onCreate}>
          New coupon
        </Button>
      </Stack>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Value</TableCell>
              <TableCell>Usage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons.map((coupon: any) => (
              <TableRow key={coupon.id}>
                <TableCell>{coupon.code}</TableCell>
                <TableCell>{coupon.type}</TableCell>
                <TableCell>
                  {coupon.type === 'percent' ? `${coupon.value}%` : fCurrency((coupon.value || 0) / 100)}
                </TableCell>
                <TableCell>
                  {coupon.usedCount || 0}
                  {coupon.maxUsage ? ` / ${coupon.maxUsage}` : ''}
                </TableCell>
              </TableRow>
            ))}
            {coupons.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} sx={{ py: 8, textAlign: 'center' }}>
                  <Typography variant="subtitle1">No coupons created.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

type SettingsPanelProps = {
  settingsMethods: any;
  resolvedShopKey: string;
  checkoutRouteKey: string;
  contactId?: string;
  storefrontCheckoutHref: string;
  onSubmit: () => void;
};

export function CommerceSettingsPanel({
  settingsMethods,
  resolvedShopKey,
  checkoutRouteKey,
  contactId,
  storefrontCheckoutHref,
  onSubmit,
}: SettingsPanelProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <Card>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6">Store settings</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              These settings are used by the shop workspace and stored locally for now.
            </Typography>
          </Box>
          <Divider />
          <Form methods={settingsMethods} onSubmit={onSubmit}>
            <Stack spacing={3} sx={{ p: 3 }}>
              <RHFTextField name="shopName" label="Store name" />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="supportEmail" label="Support email" />
                <RHFTextField name="supportPhone" label="Support phone" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="currency" label="Currency" />
                <RHFTextField name="taxRate" label="Tax rate (%)" type="number" />
              </Stack>
              <RHFTextField name="checkoutNote" label="Checkout note" multiline rows={4} />
              <Button type="submit" variant="contained">
                Save settings
              </Button>
            </Stack>
          </Form>
        </Card>
      </Grid>
      <Grid item xs={12} md={5}>
        <Card sx={{ p: 3 }}>
          <Stack spacing={2}>
            <Typography variant="h6">Current storefront summary</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Store key: <strong>{resolvedShopKey}</strong>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Public route: <strong>{paths.public.shop(checkoutRouteKey, contactId)}</strong>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Checkout route: <strong>{storefrontCheckoutHref}</strong>
            </Typography>
            <Button component={Link} href={paths.public.onlineShop(resolvedShopKey, contactId)} variant="outlined">
              Open storefront preview
            </Button>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

type TablesPanelProps = {
  tables: Array<{ id: string; name: string; seats: number; status?: 'available' | 'occupied' | 'reserved' }>;
  onAdd: () => void;
  onUpdate: (id: string, changes: any) => void;
  onRemove: (id: string) => void;
  onOpenGuide: () => void;
};

export function CommerceTablesPanel({ tables, onAdd, onUpdate, onRemove, onOpenGuide }: TablesPanelProps) {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Box>
          <Typography variant="h5">Table Management</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Monitor and manage your restaurant floor plan in real-time.
          </Typography>
        </Box>
      <Stack direction="row" spacing={1}>
           <Button variant="outlined" color="inherit" startIcon={<Iconify icon="solar:settings-bold" />} onClick={onOpenGuide}>
              Guide
           </Button>
           <Button variant="contained" startIcon={<Iconify icon="mingcute:add-line" />} onClick={onAdd}>
              New Table
           </Button>
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {tables.map((tableItem) => {
          const tableStatus = tableItem.status || 'available';
          const isOccupied = tableStatus === 'occupied';
          const isReserved = tableStatus === 'reserved';
          
          let statusColor: 'success' | 'error' | 'warning' | 'default' = 'success';
          if (isOccupied) statusColor = 'error';
          if (isReserved) statusColor = 'warning';

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={tableItem.id}>
              <Card 
                sx={{ 
                  p: 2.5, 
                  textAlign: 'center',
                  border: (theme) => `2px solid ${isOccupied ? theme.palette.error.main : isReserved ? theme.palette.warning.main : 'transparent'}`,
                  bgcolor: (theme) => isOccupied ? 'rgba(255, 72, 66, 0.04)' : isReserved ? 'rgba(255, 171, 0, 0.04)' : 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: (theme) => theme.customShadows.z12 }
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                   <Chip 
                     size="small" 
                     label={tableStatus.toUpperCase()} 
                     color={statusColor}
                     variant="outlined"
                     sx={{ fontWeight: 'bold', fontSize: 10 }}
                   />
                   <IconButton size="small" color="error" onClick={() => onRemove(tableItem.id)}>
                      <Iconify icon="solar:trash-bin-trash-bold" width={16} />
                   </IconButton>
                </Stack>

                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    bgcolor: isOccupied ? 'error.main' : isReserved ? 'warning.main' : 'success.main',
                    color: 'common.white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: 24,
                    fontWeight: '800',
                    boxShadow: (theme) => `0 8px 16px 0 ${theme.palette[statusColor].main}40`
                  }}
                >
                   {tableItem.name.replace(/\D/g, '') || tableItem.name[0]}
                </Box>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{tableItem.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Capacity: {tableItem.seats} Seats
                </Typography>

                <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

                <Stack direction="row" spacing={1}>
                   <Button 
                     fullWidth 
                     size="small" 
                     variant={isOccupied ? "outlined" : "soft"}
                     color={isOccupied ? "inherit" : "primary"}
                     onClick={() => onUpdate(tableItem.id, { status: isOccupied ? 'available' : 'occupied' })}
                   >
                      {isOccupied ? 'Clear' : 'Settle'}
                   </Button>
                   <Button 
                     size="small" 
                     variant="soft" 
                     color="inherit"
                     onClick={() => {
                        const nextStatus = tableItem.status === 'reserved' ? 'available' : 'reserved';
                        onUpdate(tableItem.id, { status: nextStatus });
                     }}
                   >
                      <Iconify icon={isReserved ? "solar:calendar-cross-bold" : "solar:calendar-mark-bold"} width={18} />
                   </Button>
                </Stack>
              </Card>
            </Grid>
          );
        })}
        
        {tables.length === 0 && (
          <Grid item xs={12}>
            <Card sx={{ py: 10, textAlign: 'center', border: '2px dashed', borderColor: 'divider', bgcolor: 'transparent' }}>
               <Iconify icon="solar:tuning-square-2-bold-duotone" width={64} sx={{ color: 'text.disabled', mb: 2 }} />
               <Typography variant="h6" sx={{ color: 'text.secondary' }}>No tables configured</Typography>
               <Button variant="contained" sx={{ mt: 2 }} onClick={onAdd}>Create First Table</Button>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

type CartSummaryProps = {
  cartItems: CartLine[];
  appliedCouponCode: string;
  onCouponChange: (value: string) => void;
  activeCouponCode?: string;
  couponMessage?: string;
  couponSeverity?: 'success' | 'warning' | 'info' | 'error';
  cartSubtotalCents: number;
  discountCents: number;
  taxAmountCents: number;
  cartTotalCents: number;
  storefrontCheckoutHref: string;
  isCheckoutMode: boolean;
  checkoutDisabled?: boolean;
  checkoutLabel?: string;
  onClear: () => void;
  onUpdateQuantity: (lineId: string, quantity: number) => void;
  onRemoveLine: (lineId: string) => void;
};

export function CommerceCartSummary({
  cartItems,
  appliedCouponCode,
  onCouponChange,
  activeCouponCode,
  couponMessage,
  couponSeverity,
  cartSubtotalCents,
  discountCents,
  taxAmountCents,
  cartTotalCents,
  storefrontCheckoutHref,
  isCheckoutMode,
  checkoutDisabled,
  checkoutLabel,
  onClear,
  onUpdateQuantity,
  onRemoveLine,
}: CartSummaryProps) {
  return (
    <Card sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h6">Cart</Typography>
        {cartItems.length > 0 && (
          <Button color="inherit" onClick={onClear}>
            Clear
          </Button>
        )}
      </Stack>

      {cartItems.length === 0 ? (
        <Alert severity="info">Your cart is empty. Add a product to start checkout.</Alert>
      ) : (
        <Stack spacing={2}>
          {cartItems.map((item) => (
            <Card key={item.id} variant="outlined" sx={{ p: 2 }}>
              <Stack spacing={1.5}>
                <Stack direction="row" justifyContent="space-between" spacing={2}>
                  <Box>
                    <Typography variant="subtitle2">{item.name}</Typography>
                    {item.variantName && (
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.variantName}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="subtitle2">{fCurrency((item.unitPriceCents * item.quantity) / 100)}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Button size="small" variant="outlined" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                    -
                  </Button>
                  <Typography variant="body2">{item.quantity}</Typography>
                  <Button size="small" variant="outlined" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                    +
                  </Button>
                  <Button size="small" color="error" onClick={() => onRemoveLine(item.id)}>
                    Remove
                  </Button>
                </Stack>
              </Stack>
            </Card>
          ))}

          <Divider />

          <TextField
            size="small"
            label="Coupon code"
            value={appliedCouponCode}
            onChange={(event) => onCouponChange(event.target.value)}
            fullWidth
          />
          {couponMessage && <Alert severity={couponSeverity || 'info'}>{couponMessage}</Alert>}
          {activeCouponCode && (
            <Chip
              size="small"
              color="success"
              variant="outlined"
              label={`Coupon applied: ${activeCouponCode.toUpperCase()}`}
              sx={{ alignSelf: 'flex-start' }}
            />
          )}

          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Subtotal
              </Typography>
              <Typography variant="body2">{fCurrency(cartSubtotalCents / 100)}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Discount
              </Typography>
              <Typography variant="body2">-{fCurrency(discountCents / 100)}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Tax
              </Typography>
              <Typography variant="body2">{fCurrency(taxAmountCents / 100)}</Typography>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1">Total</Typography>
              <Typography variant="subtitle1">{fCurrency(cartTotalCents / 100)}</Typography>
            </Stack>
          </Stack>

          {!isCheckoutMode && (
            <Button component={Link} href={storefrontCheckoutHref} variant="contained" fullWidth disabled={checkoutDisabled}>
              {checkoutLabel || 'Checkout'}
            </Button>
          )}
        </Stack>
      )}
    </Card>
  );
}

type StorefrontGridProps = {
  shopName: string;
  search: string;
  onSearchChange: (value: string) => void;
  products: ICommerceProduct[];
  shopPath?: string;
  resolvedShopKey: string;
  onAddToCart: (product: ICommerceProduct) => void;
  cartSummary: React.ReactNode;
};

export function CommerceStorefrontGrid({
  shopName,
  search,
  onSearchChange,
  products,
  shopPath,
  resolvedShopKey,
  onAddToCart,
  cartSummary,
}: StorefrontGridProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          <Card sx={{ p: 3 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              justifyContent="space-between"
              alignItems={{ xs: 'stretch', md: 'center' }}
            >
              <Box>
                <Typography variant="h4">{shopName}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Browse the live catalog and add products directly to your cart.
                </Typography>
              </Box>
              <TextField
                size="small"
                placeholder="Search catalog"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Iconify icon="solar:magnifer-bold-duotone" width={18} />
                    </InputAdornment>
                  ),
                }}
                sx={{ minWidth: { md: 280 } }}
              />
            </Stack>
          </Card>

          <Grid container spacing={3}>
            {products.map((product) => {
              const isPurchasable = isProductPurchasable(product);
              const stockCount = getAvailableStock(product);
              const hasTrackedInventory = Boolean(product.variants?.length);

              return (
              <Grid item xs={12} sm={6} key={product.id}>
                <Card sx={{ p: 2.5, height: '100%' }}>
                  <Stack spacing={2} sx={{ height: '100%' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
                      <Box>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {product.description || 'Freshly added to the catalog.'}
                        </Typography>
                      </Box>
                      <Chip
                        label={
                          !isPurchasable && product.status && product.status !== 'active'
                            ? product.status.toUpperCase()
                            : hasTrackedInventory
                              ? `${inventoryStatus(getInventoryTotal(product)).label}${stockCount ? ` (${stockCount})` : ''}`
                              : 'Available'
                        }
                        color={
                          !isPurchasable && product.status && product.status !== 'active'
                            ? 'default'
                            : hasTrackedInventory
                              ? inventoryStatus(getInventoryTotal(product)).color
                              : 'success'
                        }
                        variant="outlined"
                      />
                    </Stack>

                    <Box sx={{ flexGrow: 1 }} />

                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="h6">{fCurrency(getBasePrice(product) / 100)}</Typography>
                      <Stack direction="row" spacing={1}>
                        <Button color="inherit" component={Link} href={getProductHref(shopPath, resolvedShopKey, product.id)}>
                          Details
                        </Button>
                        <Button variant="contained" onClick={() => onAddToCart(product)} disabled={!isPurchasable}>
                          {isPurchasable ? 'Add' : 'Unavailable'}
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            )})}
            {products.length === 0 && (
              <Grid item xs={12}>
                <Alert severity="info">No products matched the current search.</Alert>
              </Grid>
            )}
          </Grid>
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        {cartSummary}
      </Grid>
    </Grid>
  );
}

type ProductDetailProps = {
  selectedProduct?: ICommerceProduct;
  selectedVariantId: string;
  onVariantChange: (value: string) => void;
  detailQuantity: number;
  detailPriceCents: number;
  availableStock: number;
  onQuantityChange: (value: number) => void;
  onAddToCart: () => void;
  shopPath?: string;
  resolvedShopKey: string;
  contactId?: string;
  cartSummary: React.ReactNode;
};

export function CommerceProductDetail({
  selectedProduct,
  selectedVariantId,
  onVariantChange,
  detailQuantity,
  detailPriceCents,
  availableStock,
  onQuantityChange,
  onAddToCart,
  shopPath,
  resolvedShopKey,
  contactId,
  cartSummary,
}: ProductDetailProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        {!selectedProduct ? (
          <Alert severity="warning">The requested product could not be found for this shop.</Alert>
        ) : (
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="h3">{selectedProduct.name}</Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
                  {selectedProduct.description || 'No description has been added yet.'}
                </Typography>
              </Box>

              <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                <Card variant="outlined" sx={{ flex: 1, p: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2 }}>
                    Product options
                  </Typography>
                  {selectedProduct.variants?.length ? (
                    <TextField
                      select
                      label="Variant"
                      value={selectedVariantId}
                      onChange={(event) => onVariantChange(event.target.value)}
                      fullWidth
                    >
                      {selectedProduct.variants.map((variant) => (
                        <MenuItem key={variant.id} value={variant.id}>
                          {variant.name} - {fCurrency(variant.priceCents / 100)}
                        </MenuItem>
                      ))}
                    </TextField>
                  ) : (
                    <Alert severity="info">This product uses a single base price.</Alert>
                  )}
                </Card>

                <Card variant="outlined" sx={{ flex: 1, p: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2 }}>
                    Available modifiers
                  </Typography>
                  {selectedProduct.modifierGroups?.length ? (
                    <Stack spacing={1.5}>
                      {selectedProduct.modifierGroups.map((group) => (
                        <Box key={group.id}>
                          <Typography variant="subtitle2">{group.name}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {group.modifiers.map((modifier) => modifier.name).join(', ')}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  ) : (
                    <Alert severity="info">No add-ons are configured for this product.</Alert>
                  )}
                </Card>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <TextField
                  label="Quantity"
                  type="number"
                  value={detailQuantity}
                  onChange={(event) => onQuantityChange(Math.max(1, Number(event.target.value) || 1))}
                  sx={{ width: 120 }}
                  inputProps={{ min: 1, max: Math.max(1, availableStock) }}
                />
                <Typography variant="h5">
                  {fCurrency((detailPriceCents * detailQuantity) / 100)}
                </Typography>
              </Stack>
              <Alert severity={availableStock > 0 ? 'info' : 'warning'}>
                {availableStock > 0
                  ? availableStock >= 999
                    ? 'This product is available for purchase.'
                    : `${availableStock} units available for this selection.`
                  : 'This selection is currently out of stock.'}
              </Alert>

              <Stack direction="row" spacing={2}>
                <Button variant="contained" onClick={onAddToCart} disabled={availableStock <= 0}>
                  Add to cart
                </Button>
                <Button component={Link} href={getStorefrontHomeHref(shopPath, resolvedShopKey, contactId)}>
                  Back to shop
                </Button>
              </Stack>
            </Stack>
          </Card>
        )}
      </Grid>

      <Grid item xs={12} md={4}>
        {cartSummary}
      </Grid>
    </Grid>
  );
}

type CheckoutPanelProps = {
  checkoutMethods: any;
  onSubmit: () => void;
  isPending: boolean;
  cartItemsLength: number;
  cartTotalCents: number;
  authenticated: boolean;
  cartSummary: React.ReactNode;
};

export function CommerceCheckoutPanel({
  checkoutMethods,
  onSubmit,
  isPending,
  cartItemsLength,
  cartTotalCents,
  authenticated,
  cartSummary,
}: CheckoutPanelProps) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={7}>
        <Card>
          <Box sx={{ p: 3 }}>
            <Typography variant="h5">Checkout</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Review the cart and capture delivery details for this order.
            </Typography>
          </Box>
          <Divider />
          <Form methods={checkoutMethods} onSubmit={onSubmit}>
            <Stack spacing={3} sx={{ p: 3 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="customerName" label="Customer name" />
                <RHFTextField name="email" label="Email" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="phone" label="Phone" />
                <RHFTextField name="country" label="Country" />
              </Stack>
              <RHFTextField name="line1" label="Address line" />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <RHFTextField name="city" label="City" />
                <RHFTextField name="state" label="State" />
              </Stack>
              <RHFTextField name="postalCode" label="Postal code" />

              {!authenticated && (
                <Alert severity="info">
                  This checkout will save a local order draft unless you are signed into the protected app session.
                </Alert>
              )}

              <Button type="submit" variant="contained" disabled={isPending || cartItemsLength === 0}>
                {isPending ? <CircularProgress size={20} color="inherit" /> : `Create order for ${fCurrency(cartTotalCents / 100)}`}
              </Button>
            </Stack>
          </Form>
        </Card>
      </Grid>
      <Grid item xs={12} md={5}>
        {cartSummary}
      </Grid>
    </Grid>
  );
}

type OrderCardProps = {
  selectedOrder?: LocalOrder;
  onPrimaryAction?: () => void;
  primaryDisabled?: boolean;
  primaryLabel?: string;
  onSecondaryAction?: () => void;
  secondaryLabel?: string;
  mode: 'payment' | 'receipt';
  shopPath?: string;
  resolvedShopKey: string;
  contactId?: string;
};

export function CommerceOrderCard({
  selectedOrder,
  onPrimaryAction,
  primaryDisabled,
  primaryLabel,
  onSecondaryAction,
  secondaryLabel,
  mode,
  shopPath,
  resolvedShopKey,
  contactId,
}: OrderCardProps) {
  const isReceipt = mode === 'receipt';

  return (
    <Card sx={{ p: 3 }}>
      {!selectedOrder ? (
        <Alert severity="warning">
          {isReceipt
            ? 'No receipt could be generated because the order was not found.'
            : 'We could not find the requested order for payment.'}
        </Alert>
      ) : (
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4">{isReceipt ? 'Receipt' : 'Order payment'}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {isReceipt ? 'Receipt for order' : 'Order'} #{selectedOrder.id.slice(0, 8)}
            </Typography>
          </Box>

          <Stack spacing={1.5}>
            {selectedOrder.items.map((item) => (
              <Stack key={item.id} direction="row" justifyContent="space-between" spacing={2}>
                <Typography variant="body2">
                  {item.productName} x {item.quantity}
                </Typography>
                <Typography variant="body2">{fCurrency((item.unitPriceCents * item.quantity) / 100)}</Typography>
              </Stack>
            ))}
          </Stack>

          <Divider />

          {isReceipt && (
            <>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1">Payment status</Typography>
                <Chip
                  size="small"
                  label={selectedOrder.paymentStatus}
                  color={orderStatusColor(selectedOrder.paymentStatus)}
                  variant="outlined"
                />
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="subtitle1">Order status</Typography>
                <Chip size="small" label={selectedOrder.status} color={orderStatusColor(selectedOrder.status)} variant="outlined" />
              </Stack>
            </>
          )}

          <Stack direction="row" justifyContent="space-between">
            <Typography variant={isReceipt ? 'h6' : 'subtitle1'}>Total</Typography>
            <Typography variant={isReceipt ? 'h6' : 'subtitle1'}>{fCurrency(selectedOrder.totalAmountCents / 100)}</Typography>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {primaryLabel && onPrimaryAction && (
              <Button
                variant="contained"
                color={isReceipt ? 'primary' : 'success'}
                onClick={onPrimaryAction}
                disabled={primaryDisabled}
              >
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel && onSecondaryAction && (
              <Button color="inherit" onClick={onSecondaryAction}>
                {secondaryLabel}
              </Button>
            )}
            {isReceipt && (
              <Button component={Link} href={getStorefrontHomeHref(shopPath, resolvedShopKey, contactId)}>
                Continue shopping
              </Button>
            )}
          </Stack>
        </Stack>
      )}
    </Card>
  );
}

type DashboardModulesProps = {
  currentModule: CommerceDashboardModule;
  onModuleChange: (value: CommerceDashboardModule) => void;
  summaryCards: React.ReactNode;
  productsTable: React.ReactNode;
  productForm: React.ReactNode;
  categoriesTable: React.ReactNode;
  couponsTable: React.ReactNode;
  ordersTable: React.ReactNode;
  tablesPanel: React.ReactNode;
  settingsPanel: React.ReactNode;
};

export function CommerceDashboardModules({
  currentModule,
  onModuleChange,
  summaryCards,
  productsTable,
  productForm,
  categoriesTable,
  couponsTable,
  ordersTable,
  tablesPanel,
  settingsPanel,
}: DashboardModulesProps) {
  return (
    <Stack spacing={4}>
      <Tabs value={currentModule} onChange={(_event, value) => onModuleChange(value)}>
        <Tab value="dashboard" label="Dashboard" />
        <Tab value="products" label="Products" />
        <Tab value="categories" label="Categories" />
        <Tab value="coupons" label="Coupons" />
        <Tab value="orders" label="Orders" />
        <Tab value="tables" label="Tables" />
        <Tab value="settings" label="Settings" />
      </Tabs>

      {currentModule === 'dashboard' && summaryCards}

      {currentModule === 'products' && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            {productsTable}
          </Grid>
          <Grid item xs={12} md={5}>
            {productForm}
          </Grid>
        </Grid>
      )}

      {currentModule === 'categories' && categoriesTable}
      {currentModule === 'coupons' && couponsTable}
      {currentModule === 'orders' && ordersTable}
      {currentModule === 'tables' && tablesPanel}
      {currentModule === 'settings' && settingsPanel}
    </Stack>
  );
}

export function CommerceCategoryDialog({
  open,
  onClose,
  methods,
  onSubmit,
  isPending,
}: {
  open: boolean;
  onClose: () => void;
  methods: any;
  onSubmit: () => void;
  isPending: boolean;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>New category</DialogTitle>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <RHFTextField name="name" label="Category name" />
            <RHFTextField name="description" label="Description" multiline rows={3} />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isPending}>
            {isPending ? <CircularProgress size={20} color="inherit" /> : 'Create'}
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}

export function CommerceCouponDialog({
  open,
  onClose,
  methods,
  onSubmit,
  isPending,
}: {
  open: boolean;
  onClose: () => void;
  methods: any;
  onSubmit: () => void;
  isPending: boolean;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>New coupon</DialogTitle>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <RHFTextField name="code" label="Coupon code" />
            <RHFTextField name="type" label="Discount type" select>
              <MenuItem value="percent">Percent</MenuItem>
              <MenuItem value="fixed">Fixed</MenuItem>
            </RHFTextField>
            <RHFTextField name="value" label="Value" type="number" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" disabled={isPending}>
            {isPending ? <CircularProgress size={20} color="inherit" /> : 'Create'}
          </Button>
        </DialogActions>
      </Form>
    </Dialog>
  );
}

export function CommerceTableGuideDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Table workflow</DialogTitle>
      <DialogContent>
        <Alert severity="info" sx={{ mt: 1 }}>
          The table list is now editable and stored per shop. A visual floor-plan editor can be added later without changing the stored table records.
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
