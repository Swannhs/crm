import React from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import { SUPPORTED_FEATURES } from '../services/pos-service';
import { PosEmptyState } from './pos-empty-state';

export const PosCart: React.FC = () => {
  if (!SUPPORTED_FEATURES.CART) {
    return <PosEmptyState message="Cart API not configured" description="The endpoint /api/pos/cart is currently unsupported." />;
  }

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box p={2} borderBottom={1} borderColor="divider" display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Cart</Typography>
        <Button size="small" color="error" disabled>Clear</Button>
      </Box>
      <Box flex={1} overflow="auto" p={2}>
        <PosEmptyState message="Cart is empty" />
      </Box>
      <Divider />
      <Box p={2}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color="text.secondary">Subtotal</Typography>
          <Typography>0.00</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color="text.secondary">Tax</Typography>
          <Typography>0.00</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="subtitle1" fontWeight="bold">Total</Typography>
          <Typography variant="subtitle1" fontWeight="bold">0.00</Typography>
        </Box>
      </Box>
    </Box>
  );
};
