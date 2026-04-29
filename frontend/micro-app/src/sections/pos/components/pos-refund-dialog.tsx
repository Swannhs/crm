import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';
import { SUPPORTED_FEATURES } from '../services/pos-service';

interface PosRefundDialogProps {
  open: boolean;
  onClose: () => void;
  orderId?: string;
}

export const PosRefundDialog: React.FC<PosRefundDialogProps> = ({ open, onClose, orderId }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Refund Order {orderId}</DialogTitle>
      <DialogContent>
        {!SUPPORTED_FEATURES.ORDERS ? (
          <Typography color="error">Refund API is currently unavailable.</Typography>
        ) : (
          <>
            <TextField
              fullWidth
              label="Refund Reason"
              required
              margin="normal"
              placeholder="Enter reason..."
            />
            <TextField
              fullWidth
              label="Amount"
              type="number"
              required
              margin="normal"
            />
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" color="error" disabled={!SUPPORTED_FEATURES.ORDERS}>
          Process Refund
        </Button>
      </DialogActions>
    </Dialog>
  );
};
