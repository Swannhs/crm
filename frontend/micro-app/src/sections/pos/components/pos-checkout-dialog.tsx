import React from 'react';
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { SUPPORTED_FEATURES } from '../services/pos-service';

interface PosCheckoutDialogProps {
  open: boolean;
  onClose: () => void;
}

export const PosCheckoutDialog: React.FC<PosCheckoutDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        {!SUPPORTED_FEATURES.CHECKOUT ? (
          <Typography color="error">
            Checkout API is currently unavailable.
          </Typography>
        ) : (
          <Box>
            <Typography variant="subtitle1" gutterBottom>Select Payment Method</Typography>
            <Box display="flex" gap={1}>
              {/* Payment methods will be dynamic from API context once available */}
              <Typography color="text.secondary">No payment methods configured.</Typography>
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" disabled={!SUPPORTED_FEATURES.CHECKOUT}>
          Complete Payment
        </Button>
      </DialogActions>
    </Dialog>
  );
};
