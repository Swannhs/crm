import React, { useState, useEffect } from 'react';
import { Box, TextField, CircularProgress } from '@mui/material';
import { posService, SUPPORTED_FEATURES } from '../services/pos-service';
import { PosEmptyState } from './pos-empty-state';
import { PosErrorState } from './pos-error-state';

export const PosProductGrid: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (SUPPORTED_FEATURES.PRODUCTS) {
      // In a real scenario, this would fetch products based on search
      // posService.getProducts()...
    }
  }, [search]);

  if (!SUPPORTED_FEATURES.PRODUCTS) {
    return <PosEmptyState message="Products API not configured" description="The endpoint /api/pos/products is currently unsupported." />;
  }

  if (loading) {
    return <Box display="flex" justifyContent="center" p={4}><CircularProgress /></Box>;
  }

  if (error) {
    return <PosErrorState message="Failed to load products" />;
  }

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box p={2}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search product name / SKU / barcode..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
      </Box>
      <Box flex={1} overflow="auto" p={2}>
        <PosEmptyState message="No products found" />
      </Box>
    </Box>
  );
};
