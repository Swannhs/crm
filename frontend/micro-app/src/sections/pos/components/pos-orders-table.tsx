import React from 'react';
import { Box, Typography } from '@mui/material';
import { SUPPORTED_FEATURES } from '../services/pos-service';
import { PosEmptyState } from './pos-empty-state';

export const PosOrdersTable: React.FC = () => {
  if (!SUPPORTED_FEATURES.ORDERS) {
    return <PosEmptyState message="Orders API not configured" />;
  }

  return (
    <Box p={2}>
      <Typography variant="h6">Order History</Typography>
      <PosEmptyState message="No orders found" />
    </Box>
  );
};
