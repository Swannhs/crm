import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
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

  // Dialogs
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [refundOpen, setRefundOpen] = useState(false);
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);

  const [receiptData, setReceiptData] = useState<any>(null);
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  // Initialize Remote Cart if not exists
  useEffect(() => {
    async function initCart() {
      try {
        if (!cartId) {
          const res = await posService.createCart();
          if (res?.id) setCartId(res.id);
        }
      } catch (e) {
        // Failing silently for cart init if endpoint unavailable as handled by service flags
      }
    }
    initCart();
  }, [cartId]);

  // Queries
  const { data: products, isLoading: isLoadingProducts, isError: isErrorProducts, refetch: refetchProducts } = useQuery({
    queryKey: ['pos-products'],
    queryFn: () => posService.getProducts(),
  });

  const { data: orders, isLoading: isLoadingOrders, isError: isErrorOrders, refetch: refetchOrders } = useQuery({
    queryKey: ['pos-orders'],
    queryFn: () => posService.getOrders(),
  });

  // Mutations
  const checkoutMutation = useMutation({
    mutationFn: (data: any) => posService.checkout(data),
    onSuccess: async (res) => {
      showToast('Order successful!', 'success');
      setCart([]);
      setSelectedCustomer(null);

      // Optional: renew cart
      try {
         const newCart = await posService.createCart();
         if (newCart?.id) setCartId(newCart.id);
      } catch (e) {}

      queryClient.invalidateQueries({ queryKey: ['pos-orders'] });

      // Auto-show receipt
      if (res.receiptData) {
        setReceiptData(res.receiptData);
        setReceiptOpen(true);
      } else if (res.id) {
        // fetch receipt
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
      throw error;
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
      throw error;
    }
  });

  // API synchronized Cart logic
  const handleAddToCart = async (product: any) => {
    // 1. Optimistic local update
    const productId = product.id || product.sku;
    const tempId = Math.random().toString(36).substr(2, 9);
    let isUpdate = false;
    let existingLineId = '';

    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        isUpdate = true;
        existingLineId = existing.id;
        return prev.map((item) =>
          item.id === existing.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: tempId,
          productId,
          name: product.name,
          price: Number(product.price || 0),
          qty: 1,
        },
      ];
    });

    // 2. Server sync
    if (cartId) {
      try {
        if (isUpdate) {
          const item = cart.find(i => i.id === existingLineId);
          await posService.updateCartItem(cartId, existingLineId, { qty: (item?.qty || 1) + 1 });
        } else {
          const res = await posService.addToCart(cartId, { productId, qty: 1 });
          // Optional: replace tempId with real line ID from server
          if (res?.lineId) {
             setCart(prev => prev.map(item => item.id === tempId ? { ...item, id: res.lineId } : item));
          }
        }
      } catch (e) {
        // Fallback local if api is unsupported/fails
      }
    }
  };

  const handleUpdateQuantity = async (lineId: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(lineId);
      return;
    }
    setCart((prev) => prev.map((item) => (item.id === lineId ? { ...item, qty } : item)));

    if (cartId) {
      try {
         await posService.updateCartItem(cartId, lineId, { qty });
      } catch (e) {}
    }
  };

  const handleRemoveItem = async (lineId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== lineId));
    if (cartId) {
      try {
         await posService.removeCartItem(cartId, lineId);
      } catch (e) {}
    }
  };

  // Totals
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.08; // Example tax, in real app fetch from config
  const total = subtotal + tax;

  const handleCheckoutConfirm = async (paymentMethod: string, amount: number) => {
    await checkoutMutation.mutateAsync({
      cartId,
      items: cart,
      customerId: selectedCustomer?.id === 'walk-in-ui-only' ? null : selectedCustomer?.id,
      paymentMethod,
      amountGiven: amount,
      totalAmount: total,
    });
  };

  const handleClearCart = async () => {
    setCart([]);
    setConfirmClearOpen(false);
    if (cartId) {
      try {
        // If an endpoint to clear the whole cart exists, use it, else recreate it.
        const newCart = await posService.createCart();
        if (newCart?.id) setCartId(newCart.id);
      } catch (e) {}
    }
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
          {/* Products */}
          <Box flex={2} borderRight={1} borderColor="divider" bgcolor="background.paper" overflow="hidden">
            <PosProductGrid
              products={products}
              isLoading={isLoadingProducts}
              isError={isErrorProducts}
              onRetry={refetchProducts}
              onAddToCart={handleAddToCart}
            />
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
                setReceiptContent(receipt.html || 'Receipt generated');
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
        onConfirmPayment={handleCheckoutConfirm}
      />
      <PosReceiptDialog
        open={receiptOpen}
        onClose={() => setReceiptOpen(false)}
        htmlContent={receiptContent}
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
