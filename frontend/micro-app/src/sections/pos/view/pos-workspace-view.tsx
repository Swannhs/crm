import React from 'react';
import { Box } from '@mui/material';
import { PosHeader } from '../components/pos-header';
import { PosProductGrid } from '../components/pos-product-grid';
import { PosCart } from '../components/pos-cart';
import { PosCustomerSelector } from '../components/pos-customer-selector';
import { PosPaymentPanel } from '../components/pos-payment-panel';

export default function PosWorkspaceView() {
  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden" bgcolor="background.default">
      <PosHeader />

      <Box display="flex" flex={1} overflow="hidden">
        {/* Left Side: Products */}
        <Box flex={2} borderRight={1} borderColor="divider" bgcolor="background.paper" overflow="hidden">
          <PosProductGrid />
        </Box>

        {/* Right Side: Cart & Checkout */}
        <Box flex={1} display="flex" flexDirection="column" minWidth={350} bgcolor="background.paper">
          <PosCustomerSelector />
          <Box flex={1} overflow="hidden">
            <PosCart />
          </Box>
          <Box borderTop={1} borderColor="divider">
            <PosPaymentPanel />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
