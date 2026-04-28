import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { PosCheckoutDialog } from './pos-checkout-dialog';
import { SUPPORTED_FEATURES } from '../services/pos-service';

export const PosPaymentPanel: React.FC = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <Box p={2}>
      <Button
        fullWidth
        variant="contained"
        size="large"
        disabled={!SUPPORTED_FEATURES.CHECKOUT}
        onClick={() => setCheckoutOpen(true)}
      >
        Checkout
      </Button>
      <PosCheckoutDialog open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </Box>
  );
};
