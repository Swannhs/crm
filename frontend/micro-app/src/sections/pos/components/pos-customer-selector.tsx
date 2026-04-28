import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, CircularProgress, List, ListItem, ListItemText, ListItemButton, Button } from '@mui/material';
import { posService, SUPPORTED_FEATURES } from '../services/pos-service';
import { PosErrorState } from './pos-error-state';

export const PosCustomerSelector: React.FC = () => {
  const [query, setQuery] = useState('');
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!SUPPORTED_FEATURES.CUSTOMERS) return;

    const fetchCustomers = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await posService.getCustomers(query);
        setCustomers(Array.isArray(data) ? data : data?.items || []);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    const debounceId = setTimeout(() => {
      fetchCustomers();
    }, 300);

    return () => clearTimeout(debounceId);
  }, [query]);

  return (
    <Box p={2} borderBottom={1} borderColor="divider">
      <Typography variant="subtitle2" gutterBottom>Customer</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Walk-in customer / Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="small"
        sx={{ mb: 1 }}
      />
      {error && <PosErrorState message="Could not load customers" />}
      {!error && loading && <CircularProgress size={20} />}
      {!error && !loading && customers.length > 0 && (
        <List dense sx={{ maxHeight: 150, overflow: 'auto', border: 1, borderColor: 'divider', borderRadius: 1 }}>
          {customers.map((c: any) => (
            <ListItem key={c.id || c.name} disablePadding>
              <ListItemButton>
                <ListItemText primary={c.name} secondary={c.phone || c.email} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
      <Box mt={1}>
        <Button size="small" variant="text" disabled={!SUPPORTED_FEATURES.CUSTOMERS}>
          + Create new customer
        </Button>
      </Box>
    </Box>
  );
};
