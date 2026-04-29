import { useMemo, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { posService } from '../services/pos-service';

import { PosProductGrid } from './pos-product-grid';
import { PosCart } from './pos-cart';
import { PosCustomerSelector } from './pos-customer-selector';
import { PosPaymentPanel } from './pos-payment-panel';
import { PosCheckoutDialog } from './pos-checkout-dialog';
import { PosOrdersTable } from './pos-orders-table';
import { PosReceiptDialog } from './pos-receipt-dialog';
import { PosRefundDialog } from './pos-refund-dialog';
import { showToast } from 'src/components/toast';

type CartItem = {
  id: string;
  productId: string;
  name: string;
  price: number;
  qty: number;
};

function hasNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function toValidNumber(value: unknown): number | null {
  const num = typeof value === 'string' ? Number(value) : value;
  return typeof num === 'number' && Number.isFinite(num) ? num : null;
}

function normalizePaymentMethods(methods: unknown): Array<{ value: string; label: string }> {
  if (!Array.isArray(methods)) return [];
  return methods
    .map((method) => {
      if (typeof method === 'string') {
        return { value: method, label: method };
      }
      if (method && typeof method === 'object') {
        const value = (method as any).value || (method as any).id || (method as any).code;
        const label = (method as any).label || (method as any).name || value;
        if (typeof value === 'string' && typeof label === 'string') {
          return { value, label };
        }
      }
      return null;
    })
    .filter((method): method is { value: string; label: string } => method !== null);
}

function mapCartLine(line: any): CartItem | null {
  const lineId = line?.id || line?.lineId;
  const productId = line?.productId || line?.product?.id || line?.sku;
  const name = line?.name || line?.product?.name;
  const price = toValidNumber(line?.price ?? line?.unitPrice ?? line?.product?.price);
  const qty = toValidNumber(line?.qty ?? line?.quantity);

  if (!lineId || !productId || !name || price === null || qty === null) {
    return null;
  }

  return {
    id: String(lineId),
    productId: String(productId),
    name: String(name),
    price,
    qty,
  };
}

function extractCartItems(payload: any): CartItem[] | null {
  const lines = payload?.items || payload?.cart?.items || payload?.lines || payload?.cartLines;
  if (!Array.isArray(lines)) {
    return null;
  }
  const mapped = lines
    .map((line: any) => mapCartLine(line))
    .filter((line: CartItem | null): line is CartItem => line !== null);
  return mapped;
}

function extractLineId(payload: any): string | null {
  const id = payload?.lineId || payload?.id || payload?.item?.id || payload?.line?.id;
  return id ? String(id) : null;
}

export function PosRegister() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('register');
  const [cartId, setCartId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);
  const [isInitializingCart, setIsInitializingCart] = useState(false);
  const [cartInitError, setCartInitError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [barcodeInput, setBarcodeInput] = useState('');

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [refundOpen, setRefundOpen] = useState(false);
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);

  const [receiptData, setReceiptData] = useState<any>(null);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  useEffect(() => {
    async function initCart() {
      setIsInitializingCart(true);
      setCartInitError(null);
      try {
        const res = await posService.createCart();
        if (!res?.id) {
          throw new Error('Cart initialization returned no cart id.');
        }
        setCartId(String(res.id));
      } catch (error: any) {
        setCartId(null);
        setCart([]);
        setCartInitError(error?.message || 'Cart sync failed');
      } finally {
        setIsInitializingCart(false);
      }
    }
    initCart();
  }, []);

  const {
    data: context,
    isLoading: isLoadingContext,
    isError: isErrorContext,
    refetch: refetchContext,
  } = useQuery({
    queryKey: ['pos-context'],
    queryFn: () => posService.getContext(),
  });

  const {
    data: products,
    isLoading: isLoadingProducts,
    isError: isErrorProducts,
    refetch: refetchProducts,
  } = useQuery({
    queryKey: ['pos-products', searchQuery],
    queryFn: () => posService.getProducts(searchQuery || undefined),
  });

  const { data: orders, isLoading: isLoadingOrders, isError: isErrorOrders, refetch: refetchOrders } = useQuery({
    queryKey: ['pos-orders'],
    queryFn: () => posService.getOrders(),
  });

  const addToCartMutation = useMutation({
    mutationFn: ({ activeCartId, data }: { activeCartId: string; data: any }) => posService.addToCart(activeCartId, data),
    onError: (error: any) => {
      showToast(error?.message || 'Cart sync failed', 'error');
    },
  });

  const updateCartItemMutation = useMutation({
    mutationFn: ({ activeCartId, lineId, data }: { activeCartId: string; lineId: string; data: any }) =>
      posService.updateCartItem(activeCartId, lineId, data),
    onError: (error: any) => {
      showToast(error?.message || 'Cart sync failed', 'error');
    },
  });

  const removeCartItemMutation = useMutation({
    mutationFn: ({ activeCartId, lineId }: { activeCartId: string; lineId: string }) =>
      posService.removeCartItem(activeCartId, lineId),
    onError: (error: any) => {
      showToast(error?.message || 'Cart sync failed', 'error');
    },
  });

  const checkoutMutation = useMutation({
    mutationFn: (data: any) => posService.checkout(data),
    onSuccess: async (res) => {
      showToast('Order successful!', 'success');
      setCart([]);
      setSelectedCustomer(null);

      try {
        const newCart = await posService.createCart();
        if (!newCart?.id) {
          throw new Error('Could not initialize a new cart after checkout.');
        }
        setCartId(String(newCart.id));
      } catch (error: any) {
        setCartId(null);
        setCartInitError(error?.message || 'Cart sync failed');
      }

      queryClient.invalidateQueries({ queryKey: ['pos-orders'] });

      if (res.receiptData) {
        setReceiptData(res.receiptData);
        setReceiptOpen(true);
      } else if (res.id) {
        try {
          const receipt = await posService.getReceipt(res.id);
          setReceiptData(receipt.data || receipt);
          setReceiptOpen(true);
        } catch {
          showToast('Could not fetch receipt', 'warning');
        }
      }
    },
    onError: (error: any) => {
      showToast(error?.message || 'Checkout failed', 'error');
    },
  });

  const refundMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => posService.refundOrder(id, data),
    onSuccess: () => {
      showToast('Refund successful', 'success');
      queryClient.invalidateQueries({ queryKey: ['pos-orders'] });
    },
    onError: (error: any) => {
      showToast(error?.message || 'Refund failed', 'error');
    },
  });

  const handleAddToCart = async (product: any) => {
    if (!cartId) {
      showToast('Cart sync failed', 'error');
      return;
    }

    const price = toValidNumber(product?.price);
    if (price === null) {
      showToast('Price unavailable for this product', 'error');
      return;
    }

    const productId = product?.id || product?.sku;
    if (!productId) {
      showToast('Invalid product', 'error');
      return;
    }

    const existing = cart.find((item) => item.productId === String(productId));

    if (existing) {
      const response = await updateCartItemMutation.mutateAsync({
        activeCartId: cartId,
        lineId: existing.id,
        data: { qty: existing.qty + 1 },
      });
      const syncedItems = extractCartItems(response);
      if (syncedItems) {
        setCart(syncedItems);
      } else {
        setCart((prev) => prev.map((item) => (item.id === existing.id ? { ...item, qty: item.qty + 1 } : item)));
      }
      return;
    }

    const response = await addToCartMutation.mutateAsync({
      activeCartId: cartId,
      data: { productId: String(productId), qty: 1 },
    });

    const syncedItems = extractCartItems(response);
    if (syncedItems) {
      setCart(syncedItems);
      return;
    }

    const lineId = extractLineId(response);
    if (!lineId) {
      throw new Error('Cart sync failed: missing line id from backend response.');
    }

    setCart((prev) => [
      ...prev,
      {
        id: lineId,
        productId: String(productId),
        name: product.name,
        price,
        qty: 1,
      },
    ]);
  };

  const handleUpdateQuantity = async (lineId: string, qty: number) => {
    if (!cartId) {
      showToast('Cart sync failed', 'error');
      return;
    }

    if (qty <= 0) {
      await handleRemoveItem(lineId);
      return;
    }

    const response = await updateCartItemMutation.mutateAsync({
      activeCartId: cartId,
      lineId,
      data: { qty },
    });
    const syncedItems = extractCartItems(response);
    if (syncedItems) {
      setCart(syncedItems);
    } else {
      setCart((prev) => prev.map((item) => (item.id === lineId ? { ...item, qty } : item)));
    }
  };

  const handleRemoveItem = async (lineId: string) => {
    if (!cartId) {
      showToast('Cart sync failed', 'error');
      return;
    }

    const response = await removeCartItemMutation.mutateAsync({
      activeCartId: cartId,
      lineId,
    });
    const syncedItems = extractCartItems(response);
    if (syncedItems) {
      setCart(syncedItems);
    } else {
      setCart((prev) => prev.filter((item) => item.id !== lineId));
    }
  };

  const handleClearCart = async () => {
    setConfirmClearOpen(false);
    setIsInitializingCart(true);
    setCartInitError(null);

    try {
      const newCart = await posService.createCart();
      if (!newCart?.id) {
        throw new Error('Failed to clear cart.');
      }
      setCartId(String(newCart.id));
      setCart([]);
    } catch (error: any) {
      setCartInitError(error?.message || 'Cart sync failed');
      showToast(error?.message || 'Failed to clear cart', 'error');
    } finally {
      setIsInitializingCart(false);
    }
  };

  const paymentMethods = useMemo(() => normalizePaymentMethods(context?.paymentMethods), [context?.paymentMethods]);
  const taxRate = toValidNumber(context?.taxRate);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = hasNumber(taxRate) ? subtotal * taxRate : null;
  const total = subtotal + (tax ?? 0);

  const contextUnavailable = isErrorContext || !context;
  const paymentMethodsUnavailable = paymentMethods.length === 0;
  const cartMutationPending =
    addToCartMutation.isPending || updateCartItemMutation.isPending || removeCartItemMutation.isPending;

  const cartReady = !!cartId && !isInitializingCart && !cartInitError;

  const checkoutDisabledReason = (() => {
    if (!cartReady) return cartInitError ? 'Cart sync failed' : 'Cart is not ready';
    if (!context || contextUnavailable || isLoadingContext) return 'POS settings unavailable';
    if (paymentMethodsUnavailable) return 'Payment methods unavailable';
    if (cartMutationPending) return 'Cart is not ready';
    if (!cart.length) return 'Cart is not ready';
    return null;
  })();

  const canMutateCart = cartReady && !cartMutationPending;
  const productAddDisabled = !canMutateCart || isLoadingContext || contextUnavailable;
  let productAddDisabledReason: string | null = null;
  if (!cartReady) {
    productAddDisabledReason = cartInitError || 'Cart is not ready';
  } else if (contextUnavailable) {
    productAddDisabledReason = 'POS settings unavailable';
  }

  const handleCheckoutConfirm = async (paymentMethod: string, amount: number) => {
    if (!cartId) {
      throw new Error('Cart is not ready');
    }

    await checkoutMutation.mutateAsync({
      cartId,
      customerId: selectedCustomer?.id === 'walk-in-ui-only' ? null : selectedCustomer?.id || null,
      paymentMethod,
      amountGiven: amount,
      clientCartSnapshot: cart,
    });
  };

  const handleSubmitBarcode = () => {
    const code = barcodeInput.trim();
    if (!code) {
      return;
    }

    const matched = (products || []).find((product: any) => String(product.barcode || product.sku || '') === code);
    if (!matched) {
      showToast('No product matches this barcode', 'error');
      return;
    }

    handleAddToCart(matched).catch((error: any) => {
      showToast(error?.message || 'Cart sync failed', 'error');
    });
    setBarcodeInput('');
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden" bgcolor="background.default">
      <Box px={3} pt={2} borderBottom={1} borderColor="divider" bgcolor="background.paper">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h6" fontWeight="bold">Point of Sale</Typography>
        </Box>
        <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)}>
          <Tab label="Register" value="register" />
          <Tab label="Orders" value="orders" />
        </Tabs>
      </Box>

      {activeTab === 'register' && (
        <Box display="flex" flex={1} overflow="hidden">
          <Box flex={2} borderRight={1} borderColor="divider" bgcolor="background.paper" overflow="hidden">
            <PosProductGrid
              products={products || []}
              isLoading={isLoadingProducts}
              isError={isErrorProducts}
              onRetry={refetchProducts}
              onAddToCart={(product) => {
                handleAddToCart(product).catch((error: any) => {
                  showToast(error?.message || 'Cart sync failed', 'error');
                });
              }}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
              barcodeInput={barcodeInput}
              onBarcodeInputChange={setBarcodeInput}
              onSubmitBarcode={handleSubmitBarcode}
              addDisabled={productAddDisabled}
              addDisabledReason={productAddDisabledReason}
            />
          </Box>

          <Box flex={1} display="flex" flexDirection="column" minWidth={350} bgcolor="background.paper">
            {isLoadingContext && (
              <Box px={2} pt={2}>
                <Alert severity="info">Loading POS settings...</Alert>
              </Box>
            )}
            {isErrorContext && (
              <Box px={2} pt={2}>
                <Alert
                  severity="error"
                  action={
                    <Button size="small" color="inherit" onClick={() => refetchContext()}>
                      Retry
                    </Button>
                  }
                >
                  POS settings unavailable
                </Alert>
              </Box>
            )}
            {isInitializingCart && (
              <Box px={2} pt={2}>
                <Alert icon={<CircularProgress size={16} />} severity="info">Initializing cart...</Alert>
              </Box>
            )}
            {cartInitError && (
              <Box px={2} pt={2}>
                <Alert severity="error">Cart sync failed</Alert>
              </Box>
            )}

            <PosCustomerSelector
              selectedCustomer={selectedCustomer}
              onSelectCustomer={setSelectedCustomer}
              onSearchCustomers={posService.getCustomers}
              onCreateCustomer={posService.createCustomer}
            />
            <Box flex={1} overflow="hidden">
              <PosCart
                items={cart}
                onUpdateQuantity={(lineId, qty) => {
                  handleUpdateQuantity(lineId, qty).catch((error: any) => {
                    showToast(error?.message || 'Cart sync failed', 'error');
                  });
                }}
                onRemoveItem={(lineId) => {
                  handleRemoveItem(lineId).catch((error: any) => {
                    showToast(error?.message || 'Cart sync failed', 'error');
                  });
                }}
                onClearCart={() => setConfirmClearOpen(true)}
                disabled={!canMutateCart}
              />
            </Box>
            <Box borderTop={1} borderColor="divider">
              <PosPaymentPanel
                subtotal={subtotal}
                tax={tax}
                total={total}
                onCheckout={() => setCheckoutOpen(true)}
                disabled={!!checkoutDisabledReason || checkoutMutation.isPending}
                disabledReason={checkoutDisabledReason}
              />
            </Box>
          </Box>
        </Box>
      )}

      {activeTab === 'orders' && (
        <Box flex={1} overflow="auto" bgcolor="background.paper" p={2}>
          <PosOrdersTable
            orders={orders}
            isLoading={isLoadingOrders}
            isError={isErrorOrders}
            onRetry={refetchOrders}
            onViewReceipt={async (id) => {
              try {
                const receipt = await posService.getReceipt(id);
                setReceiptData(receipt.data || receipt);
                setReceiptOpen(true);
              } catch {
                showToast('Failed to load receipt', 'error');
              }
            }}
            onRefund={(order) => {
              setSelectedOrder(order);
              setRefundOpen(true);
            }}
          />
        </Box>
      )}

      <Dialog open={confirmClearOpen} onClose={() => setConfirmClearOpen(false)} maxWidth="xs" fullWidth>
        <DialogTitle>Clear Cart</DialogTitle>
        <DialogContent>Are you sure you want to remove all items from the cart?</DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmClearOpen(false)}>Cancel</Button>
          <Button color="error" variant="contained" onClick={handleClearCart}>Clear All</Button>
        </DialogActions>
      </Dialog>

      <PosCheckoutDialog
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        totalAmount={total}
        paymentMethods={paymentMethods}
        onConfirmPayment={handleCheckoutConfirm}
      />
      <PosReceiptDialog
        open={receiptOpen}
        onClose={() => setReceiptOpen(false)}
        data={receiptData}
      />
      {selectedOrder && (
        <PosRefundDialog
          open={refundOpen}
          onClose={() => setRefundOpen(false)}
          orderId={selectedOrder.ticketNo || selectedOrder.id}
          maxAmount={selectedOrder.totalAmount}
          onRefund={async (reason, amount) => {
            await refundMutation.mutateAsync({ id: selectedOrder.id, data: { reason, amount } });
          }}
        />
      )}
    </Box>
  );
}
