import { useState, useEffect, useMemo } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

export function PosRegister() {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState('register');
  const [cartId, setCartId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);
  const [cartInitError, setCartInitError] = useState(false);
  const [cartSyncing, setCartSyncing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Dialogs
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [refundOpen, setRefundOpen] = useState(false);
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);

  const [receiptData, setReceiptData] = useState<any>(null);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  // Queries
  const { data: context, isLoading: isLoadingContext, isError: isErrorContext } = useQuery({
    queryKey: ['pos-context'],
    queryFn: () => posService.getContext(),
  });

  const { data: products, isLoading: isLoadingProducts, isError: isErrorProducts, refetch: refetchProducts } = useQuery({
    queryKey: ['pos-products'],
    queryFn: () => posService.getProducts(),
  });

  const { data: orders, isLoading: isLoadingOrders, isError: isErrorOrders, refetch: refetchOrders } = useQuery({
    queryKey: ['pos-orders'],
    queryFn: () => posService.getOrders(),
  });

  // Initialize Remote Cart if not exists
  useEffect(() => {
    let mounted = true;
    async function initCart() {
      try {
        if (!cartId && !cartInitError) {
          const res = await posService.createCart();
          if (mounted && res?.id) {
            setCartId(res.id);
            setCartInitError(false);
          }
        }
      } catch (e) {
        if (mounted) setCartInitError(true);
        showToast('Failed to initialize cart. POS operations disabled.', 'error');
      }
    }
    initCart();
    return () => { mounted = false; };
  }, [cartId, cartInitError]);

  const filteredProducts = useMemo(() => {
    if (!products || !Array.isArray(products)) return [];
    if (!searchQuery) return products;
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(
      (p: any) =>
        p.name?.toLowerCase().includes(lowerQuery) ||
        p.sku?.toLowerCase().includes(lowerQuery) ||
        p.barcode?.toLowerCase().includes(lowerQuery)
    );
  }, [products, searchQuery]);

  // Mutations
  const checkoutMutation = useMutation({
    mutationFn: (data: any) => posService.checkout(data),
    onSuccess: async (res) => {
      showToast('Order successful!', 'success');
      setCart([]);
      setSelectedCustomer(null);
      setCartId(null); // Force initCart effect to run and handle failures properly

      queryClient.invalidateQueries({ queryKey: ['pos-orders'] });

      if (res.receiptData) {
        setReceiptData(res.receiptData);
        setReceiptOpen(true);
      } else if (res.id) {
        try {
          const receipt = await posService.getReceipt(res.id);
          setReceiptData(receipt.data || receipt);
          setReceiptOpen(true);
        } catch (e) {
           showToast('Could not fetch receipt', 'warning');
        }
      }
    },
    onError: (error: any) => {
      showToast(error.message || 'Checkout failed', 'error');
    }
  });

  const refundMutation = useMutation({
    mutationFn: ({ id, data }: { id: string, data: any }) => posService.refundOrder(id, data),
    onSuccess: () => {
      showToast('Refund successful', 'success');
      queryClient.invalidateQueries({ queryKey: ['pos-orders'] });
    },
    onError: (error: any) => {
      showToast(error.message || 'Refund failed', 'error');
    }
  });

  // API synchronized Cart logic - strictly Backend first
  const handleAddToCart = async (product: any) => {
    if (!cartId) return;

    // Revalidate product price before allowing add
    const priceNum = typeof product.price === 'string' ? Number(product.price) : product.price;
    if (typeof priceNum !== 'number' || !Number.isFinite(priceNum)) {
      showToast('Cannot add product with invalid or missing price.', 'error');
      return;
    }

    setCartSyncing(true);
    const productId = product.id || product.sku;

    try {
      const existing = cart.find((item) => item.productId === productId);
      if (existing) {
        const newQty = existing.qty + 1;
        await posService.updateCartItem(cartId, existing.id, { qty: newQty });
        setCart((prev) => prev.map((item) => (item.id === existing.id ? { ...item, qty: newQty } : item)));
      } else {
        const res = await posService.addToCart(cartId, { productId, qty: 1 });
        if (res?.lineId || res?.id) {
          setCart((prev) => [
            ...prev,
            {
              id: res.lineId || res.id,
              productId,
              name: product.name,
              price: priceNum,
              qty: 1,
            },
          ]);
        }
      }
    } catch (e: any) {
      showToast(e.message || 'Failed to add item to cart', 'error');
    } finally {
      setCartSyncing(false);
    }
  };

  const handleBarcodeSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const match = products?.find((p: any) => p.barcode === searchQuery || p.sku === searchQuery);
      if (match) {
        handleAddToCart(match);
        setSearchQuery('');
      } else if (searchQuery) {
        showToast('No exact match found for barcode/SKU.', 'warning');
      }
    }
  };

  const handleUpdateQuantity = async (lineId: string, qty: number) => {
    if (!cartId) return;
    if (qty <= 0) {
      handleRemoveItem(lineId);
      return;
    }

    setCartSyncing(true);
    try {
      await posService.updateCartItem(cartId, lineId, { qty });
      setCart((prev) => prev.map((item) => (item.id === lineId ? { ...item, qty } : item)));
    } catch (e: any) {
      showToast(e.message || 'Failed to update quantity', 'error');
    } finally {
      setCartSyncing(false);
    }
  };

  const handleRemoveItem = async (lineId: string) => {
    if (!cartId) return;
    setCartSyncing(true);
    try {
      await posService.removeCartItem(cartId, lineId);
      setCart((prev) => prev.filter((item) => item.id !== lineId));
    } catch (e: any) {
      showToast(e.message || 'Failed to remove item', 'error');
    } finally {
      setCartSyncing(false);
    }
  };

  const handleClearCart = async () => {
    setConfirmClearOpen(false);
    if (!cartId) return;

    setCartSyncing(true);
    try {
      const newCart = await posService.createCart();
      if (newCart?.id) {
        setCartId(newCart.id);
        setCart([]);
      }
    } catch (e: any) {
      showToast(e.message || 'Failed to clear cart', 'error');
    } finally {
      setCartSyncing(false);
    }
  };

  // Totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxRate = typeof context?.taxRate === 'number' && Number.isFinite(context.taxRate) ? context.taxRate : null;
  const tax = taxRate !== null ? subtotal * taxRate : null;
  const total = subtotal + (tax || 0);

  const handleCheckoutConfirm = async (paymentMethod: string, amount: number) => {
    // Add backend cart quote/summary later for exact totals
    await checkoutMutation.mutateAsync({
      cartId,
      customerId: selectedCustomer?.id === 'walk-in-ui-only' ? null : selectedCustomer?.id,
      paymentMethod,
      amountGiven: amount,
      clientCartSnapshot: cart,
    });
  };

  // Safe checks
  const isPosReady = !isLoadingContext && !isErrorContext;
  const isCartReady = !!cartId && !cartInitError;
  const hasPaymentMethods = Array.isArray(context?.paymentMethods) && context.paymentMethods.length > 0;
  const hasTaxRate = typeof context?.taxRate === 'number' && Number.isFinite(context.taxRate);

  // Disable checkout when tax/payment context is incomplete, unless backend returns final cart totals (which isn't fully implemented yet)
  const canCheckout = isPosReady && isCartReady && hasPaymentMethods && hasTaxRate && cart.length > 0 && !cartSyncing && !checkoutMutation.isPending;
  const checkoutDisabledReason = !isPosReady ? 'POS settings unavailable'
    : !isCartReady ? 'Cart sync failed'
    : !hasPaymentMethods ? 'Payment methods unavailable'
    : !hasTaxRate ? 'Tax configuration unavailable'
    : cart.length === 0 ? 'Cart is empty'
    : cartSyncing ? 'Cart is syncing...'
    : '';


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
          {/* Products */}
          <Box flex={2} borderRight={1} borderColor="divider" bgcolor="background.paper" display="flex" flexDirection="column" overflow="hidden">
            <Box p={2} borderBottom={1} borderColor="divider">
              <TextField
                fullWidth
                placeholder="Search products by name, SKU or barcode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleBarcodeSubmit}
                size="small"
              />
            </Box>
            <Box flex={1} overflow="auto">
              <PosProductGrid
                products={filteredProducts}
                isLoading={isLoadingProducts}
                isError={isErrorProducts}
                onRetry={refetchProducts}
                onAddToCart={handleAddToCart}
                disabled={!isCartReady || cartSyncing}
              />
            </Box>
          </Box>

          {/* Sidebar */}
          <Box flex={1} display="flex" flexDirection="column" minWidth={350} bgcolor="background.paper">
            <PosCustomerSelector
              selectedCustomer={selectedCustomer}
              onSelectCustomer={setSelectedCustomer}
              onSearchCustomers={posService.getCustomers}
              onCreateCustomer={posService.createCustomer}
            />
            <Box flex={1} overflow="hidden">
              <PosCart
                items={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearCart={() => setConfirmClearOpen(true)}
              />
            </Box>
            <Box borderTop={1} borderColor="divider">
              <PosPaymentPanel
                subtotal={subtotal}
                tax={tax}
                total={total}
                onCheckout={() => setCheckoutOpen(true)}
                disabled={!canCheckout}
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
              } catch (e) {
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

      {/* Dialogs */}
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
        paymentMethods={context?.paymentMethods}
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
